// ============================================================
// FESSTALE MOVIE - CLOUDFLARE WORKER v29
// 100% Telegram Mini App Only
// v29 Changes:
// - Room Party private/public (visibility column)
// - Host watch quota deduction in party
// - Player host-only control enforcement
// - Coin transfer antar user + notif bot
// - Telegram username change 15.000 koin
// - All previous v28 features preserved
// ============================================================

import { HTML_PAGE } from './view.js';

const CONFIG = {
    HASH_SALT: 'fesstale_movie_secure_salt_2025_v2',
    TOKEN_EXPIRY: 60 * 60 * 24 * 7,
    FREE_DAILY_LIMIT: 20,
    FREE_EXTRA_LIMIT: 50,
    EXTRA_VIEW_PRICE: 100,
    KOIN_PER_VIEW: 5,
    KOIN_PER_COMMENT: 10,
    KOIN_CHECKIN: 25,
    KOIN_GALLERY_UPLOAD: 10,
    EXP_PER_VIEW: 10,
    EXP_PER_COMMENT: 15,
    EXP_CHECKIN: 200,
    EXP_PER_REACTION: 5,
    EXP_PER_GALLERY_LIKE: 5,
    EXP_PER_GALLERY_UPLOAD: 10,
    EXP_PER_GIFT_RECEIVE: 0,
    VIP_PRICE_KOIN: 50000,
    VIP_DURATION_DAYS: 366,
    MAX_DAILY_KOIN: 1000,
    USERNAME_CHANGE_COOLDOWN_DAYS: 30,
    USERNAME_CHANGE_RESET_COST: 5000,
    GALLERY_PRICE_MAX: 1000000,
    GALLERY_CAPTION_MAX: 2000,
    GALLERY_MAX_MEDIA_PER_POST: 10,
    COMMENT_MAX_LENGTH: 2000,
    BIO_MAX_LENGTH: 500,
    REFERRAL_BONUS_REGISTER: 1000,
    REFERRAL_BONUS_EMAIL: 500,
    REFERRAL_BONUS_PHONE: 1000,
    REFERRAL_BONUS_PREMIUM: 5000,
    TELEGRAM_AUTH_MAX_AGE_SECONDS: 86400,
    TELEGRAM_CHANGE_COST: 15000,
    MIN_COIN_TRANSFER: 1,
    MAX_COIN_TRANSFER: 1000000
};

// ============================================================
// UTILITIES
// ============================================================
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + CONFIG.HASH_SALT);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
function generateToken(length = 64) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}
function generateId() { return Date.now().toString(36) + Math.random().toString(36).substring(2, 10); }
function generateReferralCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const array = new Uint8Array(8);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => chars[b % chars.length]).join('');
}
function generatePartyCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const array = new Uint8Array(6);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => chars[b % chars.length]).join('');
}
function formatDateWIB(isoString) {
    if (!isoString) return '-';
    try {
        const date = new Date(isoString);
        return date.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) { return '-'; }
}
function jsonResponse(data, status = 200, headers = {}) {
    return new Response(JSON.stringify(data), {
        status, headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'X-Content-Type-Options': 'nosniff', ...headers
        }
    });
}
// Tabel belum dibuat (schema.sql belum dijalankan) → pesan yang langsung menunjuk solusinya
function dbHint(e) {
    const msg = String((e && e.message) || e || '');
    return /no such table/i.test(msg) ? 'Tabel database belum dibuat. Jalankan worker/schema.sql di D1 terlebih dahulu.' : msg;
}
function errorResponse(message, status = 400) { return jsonResponse({ success: false, error: message }, status); }
function successResponse(data = null, message = 'Success', cacheControl = null) {
    const headers = {};
    if (cacheControl) headers['Cache-Control'] = cacheControl;
    return jsonResponse({ success: true, message, data }, 200, headers);
}
function extractToken(request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
    return authHeader.substring(7);
}
function getSecurityHeaders(cacheControl) {
    return {
        'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block', 'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
        'Cache-Control': cacheControl || 'public, max-age=0, must-revalidate'
    };
}
function formatDuration(minutes) {
    if (!minutes) return '';
    const h = Math.floor(minutes / 60), m = minutes % 60;
    if (h > 0) return `${h}j ${m}m`;
    return `${m}m`;
}
function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;
    const trimmed = email.trim();
    if (trimmed.includes('+')) return false;
    return /^[^\s+@]+@gmail\.com$/i.test(trimmed);
}
function isScraping(request) {
    const origin = request.headers.get('Origin');
    const userAgent = request.headers.get('User-Agent') || '';
    if (/bot|crawler|spider|scraper|python|curl|wget|httpclient|scrapy|puppeteer|playwright|selenium|headless|phantom|node-fetch|axios|got\//i.test(userAgent)) return true;
    const url = new URL(request.url);
    if (origin && !origin.includes(url.hostname) && !origin.includes('localhost') && !origin.includes('127.0.0.1')) return true;
    return false;
}
function isTrustedOrigin(request) {
    const origin = request.headers.get('Origin');
    const referer = request.headers.get('Referer');
    const host = new URL(request.url).hostname;
    if (origin && !origin.includes(host) && !origin.includes('localhost') && !origin.includes('127.0.0.1')) return false;
    if (referer) {
        try {
            const refHost = new URL(referer).hostname;
            if (refHost !== host && refHost !== 'localhost' && refHost !== '127.0.0.1') return false;
        } catch (e) {}
    }
    return true;
}
function isPlayerRequestSafe(request) {
    if (isScraping(request)) return false;
    if (!isTrustedOrigin(request)) return false;
    return true;
}
function escapeHtmlBasic(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeMd(text) {
    if (!text) return '';
    return String(text).replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
}
function formatKoin(n) {
    if (!n && n !== 0) return '0';
    return Number(n).toLocaleString('id-ID');
}

// ============================================================
// TELEGRAM HASH VERIFICATION
// ============================================================
async function verifyTelegramWebAppData(initData, botToken) {
    try {
        if (!initData || !botToken) return false;
        const urlParams = new URLSearchParams(initData);
        const hash = urlParams.get('hash');
        if (!hash) return false;
        const authDate = parseInt(urlParams.get('auth_date') || '0', 10);
        const now = Math.floor(Date.now() / 1000);
        if (!authDate || (now - authDate) > CONFIG.TELEGRAM_AUTH_MAX_AGE_SECONDS) return false;
        if (authDate > now + 300) return false;
        urlParams.delete('hash');
        urlParams.sort();
        let dataCheckString = '';
        for (const [key, value] of urlParams.entries()) {
            dataCheckString += `${key}=${value}\n`;
        }
        dataCheckString = dataCheckString.slice(0, -1);
        const encoder = new TextEncoder();
        const secretKey = await crypto.subtle.importKey('raw', encoder.encode('WebAppData'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
        const botTokenHash = await crypto.subtle.sign('HMAC', secretKey, encoder.encode(botToken));
        const finalKey = await crypto.subtle.importKey('raw', botTokenHash, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
        const signature = await crypto.subtle.sign('HMAC', finalKey, encoder.encode(dataCheckString));
        const computedHash = Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
        return computedHash === hash;
    } catch (e) { return false; }
}

// ============================================================
// UPSERT TELEGRAM USER
// ============================================================
async function upsertTelegramUser(env, payload, ip, savedRef) {
    const telegramId = String(payload.id || payload.sub);
    if (!telegramId) throw new Error('Missing telegram ID');
    let baseUsername = (payload.username || `tg_${telegramId}`).toLowerCase().replace(/[^a-z0-9_]/g, '');
    if (!baseUsername || baseUsername.length < 3) baseUsername = `tg_${telegramId}`;
    if (baseUsername.length > 30) baseUsername = baseUsername.substring(0, 30);
    const displayName = [payload.first_name, payload.last_name].filter(Boolean).join(' ').trim() || baseUsername;
    const photoUrl = payload.photo_url || null;
    if (ip) {
        try {
            const blocked = await env.DB.prepare('SELECT id FROM blocked_ips WHERE ip_address = ?').bind(ip).first();
            if (blocked) throw new Error('IP_BLOCKED');
        } catch (e) { if (e.message === 'IP_BLOCKED') throw e; }
    }
    let user = await env.DB.prepare('SELECT * FROM users WHERE telegram_id = ?').bind(telegramId).first();
    let isNew = false;
    if (!user) {
        const existingByUsername = await env.DB.prepare('SELECT * FROM users WHERE username = ?').bind(baseUsername).first();
        if (existingByUsername) {
            await env.DB.prepare('UPDATE users SET telegram_id = ?, telegram = COALESCE(telegram, ?), updated_at = datetime("now") WHERE id = ?').bind(telegramId, baseUsername, existingByUsername.id).run();
            user = { ...existingByUsername, telegram_id: telegramId };
            if (savedRef && /^[A-Z0-9]{4,10}$/.test(savedRef)) {
                try {
                    const refInfo = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first();
                    if (refInfo && !refInfo.referred_by) await processReferralOnRegister(env, user.id, savedRef);
                } catch (e) {}
            }
        } else {
            let finalUsername = baseUsername;
            let attempt = 0;
            while (attempt < 10) {
                const dupe = await env.DB.prepare('SELECT id FROM users WHERE username = ?').bind(finalUsername).first();
                if (!dupe) break;
                attempt++;
                finalUsername = `${baseUsername}_${Math.floor(Math.random() * 9999)}`.substring(0, 30);
            }
            const userCount = await env.DB.prepare('SELECT COUNT(*) as count FROM users').first();
            const isFirstUser = userCount.count === 0;
            const role = isFirstUser ? 'admin' : 'user';
            const isVip = isFirstUser ? 1 : 0;
            const vipExpires = isFirstUser ? new Date(Date.now() + 366 * 24 * 60 * 60 * 1000).toISOString() : null;
            const emailPlaceholder = `tg_${telegramId}@telegram.local`;
            const result = await env.DB.prepare(
                `INSERT INTO users (username, display_name, email, password_hash, role, is_vip, vip_expires_at,
                 koin, level, exp, email_verified, is_verified, telegram, telegram_id, notifications_enabled, ip_address, avatar_url, created_at, updated_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?, 1000, 1, 0, 1, 0, ?, ?, 1, ?, ?, datetime('now'), datetime('now'))
                 RETURNING *`
            ).bind(finalUsername, displayName, emailPlaceholder, 'tg_no_password', role, isVip, vipExpires, baseUsername, telegramId, ip || null, photoUrl).first();
            user = result;
            isNew = true;
            try { await ensureUserReferralCode(env, user.id); } catch (e) {}
            if (savedRef && /^[A-Z0-9]{4,10}$/.test(savedRef)) {
                try { await processReferralOnRegister(env, user.id, savedRef); } catch (e) {}
            }
        }
    } else {
        await env.DB.prepare('UPDATE users SET telegram = ?, updated_at = datetime("now") WHERE id = ?').bind(baseUsername, user.id).run();
        if (savedRef && /^[A-Z0-9]{4,10}$/.test(savedRef)) {
            try {
                const existingRef = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first();
                if (existingRef && !existingRef.referred_by) await processReferralOnRegister(env, user.id, savedRef);
            } catch (e) {}
        }
    }
    let isVip = user.is_vip === 1;
    if (isVip && user.vip_expires_at && new Date(user.vip_expires_at) < new Date()) {
        isVip = false;
        await env.DB.prepare("UPDATE users SET is_vip = 0, vip_expires_at = NULL WHERE id = ?").bind(user.id).run();
    }
    const token = generateToken();
    const expiresAt = new Date(Date.now() + CONFIG.TOKEN_EXPIRY * 1000).toISOString();
    await env.DB.prepare('INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)').bind(user.id, token, expiresAt).run();
    return {
        token, isNew,
        user: {
            id: user.id, username: user.username, displayName: user.display_name || user.username,
            email: user.email, role: user.role, isVip: isVip, vipExpiresAt: user.vip_expires_at,
            koin: user.koin || 0, level: user.level || 1, exp: user.exp || 0,
            avatarUrl: user.avatar_url, isVerified: user.is_verified === 1, telegramId: telegramId
        }
    };
}

async function handleTelegramWebAppLogin(request, env) {
    try {
        const botToken = env.TELEGRAM_BOT_TOKEN;
        if (!botToken) return errorResponse('Telegram bot token belum dikonfigurasi admin', 500);
        const body = await request.json();
        if (!body || !body.initData) return errorResponse('Data Mini App tidak lengkap', 400);
        const isValid = await verifyTelegramWebAppData(body.initData, botToken);
        if (!isValid) return errorResponse('Verifikasi keamanan Mini App gagal', 401);
        const urlParams = new URLSearchParams(body.initData);
        const userString = urlParams.get('user');
        if (!userString) return errorResponse('Data user tidak ditemukan', 400);
        const tgUser = JSON.parse(userString);
        let savedRef = null;
        if (body.startParam && typeof body.startParam === 'string' && !/^[a-z]_/i.test(body.startParam.trim())) {
            const sp = body.startParam.trim().toUpperCase();
            if (/^[A-Z0-9]{4,10}$/.test(sp)) savedRef = sp;
        }
        if (!savedRef && body.referralCode && typeof body.referralCode === 'string') {
            const rc = body.referralCode.trim().toUpperCase();
            if (/^[A-Z0-9]{4,10}$/.test(rc)) savedRef = rc;
        }
        const ip = request.headers.get('CF-Connecting-IP');
        let result;
        try { result = await upsertTelegramUser(env, tgUser, ip, savedRef); }
        catch (e) {
            if (e.message === 'IP_BLOCKED') return errorResponse('Alamat IP kamu diblokir oleh admin', 403);
            throw e;
        }
        return successResponse(result, result.isNew ? 'Akun Telegram berhasil dibuat! 🎉' : 'Login Telegram berhasil!');
    } catch (e) {
        console.error('handleTelegramWebAppLogin error:', e);
        return errorResponse('Gagal login Telegram Mini App: ' + dbHint(e), 500);
    }
}

// ============================================================
// TELEGRAM BOT HELPERS
// ============================================================
async function sendTelegramMessage(env, chatId, text, options = {}) {
    try {
        const botToken = env.TELEGRAM_BOT_TOKEN;
        if (!botToken) return { ok: false, error: 'no bot token' };
        const body = {
            chat_id: chatId, text: text,
            parse_mode: options.parse_mode || 'Markdown',
            disable_web_page_preview: true, ...options
        };
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
        });
        const json = await res.json();
        if (!json.ok && options.parse_mode !== undefined && json.description && json.description.indexOf('parse') !== -1) {
            delete body.parse_mode;
            const retry = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
            });
            return await retry.json();
        }
        return json;
    } catch (e) { console.error('sendTelegramMessage error:', e); return { ok: false, error: e.message }; }
}

async function buildProfileMessage(env, user) {
    const nextLevel = await env.DB.prepare('SELECT exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level || 1).first();
    const dailyWatch = await checkDailyWatchLimit(env, user.id, user.is_vip === 1);
    const vipText = user.is_vip ? '👑 *VIP Member*' : '👤 Member';
    const verifyText = user.is_verified ? '✅ Terverifikasi' : '⚪ Belum verifikasi';
    return `👤 *PROFIL FESSTALE*\n\n*Username:* @${escapeMd(user.username)}\n*Nama:* ${escapeMd(user.display_name || user.username)}\n*Status:* ${vipText}\n${verifyText}\n\n💰 *Koin:* ${formatKoin(user.koin || 0)}\n⭐ *Level:* ${user.level || 1}\n✨ *EXP:* ${user.exp || 0}${nextLevel ? ` / ${nextLevel.exp_required}` : ''}\n👁️ *Nonton hari ini:* ${dailyWatch.used}/${dailyWatch.limit || '∞'}\n\n📅 *Bergabung:* ${formatDateWIB(user.created_at)}\n\n🌐 ${env.SITE_URL || 'https://ngefilm.dpdns.org'}`;
}

async function notifyNewSeries(env, seriesId) {
    try {
        const series = await env.DB.prepare('SELECT id, title, poster_url, total_episodes FROM manual_content WHERE id = ?').bind(seriesId).first();
        if (!series) return;
        const users = await env.DB.prepare('SELECT telegram_id FROM users WHERE telegram_id IS NOT NULL AND notifications_enabled = 1').all();
        if (!users.results || users.results.length === 0) return;
        const msg = `🎬 *SERIES BARU!*\n\n*${escapeMd(series.title)}*\n\n📺 Total Episode: ${series.total_episodes || 0}\n🆕 Segera tonton di Fesstale!\n\n👉 Buka aplikasi di menu bot`;
        for (const u of users.results) {
            try { await sendTelegramMessage(env, u.telegram_id, msg); await new Promise(r => setTimeout(r, 40)); } catch (e) {}
        }
    } catch (e) { console.error('notifyNewSeries error:', e); }
}

async function notifyNewEpisode(env, seriesId, episodeNumber) {
    try {
        const series = await env.DB.prepare('SELECT id, title FROM manual_content WHERE id = ?').bind(seriesId).first();
        if (!series) return;
        const users = await env.DB.prepare('SELECT telegram_id FROM users WHERE telegram_id IS NOT NULL AND notifications_enabled = 1').all();
        if (!users.results || users.results.length === 0) return;
        const msg = `🎬 *EPISODE BARU!*\n\n*${escapeMd(series.title)}*\n📺 Episode ${episodeNumber} sudah tersedia!\n\n👉 Buka aplikasi di menu bot`;
        for (const u of users.results) {
            try { await sendTelegramMessage(env, u.telegram_id, msg); await new Promise(r => setTimeout(r, 40)); } catch (e) {}
        }
    } catch (e) { console.error('notifyNewEpisode error:', e); }
}

async function notifyGiftReceived(env, targetUserId, senderUser, gift) {
    try {
        const receiver = await env.DB.prepare('SELECT telegram_id, notifications_enabled, display_name, username FROM users WHERE id = ?').bind(targetUserId).first();
        if (!receiver) return { ok: false, reason: 'receiver_not_found' };
        if (!receiver.telegram_id) return { ok: false, reason: 'no_telegram_id' };
        if (!receiver.notifications_enabled) return { ok: false, reason: 'notifications_disabled' };
        const senderName = senderUser.displayName || senderUser.username || 'User';
        const msg = `🎁 *Kamu menerima Gift!*\n\n*${escapeMd(gift.name)}*\n\nDari: *${escapeMd(senderName)}*\n+${gift.exp_reward} EXP\n\nBuka aplikasi untuk melihat!`;
        const res = await sendTelegramMessage(env, receiver.telegram_id, msg);
        return res;
    } catch (e) {
        console.error('notifyGiftReceived error:', e);
        return { ok: false, reason: e.message };
    }
}

// ⭐ NEW: Notifikasi transfer koin via bot
async function notifyCoinTransfer(env, senderUser, receiverUser, amount) {
    try {
        if (receiverUser.telegram_id && receiverUser.notifications_enabled) {
            const senderName = senderUser.display_name || senderUser.username || 'User';
            const msg = `💰 *Kamu menerima transfer koin!*\n\n*+${formatKoin(amount)} koin*\n\nDari: *${escapeMd(senderName)}* (@${escapeMd(senderUser.username)})\n\nBuka aplikasi untuk cek saldo.`;
            await sendTelegramMessage(env, receiverUser.telegram_id, msg);
        }
        if (senderUser.telegram_id && senderUser.notifications_enabled) {
            const receiverName = receiverUser.display_name || receiverUser.username || 'User';
            const msg = `✅ *Transfer koin berhasil!*\n\n*−${formatKoin(amount)} koin*\n\nKe: *${escapeMd(receiverName)}* (@${escapeMd(receiverUser.username)})\n\nBuka aplikasi untuk cek saldo.`;
            await sendTelegramMessage(env, senderUser.telegram_id, msg);
        }
        return { ok: true };
    } catch (e) {
        console.error('notifyCoinTransfer error:', e);
        return { ok: false };
    }
}

async function notifyCommentReply(env, parentCommentUserId, commenterUser, contentTitle, contentId, isGallery, postId) {
    try {
        if (parentCommentUserId === commenterUser.id) return;
        const parentUser = await env.DB.prepare('SELECT telegram_id, notifications_enabled, display_name, username FROM users WHERE id = ?').bind(parentCommentUserId).first();
        if (!parentUser || !parentUser.telegram_id || !parentUser.notifications_enabled) return;
        const commenterName = commenterUser.displayName || commenterUser.username || 'User';
        const label = isGallery ? 'Story' : 'Series';
        const msg = `💬 *Balasan Baru!*\n\n*${escapeMd(commenterName)}* membalas komentar kamu di ${label} *${escapeMd(contentTitle)}*.\n\nBuka aplikasi untuk melihat!`;
        await sendTelegramMessage(env, parentUser.telegram_id, msg);
    } catch (e) { console.error('notifyCommentReply error:', e); }
}

async function notifyNewCommentToAdmins(env, commenterUser, contentTitle, isGallery) {
    try {
        const admins = await env.DB.prepare("SELECT telegram_id, notifications_enabled FROM users WHERE role = 'admin' AND telegram_id IS NOT NULL AND notifications_enabled = 1").all();
        if (!admins.results || admins.results.length === 0) return;
        const commenterName = commenterUser.displayName || commenterUser.username || 'User';
        const label = isGallery ? 'Story' : 'Series';
        const msg = `💬 *Komentar Baru*\n\n*${escapeMd(commenterName)}* berkomentar di ${label} *${escapeMd(contentTitle)}*.\n\nBuka aplikasi untuk melihat!`;
        for (const a of admins.results) {
            try { await sendTelegramMessage(env, a.telegram_id, msg); } catch (e) {}
        }
    } catch (e) { console.error('notifyNewCommentToAdmins error:', e); }
}

// ============================================================
// TELEGRAM BOT WEBHOOK
// ============================================================
async function handleTelegramWebhook(request, env) {
    try {
        const botToken = env.TELEGRAM_BOT_TOKEN;
        if (!botToken) return jsonResponse({ ok: false, error: 'no bot token' }, 200);
        const expectedSecret = env.TELEGRAM_WEBHOOK_SECRET;
        if (expectedSecret) {
            const providedSecret = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
            if (providedSecret !== expectedSecret) return new Response('Unauthorized', { status: 401 });
        }
        let update;
        try { update = await request.json(); } catch (e) { return jsonResponse({ ok: true }); }
        // Telegram Stars: konfirmasi sebelum pembayaran
        if (update.pre_checkout_query) { await handleStarsPreCheckout(env, update.pre_checkout_query); return jsonResponse({ ok: true }); }
        const message = update.message || update.edited_message;
        if (!message || !message.chat) return jsonResponse({ ok: true });
        const chatId = message.chat.id;
        // Telegram Stars: pembayaran berhasil -> tambahkan koin
        if (message.successful_payment) { await handleStarsSuccessfulPayment(env, message); return jsonResponse({ ok: true }); }
        const text = (message.text || '').trim();
        const from = message.from || {};
        const telegramId = String(from.id || '');
        if (!telegramId) return jsonResponse({ ok: true });
        const user = await env.DB.prepare('SELECT * FROM users WHERE telegram_id = ?').bind(telegramId).first();

        if (text.startsWith('/paysupport')) {
            await sendTelegramMessage(env, chatId, '💬 *Bantuan pembayaran*\n\nAda masalah dengan top up Telegram Stars (koin belum masuk, salah beli)? Kirim pesan ke admin beserta waktu pembayaran dan username kamu. Kami akan memeriksanya.');
            return jsonResponse({ ok: true });
        }
        if (text.startsWith('/start')) {
            const parts = text.split(/\s+/);
            let refCode = parts[1] ? parts[1].trim() : null;
            const siteUrl = env.SITE_URL || 'https://ngefilm.dpdns.org';
            if (refCode && !/^[A-Z0-9]{4,10}$/.test(refCode.toUpperCase())) refCode = null;
            if (refCode) refCode = refCode.toUpperCase();
            const miniAppUrl = refCode ? `${siteUrl}?ref=${refCode}` : siteUrl;
            const webAppMarkup = { inline_keyboard: [[{ text: "Buka Fesstale Movie 🎬", web_app: { url: miniAppUrl } }]] };
            if (!user) {
                let welcome = `🎬 *Selamat datang di Fesstale Movie Bot!*\n\n`;
                welcome += `Halo *${escapeMd(from.first_name || 'Kak')}*! 👋\n\n`;
                welcome += `Tempat seru buat kamu nonton drakor series & episode berkualitas HD secara gratis!\n\n`;
                welcome += `📌 Klik tombol di bawah untuk mulai. Akun kamu akan otomatis dibuat dari data Telegram.`;
                if (refCode) welcome += `\n\n🎁 *Kode referral:* \`${refCode}\`\nKode ini akan diterapkan otomatis saat kamu membuka aplikasi.`;
                await sendTelegramMessage(env, chatId, welcome, { reply_markup: webAppMarkup });
                return jsonResponse({ ok: true });
            }
            let welcomeBack = `👋 Halo lagi, *${escapeMd(user.display_name || user.username)}*!\n\n📌 Klik tombol di bawah untuk lanjut menonton.`;
            if (refCode) welcomeBack += `\n\n🎁 *Kode referral terdeteksi:* \`${refCode}\`\n_Buka aplikasi untuk menerapkan._`;
            await sendTelegramMessage(env, chatId, welcomeBack, { reply_markup: webAppMarkup });
            return jsonResponse({ ok: true });
        }

        if (text === '/help' || text === '/bantuan') {
            let help = `📖 *BANTUAN FESSTALE BOT*\n\n*Perintah User:*\n/profile - Lihat profil\n/series - 10 series terbaru\n/notifications - Atur notifikasi\n/notif_on - Aktifkan notifikasi\n/notif_off - Matikan notifikasi\n/help - Bantuan\n\n`;
            if (user && user.role === 'admin') help += `*Perintah Admin:*\n/broadcast <pesan>\n/stats\n/setup_webhook\n\n`;
            help += `🌐 Buka aplikasi via tombol di menu /start`;
            await sendTelegramMessage(env, chatId, help);
            return jsonResponse({ ok: true });
        }

        if (!user) {
            await sendTelegramMessage(env, chatId, `⚠️ Akun Telegram kamu belum terhubung ke Fesstale.\n\nSilakan klik tombol di menu /start untuk membuka aplikasi dan login otomatis.`);
            return jsonResponse({ ok: true });
        }

        if (text === '/profile' || text === '/profil') { await sendTelegramMessage(env, chatId, await buildProfileMessage(env, user)); return jsonResponse({ ok: true }); }

        if (text === '/series' || text === '/drakor') {
            const series = await env.DB.prepare('SELECT id, title, latest_episode_number, total_episodes FROM manual_content WHERE is_active = 1 ORDER BY COALESCE(updated_at, created_at) DESC LIMIT 10').all();
            if (!series.results || series.results.length === 0) { await sendTelegramMessage(env, chatId, '📭 Belum ada series tersedia.'); return jsonResponse({ ok: true }); }
            let msg = `📺 *10 SERIES TERBARU*\n\n`;
            series.results.forEach((s, i) => { const eps = s.latest_episode_number ? ` _(${s.latest_episode_number}/${s.total_episodes || s.latest_episode_number} eps)_` : ''; msg += `${i + 1}. *${escapeMd(s.title)}*${eps}\n`; });
            msg += `\n👉 Buka aplikasi di menu bot untuk menonton`;
            await sendTelegramMessage(env, chatId, msg);
            return jsonResponse({ ok: true });
        }

        if (text === '/notifications' || text === '/notif') {
            const status = user.notifications_enabled ? '✅ *AKTIF*' : '❌ *NONAKTIF*';
            await sendTelegramMessage(env, chatId, `🔔 *Pengaturan Notifikasi*\n\nStatus saat ini: ${status}\n\nGunakan:\n• /notif_on - Aktifkan\n• /notif_off - Matikan\n\n_Notifikasi akan dikirim saat ada series/episode baru, gift, transfer koin, dan balasan komentar._`);
            return jsonResponse({ ok: true });
        }
        if (text === '/notif_on') { await env.DB.prepare('UPDATE users SET notifications_enabled = 1 WHERE id = ?').bind(user.id).run(); await sendTelegramMessage(env, chatId, '✅ *Notifikasi diaktifkan*'); return jsonResponse({ ok: true }); }
        if (text === '/notif_off') { await env.DB.prepare('UPDATE users SET notifications_enabled = 0 WHERE id = ?').bind(user.id).run(); await sendTelegramMessage(env, chatId, '❌ *Notifikasi dimatikan*'); return jsonResponse({ ok: true }); }

        if (user.role === 'admin') {
            if (text.startsWith('/broadcast ') || text.startsWith('/broadcast\n')) {
                const broadcastMsg = text.replace(/^\/broadcast\s*/, '').trim();
                if (!broadcastMsg) { await sendTelegramMessage(env, chatId, '❌ Format: `/broadcast <pesan kamu>`'); return jsonResponse({ ok: true }); }
                await sendTelegramMessage(env, chatId, `📢 Memulai broadcast ke semua user...`);
                const allUsers = await env.DB.prepare('SELECT telegram_id FROM users WHERE telegram_id IS NOT NULL AND notifications_enabled = 1').all();
                let success = 0, failed = 0;
                const total = allUsers.results.length;
                for (let i = 0; i < total; i++) {
                    const u = allUsers.results[i];
                    try { await sendTelegramMessage(env, u.telegram_id, `📢 *Pengumuman dari Admin*\n\n${broadcastMsg}`); success++; } catch (e) { failed++; }
                    await new Promise(r => setTimeout(r, 50));
                    if ((i + 1) % 50 === 0 && i + 1 < total) await sendTelegramMessage(env, chatId, `⏳ Progress: ${i + 1}/${total} (✅${success} ❌${failed})`);
                }
                await sendTelegramMessage(env, chatId, `✅ *Broadcast selesai*\n\n📤 Terkirim: ${success}\n❌ Gagal: ${failed}\n👥 Total: ${total}`);
                return jsonResponse({ ok: true });
            }
            if (text === '/stats') {
                const userCount = await env.DB.prepare('SELECT COUNT(*) as c FROM users').first();
                const tgLinked = await env.DB.prepare('SELECT COUNT(*) as c FROM users WHERE telegram_id IS NOT NULL').first();
                const seriesCount = await env.DB.prepare('SELECT COUNT(*) as c FROM manual_content WHERE is_active = 1').first();
                const epCount = await env.DB.prepare('SELECT COUNT(*) as c FROM episodes WHERE is_active = 1').first();
                const notifOn = await env.DB.prepare('SELECT COUNT(*) as c FROM users WHERE notifications_enabled = 1 AND telegram_id IS NOT NULL').first();
                const vipCount = await env.DB.prepare('SELECT COUNT(*) as c FROM users WHERE is_vip = 1').first();
                await sendTelegramMessage(env, chatId, `📊 *STATISTIK FESSTALE*\n\n👥 Total User: ${userCount.c}\n📱 User Telegram: ${tgLinked.c}\n🔔 Notif Aktif: ${notifOn.c}\n👑 VIP: ${vipCount.c}\n\n📺 Total Series: ${seriesCount.c}\n🎬 Total Episode: ${epCount.c}`);
                return jsonResponse({ ok: true });
            }
            if (text === '/setup_webhook') {
                const url = new URL(request.url);
                const webhookUrl = `${url.origin}/api/telegram/webhook`;
                const body = { url: webhookUrl, allowed_updates: ['message', 'edited_message', 'pre_checkout_query'] };
                if (env.TELEGRAM_WEBHOOK_SECRET) body.secret_token = env.TELEGRAM_WEBHOOK_SECRET;
                const res = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
                const data = await res.json();
                await sendTelegramMessage(env, chatId, data.ok ? `✅ *Webhook berhasil diset!*\n\nURL: \`${webhookUrl}\`` : `❌ *Gagal set webhook:*\n${JSON.stringify(data)}`);
                return jsonResponse({ ok: true });
            }
        }

        await sendTelegramMessage(env, chatId, `❓ Perintah tidak dikenali: \`${escapeMd(text.substring(0, 50))}\`\n\nKetik /help untuk bantuan.`);
        return jsonResponse({ ok: true });
    } catch (e) {
        console.error('handleTelegramWebhook error:', e);
        return jsonResponse({ ok: false, error: e.message }, 200);
    }
}

async function handleSetupTelegramWebhook(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try {
        const botToken = env.TELEGRAM_BOT_TOKEN;
        if (!botToken) return errorResponse('TELEGRAM_BOT_TOKEN belum diset di environment', 500);
        const url = new URL(request.url);
        const webhookUrl = `${url.origin}/api/telegram/webhook`;
        const body = { url: webhookUrl, allowed_updates: ['message', 'edited_message', 'pre_checkout_query'] };
        if (env.TELEGRAM_WEBHOOK_SECRET) body.secret_token = env.TELEGRAM_WEBHOOK_SECRET;
        const res = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const data = await res.json();
        return successResponse({ webhookUrl, telegramResponse: data }, data.ok ? 'Webhook berhasil diset' : 'Gagal set webhook');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}

async function refreshSeriesStats(env, seriesId) {
    try {
        await env.DB.prepare(
            `UPDATE manual_content SET 
             latest_episode_number = COALESCE((SELECT MAX(episode_number) FROM episodes WHERE series_id = ? AND is_active = 1), 0),
             total_episodes = (SELECT COUNT(*) FROM episodes WHERE series_id = ? AND is_active = 1),
             updated_at = datetime('now') WHERE id = ?`
        ).bind(seriesId, seriesId, seriesId).run();
    } catch (e) { console.error('refreshSeriesStats:', e); }
}

async function ensureUserReferralCode(env, userId) {
    try {
        const row = await env.DB.prepare('SELECT referral_code FROM users WHERE id = ?').bind(userId).first();
        if (!row) return null;
        if (row.referral_code) return row.referral_code;
        let code = null;
        for (let i = 0; i < 6; i++) {
            const candidate = generateReferralCode();
            const existing = await env.DB.prepare('SELECT id FROM users WHERE referral_code = ?').bind(candidate).first();
            if (!existing) { code = candidate; break; }
        }
        if (!code) return null;
        await env.DB.prepare('UPDATE users SET referral_code = ? WHERE id = ?').bind(code, userId).run();
        return code;
    } catch (e) { return null; }
}
async function awardReferralStageBonus(env, referrerId, referredUserId, stage, koinAmount) {
    if (!referrerId || !referredUserId || !stage || !koinAmount) return false;
    if (Number(referrerId) === Number(referredUserId)) return false;
    try {
        const uniqueSource = `referral_${stage}_${referredUserId}`;
        const existing = await env.DB.prepare('SELECT id FROM transactions WHERE user_id = ? AND source = ? LIMIT 1').bind(referrerId, uniqueSource).first();
        if (existing) return false;
        await addReward(env, referrerId, koinAmount, 0, uniqueSource);
        return true;
    } catch (e) { return false; }
}
async function processReferralOnRegister(env, newUserId, rawReferralCode) {
    try { await ensureUserReferralCode(env, newUserId); } catch (e) {}
    if (!rawReferralCode) return;
    try {
        const code = String(rawReferralCode).trim().toUpperCase();
        if (!/^[A-Z0-9]{4,10}$/.test(code)) return;
        const referrer = await env.DB.prepare('SELECT id, referral_code FROM users WHERE referral_code = ?').bind(code).first();
        if (!referrer) return;
        if (Number(referrer.id) === Number(newUserId)) return;
        const newUser = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(newUserId).first();
        if (newUser && newUser.referred_by) return;
        await env.DB.prepare('UPDATE users SET referred_by = ? WHERE id = ?').bind(referrer.id, newUserId).run();
        await awardReferralStageBonus(env, referrer.id, newUserId, 'register', CONFIG.REFERRAL_BONUS_REGISTER);
        await addReward(env, newUserId, CONFIG.REFERRAL_BONUS_REGISTER, 0, 'referral_register_new');
    } catch (e) {}
}

async function verifyToken(env, token) {
    if (!token) return null;
    try {
        const session = await env.DB.prepare(
            `SELECT s.*, u.username, u.display_name, u.email, u.role, u.is_vip, u.vip_expires_at,
             u.koin, u.level, u.exp, u.avatar_url, u.avatar_border_id, u.bubble_id, u.created_at,
             u.phone, u.telegram, u.telegram_id, u.notifications_enabled,
             u.bio, u.is_verified, u.verified_at, u.email_verified, u.username_changed_at, u.cover_url,
             ab.name as border_name, ab.url as border_url, ab.scale as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url
             FROM sessions s JOIN users u ON s.user_id = u.id
             LEFT JOIN avatar_borders ab ON u.avatar_border_id = ab.id
             WHERE s.token = ? AND s.expires_at > datetime('now')`
        ).bind(token).first();
        if (!session) return null;
        let isVip = session.is_vip === 1;
        if (isVip && session.vip_expires_at && new Date(session.vip_expires_at) < new Date()) {
            isVip = false;
            await env.DB.prepare("UPDATE users SET is_vip = 0, vip_expires_at = NULL WHERE id = ?").bind(session.user_id).run();
        }
        return {
            id: session.user_id, username: session.username, displayName: session.display_name || session.username,
            email: session.email, role: session.role, isVip: isVip, vipExpiresAt: session.vip_expires_at,
            koin: session.koin || 0, level: session.level || 1, exp: session.exp || 0,
            avatarUrl: session.avatar_url, coverUrl: session.cover_url,
            avatarBorderId: session.avatar_border_id, bubbleId: session.bubble_id,
            borderName: session.border_name, borderUrl: session.border_url,
            borderScale: session.border_scale || 1.2, levelUrl: session.level_url,
            phone: session.phone, telegram: session.telegram, telegramId: session.telegram_id,
            notificationsEnabled: session.notifications_enabled === 1, bio: session.bio,
            isVerified: session.is_verified === 1, emailVerified: session.email_verified === 1,
            verifiedAt: session.verified_at, usernameChangedAt: session.username_changed_at, createdAt: session.created_at
        };
    } catch (e) { console.error('Token verify error:', e); return null; }
}
function isAdmin(user) { return user && user.role === 'admin'; }
function isVipOrAdmin(user) { return user && (user.role === 'admin' || user.isVip); }

// Pengaturan aplikasi dibaca SEKALI (satu query untuk semua kunci) lalu disimpan di memori isolate selama 60 detik.
// Sebelumnya tiap kunci = satu query D1 (belasan query hanya untuk /api/notes).
let _settingsCache = null, _settingsAt = 0, _settingsPromise = null, _settingsGen = 0;
const SETTINGS_TTL_MS = 60000;
function invalidateSettingsCache() { _settingsCache = null; _settingsPromise = null; _settingsGen++; }
async function loadAppSettings(env) {
    if (_settingsCache && Date.now() - _settingsAt < SETTINGS_TTL_MS) return _settingsCache;
    if (!_settingsPromise) {
        const gen = _settingsGen;
        _settingsPromise = env.DB.prepare('SELECT key, value FROM app_settings').all().then((rows) => {
            const map = {}; for (const r of (rows.results || [])) map[r.key] = r.value;
            if (gen === _settingsGen) { _settingsCache = map; _settingsAt = Date.now(); _settingsPromise = null; }
            return map;
        }).catch((e) => { if (gen === _settingsGen) _settingsPromise = null; throw e; });
    }
    return _settingsPromise;
}
async function getAppSetting(env, key) {
    try { const map = await loadAppSettings(env); const v = map[key]; return v === undefined ? null : v; }
    catch (e) { return null; }
}
async function getAppSettingRow(env, key) { const value = await getAppSetting(env, key); return value === null ? null : { value }; }
async function setAppSetting(env, key, value) {
    try { await env.DB.prepare(`INSERT OR REPLACE INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`).bind(key, value).run(); invalidateSettingsCache(); return true; }
    catch (e) { return false; }
}

async function getCustomTabs(env) {
    try { const row = await getAppSettingRow(env, 'custom_tabs'); if (row && row.value) return JSON.parse(row.value); } catch (e) {}
    return [];
}
async function setCustomTabs(env, tabs) {
    try { await env.DB.prepare(`INSERT OR REPLACE INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`).bind('custom_tabs', JSON.stringify(tabs)).run(); invalidateSettingsCache(); return true; }
    catch (e) { return false; }
}
async function getAdSlots(env) {
    try { const row = await getAppSettingRow(env, 'ad_slots'); if (row && row.value) return JSON.parse(row.value); } catch (e) {}
    return { header: { enabled: false, code: '' }, home_top: { enabled: false, code: '' }, home_middle: { enabled: false, code: '' }, home_bottom: { enabled: false, code: '' }, player: { enabled: false, code: '' } };
}
async function getPlayerAds(env) {
    try {
        const row = await getAppSettingRow(env, 'player_ads');
        if (row && row.value) {
            const ads = JSON.parse(row.value);
            const now = new Date();
            return ads.filter(ad => { if (ad.enabled === false) return false; if (ad.expiresAt && new Date(ad.expiresAt) <= now) return false; return true; });
        }
    } catch (e) {}
    return [];
}

async function checkDailyKoinLimit(env, userId) {
    try {
        const today = new Date().toISOString().split('T')[0];
        const result = await env.DB.prepare(`SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE user_id = ? AND type = 'earn' AND source != 'topup_stars' AND date(created_at) = ?`).bind(userId, today).first();
        const totalToday = result ? result.total : 0;
        return { totalToday, remaining: Math.max(0, CONFIG.MAX_DAILY_KOIN - totalToday), canEarn: totalToday < CONFIG.MAX_DAILY_KOIN };
    } catch (e) { return { totalToday: 0, remaining: CONFIG.MAX_DAILY_KOIN, canEarn: true }; }
}
async function checkDailyWatchLimit(env, userId, isVip) {
    if (isVip) return { canWatch: true, used: 0, limit: null, freeLimit: null, extraUsed: 0, extraLimit: CONFIG.FREE_EXTRA_LIMIT, needsPayment: false, pricePerView: CONFIG.EXTRA_VIEW_PRICE };
    try {
        const today = new Date().toISOString().split('T')[0];
        const result = await env.DB.prepare(`SELECT COUNT(*) as count FROM watch_history WHERE user_id = ? AND date(watched_at) = ?`).bind(userId, today).first();
        const used = result ? result.count : 0;
        const freeLimit = CONFIG.FREE_DAILY_LIMIT, extraLimit = CONFIG.FREE_EXTRA_LIMIT;
        const totalLimit = freeLimit + extraLimit;
        return { canWatch: used < totalLimit, used, limit: totalLimit, freeLimit, extraLimit, extraUsed: Math.max(0, used - freeLimit), needsPayment: used >= freeLimit, pricePerView: CONFIG.EXTRA_VIEW_PRICE };
    } catch (e) { return { canWatch: true, used: 0, limit: null, extraUsed: 0, extraLimit: CONFIG.FREE_EXTRA_LIMIT, needsPayment: false, pricePerView: CONFIG.EXTRA_VIEW_PRICE }; }
}

async function handleLogout(request, env, user) {
    try { const token = extractToken(request); if (token) await env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run(); return successResponse(null, 'Logout berhasil'); }
    catch (e) { return errorResponse('Terjadi kesalahan saat logout', 500); }
}

async function handleGetMe(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    const today = new Date().toISOString().split('T')[0];
    // Query di bawah tidak saling bergantung → dijalankan bersamaan (waktu tunggu = yang terlama, bukan jumlahnya)
    const [dbUser, nextLevelExp, dailyWatch, koinLimit, checkin, giftRes, refRow, botUsername, follow] = await Promise.all([
        env.DB.prepare(
        `SELECT id, username, display_name, email, role, is_vip, vip_expires_at, koin, level, exp,
         avatar_url, avatar_border_id, bubble_id, created_at, phone, telegram, telegram_id, notifications_enabled,
         bio, is_verified, verified_at, email_verified, username_changed_at, cover_url,
         (SELECT name FROM avatar_borders WHERE id = avatar_border_id) as border_name,
         (SELECT url FROM avatar_borders WHERE id = avatar_border_id) as border_url,
         (SELECT scale FROM avatar_borders WHERE id = avatar_border_id) as border_scale,
         (SELECT level_url FROM levels WHERE level_number = level) as level_url
         FROM users WHERE id = ?`
        ).bind(user.id).first(),
        env.DB.prepare('SELECT exp_required, level_url FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level || 1).first(),
        checkDailyWatchLimit(env, user.id, !!user.isVip),
        checkDailyKoinLimit(env, user.id),
        env.DB.prepare("SELECT id FROM missions WHERE user_id = ? AND mission_type = 'checkin' AND date(completed_at) = ?").bind(user.id, today).first().catch(() => null),
        env.DB.prepare(
            `SELECT ug.*, u.username as sender_username, u.display_name as sender_display_name, u.avatar_url as sender_avatar
             FROM user_gifts ug JOIN users u ON ug.sender_id = u.id
             WHERE ug.user_id = ? ORDER BY ug.created_at DESC LIMIT 30`
        ).bind(user.id).all().catch(() => ({ results: [] })),
        env.DB.prepare('SELECT referral_code, referred_by FROM users WHERE id = ?').bind(user.id).first().catch(() => null),
        getAppSetting(env, 'telegram_bot_username'),
        getFollowInfo(env, user.id, 0)
    ]);
    if (!dbUser) return errorResponse('User tidak ditemukan', 404);
    let isVip = dbUser.is_vip === 1;
    if (isVip && dbUser.vip_expires_at && new Date(dbUser.vip_expires_at) < new Date()) isVip = false;
    let canChangeUsername = true, usernameChangeDaysRemaining = 0;
    if (dbUser.username_changed_at) {
        const lastChange = new Date(dbUser.username_changed_at);
        const nextAllowed = new Date(lastChange.getTime() + CONFIG.USERNAME_CHANGE_COOLDOWN_DAYS * 24 * 60 * 60 * 1000);
        if (nextAllowed > new Date()) { canChangeUsername = false; usernameChangeDaysRemaining = Math.ceil((nextAllowed - new Date()) / (24 * 60 * 60 * 1000)); }
    }
    const hasCheckedInToday = !!checkin;
    const giftsReceived = ((giftRes && giftRes.results) || []).map(g => ({
            id: g.id, giftName: g.gift_name, giftUrl: g.gift_url, price: g.price, expReward: g.exp_reward,
            senderUsername: g.sender_username, senderDisplayName: g.sender_display_name, senderAvatar: g.sender_avatar, createdAtWIB: formatDateWIB(g.created_at)
        }));
    let referralCode = refRow ? refRow.referral_code : null;
    const referredBy = refRow ? refRow.referred_by : null;
    if (!referralCode) { try { referralCode = await ensureUserReferralCode(env, user.id); } catch (e) {} }
    const referralLink = botUsername && referralCode ? `https://t.me/${botUsername}?startapp=${referralCode}` : null;
    return successResponse({
        id: dbUser.id, username: dbUser.username, displayName: dbUser.display_name || dbUser.username,
        email: dbUser.email, role: dbUser.role,
        isVip: isVip, vipExpiresAt: dbUser.vip_expires_at, vipExpiresAtWIB: formatDateWIB(dbUser.vip_expires_at),
        koin: dbUser.koin || 0, level: dbUser.level || 1, exp: dbUser.exp || 0,
        nextLevelExp: nextLevelExp ? nextLevelExp.exp_required : null, levelUrl: dbUser.level_url,
        avatarUrl: dbUser.avatar_url, coverUrl: dbUser.cover_url,
        avatarBorderId: dbUser.avatar_border_id, bubbleId: dbUser.bubble_id,
        borderName: dbUser.border_name, borderUrl: dbUser.border_url, borderScale: dbUser.border_scale || 1.2,
        phone: dbUser.phone, telegram: dbUser.telegram, telegramId: dbUser.telegram_id,
        telegramChangeCost: CONFIG.TELEGRAM_CHANGE_COST,
        notificationsEnabled: dbUser.notifications_enabled === 1, bio: dbUser.bio,
        isVerified: dbUser.is_verified === 1, emailVerified: dbUser.email_verified === 1,
        verifiedAt: dbUser.verified_at, canChangeUsername, usernameChangeDaysRemaining,
        dailyWatch, hasCheckedInToday,
        dailyKoinEarned: koinLimit.totalToday, dailyKoinRemaining: koinLimit.remaining,
        giftsReceived: giftsReceived, giftsCount: giftsReceived.length,
        referralCode: referralCode, referralLink: referralLink, referredBy: referredBy,
        telegramBotUsername: botUsername || null,
        createdAt: dbUser.created_at, createdAtWIB: formatDateWIB(dbUser.created_at),
        ...follow
    });
}

// ============================================================
// REFERRAL
// ============================================================
async function handleGetReferralStats(request, env, user) {
    if (!user) return errorResponse('Login untuk melihat referral', 401);
    try {
        const code = await ensureUserReferralCode(env, user.id);
        if (!code) return successResponse({ referralCode: null, referralLink: null, stats: { registered: 0, verifiedPhone: 0, premium: 0 }, referrals: [] });
        const botUsername = await getAppSetting(env, 'telegram_bot_username');
        const referralLink = botUsername ? `https://t.me/${botUsername}?startapp=${code}` : null;
        let registered = 0, verifiedPhone = 0, premium = 0, referralsList = [];
        try {
            const reg = await env.DB.prepare('SELECT COUNT(*) as count FROM users WHERE referred_by = ?').bind(user.id).first();
            registered = reg ? reg.count : 0;
            const ver = await env.DB.prepare('SELECT COUNT(*) as count FROM users WHERE referred_by = ? AND email_verified = 1').bind(user.id).first();
            verifiedPhone = ver ? ver.count : 0;
            const prem = await env.DB.prepare('SELECT COUNT(*) as count FROM users WHERE referred_by = ? AND is_vip = 1').bind(user.id).first();
            premium = prem ? prem.count : 0;
            const refUsers = await env.DB.prepare('SELECT id, username, display_name, email_verified, is_vip, created_at FROM users WHERE referred_by = ? ORDER BY created_at DESC').bind(user.id).all();
            for (const ref of (refUsers.results || [])) {
                const earned = await env.DB.prepare("SELECT COALESCE(SUM(amount), 0) as total FROM transactions WHERE user_id = ? AND source LIKE 'referral_%_' || ?").bind(user.id, ref.id).first();
                referralsList.push({ id: ref.id, username: ref.username, displayName: ref.display_name || ref.username, emailVerified: ref.email_verified === 1, isVip: ref.is_vip === 1, createdAt: ref.created_at, earnedKoin: earned ? earned.total : 0 });
            }
        } catch (e) {}
        return successResponse({ referralCode: code, referralLink, telegramBotUsername: botUsername || null, stats: { registered, verifiedPhone, premium }, referrals: referralsList });
    } catch (e) { return errorResponse('Gagal memuat statistik referral', 500); }
}

async function handleApplyReferralCode(request, env, user) {
    if (!user) return errorResponse('Login untuk memakai kode referral', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const raw = body && body.code;
        const code = raw ? String(raw).trim().toUpperCase() : '';
        if (!code) return errorResponse('Kode referral wajib diisi');
        if (!/^[A-Z0-9]{4,10}$/.test(code)) return errorResponse('Format kode referral tidak valid (4-10 huruf/angka)');
        const myCode = await ensureUserReferralCode(env, user.id);
        if (myCode && code === myCode) return errorResponse('Tidak bisa memakai kode referral sendiri');
        let refInfo;
        try { refInfo = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first(); }
        catch (e) { return errorResponse('Fitur referral belum diaktifkan di server.', 503); }
        if (refInfo && refInfo.referred_by) return errorResponse('Kamu sudah pernah memakai kode referral.');
        const referrer = await env.DB.prepare('SELECT id FROM users WHERE referral_code = ?').bind(code).first();
        if (!referrer) return errorResponse('Kode referral tidak ditemukan');
        if (Number(referrer.id) === Number(user.id)) return errorResponse('Tidak bisa memakai kode referral sendiri');
        await env.DB.prepare('UPDATE users SET referred_by = ? WHERE id = ?').bind(referrer.id, user.id).run();
        await awardReferralStageBonus(env, referrer.id, user.id, 'register', CONFIG.REFERRAL_BONUS_REGISTER);
        await addReward(env, user.id, CONFIG.REFERRAL_BONUS_REGISTER, 0, 'referral_register_new');
        return successResponse({ newKoinBonus: CONFIG.REFERRAL_BONUS_REGISTER }, `Kode referral berhasil diterapkan! +${CONFIG.REFERRAL_BONUS_REGISTER} koin.`);
    } catch (e) { return errorResponse('Gagal menerapkan kode referral: ' + dbHint(e), 500); }
}

// ============================================================
// USER PROFILE
// ============================================================
async function handleGetUserProfile(request, env, username, viewerUser) {
    try {
        const user = await env.DB.prepare(
            `SELECT id, username, display_name, role, is_vip, vip_expires_at, level, exp, 
             avatar_url, avatar_border_id, created_at, bio, is_verified, cover_url,
             (SELECT name FROM avatar_borders WHERE id = avatar_border_id) as border_name,
             (SELECT url FROM avatar_borders WHERE id = avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = level) as level_url
             FROM users WHERE username = ?`
        ).bind(username).first();
        if (!user) return errorResponse('User tidak ditemukan', 404);
        let isVip = user.is_vip === 1;
        if (isVip && user.vip_expires_at && new Date(user.vip_expires_at) < new Date()) isVip = false;
        const totalWatch = await env.DB.prepare('SELECT COUNT(*) as count FROM watch_history WHERE user_id = ?').bind(user.id).first();
        const totalComments = await env.DB.prepare('SELECT COUNT(*) as count FROM comments WHERE user_id = ? AND is_deleted = 0').bind(user.id).first();
        const totalLikes = await env.DB.prepare("SELECT COUNT(*) as count FROM reactions WHERE user_id = ? AND reaction_type = 'suka'").bind(user.id).first();
        const nextLevelExp = await env.DB.prepare('SELECT exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level).first();
        const galleryPosts = await env.DB.prepare(
            `SELECT g.*, 
             (SELECT COUNT(*) FROM gallery_likes WHERE post_id = g.id) as likes_count,
             (SELECT COUNT(*) FROM gallery_saves WHERE post_id = g.id) as saves_count,
             (SELECT COUNT(*) FROM gallery_comments WHERE post_id = g.id AND is_deleted = 0) as comments_count
             FROM gallery_posts g WHERE g.user_id = ?
             ORDER BY g.created_at DESC LIMIT 60`
        ).bind(user.id).all();
        let purchasedIds = [], likedIds = [], savedIds = [];
        if (viewerUser) {
            const purchases = await env.DB.prepare('SELECT post_id FROM gallery_purchases WHERE user_id = ?').bind(viewerUser.id).all();
            purchasedIds = purchases.results.map(p => p.post_id);
            const likes = await env.DB.prepare('SELECT post_id FROM gallery_likes WHERE user_id = ?').bind(viewerUser.id).all();
            likedIds = likes.results.map(p => p.post_id);
            const saves = await env.DB.prepare('SELECT post_id FROM gallery_saves WHERE user_id = ?').bind(viewerUser.id).all();
            savedIds = saves.results.map(p => p.post_id);
        }
        const gallery = (galleryPosts.results || []).map(p => {
            const isOwner = viewerUser && viewerUser.id === user.id;
            const isPurchased = purchasedIds.includes(p.id);
            const price = p.price || 0;
            const isLocked = price > 0 && !isOwner && !isPurchased;
            const mediaUrls = p.media_urls ? JSON.parse(p.media_urls) : (p.image_url ? [p.image_url] : []);
            return { id: p.id, image_url: p.image_url, mediaUrls, mediaCount: mediaUrls.length, description: p.description, price, purchase_count: p.purchase_count || 0, likes_count: p.likes_count || 0, saves_count: p.saves_count || 0, comments_count: p.comments_count || 0, created_at: p.created_at, created_at_wib: formatDateWIB(p.created_at), isOwner, isPurchased, locked: isLocked, userLiked: likedIds.includes(p.id), userSaved: savedIds.includes(p.id) };
        });
        let giftsReceived = [];
        try {
            const gr = await env.DB.prepare(
                `SELECT ug.*, u.username as sender_username, u.display_name as sender_display_name, u.avatar_url as sender_avatar
                 FROM user_gifts ug JOIN users u ON ug.sender_id = u.id
                 WHERE ug.user_id = ? ORDER BY ug.created_at DESC LIMIT 30`
            ).bind(user.id).all();
            giftsReceived = (gr.results || []).map(g => ({ id: g.id, giftName: g.gift_name, giftUrl: g.gift_url, price: g.price, expReward: g.exp_reward, senderUsername: g.sender_username, senderDisplayName: g.sender_display_name, senderAvatar: g.sender_avatar, createdAtWIB: formatDateWIB(g.created_at) }));
        } catch (e) {}
        return successResponse({
            id: user.id, username: user.username, displayName: user.display_name || user.username,
            role: user.role, isVip: isVip, level: user.level || 1, exp: user.exp || 0,
            nextLevelExp: nextLevelExp ? nextLevelExp.exp_required : null,
            avatarUrl: user.avatar_url, coverUrl: user.cover_url, avatarBorderId: user.avatar_border_id,
            borderName: user.border_name, borderUrl: user.border_url, borderScale: user.border_scale || 1.2, levelUrl: user.level_url,
            bio: user.bio, isVerified: user.is_verified === 1,
            createdAt: user.created_at, createdAtWIB: formatDateWIB(user.created_at),
            totalWatch: totalWatch ? totalWatch.count : 0,
            totalComments: totalComments ? totalComments.count : 0,
            totalLikes: totalLikes ? totalLikes.count : 0,
            gallery, galleryCount: gallery.length,
            giftsReceived, giftsCount: giftsReceived.length,
            couple: await getPublicCoupleInfo(env, user.id),
            ...(await getFollowInfo(env, user.id, viewerUser ? viewerUser.id : 0))
        });
    } catch (e) { return errorResponse('Gagal mengambil profil user', 500); }
}

// ============================================================
// LEADERBOARD
// ============================================================
async function handleGetLeaderboard(request, env, user) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const category = url.searchParams.get('category') || 'xp';
        const offset = (page - 1) * limit;
        let orderBy = 'u.exp DESC, u.level DESC';
        if (category === 'watch') orderBy = '(SELECT COUNT(*) FROM watch_history WHERE user_id = u.id) DESC, u.exp DESC';
        else if (category === 'gallery') orderBy = '(SELECT COUNT(*) FROM gallery_posts WHERE user_id = u.id) DESC, u.exp DESC';
        else if (category === 'koin') orderBy = 'u.koin DESC, u.exp DESC';
        else if (category === 'level') orderBy = 'u.level DESC, u.exp DESC';
        const usersQuery = `SELECT u.id, u.username, u.display_name, u.role, u.is_vip, u.level, u.exp, u.koin, u.avatar_url, u.avatar_border_id,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT COUNT(*) FROM watch_history WHERE user_id = u.id) as total_watch,
             (SELECT COUNT(*) FROM gallery_posts WHERE user_id = u.id) as total_gallery
             FROM users u ORDER BY ${orderBy} LIMIT ? OFFSET ?`;
        const users = await env.DB.prepare(usersQuery).bind(limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM users').first();
        let myRank = null, myData = null;
        if (user) {
            const me = await env.DB.prepare(
                `SELECT u.id, u.username, u.display_name, u.role, u.is_vip, u.level, u.exp, u.koin, u.avatar_url, u.avatar_border_id,
                 (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
                 (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
                 (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
                 (SELECT COUNT(*) FROM watch_history WHERE user_id = u.id) as total_watch,
                 (SELECT COUNT(*) FROM gallery_posts WHERE user_id = u.id) as total_gallery
                 FROM users u WHERE u.id = ?`
            ).bind(user.id).first();
            if (me) {
                let rankRow;
                if (category === 'watch') rankRow = await env.DB.prepare(`SELECT COUNT(*) as rank FROM users WHERE (SELECT COUNT(*) FROM watch_history WHERE user_id = id) > ? OR ((SELECT COUNT(*) FROM watch_history WHERE user_id = id) = ? AND id < ?)`).bind(me.total_watch, me.total_watch, me.id).first();
                else if (category === 'gallery') rankRow = await env.DB.prepare(`SELECT COUNT(*) as rank FROM users WHERE (SELECT COUNT(*) FROM gallery_posts WHERE user_id = id) > ? OR ((SELECT COUNT(*) FROM gallery_posts WHERE user_id = id) = ? AND id < ?)`).bind(me.total_gallery, me.total_gallery, me.id).first();
                else if (category === 'koin') rankRow = await env.DB.prepare(`SELECT COUNT(*) as rank FROM users WHERE koin > ? OR (koin = ? AND id < ?)`).bind(me.koin, me.koin, me.id).first();
                else if (category === 'level') rankRow = await env.DB.prepare(`SELECT COUNT(*) as rank FROM users WHERE level > ? OR (level = ? AND id < ?)`).bind(me.level, me.level, me.id).first();
                else rankRow = await env.DB.prepare(`SELECT COUNT(*) as rank FROM users WHERE exp > ? OR (exp = ? AND level > ?) OR (exp = ? AND level = ? AND id < ?)`).bind(me.exp, me.exp, me.level, me.exp, me.level, me.id).first();
                myRank = (rankRow ? rankRow.rank : 0) + 1;
                myData = { id: me.id, username: me.username, displayName: me.display_name || me.username, role: me.role, isVip: me.is_vip === 1, level: me.level || 1, exp: me.exp || 0, koin: me.koin || 0, avatarUrl: me.avatar_url, borderUrl: me.border_url, borderScale: me.border_scale || 1.2, levelUrl: me.level_url, totalWatch: me.total_watch, totalGallery: me.total_gallery, rank: myRank };
            }
        }
        return successResponse({
            users: users.results.map(u => ({ id: u.id, username: u.username, displayName: u.display_name || u.username, role: u.role, isVip: u.is_vip === 1, level: u.level || 1, exp: u.exp || 0, koin: u.koin || 0, avatarUrl: u.avatar_url, borderUrl: u.border_url, borderScale: u.border_scale || 1.2, levelUrl: u.level_url, totalWatch: u.total_watch || 0, totalGallery: u.total_gallery || 0 })),
            total: total.count, page, totalPages: Math.ceil(total.count / limit),
            myRank, myData, category
        });
    } catch (e) { return errorResponse('Gagal memuat leaderboard', 500); }
}

// ============================================================
// CONTENT
// ============================================================
function mapContentCard(item) {
    return {
        id: item.id, title: item.title, description: item.description,
        posterUrl: item.poster_url, rating: item.rating, duration: item.duration, durationText: formatDuration(item.duration),
        subtitle: item.subtitle, genres: item.genres ? item.genres.split(',').map(g => g.trim()) : [],
        videoServers: item.video_servers ? JSON.parse(item.video_servers) : [],
        downloadFree: item.download_free, downloadPremium: item.download_premium,
        type: item.type, price: item.price, views: item.views || 0,
        country: item.country, year: item.year,
        latestEpisodeNumber: item.latest_episode_number || 0, totalEpisodes: item.total_episodes || 0,
        isFeatured: item.is_featured === 1,
        createdAt: item.created_at, createdAtWIB: formatDateWIB(item.created_at)
    };
}
async function handleGetManualContent(request, env) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const type = url.searchParams.get('type') || '';
        const genre = url.searchParams.get('genre') || '';
        const country = url.searchParams.get('country') || '';
        const search = url.searchParams.get('q') || '';
        const sort = url.searchParams.get('sort') || 'latest';
        const offset = (page - 1) * limit;
        let query = `SELECT * FROM manual_content WHERE is_active = 1`;
        let countQuery = `SELECT COUNT(*) as count FROM manual_content WHERE is_active = 1`;
        let params = [];
        if (type) { query += ` AND type = ?`; countQuery += ` AND type = ?`; params.push(type); }
        if (genre) { query += ` AND genres LIKE ?`; countQuery += ` AND genres LIKE ?`; params.push(`%${genre}%`); }
        if (country) { query += ` AND country = ?`; countQuery += ` AND country = ?`; params.push(country); }
        if (search) { query += ` AND (title LIKE ? OR description LIKE ?)`; countQuery += ` AND (title LIKE ? OR description LIKE ?)`; params.push(`%${search}%`, `%${search}%`); }
        if (sort === 'popular') query += ` ORDER BY views DESC, created_at DESC`;
        else if (sort === 'rating') query += ` ORDER BY rating DESC, created_at DESC`;
        else query += ` ORDER BY COALESCE(updated_at, created_at) DESC, created_at DESC`;
        query += ` LIMIT ? OFFSET ?`;
        const content = await env.DB.prepare(query).bind(...params, limit, offset).all();
        const total = await env.DB.prepare(countQuery).bind(...params).first();
        return successResponse({ content: content.results.map(mapContentCard), total: total.count, page, totalPages: Math.ceil(total.count / limit) }, 'Success', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
    } catch (e) { return errorResponse('Gagal mengambil konten', 500); }
}
async function handleGetManualContentDetail(request, env, id) {
    try {
        const content = await env.DB.prepare('SELECT * FROM manual_content WHERE id = ? AND is_active = 1').bind(id).first();
        if (!content) return errorResponse('Konten tidak ditemukan', 404);
        await env.DB.prepare('UPDATE manual_content SET views = views + 1 WHERE id = ?').bind(id).run();
        const card = mapContentCard(content);
        card.views = (content.views || 0) + 1;
        return successResponse(card, 'Success', 'public, max-age=60, s-maxage=300');
    } catch (e) { return errorResponse('Gagal mengambil detail konten', 500); }
}
async function handleGetGenres(request, env) {
    try {
        const contents = await env.DB.prepare('SELECT DISTINCT genres FROM manual_content WHERE is_active = 1 AND genres IS NOT NULL AND genres != ""').all();
        const genreSet = new Set();
        contents.results.forEach(item => { if (item.genres) item.genres.split(',').forEach(g => { const genre = g.trim(); if (genre) genreSet.add(genre); }); });
        return successResponse({ genres: Array.from(genreSet).sort() }, 'Success', 'public, max-age=300, s-maxage=1800');
    } catch (e) { return errorResponse('Gagal mengambil genre', 500); }
}
async function handleGetCountries(request, env) {
    try {
        const contents = await env.DB.prepare('SELECT DISTINCT country FROM manual_content WHERE is_active = 1 AND country IS NOT NULL AND country != ""').all();
        return successResponse({ countries: contents.results.map(item => item.country).filter(Boolean) }, 'Success', 'public, max-age=300, s-maxage=1800');
    } catch (e) { return errorResponse('Gagal mengambil negara', 500); }
}
async function handleGetFeaturedContent(request, env) {
    try {
        let featured;
        try { featured = await env.DB.prepare(`SELECT * FROM manual_content WHERE is_active = 1 AND is_featured = 1 ORDER BY updated_at DESC LIMIT 10`).all(); }
        catch (e) { featured = { results: [] }; }
        if (!featured.results || featured.results.length === 0) featured = await env.DB.prepare(`SELECT * FROM manual_content WHERE is_active = 1 ORDER BY views DESC, rating DESC LIMIT 10`).all();
        return successResponse({ featured: (featured.results || []).map(mapContentCard) }, 'Success', 'public, max-age=60, s-maxage=300');
    } catch (e) { return errorResponse('Gagal mengambil featured', 500); }
}
async function handleGetStats(request, env) {
    try {
        const videoCount = await env.DB.prepare('SELECT COUNT(*) as count FROM manual_content WHERE is_active = 1').first();
        const galleryCount = await env.DB.prepare('SELECT COUNT(*) as count FROM gallery_posts').first();
        let episodeCount = { count: 0 };
        try { episodeCount = await env.DB.prepare('SELECT COUNT(*) as count FROM episodes WHERE is_active = 1').first(); } catch (e) {}
        return successResponse({ totalVideos: videoCount ? videoCount.count : 0, totalGallery: galleryCount ? galleryCount.count : 0, totalEpisodes: episodeCount ? episodeCount.count : 0 }, 'Success', 'public, max-age=60, s-maxage=300');
    } catch (e) { return errorResponse('Gagal mengambil statistik', 500); }
}
async function handleGetStoryCount(request, env) {
    try {
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM gallery_posts').first();
        const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const newToday = await env.DB.prepare('SELECT COUNT(*) as count FROM gallery_posts WHERE created_at > ?').bind(dayAgo).first();
        return successResponse({ total: total ? total.count : 0, newToday: newToday ? newToday.count : 0 }, 'Success', 'public, max-age=30, s-maxage=60');
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleGetRecommendations(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const watchHistory = await env.DB.prepare(
            `SELECT mc.genres FROM watch_history wh JOIN manual_content mc ON wh.content_id = mc.id
             WHERE wh.user_id = ? AND wh.content_id IS NOT NULL ORDER BY wh.watched_at DESC LIMIT 10`
        ).bind(user.id).all();
        const genreCounts = {};
        watchHistory.results.forEach(item => { if (item.genres) item.genres.split(',').forEach(g => { const genre = g.trim(); genreCounts[genre] = (genreCounts[genre] || 0) + 1; }); });
        const topGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([genre]) => genre);
        let recommendations = { results: [] };
        if (topGenres.length > 0) {
            const genreConditions = topGenres.map(() => 'genres LIKE ?').join(' OR ');
            recommendations = await env.DB.prepare(
                `SELECT * FROM manual_content WHERE is_active = 1 AND (${genreConditions})
                 AND id NOT IN (SELECT DISTINCT content_id FROM watch_history WHERE user_id = ? AND content_id IS NOT NULL)
                 ORDER BY rating DESC, views DESC LIMIT 20`
            ).bind(...topGenres.map(g => `%${g}%`), user.id).all();
        }
        if (!recommendations.results || recommendations.results.length < 10) {
            const popular = await env.DB.prepare(
                `SELECT * FROM manual_content WHERE is_active = 1
                 AND id NOT IN (SELECT DISTINCT content_id FROM watch_history WHERE user_id = ? AND content_id IS NOT NULL)
                 ORDER BY views DESC, rating DESC LIMIT 20`
            ).bind(user.id).all();
            const existingIds = new Set(recommendations.results ? recommendations.results.map(r => r.id) : []);
            popular.results.forEach(item => { if (!existingIds.has(item.id)) { if (!recommendations.results) recommendations.results = []; recommendations.results.push(item); } });
        }
        return successResponse({ recommendations: (recommendations.results || []).slice(0, 20).map(mapContentCard), basedOnGenres: topGenres });
    } catch (e) { return errorResponse('Gagal mengambil rekomendasi', 500); }
}
async function handleGetTrendingContent(request, env) {
    try {
        const url = new URL(request.url);
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const trending = await env.DB.prepare(
            `SELECT mc.*, (SELECT COUNT(*) FROM watch_history wh WHERE wh.content_id = mc.id AND wh.watched_at > datetime('now', '-7 days')) as weekly_views
             FROM manual_content mc WHERE mc.is_active = 1
             ORDER BY (weekly_views * 2 + mc.views * 0.5 + mc.rating * 10) DESC LIMIT ?`
        ).bind(limit).all();
        return successResponse({ trending: trending.results.map(item => { const card = mapContentCard(item); card.weeklyViews = item.weekly_views || 0; return card; }) }, 'Success', 'public, max-age=120, s-maxage=600');
    } catch (e) { return errorResponse('Gagal mengambil trending', 500); }
}
async function handleGetRecentlyWatched(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const recent = await env.DB.prepare(
            `SELECT wh.*, mc.title, mc.poster_url, mc.rating, mc.duration, mc.type, mc.price, mc.genres, mc.country, mc.year, mc.latest_episode_number, mc.total_episodes, e.episode_number as last_episode_number
             FROM watch_history wh JOIN manual_content mc ON wh.content_id = mc.id
             LEFT JOIN episodes e ON wh.episode_id = e.id
             WHERE wh.user_id = ? ORDER BY wh.watched_at DESC LIMIT 20`
        ).bind(user.id).all();
        return successResponse({
            recent: recent.results.map(item => ({
                contentId: item.content_id, title: item.title, posterUrl: item.poster_url, rating: item.rating,
                duration: item.duration, durationText: formatDuration(item.duration), type: item.type, price: item.price, views: item.views || 0,
                country: item.country, year: item.year,
                genres: item.genres ? item.genres.split(',').map(g => g.trim()) : [],
                latestEpisodeNumber: item.latest_episode_number || 0, totalEpisodes: item.total_episodes || 0,
                lastEpisodeNumber: item.last_episode_number || 0, watchedAt: item.watched_at
            }))
        });
    } catch (e) { return errorResponse('Gagal mengambil riwayat', 500); }
}
async function handleGetSeriesEpisodes(request, env, seriesId) {
    try {
        const url = new URL(request.url);
        const q = (url.searchParams.get('q') || '').trim().toLowerCase();
        const series = await env.DB.prepare(
            'SELECT id, title, poster_url, genres, country, year, type, price, latest_episode_number, total_episodes FROM manual_content WHERE id = ? AND is_active = 1'
        ).bind(seriesId).first();
        if (!series) return errorResponse('Series tidak ditemukan', 404);
        const episodes = await env.DB.prepare(
            `SELECT id, episode_number, title, thumbnail_url, duration, type, price, created_at 
             FROM episodes WHERE series_id = ? AND is_active = 1 ORDER BY episode_number ASC`
        ).bind(seriesId).all();
        let eps = episodes.results || [];
        if (q) eps = eps.filter(e => (e.title || '').toLowerCase().includes(q) || String(e.episode_number).includes(q));
        return successResponse({
            seriesId: series.id, seriesTitle: series.title, posterUrl: series.poster_url,
            genres: series.genres ? series.genres.split(',').map(g => g.trim()) : [],
            country: series.country, year: series.year,
            latestEpisodeNumber: series.latest_episode_number || 0, totalEpisodes: series.total_episodes || 0,
            episodes: eps.map(e => ({
                id: e.id, episodeNumber: e.episode_number, title: e.title || ('Episode ' + e.episode_number),
                thumbnailUrl: e.thumbnail_url, duration: e.duration, durationText: formatDuration(e.duration),
                type: e.type, price: e.price, createdAt: e.created_at, createdAtWIB: formatDateWIB(e.created_at)
            }))
        }, 'Success', 'public, max-age=30, s-maxage=120');
    } catch (e) { return errorResponse('Gagal memuat episode', 500); }
}
async function handleWatchEpisode(request, env, user, episodeId) {
    if (!user) return errorResponse('Anda harus login untuk menonton', 401);
    if (!isPlayerRequestSafe(request)) return errorResponse('Akses ditolak', 403);
    try {
        const episode = await env.DB.prepare(
            `SELECT e.*, s.title as series_title, s.poster_url as series_poster, s.genres, s.country, s.year, s.id as series_id
             FROM episodes e JOIN manual_content s ON e.series_id = s.id
             WHERE e.id = ? AND e.is_active = 1 AND s.is_active = 1`
        ).bind(episodeId).first();
        if (!episode) return errorResponse('Episode tidak ditemukan', 404);
        const isVip = isVipOrAdmin(user);
        const isLocked = (episode.type === 'premium' && !isVip);
        const dailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let totalCoinCost = 0;
        if (!isVip && !isLocked) {
            if (dailyWatch.needsPayment) totalCoinCost += CONFIG.EXTRA_VIEW_PRICE;
            if (episode.type === 'coin') totalCoinCost += episode.price;
        }
        let playerAds = [];
        if (!isVip) playerAds = await getPlayerAds(env);
        let videoServers = [];
        if (!isLocked && episode.video_servers) {
            const all = JSON.parse(episode.video_servers);
            videoServers = all.filter(s => !s.isVip || isVip);
        }
        return successResponse({
            id: episode.id, seriesId: episode.series_id, seriesTitle: episode.series_title, seriesPoster: episode.series_poster,
            episodeNumber: episode.episode_number, title: episode.title || ('Episode ' + episode.episode_number),
            description: episode.description, thumbnailUrl: episode.thumbnail_url,
            duration: episode.duration, durationText: formatDuration(episode.duration),
            genres: episode.genres ? episode.genres.split(',').map(g => g.trim()) : [],
            videoServers, downloadFree: isLocked ? null : episode.download_free, downloadPremium: isLocked ? null : episode.download_premium,
            type: episode.type, price: episode.price, country: episode.country, year: episode.year,
            playerAds, showAds: !isVip, dailyWatch, needsPayment: totalCoinCost > 0, totalCost: totalCoinCost,
            isVipUser: isVip, locked: isLocked
        });
    } catch (e) { return errorResponse('Gagal memuat episode: ' + dbHint(e), 500); }
}
async function handlePayAndPlayEpisode(request, env, user, episodeId) {
    if (!user) return errorResponse('Login required', 401);
    if (!isPlayerRequestSafe(request)) return errorResponse('Akses ditolak', 403);
    try {
        const episode = await env.DB.prepare(
            `SELECT e.*, s.id as series_id FROM episodes e JOIN manual_content s ON e.series_id = s.id
             WHERE e.id = ? AND e.is_active = 1 AND s.is_active = 1`
        ).bind(episodeId).first();
        if (!episode) return errorResponse('Episode tidak ditemukan', 404);
        const isVip = isVipOrAdmin(user);
        if (episode.type === 'premium' && !isVip) return errorResponse('Episode ini hanya untuk member VIP', 403);
        const dailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let totalCoinCost = 0;
        if (!isVip) {
            if (dailyWatch.needsPayment) totalCoinCost += CONFIG.EXTRA_VIEW_PRICE;
            if (episode.type === 'coin') totalCoinCost += episode.price;
        }
        if (totalCoinCost > 0) {
            const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
            if (!dbUser || dbUser.koin < totalCoinCost) return errorResponse(`Koin tidak cukup. Butuh ${totalCoinCost} koin, kamu punya ${dbUser ? dbUser.koin : 0}`, 403);
            await env.DB.prepare('UPDATE users SET koin = koin - ? WHERE id = ?').bind(totalCoinCost, user.id).run();
            await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', totalCoinCost, `episode_${episodeId}`).run();
        }
        const existingWatch = await env.DB.prepare('SELECT id FROM watch_history WHERE user_id = ? AND episode_id = ?').bind(user.id, episodeId).first();
        if (existingWatch) await env.DB.prepare("UPDATE watch_history SET watched_at = datetime('now') WHERE id = ?").bind(existingWatch.id).run();
        else {
            await env.DB.prepare('INSERT INTO watch_history (user_id, content_id, episode_id) VALUES (?, ?, ?)').bind(user.id, episode.series_id, episodeId).run();
            await addReward(env, user.id, CONFIG.KOIN_PER_VIEW, CONFIG.EXP_PER_VIEW, 'view');
            await updateMissionProgress(env, user.id, 'watch', 1);
            await updateMissionProgress(env, user.id, 'watch_500', 1);
            await updateMissionProgress(env, user.id, 'watch_1000', 1);
        }
        await env.DB.prepare('UPDATE manual_content SET views = views + 1 WHERE id = ?').bind(episode.series_id).run();
        const dbUserAfter = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        const newDailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let playerAds = [];
        if (!isVip) playerAds = await getPlayerAds(env);
        let videoServers = [];
        if (episode.video_servers) {
            const all = JSON.parse(episode.video_servers);
            videoServers = all.filter(s => !s.isVip || isVip);
        }
        return successResponse({ newKoin: dbUserAfter ? dbUserAfter.koin : 0, dailyWatch: newDailyWatch, videoServers, playerAds }, 'Berhasil memulai pemutaran');
    } catch (e) { return errorResponse('Gagal memproses pembayaran: ' + dbHint(e), 500); }
}
async function handleGetDrakorRecommendations(request, env, seriesId) {
    try {
        const current = await env.DB.prepare('SELECT genres, country FROM manual_content WHERE id = ?').bind(seriesId).first();
        let genres = [];
        if (current && current.genres) genres = current.genres.split(',').map(g => g.trim()).filter(Boolean).slice(0, 3);
        let recommendations = [];
        if (genres.length > 0) {
            const conditions = genres.map(() => 'genres LIKE ?').join(' OR ');
            const result = await env.DB.prepare(
                `SELECT id, title, poster_url, rating, year, country, genres, latest_episode_number, total_episodes, views, type, price, duration
                 FROM manual_content WHERE is_active = 1 AND id != ? AND (${conditions})
                 ORDER BY RANDOM() LIMIT 12`
            ).bind(seriesId, ...genres.map(g => `%${g}%`)).all();
            recommendations = result.results || [];
        }
        if (recommendations.length < 6) {
            const fallback = await env.DB.prepare(
                `SELECT id, title, poster_url, rating, year, country, genres, latest_episode_number, total_episodes, views, type, price, duration
                 FROM manual_content WHERE is_active = 1 AND id != ? ORDER BY views DESC LIMIT 12`
            ).bind(seriesId).all();
            const existing = new Set(recommendations.map(r => r.id));
            for (const r of (fallback.results || [])) { if (!existing.has(r.id) && recommendations.length < 12) recommendations.push(r); }
        }
        return successResponse({
            recommendations: recommendations.map(item => ({
                id: item.id, title: item.title, posterUrl: item.poster_url, rating: item.rating, year: item.year, country: item.country,
                genres: item.genres ? item.genres.split(',').map(g => g.trim()) : [],
                latestEpisodeNumber: item.latest_episode_number || 0, totalEpisodes: item.total_episodes || 0,
                views: item.views || 0, type: item.type, price: item.price, duration: item.duration
            }))
        }, 'Success', 'public, max-age=60, s-maxage=300');
    } catch (e) { return errorResponse('Gagal mengambil saran drakor', 500); }
}

// ============================================================
// GYAZO UPLOAD
// ============================================================
async function handleUploadGyazo(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const formData = await request.formData();
        const file = formData.get('image');
        if (!file) return errorResponse('File gambar wajib diupload');
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (file.type && !allowedTypes.includes(file.type)) return errorResponse('Format file tidak didukung', 400);
        if (file.size > 8 * 1024 * 1024) return errorResponse('Ukuran file maksimal 8MB', 400);
        const accessToken = await getAppSetting(env, 'gyazo_access_token');
        if (!accessToken) return errorResponse('Gyazo belum dikonfigurasi admin', 500);
        const gyazoForm = new FormData();
        gyazoForm.append('access_token', accessToken);
        gyazoForm.append('imagedata', file);
        const gyazoRes = await fetch('https://upload.gyazo.com/api/upload', { method: 'POST', body: gyazoForm });
        const gyazoData = await gyazoRes.json();
        if (!gyazoData.url) return errorResponse('Gagal upload ke Gyazo: ' + (gyazoData.message || 'unknown'), 500);
        return successResponse({ url: gyazoData.url, thumbUrl: gyazoData.thumb_url || gyazoData.url, imageId: gyazoData.image_id || null }, 'Upload berhasil');
    } catch (e) { return errorResponse('Gagal upload: ' + dbHint(e), 500); }
}

async function handleWatchManualContent(request, env, user, contentId) {
    if (!user) return errorResponse('Anda harus login untuk menonton', 401);
    if (!isPlayerRequestSafe(request)) return errorResponse('Akses ditolak', 403);
    try {
        const content = await env.DB.prepare('SELECT * FROM manual_content WHERE id = ? AND is_active = 1').bind(contentId).first();
        if (!content) return errorResponse('Konten tidak ditemukan', 404);
        const isVip = isVipOrAdmin(user);
        const isLocked = (content.type === 'premium' && !isVip);
        const dailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let totalCoinCost = 0;
        if (!isVip && !isLocked) {
            if (dailyWatch.needsPayment) totalCoinCost += CONFIG.EXTRA_VIEW_PRICE;
            if (content.type === 'coin') totalCoinCost += content.price;
        }
        let playerAds = [];
        if (!isVip) playerAds = await getPlayerAds(env);
        let videoServers = [];
        if (!isLocked && content.video_servers) {
            const allServers = JSON.parse(content.video_servers);
            videoServers = allServers.filter(s => !s.isVip || isVip);
        }
        return successResponse({
            id: content.id, title: content.title, description: content.description, posterUrl: content.poster_url, rating: content.rating,
            duration: content.duration, durationText: formatDuration(content.duration), subtitle: content.subtitle,
            genres: content.genres ? content.genres.split(',').map(g => g.trim()) : [],
            videoServers, downloadFree: isLocked ? null : content.download_free, downloadPremium: isLocked ? null : content.download_premium,
            type: content.type, price: content.price, views: content.views || 0, country: content.country, year: content.year,
            latestEpisodeNumber: content.latest_episode_number || 0, totalEpisodes: content.total_episodes || 0,
            playerAds, showAds: !isVip, dailyWatch, needsPayment: totalCoinCost > 0, totalCost: totalCoinCost,
            isVipUser: isVip, locked: isLocked
        });
    } catch (e) { return errorResponse('Gagal memuat konten: ' + dbHint(e), 500); }
}
async function handlePayAndPlayContent(request, env, user, contentId) {
    if (!user) return errorResponse('Login required', 401);
    if (!isPlayerRequestSafe(request)) return errorResponse('Akses ditolak', 403);
    try {
        const content = await env.DB.prepare('SELECT * FROM manual_content WHERE id = ? AND is_active = 1').bind(contentId).first();
        if (!content) return errorResponse('Konten tidak ditemukan', 404);
        const isVip = isVipOrAdmin(user);
        if (content.type === 'premium' && !isVip) return errorResponse('Konten ini hanya untuk member VIP', 403);
        const dailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let totalCoinCost = 0;
        if (!isVip) {
            if (dailyWatch.needsPayment) totalCoinCost += CONFIG.EXTRA_VIEW_PRICE;
            if (content.type === 'coin') totalCoinCost += content.price;
        }
        if (totalCoinCost > 0) {
            const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
            if (!dbUser || dbUser.koin < totalCoinCost) return errorResponse(`Koin tidak cukup. Butuh ${totalCoinCost} koin, kamu punya ${dbUser ? dbUser.koin : 0}`, 403);
            await env.DB.prepare('UPDATE users SET koin = koin - ? WHERE id = ?').bind(totalCoinCost, user.id).run();
            await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', totalCoinCost, `watch_${contentId}`).run();
        }
        const existingWatch = await env.DB.prepare('SELECT id FROM watch_history WHERE user_id = ? AND content_id = ? AND episode_id IS NULL').bind(user.id, contentId).first();
        if (existingWatch) await env.DB.prepare("UPDATE watch_history SET watched_at = datetime('now') WHERE id = ?").bind(existingWatch.id).run();
        else {
            await env.DB.prepare('INSERT INTO watch_history (user_id, content_id) VALUES (?, ?)').bind(user.id, contentId).run();
            await addReward(env, user.id, CONFIG.KOIN_PER_VIEW, CONFIG.EXP_PER_VIEW, 'view');
            await updateMissionProgress(env, user.id, 'watch', 1);
            await updateMissionProgress(env, user.id, 'watch_500', 1);
            await updateMissionProgress(env, user.id, 'watch_1000', 1);
        }
        await env.DB.prepare('UPDATE manual_content SET views = views + 1 WHERE id = ?').bind(contentId).run();
        const dbUserAfter = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        const newDailyWatch = await checkDailyWatchLimit(env, user.id, isVip);
        let playerAds = [];
        if (!isVip) playerAds = await getPlayerAds(env);
        let videoServers = [];
        if (content.video_servers) {
            const allServers = JSON.parse(content.video_servers);
            videoServers = allServers.filter(s => !s.isVip || isVip);
        }
        return successResponse({ newKoin: dbUserAfter ? dbUserAfter.koin : 0, dailyWatch: newDailyWatch, videoServers, playerAds }, 'Berhasil memulai pemutaran');
    } catch (e) { return errorResponse('Gagal memproses pembayaran: ' + dbHint(e), 500); }
}

// ============================================================
// ADMIN: CONTENT & EPISODES
// ============================================================
async function handleAdminGetAllManualContent(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const search = (url.searchParams.get('q') || '').trim();
        const offset = (page - 1) * limit;
        let query = 'SELECT * FROM manual_content';
        let countQuery = 'SELECT COUNT(*) as count FROM manual_content';
        let params = [];
        if (search) { query += ' WHERE title LIKE ? OR description LIKE ?'; countQuery += ' WHERE title LIKE ? OR description LIKE ?'; params = [`%${search}%`, `%${search}%`]; }
        query += ' ORDER BY COALESCE(updated_at, created_at) DESC LIMIT ? OFFSET ?';
        const content = await env.DB.prepare(query).bind(...params, limit, offset).all();
        const total = await env.DB.prepare(countQuery).bind(...params).first();
        return successResponse({
            content: content.results.map(item => ({ ...item, durationText: formatDuration(item.duration), latestEpisodeNumber: item.latest_episode_number || 0, totalEpisodes: item.total_episodes || 0, isFeatured: item.is_featured === 1, createdAtWIB: formatDateWIB(item.created_at) })),
            total: total.count, page, totalPages: Math.ceil(total.count / limit)
        });
    } catch (e) { return errorResponse('Gagal mengambil konten', 500); }
}
async function handleAdminAddManualContent(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { title, description, posterUrl, rating, duration, subtitle, genres, videoServers, downloadFree, downloadPremium, type, price, country, year, isFeatured } = body;
        if (!title) return errorResponse('Judul wajib diisi');
        if (!posterUrl) return errorResponse('URL foto wajib diisi');
        const genreStr = Array.isArray(genres) ? genres.join(',') : (genres || '');
        const videoServersJson = (videoServers && videoServers.length > 0) ? JSON.stringify(videoServers) : null;
        const result = await env.DB.prepare(
            `INSERT INTO manual_content (title, description, poster_url, rating, duration, subtitle, genres, video_servers, 
              download_free, download_premium, type, price, country, year, views, is_active, is_featured, created_at, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 1, ?, datetime('now'), datetime('now'))
             RETURNING *`
        ).bind(title, description || '', posterUrl, rating || 0, duration || 0, subtitle || '', genreStr, videoServersJson, downloadFree || '', downloadPremium || '', type || 'free', price || 0, country || '', year || '', isFeatured ? 1 : 0).first();
        try { await notifyNewSeries(env, result.id); } catch (e) {}
        return successResponse(result, 'Series berhasil ditambahkan. ID Series: ' + result.id);
    } catch (e) { return errorResponse('Gagal menambahkan series: ' + dbHint(e), 500); }
}
async function handleAdminUpdateManualContent(request, env, user, contentId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const updates = [], values = [];
        if (body.title !== undefined) { updates.push('title = ?'); values.push(body.title); }
        if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
        if (body.posterUrl !== undefined) { updates.push('poster_url = ?'); values.push(body.posterUrl); }
        if (body.rating !== undefined) { updates.push('rating = ?'); values.push(body.rating); }
        if (body.duration !== undefined) { updates.push('duration = ?'); values.push(body.duration); }
        if (body.subtitle !== undefined) { updates.push('subtitle = ?'); values.push(body.subtitle); }
        if (body.genres !== undefined) { updates.push('genres = ?'); values.push(Array.isArray(body.genres) ? body.genres.join(',') : body.genres); }
        if (body.videoServers !== undefined) { updates.push('video_servers = ?'); values.push(body.videoServers ? JSON.stringify(body.videoServers) : null); }
        if (body.downloadFree !== undefined) { updates.push('download_free = ?'); values.push(body.downloadFree); }
        if (body.downloadPremium !== undefined) { updates.push('download_premium = ?'); values.push(body.downloadPremium); }
        if (body.type !== undefined) { updates.push('type = ?'); values.push(body.type); }
        if (body.price !== undefined) { updates.push('price = ?'); values.push(body.price); }
        if (body.country !== undefined) { updates.push('country = ?'); values.push(body.country); }
        if (body.year !== undefined) { updates.push('year = ?'); values.push(body.year); }
        if (body.isActive !== undefined) { updates.push('is_active = ?'); values.push(body.isActive ? 1 : 0); }
        if (body.isFeatured !== undefined) { updates.push('is_featured = ?'); values.push(body.isFeatured ? 1 : 0); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push("updated_at = datetime('now')");
        values.push(contentId);
        await env.DB.prepare(`UPDATE manual_content SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        return successResponse(null, 'Series berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui: ' + dbHint(e), 500); }
}
async function handleAdminDeleteManualContent(request, env, user, contentId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        await env.DB.prepare('DELETE FROM episodes WHERE series_id = ?').bind(contentId).run();
        await env.DB.prepare('DELETE FROM watch_history WHERE content_id = ?').bind(contentId).run();
        await env.DB.prepare('DELETE FROM comments WHERE content_id = ?').bind(contentId).run();
        await env.DB.prepare('DELETE FROM reactions WHERE content_id = ?').bind(contentId).run();
        await env.DB.prepare('DELETE FROM manual_content WHERE id = ?').bind(contentId).run();
        return successResponse(null, 'Series & semua episode berhasil dihapus permanen');
    } catch (e) { return errorResponse('Gagal menghapus: ' + dbHint(e), 500); }
}
async function handleAdminGetEpisodes(request, env, user, seriesId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const q = (url.searchParams.get('q') || '').trim().toLowerCase();
        const offset = (page - 1) * limit;
        const series = await env.DB.prepare('SELECT id, title FROM manual_content WHERE id = ?').bind(seriesId).first();
        if (!series) return errorResponse('Series tidak ditemukan', 404);
        let query = 'SELECT * FROM episodes WHERE series_id = ?';
        let countQuery = 'SELECT COUNT(*) as count FROM episodes WHERE series_id = ?';
        let params = [seriesId];
        if (q) { query += ' AND (LOWER(title) LIKE ? OR CAST(episode_number AS TEXT) LIKE ?)'; countQuery += ' AND (LOWER(title) LIKE ? OR CAST(episode_number AS TEXT) LIKE ?)'; params.push(`%${q}%`, `%${q}%`); }
        query += ' ORDER BY episode_number ASC LIMIT ? OFFSET ?';
        const episodes = await env.DB.prepare(query).bind(...params, limit, offset).all();
        const total = await env.DB.prepare(countQuery).bind(...params).first();
        return successResponse({ seriesId: series.id, seriesTitle: series.title, episodes: (episodes.results || []).map(e => ({ ...e, durationText: formatDuration(e.duration), createdAtWIB: formatDateWIB(e.created_at) })), total: total.count, page, totalPages: Math.ceil(total.count / limit) });
    } catch (e) { return errorResponse('Gagal memuat episode: ' + dbHint(e), 500); }
}
async function handleAdminAddEpisode(request, env, user, seriesId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { episodeNumber, title, description, thumbnailUrl, videoServers, duration, type, price, downloadFree, downloadPremium } = body;
        if (!episodeNumber || episodeNumber < 1) return errorResponse('Nomor episode wajib diisi (>= 1)');
        if (!videoServers || !Array.isArray(videoServers) || videoServers.length === 0) return errorResponse('Minimal 1 server video');
        const series = await env.DB.prepare('SELECT id FROM manual_content WHERE id = ?').bind(seriesId).first();
        if (!series) return errorResponse('Series dengan ID ' + seriesId + ' tidak ditemukan', 404);
        const dup = await env.DB.prepare('SELECT id FROM episodes WHERE series_id = ? AND episode_number = ?').bind(seriesId, episodeNumber).first();
        if (dup) return errorResponse('Nomor episode ' + episodeNumber + ' sudah ada di series ini', 400);
        const result = await env.DB.prepare(
            `INSERT INTO episodes (series_id, episode_number, title, description, thumbnail_url, video_servers, duration, type, price, download_free, download_premium, is_active, created_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, datetime('now')) RETURNING *`
        ).bind(seriesId, episodeNumber, title || '', description || '', thumbnailUrl || '', JSON.stringify(videoServers), duration || 0, type || 'free', price || 0, downloadFree || '', downloadPremium || '').first();
        await refreshSeriesStats(env, seriesId);
        try { await notifyNewEpisode(env, seriesId, episodeNumber); } catch (e) {}
        return successResponse(result, 'Episode ' + episodeNumber + ' berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambah episode: ' + dbHint(e), 500); }
}
async function handleAdminUpdateEpisode(request, env, user, episodeId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const ep = await env.DB.prepare('SELECT series_id FROM episodes WHERE id = ?').bind(episodeId).first();
        if (!ep) return errorResponse('Episode tidak ditemukan', 404);
        const updates = [], values = [];
        if (body.episodeNumber !== undefined) { updates.push('episode_number = ?'); values.push(body.episodeNumber); }
        if (body.title !== undefined) { updates.push('title = ?'); values.push(body.title); }
        if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description); }
        if (body.thumbnailUrl !== undefined) { updates.push('thumbnail_url = ?'); values.push(body.thumbnailUrl); }
        if (body.videoServers !== undefined) { updates.push('video_servers = ?'); values.push(JSON.stringify(body.videoServers)); }
        if (body.duration !== undefined) { updates.push('duration = ?'); values.push(body.duration); }
        if (body.type !== undefined) { updates.push('type = ?'); values.push(body.type); }
        if (body.price !== undefined) { updates.push('price = ?'); values.push(body.price); }
        if (body.downloadFree !== undefined) { updates.push('download_free = ?'); values.push(body.downloadFree); }
        if (body.downloadPremium !== undefined) { updates.push('download_premium = ?'); values.push(body.downloadPremium); }
        if (body.isActive !== undefined) { updates.push('is_active = ?'); values.push(body.isActive ? 1 : 0); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push("updated_at = datetime('now')");
        values.push(episodeId);
        await env.DB.prepare(`UPDATE episodes SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        await refreshSeriesStats(env, ep.series_id);
        return successResponse(null, 'Episode berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal update episode: ' + dbHint(e), 500); }
}
async function handleAdminDeleteEpisode(request, env, user, episodeId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const ep = await env.DB.prepare('SELECT series_id FROM episodes WHERE id = ?').bind(episodeId).first();
        if (!ep) return errorResponse('Episode tidak ditemukan', 404);
        await env.DB.prepare('DELETE FROM episodes WHERE id = ?').bind(episodeId).run();
        await env.DB.prepare('DELETE FROM watch_history WHERE episode_id = ?').bind(episodeId).run();
        await refreshSeriesStats(env, ep.series_id);
        return successResponse(null, 'Episode berhasil dihapus');
    } catch (e) { return errorResponse('Gagal hapus episode: ' + dbHint(e), 500); }
}

// ============================================================
// ADMIN: USERS
// ============================================================
async function handleAdminGetUsers(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const search = url.searchParams.get('q') || '';
        const limit = 20;
        const offset = (page - 1) * limit;
        let query = `SELECT id, username, display_name, email, role, is_vip, vip_expires_at, koin, level, exp, created_at, is_verified, email_verified, ip_address, is_blocked, telegram_id, telegram, notifications_enabled FROM users`;
        let countQuery = `SELECT COUNT(*) as count FROM users`;
        let params = [];
        if (search) {
            query += ` WHERE username LIKE ? OR email LIKE ? OR display_name LIKE ? OR telegram LIKE ?`;
            countQuery += ` WHERE username LIKE ? OR email LIKE ? OR display_name LIKE ? OR telegram LIKE ?`;
            params = [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`];
        }
        query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
        const users = await env.DB.prepare(query).bind(...params, limit, offset).all();
        const total = await env.DB.prepare(countQuery).bind(...params).first();
        return successResponse({
            users: users.results.map(u => ({ ...u, isVip: u.is_vip === 1, isVerified: u.is_verified === 1, emailVerified: u.email_verified === 1, isBlocked: u.is_blocked === 1, ipAddress: u.ip_address, telegramId: u.telegram_id, telegramUsername: u.telegram, notificationsEnabled: u.notifications_enabled === 1, vipExpiresAtWIB: formatDateWIB(u.vip_expires_at), createdAtWIB: formatDateWIB(u.created_at) })),
            total: total.count, page, totalPages: Math.ceil(total.count / limit)
        });
    } catch (e) { return errorResponse('Gagal mengambil data user', 500); }
}
async function handleAdminSetVip(request, env, user, targetUserId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { isVip, durationDays } = body;
        let vipExpiresAt = null;
        if (isVip && durationDays && durationDays > 0) vipExpiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString();
        await env.DB.prepare("UPDATE users SET is_vip = ?, vip_expires_at = ?, updated_at = datetime('now') WHERE id = ?").bind(isVip ? 1 : 0, vipExpiresAt, targetUserId).run();
        try { await env.DB.prepare('INSERT INTO vip_logs (user_id, action, duration_days, performed_by) VALUES (?, ?, ?, ?)').bind(targetUserId, isVip ? 'activate' : 'deactivate', durationDays || null, user.id).run(); } catch (e) {}
        return successResponse(null, isVip ? 'User berhasil dijadikan VIP' : 'Status VIP user dicabut');
    } catch (e) { return errorResponse('Gagal mengubah status VIP', 500); }
}
async function handleAdminSetKoin(request, env, user, targetUserId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { koin, action } = body;
        if (action === 'add') {
            await env.DB.prepare('UPDATE users SET koin = koin + ?, updated_at = datetime("now") WHERE id = ?').bind(koin, targetUserId).run();
            await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(targetUserId, 'earn', koin, 'admin').run();
        } else if (action === 'set') {
            const current = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(targetUserId).first();
            const diff = koin - (current ? current.koin : 0);
            await env.DB.prepare('UPDATE users SET koin = ?, updated_at = datetime("now") WHERE id = ?').bind(koin, targetUserId).run();
            if (diff !== 0) await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(targetUserId, diff > 0 ? 'earn' : 'spend', Math.abs(diff), 'admin').run();
        } else return errorResponse('Action tidak valid');
        return successResponse(null, 'Koin user berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui koin', 500); }
}
async function handleAdminVerifyUser(request, env, user, targetUserId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { isVerified } = body;
        await env.DB.prepare("UPDATE users SET is_verified = ?, verified_at = CASE WHEN ? = 1 THEN datetime('now') ELSE NULL END, updated_at = datetime('now') WHERE id = ?").bind(isVerified ? 1 : 0, isVerified ? 1 : 0, targetUserId).run();
        return successResponse(null, isVerified ? 'User berhasil diverifikasi ✓' : 'Verifikasi user dicabut');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleAdminDeleteUser(request, env, user, targetUserId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    if (Number(user.id) === Number(targetUserId)) return errorResponse('Tidak bisa menghapus akun sendiri', 400);
    try {
        const target = await env.DB.prepare('SELECT id, role FROM users WHERE id = ?').bind(targetUserId).first();
        if (!target) return errorResponse('User tidak ditemukan', 404);
        const posts = await env.DB.prepare('SELECT id FROM gallery_posts WHERE user_id = ?').bind(targetUserId).all();
        const postIds = posts.results.map(p => p.id);
        if (postIds.length > 0) {
            const ph = postIds.map(() => '?').join(',');
            await env.DB.prepare(`DELETE FROM gallery_purchases WHERE post_id IN (${ph})`).bind(...postIds).run();
            await env.DB.prepare(`DELETE FROM gallery_likes WHERE post_id IN (${ph})`).bind(...postIds).run();
            await env.DB.prepare(`DELETE FROM gallery_saves WHERE post_id IN (${ph})`).bind(...postIds).run();
            try { await env.DB.prepare(`DELETE FROM gallery_comments WHERE post_id IN (${ph})`).bind(...postIds).run(); } catch (e) {}
        }
        await env.DB.prepare('DELETE FROM gallery_posts WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM gallery_purchases WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM gallery_likes WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM gallery_saves WHERE user_id = ?').bind(targetUserId).run();
        try { await env.DB.prepare('DELETE FROM gallery_comments WHERE user_id = ?').bind(targetUserId).run(); } catch (e) {}
        await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM comments WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM watch_history WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM reactions WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM transactions WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM missions WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM user_missions WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM user_borders WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM user_bubbles WHERE user_id = ?').bind(targetUserId).run();
        await env.DB.prepare('DELETE FROM content_requests WHERE user_id = ?').bind(targetUserId).run();
        try { await env.DB.prepare('DELETE FROM level_logs WHERE user_id = ?').bind(targetUserId).run(); } catch (e) {}
        try { await env.DB.prepare('DELETE FROM vip_logs WHERE user_id = ?').bind(targetUserId).run(); } catch (e) {}
        try { await env.DB.prepare('DELETE FROM user_gifts WHERE user_id = ? OR sender_id = ?').bind(targetUserId, targetUserId).run(); } catch (e) {}
        await env.DB.prepare('UPDATE vouchers SET used_by = NULL WHERE used_by = ?').bind(targetUserId).run();
        try { await env.DB.prepare('UPDATE users SET referred_by = NULL WHERE referred_by = ?').bind(targetUserId).run(); } catch (e) {}
        await env.DB.prepare('DELETE FROM users WHERE id = ?').bind(targetUserId).run();
        return successResponse(null, 'User berhasil dihapus permanen');
    } catch (e) { return errorResponse('Gagal menghapus user: ' + dbHint(e), 500); }
}
async function handleAdminToggleBlockIp(request, env, user, userId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    if (Number(user.id) === Number(userId)) return errorResponse('Tidak bisa memblokir IP sendiri', 400);
    try {
        const body = await request.json();
        const { block } = body;
        const target = await env.DB.prepare('SELECT id, ip_address FROM users WHERE id = ?').bind(userId).first();
        if (!target) return errorResponse('User tidak ditemukan', 404);
        if (!target.ip_address) return errorResponse('User ini belum memiliki IP tercatat', 400);
        if (block) {
            await env.DB.prepare('INSERT OR REPLACE INTO blocked_ips (ip_address, reason, blocked_by, created_at) VALUES (?, ?, ?, datetime("now"))').bind(target.ip_address, 'Blocked by admin', user.id).run();
            await env.DB.prepare('UPDATE users SET is_blocked = 1 WHERE id = ?').bind(userId).run();
            return successResponse(null, 'IP ' + target.ip_address + ' berhasil diblokir');
        } else {
            await env.DB.prepare('DELETE FROM blocked_ips WHERE ip_address = ?').bind(target.ip_address).run();
            await env.DB.prepare('UPDATE users SET is_blocked = 0 WHERE id = ?').bind(userId).run();
            return successResponse(null, 'IP ' + target.ip_address + ' berhasil di-unblock');
        }
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleAdminGetBlockedIps(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { const ips = await env.DB.prepare('SELECT * FROM blocked_ips ORDER BY created_at DESC LIMIT 100').all(); return successResponse({ ips: ips.results || [] }); }
    catch (e) { return errorResponse('Gagal', 500); }
}

// ============================================================
// ADMIN: PLAYER ADS
// ============================================================
async function handleAdminGetPlayerAds(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const row = await getAppSettingRow(env, 'player_ads');
        const ads = row && row.value ? JSON.parse(row.value) : [];
        const now = new Date();
        return successResponse({ ads: ads.map(ad => ({ ...ad, isExpired: ad.expiresAt ? new Date(ad.expiresAt) <= now : false })) });
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleAdminAddPlayerAd(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { title, videoUrl, expiresAt, enabled } = body;
        if (!title || !videoUrl) return errorResponse('Judul dan URL video wajib diisi');
        const row = await getAppSettingRow(env, 'player_ads');
        let ads = row && row.value ? JSON.parse(row.value) : [];
        const newAd = { id: generateId(), title, videoUrl, expiresAt: expiresAt || null, enabled: enabled !== false, createdAt: new Date().toISOString() };
        ads.push(newAd);
        await env.DB.prepare(`INSERT OR REPLACE INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`).bind('player_ads', JSON.stringify(ads)).run();
        return successResponse(newAd, 'Iklan player berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan iklan', 500); }
}
async function handleAdminUpdatePlayerAd(request, env, user, adId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const row = await getAppSettingRow(env, 'player_ads');
        let ads = row && row.value ? JSON.parse(row.value) : [];
        const idx = ads.findIndex(a => a.id === adId);
        if (idx === -1) return errorResponse('Iklan tidak ditemukan', 404);
        if (body.title !== undefined) ads[idx].title = body.title;
        if (body.videoUrl !== undefined) ads[idx].videoUrl = body.videoUrl;
        if (body.expiresAt !== undefined) ads[idx].expiresAt = body.expiresAt;
        if (body.enabled !== undefined) ads[idx].enabled = body.enabled;
        await env.DB.prepare(`INSERT OR REPLACE INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`).bind('player_ads', JSON.stringify(ads)).run();
        return successResponse(ads[idx], 'Iklan berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui iklan', 500); }
}
async function handleAdminDeletePlayerAd(request, env, user, adId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const row = await getAppSettingRow(env, 'player_ads');
        let ads = row && row.value ? JSON.parse(row.value) : [];
        ads = ads.filter(a => a.id !== adId);
        await env.DB.prepare(`INSERT OR REPLACE INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))`).bind('player_ads', JSON.stringify(ads)).run();
        return successResponse(null, 'Iklan berhasil dihapus');
    } catch (e) { return errorResponse('Gagal menghapus iklan', 500); }
}

// ============================================================
// ADMIN: GIFTS
// ============================================================
async function handleAdminGetGifts(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { const gifts = await env.DB.prepare('SELECT * FROM gifts ORDER BY id DESC LIMIT 200').all(); return successResponse({ gifts: gifts.results || [] }); }
    catch (e) { return errorResponse('Gagal memuat gifts', 500); }
}
async function handleAdminAddGift(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { name, url, price, expReward } = body;
        if (!name || !url) return errorResponse('Nama dan URL wajib diisi');
        const result = await env.DB.prepare(`INSERT INTO gifts (name, url, price, exp_reward, is_active, created_at) VALUES (?, ?, ?, ?, 1, datetime('now')) RETURNING *`).bind(name, url, price || 0, expReward || 0).first();
        return successResponse(result, 'Gift berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambah gift: ' + dbHint(e), 500); }
}
async function handleAdminUpdateGift(request, env, user, giftId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const updates = [], values = [];
        if (body.name !== undefined) { updates.push('name = ?'); values.push(body.name); }
        if (body.url !== undefined) { updates.push('url = ?'); values.push(body.url); }
        if (body.price !== undefined) { updates.push('price = ?'); values.push(body.price); }
        if (body.expReward !== undefined) { updates.push('exp_reward = ?'); values.push(body.expReward); }
        if (body.isActive !== undefined) { updates.push('is_active = ?'); values.push(body.isActive ? 1 : 0); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        values.push(giftId);
        await env.DB.prepare(`UPDATE gifts SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        return successResponse(null, 'Gift berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal update gift', 500); }
}
async function handleAdminDeleteGift(request, env, user, giftId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { await env.DB.prepare('UPDATE gifts SET is_active = 0 WHERE id = ?').bind(giftId).run(); return successResponse(null, 'Gift dinonaktifkan'); }
    catch (e) { return errorResponse('Gagal hapus gift', 500); }
}

// ============================================================
// USER: GIFTS
// ============================================================
async function handleGetGifts(request, env, user) {
    try { const gifts = await env.DB.prepare('SELECT * FROM gifts WHERE is_active = 1 ORDER BY price ASC').all(); return successResponse({ gifts: gifts.results || [] }); }
    catch (e) { return errorResponse('Gagal mengambil gifts', 500); }
}
async function handleSendGift(request, env, user, giftId) {
    if (!user) return errorResponse('Login required', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { targetUserId } = body;
        if (!targetUserId) return errorResponse('Target user diperlukan');
        if (Number(targetUserId) === Number(user.id)) return errorResponse('Tidak bisa gift diri sendiri', 400);
        const gift = await env.DB.prepare('SELECT * FROM gifts WHERE id = ? AND is_active = 1').bind(giftId).first();
        if (!gift) return errorResponse('Gift tidak ditemukan', 404);
        const target = await env.DB.prepare('SELECT id, username, display_name FROM users WHERE id = ?').bind(targetUserId).first();
        if (!target) return errorResponse('Target user tidak ditemukan', 404);
        const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        if (!dbUser || dbUser.koin < gift.price) return errorResponse(`Koin tidak cukup. Butuh ${gift.price} koin, kamu punya ${dbUser ? dbUser.koin : 0}`, 403);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(gift.price, user.id).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', gift.price, 'gift_send_' + giftId).run();
        await env.DB.prepare('INSERT INTO user_gifts (user_id, sender_id, gift_id, gift_name, gift_url, price, exp_reward, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, datetime("now"))').bind(targetUserId, user.id, giftId, gift.name, gift.url, gift.price, gift.exp_reward).run();
        await addExpOnly(env, user.id, gift.exp_reward);
        await addExpOnly(env, targetUserId, gift.exp_reward);
        await updateMissionProgress(env, user.id, 'gift', 1);
        try { await notifyGiftReceived(env, targetUserId, user, gift); } catch (e) {}
        const dbUserAfter = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        return successResponse({ newKoin: dbUserAfter ? dbUserAfter.koin : 0, receiver: target.display_name || target.username, expGained: gift.exp_reward }, `Berhasil kirim ${gift.name}! +${gift.exp_reward} EXP`);
    } catch (e) { return errorResponse('Gagal mengirim gift: ' + dbHint(e), 500); }
}
async function handleGetUserGifts(request, env, username) {
    try {
        const target = await env.DB.prepare('SELECT id FROM users WHERE username = ?').bind(username).first();
        if (!target) return errorResponse('User tidak ditemukan', 404);
        const gifts = await env.DB.prepare(
            `SELECT ug.*, u.username as sender_username, u.display_name as sender_display_name, u.avatar_url as sender_avatar
             FROM user_gifts ug JOIN users u ON ug.sender_id = u.id
             WHERE ug.user_id = ? ORDER BY ug.created_at DESC LIMIT 50`
        ).bind(target.id).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM user_gifts WHERE user_id = ?').bind(target.id).first();
        return successResponse({
            gifts: (gifts.results || []).map(g => ({ id: g.id, giftName: g.gift_name, giftUrl: g.gift_url, price: g.price, expReward: g.exp_reward, senderId: g.sender_id, senderUsername: g.sender_username, senderDisplayName: g.sender_display_name, senderAvatar: g.sender_avatar, createdAt: g.created_at, createdAtWIB: formatDateWIB(g.created_at) })),
            total: total.count
        });
    } catch (e) { return errorResponse('Gagal memuat gifts', 500); }
}

// ⭐ NEW v29: COIN TRANSFER
async function handleCoinTransfer(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const rawUsername = (body.username || '').trim().replace(/^@/, '').toLowerCase();
        const amount = parseInt(body.amount);
        if (!rawUsername) return errorResponse('Username penerima wajib diisi');
        if (!amount || amount < CONFIG.MIN_COIN_TRANSFER) return errorResponse(`Minimal transfer ${CONFIG.MIN_COIN_TRANSFER} koin`);
        if (amount > CONFIG.MAX_COIN_TRANSFER) return errorResponse(`Maksimal transfer ${formatKoin(CONFIG.MAX_COIN_TRANSFER)} koin`);
        if (rawUsername === (user.username || '').toLowerCase()) return errorResponse('Tidak bisa transfer ke diri sendiri');
        const receiver = await env.DB.prepare('SELECT id, username, display_name, telegram_id, notifications_enabled FROM users WHERE LOWER(username) = ?').bind(rawUsername).first();
        if (!receiver) return errorResponse('Username penerima tidak ditemukan');
        if (receiver.id === user.id) return errorResponse('Tidak bisa transfer ke diri sendiri');
        const sender = await env.DB.prepare('SELECT id, username, display_name, koin, telegram_id, notifications_enabled FROM users WHERE id = ?').bind(user.id).first();
        if (!sender || sender.koin < amount) return errorResponse(`Koin tidak cukup. Saldo: ${formatKoin(sender ? sender.koin : 0)} koin`);
        const today = new Date().toISOString().split('T')[0];
        const todayTransfers = await env.DB.prepare(
            "SELECT COUNT(*) as c FROM transactions WHERE user_id = ? AND source = 'coin_transfer_send' AND date(created_at) = ?"
        ).bind(user.id, today).first();
        if (todayTransfers && todayTransfers.c >= 10) return errorResponse('Maksimal 10 transfer per hari');
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(amount, user.id).run();
        await env.DB.prepare('UPDATE users SET koin = koin + ?, updated_at = datetime("now") WHERE id = ?').bind(amount, receiver.id).run();
        await env.DB.prepare("INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, 'spend', ?, 'coin_transfer_send', datetime('now'))").bind(user.id, amount).run();
        await env.DB.prepare("INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, 'earn', ?, 'coin_transfer_receive', datetime('now'))").bind(receiver.id, amount).run();
        try { await notifyCoinTransfer(env, sender, receiver, amount); } catch (e) {}
        const updated = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        return successResponse({
            newKoin: updated ? updated.koin : 0,
            amount: amount,
            receiver: { username: receiver.username, displayName: receiver.display_name || receiver.username }
        }, `Berhasil transfer ${formatKoin(amount)} koin ke @${receiver.username}`);
    } catch (e) { return errorResponse('Gagal transfer koin: ' + dbHint(e), 500); }
}

// ⭐ NEW v29: TELEGRAM CHANGE (berbayar 15.000 koin)
async function handleChangeTelegram(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const body = await request.json();
        const newTg = String(body.telegram || '').trim().replace(/^@/, '');
        if (!newTg) return errorResponse('Username Telegram wajib diisi');
        if (!/^[a-zA-Z0-9_]{3,32}$/.test(newTg)) return errorResponse('Username Telegram tidak valid (3-32 huruf/angka/_)');
        const current = await env.DB.prepare('SELECT telegram, koin FROM users WHERE id = ?').bind(user.id).first();
        if (!current) return errorResponse('User tidak ditemukan', 404);
        if ((current.telegram || '').toLowerCase() === newTg.toLowerCase()) return errorResponse('Username Telegram sama dengan yang sekarang');
        if (current.koin < CONFIG.TELEGRAM_CHANGE_COST) return errorResponse(`Koin tidak cukup. Butuh ${formatKoin(CONFIG.TELEGRAM_CHANGE_COST)} koin, kamu punya ${formatKoin(current.koin)}`, 403);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, telegram = ?, updated_at = datetime("now") WHERE id = ?').bind(CONFIG.TELEGRAM_CHANGE_COST, newTg, user.id).run();
        await env.DB.prepare("INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, 'spend', ?, 'telegram_change', datetime('now'))").bind(user.id, CONFIG.TELEGRAM_CHANGE_COST).run();
        const updated = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        return successResponse({ newKoin: updated.koin, telegram: newTg }, `Username Telegram berhasil diganti menjadi @${newTg}`);
    } catch (e) { return errorResponse('Gagal ganti Telegram: ' + dbHint(e), 500); }
}

// ============================================================
// ADMIN: BORDERS / BUBBLES / LEVELS
// ============================================================
async function handleAdminGetAvatarBorders(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const offset = (page - 1) * limit;
        const borders = await env.DB.prepare('SELECT * FROM avatar_borders ORDER BY id DESC LIMIT ? OFFSET ?').bind(limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM avatar_borders').first();
        return successResponse({ borders: borders.results, total: total.count, page, totalPages: Math.ceil(total.count / limit) });
    } catch (e) { return errorResponse('Gagal mengambil data border', 500); }
}
async function handleAdminAddAvatarBorder(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { name, url, price, scale, durationDays } = body;
        if (!name || !url) return errorResponse('Nama dan URL wajib diisi');
        const result = await env.DB.prepare(`INSERT INTO avatar_borders (name, url, price, scale, duration_days, is_active, created_at) VALUES (?, ?, ?, ?, ?, 1, datetime('now')) RETURNING *`).bind(name, url, price || 0, scale || 1.2, durationDays || 0).first();
        return successResponse(result, 'Avatar border berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan border', 500); }
}
async function handleAdminUpdateAvatarBorder(request, env, user, borderId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const updates = [], values = [];
        if (body.name !== undefined) { updates.push('name = ?'); values.push(body.name); }
        if (body.url !== undefined) { updates.push('url = ?'); values.push(body.url); }
        if (body.price !== undefined) { updates.push('price = ?'); values.push(body.price); }
        if (body.scale !== undefined) { updates.push('scale = ?'); values.push(body.scale); }
        if (body.durationDays !== undefined) { updates.push('duration_days = ?'); values.push(body.durationDays); }
        if (body.isActive !== undefined) { updates.push('is_active = ?'); values.push(body.isActive ? 1 : 0); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push("updated_at = datetime('now')");
        values.push(borderId);
        await env.DB.prepare(`UPDATE avatar_borders SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        return successResponse(null, 'Border berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui border', 500); }
}
async function handleAdminDeleteAvatarBorder(request, env, user, borderId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { await env.DB.prepare('UPDATE avatar_borders SET is_active = 0 WHERE id = ?').bind(borderId).run(); return successResponse(null, 'Border dinonaktifkan'); }
    catch (e) { return errorResponse('Gagal menonaktifkan border', 500); }
}
async function handleAdminGetBubbles(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const offset = (page - 1) * limit;
        const bubbles = await env.DB.prepare('SELECT * FROM bubbles ORDER BY id DESC LIMIT ? OFFSET ?').bind(limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM bubbles').first();
        return successResponse({ bubbles: bubbles.results, total: total.count, page, totalPages: Math.ceil(total.count / limit) });
    } catch (e) { return errorResponse('Gagal mengambil data bubble', 500); }
}
async function handleAdminAddBubble(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { name, price, durationDays, css, html } = body;
        if (!name || !css || !html) return errorResponse('Nama, CSS, dan HTML wajib diisi');
        const result = await env.DB.prepare(`INSERT INTO bubbles (name, price, duration_days, css, html, is_active, created_at) VALUES (?, ?, ?, ?, ?, 1, datetime('now')) RETURNING *`).bind(name, price || 0, durationDays || 0, css, html).first();
        return successResponse(result, 'Bubble berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan bubble: ' + dbHint(e), 500); }
}
async function handleAdminUpdateBubble(request, env, user, bubbleId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const updates = [], values = [];
        if (body.name !== undefined) { updates.push('name = ?'); values.push(body.name); }
        if (body.price !== undefined) { updates.push('price = ?'); values.push(body.price); }
        if (body.durationDays !== undefined) { updates.push('duration_days = ?'); values.push(body.durationDays); }
        if (body.css !== undefined) { updates.push('css = ?'); values.push(body.css); }
        if (body.html !== undefined) { updates.push('html = ?'); values.push(body.html); }
        if (body.isActive !== undefined) { updates.push('is_active = ?'); values.push(body.isActive ? 1 : 0); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push("updated_at = datetime('now')");
        values.push(bubbleId);
        await env.DB.prepare(`UPDATE bubbles SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        return successResponse(null, 'Bubble berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui bubble', 500); }
}
async function handleAdminDeleteBubble(request, env, user, bubbleId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { await env.DB.prepare('UPDATE bubbles SET is_active = 0 WHERE id = ?').bind(bubbleId).run(); return successResponse(null, 'Bubble dinonaktifkan'); }
    catch (e) { return errorResponse('Gagal menonaktifkan bubble', 500); }
}
async function handleAdminGetLevels(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '20');
        const offset = (page - 1) * limit;
        const levels = await env.DB.prepare('SELECT * FROM levels ORDER BY level_number ASC LIMIT ? OFFSET ?').bind(limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM levels').first();
        return successResponse({ levels: levels.results, total: total.count, page, totalPages: Math.ceil(total.count / limit) });
    } catch (e) { return errorResponse('Gagal mengambil data level', 500); }
}
async function handleAdminAddLevel(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const { levelNumber, levelUrl, expRequired } = body;
        if (!levelNumber || !expRequired) return errorResponse('Nomor level dan exp wajib diisi');
        if (!levelUrl) return errorResponse('URL gambar level wajib diisi');
        const result = await env.DB.prepare(`INSERT INTO levels (level_number, level_url, exp_required, created_at) VALUES (?, ?, ?, datetime('now')) RETURNING *`).bind(levelNumber, levelUrl, expRequired).first();
        return successResponse(result, 'Level berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan level', 500); }
}
async function handleAdminUpdateLevel(request, env, user, levelId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        const updates = [], values = [];
        if (body.levelNumber !== undefined) { updates.push('level_number = ?'); values.push(body.levelNumber); }
        if (body.levelUrl !== undefined) { updates.push('level_url = ?'); values.push(body.levelUrl); }
        if (body.expRequired !== undefined) { updates.push('exp_required = ?'); values.push(body.expRequired); }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push("updated_at = datetime('now')");
        values.push(levelId);
        await env.DB.prepare(`UPDATE levels SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        return successResponse(null, 'Level berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui level', 500); }
}
async function handleAdminDeleteLevel(request, env, user, levelId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try { await env.DB.prepare('DELETE FROM levels WHERE id = ?').bind(levelId).run(); return successResponse(null, 'Level berhasil dihapus'); }
    catch (e) { return errorResponse('Gagal menghapus level', 500); }
}

// ============================================================
// NOTES / SETTINGS / PROMOS / VOUCHERS
// ============================================================
async function handleGetNotes(request, env, user) {
    try {
        const homeNote = await getAppSetting(env, 'home_note');
        const playerNote = await getAppSetting(env, 'player_note');
        const turnstileEnabled = await getAppSetting(env, 'turnstile_enabled');
        const turnstileSiteKey = await getAppSetting(env, 'turnstile_site_key');
        const turnstileSecretKey = isAdmin(user) ? await getAppSetting(env, 'turnstile_secret_key') : null;
        const emailVerifSetting = await getAppSetting(env, 'email_verification_enabled');
        const emailVerificationEnabled = emailVerifSetting !== 'false';
        const adSlots = await getAdSlots(env);
        const playerAds = await getPlayerAds(env);
        const customTabs = await getCustomTabs(env);
        let promoBanners = [];
        try { const pbRow = await getAppSettingRow(env, 'promo_banners'); if (pbRow && pbRow.value) promoBanners = JSON.parse(pbRow.value); } catch (e) {}
        let downloadAds = [];
        try { const daRow = await getAppSettingRow(env, 'download_ads'); if (daRow && daRow.value) downloadAds = JSON.parse(daRow.value); } catch (e) {}
        const promos = await env.DB.prepare('SELECT * FROM promos WHERE is_active = 1 AND (expires_at IS NULL OR expires_at > datetime("now"))').all();
        const gyazoConfig = {
            clientId: await getAppSetting(env, 'gyazo_client_id'),
            clientSecret: await getAppSetting(env, 'gyazo_client_secret'),
            callbackUrl: await getAppSetting(env, 'gyazo_callback_url'),
            accessToken: await getAppSetting(env, 'gyazo_access_token')
        };
        const telegramBotUsername = await getAppSetting(env, 'telegram_bot_username');
        const telegramLoginEnabled = !!(telegramBotUsername && env.TELEGRAM_BOT_TOKEN);
        return successResponse({
            homeNote, playerNote,
            turnstileEnabled: turnstileEnabled === 'true',
            turnstileSiteKey: turnstileSiteKey || null,
            turnstileSecretKey: turnstileSecretKey || null,
            emailVerificationEnabled, adSlots, playerAds, customTabs: customTabs || [],
            promoBanners, downloadAds, promos: promos.results || [], gyazoConfig,
            telegramBotUsername: telegramBotUsername || null,
            telegramLoginEnabled, oidcConfigured: false
        }, 'Success', 'public, max-age=60, s-maxage=300');
    } catch (e) { return errorResponse('Gagal mengambil notes', 500); }
}
async function handleAdminSetNotes(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        const body = await request.json();
        if (body.homeNote !== undefined) await setAppSetting(env, 'home_note', body.homeNote || '');
        if (body.playerNote !== undefined) await setAppSetting(env, 'player_note', body.playerNote || '');
        if (body.turnstileEnabled !== undefined) await setAppSetting(env, 'turnstile_enabled', body.turnstileEnabled ? 'true' : 'false');
        if (body.turnstileSiteKey !== undefined) await setAppSetting(env, 'turnstile_site_key', body.turnstileSiteKey || '');
        if (body.turnstileSecretKey !== undefined) await setAppSetting(env, 'turnstile_secret_key', body.turnstileSecretKey || '');
        if (body.emailVerificationEnabled !== undefined) await setAppSetting(env, 'email_verification_enabled', body.emailVerificationEnabled ? 'true' : 'false');
        if (body.adSlots !== undefined) await setAppSetting(env, 'ad_slots', JSON.stringify(body.adSlots));
        if (body.customTabs !== undefined) await setCustomTabs(env, body.customTabs);
        if (body.promoBanners !== undefined) await setAppSetting(env, 'promo_banners', JSON.stringify(body.promoBanners));
        if (body.downloadAds !== undefined) await setAppSetting(env, 'download_ads', JSON.stringify(body.downloadAds));
        if (body.telegramBotUsername !== undefined) await setAppSetting(env, 'telegram_bot_username', body.telegramBotUsername || '');
        if (body.gyazoConfig) {
            await setAppSetting(env, 'gyazo_client_id', body.gyazoConfig.clientId || '');
            await setAppSetting(env, 'gyazo_client_secret', body.gyazoConfig.clientSecret || '');
            await setAppSetting(env, 'gyazo_callback_url', body.gyazoConfig.callbackUrl || '');
            if (body.gyazoConfig.accessToken) await setAppSetting(env, 'gyazo_access_token', body.gyazoConfig.accessToken);
        }
        return successResponse(null, 'Pengaturan berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui pengaturan', 500); }
}
async function handleAdminAddPromo(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { name, description, priceKoin, expiresAt } = body;
        if (!name || !priceKoin) return errorResponse('Nama dan Harga wajib diisi');
        await env.DB.prepare(`INSERT INTO promos (name, description, price_koin, expires_at, is_active, created_at) VALUES (?, ?, ?, ?, 1, datetime('now'))`).bind(name, description, priceKoin, expiresAt || null).run();
        return successResponse(null, 'Promo ditambahkan');
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleAdminDeletePromo(request, env, user, promoId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try { await env.DB.prepare('UPDATE promos SET is_active = 0 WHERE id = ?').bind(promoId).run(); return successResponse(null, 'Promo dihapus'); }
    catch (e) { return errorResponse('Gagal', 500); }
}
async function handleAdminGetVouchers(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try { const vouchers = await env.DB.prepare('SELECT * FROM vouchers ORDER BY created_at DESC LIMIT 50').all(); return successResponse({ vouchers: vouchers.results }); }
    catch (e) { return errorResponse('Gagal', 500); }
}
async function handleAdminCreateVoucher(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { type, value, code } = body;
        if (!type || !value) return errorResponse('Type dan Value wajib');
        let finalCode = code;
        if (!finalCode || finalCode.length !== 12) finalCode = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
        await env.DB.prepare(`INSERT INTO vouchers (code, type, value, is_used, created_at) VALUES (?, ?, ?, 0, datetime('now'))`).bind(finalCode, type, value).run();
        return successResponse({ code: finalCode }, 'Voucher berhasil dibuat');
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleAdminDeleteVoucher(request, env, user, voucherId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try { await env.DB.prepare('DELETE FROM vouchers WHERE id = ?').bind(voucherId).run(); return successResponse(null, 'Voucher berhasil dihapus'); }
    catch (e) { return errorResponse('Gagal', 500); }
}
async function handleRedeemVoucher(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const body = await request.json();
        const { code } = body;
        if (!code || code.length !== 12) return errorResponse('Kode voucher tidak valid');
        const voucher = await env.DB.prepare('SELECT * FROM vouchers WHERE code = ? AND is_used = 0').bind(code).first();
        if (!voucher) return errorResponse('Voucher tidak ditemukan atau sudah digunakan');
        await env.DB.prepare('UPDATE vouchers SET is_used = 1, used_by = ?, used_at = datetime("now") WHERE id = ?').bind(user.id, voucher.id).run();
        if (voucher.type === 'koin') {
            await env.DB.prepare('UPDATE users SET koin = koin + ? WHERE id = ?').bind(voucher.value, user.id).run();
            await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'earn', voucher.value, 'voucher_redeem').run();
        } else if (voucher.type === 'vip') {
            const days = parseInt(voucher.value);
            const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
            await env.DB.prepare("UPDATE users SET is_vip = 1, vip_expires_at = ? WHERE id = ?").bind(expiresAt, user.id).run();
            try {
                const refInfo = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first();
                if (refInfo && refInfo.referred_by) await awardReferralStageBonus(env, refInfo.referred_by, user.id, 'premium', CONFIG.REFERRAL_BONUS_PREMIUM);
            } catch (e) {}
        }
        return successResponse(null, 'Voucher berhasil diredeem!');
    } catch (e) { return errorResponse('Gagal redeem', 500); }
}

// ============================================================
// GALLERY
// ============================================================
async function handleGetGallery(request, env, user) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = 20;
        const offset = (page - 1) * limit;
        const search = url.searchParams.get('q') || '';
        let purchasedIds = [], likedIds = [], savedIds = [];
        if (user) {
            const purchases = await env.DB.prepare('SELECT post_id FROM gallery_purchases WHERE user_id = ?').bind(user.id).all();
            purchasedIds = purchases.results.map(p => p.post_id);
            const likes = await env.DB.prepare('SELECT post_id FROM gallery_likes WHERE user_id = ?').bind(user.id).all();
            likedIds = likes.results.map(p => p.post_id);
            const saves = await env.DB.prepare('SELECT post_id FROM gallery_saves WHERE user_id = ?').bind(user.id).all();
            savedIds = saves.results.map(p => p.post_id);
        }
        let query = `SELECT g.*, u.username, u.display_name, u.avatar_url, u.avatar_border_id, u.level, u.is_verified,
                     (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
                     (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
                     (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
                     (SELECT COUNT(*) FROM gallery_likes WHERE post_id = g.id) as likes_count,
                     (SELECT COUNT(*) FROM gallery_saves WHERE post_id = g.id) as saves_count,
                     (SELECT COUNT(*) FROM gallery_comments WHERE post_id = g.id AND is_deleted = 0) as comments_count
                     FROM gallery_posts g JOIN users u ON g.user_id = u.id`;
        let countQuery = `SELECT COUNT(*) as count FROM gallery_posts g`;
        let params = [];
        if (search) { query += ` WHERE g.description LIKE ?`; countQuery += ` WHERE g.description LIKE ?`; params.push(`%${search}%`); }
        query += ` ORDER BY g.created_at DESC LIMIT ? OFFSET ?`;
        const posts = await env.DB.prepare(query).bind(...params, limit, offset).all();
        const followingSet = await getFollowingSet(env, user);
        const total = await env.DB.prepare(countQuery).bind(...params).first();
        return successResponse({
            posts: posts.results.map(p => {
                const isOwner = user && p.user_id === user.id;
                const isPurchased = purchasedIds.includes(p.id);
                const price = p.price || 0;
                const isLocked = price > 0 && !isOwner && !isPurchased;
                const mediaUrls = p.media_urls ? JSON.parse(p.media_urls) : (p.image_url ? [p.image_url] : []);
                return { id: p.id, user_id: p.user_id, username: p.username, display_name: p.display_name, avatar_url: p.avatar_url, is_verified: p.is_verified === 1, avatar_border_id: p.avatar_border_id, level: p.level, border_url: p.border_url, border_scale: p.border_scale, level_url: p.level_url, image_url: p.image_url, mediaUrls, mediaCount: mediaUrls.length, description: p.description, price, purchase_count: p.purchase_count || 0, likes_count: p.likes_count || 0, saves_count: p.saves_count || 0, comments_count: p.comments_count == null ? undefined : p.comments_count, created_at: p.created_at, isOwner, isPurchased, locked: isLocked, isFollowing: followingSet.has(p.user_id), userLiked: likedIds.includes(p.id), userSaved: savedIds.includes(p.id) };
            }),
            total: total.count, page, totalPages: Math.ceil(total.count / limit)
        });
    } catch (e) { return errorResponse('Gagal memuat galeri', 500); }
}
async function handleGetGalleryDetail(request, env, user, postId) {
    try {
        const post = await env.DB.prepare(
            `SELECT g.*, u.username, u.display_name, u.avatar_url, u.avatar_border_id, u.level, u.is_verified,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT COUNT(*) FROM gallery_likes WHERE post_id = g.id) as likes_count,
             (SELECT COUNT(*) FROM gallery_saves WHERE post_id = g.id) as saves_count
             FROM gallery_posts g JOIN users u ON g.user_id = u.id WHERE g.id = ?`
        ).bind(postId).first();
        if (!post) return errorResponse('Post tidak ditemukan', 404);
        let isPurchased = false, isOwner = false, userLiked = false, userSaved = false;
        if (user) {
            isOwner = user.id === post.user_id;
            if (!isOwner) {
                const purchase = await env.DB.prepare('SELECT id FROM gallery_purchases WHERE user_id = ? AND post_id = ?').bind(user.id, postId).first();
                isPurchased = !!purchase;
            }
            const like = await env.DB.prepare('SELECT id FROM gallery_likes WHERE user_id = ? AND post_id = ?').bind(user.id, postId).first();
            userLiked = !!like;
            const save = await env.DB.prepare('SELECT id FROM gallery_saves WHERE user_id = ? AND post_id = ?').bind(user.id, postId).first();
            userSaved = !!save;
        }
        const price = post.price || 0;
        const isLocked = price > 0 && !isOwner && !isPurchased;
        const mediaUrls = post.media_urls ? JSON.parse(post.media_urls) : (post.image_url ? [post.image_url] : []);
        return successResponse({ post: { ...post, is_verified: post.is_verified === 1, price, mediaUrls, mediaCount: mediaUrls.length, purchase_count: post.purchase_count || 0, isOwner, isPurchased, locked: isLocked, userLiked, userSaved, isFollowing: (await getFollowingSet(env, user)).has(post.user_id) } });
    } catch (e) { return errorResponse('Gagal mengambil post', 500); }
}
async function handleGetSavedGallery(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = 20;
        const offset = (page - 1) * limit;
        const purchases = await env.DB.prepare('SELECT post_id FROM gallery_purchases WHERE user_id = ?').bind(user.id).all();
        const purchasedIds = purchases.results.map(p => p.post_id);
        const posts = await env.DB.prepare(
            `SELECT g.*, u.username, u.display_name, u.avatar_url, u.avatar_border_id, u.level, u.is_verified,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT COUNT(*) FROM gallery_likes WHERE post_id = g.id) as likes_count,
             (SELECT COUNT(*) FROM gallery_saves WHERE post_id = g.id) as saves_count
             FROM gallery_posts g JOIN users u ON g.user_id = u.id
             JOIN gallery_saves gs ON gs.post_id = g.id
             WHERE gs.user_id = ? ORDER BY g.created_at DESC LIMIT ? OFFSET ?`
        ).bind(user.id, limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM gallery_saves WHERE user_id = ?').bind(user.id).first();
        return successResponse({
            posts: posts.results.map(p => {
                const isOwner = p.user_id === user.id;
                const isPurchased = purchasedIds.includes(p.id);
                const price = p.price || 0;
                const isLocked = price > 0 && !isOwner && !isPurchased;
                const mediaUrls = p.media_urls ? JSON.parse(p.media_urls) : (p.image_url ? [p.image_url] : []);
                return { ...p, is_verified: p.is_verified === 1, price, mediaUrls, mediaCount: mediaUrls.length, isOwner, isPurchased, locked: isLocked };
            }),
            total: total.count, page, totalPages: Math.ceil(total.count / limit)
        });
    } catch (e) { return errorResponse('Gagal memuat galeri tersimpan', 500); }
}
async function handleUploadGallery(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const formData = await request.formData();
        const files = formData.getAll('image');
        const description = (formData.get('description') || '').trim();
        const priceRaw = formData.get('price');
        let price = 0;
        if (priceRaw !== null && priceRaw !== undefined && priceRaw !== '') {
            price = parseInt(priceRaw);
            if (isNaN(price) || price < 0) price = 0;
            if (price > CONFIG.GALLERY_PRICE_MAX) return errorResponse(`Harga maksimal ${CONFIG.GALLERY_PRICE_MAX} koin`);
        }
        if (!files || files.length === 0) return errorResponse('Minimal 1 file gambar wajib diupload');
        if (files.length > CONFIG.GALLERY_MAX_MEDIA_PER_POST) return errorResponse(`Maksimal ${CONFIG.GALLERY_MAX_MEDIA_PER_POST} foto per post`);
        if (description.length > CONFIG.GALLERY_CAPTION_MAX) return errorResponse(`Caption maksimal ${CONFIG.GALLERY_CAPTION_MAX} karakter`);
        const accessToken = await getAppSetting(env, 'gyazo_access_token');
        if (!accessToken) return errorResponse('Gyazo belum dikonfigurasi admin', 500);
        // semua foto dikirim ke Gyazo BERSAMAAN (sebelumnya satu per satu); urutan foto tetap sesuai pilihan user
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        const valid = files.filter(file => file && file.size > 0 && (!file.type || allowedTypes.includes(file.type)) && file.size <= 8 * 1024 * 1024);
        const uploadedUrls = (await Promise.all(valid.map(async (file) => {
            const gyazoForm = new FormData();
            gyazoForm.append('access_token', accessToken);
            gyazoForm.append('imagedata', file);
            try {
                const gyazoRes = await fetch('https://upload.gyazo.com/api/upload', { method: 'POST', body: gyazoForm });
                const gyazoData = await gyazoRes.json();
                return gyazoData.url || null;
            } catch (e) { console.error('Gyazo upload file error:', e); return null; }
        }))).filter(Boolean);
        if (uploadedUrls.length === 0) return errorResponse('Gagal upload ke Gyazo');
        const firstUrl = uploadedUrls[0];
        const mediaJson = uploadedUrls.length > 1 ? JSON.stringify(uploadedUrls) : null;
        const result = await env.DB.prepare(
            'INSERT INTO gallery_posts (user_id, image_url, media_urls, description, price, purchase_count, created_at) VALUES (?, ?, ?, ?, ?, 0, datetime("now")) RETURNING id'
        ).bind(user.id, firstUrl, mediaJson, description, price).first();
        await addReward(env, user.id, CONFIG.KOIN_GALLERY_UPLOAD, CONFIG.EXP_PER_GALLERY_UPLOAD * uploadedUrls.length, 'gallery_upload');
        const msg = price > 0 ? `Story berhasil diupload (${uploadedUrls.length} foto) & dijual seharga ${price} koin` : `Story berhasil diupload (${uploadedUrls.length} foto)`;
        return successResponse({ postId: result.id, mediaCount: uploadedUrls.length }, msg);
    } catch (e) { return errorResponse('Gagal upload gambar: ' + dbHint(e), 500); }
}
async function handleGalleryAction(request, env, user, postId, action) {
    if (!user) return errorResponse('Login required', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const table = action === 'like' ? 'gallery_likes' : 'gallery_saves';
        const existing = await env.DB.prepare(`SELECT id FROM ${table} WHERE user_id = ? AND post_id = ?`).bind(user.id, postId).first();
        let added = false;
        if (existing) await env.DB.prepare(`DELETE FROM ${table} WHERE id = ?`).bind(existing.id).run();
        else {
            await env.DB.prepare(`INSERT INTO ${table} (user_id, post_id, created_at) VALUES (?, ?, datetime("now"))`).bind(user.id, postId).run();
            added = true;
            if (action === 'like') await addReward(env, user.id, 0, CONFIG.EXP_PER_GALLERY_LIKE, 'gallery_like');
        }
        const countRow = await env.DB.prepare(`SELECT COUNT(*) as c FROM ${table} WHERE post_id = ?`).bind(postId).first();
        return successResponse({ added, count: countRow ? countRow.c : 0 }, added ? 'Ditambahkan' : 'Dihapus');
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleBuyGalleryPost(request, env, user, postId) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const post = await env.DB.prepare('SELECT * FROM gallery_posts WHERE id = ?').bind(postId).first();
        if (!post) return errorResponse('Post tidak ditemukan', 404);
        if (post.user_id === user.id) return errorResponse('Ini postingan kamu sendiri', 400);
        const price = post.price || 0;
        if (price <= 0) return errorResponse('Postingan ini gratis', 400);
        const existing = await env.DB.prepare('SELECT id FROM gallery_purchases WHERE user_id = ? AND post_id = ?').bind(user.id, postId).first();
        if (existing) return errorResponse('Kamu sudah membeli postingan ini', 400);
        const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        if (!dbUser || dbUser.koin < price) return errorResponse(`Koin tidak cukup. Butuh ${price} koin, kamu punya ${dbUser ? dbUser.koin : 0}`, 400);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(price, user.id).run();
        await env.DB.prepare('UPDATE users SET koin = koin + ?, updated_at = datetime("now") WHERE id = ?').bind(price, post.user_id).run();
        await env.DB.prepare('INSERT INTO gallery_purchases (user_id, post_id, price, created_at) VALUES (?, ?, ?, datetime("now"))').bind(user.id, postId, price).run();
        await env.DB.prepare('UPDATE gallery_posts SET purchase_count = COALESCE(purchase_count, 0) + 1 WHERE id = ?').bind(postId).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', price, 'gallery_buy_' + postId).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(post.user_id, 'earn', price, 'gallery_sell_' + postId).run();
        const dbUserAfter = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        return successResponse({ newKoin: dbUserAfter ? dbUserAfter.koin : 0 }, 'Berhasil membeli story!');
    } catch (e) { return errorResponse('Gagal membeli: ' + dbHint(e), 500); }
}
async function handleAdminDeleteGalleryPost(request, env, user, postId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak. Hanya admin.', 403);
    try {
        await env.DB.prepare('DELETE FROM gallery_likes WHERE post_id = ?').bind(postId).run();
        await env.DB.prepare('DELETE FROM gallery_saves WHERE post_id = ?').bind(postId).run();
        try { await env.DB.prepare('DELETE FROM gallery_comments WHERE post_id = ?').bind(postId).run(); } catch (e) {}
        try { await env.DB.prepare('DELETE FROM gallery_purchases WHERE post_id = ?').bind(postId).run(); } catch (e) {}
        await env.DB.prepare('DELETE FROM gallery_posts WHERE id = ?').bind(postId).run();
        return successResponse(null, 'Story berhasil dihapus');
    } catch (e) { return errorResponse('Gagal menghapus post', 500); }
}

// ============================================================
// GALLERY COMMENTS
// ============================================================
async function handleGetGalleryComments(request, env, postId) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = 20;
        const offset = (page - 1) * limit;
        const totalRow = await env.DB.prepare('SELECT COUNT(*) as count FROM gallery_comments WHERE post_id = ? AND parent_id IS NULL AND is_deleted = 0').bind(postId).first();
        const total = totalRow ? totalRow.count : 0;
        const comments = await env.DB.prepare(
            `SELECT c.*, u.username, u.display_name, u.level, u.is_vip, u.avatar_url, u.bubble_id, u.role, u.is_verified,
             ab.name as border_name, ab.url as border_url, ab.scale as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT css FROM bubbles WHERE id = u.bubble_id) as bubble_css,
             (SELECT html FROM bubbles WHERE id = u.bubble_id) as bubble_html
             FROM gallery_comments c JOIN users u ON c.user_id = u.id
             LEFT JOIN avatar_borders ab ON u.avatar_border_id = ab.id
             WHERE c.post_id = ? AND c.parent_id IS NULL AND c.is_deleted = 0
             ORDER BY c.created_at DESC LIMIT ? OFFSET ?`
        ).bind(postId, limit, offset).all();
        const mainIds = comments.results.map(c => c.id);
        let replies = [];
        if (mainIds.length > 0) {
            const placeholders = mainIds.map(() => '?').join(',');
            const replyData = await env.DB.prepare(
                `SELECT c.*, u.username, u.display_name, u.level, u.is_vip, u.avatar_url, u.bubble_id, u.role, u.is_verified,
                 ab.name as border_name, ab.url as border_url, ab.scale as border_scale,
                 (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
                 (SELECT css FROM bubbles WHERE id = u.bubble_id) as bubble_css,
                 (SELECT html FROM bubbles WHERE id = u.bubble_id) as bubble_html
                 FROM gallery_comments c JOIN users u ON c.user_id = u.id
                 LEFT JOIN avatar_borders ab ON u.avatar_border_id = ab.id
                 WHERE c.parent_id IN (${placeholders}) AND c.is_deleted = 0
                 ORDER BY c.created_at ASC`
            ).bind(...mainIds).all();
            replies = replyData.results || [];
        }
        const formatComment = (c) => ({
            id: c.id, userId: c.user_id, username: c.username, displayName: c.display_name || c.username,
            level: c.level, isVip: c.is_vip === 1, isAdmin: c.role === 'admin', isVerified: c.is_verified === 1,
            avatarUrl: c.avatar_url, borderName: c.border_name, borderUrl: c.border_url, borderScale: c.border_scale || 1.2,
            levelUrl: c.level_url, bubbleCss: c.bubble_css || null, bubbleHtml: c.bubble_html || null,
            content: c.content, mediaUrl: c.media_url || null, parentId: c.parent_id,
            isEdited: c.is_edited === 1, editedAt: c.edited_at, editedAtWIB: c.edited_at ? formatDateWIB(c.edited_at) : null,
            createdAt: c.created_at, createdAtWIB: formatDateWIB(c.created_at), replies: []
        });
        const commentMap = {};
        const formattedComments = comments.results.map(c => { const fc = formatComment(c); commentMap[c.id] = fc; return fc; });
        replies.forEach(r => { if (commentMap[r.parent_id]) commentMap[r.parent_id].replies.push(formatComment(r)); });
        return successResponse({ comments: formattedComments, page, totalPages: Math.ceil(total / limit), total, hasMore: offset + comments.results.length < total });
    } catch (e) { return errorResponse('Gagal memuat komentar galeri', 500); }
}
async function handleAddGalleryComment(request, env, user, postId) {
    if (!user) return errorResponse('Login untuk berkomentar', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { content, parentId, mediaUrl } = body;
        const trimmed = (content || '').trim();
        if (!trimmed && !mediaUrl) return errorResponse('Komentar tidak boleh kosong');
        if (trimmed.length > CONFIG.COMMENT_MAX_LENGTH) return errorResponse(`Komentar maksimal ${CONFIG.COMMENT_MAX_LENGTH} karakter`);
        const post = await env.DB.prepare('SELECT id, user_id, description FROM gallery_posts WHERE id = ?').bind(postId).first();
        if (!post) return errorResponse('Post tidak ditemukan', 404);
        const lastComment = await env.DB.prepare("SELECT created_at FROM gallery_comments WHERE user_id = ? ORDER BY created_at DESC LIMIT 1").bind(user.id).first();
        if (lastComment) {
            const lastTime = new Date(lastComment.created_at + 'Z');
            const diffSeconds = (new Date() - lastTime) / 1000;
            if (diffSeconds < 15) return errorResponse('Tunggu 15 detik sebelum berkomentar lagi', 429);
        }
        let parentOwnerId = null;
        if (parentId) {
            const parent = await env.DB.prepare('SELECT id, parent_id, user_id FROM gallery_comments WHERE id = ? AND is_deleted = 0').bind(parentId).first();
            if (!parent) return errorResponse('Komentar induk tidak ditemukan', 404);
            if (parent.parent_id) return errorResponse('Tidak bisa membalas balasan. Balas komentar utama saja.', 400);
            parentOwnerId = parent.user_id;
        }
        await env.DB.prepare('INSERT INTO gallery_comments (post_id, user_id, content, parent_id, media_url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))').bind(postId, user.id, trimmed, parentId || null, mediaUrl || null).run();
        if (!parentId) await addReward(env, user.id, 0, 10, 'gallery_comment');
        else await addReward(env, user.id, 0, 10, 'gallery_reply');
        const postTitle = (post.description || 'Story').substring(0, 60);
        if (parentOwnerId && parentOwnerId !== user.id) { try { await notifyCommentReply(env, parentOwnerId, user, postTitle, post.id, true, post.id); } catch (e) {} }
        if (post.user_id !== user.id && post.user_id !== parentOwnerId) { try { await notifyCommentReply(env, post.user_id, user, postTitle, post.id, true, post.id); } catch (e) {} }
        return successResponse(null, 'Komentar berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan komentar: ' + dbHint(e), 500); }
}
async function handleEditGalleryComment(request, env, user, commentId) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const body = await request.json();
        const trimmed = (body.content || '').trim();
        if (!trimmed) return errorResponse('Komentar tidak boleh kosong');
        if (trimmed.length > CONFIG.COMMENT_MAX_LENGTH) return errorResponse(`Komentar maksimal ${CONFIG.COMMENT_MAX_LENGTH} karakter`);
        const comment = await env.DB.prepare('SELECT user_id FROM gallery_comments WHERE id = ? AND is_deleted = 0').bind(commentId).first();
        if (!comment) return errorResponse('Komentar tidak ditemukan', 404);
        if (comment.user_id !== user.id && !isAdmin(user)) return errorResponse('Tidak bisa mengedit komentar orang lain', 403);
        await env.DB.prepare("UPDATE gallery_comments SET content = ?, is_edited = 1, edited_at = datetime('now') WHERE id = ?").bind(trimmed, commentId).run();
        return successResponse(null, 'Komentar berhasil diedit');
    } catch (e) { return errorResponse('Gagal mengedit komentar', 500); }
}
async function handleDeleteGalleryComment(request, env, user, commentId) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const comment = await env.DB.prepare('SELECT user_id FROM gallery_comments WHERE id = ? AND is_deleted = 0').bind(commentId).first();
        if (!comment) return errorResponse('Komentar tidak ditemukan', 404);
        if (comment.user_id !== user.id && !isAdmin(user)) return errorResponse('Tidak bisa menghapus komentar orang lain', 403);
        await env.DB.prepare("UPDATE gallery_comments SET is_deleted = 1, deleted_at = datetime('now') WHERE id = ?").bind(commentId).run();
        return successResponse(null, 'Komentar dihapus');
    } catch (e) { return errorResponse('Gagal menghapus komentar', 500); }
}

// ============================================================
// CONTENT REQUESTS
// ============================================================
async function handleSubmitContentRequest(request, env, user) {
    if (!user) return errorResponse('Login untuk mengirim request', 401);
    try {
        const body = await request.json();
        const { title, notes } = body;
        const ip = request.headers.get('CF-Connecting-IP');
        const turnstileEnabled = await getAppSetting(env, 'turnstile_enabled');
        if (turnstileEnabled === 'true') { const valid = await verifyTurnstile(env, body.turnstileToken, ip); if (!valid) return errorResponse('Verifikasi keamanan gagal. Silakan coba lagi.', 403); }
        if (!title) return errorResponse('Judul drakor wajib diisi');
        const existing = await env.DB.prepare("SELECT id FROM content_requests WHERE user_id = ? AND title = ? AND status = 'pending'").bind(user.id, title).first();
        if (existing) return errorResponse('Kamu sudah memiliki request yang sama', 400);
        await env.DB.prepare('INSERT INTO content_requests (user_id, title, type, notes, status, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))').bind(user.id, title, 'drakor', notes || '', 'pending').run();
        return successResponse(null, 'Request drakor berhasil dikirim');
    } catch (e) { return errorResponse('Gagal mengirim request', 500); }
}
async function handleGetContentRequests(request, env, user) {
    if (!user) return errorResponse('Login diperlukan', 401);
    try {
        if (!isAdmin(user)) {
            const myReqs = await env.DB.prepare("SELECT cr.*, u.username FROM content_requests cr JOIN users u ON cr.user_id = u.id WHERE cr.user_id = ? ORDER BY cr.created_at DESC LIMIT 20").bind(user.id).all();
            return successResponse({ requests: myReqs.results.map(r => ({ id: r.id, userId: r.user_id, username: r.username, title: r.title, type: r.type, notes: r.notes, status: r.status, createdAt: r.created_at, createdAtWIB: formatDateWIB(r.created_at) })) });
        }
        const requests = await env.DB.prepare(`SELECT cr.*, u.username FROM content_requests cr JOIN users u ON cr.user_id = u.id WHERE cr.status = 'pending' ORDER BY cr.created_at ASC`).all();
        return successResponse({ requests: requests.results.map(r => ({ id: r.id, userId: r.user_id, username: r.username, title: r.title, type: r.type, notes: r.notes, status: r.status, createdAt: r.created_at, createdAtWIB: formatDateWIB(r.created_at) })) });
    } catch (e) { return errorResponse('Gagal mengambil request', 500); }
}
async function handleProcessContentRequest(request, env, user, requestId) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { action } = body;
        if (action === 'approve') await env.DB.prepare("UPDATE content_requests SET status = 'approved', processed_at = datetime('now') WHERE id = ?").bind(requestId).run();
        else if (action === 'reject') await env.DB.prepare("UPDATE content_requests SET status = 'rejected', processed_at = datetime('now') WHERE id = ?").bind(requestId).run();
        return successResponse(null, 'Request diproses');
    } catch (e) { return errorResponse('Gagal memproses request', 500); }
}
async function handleAdminPendingCount(request, env, user) {
    if (!isAdmin(user)) return errorResponse('Akses ditolak', 403);
    try { const reqs = await env.DB.prepare("SELECT COUNT(*) as count FROM content_requests WHERE status = 'pending'").first(); return successResponse({ count: reqs ? reqs.count : 0 }); }
    catch (e) { return errorResponse('Gagal', 500); }
}

// ============================================================
// REWARD / EXP
// ============================================================
async function addReward(env, userId, koin, exp, source) {
    try {
        let actualKoin = 0;
        if (source === 'admin' || source.indexOf('referral_') === 0 || source.indexOf('coin_transfer_') === 0) actualKoin = koin;
        else if (koin > 0) {
            const limitCheck = await checkDailyKoinLimit(env, userId);
            if (limitCheck.canEarn) actualKoin = Math.min(koin, limitCheck.remaining);
        }
        if (actualKoin <= 0 && exp <= 0) return false;
        await env.DB.prepare('UPDATE users SET koin = koin + ?, exp = exp + ?, updated_at = datetime("now") WHERE id = ?').bind(actualKoin, exp, userId).run();
        let user = await env.DB.prepare('SELECT level, exp FROM users WHERE id = ?').bind(userId).first();
        let nextLevel = await env.DB.prepare('SELECT level_number, exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level).first();
        while (nextLevel && user.exp >= nextLevel.exp_required) {
            const sisaExp = user.exp - nextLevel.exp_required;
            await env.DB.prepare('UPDATE users SET level = ?, exp = ?, updated_at = datetime("now") WHERE id = ?').bind(nextLevel.level_number, sisaExp, userId).run();
            try { await env.DB.prepare('INSERT INTO level_logs (user_id, old_level, new_level) VALUES (?, ?, ?)').bind(userId, user.level, nextLevel.level_number).run(); } catch (e) {}
            user.level = nextLevel.level_number;
            user.exp = sisaExp;
            nextLevel = await env.DB.prepare('SELECT level_number, exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level).first();
        }
        if (actualKoin > 0) await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(userId, 'earn', actualKoin, source).run();
        return true;
    } catch (e) { console.error('Add reward error:', e); return false; }
}
async function addExpOnly(env, userId, exp) {
    try {
        if (!exp || exp <= 0) return false;
        await env.DB.prepare('UPDATE users SET exp = exp + ?, updated_at = datetime("now") WHERE id = ?').bind(exp, userId).run();
        let user = await env.DB.prepare('SELECT level, exp FROM users WHERE id = ?').bind(userId).first();
        let nextLevel = await env.DB.prepare('SELECT level_number, exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level).first();
        while (nextLevel && user.exp >= nextLevel.exp_required) {
            const sisaExp = user.exp - nextLevel.exp_required;
            await env.DB.prepare('UPDATE users SET level = ?, exp = ?, updated_at = datetime("now") WHERE id = ?').bind(nextLevel.level_number, sisaExp, userId).run();
            try { await env.DB.prepare('INSERT INTO level_logs (user_id, old_level, new_level) VALUES (?, ?, ?)').bind(userId, user.level, nextLevel.level_number).run(); } catch (e) {}
            user.level = nextLevel.level_number;
            user.exp = sisaExp;
            nextLevel = await env.DB.prepare('SELECT level_number, exp_required FROM levels WHERE level_number > ? ORDER BY level_number ASC LIMIT 1').bind(user.level).first();
        }
        return true;
    } catch (e) { return false; }
}
async function handleGetCoinHistory(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = 30;
        const offset = (page - 1) * limit;
        const transactions = await env.DB.prepare('SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?').bind(user.id, limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM transactions WHERE user_id = ?').bind(user.id).first();
        return successResponse({ transactions: transactions.results.map(t => ({ id: t.id, type: t.type, amount: t.amount, source: t.source, createdAt: t.created_at, createdAtWIB: formatDateWIB(t.created_at) })), total: total.count, page, totalPages: Math.ceil(total.count / limit) });
    } catch (e) { return errorResponse('Gagal memuat histori koin', 500); }
}

// ============================================================
// REACTIONS
// ============================================================
const REACTION_TYPES = ['suka', 'tidak_suka', 'perfect'];
async function handleGetReactions(request, env, contentId) {
    try {
        const reactions = await env.DB.prepare('SELECT reaction_type, COUNT(*) as count FROM reactions WHERE content_id = ? GROUP BY reaction_type').bind(contentId).all();
        const result = {};
        REACTION_TYPES.forEach(type => { result[type] = 0; });
        reactions.results.forEach(r => { result[r.reaction_type] = r.count; });
        return successResponse({ reactions: result });
    } catch (e) { return errorResponse('Gagal mengambil reaksi', 500); }
}
async function handleAddReaction(request, env, user, contentId) {
    if (!user) return errorResponse('Login untuk memberi reaksi', 401);
    try {
        if (isScraping(request)) return errorResponse('Akses ditolak', 403);
        const body = await request.json();
        const { reaction } = body;
        if (!REACTION_TYPES.includes(reaction)) return errorResponse('Reaksi tidak valid');
        const existing = await env.DB.prepare('SELECT id, reaction_type FROM reactions WHERE user_id = ? AND content_id = ?').bind(user.id, contentId).first();
        if (existing) {
            if (existing.reaction_type === reaction) { await env.DB.prepare('DELETE FROM reactions WHERE id = ?').bind(existing.id).run(); return successResponse(null, 'Reaksi dihapus'); }
            else { await env.DB.prepare("UPDATE reactions SET reaction_type = ?, created_at = datetime('now') WHERE id = ?").bind(reaction, existing.id).run(); return successResponse(null, 'Reaksi diubah'); }
        }
        await env.DB.prepare('INSERT INTO reactions (user_id, content_id, reaction_type, created_at) VALUES (?, ?, ?, datetime("now"))').bind(user.id, contentId, reaction).run();
        await addReward(env, user.id, 0, CONFIG.EXP_PER_REACTION, 'reaction');
        if (reaction === 'suka') await updateMissionProgress(env, user.id, 'like', 1);
        return successResponse(null, 'Reaksi ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan reaksi', 500); }
}

// ============================================================
// COMMENTS
// ============================================================
async function handleGetComments(request, env, contentId) {
    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = 20;
        const offset = (page - 1) * limit;
        const totalRow = await env.DB.prepare('SELECT COUNT(*) as count FROM comments WHERE content_id = ? AND parent_id IS NULL AND is_deleted = 0').bind(contentId).first();
        const total = totalRow.count;
        const comments = await env.DB.prepare(
            `SELECT c.*, u.username, u.display_name, u.level, u.is_vip, u.avatar_url, u.bubble_id, u.role, u.is_verified,
             ab.name as border_name, ab.url as border_url, ab.scale as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT css FROM bubbles WHERE id = u.bubble_id) as bubble_css,
             (SELECT html FROM bubbles WHERE id = u.bubble_id) as bubble_html
             FROM comments c JOIN users u ON c.user_id = u.id
             LEFT JOIN avatar_borders ab ON u.avatar_border_id = ab.id
             WHERE c.content_id = ? AND c.parent_id IS NULL AND c.is_deleted = 0
             ORDER BY c.created_at DESC LIMIT ? OFFSET ?`
        ).bind(contentId, limit, offset).all();
        const mainIds = comments.results.map(c => c.id);
        let replies = [];
        if (mainIds.length > 0) {
            const placeholders = mainIds.map(() => '?').join(',');
            const replyData = await env.DB.prepare(
                `SELECT c.*, u.username, u.display_name, u.level, u.is_vip, u.avatar_url, u.bubble_id, u.role, u.is_verified,
                 ab.name as border_name, ab.url as border_url, ab.scale as border_scale,
                 (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
                 (SELECT css FROM bubbles WHERE id = u.bubble_id) as bubble_css,
                 (SELECT html FROM bubbles WHERE id = u.bubble_id) as bubble_html
                 FROM comments c JOIN users u ON c.user_id = u.id
                 LEFT JOIN avatar_borders ab ON u.avatar_border_id = ab.id
                 WHERE c.parent_id IN (${placeholders}) AND c.is_deleted = 0
                 ORDER BY c.created_at ASC`
            ).bind(...mainIds).all();
            replies = replyData.results;
        }
        const formatComment = (c) => ({
            id: c.id, userId: c.user_id, username: c.username, displayName: c.display_name || c.username,
            level: c.level, isVip: c.is_vip === 1, isAdmin: c.role === 'admin', isVerified: c.is_verified === 1,
            avatarUrl: c.avatar_url, borderName: c.border_name, borderUrl: c.border_url, borderScale: c.border_scale || 1.2,
            levelUrl: c.level_url, bubbleCss: c.bubble_css || null, bubbleHtml: c.bubble_html || null,
            content: c.content, mediaUrl: c.media_url || null, parentId: c.parent_id,
            isEdited: c.is_edited === 1, editedAt: c.edited_at, editedAtWIB: c.edited_at ? formatDateWIB(c.edited_at) : null,
            createdAt: c.created_at, createdAtWIB: formatDateWIB(c.created_at), replies: []
        });
        const commentMap = {};
        const formattedComments = comments.results.map(c => { const fc = formatComment(c); commentMap[c.id] = fc; return fc; });
        replies.forEach(r => { if (commentMap[r.parent_id]) commentMap[r.parent_id].replies.push(formatComment(r)); });
        return successResponse({ comments: formattedComments, page, totalPages: Math.ceil(total / limit), total, hasMore: offset + comments.results.length < total });
    } catch (e) { return errorResponse('Gagal mengambil komentar', 500); }
}
async function handleAddComment(request, env, user, contentId) {
    if (!user) return errorResponse('Login untuk berkomentar', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const body = await request.json();
        const { content, parentId, mediaUrl } = body;
        const trimmed = (content || '').trim();
        if (!trimmed && !mediaUrl) return errorResponse('Komentar tidak boleh kosong');
        if (trimmed.length > CONFIG.COMMENT_MAX_LENGTH) return errorResponse(`Komentar maksimal ${CONFIG.COMMENT_MAX_LENGTH} karakter`);
        const lastComment = await env.DB.prepare("SELECT created_at FROM comments WHERE user_id = ? ORDER BY created_at DESC LIMIT 1").bind(user.id).first();
        if (lastComment) {
            const lastTime = new Date(lastComment.created_at + 'Z');
            const diffSeconds = (new Date() - lastTime) / 1000;
            if (diffSeconds < 30) return errorResponse('Tunggu 30 detik sebelum berkomentar lagi', 429);
        }
        let parentOwnerId = null;
        if (parentId) {
            const parent = await env.DB.prepare('SELECT id, parent_id, user_id FROM comments WHERE id = ? AND is_deleted = 0').bind(parentId).first();
            if (!parent) return errorResponse('Komentar induk tidak ditemukan', 404);
            if (parent.parent_id) return errorResponse('Tidak bisa membalas balasan. Balas komentar utama saja.', 400);
            parentOwnerId = parent.user_id;
        }
        await env.DB.prepare('INSERT INTO comments (user_id, content_id, content, parent_id, media_url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))').bind(user.id, contentId, trimmed, parentId || null, mediaUrl || null).run();
        if (!parentId) {
            await addReward(env, user.id, CONFIG.KOIN_PER_COMMENT, CONFIG.EXP_PER_COMMENT, 'comment');
            await updateMissionProgress(env, user.id, 'comment', 1);
        } else {
            await addReward(env, user.id, 0, CONFIG.EXP_PER_COMMENT, 'reply_comment');
            await updateMissionProgress(env, user.id, 'reply_comment', 1);
        }
        if (parentOwnerId && parentOwnerId !== user.id) {
            try {
                const contentRow = await env.DB.prepare('SELECT title FROM manual_content WHERE id = ?').bind(contentId).first();
                const contentTitle = contentRow ? contentRow.title : 'Series';
                await notifyCommentReply(env, parentOwnerId, user, contentTitle, contentId, false, contentId);
            } catch (e) {}
        }
        return successResponse(null, 'Komentar berhasil ditambahkan');
    } catch (e) { return errorResponse('Gagal menambahkan komentar', 500); }
}
async function handleEditComment(request, env, user, commentId) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const body = await request.json();
        if (!body.content || body.content.trim().length < 1) return errorResponse('Komentar tidak boleh kosong');
        if (body.content.length > CONFIG.COMMENT_MAX_LENGTH) return errorResponse(`Komentar maksimal ${CONFIG.COMMENT_MAX_LENGTH} karakter`);
        const comment = await env.DB.prepare('SELECT user_id FROM comments WHERE id = ? AND is_deleted = 0').bind(commentId).first();
        if (!comment) return errorResponse('Komentar tidak ditemukan', 404);
        if (comment.user_id !== user.id && !isAdmin(user)) return errorResponse('Tidak bisa mengedit komentar orang lain', 403);
        await env.DB.prepare("UPDATE comments SET content = ?, is_edited = 1, edited_at = datetime('now') WHERE id = ?").bind(body.content.trim(), commentId).run();
        return successResponse(null, 'Komentar berhasil diedit');
    } catch (e) { return errorResponse('Gagal mengedit komentar', 500); }
}
async function handleDeleteComment(request, env, user, commentId) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const comment = await env.DB.prepare('SELECT user_id FROM comments WHERE id = ? AND is_deleted = 0').bind(commentId).first();
        if (!comment) return errorResponse('Komentar tidak ditemukan', 404);
        if (comment.user_id !== user.id && !isAdmin(user)) return errorResponse('Tidak bisa menghapus komentar orang lain', 403);
        await env.DB.prepare("UPDATE comments SET is_deleted = 1, deleted_at = datetime('now') WHERE id = ?").bind(commentId).run();
        return successResponse(null, 'Komentar dihapus');
    } catch (e) { return errorResponse('Gagal menghapus komentar', 500); }
}

// ============================================================
// MISSIONS
// ============================================================
async function updateMissionProgress(env, userId, missionType, increment = 1) {
    try {
        const today = new Date().toISOString().split('T')[0];
        const mission = await env.DB.prepare("SELECT * FROM user_missions WHERE user_id = ? AND mission_type = ? AND date(created_at) = ?").bind(userId, missionType, today).first();
        if (mission) {
            const newProgress = mission.progress + increment;
            const isCompleted = newProgress >= mission.target;
            await env.DB.prepare(`UPDATE user_missions SET progress = ?, is_completed = ?, completed_at = CASE WHEN ? THEN datetime('now') ELSE completed_at END WHERE id = ?`).bind(newProgress, isCompleted ? 1 : 0, isCompleted ? 1 : 0, mission.id).run();
            if (isCompleted && !mission.is_completed) await addReward(env, userId, mission.reward_koin, mission.reward_exp, 'mission_' + missionType);
        }
    } catch (e) { console.error('Update mission error:', e); }
}
async function handleGetMissions(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const today = new Date().toISOString().split('T')[0];
        const missionTypes = [
            { type: 'checkin', target: 1, reward_koin: CONFIG.KOIN_CHECKIN, reward_exp: CONFIG.EXP_CHECKIN, label: 'Check-in Harian' },
            { type: 'comment', target: 3, reward_koin: 30, reward_exp: 75, label: 'Komentar 3x' },
            { type: 'reply_comment', target: 5, reward_koin: 40, reward_exp: 90, label: 'Balas Komentar 5x' },
            { type: 'like', target: 10, reward_koin: 35, reward_exp: 80, label: 'Like 10 Video' },
            { type: 'watch', target: 5, reward_koin: 25, reward_exp: 50, label: 'Nonton 5x' },
            { type: 'watch_500', target: 500, reward_koin: 500, reward_exp: 2000, label: 'Nonton 500 (Total)' },
            { type: 'watch_1000', target: 1000, reward_koin: 1500, reward_exp: 5000, label: 'Nonton 1000 (Total)' },
            { type: 'profile', target: 1, reward_koin: 20, reward_exp: 40, label: 'Lengkapi Profil' }
        ];
        const missions = [];
        for (const m of missionTypes) {
            let progress = 0, isCompleted = false;
            if (m.type === 'checkin') { const checkin = await env.DB.prepare("SELECT id FROM missions WHERE user_id = ? AND mission_type = 'checkin' AND date(completed_at) = ?").bind(user.id, today).first(); progress = checkin ? 1 : 0; isCompleted = !!checkin; }
            else if (m.type === 'comment') { const count = await env.DB.prepare("SELECT COUNT(*) as count FROM comments WHERE user_id = ? AND date(created_at) = ? AND parent_id IS NULL").bind(user.id, today).first(); progress = Math.min(count.count, m.target); isCompleted = count.count >= m.target; }
            else if (m.type === 'reply_comment') { const count = await env.DB.prepare("SELECT COUNT(*) as count FROM comments WHERE user_id = ? AND date(created_at) = ? AND parent_id IS NOT NULL").bind(user.id, today).first(); progress = Math.min(count.count, m.target); isCompleted = count.count >= m.target; }
            else if (m.type === 'like') { const count = await env.DB.prepare("SELECT COUNT(*) as count FROM reactions WHERE user_id = ? AND date(created_at) = ?").bind(user.id, today).first(); progress = Math.min(count.count, m.target); isCompleted = count.count >= m.target; }
            else if (m.type === 'watch') { const count = await env.DB.prepare("SELECT COUNT(*) as count FROM watch_history WHERE user_id = ? AND date(watched_at) = ?").bind(user.id, today).first(); progress = Math.min(count.count, m.target); isCompleted = count.count >= m.target; }
            else if (m.type === 'watch_500' || m.type === 'watch_1000') { const count = await env.DB.prepare("SELECT COUNT(*) as count FROM watch_history WHERE user_id = ?").bind(user.id).first(); progress = Math.min(count.count, m.target); isCompleted = count.count >= m.target; }
            else if (m.type === 'profile') { const dbUser = await env.DB.prepare('SELECT phone, telegram, bio FROM users WHERE id = ?').bind(user.id).first(); progress = (dbUser.phone ? 1 : 0) + (dbUser.telegram ? 1 : 0) + (dbUser.bio ? 1 : 0); isCompleted = progress >= 3; }
            missions.push({ type: m.type, label: m.label, progress, target: m.target, isCompleted, rewardKoin: m.reward_koin, rewardExp: m.reward_exp });
        }
        return successResponse({ missions });
    } catch (e) { return errorResponse('Gagal mengambil misi', 500); }
}
async function handleCheckin(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const today = new Date().toISOString().split('T')[0];
        const existing = await env.DB.prepare("SELECT id FROM missions WHERE user_id = ? AND mission_type = 'checkin' AND date(completed_at) = ?").bind(user.id, today).first();
        if (existing) return errorResponse('Kamu sudah check-in hari ini', 400);
        await env.DB.prepare("INSERT INTO missions (user_id, mission_type, completed_at) VALUES (?, 'checkin', datetime('now'))").bind(user.id).run();
        await addReward(env, user.id, CONFIG.KOIN_CHECKIN, CONFIG.EXP_CHECKIN, 'checkin');
        return successResponse({ koin: CONFIG.KOIN_CHECKIN, exp: CONFIG.EXP_CHECKIN }, `Check-in berhasil! +${CONFIG.KOIN_CHECKIN} koin, +${CONFIG.EXP_CHECKIN} EXP`);
    } catch (e) { return errorResponse('Gagal check-in', 500); }
}
async function handleMissionProgress(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const body = await request.json();
        const { type, increment } = body;
        if (!type) return errorResponse('Type required');
        await updateMissionProgress(env, user.id, type, increment || 1);
        return successResponse(null, 'Progress updated');
    } catch (e) { return errorResponse('Failed', 500); }
}

// ============================================================
// VIP
// ============================================================
async function handleBuyVipWithKoin(request, env, user) {
    if (!user) return errorResponse('Login untuk membeli VIP', 401);
    try {
        const dbUser = await env.DB.prepare('SELECT koin, is_vip FROM users WHERE id = ?').bind(user.id).first();
        if (dbUser.koin < CONFIG.VIP_PRICE_KOIN) return errorResponse(`Koin tidak cukup. Butuh ${CONFIG.VIP_PRICE_KOIN} koin, kamu punya ${dbUser.koin}`, 400);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(CONFIG.VIP_PRICE_KOIN, user.id).run();
        const vipExpiresAt = new Date(Date.now() + CONFIG.VIP_DURATION_DAYS * 24 * 60 * 60 * 1000).toISOString();
        await env.DB.prepare("UPDATE users SET is_vip = 1, vip_expires_at = ?, updated_at = datetime('now') WHERE id = ?").bind(vipExpiresAt, user.id).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', CONFIG.VIP_PRICE_KOIN, 'vip_purchase').run();
        try {
            const refInfo = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first();
            if (refInfo && refInfo.referred_by) await awardReferralStageBonus(env, refInfo.referred_by, user.id, 'premium', CONFIG.REFERRAL_BONUS_PREMIUM);
        } catch (e) {}
        return successResponse({ vipExpiresAt, vipExpiresAtWIB: formatDateWIB(vipExpiresAt) }, `Berhasil membeli VIP ${CONFIG.VIP_DURATION_DAYS} hari!`);
    } catch (e) { return errorResponse('Gagal membeli VIP', 500); }
}

// ============================================================
// AVATAR BORDERS / BUBBLES
// ============================================================
async function handleGetAvatarBorders(request, env, user) {
    try {
        const borders = await env.DB.prepare('SELECT * FROM avatar_borders WHERE is_active = 1 ORDER BY price ASC').all();
        let ownedBorders = [];
        if (user) {
            const owned = await env.DB.prepare('SELECT border_id, expires_at FROM user_borders WHERE user_id = ? AND (expires_at IS NULL OR expires_at > datetime("now"))').bind(user.id).all();
            ownedBorders = owned.results;
        }
        return successResponse({
            borders: borders.results.map(b => ({ id: b.id, name: b.name, url: b.url, price: b.price, scale: b.scale || 1.2, durationDays: b.duration_days, owned: ownedBorders.some(o => o.border_id === b.id), expiresAt: ownedBorders.find(o => o.border_id === b.id)?.expires_at || null })),
            equippedId: user ? user.avatarBorderId : null
        });
    } catch (e) { return errorResponse('Gagal mengambil data border', 500); }
}
async function handleBuyAvatarBorder(request, env, user, borderId) {
    if (!user) return errorResponse('Login untuk membeli', 401);
    try {
        const border = await env.DB.prepare('SELECT * FROM avatar_borders WHERE id = ? AND is_active = 1').bind(borderId).first();
        if (!border) return errorResponse('Border tidak ditemukan', 404);
        const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        if (dbUser.koin < border.price) return errorResponse(`Koin tidak cukup. Butuh ${border.price}, kamu punya ${dbUser.koin}`, 400);
        const existing = await env.DB.prepare('SELECT id FROM user_borders WHERE user_id = ? AND border_id = ?').bind(user.id, borderId).first();
        if (existing) return errorResponse('Kamu sudah memiliki border ini', 400);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(border.price, user.id).run();
        const expiresAt = border.duration_days > 0 ? new Date(Date.now() + border.duration_days * 24 * 60 * 60 * 1000).toISOString() : null;
        await env.DB.prepare('INSERT INTO user_borders (user_id, border_id, expires_at) VALUES (?, ?, ?)').bind(user.id, borderId, expiresAt).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', border.price, 'avatar_border_' + borderId).run();
        return successResponse(null, `Berhasil membeli ${border.name}!`);
    } catch (e) { return errorResponse('Gagal membeli border', 500); }
}
async function handleEquipAvatarBorder(request, env, user, borderId) {
    if (!user) return errorResponse('Login untuk menggunakan', 401);
    try {
        if (borderId !== 0) {
            const owned = await env.DB.prepare('SELECT id FROM user_borders WHERE user_id = ? AND border_id = ? AND (expires_at IS NULL OR expires_at > datetime("now"))').bind(user.id, borderId).first();
            if (!owned) return errorResponse('Kamu belum memiliki border ini', 400);
        }
        await env.DB.prepare('UPDATE users SET avatar_border_id = ?, updated_at = datetime("now") WHERE id = ?').bind(borderId || null, user.id).run();
        return successResponse(null, borderId ? 'Border berhasil dipasang' : 'Border dilepas');
    } catch (e) { return errorResponse('Gagal memasang border', 500); }
}
async function handleGetBubbles(request, env, user) {
    try {
        const bubbles = await env.DB.prepare('SELECT * FROM bubbles WHERE is_active = 1 ORDER BY price ASC').all();
        let ownedBubbles = [];
        if (user) {
            const owned = await env.DB.prepare('SELECT bubble_id, expires_at FROM user_bubbles WHERE user_id = ? AND (expires_at IS NULL OR expires_at > datetime("now"))').bind(user.id).all();
            ownedBubbles = owned.results;
        }
        return successResponse({
            bubbles: bubbles.results.map(b => ({
                id: b.id, name: b.name, price: b.price, durationDays: b.duration_days, css: b.css, html: b.html,
                previewHtml: b.html ? b.html.split('{{content}}').join('<span style="color:var(--text-primary);font-size:13px;">Contoh komentar</span>') : null,
                owned: ownedBubbles.some(o => o.bubble_id === b.id),
                expiresAt: ownedBubbles.find(o => o.bubble_id === b.id)?.expires_at || null
            })),
            equippedId: user ? user.bubbleId : null
        });
    } catch (e) { return errorResponse('Gagal mengambil data bubble', 500); }
}
async function handleBuyBubble(request, env, user, bubbleId) {
    if (!user) return errorResponse('Login untuk membeli', 401);
    try {
        const bubble = await env.DB.prepare('SELECT * FROM bubbles WHERE id = ? AND is_active = 1').bind(bubbleId).first();
        if (!bubble) return errorResponse('Bubble tidak ditemukan', 404);
        const dbUser = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        if (dbUser.koin < bubble.price) return errorResponse(`Koin tidak cukup. Butuh ${bubble.price}, kamu punya ${dbUser.koin}`, 400);
        const existing = await env.DB.prepare('SELECT id FROM user_bubbles WHERE user_id = ? AND bubble_id = ?').bind(user.id, bubbleId).first();
        if (existing) return errorResponse('Kamu sudah memiliki bubble ini', 400);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, updated_at = datetime("now") WHERE id = ?').bind(bubble.price, user.id).run();
        const expiresAt = bubble.duration_days > 0 ? new Date(Date.now() + bubble.duration_days * 24 * 60 * 60 * 1000).toISOString() : null;
        await env.DB.prepare('INSERT INTO user_bubbles (user_id, bubble_id, expires_at) VALUES (?, ?, ?)').bind(user.id, bubbleId, expiresAt).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', bubble.price, 'bubble_' + bubbleId).run();
        return successResponse(null, `Berhasil membeli ${bubble.name}!`);
    } catch (e) { return errorResponse('Gagal membeli bubble', 500); }
}
async function handleEquipBubble(request, env, user, bubbleId) {
    if (!user) return errorResponse('Login untuk menggunakan', 401);
    try {
        if (bubbleId !== 0) {
            const owned = await env.DB.prepare('SELECT id FROM user_bubbles WHERE user_id = ? AND bubble_id = ? AND (expires_at IS NULL OR expires_at > datetime("now"))').bind(user.id, bubbleId).first();
            if (!owned) return errorResponse('Kamu belum memiliki bubble ini', 400);
        }
        await env.DB.prepare('UPDATE users SET bubble_id = ?, updated_at = datetime("now") WHERE id = ?').bind(bubbleId || null, user.id).run();
        return successResponse(null, bubbleId ? 'Bubble berhasil dipasang' : 'Bubble dilepas');
    } catch (e) { return errorResponse('Gagal memasang bubble', 500); }
}

// ============================================================
// PROFILE UPDATES
// ============================================================
async function handleUpdateProfile(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    try {
        const body = await request.json();
        const { username, displayName, email, password, phone, bio } = body;
        if (body.telegram !== undefined) {
            const newTg = String(body.telegram || '').trim().replace(/^@/, '');
            const current = await env.DB.prepare('SELECT telegram FROM users WHERE id = ?').bind(user.id).first();
            if (newTg !== (current?.telegram || '')) {
                return errorResponse(`Username Telegram tidak bisa diganti langsung. Gunakan fitur "Ganti Telegram" (${CONFIG.TELEGRAM_CHANGE_COST.toLocaleString('id-ID')} koin).`, 403);
            }
        }
        const updates = [], values = [];
        if (displayName !== undefined) {
            if (displayName.length > 50) return errorResponse('Nama tampilan maksimal 50 karakter');
            updates.push('display_name = ?'); values.push(displayName.trim() || user.username);
        }
        if (username && username !== user.username) {
            if (username.length < 3 || username.length > 30) return errorResponse('Username harus 3-30 karakter');
            if (!/^[a-zA-Z0-9_]+$/.test(username)) return errorResponse('Username hanya boleh huruf, angka, dan underscore');
            const existing = await env.DB.prepare('SELECT id FROM users WHERE username = ? AND id != ?').bind(username, user.id).first();
            if (existing) return errorResponse('Username sudah digunakan');
            const dbUser = await env.DB.prepare('SELECT username_changed_at FROM users WHERE id = ?').bind(user.id).first();
            if (dbUser.username_changed_at) {
                const lastChange = new Date(dbUser.username_changed_at);
                const nextAllowed = new Date(lastChange.getTime() + CONFIG.USERNAME_CHANGE_COOLDOWN_DAYS * 24 * 60 * 60 * 1000);
                if (nextAllowed > new Date()) {
                    const daysLeft = Math.ceil((nextAllowed - new Date()) / (24 * 60 * 60 * 1000));
                    return errorResponse(`Username tidak bisa diubah. Tunggu ${daysLeft} hari, atau bayar ${CONFIG.USERNAME_CHANGE_RESET_COST} koin untuk reset cooldown.`, 403);
                }
            }
            updates.push('username = ?'); values.push(username);
            updates.push('username_changed_at = ?'); values.push(new Date().toISOString());
        }
        if (email !== undefined) {
            if (email && !isValidEmail(email) && !email.includes('@telegram.local')) return errorResponse('Email wajib @gmail.com dan tidak boleh mengandung "+"');
            updates.push('email = ?'); values.push(email || null);
        }
        if (phone !== undefined) { updates.push('phone = ?'); values.push(phone || null); }
        if (bio !== undefined) {
            if (bio && bio.length > CONFIG.BIO_MAX_LENGTH) return errorResponse(`Bio maksimal ${CONFIG.BIO_MAX_LENGTH} karakter`);
            updates.push('bio = ?'); values.push(bio || null);
        }
        if (password) {
            if (password.length < 6) return errorResponse('Password minimal 6 karakter');
            updates.push('password_hash = ?'); values.push(await hashPassword(password));
        }
        if (updates.length === 0) return errorResponse('Tidak ada perubahan');
        updates.push('updated_at = datetime("now")');
        values.push(user.id);
        await env.DB.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run();
        await updateMissionProgress(env, user.id, 'profile', 1);
        if (phone !== undefined && phone && phone.trim()) {
            try {
                const refInfo = await env.DB.prepare('SELECT referred_by FROM users WHERE id = ?').bind(user.id).first();
                if (refInfo && refInfo.referred_by) {
                    const userCheck = await env.DB.prepare('SELECT email_verified FROM users WHERE id = ?').bind(user.id).first();
                    if (userCheck && userCheck.email_verified === 1) await awardReferralStageBonus(env, refInfo.referred_by, user.id, 'phone', CONFIG.REFERRAL_BONUS_PHONE);
                }
            } catch (e) {}
        }
        return successResponse(null, 'Profil berhasil diperbarui');
    } catch (e) { return errorResponse('Gagal memperbarui profil: ' + dbHint(e), 500); }
}
async function handleResetUsernameCooldown(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const COST = CONFIG.USERNAME_CHANGE_RESET_COST;
        const dbUser = await env.DB.prepare('SELECT koin, username_changed_at FROM users WHERE id = ?').bind(user.id).first();
        if (!dbUser.username_changed_at) return errorResponse('Belum ada cooldown untuk di-reset', 400);
        if (dbUser.koin < COST) return errorResponse(`Koin tidak cukup. Butuh ${COST}, kamu punya ${dbUser.koin}`, 400);
        await env.DB.prepare('UPDATE users SET koin = koin - ?, username_changed_at = NULL, updated_at = datetime("now") WHERE id = ?').bind(COST, user.id).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(user.id, 'spend', COST, 'username_reset').run();
        return successResponse(null, 'Cooldown username di-reset!');
    } catch (e) { return errorResponse('Gagal reset: ' + dbHint(e), 500); }
}
async function uploadToGyazoHelper(env, file) {
    const accessToken = await getAppSetting(env, 'gyazo_access_token');
    if (!accessToken) throw new Error('Gyazo belum dikonfigurasi admin');
    const gyazoForm = new FormData();
    gyazoForm.append('access_token', accessToken);
    gyazoForm.append('imagedata', file);
    const gyazoRes = await fetch('https://upload.gyazo.com/api/upload', { method: 'POST', body: gyazoForm });
    const gyazoData = await gyazoRes.json();
    if (!gyazoData.url) throw new Error('Gagal upload ke Gyazo: ' + (gyazoData.message || 'unknown'));
    return gyazoData.url;
}
async function handleUploadAvatar(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const formData = await request.formData();
        const file = formData.get('avatar');
        if (!file) return errorResponse('File tidak ditemukan', 400);
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (file.type && !allowedTypes.includes(file.type)) return errorResponse('Format file tidak didukung', 400);
        if (file.size > 8 * 1024 * 1024) return errorResponse('Ukuran file maksimal 8MB');
        let publicUrl;
        try { publicUrl = await uploadToGyazoHelper(env, file); }
        catch (err) { return errorResponse(err.message, 500); }
        await env.DB.prepare('UPDATE users SET avatar_url = ?, updated_at = datetime("now") WHERE id = ?').bind(publicUrl, user.id).run();
        return successResponse({ avatarUrl: publicUrl }, 'Foto profil berhasil diupload');
    } catch (e) { return errorResponse('Gagal upload: ' + dbHint(e), 500); }
}
async function handleUploadCover(request, env, user) {
    if (!user) return errorResponse('Tidak terautentikasi', 401);
    if (isScraping(request)) return errorResponse('Akses ditolak', 403);
    try {
        const formData = await request.formData();
        const file = formData.get('cover');
        if (!file) return errorResponse('File tidak ditemukan', 400);
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (file.type && !allowedTypes.includes(file.type)) return errorResponse('Format file tidak didukung', 400);
        if (file.size > 10 * 1024 * 1024) return errorResponse('Ukuran file maksimal 10MB');
        let publicUrl;
        try { publicUrl = await uploadToGyazoHelper(env, file); }
        catch (err) { return errorResponse(err.message, 500); }
        await env.DB.prepare('UPDATE users SET cover_url = ?, updated_at = datetime("now") WHERE id = ?').bind(publicUrl, user.id).run();
        return successResponse({ coverUrl: publicUrl }, 'Foto sampul berhasil diupload');
    } catch (e) { return errorResponse('Gagal upload: ' + dbHint(e), 500); }
}

// ============================================================
// ROOM PARTY v29 — PRIVATE/PUBLIC + HOST QUOTA
// ============================================================
async function handleCreateParty(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const body = await request.json();
        const { contentId, episodeId, title, videoUrl, visibility } = body;
        if (!videoUrl) return errorResponse('URL video wajib');
        const roomVisibility = (visibility === 'private') ? 'private' : 'public';
        let code = null;
        for (let i = 0; i < 10; i++) {
            const c = generatePartyCode();
            const dup = await env.DB.prepare('SELECT id FROM party_rooms WHERE code = ? AND is_active = 1').bind(c).first();
            if (!dup) { code = c; break; }
        }
        if (!code) return errorResponse('Gagal membuat kode, coba lagi');
        const result = await env.DB.prepare(
            `INSERT INTO party_rooms (code, host_id, content_id, episode_id, title, video_url, visibility, is_active, created_at, updated_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, 1, datetime('now'), datetime('now')) RETURNING *`
        ).bind(code, user.id, contentId || null, episodeId || null, title || 'Watch Party', videoUrl, roomVisibility).first();
        await env.DB.prepare('INSERT INTO party_room_state (room_id, current_time, is_playing, action_seq) VALUES (?, 0, 1, 0)').bind(result.id).run();
        await env.DB.prepare('INSERT OR IGNORE INTO party_room_members (room_id, user_id) VALUES (?, ?)').bind(result.id, user.id).run();
        return successResponse({ id: result.id, code: result.code, visibility: roomVisibility }, 'Room berhasil dibuat!');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleListPartyRooms(request, env, user) {
    try {
        const rooms = await env.DB.prepare(
            `SELECT r.*, u.username as host_username, u.display_name as host_display_name, u.avatar_url as host_avatar,
             (SELECT COUNT(*) FROM party_room_members WHERE room_id = r.id AND (last_ping IS NULL OR last_ping > datetime('now', '-2 minutes'))) as member_count
             FROM party_rooms r JOIN users u ON r.host_id = u.id
             WHERE r.is_active = 1 AND (r.visibility = 'public' OR r.visibility IS NULL)
             ORDER BY r.created_at DESC LIMIT 50`
        ).all();
        return successResponse({ rooms: rooms.results || [] });
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleJoinParty(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare('SELECT * FROM party_rooms WHERE code = ? AND is_active = 1').bind(c).first();
        if (!room) return errorResponse('Room tidak ditemukan atau sudah berakhir', 404);
        await env.DB.prepare('INSERT OR IGNORE INTO party_room_members (room_id, user_id) VALUES (?, ?)').bind(room.id, user.id).run();
        await env.DB.prepare("UPDATE party_room_members SET last_ping = datetime('now') WHERE room_id = ? AND user_id = ?").bind(room.id, user.id).run();
        return successResponse({ roomId: room.id, code: room.code });
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleGetPartyState(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare(
            `SELECT r.*, u.username as host_username, u.display_name as host_display_name
             FROM party_rooms r JOIN users u ON r.host_id = u.id WHERE r.code = ? AND r.is_active = 1`
        ).bind(c).first();
        if (!room) return errorResponse('Room tidak ditemukan', 404);
        const isHost = room.host_id === user.id;
        if (room.visibility === 'private' && !isHost) {
            const isMember = await env.DB.prepare('SELECT id FROM party_room_members WHERE room_id = ? AND user_id = ?').bind(room.id, user.id).first();
            if (!isMember) return errorResponse('Room ini private. Join pakai kode terlebih dahulu.', 403);
        }
        // satu panggilan D1 untuk semuanya (dipanggil tiap 1,5 detik oleh tiap anggota room)
        const [, stateRes, members, messages] = await env.DB.batch([
            env.DB.prepare("UPDATE party_room_members SET last_ping = datetime('now') WHERE room_id = ? AND user_id = ?").bind(room.id, user.id),
            env.DB.prepare('SELECT * FROM party_room_state WHERE room_id = ?').bind(room.id),
            env.DB.prepare(
            `SELECT m.user_id, u.username, u.display_name, u.avatar_url, u.avatar_border_id, u.level,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             m.joined_at
             FROM party_room_members m JOIN users u ON m.user_id = u.id
             WHERE m.room_id = ? AND (m.last_ping IS NULL OR m.last_ping > datetime('now', '-3 minutes'))
             ORDER BY m.joined_at ASC`
            ).bind(room.id),
            env.DB.prepare(
            `SELECT pm.*, u.username, u.display_name, u.avatar_url, u.avatar_border_id, u.level, u.is_vip, u.role, u.is_verified,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url,
             (SELECT css FROM bubbles WHERE id = u.bubble_id) as bubble_css,
             (SELECT html FROM bubbles WHERE id = u.bubble_id) as bubble_html
             FROM party_room_messages pm JOIN users u ON pm.user_id = u.id
             WHERE pm.room_id = ? ORDER BY pm.created_at DESC LIMIT 60`
            ).bind(room.id)
        ]);
        const state = (stateRes.results || [])[0] || null;
        return successResponse({
            room: { id: room.id, code: room.code, title: room.title, videoUrl: room.video_url, visibility: room.visibility || 'public', isHost, hostUsername: room.host_username, hostDisplayName: room.host_display_name },
            state: state || { current_time: 0, is_playing: 1, action_seq: 0 },
            canControl: isHost,
            members: (members.results || []).map(m => ({ id: m.user_id, username: m.username, displayName: m.display_name || m.username, avatarUrl: m.avatar_url, borderUrl: m.border_url, borderScale: m.border_scale || 1.2 })),
            messages: (messages.results || []).reverse().map(m => ({
                id: m.id, userId: m.user_id, username: m.username, displayName: m.display_name || m.username,
                avatarUrl: m.avatar_url, borderUrl: m.border_url, borderScale: m.border_scale || 1.2,
                levelUrl: m.level_url, isVip: m.is_vip === 1, isAdmin: m.role === 'admin', isVerified: m.is_verified === 1,
                bubbleCss: m.bubble_css || null, bubbleHtml: m.bubble_html || null,
                content: m.content, createdAtWIB: formatDateWIB(m.created_at)
            }))
        });
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handlePartyControl(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare('SELECT id, host_id, content_id, episode_id FROM party_rooms WHERE code = ? AND is_active = 1').bind(c).first();
        if (!room) return errorResponse('Room tidak ditemukan', 404);
        if (room.host_id !== user.id) return errorResponse('Hanya host yang bisa mengontrol player', 403);
        const body = await request.json();
        const { action, currentTime } = body;
        const state = await env.DB.prepare('SELECT * FROM party_room_state WHERE room_id = ?').bind(room.id).first();
        let newTime = state ? state.current_time : 0;
        let newPlaying = state ? state.is_playing : 0;
        if (action === 'play') {
            newPlaying = 1;
            if (!state || state.is_playing === 0) {
                const dbUser = await env.DB.prepare('SELECT is_vip, role FROM users WHERE id = ?').bind(user.id).first();
                const isVip = dbUser && (dbUser.is_vip === 1 || dbUser.role === 'admin');
                if (!isVip && room.content_id) {
                    const dailyWatch = await checkDailyWatchLimit(env, user.id, false);
                    if (dailyWatch.canWatch) {
                        const existingWatch = room.episode_id
                            ? await env.DB.prepare('SELECT id FROM watch_history WHERE user_id = ? AND episode_id = ?').bind(user.id, room.episode_id).first()
                            : await env.DB.prepare('SELECT id FROM watch_history WHERE user_id = ? AND content_id = ? AND episode_id IS NULL').bind(user.id, room.content_id).first();
                        if (!existingWatch) {
                            await env.DB.prepare('INSERT INTO watch_history (user_id, content_id, episode_id) VALUES (?, ?, ?)').bind(user.id, room.content_id, room.episode_id || null).run();
                            await addReward(env, user.id, CONFIG.KOIN_PER_VIEW, CONFIG.EXP_PER_VIEW, 'view');
                            await updateMissionProgress(env, user.id, 'watch', 1);
                        }
                    } else {
                        return errorResponse('Kuota nonton gratis habis. Beli VIP untuk unlimited.', 403);
                    }
                }
            }
        }
        else if (action === 'pause') newPlaying = 0;
        else if (action === 'seek') { newTime = parseFloat(currentTime) || 0; }
        else if (action === 'sync') { newTime = parseFloat(currentTime) || newTime; }
        const newSeq = (state ? state.action_seq : 0) + 1;
        await env.DB.prepare(
            "UPDATE party_room_state SET current_time = ?, is_playing = ?, last_updated = datetime('now'), last_action_by = ?, action_seq = ? WHERE room_id = ?"
        ).bind(newTime, newPlaying, user.id, newSeq, room.id).run();
        return successResponse({ currentTime: newTime, isPlaying: newPlaying, actionSeq: newSeq });
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handlePartyChat(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare('SELECT id FROM party_rooms WHERE code = ? AND is_active = 1').bind(c).first();
        if (!room) return errorResponse('Room tidak ditemukan', 404);
        const body = await request.json();
        const content = (body.content || '').trim();
        if (!content) return errorResponse('Kosong');
        if (content.length > 500) return errorResponse('Maks 500 karakter');
        await env.DB.prepare('INSERT INTO party_room_messages (room_id, user_id, content) VALUES (?, ?, ?)').bind(room.id, user.id, content).run();
        return successResponse(null, 'OK');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleLeaveParty(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare('SELECT id FROM party_rooms WHERE code = ? AND is_active = 1').bind(c).first();
        if (!room) return successResponse(null, 'OK');
        await env.DB.prepare('DELETE FROM party_room_members WHERE room_id = ? AND user_id = ?').bind(room.id, user.id).run();
        return successResponse(null, 'OK');
    } catch (e) { return errorResponse('Gagal', 500); }
}
async function handleEndParty(request, env, user, code) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = (code || '').toUpperCase().trim();
        const room = await env.DB.prepare('SELECT id, host_id FROM party_rooms WHERE code = ?').bind(c).first();
        if (!room) return errorResponse('Room tidak ditemukan', 404);
        if (room.host_id !== user.id && !isAdmin(user)) return errorResponse('Hanya host', 403);
        await env.DB.prepare('UPDATE party_rooms SET is_active = 0 WHERE id = ?').bind(room.id).run();
        return successResponse(null, 'Room diakhiri');
    } catch (e) { return errorResponse('Gagal', 500); }
}

// ============================================================
// R2 SERVE / ROBOTS / SITEMAP
// ============================================================
async function serveR2File(request, env, path) {
    try {
        const key = path.substring(1);
        const object = await env.R2.get(key);
        if (!object) return new Response('File not found', { status: 404 });
        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        headers.set('Access-Control-Allow-Origin', '*');
        return new Response(object.body, { headers });
    } catch (e) { return new Response('Error serving file', { status: 500 }); }
}
function handleRobots(request) {
    const baseUrl = new URL(request.url).origin;
    return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin\nSitemap: ${baseUrl}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=86400' } });
}
async function handleSitemap(request, env) {
    const baseUrl = new URL(request.url).origin;
    let urls = [`${baseUrl}/`, `${baseUrl}/genre`, `${baseUrl}/request`];
    try {
        const contents = await env.DB.prepare('SELECT id FROM manual_content WHERE is_active = 1 ORDER BY created_at DESC LIMIT 500').all();
        contents.results.forEach(c => { urls.push(`${baseUrl}/view?id=${c.id}`); });
    } catch (e) {}
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><changefreq>daily</changefreq></url>`).join('\n')}\n</urlset>`;
    return new Response(sitemap, { headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' } });
}

async function verifyTurnstile(env, token, ip) {
    if (!token) return false;
    try {
        const secretKey = await getAppSetting(env, 'turnstile_secret_key');
        if (!secretKey) return true;
        const formData = new FormData();
        formData.append('secret', secretKey);
        formData.append('response', token);
        if (ip) formData.append('remoteip', ip);
        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: formData });
        const data = await res.json();
        return data.success === true;
    } catch (e) { return false; }
}

// ============================================================
// ROUTER
// ============================================================
// ============================================================
// PENCARIAN USER (header: pilih Series / User)
// ============================================================
async function handleSearchUsers(request, env, user) {
    if (!user) return errorResponse('Login untuk mencari user', 401);
    try {
        const url = new URL(request.url);
        const q = (url.searchParams.get('q') || '').trim().replace(/^@/, '').replace(/[%_]/g, '');
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
        const limit = 20, offset = (page - 1) * limit;
        if (q.length < 2) return successResponse({ users: [], total: 0, page, totalPages: 0 });
        const like = '%' + q + '%';
        const rows = await env.DB.prepare(
            `SELECT u.id, u.username, u.display_name, u.role, u.is_vip, u.vip_expires_at, u.level, u.avatar_url, u.is_verified, u.bio,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT level_url FROM levels WHERE level_number = u.level) as level_url
             FROM users u WHERE u.username LIKE ? OR u.display_name LIKE ?
             ORDER BY (LOWER(u.username) = LOWER(?)) DESC, u.is_verified DESC, u.level DESC, u.id ASC LIMIT ? OFFSET ?`
        ).bind(like, like, q, limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM users WHERE username LIKE ? OR display_name LIKE ?').bind(like, like).first();
        const count = total ? total.count : 0;
        return successResponse({
            users: (rows.results || []).map(u => ({
                id: u.id, username: u.username, displayName: u.display_name || u.username, role: u.role,
                isVip: u.is_vip === 1 && (!u.vip_expires_at || new Date(u.vip_expires_at) > new Date()),
                level: u.level || 1, levelUrl: u.level_url, avatarUrl: u.avatar_url,
                borderUrl: u.border_url, borderScale: u.border_scale || 1.2, isVerified: u.is_verified === 1, bio: u.bio || null
            })),
            total: count, page, totalPages: Math.ceil(count / limit)
        });
    } catch (e) { return errorResponse('Gagal mencari user', 500); }
}

// ============================================================
// PASANGAN (ROOM PASANGAN) + STREAK HARIAN
// Alur: buat room -> dapat kode -> pasangan masuk pakai kode -> status "active".
// Streak +1 saat KEDUANYA check-in di hari yang sama (tanggal WIB).
// Kalau ada 1 hari terlewat, streak kembali ke 0 dan mulai lagi dari 1.
// ============================================================
const COUPLE_DAY_LABELS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
function wibDateStr(offsetDays = 0) { return new Date(Date.now() + 7 * 3600 * 1000 + offsetDays * 86400000).toISOString().slice(0, 10); }
function coupleEffectiveStreak(room) {
    if (!room || !room.last_streak_date) return 0;
    return (room.last_streak_date === wibDateStr(0) || room.last_streak_date === wibDateStr(-1)) ? (room.streak || 0) : 0;
}
function coupleDaysTogether(room) {
    if (!room || !room.paired_at) return 0;
    return Math.max(1, Math.floor((Date.now() - new Date(room.paired_at).getTime()) / 86400000) + 1);
}
function coupleDateText(iso) {
    if (!iso) return '-';
    try { return new Date(iso).toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta', day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return '-'; }
}
async function getCurrentCoupleRoom(env, userId) {
    return env.DB.prepare("SELECT * FROM couple_rooms WHERE (host_id = ? OR partner_id = ?) AND status IN ('waiting', 'active') ORDER BY id DESC LIMIT 1").bind(userId, userId).first();
}
// Kartu user (nama, avatar, border, level) jarang berubah → disimpan 60 detik di memori isolate
const _cardCache = new Map();
async function getCoupleUserCard(env, userId) {
    if (!userId) return null;
    const hit = _cardCache.get(userId), now = Date.now();
    if (hit && now - hit.at < 60000) return hit.card ? { ...hit.card } : null;
    const card = await loadUserCard(env, userId);
    if (_cardCache.size > 1000) _cardCache.clear();
    _cardCache.set(userId, { at: now, card });
    return card ? { ...card } : null;
}
async function loadUserCard(env, userId) {
    if (!userId) return null;
    const u = await env.DB.prepare(
        `SELECT id, username, display_name, avatar_url, level, is_verified,
         (SELECT url FROM avatar_borders WHERE id = avatar_border_id) as border_url,
         (SELECT scale FROM avatar_borders WHERE id = avatar_border_id) as border_scale,
         (SELECT level_url FROM levels WHERE level_number = level) as level_url
         FROM users WHERE id = ?`
    ).bind(userId).first();
    if (!u) return null;
    return { id: u.id, username: u.username, displayName: u.display_name || u.username, avatarUrl: u.avatar_url, borderUrl: u.border_url, borderScale: u.border_scale || 1.2, level: u.level || 1, levelUrl: u.level_url, isVerified: u.is_verified === 1 };
}
async function buildCoupleState(env, room, viewerId, pre) {
    if (!room) return null;
    const today = wibDateStr(0);
    const partnerId = room.host_id === viewerId ? room.partner_id : room.host_id;
    const [me, partner, rows, game] = await Promise.all([
        getCoupleUserCard(env, viewerId),
        partnerId ? getCoupleUserCard(env, partnerId) : null,
        pre ? { results: pre.checkins } : env.DB.prepare('SELECT user_id, checkin_date FROM couple_checkins WHERE room_id = ? AND checkin_date >= ?').bind(room.id, wibDateStr(-6)).all(),
        pre ? rdSummaryFromRow(room, pre.game, viewerId) : rdSummaryForRoom(env, room, viewerId)
    ]);
    const has = (uid, date) => (rows.results || []).some(r => r.user_id === uid && r.checkin_date === date);
    const week = [];
    for (let i = -6; i <= 0; i++) {
        const d = wibDateStr(i);
        week.push({ date: d, label: COUPLE_DAY_LABELS[new Date(d + 'T00:00:00Z').getUTCDay()], me: has(viewerId, d), partner: partnerId ? has(partnerId, d) : false, isToday: i === 0 });
    }
    if (me) me.checkedInToday = has(viewerId, today);
    if (partner) partner.checkedInToday = has(partnerId, today);
    return {
        game,
        id: room.id, code: room.code, status: room.status, isHost: room.host_id === viewerId,
        streak: coupleEffectiveStreak(room), bestStreak: room.best_streak || 0, lastStreakDate: room.last_streak_date,
        daysTogether: coupleDaysTogether(room), pairedAt: room.paired_at, pairedAtText: coupleDateText(room.paired_at),
        today, me, partner,
        bothCheckedInToday: !!(me && partner && me.checkedInToday && partner.checkedInToday),
        canCheckin: room.status === 'active' && !!me && !me.checkedInToday, week
    };
}
async function notifyCoupleUser(env, userId, text) {
    try {
        const u = await env.DB.prepare('SELECT telegram_id, notifications_enabled FROM users WHERE id = ?').bind(userId).first();
        if (u && u.telegram_id && u.notifications_enabled === 1) await sendTelegramMessage(env, u.telegram_id, text);
    } catch (e) {}
}
function coupleSenderName(user) { return escapeMd(String(user.displayName || user.display_name || user.username || 'Pasanganmu')); }

const COUPLE_ROOM_SUB = "(SELECT id FROM couple_rooms WHERE (host_id = ? OR partner_id = ?) AND status IN ('waiting', 'active') ORDER BY id DESC LIMIT 1)";
async function handleGetCouple(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        // room + check-in 7 hari + game yang berjalan: satu panggilan D1 (halaman ini memanggilnya tiap 5 detik)
        const [roomRes, checkinRes, gameRes] = await env.DB.batch([
            env.DB.prepare("SELECT * FROM couple_rooms WHERE (host_id = ? OR partner_id = ?) AND status IN ('waiting', 'active') ORDER BY id DESC LIMIT 1").bind(user.id, user.id),
            env.DB.prepare(`SELECT user_id, checkin_date FROM couple_checkins WHERE room_id = ${COUPLE_ROOM_SUB} AND checkin_date >= ?`).bind(user.id, user.id, wibDateStr(-6)),
            env.DB.prepare(`SELECT id, status, mode, host_id, guest_joined FROM dice_games WHERE scope = 'couple' AND room_id = ${COUPLE_ROOM_SUB} AND status IN ${RD_ACTIVE} ORDER BY id DESC LIMIT 1`).bind(user.id, user.id)
        ]);
        const room = (roomRes.results || [])[0] || null;
        return successResponse({ couple: await buildCoupleState(env, room, user.id, { checkins: checkinRes.results || [], game: (gameRes.results || [])[0] || null }) });
    } catch (e) { return errorResponse('Gagal memuat data pasangan: ' + dbHint(e), 500); }
}
async function handleCreateCouple(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const existing = await getCurrentCoupleRoom(env, user.id);
        if (existing && existing.status === 'active') return errorResponse('Kamu sudah punya pasangan. Akhiri dulu hubungan yang sekarang.', 400);
        if (existing) return successResponse({ couple: await buildCoupleState(env, existing, user.id) }, 'Room pasanganmu masih menunggu. Bagikan kodenya!');
        let code = null;
        for (let i = 0; i < 10; i++) {
            const c = generatePartyCode();
            const dup = await env.DB.prepare('SELECT id FROM couple_rooms WHERE code = ?').bind(c).first();
            if (!dup) { code = c; break; }
        }
        if (!code) return errorResponse('Gagal membuat kode, coba lagi');
        const room = await env.DB.prepare("INSERT INTO couple_rooms (code, host_id, status, streak, best_streak, created_at) VALUES (?, ?, 'waiting', 0, 0, ?) RETURNING *").bind(code, user.id, new Date().toISOString()).first();
        return successResponse({ couple: await buildCoupleState(env, room, user.id) }, 'Room pasangan dibuat! Bagikan kodenya ke doi 💌');
    } catch (e) { return errorResponse('Gagal membuat room pasangan: ' + dbHint(e), 500); }
}
async function handleJoinCouple(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        let body = {};
        try { body = await request.json(); } catch (e) {}
        const code = String(body.code || '').trim().toUpperCase();
        if (!code) return errorResponse('Kode room wajib diisi');
        const room = await env.DB.prepare("SELECT * FROM couple_rooms WHERE code = ? AND status IN ('waiting', 'active')").bind(code).first();
        if (!room) return errorResponse('Room pasangan tidak ditemukan atau sudah berakhir', 404);
        if (room.host_id === user.id) return errorResponse('Ini room buatanmu sendiri. Bagikan kodenya ke pasanganmu.', 400);
        if (room.status !== 'waiting' || room.partner_id) return errorResponse('Room ini sudah terisi pasangan lain', 400);
        const mine = await getCurrentCoupleRoom(env, user.id);
        if (mine && mine.status === 'active') return errorResponse('Kamu sudah punya pasangan. Akhiri dulu hubungan yang sekarang.', 400);
        const now = new Date().toISOString();
        const upd = await env.DB.prepare("UPDATE couple_rooms SET partner_id = ?, status = 'active', paired_at = ? WHERE id = ? AND status = 'waiting' AND partner_id IS NULL").bind(user.id, now, room.id).run();
        if (upd && upd.meta && upd.meta.changes === 0) return errorResponse('Room ini sudah terisi pasangan lain', 400);
        // room "menunggu" milik sendiri otomatis dibatalkan setelah berhasil masuk room pasangan
        if (mine) await env.DB.prepare("UPDATE couple_rooms SET status = 'ended', ended_at = ? WHERE id = ? AND status = 'waiting'").bind(now, mine.id).run();
        const fresh = await env.DB.prepare('SELECT * FROM couple_rooms WHERE id = ?').bind(room.id).first();
        await notifyCoupleUser(env, room.host_id, `💞 *${coupleSenderName(user)}* masuk ke room pasanganmu! Kalian resmi berpasangan. Check-in tiap hari biar streak jalan 🔥`);
        return successResponse({ couple: await buildCoupleState(env, fresh, user.id) }, 'Kalian resmi berpasangan 💞');
    } catch (e) { return errorResponse('Gagal masuk room pasangan: ' + dbHint(e), 500); }
}
async function handleCoupleCheckin(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const room = await getCurrentCoupleRoom(env, user.id);
        if (!room || room.status !== 'active') return errorResponse('Kamu belum punya pasangan. Buat atau masuk room pasangan dulu.', 400);
        const today = wibDateStr(0), yesterday = wibDateStr(-1);
        const already = await env.DB.prepare('SELECT id FROM couple_checkins WHERE room_id = ? AND user_id = ? AND checkin_date = ?').bind(room.id, user.id, today).first();
        if (already) return errorResponse('Kamu sudah check-in hari ini 💖', 400);
        await env.DB.prepare('INSERT OR IGNORE INTO couple_checkins (room_id, user_id, checkin_date, created_at) VALUES (?, ?, ?, ?)').bind(room.id, user.id, today, new Date().toISOString()).run();
        const partnerId = room.host_id === user.id ? room.partner_id : room.host_id;
        const partnerDone = await env.DB.prepare('SELECT id FROM couple_checkins WHERE room_id = ? AND user_id = ? AND checkin_date = ?').bind(room.id, partnerId, today).first();
        let streakUp = false, message = 'Check-in berhasil! Sekarang giliran pasanganmu 💌';
        if (partnerDone && room.last_streak_date !== today) {
            const newStreak = room.last_streak_date === yesterday ? (room.streak || 0) + 1 : 1;
            const best = Math.max(room.best_streak || 0, newStreak);
            await env.DB.prepare('UPDATE couple_rooms SET streak = ?, best_streak = ?, last_streak_date = ? WHERE id = ? AND (last_streak_date IS NULL OR last_streak_date != ?)').bind(newStreak, best, today, room.id, today).run();
            streakUp = true; message = `🔥 Streak kalian jadi ${newStreak} hari!`;
            await notifyCoupleUser(env, partnerId, `🔥 *${coupleSenderName(user)}* juga sudah check-in. Streak kalian sekarang *${newStreak} hari*!`);
        } else if (!partnerDone) {
            await notifyCoupleUser(env, partnerId, `💌 *${coupleSenderName(user)}* sudah check-in hari ini. Giliranmu supaya streak bertambah!`);
        }
        const fresh = await env.DB.prepare('SELECT * FROM couple_rooms WHERE id = ?').bind(room.id).first();
        return successResponse({ couple: await buildCoupleState(env, fresh, user.id), streakUp }, message);
    } catch (e) { return errorResponse('Gagal check-in: ' + dbHint(e), 500); }
}
async function handleEndCouple(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const room = await getCurrentCoupleRoom(env, user.id);
        if (!room) return errorResponse('Kamu tidak punya room pasangan', 404);
        await env.DB.prepare("UPDATE couple_rooms SET status = 'ended', ended_at = ? WHERE id = ?").bind(new Date().toISOString(), room.id).run();
        try { await env.DB.prepare("UPDATE dice_games SET status = 'cancelled', ended_ms = ? WHERE room_id = ? AND status IN ('lobby', 'picking', 'playing')").bind(Date.now(), room.id).run(); } catch (e) {}
        if (room.status === 'active') {
            const partnerId = room.host_id === user.id ? room.partner_id : room.host_id;
            await notifyCoupleUser(env, partnerId, `💔 *${coupleSenderName(user)}* mengakhiri room pasangan kalian.`);
        }
        return successResponse(null, room.status === 'waiting' ? 'Room pasangan dibatalkan' : 'Hubungan diakhiri');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
const coupleJoinCols = (alias, pfx) => `${alias}.username as ${pfx}_username, ${alias}.display_name as ${pfx}_display_name, ${alias}.avatar_url as ${pfx}_avatar_url, ${alias}.level as ${pfx}_level, ${alias}.is_verified as ${pfx}_is_verified,
    (SELECT url FROM avatar_borders WHERE id = ${alias}.avatar_border_id) as ${pfx}_border_url,
    (SELECT scale FROM avatar_borders WHERE id = ${alias}.avatar_border_id) as ${pfx}_border_scale`;
const COUPLE_LB_SELECT = `SELECT r.*, CASE WHEN r.last_streak_date >= ? THEN r.streak ELSE 0 END as eff_streak, ${coupleJoinCols('h', 'h')}, ${coupleJoinCols('p', 'p')}
    FROM couple_rooms r JOIN users h ON r.host_id = h.id JOIN users p ON r.partner_id = p.id WHERE r.status = 'active'`;
function mapCoupleLbRow(r, rank, viewer) {
    const card = (id, pfx) => ({ id, username: r[pfx + '_username'], displayName: r[pfx + '_display_name'] || r[pfx + '_username'], avatarUrl: r[pfx + '_avatar_url'], borderUrl: r[pfx + '_border_url'], borderScale: r[pfx + '_border_scale'] || 1.2, level: r[pfx + '_level'] || 1, isVerified: r[pfx + '_is_verified'] === 1 });
    return { id: r.id, rank, streak: r.eff_streak || 0, bestStreak: r.best_streak || 0, daysTogether: coupleDaysTogether(r), isMine: !!viewer && (r.host_id === viewer.id || r.partner_id === viewer.id), a: card(r.host_id, 'h'), b: card(r.partner_id, 'p') };
}
// Rank streak pasangan (leaderboard kategori "streak")
async function handleCoupleLeaderboard(request, env, user) {
    try {
        const url = new URL(request.url);
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
        const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit') || '20')));
        const offset = (page - 1) * limit, yesterday = wibDateStr(-1);
        const rows = await env.DB.prepare(COUPLE_LB_SELECT + ' ORDER BY eff_streak DESC, r.best_streak DESC, r.paired_at ASC LIMIT ? OFFSET ?').bind(yesterday, limit, offset).all();
        const total = await env.DB.prepare("SELECT COUNT(*) as count FROM couple_rooms WHERE status = 'active'").first();
        const count = total ? total.count : 0;
        let myCouple = null;
        if (user) {
            const mine = await env.DB.prepare(COUPLE_LB_SELECT + ' AND (r.host_id = ? OR r.partner_id = ?) LIMIT 1').bind(yesterday, user.id, user.id).first();
            if (mine) {
                const eff = mine.eff_streak || 0, best = mine.best_streak || 0;
                const ahead = await env.DB.prepare(
                    `SELECT COUNT(*) as count FROM couple_rooms r WHERE r.status = 'active' AND r.id != ? AND (
                        (CASE WHEN r.last_streak_date >= ? THEN r.streak ELSE 0 END) > ?
                        OR ((CASE WHEN r.last_streak_date >= ? THEN r.streak ELSE 0 END) = ? AND (r.best_streak > ? OR (r.best_streak = ? AND r.paired_at < ?))))`
                ).bind(mine.id, yesterday, eff, yesterday, eff, best, best, mine.paired_at).first();
                myCouple = mapCoupleLbRow(mine, (ahead ? ahead.count : 0) + 1, user);
            }
        }
        return successResponse({ couples: (rows.results || []).map((r, i) => mapCoupleLbRow(r, offset + i + 1, user)), total: count, page, totalPages: Math.ceil(count / limit), myCouple });
    } catch (e) { return errorResponse('Gagal memuat rank streak: ' + dbHint(e), 500); }
}
// Info pasangan untuk profil publik ("Berpasangan dengan ...")
async function getPublicCoupleInfo(env, userId) {
    try {
        const room = await env.DB.prepare("SELECT * FROM couple_rooms WHERE (host_id = ? OR partner_id = ?) AND status = 'active' ORDER BY id DESC LIMIT 1").bind(userId, userId).first();
        if (!room) return null;
        const partner = await getCoupleUserCard(env, room.host_id === userId ? room.partner_id : room.host_id);
        if (!partner) return null;
        return { streak: coupleEffectiveStreak(room), bestStreak: room.best_streak || 0, daysTogether: coupleDaysTogether(room), partner };
    } catch (e) { return null; }
}

// ============================================================
// RANDOM DICE
// Dua cakupan: 'couple' (di Room Pasangan) dan 'global' (room berkode, siapa saja bisa masuk).
// Simulasi berjalan di HP tiap pemain; server menjadi wasit & perantara:
// lobi + 30 detik pilih dadu, status tiap pemain, chat, menang/kalah, hadiah.
// Hadiah (menang saja): pasangan -> EXP; global mode Teman -> EXP; global mode Lawan -> trophy.
// Trophy dicatat per musim (bulan kalender WIB), jadi otomatis kembali 0 tiap awal bulan.
// ============================================================
const RD_CFG = {
    PICK_MS: 30000, READY_START_MS: 3000, STAGE_SEC: 9, START_DELAY: 3, FINAL_STAGE: 30,
    STALE_MS: 25000, LOBBY_TTL_MS: 300000, MAX_GAME_MS: 1800000, RESULT_TTL_MS: 120000, MIN_VERSUS_MS: 60000,
    WIN_EXP_VERSUS: 300, WIN_EXP_COOP: 250, WIN_EXP_SOLO: 150, WIN_TROPHIES: 30, LOSE_TROPHIES: 20, MAX_REWARDED_PER_DAY: 10, CHAT_MAX: 120
};
const RD_DICE_IDS = ['fire', 'electric', 'wind', 'poison', 'ice', 'iron', 'gamble', 'lock', 'crit', 'light', 'mine', 'typhoon', 'death', 'bomb', 'acid', 'growth', 'meteor', 'joker', 'magnet', 'arrow'];
const RD_ACTIVE = "('lobby', 'picking', 'playing')";
function rdParse(json) { try { return json ? JSON.parse(json) : null; } catch (e) { return null; } }
function rdValidDeck(deck) { return Array.isArray(deck) && deck.length === 5 && new Set(deck).size === 5 && deck.every(d => RD_DICE_IDS.includes(d)); }
function rdRandomDeck() {
    const pool = RD_DICE_IDS.slice();
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    return pool.slice(0, 5);
}
// Status kiriman klien dibersihkan & dibatasi sebelum disimpan / diteruskan ke pemain lain
function rdCleanState(st) {
    if (!st || typeof st !== 'object') return null;
    const b = Array.isArray(st.b) ? st.b.slice(0, 15).map(e => (Array.isArray(e) && RD_DICE_IDS.includes(e[0])) ? [e[0], Math.max(1, Math.min(7, e[1] | 0))] : 0) : [];
    const p = {};
    if (st.p && typeof st.p === 'object') for (const k of RD_DICE_IDS) if (st.p[k]) p[k] = Math.max(1, Math.min(5, st.p[k] | 0));
    return { b, p, stage: Math.max(1, Math.min(999, st.stage | 0)), lives: Math.max(0, Math.min(3, st.lives | 0)), alive: st.alive !== false, cleared: st.cleared === true, sp: Math.max(0, Math.min(999999, st.sp | 0)), n: Math.max(0, Math.min(999, st.n | 0)), k: Math.max(0, Math.min(99999, st.k | 0)) };
}
// Musim trophy = bulan kalender WIB. Tidak perlu cron: bulan baru = kunci musim baru = mulai dari 0.
function rdSeasonInfo() {
    const today = wibDateStr(0); const y = Number(today.slice(0, 4)), m = Number(today.slice(5, 7)), d = Number(today.slice(8, 10));
    const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate();
    let label = today.slice(0, 7);
    try { label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('id-ID', { month: 'long', year: 'numeric', timeZone: 'UTC' }); } catch (e) {}
    return { season: today.slice(0, 7), seasonLabel: label, resetInDays: daysInMonth - d + 1 };
}
async function rdGetTrophies(env, userId) {
    const row = await env.DB.prepare('SELECT trophies, wins FROM dice_trophies WHERE user_id = ? AND season = ?').bind(userId, rdSeasonInfo().season).first();
    return { trophies: row ? row.trophies : 0, wins: row ? row.wins : 0 };
}
async function rdAddTrophies(env, userId, amount) {
    await env.DB.prepare('INSERT INTO dice_trophies (user_id, season, trophies, wins) VALUES (?, ?, ?, 1) ON CONFLICT(user_id, season) DO UPDATE SET trophies = trophies + excluded.trophies, wins = wins + 1').bind(userId, rdSeasonInfo().season, amount).run();
}
// Kurangi trophy pihak yang kalah (tidak pernah di bawah 0). Mengembalikan jumlah yang benar-benar dikurangi.
async function rdTakeTrophies(env, userId, amount) {
    if (!userId || amount <= 0) return 0;
    const season = rdSeasonInfo().season;
    const row = await env.DB.prepare('SELECT trophies FROM dice_trophies WHERE user_id = ? AND season = ?').bind(userId, season).first();
    const lost = Math.min(amount, row ? row.trophies : 0);
    if (lost > 0) await env.DB.prepare('UPDATE dice_trophies SET trophies = MAX(0, trophies - ?) WHERE user_id = ? AND season = ?').bind(lost, userId, season).run();
    return lost;
}
async function rdRewardedToday(env, userId) {
    const dayStart = Date.parse(wibDateStr(0) + 'T00:00:00+07:00');
    const row = await env.DB.prepare("SELECT COUNT(*) as count FROM dice_games WHERE status = 'finished' AND ended_ms >= ? AND ((host_id = ? AND host_rewarded = 1) OR (guest_id = ? AND guest_rewarded = 1))").bind(dayStart, userId, userId).first();
    return row ? row.count : 0;
}
async function finishDiceGame(env, g, res) {
    const now = Date.now(); const elapsed = now - (g.starts_ms || now);
    const upd = await env.DB.prepare("UPDATE dice_games SET status = 'finished', ended_ms = ?, winner_id = ?, outcome = ?, reason = ? WHERE id = ? AND status = 'playing'").bind(now, res.winnerId || null, res.outcome, res.reason || '', g.id).run();
    if (upd && upd.meta && upd.meta.changes === 0) return env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
    // host_rewarded / guest_rewarded: 1 = dapat hadiah, 0 = tidak, NEGATIF = jumlah trophy yang dikurangi (pihak kalah di game trophy)
    let note = null, exp = 0, trophies = 0; const given = { host: 0, guest: 0 };
    if (res.outcome === 'win') {
        const versus = g.mode === 'versus'; const trophyGame = g.scope === 'global' && versus;
        trophies = trophyGame ? RD_CFG.WIN_TROPHIES : 0;
        exp = trophies ? 0 : (g.mode === 'solo' ? RD_CFG.WIN_EXP_SOLO : (versus ? RD_CFG.WIN_EXP_VERSUS : RD_CFG.WIN_EXP_COOP));
        if (versus && elapsed < RD_CFG.MIN_VERSUS_MS) note = 'Game berakhir kurang dari 1 menit, jadi tidak dihitung (tanpa hadiah, trophy tidak berubah).';
        else {
            for (const uid of (versus ? [res.winnerId] : [g.host_id, g.guest_id])) {
                if (!uid) continue;
                if (await rdRewardedToday(env, uid) >= RD_CFG.MAX_REWARDED_PER_DAY) continue;
                if (exp) await addReward(env, uid, 0, exp, 'random_dice_win');
                if (trophies) await rdAddTrophies(env, uid, trophies);
                if (uid === g.host_id) given.host = 1; else given.guest = 1;
            }
            if (trophyGame && res.winnerId) {      // yang kalah: trophy berkurang
                const loserId = res.winnerId === g.host_id ? g.guest_id : g.host_id;
                const lost = await rdTakeTrophies(env, loserId, RD_CFG.LOSE_TROPHIES);
                if (loserId === g.host_id) given.host = -lost; else given.guest = -lost;
            }
        }
    }
    await env.DB.prepare('UPDATE dice_games SET note = ?, reward_exp = ?, reward_trophies = ?, host_rewarded = ?, guest_rewarded = ? WHERE id = ?').bind(note, exp, trophies, given.host, given.guest, g.id).run();
    return env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
}
// Perpindahan status "malas": dijalankan tiap kali game dibaca
async function advanceDiceGame(env, g) {
    const now = Date.now();
    if (g.status === 'lobby' && now - g.created_ms > RD_CFG.LOBBY_TTL_MS) {
        await env.DB.prepare("UPDATE dice_games SET status = 'cancelled', ended_ms = ? WHERE id = ? AND status = 'lobby'").bind(now, g.id).run();
        g.status = 'cancelled'; return g;
    }
    if (g.status === 'picking' && now >= g.starts_ms) {
        const hostDeck = rdValidDeck(rdParse(g.host_deck)) ? g.host_deck : JSON.stringify(rdRandomDeck());
        const guestDeck = g.mode === 'solo' ? null : (rdValidDeck(rdParse(g.guest_deck)) ? g.guest_deck : JSON.stringify(rdRandomDeck()));
        await env.DB.prepare("UPDATE dice_games SET status = 'playing', host_deck = ?, guest_deck = ?, host_seen = ?, guest_seen = ? WHERE id = ? AND status = 'picking'").bind(hostDeck, guestDeck, g.starts_ms, g.starts_ms, g.id).run();
        g = await env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
    }
    if (g.status === 'playing') {
        if (now - g.starts_ms > RD_CFG.MAX_GAME_MS) return finishDiceGame(env, g, { outcome: 'draw', reason: 'timeout' });
        const hostStale = now - (g.host_seen || g.starts_ms) > RD_CFG.STALE_MS, guestStale = now - (g.guest_seen || g.starts_ms) > RD_CFG.STALE_MS;
        if (g.mode === 'solo') { if (hostStale) return finishDiceGame(env, g, { outcome: 'lose', reason: 'disconnect' }); return g; }
        if (hostStale && guestStale) return finishDiceGame(env, g, { outcome: g.mode === 'versus' ? 'draw' : 'lose', reason: 'disconnect' });
        if (g.mode === 'versus' && (hostStale || guestStale)) return finishDiceGame(env, g, { winnerId: hostStale ? g.guest_id : g.host_id, outcome: 'win', reason: 'disconnect' });
    }
    return g;
}
async function rdContext(env, user, scope) {
    if (scope === 'global') return { scope: 'global' };
    const room = await getCurrentCoupleRoom(env, user.id);
    if (!room || room.status !== 'active') return { error: errorResponse('Random Dice pasangan dimainkan berdua. Buat atau masuk room pasangan dulu.', 400) };
    return { scope: 'couple', room, partnerId: room.host_id === user.id ? room.partner_id : room.host_id };
}
async function rdFindGame(env, c, userId) {
    const where = c.scope === 'global' ? "scope = 'global' AND (host_id = ? OR guest_id = ?)" : "scope = 'couple' AND room_id = ?";
    const args = c.scope === 'global' ? [userId, userId] : [c.room.id];
    let g = await env.DB.prepare(`SELECT * FROM dice_games WHERE ${where} AND status IN ${RD_ACTIVE} ORDER BY id DESC LIMIT 1`).bind(...args).first();
    if (g) { g = await advanceDiceGame(env, g); if (g && g.status !== 'cancelled') return g; }
    return env.DB.prepare(`SELECT * FROM dice_games WHERE ${where} AND status = 'finished' AND ended_ms > ? ORDER BY id DESC LIMIT 1`).bind(...args, Date.now() - RD_CFG.RESULT_TTL_MS).first();
}
function rdReasonText(g, viewerId, outcome) {
    const r = g.reason; const other = g.scope === 'couple' ? 'Pasanganmu' : 'Pemain lain';
    if (r === 'cleared') return 'Bos stage ' + RD_CFG.FINAL_STAGE + ' tumbang!';
    if (r === 'lives') return g.mode === 'versus' ? (outcome === 'win' ? 'Lawanmu kehabisan nyawa' : 'Nyawamu habis') : 'Monster lolos — nyawa habis';
    if (r === 'forfeit') return g.winner_id === viewerId ? other + ' keluar dari game' : 'Kamu keluar dari game';
    if (r === 'disconnect') return g.mode === 'versus' && outcome === 'win' ? 'Lawan terputus' : 'Koneksi terputus terlalu lama';
    if (r === 'timeout') return 'Batas waktu permainan habis';
    return '';
}
async function composeDiceGame(env, g, viewerId) {
    if (!g || g.status === 'cancelled') return null;
    const isHost = g.host_id === viewerId; const otherId = isHost ? g.guest_id : g.host_id;
    const partner = (otherId ? await getCoupleUserCard(env, otherId) : null) || {};
    const side = (host) => ({ deck: rdParse(host ? g.host_deck : g.guest_deck), ready: (host ? g.host_ready : g.guest_ready) === 1, state: rdParse(host ? g.host_state : g.guest_state), present: host ? true : g.guest_joined === 1 });
    let result = null;
    if (g.status === 'finished') {
        let outcome = g.outcome || 'lose';
        if (g.mode === 'versus' && g.outcome === 'win') outcome = g.winner_id === viewerId ? 'win' : 'lose';
        const mine = (isHost ? g.host_rewarded : g.guest_rewarded) || 0;
        const rewarded = mine === 1;
        result = {
            outcome, reason: rdReasonText(g, viewerId, outcome), rewarded,
            exp: rewarded ? (g.reward_exp || 0) : 0, trophies: rewarded ? (g.reward_trophies || 0) : 0,
            trophiesLost: mine < 0 ? -mine : 0,
            note: outcome === 'win' && !rewarded ? (g.note || 'Batas hadiah harian tercapai (maks ' + RD_CFG.MAX_REWARDED_PER_DAY + ' kemenangan berhadiah per hari).') : null
        };
    }
    return {
        id: g.id, scope: g.scope, code: g.code || null, status: g.status, mode: g.mode, seed: g.seed, hostId: g.host_id, startsAt: g.starts_ms, startedAt: g.starts_ms, endedAt: g.ended_ms,
        me: { id: viewerId, isHost, ...side(isHost) }, partner: { ...partner, ...side(!isHost) }, result,
        config: { pickSeconds: RD_CFG.PICK_MS / 1000, stageSec: RD_CFG.STAGE_SEC, finalStage: RD_CFG.FINAL_STAGE, winTrophies: RD_CFG.WIN_TROPHIES, loseTrophies: RD_CFG.LOSE_TROPHIES, winExpCoop: RD_CFG.WIN_EXP_COOP, winExpVersus: RD_CFG.WIN_EXP_VERSUS, winExpSolo: RD_CFG.WIN_EXP_SOLO }
    };
}
// Chat game: pesan baru sejak id tertentu, lengkap dengan avatar, avatar border, dan level pengirim
const RD_CHAT_SQL = `SELECT c.id, c.user_id, c.content, c.created_ms, u.username, u.display_name, u.avatar_url, u.level, u.is_verified,
    (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
    (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
    (SELECT level_url FROM levels WHERE level_number = u.level) as level_url
    FROM dice_chat c JOIN users u ON c.user_id = u.id WHERE c.game_id = ? AND c.id > ? ORDER BY c.id DESC LIMIT 30`;
function rdChatMap(rows) {
    return (rows || []).slice().reverse().map(m => ({ id: m.id, userId: m.user_id, username: m.username, displayName: m.display_name || m.username, avatarUrl: m.avatar_url, borderUrl: m.border_url, borderScale: m.border_scale || 1.2, level: m.level || 1, levelUrl: m.level_url, isVerified: m.is_verified === 1, content: m.content, at: m.created_ms }));
}
async function rdChatSince(env, gameId, after) {
    const rows = await env.DB.prepare(RD_CHAT_SQL).bind(gameId, after || 0).all();
    return rdChatMap(rows.results);
}
async function rdReply(env, c, g, user, opts = {}) {
    const wantMe = c.scope === 'global' && !!opts.withMe;
    const [game, chat, trophies] = await Promise.all([
        composeDiceGame(env, g, user.id),
        opts.chat !== undefined ? opts.chat : ((g && opts.chatAfter !== undefined) ? rdChatSince(env, g.id, opts.chatAfter) : undefined),
        wantMe ? rdGetTrophies(env, user.id) : null
    ]);
    const data = { serverNow: Date.now(), game };
    if (chat !== undefined) data.chat = chat;
    if (wantMe) data.me = { ...trophies, ...rdSeasonInfo(), winTrophies: RD_CFG.WIN_TROPHIES, loseTrophies: RD_CFG.LOSE_TROPHIES, winExpSolo: RD_CFG.WIN_EXP_SOLO };
    return successResponse(data, opts.message || 'Success');
}
// Ringkasan untuk halaman Pasangan (ajakan main)
function rdSummaryFromRow(room, g, viewerId) {
    if (!room || room.status !== 'active' || !g) return null;
    return { id: g.id, status: g.status, mode: g.mode, invited: g.status === 'lobby' && g.host_id !== viewerId && g.guest_joined !== 1 };
}
async function rdSummaryForRoom(env, room, viewerId) {
    try {
        if (!room || room.status !== 'active') return null;
        const g = await env.DB.prepare(`SELECT id, status, mode, host_id, guest_joined FROM dice_games WHERE scope = 'couple' AND room_id = ? AND status IN ${RD_ACTIVE} ORDER BY id DESC LIMIT 1`).bind(room.id).first();
        return rdSummaryFromRow(room, g, viewerId);
    } catch (e) { return null; }
}
async function rdBody(request) { try { return (await request.json()) || {}; } catch (e) { return {}; } }
async function handleDiceGet(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        const after = new URL(request.url).searchParams.get('chatAfter');
        return rdReply(env, c, await rdFindGame(env, c, user.id), user, { withMe: true, chatAfter: after === null ? undefined : (parseInt(after) || 0) });
    } catch (e) { return errorResponse('Gagal memuat game: ' + dbHint(e), 500); }
}
async function handleDiceCreate(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        const body = await rdBody(request);
        const mode = (c.scope === 'global' && body.mode === 'solo') ? 'solo' : (body.mode === 'versus' ? 'versus' : 'coop');
        const existing = await rdFindGame(env, c, user.id);
        if (existing && existing.status !== 'finished') return rdReply(env, c, existing, user, { withMe: true, message: 'Game sudah ada' });
        const seed = Math.floor(Math.random() * 2147483647) + 1; let g;
        if (mode === 'solo') {
            // main sendiri: tanpa kode & tanpa lobi, langsung 30 detik memilih dadu
            g = await env.DB.prepare("INSERT INTO dice_games (scope, host_id, status, mode, seed, created_ms, starts_ms) VALUES ('global', ?, 'picking', 'solo', ?, ?, ?) RETURNING *").bind(user.id, seed, Date.now(), Date.now() + RD_CFG.PICK_MS).first();
        } else if (c.scope === 'global') {
            let code = null;
            for (let i = 0; i < 10; i++) {
                const cd = generatePartyCode();
                const dup = await env.DB.prepare(`SELECT id FROM dice_games WHERE code = ? AND status IN ${RD_ACTIVE}`).bind(cd).first();
                if (!dup) { code = cd; break; }
            }
            if (!code) return errorResponse('Gagal membuat kode, coba lagi');
            g = await env.DB.prepare("INSERT INTO dice_games (scope, code, host_id, status, mode, seed, created_ms) VALUES ('global', ?, ?, 'lobby', ?, ?, ?) RETURNING *").bind(code, user.id, mode, seed, Date.now()).first();
        } else {
            g = await env.DB.prepare("INSERT INTO dice_games (scope, room_id, host_id, guest_id, status, mode, seed, created_ms) VALUES ('couple', ?, ?, ?, 'lobby', ?, ?, ?) RETURNING *").bind(c.room.id, user.id, c.partnerId, mode, seed, Date.now()).first();
            await notifyCoupleUser(env, c.partnerId, `🎲 *${coupleSenderName(user)}* mengajak main *Random Dice* (${mode === 'versus' ? 'mode Lawan' : 'mode Teman'}). Buka Room Pasangan untuk bergabung!`);
        }
        return rdReply(env, c, g, user, { withMe: true, message: 'Room dibuat. Menunggu pemain lain…' });
    } catch (e) { return errorResponse('Gagal membuat game: ' + dbHint(e), 500); }
}
async function handleDiceJoin(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        const body = await rdBody(request); let g;
        if (c.scope === 'global') {
            const code = String(body.code || '').trim().toUpperCase();
            if (!code) return errorResponse('Kode room wajib diisi');
            const mine = await rdFindGame(env, c, user.id);
            if (mine && mine.status !== 'finished') {
                if (mine.code === code) return rdReply(env, c, mine, user, { withMe: true });
                return errorResponse('Kamu masih punya game lain. Selesaikan atau keluar dulu.', 400);
            }
            g = await env.DB.prepare(`SELECT * FROM dice_games WHERE scope = 'global' AND code = ? AND status IN ${RD_ACTIVE} ORDER BY id DESC LIMIT 1`).bind(code).first();
            if (!g) return errorResponse('Room tidak ditemukan atau sudah berakhir', 404);
            if (g.status !== 'lobby' || g.guest_id) return errorResponse('Room ini sudah penuh', 400);
            const upd = await env.DB.prepare("UPDATE dice_games SET guest_id = ?, guest_joined = 1, status = 'picking', starts_ms = ? WHERE id = ? AND status = 'lobby' AND guest_id IS NULL").bind(user.id, Date.now() + RD_CFG.PICK_MS, g.id).run();
            if (upd && upd.meta && upd.meta.changes === 0) return errorResponse('Room ini sudah penuh', 400);
        } else {
            g = await rdFindGame(env, c, user.id);
            if (!g || g.status === 'finished') return errorResponse('Tidak ada lobi game. Buat dulu.', 404);
            if (g.status === 'lobby' && g.guest_id === user.id) await env.DB.prepare("UPDATE dice_games SET guest_joined = 1, status = 'picking', starts_ms = ? WHERE id = ? AND status = 'lobby'").bind(Date.now() + RD_CFG.PICK_MS, g.id).run();
        }
        g = await env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
        return rdReply(env, c, g, user, { withMe: true });
    } catch (e) { return errorResponse('Gagal bergabung: ' + dbHint(e), 500); }
}
async function handleDicePick(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        let g = await rdFindGame(env, c, user.id);
        if (!g || g.status !== 'picking') return rdReply(env, c, g, user);
        const body = await rdBody(request); const isHost = g.host_id === user.id; const col = isHost ? 'host' : 'guest';
        if (g.mode !== 'solo' && (body.mode === 'versus' || body.mode === 'coop') && body.mode !== g.mode) await env.DB.prepare("UPDATE dice_games SET mode = ?, host_ready = 0, guest_ready = 0 WHERE id = ? AND status = 'picking'").bind(body.mode, g.id).run();
        if (body.deck !== undefined) {
            if (!rdValidDeck(body.deck)) return errorResponse('Pilih tepat 5 dadu yang berbeda', 400);
            await env.DB.prepare(`UPDATE dice_games SET ${col}_deck = ? WHERE id = ? AND status = 'picking'`).bind(JSON.stringify(body.deck), g.id).run();
        }
        g = await env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
        if (body.ready === true && rdValidDeck(rdParse(isHost ? g.host_deck : g.guest_deck))) {
            await env.DB.prepare(`UPDATE dice_games SET ${col}_ready = 1 WHERE id = ? AND status = 'picking'`).bind(g.id).run();
            g = await env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
            // keduanya siap: tidak perlu menunggu 30 detik penuh
            if (g.host_ready === 1 && (g.mode === 'solo' || g.guest_ready === 1) && g.starts_ms - Date.now() > RD_CFG.READY_START_MS) {
                await env.DB.prepare("UPDATE dice_games SET starts_ms = ? WHERE id = ? AND status = 'picking'").bind(Date.now() + RD_CFG.READY_START_MS, g.id).run();
                g = await env.DB.prepare('SELECT * FROM dice_games WHERE id = ?').bind(g.id).first();
            }
        }
        return rdReply(env, c, g, user);
    } catch (e) { return errorResponse('Gagal menyimpan pilihan: ' + dbHint(e), 500); }
}
async function handleDiceSync(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const body = await rdBody(request); const now = Date.now();
        const st = rdCleanState(body.state); const gameId = Number(body.gameId) || 0;
        const chatAfter = typeof body.chatAfter === 'number' ? body.chatAfter : undefined;
        if (st && gameId) {
            // Jalur cepat (dipanggil tiap 1,5 detik per pemain): simpan status + ambil chat dalam SATU panggilan D1.
            // UPDATE hanya mengenai kolom milik pengirim, dan hanya bila ia memang pemain di game itu.
            const json = JSON.stringify(st), uid = user.id;
            const stmts = [env.DB.prepare(
                `UPDATE dice_games SET
                 host_state = CASE WHEN host_id = ? THEN ? ELSE host_state END, host_seen = CASE WHEN host_id = ? THEN ? ELSE host_seen END,
                 guest_state = CASE WHEN guest_id = ? THEN ? ELSE guest_state END, guest_seen = CASE WHEN guest_id = ? THEN ? ELSE guest_seen END
                 WHERE id = ? AND scope = ? AND status = 'playing' AND (host_id = ? OR guest_id = ?) RETURNING *`
            ).bind(uid, json, uid, now, uid, json, uid, now, gameId, scope, uid, uid)];
            if (chatAfter !== undefined) stmts.push(env.DB.prepare(RD_CHAT_SQL).bind(gameId, chatAfter));
            const res = await env.DB.batch(stmts);
            let g = (res[0].results || [])[0] || null;
            if (g) {
                const otherId = g.host_id === uid ? g.guest_id : g.host_id;
                if (!st.alive) g = await finishDiceGame(env, g, g.mode === 'versus' ? { winnerId: otherId, outcome: 'win', reason: 'lives' } : { outcome: 'lose', reason: 'lives' });
                else if (st.cleared && g.mode !== 'versus' && now - g.starts_ms >= (RD_CFG.START_DELAY + (RD_CFG.FINAL_STAGE - 1) * RD_CFG.STAGE_SEC) * 1000) g = await finishDiceGame(env, g, { outcome: 'win', reason: 'cleared' });
                else g = await advanceDiceGame(env, g);
                return rdReply(env, { scope }, g, user, { chat: res[1] ? rdChatMap(res[1].results) : undefined, withMe: g.status === 'finished' });
            }
        }
        // Game sudah selesai / belum mulai / bukan pemainnya: jalur biasa
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        const g = await rdFindGame(env, c, user.id);
        return rdReply(env, c, g, user, { chatAfter, withMe: !!(g && g.status === 'finished') });
    } catch (e) { return errorResponse('Gagal sinkron: ' + dbHint(e), 500); }
}
async function handleDiceLeave(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        let g = await rdFindGame(env, c, user.id);
        if (!g || g.status === 'finished') return rdReply(env, c, null, user, { withMe: true });
        const otherId = g.host_id === user.id ? g.guest_id : g.host_id;
        if (g.status === 'playing') g = await finishDiceGame(env, g, g.mode === 'versus' ? { winnerId: otherId, outcome: 'win', reason: 'forfeit' } : { winnerId: otherId, outcome: 'lose', reason: 'forfeit' });
        else { await env.DB.prepare(`UPDATE dice_games SET status = 'cancelled', ended_ms = ? WHERE id = ? AND status IN ('lobby', 'picking')`).bind(Date.now(), g.id).run(); g = null; }
        return rdReply(env, c, g, user, { withMe: true, message: 'Keluar dari game' });
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleDiceChat(request, env, user, scope) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const c = await rdContext(env, user, scope); if (c.error) return c.error;
        const g = await rdFindGame(env, c, user.id);
        if (!g) return errorResponse('Tidak ada game untuk chat', 404);
        const body = await rdBody(request); const content = String(body.content || '').trim().slice(0, RD_CFG.CHAT_MAX);
        if (!content) return errorResponse('Pesan kosong');
        const now = Date.now();
        const recent = await env.DB.prepare('SELECT COUNT(*) as count FROM dice_chat WHERE game_id = ? AND user_id = ? AND created_ms > ?').bind(g.id, user.id, now - 10000).first();
        if (recent && recent.count >= 8) return errorResponse('Terlalu cepat. Tunggu sebentar ya.', 429);
        await env.DB.prepare('INSERT INTO dice_chat (game_id, user_id, content, created_ms) VALUES (?, ?, ?, ?)').bind(g.id, user.id, content, now).run();
        return rdReply(env, c, g, user, { chatAfter: Number(body.chatAfter) || 0 });
    } catch (e) { return errorResponse('Gagal mengirim pesan: ' + dbHint(e), 500); }
}
// Leaderboard trophy musim ini (Random Dice global, mode Lawan)
async function handleTrophyLeaderboard(request, env, user) {
    try {
        const url = new URL(request.url); const info = rdSeasonInfo();
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1')); const limit = 20, offset = (page - 1) * limit;
        const rows = await env.DB.prepare(
            `SELECT t.user_id, t.trophies, t.wins, u.username, u.display_name, u.avatar_url, u.level, u.is_verified,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale
             FROM dice_trophies t JOIN users u ON t.user_id = u.id WHERE t.season = ? AND t.trophies > 0
             ORDER BY t.trophies DESC, t.wins DESC, t.user_id ASC LIMIT ? OFFSET ?`
        ).bind(info.season, limit, offset).all();
        const total = await env.DB.prepare('SELECT COUNT(*) as count FROM dice_trophies WHERE season = ? AND trophies > 0').bind(info.season).first();
        const count = total ? total.count : 0; let mine = null;
        if (user) {
            const t = await rdGetTrophies(env, user.id); let rank = null;
            if (t.trophies > 0) {
                const ahead = await env.DB.prepare('SELECT COUNT(*) as count FROM dice_trophies WHERE season = ? AND (trophies > ? OR (trophies = ? AND (wins > ? OR (wins = ? AND user_id < ?))))').bind(info.season, t.trophies, t.trophies, t.wins, t.wins, user.id).first();
                rank = (ahead ? ahead.count : 0) + 1;
            }
            mine = { rank, trophies: t.trophies, wins: t.wins, ...((await getCoupleUserCard(env, user.id)) || {}) };
        }
        return successResponse({
            ...info, total: count, page, totalPages: Math.ceil(count / limit), mine,
            users: (rows.results || []).map((r, i) => ({ rank: offset + i + 1, id: r.user_id, username: r.username, displayName: r.display_name || r.username, avatarUrl: r.avatar_url, borderUrl: r.border_url, borderScale: r.border_scale || 1.2, level: r.level || 1, isVerified: r.is_verified === 1, trophies: r.trophies, wins: r.wins }))
        });
    } catch (e) { return errorResponse('Gagal memuat leaderboard trophy: ' + dbHint(e), 500); }
}

// ============================================================
// MENGIKUTI / PENGIKUT (ala Instagram)
// ============================================================
async function getFollowInfo(env, userId, viewerId) {
    try {
        const v = viewerId || 0;
        const r = await env.DB.prepare(
            `SELECT (SELECT COUNT(*) FROM follows WHERE following_id = ?) as followers, (SELECT COUNT(*) FROM follows WHERE follower_id = ?) as following,
             (SELECT COUNT(*) FROM follows WHERE follower_id = ? AND following_id = ?) as is_following, (SELECT COUNT(*) FROM follows WHERE follower_id = ? AND following_id = ?) as follows_me`
        ).bind(userId, userId, v, userId, userId, v).first();
        return { followersCount: r.followers || 0, followingCount: r.following || 0, isFollowing: r.is_following > 0, followsMe: r.follows_me > 0 };
    } catch (e) { return { followersCount: 0, followingCount: 0, isFollowing: false, followsMe: false }; }
}
async function getFollowingSet(env, viewer) {
    try { if (!viewer) return new Set(); const rows = await env.DB.prepare('SELECT following_id FROM follows WHERE follower_id = ?').bind(viewer.id).all(); return new Set((rows.results || []).map(r => r.following_id)); }
    catch (e) { return new Set(); }
}
async function handleFollowUser(request, env, user, targetId, follow) {
    if (!user) return errorResponse('Login untuk mengikuti', 401);
    try {
        const id = parseInt(targetId);
        if (id === user.id) return errorResponse('Tidak bisa mengikuti diri sendiri', 400);
        const target = await env.DB.prepare('SELECT id FROM users WHERE id = ?').bind(id).first();
        if (!target) return errorResponse('User tidak ditemukan', 404);
        if (follow) await env.DB.prepare('INSERT OR IGNORE INTO follows (follower_id, following_id, created_at) VALUES (?, ?, ?)').bind(user.id, id, new Date().toISOString()).run();
        else await env.DB.prepare('DELETE FROM follows WHERE follower_id = ? AND following_id = ?').bind(user.id, id).run();
        const info = await getFollowInfo(env, id, user.id);
        return successResponse({ userId: id, following: info.isFollowing, followersCount: info.followersCount, followsMe: info.followsMe }, follow ? 'Mengikuti' : 'Berhenti mengikuti');
    } catch (e) { return errorResponse('Gagal: ' + dbHint(e), 500); }
}
async function handleFollowList(request, env, viewer, username, type) {
    try {
        const owner = await env.DB.prepare('SELECT id FROM users WHERE username = ?').bind(username).first();
        if (!owner) return errorResponse('User tidak ditemukan', 404);
        const page = Math.max(1, parseInt(new URL(request.url).searchParams.get('page') || '1')); const limit = 30, offset = (page - 1) * limit;
        const join = type === 'followers' ? 'f.follower_id = u.id WHERE f.following_id = ?' : 'f.following_id = u.id WHERE f.follower_id = ?';
        const rows = await env.DB.prepare(
            `SELECT u.id, u.username, u.display_name, u.avatar_url, u.level, u.is_verified,
             (SELECT url FROM avatar_borders WHERE id = u.avatar_border_id) as border_url,
             (SELECT scale FROM avatar_borders WHERE id = u.avatar_border_id) as border_scale,
             (SELECT COUNT(*) FROM follows v WHERE v.follower_id = ? AND v.following_id = u.id) as viewer_follows
             FROM follows f JOIN users u ON ${join} ORDER BY f.created_at DESC LIMIT ? OFFSET ?`
        ).bind(viewer ? viewer.id : 0, owner.id, limit, offset).all();
        const total = await env.DB.prepare(`SELECT COUNT(*) as count FROM follows WHERE ${type === 'followers' ? 'following_id' : 'follower_id'} = ?`).bind(owner.id).first();
        const count = total ? total.count : 0;
        return successResponse({
            type, total: count, page, totalPages: Math.ceil(count / limit),
            users: (rows.results || []).map(u => ({ id: u.id, username: u.username, displayName: u.display_name || u.username, avatarUrl: u.avatar_url, borderUrl: u.border_url, borderScale: u.border_scale || 1.2, level: u.level || 1, isVerified: u.is_verified === 1, isFollowing: u.viewer_follows > 0, isSelf: !!viewer && viewer.id === u.id }))
        });
    } catch (e) { return errorResponse('Gagal memuat daftar: ' + dbHint(e), 500); }
}

// ============================================================
// TOP UP KOIN DENGAN TELEGRAM STARS (mata uang XTR)
// Alur: createInvoiceLink -> Mini App openInvoice -> bot menerima pre_checkout_query
// (wajib dijawab) -> bot menerima successful_payment -> koin ditambahkan.
// ============================================================
const STAR_PACKAGES = [
    { id: 'k1000', koin: 1000, stars: 3 },
    { id: 'k5000', koin: 5000, stars: 15 },
    { id: 'k10000', koin: 10000, stars: 30 }
];
async function handleGetTopupPackages(request, env, user) { return successResponse({ packages: STAR_PACKAGES, available: !!env.TELEGRAM_BOT_TOKEN }); }
async function handleCreateStarsInvoice(request, env, user) {
    if (!user) return errorResponse('Login untuk top up', 401);
    try {
        if (!env.TELEGRAM_BOT_TOKEN) return errorResponse('Bot Telegram belum dikonfigurasi', 500);
        let body = {}; try { body = await request.json(); } catch (e) {}
        const pkg = STAR_PACKAGES.find(p => p.id === body.packageId);
        if (!pkg) return errorResponse('Paket tidak ditemukan', 400);
        const payload = 'topup_' + generateToken(12);
        const order = await env.DB.prepare("INSERT INTO star_payments (user_id, package_id, koin, stars, payload, status, created_at) VALUES (?, ?, ?, ?, ?, 'pending', ?) RETURNING id").bind(user.id, pkg.id, pkg.koin, pkg.stars, payload, new Date().toISOString()).first();
        const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/createInvoiceLink`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: `${formatKoin(pkg.koin)} Koin Fesstale`, description: `Top up ${formatKoin(pkg.koin)} koin untuk akun @${user.username}`, payload, provider_token: '', currency: 'XTR', prices: [{ label: `${formatKoin(pkg.koin)} Koin`, amount: pkg.stars }] })
        });
        const data = await res.json();
        if (!data.ok || !data.result) return errorResponse('Gagal membuat tagihan Telegram Stars: ' + (data.description || 'tidak diketahui'), 502);
        return successResponse({ orderId: order.id, invoiceLink: data.result, koin: pkg.koin, stars: pkg.stars });
    } catch (e) { return errorResponse('Gagal membuat tagihan: ' + dbHint(e), 500); }
}
async function handleStarsOrderStatus(request, env, user) {
    if (!user) return errorResponse('Login required', 401);
    try {
        const orderId = parseInt(new URL(request.url).searchParams.get('orderId') || '0');
        const order = await env.DB.prepare('SELECT id, status, koin, stars FROM star_payments WHERE id = ? AND user_id = ?').bind(orderId, user.id).first();
        if (!order) return errorResponse('Tagihan tidak ditemukan', 404);
        const u = await env.DB.prepare('SELECT koin FROM users WHERE id = ?').bind(user.id).first();
        return successResponse({ status: order.status, added: order.koin, stars: order.stars, koin: u ? u.koin : 0 });
    } catch (e) { return errorResponse('Gagal memeriksa tagihan', 500); }
}
// Telegram menunggu jawaban maksimal 10 detik; tagihan yang tidak dikenal ditolak
async function handleStarsPreCheckout(env, q) {
    let ok = false, errorMessage = 'Tagihan tidak valid atau sudah kedaluwarsa.';
    try {
        const order = await env.DB.prepare('SELECT * FROM star_payments WHERE payload = ?').bind(String(q.invoice_payload || '')).first();
        if (order && order.status === 'pending' && q.currency === 'XTR' && Number(q.total_amount) === order.stars) ok = true;
        else if (order && order.status === 'paid') errorMessage = 'Tagihan ini sudah dibayar.';
    } catch (e) {}
    try {
        await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/answerPreCheckoutQuery`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ok ? { pre_checkout_query_id: q.id, ok: true } : { pre_checkout_query_id: q.id, ok: false, error_message: errorMessage })
        });
    } catch (e) {}
}
async function handleStarsSuccessfulPayment(env, message) {
    try {
        const sp = message.successful_payment;
        const order = await env.DB.prepare('SELECT * FROM star_payments WHERE payload = ?').bind(String(sp.invoice_payload || '')).first();
        if (!order) return;
        // tandai lunas secara atomik supaya koin tidak masuk dua kali bila Telegram mengirim ulang
        const upd = await env.DB.prepare("UPDATE star_payments SET status = 'paid', telegram_charge_id = ?, paid_at = ? WHERE id = ? AND status = 'pending'").bind(sp.telegram_payment_charge_id || null, new Date().toISOString(), order.id).run();
        if (upd && upd.meta && upd.meta.changes === 0) return;
        await env.DB.prepare('UPDATE users SET koin = koin + ?, updated_at = datetime("now") WHERE id = ?').bind(order.koin, order.user_id).run();
        await env.DB.prepare('INSERT INTO transactions (user_id, type, amount, source, created_at) VALUES (?, ?, ?, ?, datetime("now"))').bind(order.user_id, 'earn', order.koin, 'topup_stars').run();
        await sendTelegramMessage(env, message.chat.id, `✅ *Top up berhasil!*\n\n+${formatKoin(order.koin)} koin sudah masuk ke akunmu (${order.stars} ⭐).`);
    } catch (e) { console.error('Stars payment error:', e); }
}

// Beranda dalam SATU request: menggabungkan 5–7 endpoint yang sebelumnya dipanggil terpisah oleh aplikasi.
// Unduhan gambar (kartu streak) untuk Telegram.WebApp.downloadFile: meneruskan gambar dari Gyazo dengan header "attachment".
// Hanya menerima alamat gambar i.gyazo.com supaya tidak menjadi proxy terbuka.
async function handleDownloadImage(request) {
    try {
        const url = new URL(request.url); const src = url.searchParams.get('src') || '';
        if (!/^https:\/\/i\.gyazo\.com\/[A-Za-z0-9]+\.(jpg|jpeg|png|webp|gif)$/i.test(src)) return errorResponse('Sumber gambar tidak diizinkan', 400);
        const name = (url.searchParams.get('name') || 'gambar.jpg').replace(/[^A-Za-z0-9._-]/g, '').slice(0, 60) || 'gambar.jpg';
        const upstream = await fetch(src);
        const type = upstream.headers.get('Content-Type') || '';
        if (!upstream.ok || !type.startsWith('image/')) return errorResponse('Gambar tidak ditemukan', 404);
        return new Response(upstream.body, { headers: { 'Content-Type': type, 'Content-Disposition': `attachment; filename="${name}"`, 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'private, max-age=300' } });
    } catch (e) { return errorResponse('Gagal mengunduh gambar', 502); }
}

async function handleGetHome(request, env, user) {
    try {
        const url = new URL(request.url);
        const page = Math.max(1, parseInt(url.searchParams.get('page') || '1') || 1);
        const sub = (path) => new Request(url.origin + path, { headers: request.headers });
        const tasks = {
            notes: handleGetNotes(sub('/api/notes'), env, user),
            featured: handleGetFeaturedContent(sub('/api/featured'), env),
            trending: handleGetTrendingContent(sub('/api/trending?limit=20'), env),
            latest: handleGetManualContent(sub('/api/content?sort=latest&page=' + page + '&limit=20'), env),
            popular: handleGetManualContent(sub('/api/content?sort=popular&page=1&limit=10'), env)
        };
        if (user) {
            tasks.recent = handleGetRecentlyWatched(sub('/api/recently-watched'), env, user);
            tasks.recommendations = handleGetRecommendations(sub('/api/recommendations'), env, user);
        }
        const keys = Object.keys(tasks);
        const parts = await Promise.all(keys.map((k) => Promise.resolve(tasks[k]).then((r) => r.json()).catch(() => ({ success: false, error: 'Gagal memuat' }))));
        const data = {}; keys.forEach((k, i) => { data[k] = parts[i]; });
        return successResponse(data);
    } catch (e) { return errorResponse('Gagal memuat beranda', 500); }
}

async function handleRequest(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                ...getSecurityHeaders()
            }
        });
    }

    if (path === '/robots.txt') return handleRobots(request);
    if (path === '/sitemap.xml') return handleSitemap(request, env);
    if ((path.startsWith('/avatars/') || path.startsWith('/covers/') || path.startsWith('/uploads/')) && env.R2) return serveR2File(request, env, path);

    const token = extractToken(request);
    const user = await verifyToken(env, token);

    // TELEGRAM AUTH
    if (path === '/api/auth/telegram-webapp' && method === 'POST') return handleTelegramWebAppLogin(request, env);
    if (path === '/api/auth/telegram' && method === 'POST') return errorResponse('Widget login disabled. Use Mini App.', 403);
    if (path === '/api/auth/telegram/redirect' && method === 'GET') return errorResponse('OIDC disabled. Use Mini App.', 403);
    if (path === '/api/auth/telegram/callback' && method === 'GET') return errorResponse('OIDC disabled. Use Mini App.', 403);

    // TELEGRAM BOT
    if (path === '/api/telegram/webhook' && method === 'POST') return handleTelegramWebhook(request, env);
    if (path === '/api/telegram/setup-webhook' && method === 'POST') return handleSetupTelegramWebhook(request, env, user);
    if (path === '/api/telegram/status' && method === 'GET') {
        const botToken = env.TELEGRAM_BOT_TOKEN;
        if (!botToken) return successResponse({ configured: false });
        const botUsername = await getAppSetting(env, 'telegram_bot_username');
        let webhookInfo = null;
        try { const res = await fetch(`https://api.telegram.org/bot${botToken}/getWebhookInfo`); webhookInfo = await res.json(); } catch (e) {}
        return successResponse({ configured: true, botUsername: botUsername || null, webhookInfo, oidcConfigured: false, miniAppMode: true });
    }

    // MANUAL AUTH DISABLED
    if (path === '/api/auth/register' && method === 'POST') return errorResponse('Pendaftaran manual dinonaktifkan. Buka via Telegram Mini App.', 403);
    if (path === '/api/auth/login' && method === 'POST') return errorResponse('Login manual dinonaktifkan. Buka via Telegram Mini App.', 403);
    if (path === '/api/auth/verify-email' && method === 'POST') return errorResponse('Verifikasi email dinonaktifkan.', 403);
    if (path === '/api/auth/resend-verification' && method === 'POST') return errorResponse('Verifikasi email dinonaktifkan.', 403);

    if (path === '/api/auth/logout' && method === 'POST') return handleLogout(request, env, user);
    if (path === '/api/auth/me' && method === 'GET') return handleGetMe(request, env, user);

    // REFERRAL
    if (path === '/api/referral/stats' && method === 'GET') return handleGetReferralStats(request, env, user);
    if (path === '/api/referral/apply' && method === 'POST') return handleApplyReferralCode(request, env, user);

    // USER PROFILE / GIFTS
    const userProfileMatch = path.match(/^\/api\/user\/([a-zA-Z0-9_]+)$/);
    if (userProfileMatch && method === 'GET') return handleGetUserProfile(request, env, userProfileMatch[1], user);
    const userGiftsMatch = path.match(/^\/api\/user\/([a-zA-Z0-9_]+)\/gifts$/);
    if (userGiftsMatch && method === 'GET') return handleGetUserGifts(request, env, userGiftsMatch[1]);
    if (path === '/api/gifts' && method === 'GET') return handleGetGifts(request, env, user);
    const sendGiftMatch = path.match(/^\/api\/gifts\/send\/(\d+)$/);
    if (sendGiftMatch && method === 'POST') return handleSendGift(request, env, user, sendGiftMatch[1]);

    // ⭐ NEW: COIN TRANSFER & TELEGRAM CHANGE
    if (path === '/api/coins/transfer' && method === 'POST') return handleCoinTransfer(request, env, user);
    if (path === '/api/profile/change-telegram' && method === 'POST') return handleChangeTelegram(request, env, user);

    // LEADERBOARD / NOTES / STATS / FEATURED / STORY COUNT
    if (path === '/api/leaderboard' && method === 'GET') return handleGetLeaderboard(request, env, user);
    if (path === '/api/download-image' && method === 'GET') return handleDownloadImage(request);
    if (path === '/api/home' && method === 'GET') return handleGetHome(request, env, user);
    if (path === '/api/notes' && method === 'GET') return handleGetNotes(request, env, user);
    if (path === '/api/stats' && method === 'GET') return handleGetStats(request, env);
    if (path === '/api/stats/story-count' && method === 'GET') return handleGetStoryCount(request, env);
    if (path === '/api/featured' && method === 'GET') return handleGetFeaturedContent(request, env);
    if (path === '/api/genres' && method === 'GET') return handleGetGenres(request, env);
    if (path === '/api/countries' && method === 'GET') return handleGetCountries(request, env);

    // UPLOAD GYAZO
    if (path === '/api/upload/gyazo' && method === 'POST') return handleUploadGyazo(request, env, user);

    // SERIES / EPISODES
    const seriesEpisodesMatch = path.match(/^\/api\/content\/(\d+)\/episodes$/);
    if (seriesEpisodesMatch && method === 'GET') return handleGetSeriesEpisodes(request, env, seriesEpisodesMatch[1]);
    const drakorRecsMatch = path.match(/^\/api\/drakor-recommendations\/(\d+)$/);
    if (drakorRecsMatch && method === 'GET') return handleGetDrakorRecommendations(request, env, drakorRecsMatch[1]);
    const episodeDetailMatch = path.match(/^\/api\/episode\/(\d+)$/);
    if (episodeDetailMatch && method === 'GET') return handleWatchEpisode(request, env, user, episodeDetailMatch[1]);
    const episodePayMatch = path.match(/^\/api\/episode\/(\d+)\/pay$/);
    if (episodePayMatch && method === 'POST') return handlePayAndPlayEpisode(request, env, user, episodePayMatch[1]);

    // CONTENT
    if (path === '/api/content' && method === 'GET') return handleGetManualContent(request, env);
    if (path === '/api/trending' && method === 'GET') return handleGetTrendingContent(request, env);
    if (path === '/api/recommendations' && method === 'GET') return handleGetRecommendations(request, env, user);
    if (path === '/api/recently-watched' && method === 'GET') return handleGetRecentlyWatched(request, env, user);
    const contentDetailMatch = path.match(/^\/api\/content\/(\d+)$/);
    if (contentDetailMatch && method === 'GET') return handleGetManualContentDetail(request, env, contentDetailMatch[1]);
    const watchContentMatch = path.match(/^\/api\/watch-content\/(\d+)$/);
    if (watchContentMatch && method === 'GET') return handleWatchManualContent(request, env, user, watchContentMatch[1]);
    const watchPayMatch = path.match(/^\/api\/watch-content\/(\d+)\/pay$/);
    if (watchPayMatch && method === 'POST') return handlePayAndPlayContent(request, env, user, watchPayMatch[1]);

    // REACTIONS / COMMENTS
    const reactionsMatch = path.match(/^\/api\/reactions\/(\d+)$/);
    if (reactionsMatch && method === 'GET') return handleGetReactions(request, env, reactionsMatch[1]);
    if (reactionsMatch && method === 'POST') return handleAddReaction(request, env, user, reactionsMatch[1]);
    const commentsMatch = path.match(/^\/api\/comments\/(\d+)$/);
    if (commentsMatch && method === 'GET') return handleGetComments(request, env, commentsMatch[1]);
    if (commentsMatch && method === 'POST') return handleAddComment(request, env, user, commentsMatch[1]);
    const editCommentMatch = path.match(/^\/api\/comments\/edit\/(\d+)$/);
    if (editCommentMatch && method === 'PUT') return handleEditComment(request, env, user, editCommentMatch[1]);
    const deleteCommentMatch = path.match(/^\/api\/comments\/delete\/(\d+)$/);
    if (deleteCommentMatch && method === 'DELETE') return handleDeleteComment(request, env, user, deleteCommentMatch[1]);

    // GALLERY COMMENTS
    const galleryCommentsMatch = path.match(/^\/api\/gallery\/(\d+)\/comments$/);
    if (galleryCommentsMatch && method === 'GET') return handleGetGalleryComments(request, env, galleryCommentsMatch[1]);
    if (galleryCommentsMatch && method === 'POST') return handleAddGalleryComment(request, env, user, galleryCommentsMatch[1]);
    const editGalCommentMatch = path.match(/^\/api\/gallery\/comments\/edit\/(\d+)$/);
    if (editGalCommentMatch && method === 'PUT') return handleEditGalleryComment(request, env, user, editGalCommentMatch[1]);
    const deleteGalCommentMatch = path.match(/^\/api\/gallery\/comments\/delete\/(\d+)$/);
    if (deleteGalCommentMatch && method === 'DELETE') return handleDeleteGalleryComment(request, env, user, deleteGalCommentMatch[1]);

    // MISSIONS / VIP / HISTORY
    if (path === '/api/missions' && method === 'GET') return handleGetMissions(request, env, user);
    if (path === '/api/missions/checkin' && method === 'POST') return handleCheckin(request, env, user);
    if (path === '/api/missions/progress' && method === 'POST') return handleMissionProgress(request, env, user);
    if (path === '/api/vip/buy' && method === 'POST') return handleBuyVipWithKoin(request, env, user);
    if (path === '/api/coin-history' && method === 'GET') return handleGetCoinHistory(request, env, user);

    // AVATAR BORDERS / BUBBLES
    if (path === '/api/avatar-borders' && method === 'GET') return handleGetAvatarBorders(request, env, user);
    const buyBorderMatch = path.match(/^\/api\/avatar-borders\/buy\/(\d+)$/);
    if (buyBorderMatch && method === 'POST') return handleBuyAvatarBorder(request, env, user, buyBorderMatch[1]);
    const equipBorderMatch = path.match(/^\/api\/avatar-borders\/equip\/(\d+)$/);
    if (equipBorderMatch && method === 'POST') return handleEquipAvatarBorder(request, env, user, equipBorderMatch[1]);
    if (path === '/api/bubbles' && method === 'GET') return handleGetBubbles(request, env, user);
    const buyBubbleMatch = path.match(/^\/api\/bubbles\/buy\/(\d+)$/);
    if (buyBubbleMatch && method === 'POST') return handleBuyBubble(request, env, user, buyBubbleMatch[1]);
    const equipBubbleMatch = path.match(/^\/api\/bubbles\/equip\/(\d+)$/);
    if (equipBubbleMatch && method === 'POST') return handleEquipBubble(request, env, user, equipBubbleMatch[1]);

    // PROFILE
    if (path === '/api/profile/update' && method === 'PUT') return handleUpdateProfile(request, env, user);
    if (path === '/api/profile/avatar' && method === 'POST') return handleUploadAvatar(request, env, user);
    if (path === '/api/profile/cover' && method === 'POST') return handleUploadCover(request, env, user);
    if (path === '/api/profile/reset-username-cooldown' && method === 'POST') return handleResetUsernameCooldown(request, env, user);

    // CONTENT REQUESTS
    if (path === '/api/content-requests' && method === 'POST') return handleSubmitContentRequest(request, env, user);
    if (path === '/api/content-requests' && method === 'GET') return handleGetContentRequests(request, env, user);
    const processRequestMatch = path.match(/^\/api\/content-requests\/(\d+)$/);
    if (processRequestMatch && method === 'PUT') return handleProcessContentRequest(request, env, user, processRequestMatch[1]);

    // GALLERY
    if (path === '/api/gallery' && method === 'GET') return handleGetGallery(request, env, user);
    if (path === '/api/gallery/saved' && method === 'GET') return handleGetSavedGallery(request, env, user);
    if (path === '/api/gallery/upload' && method === 'POST') return handleUploadGallery(request, env, user);
    const galleryDetailMatch = path.match(/^\/api\/gallery\/(\d+)$/);
    if (galleryDetailMatch && method === 'GET') return handleGetGalleryDetail(request, env, user, galleryDetailMatch[1]);
    const galleryLikeMatch = path.match(/^\/api\/gallery\/like\/(\d+)$/);
    if (galleryLikeMatch && method === 'POST') return handleGalleryAction(request, env, user, galleryLikeMatch[1], 'like');
    const gallerySaveMatch = path.match(/^\/api\/gallery\/save\/(\d+)$/);
    if (gallerySaveMatch && method === 'POST') return handleGalleryAction(request, env, user, gallerySaveMatch[1], 'save');
    const galleryBuyMatch = path.match(/^\/api\/gallery\/buy\/(\d+)$/);
    if (galleryBuyMatch && method === 'POST') return handleBuyGalleryPost(request, env, user, galleryBuyMatch[1]);
    const adminGalleryDeleteMatch = path.match(/^\/api\/admin\/gallery\/(\d+)$/);
    if (adminGalleryDeleteMatch && method === 'DELETE') return handleAdminDeleteGalleryPost(request, env, user, adminGalleryDeleteMatch[1]);

    if (path === '/api/vouchers/redeem' && method === 'POST') return handleRedeemVoucher(request, env, user);

    // PASANGAN + STREAK
    if (path === '/api/couple' && method === 'GET') return handleGetCouple(request, env, user);
    if (path === '/api/couple' && method === 'DELETE') return handleEndCouple(request, env, user);
    if (path === '/api/couple/create' && method === 'POST') return handleCreateCouple(request, env, user);
    if (path === '/api/couple/join' && method === 'POST') return handleJoinCouple(request, env, user);
    if (path === '/api/couple/checkin' && method === 'POST') return handleCoupleCheckin(request, env, user);
    if (path === '/api/couple/leaderboard' && method === 'GET') return handleCoupleLeaderboard(request, env, user);

    // RANDOM DICE: /api/couple/game* (pasangan) dan /api/dice* (global, room berkode)
    const diceRoute = path.match(/^\/api\/(couple\/game|dice)(?:\/(create|join|pick|sync|leave|chat|leaderboard))?$/);
    if (diceRoute) {
        const diceScope = diceRoute[1] === 'dice' ? 'global' : 'couple'; const diceAction = diceRoute[2] || '';
        if (!diceAction && method === 'GET') return handleDiceGet(request, env, user, diceScope);
        if (diceAction === 'leaderboard' && method === 'GET' && diceScope === 'global') return handleTrophyLeaderboard(request, env, user);
        if (method === 'POST' && diceAction === 'create') return handleDiceCreate(request, env, user, diceScope);
        if (method === 'POST' && diceAction === 'join') return handleDiceJoin(request, env, user, diceScope);
        if (method === 'POST' && diceAction === 'pick') return handleDicePick(request, env, user, diceScope);
        if (method === 'POST' && diceAction === 'sync') return handleDiceSync(request, env, user, diceScope);
        if (method === 'POST' && diceAction === 'leave') return handleDiceLeave(request, env, user, diceScope);
        if (method === 'POST' && diceAction === 'chat') return handleDiceChat(request, env, user, diceScope);
    }

    // MENGIKUTI / PENGIKUT
    const followMatch = path.match(/^\/api\/follow\/(\d+)$/);
    if (followMatch && (method === 'POST' || method === 'DELETE')) return handleFollowUser(request, env, user, followMatch[1], method === 'POST');
    const followListMatch = path.match(/^\/api\/user\/([a-zA-Z0-9_]+)\/(followers|following)$/);
    if (followListMatch && method === 'GET') return handleFollowList(request, env, user, followListMatch[1], followListMatch[2]);

    // TOP UP KOIN (TELEGRAM STARS)
    if (path === '/api/topup/packages' && method === 'GET') return handleGetTopupPackages(request, env, user);
    if (path === '/api/topup/stars' && method === 'POST') return handleCreateStarsInvoice(request, env, user);
    if (path === '/api/topup/stars/status' && method === 'GET') return handleStarsOrderStatus(request, env, user);

    // PENCARIAN USER
    if (path === '/api/users/search' && method === 'GET') return handleSearchUsers(request, env, user);

    // ROOM PARTY
    if (path === '/api/party/rooms' && method === 'GET') return handleListPartyRooms(request, env, user);
    if (path === '/api/party/create' && method === 'POST') return handleCreateParty(request, env, user);
    const partyJoinMatch = path.match(/^\/api\/party\/join\/([A-Z0-9]{4,10})$/i);
    if (partyJoinMatch && method === 'POST') return handleJoinParty(request, env, user, partyJoinMatch[1]);
    const partyStateMatch = path.match(/^\/api\/party\/([A-Z0-9]{4,10})\/state$/i);
    if (partyStateMatch && method === 'GET') return handleGetPartyState(request, env, user, partyStateMatch[1]);
    const partyControlMatch = path.match(/^\/api\/party\/([A-Z0-9]{4,10})\/control$/i);
    if (partyControlMatch && method === 'POST') return handlePartyControl(request, env, user, partyControlMatch[1]);
    const partyChatMatch = path.match(/^\/api\/party\/([A-Z0-9]{4,10})\/chat$/i);
    if (partyChatMatch && method === 'POST') return handlePartyChat(request, env, user, partyChatMatch[1]);
    const partyLeaveMatch = path.match(/^\/api\/party\/([A-Z0-9]{4,10})\/leave$/i);
    if (partyLeaveMatch && method === 'POST') return handleLeaveParty(request, env, user, partyLeaveMatch[1]);
    const partyEndMatch = path.match(/^\/api\/party\/([A-Z0-9]{4,10})$/i);
    if (partyEndMatch && method === 'DELETE') return handleEndParty(request, env, user, partyEndMatch[1]);

    // ADMIN: CONTENT / EPISODES
    if (path === '/api/admin/content' && method === 'GET') return handleAdminGetAllManualContent(request, env, user);
    if (path === '/api/admin/content' && method === 'POST') return handleAdminAddManualContent(request, env, user);
    const adminUpdateContentMatch = path.match(/^\/api\/admin\/content\/(\d+)$/);
    if (adminUpdateContentMatch && method === 'PUT') return handleAdminUpdateManualContent(request, env, user, adminUpdateContentMatch[1]);
    if (adminUpdateContentMatch && method === 'DELETE') return handleAdminDeleteManualContent(request, env, user, adminUpdateContentMatch[1]);
    const adminEpisodesListMatch = path.match(/^\/api\/admin\/series\/(\d+)\/episodes$/);
    if (adminEpisodesListMatch && method === 'GET') return handleAdminGetEpisodes(request, env, user, adminEpisodesListMatch[1]);
    if (adminEpisodesListMatch && method === 'POST') return handleAdminAddEpisode(request, env, user, adminEpisodesListMatch[1]);
    const adminEpisodeMatch = path.match(/^\/api\/admin\/episodes\/(\d+)$/);
    if (adminEpisodeMatch && method === 'PUT') return handleAdminUpdateEpisode(request, env, user, adminEpisodeMatch[1]);
    if (adminEpisodeMatch && method === 'DELETE') return handleAdminDeleteEpisode(request, env, user, adminEpisodeMatch[1]);

    // ADMIN: PLAYER ADS
    if (path === '/api/admin/player-ads' && method === 'GET') return handleAdminGetPlayerAds(request, env, user);
    if (path === '/api/admin/player-ads' && method === 'POST') return handleAdminAddPlayerAd(request, env, user);
    const adminPlayerAdMatch = path.match(/^\/api\/admin\/player-ads\/([a-zA-Z0-9]+)$/);
    if (adminPlayerAdMatch && method === 'PUT') return handleAdminUpdatePlayerAd(request, env, user, adminPlayerAdMatch[1]);
    if (adminPlayerAdMatch && method === 'DELETE') return handleAdminDeletePlayerAd(request, env, user, adminPlayerAdMatch[1]);

    // ADMIN: GIFTS
    if (path === '/api/admin/gifts' && method === 'GET') return handleAdminGetGifts(request, env, user);
    if (path === '/api/admin/gifts' && method === 'POST') return handleAdminAddGift(request, env, user);
    const adminGiftMatch = path.match(/^\/api\/admin\/gifts\/(\d+)$/);
    if (adminGiftMatch && method === 'PUT') return handleAdminUpdateGift(request, env, user, adminGiftMatch[1]);
    if (adminGiftMatch && method === 'DELETE') return handleAdminDeleteGift(request, env, user, adminGiftMatch[1]);

    // ADMIN: BORDERS / BUBBLES / LEVELS
    if (path === '/api/admin/avatar-borders' && method === 'GET') return handleAdminGetAvatarBorders(request, env, user);
    if (path === '/api/admin/avatar-borders' && method === 'POST') return handleAdminAddAvatarBorder(request, env, user);
    const adminBorderMatch = path.match(/^\/api\/admin\/avatar-borders\/(\d+)$/);
    if (adminBorderMatch && method === 'PUT') return handleAdminUpdateAvatarBorder(request, env, user, adminBorderMatch[1]);
    if (adminBorderMatch && method === 'DELETE') return handleAdminDeleteAvatarBorder(request, env, user, adminBorderMatch[1]);
    if (path === '/api/admin/bubbles' && method === 'GET') return handleAdminGetBubbles(request, env, user);
    if (path === '/api/admin/bubbles' && method === 'POST') return handleAdminAddBubble(request, env, user);
    const adminBubbleMatch = path.match(/^\/api\/admin\/bubbles\/(\d+)$/);
    if (adminBubbleMatch && method === 'PUT') return handleAdminUpdateBubble(request, env, user, adminBubbleMatch[1]);
    if (adminBubbleMatch && method === 'DELETE') return handleAdminDeleteBubble(request, env, user, adminBubbleMatch[1]);
    if (path === '/api/admin/levels' && method === 'GET') return handleAdminGetLevels(request, env, user);
    if (path === '/api/admin/levels' && method === 'POST') return handleAdminAddLevel(request, env, user);
    const adminLevelMatch = path.match(/^\/api\/admin\/levels\/(\d+)$/);
    if (adminLevelMatch && method === 'PUT') return handleAdminUpdateLevel(request, env, user, adminLevelMatch[1]);
    if (adminLevelMatch && method === 'DELETE') return handleAdminDeleteLevel(request, env, user, adminLevelMatch[1]);

    // ADMIN: USERS / NOTES / PROMOS / VOUCHERS
    if (path === '/api/admin/users' && method === 'GET') return handleAdminGetUsers(request, env, user);
    if (path === '/api/admin/notes' && method === 'PUT') return handleAdminSetNotes(request, env, user);
    if (path === '/api/admin/pending-count' && method === 'GET') return handleAdminPendingCount(request, env, user);
    if (path === '/api/admin/promos' && method === 'POST') return handleAdminAddPromo(request, env, user);
    const adminPromoDeleteMatch = path.match(/^\/api\/admin\/promos\/(\d+)$/);
    if (adminPromoDeleteMatch && method === 'DELETE') return handleAdminDeletePromo(request, env, user, adminPromoDeleteMatch[1]);
    if (path === '/api/admin/vouchers' && method === 'GET') return handleAdminGetVouchers(request, env, user);
    if (path === '/api/admin/vouchers' && method === 'POST') return handleAdminCreateVoucher(request, env, user);
    const adminVoucherDeleteMatch = path.match(/^\/api\/admin\/vouchers\/(\d+)$/);
    if (adminVoucherDeleteMatch && method === 'DELETE') return handleAdminDeleteVoucher(request, env, user, adminVoucherDeleteMatch[1]);

    // ADMIN: USER ACTIONS
    const adminVerifyMatch = path.match(/^\/api\/admin\/users\/(\d+)\/verify$/);
    if (adminVerifyMatch && method === 'PUT') return handleAdminVerifyUser(request, env, user, adminVerifyMatch[1]);
    const adminBlockIpMatch = path.match(/^\/api\/admin\/users\/(\d+)\/block-ip$/);
    if (adminBlockIpMatch && method === 'PUT') return handleAdminToggleBlockIp(request, env, user, adminBlockIpMatch[1]);
    if (path === '/api/admin/blocked-ips' && method === 'GET') return handleAdminGetBlockedIps(request, env, user);
    const adminDeleteUserMatch = path.match(/^\/api\/admin\/users\/(\d+)$/);
    if (adminDeleteUserMatch && method === 'DELETE') return handleAdminDeleteUser(request, env, user, adminDeleteUserMatch[1]);
    const adminVipMatch = path.match(/^\/api\/admin\/users\/(\d+)\/vip$/);
    if (adminVipMatch && method === 'PUT') return handleAdminSetVip(request, env, user, adminVipMatch[1]);
    const adminKoinMatch = path.match(/^\/api\/admin\/users\/(\d+)\/koin$/);
    if (adminKoinMatch && method === 'PUT') return handleAdminSetKoin(request, env, user, adminKoinMatch[1]);

    // HTML
    return new Response(HTML_PAGE, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            ...getSecurityHeaders('public, max-age=300, s-maxage=3600, stale-while-revalidate=86400')
        }
    });
}

export default {
    async fetch(request, env, ctx) {
        const response = await handleRequest(request, env, ctx);
        // pengaturan diubah lewat panel admin → buang cache pengaturan di isolate ini
        if (request.method !== 'GET' && request.url.indexOf('/api/admin') !== -1) invalidateSettingsCache();
        return response;
    }
};
