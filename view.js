// ============================================================
// FESSTALE MOVIE - VIEW (HTML FRONTEND) v29
// 100% Telegram Mini App Only
// ============================================================

export const HTML_PAGE = String.raw`<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="theme-color" content="#ffffff">
    <title>Fesstale Movie — Streaming Drakor Series Gratis Kualitas HD</title>
    <meta name="description" content="Fesstale Movie - Nonton Drakor series & episode gratis kualitas HD. Streaming cepat, update setiap hari.">
    <meta name="keywords" content="streaming drakor, nonton drakor gratis, fesstale movie, drakor sub indo">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://fesstale.pages.dev/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Fesstale Movie — Streaming Drakor Series Gratis">
    <meta property="og:description" content="Nonton Drakor series & episode gratis kualitas HD.">
    <meta property="og:image" content="">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <style>
        :root { --bg-primary:#f1f5f9;--bg-secondary:#fff;--bg-card:#fff;--bg-card-hover:#f8fafc;--border-color:#e2e8f0;--text-primary:#0f172a;--text-secondary:#475569;--text-muted:#94a3b8;--accent:#7c3aed;--accent-hover:#6d28d9;--accent-glow:rgba(124,58,237,0.3);--success:#059669;--danger:#dc2626;--glass-bg:rgba(255,255,255,0.85);--modal-backdrop-bg:rgba(15,23,42,0.5);--skeleton-a:#e2e8f0;--skeleton-b:#f1f5f9;--shadow-color:rgba(0,0,0,0.1); }
        [data-theme="dark"] { --bg-primary:#0a0e17;--bg-secondary:#111827;--bg-card:#1a2233;--bg-card-hover:#1f2a3f;--border-color:#2a3447;--text-primary:#f1f5f9;--text-secondary:#94a3b8;--text-muted:#64748b;--accent:#8b5cf6;--accent-hover:#7c3aed;--accent-glow:rgba(139,92,246,0.4);--success:#10b981;--danger:#ef4444;--glass-bg:rgba(17,24,39,0.85);--modal-backdrop-bg:rgba(0,0,0,0.75);--skeleton-a:#1a2233;--skeleton-b:#243044;--shadow-color:rgba(0,0,0,0.5); }
        *{ -webkit-tap-highlight-color:transparent;user-select:none; }
        html{ scroll-behavior:smooth; }
        body{ font-family:'Inter',sans-serif;background:var(--bg-primary);color:var(--text-primary);overscroll-behavior-y:none;-webkit-font-smoothing:antialiased;transition:background 0.3s,color 0.3s; }
        h1,h2,h3,h4,.font-display{ font-family:'Plus Jakarta Sans',sans-serif;letter-spacing:-0.02em; }
        ::-webkit-scrollbar{ width:6px;height:6px; }
        ::-webkit-scrollbar-track{ background:transparent; }
        ::-webkit-scrollbar-thumb{ background:var(--border-color);border-radius:3px; }
        .scrollbar-hide::-webkit-scrollbar{ display:none; }
        .scrollbar-hide{ -ms-overflow-style:none;scrollbar-width:none; }
        .glass{ background:var(--glass-bg);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--border-color); }
        .card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;transition:all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .card:hover{ background:var(--bg-card-hover);border-color:rgba(124,58,237,0.35); }
        @keyframes fadeInUp{ from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);} }
        @keyframes fadeIn{ from{opacity:0;}to{opacity:1;} }
        @keyframes scaleIn{ from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);} }
        @keyframes shimmer{ 0%{background-position:-1000px 0;}100%{background-position:1000px 0;} }
        @keyframes pulse-glow{ 0%,100%{box-shadow:0 0 0 0 var(--accent-glow);}50%{box-shadow:0 0 20px 4px var(--accent-glow);} }
        @keyframes shake{ 0%,100%{transform:translateX(0);}25%{transform:translateX(-6px);}75%{transform:translateX(6px);} }
        @keyframes pop{ 0%{transform:scale(0.5);opacity:0;}60%{transform:scale(1.15);}100%{transform:scale(1);opacity:1;} }
        @keyframes slideIn{ from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;} }
        .animate-fade-up{ animation:fadeInUp 0.4s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-fade-in{ animation:fadeIn 0.3s ease both; }
        .animate-scale-in{ animation:scaleIn 0.25s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-shake{ animation:shake 0.35s ease; }
        .animate-pop{ animation:pop 0.4s cubic-bezier(0.4,0,0.2,1) both; }
        .skeleton{ background:linear-gradient(90deg,var(--skeleton-a) 0%,var(--skeleton-b) 50%,var(--skeleton-a) 100%);background-size:1000px 100%;animation:shimmer 1.5s infinite linear;border-radius:8px; }
        .input-modern{ background:var(--bg-secondary);border:1.5px solid var(--border-color);border-radius:12px;padding:12px 16px;color:var(--text-primary);font-size:14px;transition:all 0.2s;width:100%; }
        .input-modern:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 4px var(--accent-glow); }
        .input-modern::placeholder{ color:var(--text-muted); }
        .btn-primary{ background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%);color:#fff;padding:12px 20px;border-radius:12px;font-weight:600;font-size:14px;border:none;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 12px rgba(139,92,246,0.3); }
        .btn-primary:hover{ transform:translateY(-1px);box-shadow:0 6px 20px rgba(139,92,246,0.45); }
        .btn-primary:disabled{ opacity:0.5;cursor:not-allowed;transform:none; }
        .btn-secondary{ background:var(--bg-card);color:var(--text-primary);border:1.5px solid var(--border-color);padding:10px 18px;border-radius:12px;font-weight:500;font-size:14px;cursor:pointer;transition:all 0.2s; }
        .btn-secondary:hover{ background:var(--bg-card-hover);border-color:var(--accent); }
        .modal-backdrop{ background:var(--modal-backdrop-bg);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px); }
        .line-clamp-2{ display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }
        .line-clamp-3{ display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden; }
        .badge{ display:inline-flex;align-items:center;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em; }
        .toast{ position:fixed;top:20px;left:50%;transform:translateX(-50%) translateY(-100px);background:var(--bg-card);border:1px solid var(--border-color);padding:12px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:0 10px 40px var(--shadow-color);display:flex;align-items:center;gap:10px;max-width:90vw; }
        .toast.show{ transform:translateX(-50%) translateY(0); }
        .toast.success{ border-color:var(--success); }
        .toast.error{ border-color:var(--danger); }
        .vip-badge{ background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;box-shadow:0 0 12px rgba(245,158,11,0.5); }
        img,video{ -webkit-user-drag:none;-webkit-touch-callout:none;user-select:none;pointer-events:auto; }
        .mlbb-avatar-wrap{ position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0; }
        .mlbb-avatar-inner{ position:relative;z-index:1;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;background-size:cover;background-position:center;box-shadow:inset 0 0 0 2px rgba(0,0,0,0.15); }
        .mlbb-avatar-inner img{ width:100%;height:100%;object-fit:cover;border-radius:50%;display:block; }
        .mlbb-avatar-border{ position:absolute;border-radius:50%;background-size:100% 100%;background-position:center;background-repeat:no-repeat;pointer-events:none;z-index:5; }
        .level-photo{ object-fit:contain;display:block;flex-shrink:0;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5)); }
        .movie-poster{ aspect-ratio:2/3;object-fit:cover;border-radius:12px;width:100%; }
        .movie-card{ transition:transform 0.25s cubic-bezier(0.4,0,0.2,1);position:relative;will-change:transform; }
        .movie-card:active{ transform:scale(0.97); }
        .poster-gradient{ position:absolute;bottom:0;left:0;right:0;height:55%;background:linear-gradient(to top,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.65) 45%,transparent 100%);pointer-events:none;z-index:2; }
        .type-badge-modern{ position:absolute;top:0;left:0;padding:3px 8px;border-radius:0 0 10px 0;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#fff;z-index:4;box-shadow:0 2px 8px rgba(0,0,0,0.35); }
        .card-corner-badge{ position:absolute;padding:3px 7px;border-radius:8px;font-size:9.5px;font-weight:700;background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:4;display:inline-flex;align-items:center;gap:3px;line-height:1;color:#fff;border:1px solid rgba(255,255,255,0.08); }
        .card-corner-badge i{ font-size:8px; }
        .corner-top-right{ top:6px;right:6px;color:#06b6d4; }
        .corner-bottom-left{ bottom:6px;left:6px;color:#fbbf24; }
        .corner-bottom-right{ bottom:6px;right:6px;color:#ede9fe;background:rgba(124,58,237,0.9);border-color:rgba(124,58,237,0.35); }
        .player-container{ position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000; }
        .player-shield{ position:absolute;inset:0;z-index:2;pointer-events:none; }
        .tab-btn{ padding:8px 16px;border-radius:8px;font-size:13px;font-weight:500;border:1.5px solid var(--border-color);background:var(--bg-secondary);color:var(--text-secondary);cursor:pointer;transition:all 0.2s; }
        .tab-btn.active{ background:var(--accent);color:#fff;border-color:var(--accent); }
        .reaction-btn{ display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 12px;border-radius:12px;border:1.5px solid var(--border-color);background:var(--bg-secondary);cursor:pointer;transition:all 0.2s;min-width:70px; }
        .reaction-btn.active{ border-color:var(--accent);background:rgba(124,58,237,0.15); }
        .reaction-emoji{ font-size:24px; }
        .reaction-label{ font-size:10px;color:var(--text-muted);font-weight:500; }
        .download-btn{ display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;font-weight:600;font-size:13px;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;cursor:pointer;transition:all 0.2s;text-decoration:none; }
        .watch-btn-main{ display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:10px;font-weight:700;font-size:14px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff;border:none;cursor:pointer;transition:all 0.2s;flex:1;box-shadow:0 6px 20px rgba(139,92,246,0.35); }
        .coin-display{ display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:10px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-weight:700;font-size:13px; }
        .level-bar{ height:6px;border-radius:3px;background:var(--bg-secondary);overflow:hidden; }
        .level-bar-fill{ height:100%;border-radius:3px;background:linear-gradient(90deg,#8b5cf6,#7c3aed);transition:width 0.5s ease; }
        .gift-card{ background:var(--bg-card);border:1.5px solid var(--border-color);border-radius:14px;padding:12px 8px;text-align:center;cursor:pointer;transition:all 0.2s;position:relative;overflow:hidden; }
        .gift-card:hover{ border-color:var(--accent);transform:translateY(-2px); }
        .gift-card.selected{ border-color:var(--accent);background:rgba(124,58,237,0.1);box-shadow:0 0 0 3px var(--accent-glow); }
        .gift-card-img{ width:64px;height:64px;object-fit:contain;display:block;margin:0 auto 6px;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.15)); }
        .gift-card-name{ font-size:11px;font-weight:700;color:var(--text-primary);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .gift-card-price{ display:inline-flex;align-items:center;gap:3px;font-size:10px;color:#d97706;font-weight:800;margin-top:4px;background:rgba(217,119,6,0.1);padding:2px 6px;border-radius:6px; }
        .gift-card-exp{ display:inline-flex;align-items:center;gap:3px;font-size:9px;color:#8b5cf6;font-weight:700;margin-top:2px;background:rgba(139,92,246,0.1);padding:2px 6px;border-radius:6px; }
        .gift-received-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:10px 8px;text-align:center;transition:all 0.2s; }
        .gift-received-card img{ width:52px;height:52px;object-fit:contain;display:block;margin:0 auto 4px;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.15)); }
        .gift-received-name{ font-size:10px;font-weight:600;color:var(--text-primary);line-height:1.2; }
        .gift-received-sender{ font-size:9px;color:var(--text-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
        .footer-link{ color:var(--text-secondary);text-decoration:none;transition:color 0.2s;font-size:13px; }
        .footer-link:hover{ color:var(--accent); }
        .note-banner{ background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(109,40,217,0.08));border:1px solid rgba(124,58,237,0.25);border-radius:12px;padding:12px 16px;display:flex;gap:10px;align-items:flex-start; }
        .reply-thread{ margin-left:44px;padding-left:12px;border-left:2px solid var(--border-color);margin-top:8px; }
        .pagination{ display:flex;gap:6px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:20px; }
        .page-btn{ min-width:36px;height:36px;padding:0 10px;border-radius:8px;border:1.5px solid var(--border-color);background:var(--bg-card);color:var(--text-secondary);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.2s;display:inline-flex;align-items:center;justify-content:center; }
        .page-btn:hover{ border-color:var(--accent);color:var(--accent); }
        .page-btn.active{ background:var(--accent);color:#fff;border-color:var(--accent); }
        .page-btn:disabled{ opacity:0.4;cursor:not-allowed; }
        .page-input{ width:60px;height:36px;text-align:center;border-radius:8px;border:1.5px solid var(--border-color);background:var(--bg-card);color:var(--text-primary);font-size:13px;font-weight:600; }
        .mission-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px; }
        .mission-icon{ width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
        .profile-header-cover{ height:140px;background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 50%,#a855f7 100%);border-radius:16px 16px 0 0;position:relative;background-size:cover;background-position:center; }
        .ad-slot{ position:relative;background:var(--bg-card);border:1px solid var(--border-color);border-radius:12px;padding:20px 12px 12px;text-align:center;margin-bottom:12px;overflow:hidden; }
        .ad-slot::before{ content:'Ad';position:absolute;top:6px;left:8px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:0.06em;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.15); }
        .ad-slot-label{ position:absolute;top:6px;right:8px;font-size:9px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em;font-weight:600; }
        .ad-grid{ display:grid;grid-template-columns:1fr;gap:12px; }
        .ad-grid.two-col{ grid-template-columns:1fr 1fr; }
        @media(max-width:640px){ .ad-grid.two-col{ grid-template-columns:1fr; } }
        .recent-watch-scroll{ display:flex;gap:10px;overflow-x:auto;padding-bottom:8px; }
        .recent-watch-card{ flex-shrink:0;width:120px;cursor:pointer; }
        .recent-watch-card img{ width:120px;height:180px;object-fit:cover;border-radius:10px; }
        .country-filter-scroll{ display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:16px; }
        .custom-tab-btn{ padding:8px 14px;border-radius:10px;font-size:12px;font-weight:600;border:1.5px solid var(--border-color);background:var(--bg-secondary);color:var(--text-secondary);cursor:pointer;transition:all 0.2s;white-space:nowrap;display:inline-flex;align-items:center;gap:6px; }
        .custom-tab-btn.active{ background:var(--accent);color:#fff;border-color:var(--accent); }
        .promo-banner-overlay{ position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.75);display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.25s ease both; }
        .promo-banner-box{ max-width:400px;width:100%;border-radius:16px;overflow:hidden;position:relative;animation:scaleIn 0.3s ease both; }
        .promo-banner-box img{ width:100%;display:block; }
        .promo-banner-close{ position:absolute;top:8px;right:8px;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.7);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;z-index:10; }
        .download-step-overlay{ position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;padding:16px; }
        .download-step-box{ max-width:420px;width:100%;background:var(--bg-card);border:1px solid var(--border-color);border-radius:20px;padding:22px;text-align:center;max-height:90vh;overflow-y:auto; }
        .challenge-grid{ display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:16px 0; }
        .challenge-btn{ padding:14px 10px;border-radius:12px;font-weight:700;font-size:13px;border:none;cursor:pointer;transition:all 0.15s;color:#fff;box-shadow:0 3px 8px rgba(0,0,0,0.25);user-select:none; }
        .challenge-btn:active{ transform:scale(0.94); }
        .challenge-btn.wrong{ animation:shake 0.35s ease;background:#ef4444 !important; }
        .challenge-btn.correct{ background:#10b981 !important;animation:pop 0.4s ease; }
        .challenge-btn:disabled{ opacity:0.7;cursor:not-allowed; }
        .leaderboard-item{ display:flex;align-items:center;gap:12px;padding:12px;border-radius:14px;background:var(--bg-secondary);border:1px solid var(--border-color);margin-bottom:8px;cursor:pointer;transition:all 0.2s; }
        .leaderboard-item:hover{ border-color:var(--accent);transform:translateY(-1px); }
        .leaderboard-rank{ width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0; }
        .leaderboard-rank.gold{ background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;box-shadow:0 4px 12px rgba(251,191,36,0.4); }
        .leaderboard-rank.silver{ background:linear-gradient(135deg,#cbd5e1,#94a3b8);color:#0f172a; }
        .leaderboard-rank.bronze{ background:linear-gradient(135deg,#d97706,#b45309);color:#fff; }
        .leaderboard-rank.normal{ background:var(--bg-card);color:var(--text-secondary);border:1px solid var(--border-color); }
        .leaderboard-my-rank{ background:linear-gradient(135deg,rgba(124,58,237,0.15),rgba(109,40,217,0.10));border:2px solid var(--accent);border-radius:14px;padding:12px;margin-bottom:16px;position:relative;overflow:hidden; }
        .bottom-nav-app{ position:fixed;bottom:0;left:0;right:0;z-index:40;background:var(--glass-bg);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);border-top:1px solid var(--border-color);box-shadow:0 -8px 32px rgba(0,0,0,0.08);padding-bottom:max(env(safe-area-inset-bottom),8px); }
        .bottom-nav-inner{ max-width:640px;margin:0 auto;display:flex;justify-content:space-around;align-items:center;padding:6px 8px 2px; }
        .nav-btn{ display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 12px;min-width:60px;background:transparent;border:none;cursor:pointer;color:var(--text-muted);transition:all 0.2s;border-radius:12px;position:relative; }
        .nav-btn.active{ color:var(--accent); }
        .nav-btn.active::before{ content:'';position:absolute;top:-2px;left:50%;transform:translateX(-50%);width:24px;height:3px;border-radius:3px;background:var(--accent);box-shadow:0 0 12px var(--accent-glow); }
        .nav-btn i{ font-size:18px;transition:transform 0.2s; }
        .nav-btn.active i{ transform:scale(1.1); }
        .nav-btn span{ font-size:10px;font-weight:600; }
        .nav-btn .nav-badge{ position:absolute;top:2px;right:8px;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(239,68,68,0.5);line-height:1; }
        .floating-leaderboard-btn{ position:fixed;bottom:90px;right:16px;z-index:45;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 8px 24px rgba(245,158,11,0.4);transition:transform 0.2s; }
        .bubble-default{ position:relative;background:var(--bg-secondary);border:1.5px solid var(--border-color);border-radius:14px 14px 14px 4px;padding:10px 14px;margin-top:6px;color:var(--text-primary);display:inline-block;max-width:100%;word-break:break-word; }
        .bubble-custom{ position:relative;margin-top:6px;display:inline-block;max-width:100%;word-break:break-word; }
        .bubble-default p,.bubble-custom p{ margin:0; }
        .daily-limit-badge{ display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600; }
        .daily-limit-badge.safe{ background:rgba(16,185,129,0.15);color:#059669; }
        .daily-limit-badge.warning{ background:rgba(251,191,36,0.15);color:#d97706; }
        .daily-limit-badge.danger{ background:rgba(239,68,68,0.15);color:#dc2626; }
        .admin-notif-badge{ position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;border-radius:9px;background:#ef4444;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 5px;box-shadow:0 0 0 2px var(--bg-card);animation:pulse-glow 2s infinite; }
        .premium-banner{ background:linear-gradient(90deg,#fff5f5,#ffe5e5);border:1px solid #ffcccc;border-radius:16px;display:flex;align-items:center;padding:12px;cursor:pointer;margin-bottom:16px;position:relative;overflow:hidden; }
        [data-theme="dark"] .premium-banner{ background:linear-gradient(90deg,rgba(239,68,68,0.15),rgba(220,38,38,0.1));border-color:rgba(239,68,68,0.3); }
        .premium-banner-icon{ width:50px;height:50px;background:#ffcccc;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;z-index:1; }
        [data-theme="dark"] .premium-banner-icon{ background:rgba(239,68,68,0.25); }
        .premium-banner-text{ flex:1;z-index:1; }
        .premium-banner-title{ font-weight:800;color:#b91c1c;font-size:15px;margin-bottom:2px; }
        [data-theme="dark"] .premium-banner-title{ color:#fca5a5; }
        .premium-banner-desc{ font-size:11px;color:#7f1d1d;margin-bottom:4px; }
        [data-theme="dark"] .premium-banner-desc{ color:#fca5a5; }
        .premium-banner-badge{ display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:10px;background:#fecaca;color:#b91c1c;font-size:9px;font-weight:700; }
        .premium-banner-btn{ background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;padding:8px 14px;border-radius:20px;font-weight:700;font-size:12px;border:none;cursor:pointer;z-index:1;box-shadow:0 4px 10px rgba(239,68,68,0.3); }
        .masonry{ column-count:2;column-gap:8px; }
        @media(min-width:768px){ .masonry{ column-count:3; } }
        @media(min-width:1024px){ .masonry{ column-count:4; } }
        .masonry-item{ break-inside:avoid;margin-bottom:8px;border-radius:12px;overflow:hidden;position:relative;background:var(--bg-card);border:1px solid var(--border-color); }
        .masonry-item img{ width:100%;display:block; }
        .masonry-info{ padding:8px;display:flex;align-items:center;gap:6px; }
        .voucher-input-single{ width:100%;height:58px;text-align:center;font-size:22px;font-weight:800;letter-spacing:10px;border-radius:14px;border:2px solid var(--border-color);background:var(--bg-secondary);color:var(--text-primary);font-family:'Courier New',monospace;padding-left:10px; }
        .voucher-input-single:focus{ outline:none;border-color:var(--accent);box-shadow:0 0 0 4px var(--accent-glow); }
        .footer-stats{ display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px; }
        @media(max-width:640px){ .footer-stats{ grid-template-columns:1fr 1fr; } }
        .footer-stat-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:14px;padding:16px;text-align:center; }
        .footer-stat-value{ font-size:28px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;line-height:1; }
        .footer-stat-label{ font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:6px; }
        .gallery-locked-wrap{ position:relative;overflow:hidden; }
        .gallery-locked-wrap img.locked-img{ filter:blur(26px) brightness(0.55) saturate(0.7);transform:scale(1.08); }
        .gallery-lock-overlay{ position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.65) 100%);pointer-events:none; }
        .gallery-lock-icon{ width:56px;height:56px;border-radius:50%;background:rgba(251,191,36,0.95);color:#0f172a;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 24px rgba(251,191,36,0.6);margin-bottom:10px; }
        .gallery-lock-price{ padding:8px 18px;border-radius:20px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-weight:800;font-size:15px;box-shadow:0 6px 20px rgba(251,191,36,0.45); }
        .gallery-lock-label{ margin-top:6px;color:#fff;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;opacity:0.9; }
        .gallery-watermark{ position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0.15; }
        .gallery-watermark-text{ color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:6px;transform:rotate(-30deg);text-shadow:0 4px 20px rgba(0,0,0,0.8); }
        .gallery-price-tag{ position:absolute;top:8px;right:8px;padding:4px 10px;border-radius:8px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:11px;font-weight:800;z-index:4;display:inline-flex;align-items:center;gap:4px;box-shadow:0 4px 12px rgba(0,0,0,0.35); }
        .thumb-watermark{ position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-30deg);color:rgba(255,255,255,0.14);font-size:14px;font-weight:900;letter-spacing:3px;text-transform:uppercase;pointer-events:none;z-index:3;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,0.35); }
        .thumb-watermark-sm{ font-size:10px;letter-spacing:1.5px; }
        .gallery-watermark-subtle{ position:absolute;bottom:6px;right:8px;z-index:2;pointer-events:none;opacity:0.55; }
        .gallery-watermark-subtle-text{ color:#fff;font-size:9px;font-weight:900;letter-spacing:1.5px;text-shadow:0 1px 3px rgba(0,0,0,0.95);text-transform:uppercase; }
        .comment-counter{ font-size:10px;color:var(--text-muted);font-variant-numeric:tabular-nums; }
        .comment-counter.near-limit{ color:#d97706; }
        .comment-counter.at-limit{ color:#dc2626; }
        .lb-tab{ padding:8px 12px;border-radius:10px;font-size:12px;font-weight:600;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-secondary);cursor:pointer;transition:all 0.2s;white-space:nowrap; }
        .lb-tab.active{ background:rgba(124,58,237,0.15);border-color:var(--accent);color:var(--accent); }
        .podium-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;padding:16px;text-align:center;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;transition:all 0.3s; }
        .podium-card.rank-1{ height:160px;border-color:rgba(251,191,36,0.4);box-shadow:0 8px 24px rgba(251,191,36,0.15); }
        .podium-card.rank-2{ height:140px; }
        .podium-card.rank-3{ height:120px; }
        .podium-crown{ position:absolute;top:-12px;font-size:24px;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.5)); }
        .podium-name{ font-weight:700;font-size:13px;color:var(--text-primary);line-height:1.2; }
        .podium-xp{ font-weight:800;font-size:14px;color:var(--accent);margin-top:2px; }
        .podium-level{ font-size:9px;background:var(--bg-secondary);padding:2px 6px;border-radius:6px;margin-top:4px;color:var(--text-muted); }
        .episode-card{ background:var(--bg-card);border:1.5px solid var(--border-color);border-radius:12px;overflow:hidden;cursor:pointer;transition:all 0.2s;position:relative; }
        .episode-card:hover{ border-color:var(--accent);transform:translateY(-2px);box-shadow:0 6px 20px rgba(124,58,237,0.15); }
        .episode-card.active{ border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow); }
        .episode-thumb{ width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:var(--bg-secondary); }
        .episode-info{ padding:8px 10px; }
        .episode-number-badge{ position:absolute;top:6px;left:6px;padding:3px 8px;border-radius:8px;background:rgba(0,0,0,0.75);color:#fff;font-size:10px;font-weight:800;backdrop-filter:blur(6px); }
        .episode-duration-badge{ position:absolute;bottom:6px;right:6px;padding:3px 8px;border-radius:8px;background:rgba(0,0,0,0.75);color:#fff;font-size:10px;font-weight:700; }
        .episode-vip-badge{ position:absolute;top:6px;right:6px;padding:3px 8px;border-radius:8px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:9px;font-weight:800; }
        .episode-coin-badge{ position:absolute;top:6px;right:6px;padding:3px 8px;border-radius:8px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;font-size:9px;font-weight:800; }
        .admin-series-row{ display:flex;align-items:center;gap:10px;padding:10px;border-radius:12px;background:var(--bg-card);border:1px solid var(--border-color);margin-bottom:8px;cursor:pointer;transition:all 0.2s; }
        .admin-series-row:hover{ border-color:var(--accent); }
        .admin-series-id-badge{ display:inline-block;padding:2px 6px;border-radius:6px;background:rgba(124,58,237,0.15);color:var(--accent);font-size:10px;font-weight:700;font-family:monospace; }
        .rec-drakor-item{ flex-shrink:0;width:110px;cursor:pointer;transition:transform 0.2s; }
        .rec-drakor-item:hover{ transform:scale(1.03); }
        .rec-drakor-item img{ width:110px;height:165px;object-fit:cover;border-radius:10px;display:block; }
        .rec-drakor-scroll{ display:flex;gap:10px;overflow-x:auto;padding-bottom:6px; }
        .episode-pager{ display:flex;gap:6px;overflow-x:auto;padding:6px 0; }
        .episode-pager-btn{ flex-shrink:0;min-width:44px;height:44px;border-radius:10px;background:var(--bg-card);border:1.5px solid var(--border-color);color:var(--text-primary);font-weight:700;font-size:13px;cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:center; }
        .episode-pager-btn.active{ background:var(--accent);color:#fff;border-color:var(--accent);box-shadow:0 4px 12px var(--accent-glow); }
        .carousel-wrap{ position:relative;width:100%;height:200px;border-radius:16px;overflow:hidden;background:var(--bg-card);margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,0.15); }
        @media(min-width:640px){ .carousel-wrap{ height:280px; } }
        @media(min-width:1024px){ .carousel-wrap{ height:340px; } }
        .carousel-track{ display:flex;height:100%;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1); }
        .carousel-slide{ flex-shrink:0;width:100%;height:100%;position:relative;cursor:pointer;overflow:hidden; }
        .carousel-slide img{ width:100%;height:100%;object-fit:cover;display:block; }
        .carousel-slide-overlay{ position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.55) 40%,rgba(0,0,0,0.15) 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:20px;z-index:2; }
        .carousel-slide-title{ color:#fff;font-weight:800;font-size:18px;line-height:1.2;text-shadow:0 2px 8px rgba(0,0,0,0.6);font-family:'Plus Jakarta Sans',sans-serif; }
        @media(min-width:640px){ .carousel-slide-title{ font-size:24px; } }
        .carousel-slide-desc{ color:rgba(255,255,255,0.85);font-size:11px;margin-top:4px;max-width:75%;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical; }
        .carousel-slide-meta{ display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap; }
        .carousel-slide-badge{ background:rgba(255,255,255,0.15);backdrop-filter:blur(6px);color:#fff;padding:3px 9px;border-radius:8px;font-size:10px;font-weight:700;display:inline-flex;align-items:center;gap:4px;border:1px solid rgba(255,255,255,0.15); }
        .carousel-slide-badge.ep{ background:rgba(124,58,237,0.9);border-color:rgba(124,58,237,0.5); }
        .carousel-slide-watch{ display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff;padding:8px 16px;border-radius:10px;font-size:12px;font-weight:700;margin-top:10px;box-shadow:0 4px 12px rgba(139,92,246,0.45);border:none;cursor:pointer; }
        .carousel-dots{ position:absolute;bottom:10px;right:12px;display:flex;gap:6px;z-index:5; }
        .carousel-dot{ width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.4);border:none;cursor:pointer;transition:all 0.2s;padding:0; }
        .carousel-dot.active{ background:#fff;width:22px;border-radius:4px; }
        .carousel-arrow{ position:absolute;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.5);color:#fff;border:1px solid rgba(255,255,255,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:5;opacity:0;transition:opacity 0.2s; }
        .carousel-wrap:hover .carousel-arrow{ opacity:1; }
        .carousel-arrow.prev{ left:10px; }
        .carousel-arrow.next{ right:10px; }
        .comment-media-preview{ position:relative;display:inline-block;margin-top:6px;border-radius:10px;overflow:hidden;border:1px solid var(--border-color);max-width:260px; }
        .comment-media-preview img{ max-width:100%;max-height:260px;display:block;cursor:zoom-in; }
        .comment-media-remove{ position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;background:rgba(0,0,0,0.7);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px; }
        .comment-media-btn{ display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:8px;background:var(--bg-secondary);border:1px solid var(--border-color);color:var(--text-secondary);font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s; }
        .comment-media-btn:hover{ border-color:var(--accent);color:var(--accent); }
        .gallery-comment-section{ margin-top:24px; }
        .player-tabs-wrap{ display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center;padding:4px 0; }
        .player-tabs-wrap .tab-btn{ padding:6px 12px;font-size:11px; }
        .player-wrapper-el{ position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000; }
        .player-wrapper-el iframe,.player-wrapper-el video{ position:absolute;top:0;left:0;width:100%;height:100%;border:none;object-fit:contain;background:#000; }
        .player-wrapper-el:fullscreen,.player-wrapper-el:-webkit-full-screen{ border-radius:0 !important;padding-bottom:0 !important;width:100vw;height:100vh;background:#000; }
        #playerSection:fullscreen{ background:#000;display:flex;align-items:center;justify-content:center;padding:0; }
        #playerSection:fullscreen .player-wrapper-el{ width:100vw;height:100vh;padding-bottom:0;border-radius:0; }
        .force-fullscreen{ position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:99999 !important;background:#000 !important;border-radius:0 !important;padding-bottom:0 !important; }
        .force-fullscreen iframe,.force-fullscreen video{ width:100vw !important;height:100vh !important;border-radius:0 !important; }
        .resume-badge{ position:absolute;top:8px;right:8px;z-index:15;padding:4px 10px;border-radius:8px;background:rgba(16,185,129,0.95);color:#fff;font-size:10px;font-weight:700;display:inline-flex;align-items:center;gap:4px;animation:fadeIn 0.3s ease; }
        .quality-badge{ padding:2px 6px;border-radius:4px;font-size:9px;font-weight:700;background:var(--accent);color:#fff;display:inline-block;line-height:1;margin-left:4px; }
        .referral-container{ background:linear-gradient(135deg,#7c3aed,#5b21b6);border-radius:20px;padding:24px;color:#fff;position:relative;overflow:hidden;margin-bottom:24px; }
        .referral-bg-icon{ position:absolute;right:-20px;top:-20px;font-size:120px;color:rgba(255,255,255,0.1);transform:rotate(15deg); }
        .referral-code-box{ background:rgba(255,255,255,0.95);border-radius:12px;padding:16px;display:flex;justify-content:space-between;align-items:center;margin-top:16px;border:2px dashed rgba(255,255,255,0.6); }
        .referral-code-text{ font-family:monospace;font-size:24px;font-weight:800;color:#5b21b6;letter-spacing:4px; }
        .referral-link-box{ background:rgba(0,0,0,0.25);border-radius:10px;padding:12px 16px;font-size:12px;color:rgba(255,255,255,0.85);display:flex;align-items:center;gap:8px;margin-top:12px; }
        .referral-stats-grid{ display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px; }
        .referral-stat-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;padding:20px 10px;text-align:center; }
        .referral-stat-icon{ width:40px;height:40px;border-radius:50%;background:rgba(124,58,237,0.12);color:#7c3aed;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:20px; }
        .referral-stat-value{ font-size:24px;font-weight:800;color:var(--text-primary);line-height:1; }
        .referral-stat-label{ font-size:10px;color:var(--text-muted);margin-top:4px;font-weight:600; }
        .referral-step-list{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;padding:20px; }
        .referral-step{ display:flex;align-items:center;gap:12px;position:relative;padding-bottom:24px; }
        .referral-step:last-child{ padding-bottom:0; }
        .referral-step-line{ position:absolute;left:16px;top:32px;bottom:0;width:2px;border-left:2px dashed var(--border-color); }
        .referral-step:last-child .referral-step-line{ display:none; }
        .referral-step-num{ width:34px;height:34px;border-radius:50%;background:#7c3aed;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;z-index:1;flex-shrink:0; }
        .referral-step-content{ flex:1;display:flex;justify-content:space-between;align-items:center;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:10px;padding:12px; }
        .referral-step-text{ font-size:12px;font-weight:600;color:var(--text-primary); }
        .referral-step-reward{ font-size:11px;font-weight:800;color:#7c3aed;background:rgba(124,58,237,0.1);padding:4px 8px;border-radius:6px; }
        .tg-gate{ position:fixed;inset:0;z-index:100000;background:linear-gradient(135deg,#0a0e17 0%,#1a2233 100%);display:flex;align-items:center;justify-content:center;padding:24px; }
        .tg-gate-box{ max-width:400px;width:100%;text-align:center; }
        .tg-gate-icon{ width:96px;height:96px;margin:0 auto 24px;border-radius:28px;background:linear-gradient(135deg,#229ED9,#1b7aad);display:flex;align-items:center;justify-content:center;box-shadow:0 20px 60px rgba(34,158,217,0.5);animation:pulse-glow 2s infinite; }
        .tg-gate-icon i{ font-size:48px;color:#fff; }
        .tg-gate-title{ font-size:22px;font-weight:800;color:#fff;margin-bottom:12px;font-family:'Plus Jakarta Sans',sans-serif; }
        .tg-gate-desc{ font-size:14px;color:#94a3b8;line-height:1.6;margin-bottom:24px; }
        .tg-gate-btn{ display:inline-flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#229ED9,#1b7aad);color:#fff;padding:14px 28px;border-radius:14px;font-weight:700;font-size:15px;text-decoration:none;border:none;cursor:pointer;box-shadow:0 8px 24px rgba(34,158,217,0.4);transition:transform 0.2s; }
        .tg-gate-btn:active{ transform:scale(0.97); }
        .tg-gate-hint{ margin-top:20px;font-size:11px;color:#475569; }
        .story-carousel{ position:relative;width:100%;background:#000;border-radius:16px;overflow:hidden; }
        .story-carousel-track{ display:flex;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1); }
        .story-carousel-slide{ flex-shrink:0;width:100%;position:relative; }
        .story-carousel-slide img{ width:100%;display:block;max-height:70vh;object-fit:contain;background:#000;cursor:zoom-in; }
        .story-carousel-dots{ position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:5; }
        .story-carousel-dot{ width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.5);border:none;cursor:pointer;padding:0;transition:all 0.2s; }
        .story-carousel-dot.active{ background:#fff;width:22px;border-radius:4px; }
        .story-carousel-counter{ position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.65);color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:700;z-index:5;backdrop-filter:blur(4px); }
        .story-carousel-arrow{ position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;border-radius:50%;background:rgba(0,0,0,0.55);color:#fff;border:1px solid rgba(255,255,255,0.2);cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:5;opacity:0;transition:opacity 0.2s;backdrop-filter:blur(4px); }
        .story-carousel:hover .story-carousel-arrow{ opacity:1; }
        @media(max-width:640px){ .story-carousel-arrow{ opacity:1;width:32px;height:32px; } }
        .story-carousel-arrow.prev{ left:10px; }
        .story-carousel-arrow.next{ right:10px; }
        .story-multi-badge{ position:absolute;top:8px;left:8px;background:rgba(0,0,0,0.75);color:#fff;padding:4px 9px;border-radius:10px;font-size:10px;font-weight:800;z-index:4;display:inline-flex;align-items:center;gap:4px;backdrop-filter:blur(4px);letter-spacing:0.02em; }
        .verified-badge-tw{ display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-left:4px;flex-shrink:0;vertical-align:middle;position:relative;line-height:1; }
        .verified-badge-tw svg{ width:100%;height:100%;display:block;filter:drop-shadow(0 1px 2px rgba(29,155,240,0.35)); }
        .verified-badge-tw.lg{ width:22px;height:22px; }
        .verified-badge-tw.sm{ width:14px;height:14px; }
        .profile-section-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;overflow:hidden;margin-bottom:16px; }
        .profile-section-title{ padding:14px 16px 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);display:flex;align-items:center;gap:6px; }
        .profile-menu-row{ display:flex;align-items:center;gap:12px;padding:14px 16px;border-top:1px solid var(--border-color);cursor:pointer;transition:background 0.15s; }
        .profile-menu-row:hover{ background:var(--bg-card-hover); }
        .profile-menu-row:first-of-type{ border-top:none; }
        .profile-menu-icon{ width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .party-room-card{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:14px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all 0.2s; }
        .party-room-card:hover{ border-color:var(--accent);transform:translateY(-1px);box-shadow:0 6px 16px rgba(124,58,237,0.12); }
        .party-code-badge{ display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:8px;background:rgba(124,58,237,0.15);color:var(--accent);font-size:11px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:2px; }
        .party-member-chip{ display:flex;flex-direction:column;align-items:center;gap:4px;width:56px;flex-shrink:0; }
        .party-chat-scroll{ max-height:380px;overflow-y:auto;padding:12px; }
        .party-chat-scroll::-webkit-scrollbar{ width:4px; }
        .party-control-btn{ display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;border:1.5px solid var(--border-color);background:var(--bg-secondary);color:var(--text-primary); }
        .party-control-btn:hover{ border-color:var(--accent); }
        .party-control-btn.primary{ background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff;border-color:transparent; }
        .party-control-btn.danger{ background:rgba(239,68,68,0.15);color:#dc2626;border-color:rgba(239,68,68,0.3); }
        .party-private-badge{ display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:6px;background:rgba(251,191,36,0.15);color:#d97706;font-size:9px;font-weight:700; }
        .party-public-badge{ display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:6px;background:rgba(16,185,129,0.15);color:#059669;font-size:9px;font-weight:700; }
        .party-series-option{ padding:10px;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-secondary);cursor:pointer;margin-bottom:6px;transition:all 0.15s;display:flex;align-items:center;gap:8px; }
        .party-series-option:hover,.party-series-option.selected{ border-color:var(--accent);background:rgba(124,58,237,0.08); }
        .transfer-amount-preset{ padding:8px 14px;border-radius:10px;border:1.5px solid var(--border-color);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s; }
        .transfer-amount-preset.active{ background:var(--accent);color:#fff;border-color:var(--accent); }
        .story-badge-pulse{ animation:pulse-glow 1.5s infinite; }
        .party-host-badge{ display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:6px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:9px;font-weight:800; }
        .level-photo-lg{ width:48px !important;height:48px !important;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }
    </style>
</head>
<body oncontextmenu="return false;">

<div id="telegramGate" class="tg-gate hidden">
    <div class="tg-gate-box">
        <div class="tg-gate-icon"><i class="fa-brands fa-telegram"></i></div>
        <h1 class="tg-gate-title">Buka di Telegram Mini App</h1>
        <p class="tg-gate-desc">Fesstale Movie hanya bisa diakses melalui Telegram Bot. Akun kamu akan otomatis dibuat dari data Telegram.</p>
        <a id="tgGateOpenLink" href="#" class="tg-gate-btn"><i class="fa-brands fa-telegram"></i><span>Buka di Telegram</span></a>
        <p class="tg-gate-hint">Link eksternal tidak diizinkan. Buka bot Telegram untuk mengakses aplikasi.</p>
    </div>
</div>

<div id="toast" class="toast"><i id="toastIcon" class="fa-solid fa-info-circle"></i><span id="toastMsg">Pesan</span></div>

<header id="mainHeader" class="glass sticky top-0 z-40 px-4 py-3">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2.5 cursor-pointer" onclick="navigate('home')">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);"><i class="fa-solid fa-film text-white text-sm"></i></div>
            <h1 class="text-lg font-bold font-display" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Fesstale</h1>
        </div>
        <div class="flex items-center gap-2">
            <div id="coinDisplay" class="coin-display hidden"><i class="fa-solid fa-coins"></i><span id="coinAmount">0</span></div>
            <button onclick="toggleSearch()" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-magnifying-glass text-sm"></i></button>
            <button onclick="handleAuthButton()" id="authBtn" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-user text-sm"></i></button>
            <button onclick="toggleTheme()" id="themeBtn" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-sun text-sm" id="themeIcon"></i></button>
        </div>
    </div>
    <div id="customTabsContainer" class="max-w-6xl mx-auto mt-2 hidden"></div>
    <div id="headerAdSlot" class="max-w-6xl mx-auto mt-2 hidden"></div>
</header>

<div id="searchBar" class="hidden px-4 py-3 animate-fade-in" style="background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
    <div class="max-w-2xl mx-auto relative">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm" style="color: var(--text-muted);"></i>
        <input type="text" id="searchInput" placeholder="Cari drakor series..." class="input-modern" style="padding-left: 44px;">
        <button onclick="toggleSearch()" class="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center" style="color: var(--text-muted);"><i class="fa-solid fa-xmark text-sm"></i></button>
    </div>
</div>

<main id="app" class="px-4 py-4 max-w-6xl mx-auto pb-28"></main>

<button onclick="openLeaderboardModal()" class="floating-leaderboard-btn" title="Leaderboard"><i class="fa-solid fa-trophy"></i></button>

<footer id="siteFooter" class="px-4 py-8 mt-8" style="background: var(--bg-secondary); border-top: 1px solid var(--border-color);">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div class="col-span-2 md:col-span-1">
                <div class="flex items-center gap-2.5 mb-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);"><i class="fa-solid fa-film text-white text-sm"></i></div>
                    <h3 class="text-lg font-bold font-display" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Fesstale</h3>
                </div>
                <p class="text-xs leading-relaxed" style="color: var(--text-muted);">Platform streaming drakor series & episode dengan kualitas terbaik.</p>
            </div>
            <div>
                <h4 class="font-bold text-sm mb-3" style="color: var(--text-primary);">Jelajahi</h4>
                <ul class="space-y-2">
                    <li><a onclick="navigate('home')" class="footer-link cursor-pointer"><i class="fa-solid fa-house mr-2 text-[10px]"></i>Beranda</a></li>
                    <li><a onclick="navigate('genre')" class="footer-link cursor-pointer"><i class="fa-solid fa-tags mr-2 text-[10px]"></i>Genre</a></li>
                    <li><a onclick="navigate('party')" class="footer-link cursor-pointer"><i class="fa-solid fa-users-rectangle mr-2 text-[10px]"></i>Room Party</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-sm mb-3" style="color: var(--text-primary);">Akun</h4>
                <ul class="space-y-2">
                    <li><a onclick="handleAuthButton()" class="footer-link cursor-pointer"><i class="fa-solid fa-user mr-2 text-[10px]"></i>Profil</a></li>
                    <li><a onclick="openShopModal()" class="footer-link cursor-pointer"><i class="fa-solid fa-store mr-2 text-[10px]"></i>Toko</a></li>
                    <li><a onclick="openVipModal()" class="footer-link cursor-pointer"><i class="fa-solid fa-crown mr-2 text-[10px]"></i>VIP</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-sm mb-3" style="color: var(--text-primary);">Bantuan</h4>
                <ul class="space-y-2">
                    <li><a onclick="showAbout()" class="footer-link cursor-pointer"><i class="fa-solid fa-circle-info mr-2 text-[10px]"></i>Tentang</a></li>
                    <li><a onclick="showDMCA()" class="footer-link cursor-pointer"><i class="fa-solid fa-scale-balanced mr-2 text-[10px]"></i>DMCA</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-stats" id="footerStats">
            <div class="footer-stat-card"><p class="footer-stat-value" id="statVideos" style="color: var(--accent);">-</p><p class="footer-stat-label">Series Tersedia</p></div>
            <div class="footer-stat-card"><p class="footer-stat-value" id="statEpisodes" style="color: #8b5cf6;">-</p><p class="footer-stat-label">Total Episode</p></div>
            <div class="footer-stat-card"><p class="footer-stat-value" id="statGallery" style="color: #06b6d4;">-</p><p class="footer-stat-label">Foto Story</p></div>
        </div>
        <div id="dmcaBox" class="mb-6 p-4 rounded-xl text-xs leading-relaxed" style="background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-secondary);">
            <h4 class="font-bold mb-2 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-scale-balanced" style="color: var(--accent);"></i> DMCA / Legal Disclaimer</h4>
            <p>Fesstale does not host any media files. All content is provided by non-affiliated third parties and displayed via publicly available embeds.</p>
        </div>
        <div class="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3" style="border-top: 1px solid var(--border-color);">
            <p class="text-xs" style="color: var(--text-muted);">© 2025 Fesstale Movie. All rights reserved.</p>
            <div class="flex items-center gap-3"><a class="footer-link"><i class="fa-brands fa-telegram text-base"></i></a><a class="footer-link"><i class="fa-brands fa-whatsapp text-base"></i></a><a class="footer-link"><i class="fa-brands fa-instagram text-base"></i></a><a class="footer-link"><i class="fa-brands fa-github text-base"></i></a></div>
        </div>
    </div>
</footer>

<nav class="bottom-nav-app">
    <div class="bottom-nav-inner">
        <button onclick="navigate('home')" data-nav="home" class="nav-btn active"><i class="fa-solid fa-house"></i><span>Home</span></button>
        <button onclick="navigate('genre')" data-nav="genre" class="nav-btn"><i class="fa-solid fa-tags"></i><span>Genre</span></button>
        <button onclick="navigate('gallery')" data-nav="gallery" class="nav-btn" style="position:relative;"><i class="fa-solid fa-circle-play"></i><span>Story</span><span id="storyNavBadge" class="nav-badge hidden"></span></button>
        <button onclick="navigate('party')" data-nav="party" class="nav-btn"><i class="fa-solid fa-users-rectangle"></i><span>Party</span></button>
        <button onclick="navigate('profile')" data-nav="profile" class="nav-btn"><i class="fa-solid fa-user"></i><span>Profil</span></button>
    </div>
</nav>

<div id="authModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 92vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4">
            <div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);">Login via Telegram</h2><p class="text-xs mt-1" style="color: var(--text-muted);">Akun otomatis dibuat dari Telegram</p></div>
            <button onclick="closeAuthModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="text-center mb-4">
            <div class="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #229ED9, #1b7aad); box-shadow: 0 8px 24px rgba(34,158,217,0.4);"><i class="fa-brands fa-telegram text-white text-4xl"></i></div>
            <h3 class="font-bold text-base" style="color: var(--text-primary);">Masuk dengan Telegram</h3>
            <p class="text-xs mt-2 leading-relaxed" style="color: var(--text-secondary);">Akun Fesstale kamu dibuat <strong>otomatis</strong> dari nama, username, dan foto profil Telegram. Tidak perlu daftar manual.</p>
        </div>
        <div class="space-y-2 mb-4">
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-bolt" style="color: #fbbf24;"></i><span class="text-xs" style="color: var(--text-secondary);">Login instan tanpa isi form</span></div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-shield-halved" style="color: #059669;"></i><span class="text-xs" style="color: var(--text-secondary);">Aman & terverifikasi Telegram</span></div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-gift" style="color: #ec4899;"></i><span class="text-xs" style="color: var(--text-secondary);">Dapat 1.000 koin bonus pendaftaran</span></div>
        </div>
        <a id="authOpenTgLink" href="#" class="btn-primary w-full text-center mb-2" style="display: block; padding: 14px; text-decoration: none; background: linear-gradient(135deg, #229ED9, #1b7aad); box-shadow: 0 6px 20px rgba(34,158,217,0.4);"><i class="fa-brands fa-telegram mr-2"></i>Buka di Telegram</a>
        <button onclick="retryTelegramLogin()" class="btn-secondary w-full mb-2" id="retryTgBtn"><i class="fa-solid fa-rotate-right mr-2"></i>Coba Login Ulang</button>
        <p class="text-[10px] text-center mt-2" style="color: var(--text-muted);">Jika kamu sudah di Telegram, tutup modal ini dan aplikasi akan login otomatis.</p>
        <div id="authError" class="hidden mt-3 p-3 rounded-xl text-sm" style="background: rgba(239, 68, 68, 0.1); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.3);"></div>
    </div>
</div>

<div id="playerModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-5xl rounded-t-3xl sm:rounded-3xl p-4 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 95vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div class="min-w-0"><h2 class="text-lg font-bold font-display truncate" id="playerTitle">Player</h2></div><div class="flex items-center gap-2 flex-shrink-0"><button onclick="toggleFullscreen()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-expand"></i></button><button onclick="closePlayerModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div></div>
        <div id="playerContent"></div>
    </div>
</div>

<div id="shopModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);">Toko</h2><p class="text-xs mt-1" style="color: var(--text-muted);">Beli & pasang border + bubble</p></div><button onclick="closeShopModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="flex gap-2 mb-4 overflow-x-auto scrollbar-hide"><button onclick="switchShopTab('border')" id="shopTabBorder" class="tab-btn active" style="white-space:nowrap;">Avatar Border</button><button onclick="switchShopTab('bubble')" id="shopTabBubble" class="tab-btn" style="white-space:nowrap;">Bubble Chat</button></div>
        <div id="shopContent"></div>
    </div>
</div>

<div id="vipModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-6"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);">Beli VIP</h2><p class="text-xs mt-1" style="color: var(--text-muted);">Unlimited nonton & download</p></div><button onclick="closeVipModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div id="vipContent"></div>
    </div>
</div>

<div id="infoModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><h2 class="text-lg font-bold font-display" id="infoTitle">Info</h2><button onclick="closeInfoModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div id="infoContent" class="text-sm leading-relaxed" style="color: var(--text-secondary);"></div>
    </div>
</div>

<div id="imagePreviewModal" class="fixed inset-0 z-[60] hidden modal-backdrop flex items-center justify-center" onclick="closeImagePreview()">
    <button onclick="closeImagePreview()" class="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center" style="background: rgba(0,0,0,0.7); color: white; border: 1px solid rgba(255,255,255,0.2); z-index: 10;"><i class="fa-solid fa-xmark text-lg"></i></button>
    <div class="max-w-4xl max-h-[90vh] p-4" onclick="event.stopPropagation()"><img id="previewImage" src="" style="max-width: 100%; max-height: 85vh; border-radius: 16px; object-fit: contain;" oncontextmenu="return false;" draggable="false" alt="Preview"></div>
</div>

<div id="leaderboardModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);"><i class="fa-solid fa-trophy" style="color: #fbbf24;"></i> Leaderboard</h2></div><button onclick="closeLeaderboardModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="flex gap-2 mb-4 overflow-x-auto scrollbar-hide" id="lbTabs">
            <button onclick="changeLbCategory('xp')" class="lb-tab active" data-cat="xp"><i class="fa-solid fa-star mr-1"></i>XP</button>
            <button onclick="changeLbCategory('watch')" class="lb-tab" data-cat="watch"><i class="fa-solid fa-eye mr-1"></i>Nonton</button>
            <button onclick="changeLbCategory('gallery')" class="lb-tab" data-cat="gallery"><i class="fa-solid fa-images mr-1"></i>Story</button>
            <button onclick="changeLbCategory('level')" class="lb-tab" data-cat="level"><i class="fa-solid fa-arrow-up mr-1"></i>Level</button>
            <button onclick="changeLbCategory('koin')" class="lb-tab" data-cat="koin"><i class="fa-solid fa-coins mr-1"></i>Koin</button>
        </div>
        <div id="leaderboardContent"></div>
    </div>
</div>

<div id="giftModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);"><i class="fa-solid fa-gift" style="color: #ec4899;"></i> Kirim Gift</h2><p class="text-xs mt-1" style="color: var(--text-muted);" id="giftTargetName">-</p></div><button onclick="closeGiftModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="mb-3 p-3 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="flex items-center justify-between"><span class="text-xs" style="color: var(--text-secondary);">Koin kamu</span><span class="font-bold text-sm" style="color: #d97706;"><i class="fa-solid fa-coins"></i> <span id="giftMyKoin">0</span></span></div></div>
        <div id="giftListContainer" class="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-4"><div class="skeleton h-24 col-span-3"></div></div>
        <button onclick="sendGift()" class="btn-primary w-full" id="sendGiftBtn" disabled><i class="fa-solid fa-paper-plane mr-2"></i>Pilih Gift Dulu</button>
    </div>
</div>

<div id="transferModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);"><i class="fa-solid fa-paper-plane" style="color: var(--accent);"></i> Transfer Koin</h2><p class="text-xs mt-1" style="color: var(--text-muted);">Kirim koin ke user lain</p></div><button onclick="closeTransferModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="mb-3 p-3 rounded-xl" style="background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.08)); border: 1px solid rgba(251,191,36,0.3);"><div class="flex items-center justify-between"><span class="text-xs" style="color: var(--text-secondary);">Koin kamu</span><span class="font-bold text-base" style="color: #d97706;"><i class="fa-solid fa-coins"></i> <span id="transferMyKoin">0</span></span></div></div>
        <div class="mb-3"><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Username Penerima</label><div class="relative"><i class="fa-solid fa-at absolute left-4 top-1/2 -translate-y-1/2 text-sm" style="color: var(--text-muted);"></i><input type="text" id="transferUsername" class="input-modern" style="padding-left: 44px;" placeholder="username_tujuan" maxlength="30" autocomplete="off"></div></div>
        <div class="mb-3"><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Jumlah Koin</label><input type="number" id="transferAmount" class="input-modern" placeholder="0" min="1" max="1000000" inputmode="numeric"><div class="flex gap-2 mt-2 flex-wrap"><button class="transfer-amount-preset" onclick="setTransferPreset(100)">100</button><button class="transfer-amount-preset" onclick="setTransferPreset(500)">500</button><button class="transfer-amount-preset" onclick="setTransferPreset(1000)">1K</button><button class="transfer-amount-preset" onclick="setTransferPreset(5000)">5K</button><button class="transfer-amount-preset" onclick="setTransferPreset(10000)">10K</button></div></div>
        <div class="mb-4 p-3 rounded-xl text-xs" style="background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary);"><p class="flex items-start gap-2"><i class="fa-solid fa-info-circle mt-0.5 flex-shrink-0" style="color: var(--accent);"></i><span>Penerima akan mendapat notifikasi via Telegram bot. Tidak ada biaya admin. Tidak bisa transfer ke diri sendiri.</span></p></div>
        <button onclick="submitTransfer()" class="btn-primary w-full" id="transferBtn"><i class="fa-solid fa-paper-plane mr-2"></i>Kirim Koin</button>
    </div>
</div>

<div id="promoBannerOverlay" class="promo-banner-overlay hidden"><div class="promo-banner-box"><button onclick="closePromoBanner()" class="promo-banner-close"><i class="fa-solid fa-xmark"></i></button><a id="promoBannerLink" href="#" target="_blank" style="display: block; width: 100%;"><img id="promoBannerImage" src="" alt="Promo" oncontextmenu="return false;" draggable="false"></a></div></div>

<div id="downloadStepOverlay" class="download-step-overlay hidden"><div class="download-step-box"><div id="downloadStepContent"></div></div></div>

<div id="voucherModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color);">
        <div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);">Redeem Voucher</h2><button onclick="closeVoucherModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <p class="text-sm mb-4 text-center" style="color: var(--text-secondary);">Masukkan 12 digit kode voucher</p>
        <div class="mb-4"><input type="text" id="voucherCodeInput" class="voucher-input-single" placeholder="000000000000" maxlength="12" inputmode="numeric" autocomplete="off"></div>
        <button onclick="submitVoucher()" class="btn-primary w-full" id="redeemBtn"><i class="fa-solid fa-gift mr-2"></i>Redeem</button>
    </div>
</div>
<script>
var API_BASE = window.location.origin;
var REACTION_TYPES = ['suka', 'tidak_suka', 'perfect'];
var REACTION_EMOJIS = { suka: '👍', tidak_suka: '👎', perfect: '💯' };
var REACTION_LABELS = { suka: 'Suka', tidak_suka: 'Tidak Suka', perfect: 'Perfect' };
var COUNTRY_FLAGS = { 'US': '🇺🇸', 'ID': '🇮🇩', 'JP': '🇯🇵', 'KR': '🇰🇷', 'CN': '🇨🇳', 'TH': '🇹🇭', 'IN': '🇮🇳', 'ES': '🇪🇸', 'FR': '🇫🇷', 'DE': '🇩🇪', 'GB': '🇬🇧', 'IT': '🇮🇹', 'RU': '🇷🇺', 'BR': '🇧🇷', 'MX': '🇲🇽' };
var GALLERY_CAPTION_MAX = 2000;
var GALLERY_PRICE_MAX = 1000000;
var COMMENT_MAX_LENGTH = 2000;
var BIO_MAX_LENGTH = 500;
var MEDIA_MAX_MB = 8;
var RESUME_STORAGE_KEY = 'fesstale_resume_';
var LAST_EP_STORAGE_KEY = 'fesstale_last_ep_';
var AUTO_NEXT_STORAGE_KEY = 'fesstale_auto_next';
var STORY_SEEN_KEY = 'fesstale_story_seen_';
var TELEGRAM_CHANGE_COST = 15000;

var activeHlsInstance = null;
var activeVideoEl = null;
function destroyActivePlayer() {
    if (activeHlsInstance) { try { activeHlsInstance.destroy(); } catch (e) {} activeHlsInstance = null; }
    if (activeVideoEl) {
        try { activeVideoEl.pause(); activeVideoEl.removeAttribute('src'); activeVideoEl.load(); } catch (e) {}
        if (activeVideoEl.parentNode) { try { activeVideoEl.parentNode.removeChild(activeVideoEl); } catch (e) {} }
        activeVideoEl = null;
    }
}

var state = {
    user: null, token: null, currentPage: 'home', theme: 'light', searchQuery: '',
    currentMovie: null, currentSeries: null, currentEpisode: null, currentEpisodes: [], activeEpisodeId: null,
    homeNotes: { homeNote: null, playerNote: null, turnstileEnabled: false, turnstileSiteKey: null, emailVerificationEnabled: true, adSlots: { header: {enabled:false,code:''}, home_top: {enabled:false,code:''}, home_middle: {enabled:false,code:''}, home_bottom: {enabled:false,code:''} }, customTabs: [], promoBanners: [], downloadAds: [], promos: [], gyazoConfig: {}, telegramBotUsername: null, telegramLoginEnabled: false },
    viewingUsername: null,
    pagination: { home:1, genre:1, request:1, comments:1, adminContent:1, adminBorders:1, adminLevels:1, adminBubbles:1, adminEpisodes:1, customTab:1, gallery:1, gallerySaved:1, coinHistory:1, galleryComments:1, adminGifts:1 },
    selectedGenre: '', selectedCountry: '', selectedCustomTab: null, playerAds: [], currentAdIndex: 0,
    downloadStep: 0, downloadUrl: null, downloadChallengeCorrect: -1, downloadChallengeAttempts: 0,
    shopTab: 'border', adminPendingRequests: 0, adminContentSearch: '', adminActiveSeriesId: null, adminEpisodesSearch: '',
    galleryTab: 'all', leaderboardCategory: 'xp', featuredContent: [], carouselIndex: 0, carouselInterval: null,
    giftList: [], selectedGiftId: null, giftTargetUserId: null, giftTargetName: '',
    pendingCommentMedia: null, pendingGalleryCommentMedia: null, pendingReplyMedia: {}, pendingGalleryReplyMedia: {},
    episodeSearchQuery: '', viewingUserId: null, activeServerIndex: 0,
    autoNextEnabled: localStorage.getItem('fesstale_auto_next') !== 'false',
    telegramReady: false, telegramUser: null, botUsername: null, pendingGalleryFiles: [], currentStoryMediaIndex: 0,
    partyCreateSelectedSeries: null, partyCreateVideoUrl: '',
};

var partyPollInterval = null;
var currentParty = null;
var lastPartySeq = -1;
var partyVideoEl = null;
var partyHls = null;

document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; }, true);
document.addEventListener('keydown', function(e) {
    var k = e.key || ''; var ck = k.toUpperCase();
    if (k === 'F12' || k === 'F2') { e.preventDefault(); return false; }
    if (e.ctrlKey && e.shiftKey && ['I','J','C','K','E','M'].includes(ck)) { e.preventDefault(); return false; }
    if (e.ctrlKey && ['U','S','P'].includes(ck)) { e.preventDefault(); return false; }
    if (e.metaKey && e.altKey && ['I','J','C','U'].includes(ck)) { e.preventDefault(); return false; }
    if (e.metaKey && ['U','S'].includes(ck)) { e.preventDefault(); return false; }
}, true);
document.addEventListener('dragstart', function(e) { if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO')) { e.preventDefault(); return false; } }, true);
document.addEventListener('selectstart', function(e) { if (e.target && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') { e.preventDefault(); } }, true);

function showToast(message, type) {
    type = type || 'info';
    var toast = document.getElementById('toast');
    var icon = document.getElementById('toastIcon');
    var msg = document.getElementById('toastMsg');
    msg.textContent = message;
    toast.className = 'toast show ' + type;
    if (type === 'success') icon.className = 'fa-solid fa-check-circle';
    else if (type === 'error') icon.className = 'fa-solid fa-exclamation-circle';
    else icon.className = 'fa-solid fa-info-circle';
    setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

function escapeHtml(text) { if (text === null || text === undefined) return ''; var div = document.createElement('div'); div.textContent = String(text); return div.innerHTML; }
function escapeAttr(text) { if (text === null || text === undefined) return ''; return String(text).replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escapeAttrValue(text) { if (text === null || text === undefined) return ''; return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function formatCommentTextHtml(text) {
    if (!text) return '';
    var escaped = escapeHtml(text);
    var normalized = escaped.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/^\n+|\n+$/g, '');
    if (!normalized) return '';
    var paragraphs = normalized.split(/\n{2,}/); var total = paragraphs.length; var out = '';
    for (var i = 0; i < total; i++) { var inner = paragraphs[i].replace(/\n/g, '<br>'); var mb = (i === total - 1) ? '0' : '8px'; out += '<p style="margin:0 0 ' + mb + ' 0;word-break:break-word;line-height:1.55;">' + inner + '</p>'; }
    return out;
}
function formatDateWIB(isoString) { if (!isoString) return '-'; var date = new Date(isoString); return date.toLocaleString('id-ID', { timeZone:'Asia/Jakarta', day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) + ' WIB'; }
function formatViews(views) { if (!views) return '0'; if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M'; if (views >= 1000) return (views / 1000).toFixed(1) + 'K'; return String(views); }
function formatDuration(minutes) { if (!minutes) return ''; var h = Math.floor(minutes / 60), m = minutes % 60; if (h > 0) return h + 'j ' + m + 'm'; return m + 'm'; }
function formatVideoTime(seconds) { seconds = Math.floor(seconds || 0); var h = Math.floor(seconds / 3600); var m = Math.floor((seconds % 3600) / 60); var s = seconds % 60; if (h > 0) return h + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0'); return m + ':' + String(s).padStart(2,'0'); }
function formatKoin(n) { if (!n && n !== 0) return '0'; return Number(n).toLocaleString('id-ID'); }
function getAvatarColor(username) { var colors = ['linear-gradient(135deg, #8b5cf6, #7c3aed)','linear-gradient(135deg, #8b5cf6, #6d28d9)','linear-gradient(135deg, #ec4899, #be185d)','linear-gradient(135deg, #06b6d4, #0891b2)','linear-gradient(135deg, #10b981, #059669)','linear-gradient(135deg, #eab308, #ca8a04)','linear-gradient(135deg, #ef4444, #dc2626)','linear-gradient(135deg, #6366f1, #4f46e5)']; if (!username) username = 'user'; var hash = 0; for (var i = 0; i < username.length; i++) hash = username.charCodeAt(i) + ((hash << 5) - hash); return colors[Math.abs(hash) % colors.length]; }
function getCountryFlag(code) { if (!code) return '🌍'; return COUNTRY_FLAGS[code.toUpperCase()] || '🌍'; }

async function apiCall(endpoint, options) {
    options = options || {};
    var headers = { 'Content-Type': 'application/json' };
    if (options.headers) for (var k in options.headers) headers[k] = options.headers[k];
    if (state.token) headers['Authorization'] = 'Bearer ' + state.token;
    try { var response = await fetch(API_BASE + endpoint, { method: options.method || 'GET', headers: headers, body: options.body }); return await response.json(); }
    catch (e) { console.error('API error:', e); return { success: false, error: 'Network error' }; }
}

function openImagePreview(url) { if (!url) return; var img = document.getElementById('previewImage'); img.src = url; img.setAttribute('oncontextmenu', 'return false;'); img.setAttribute('draggable', 'false'); document.getElementById('imagePreviewModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function closeImagePreview() { document.getElementById('imagePreviewModal').classList.add('hidden'); document.body.style.overflow = ''; }

function updateCommentCounter(inputId, counterId) {
    var input = document.getElementById(inputId); var counter = document.getElementById(counterId);
    if (!input || !counter) return; var len = input.value.length; var max = COMMENT_MAX_LENGTH;
    counter.textContent = len + ' / ' + max; counter.classList.remove('near-limit', 'at-limit');
    if (len >= max) counter.classList.add('at-limit'); else if (len >= max * 0.85) counter.classList.add('near-limit');
}

function handleGalleryFileSelect(input) {
    var files = Array.from(input.files || []); state.pendingGalleryFiles = files;
    var preview = document.getElementById('galleryFilePreview'); if (!preview) return;
    if (files.length === 0) { preview.innerHTML = ''; return; }
    if (files.length > 10) { showToast('Maksimal 10 foto per story', 'error'); state.pendingGalleryFiles = []; input.value = ''; preview.innerHTML = ''; return; }
    var totalSize = files.reduce(function(a, b) { return a + b.size; }, 0); var sizeMb = (totalSize / (1024*1024)).toFixed(1);
    preview.innerHTML = '<div class="flex items-center gap-2 mb-1" style="color:#059669;"><i class="fa-solid fa-circle-check"></i><span class="text-xs font-bold">' + files.length + ' foto terpilih (' + sizeMb + ' MB)</span></div>' +
        '<div class="flex flex-wrap gap-1">' + files.map(function(f) { var name = f.name.length > 22 ? f.name.substring(0, 20) + '…' : f.name; return '<span class="badge" style="background:rgba(124,58,237,0.15); color:var(--accent); font-size:10px; padding:3px 8px;"><i class="fa-solid fa-image" style="font-size:9px; margin-right:3px;"></i>' + escapeHtml(name) + '</span>'; }).join('') + '</div>';
}

function goStoryCarousel(idx) {
    var track = document.getElementById('storyCarouselTrack'); if (!track) return;
    var total = track.children.length; if (idx < 0) idx = total - 1; if (idx >= total) idx = 0;
    state.currentStoryMediaIndex = idx; track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    document.querySelectorAll('#storyCarouselDots .story-carousel-dot').forEach(function(d, i) { d.classList.toggle('active', i === idx); });
    var counter = document.getElementById('storyCarouselCounter'); if (counter) counter.textContent = (idx + 1) + ' / ' + total;
}
function nextStoryCarousel() { goStoryCarousel(state.currentStoryMediaIndex + 1); }
function prevStoryCarousel() { goStoryCarousel(state.currentStoryMediaIndex - 1); }

function renderStoryMediaCarousel(mediaUrls, isLocked, price, postId) {
    if (!mediaUrls || mediaUrls.length === 0) return '';
    if (isLocked) {
        return '<div class="gallery-locked-wrap"><img src="' + mediaUrls[0] + '" class="locked-img" style="width:100%;display:block;" oncontextmenu="return false;" draggable="false" alt="Locked">' +
            '<div class="gallery-watermark"><span class="gallery-watermark-text">FESSTALE</span></div>' +
            '<div class="gallery-lock-overlay"><div class="gallery-lock-icon"><i class="fa-solid fa-lock"></i></div>' +
            '<div class="gallery-lock-price"><i class="fa-solid fa-coins mr-1"></i>' + formatKoin(price) + ' koin</div>' +
            '<div class="gallery-lock-label">Klik tombol di bawah untuk beli</div></div></div>';
    }
    if (mediaUrls.length === 1) {
        return '<div style="position:relative;"><img src="' + mediaUrls[0] + '" style="width:100%;display:block;cursor:zoom-in;" onclick="openImagePreview(\'' + mediaUrls[0] + '\')" oncontextmenu="return false;" draggable="false" alt="Story">' +
            '<div class="gallery-watermark-subtle"><span class="gallery-watermark-subtle-text">FESSTALE</span></div></div>';
    }
    state.currentStoryMediaIndex = 0;
    var slides = mediaUrls.map(function(url) { return '<div class="story-carousel-slide"><img src="' + url + '" onclick="openImagePreview(\'' + url + '\')" oncontextmenu="return false;" draggable="false" alt="Story"></div>'; }).join('');
    var dots = mediaUrls.map(function(_, i) { return '<button class="story-carousel-dot ' + (i === 0 ? 'active' : '') + '" onclick="event.stopPropagation(); goStoryCarousel(' + i + ')"></button>'; }).join('');
    return '<div class="story-carousel" id="storyCarousel"><div class="story-carousel-track" id="storyCarouselTrack">' + slides + '</div>' +
        '<button class="story-carousel-arrow prev" onclick="event.stopPropagation(); prevStoryCarousel()"><i class="fa-solid fa-chevron-left"></i></button>' +
        '<button class="story-carousel-arrow next" onclick="event.stopPropagation(); nextStoryCarousel()"><i class="fa-solid fa-chevron-right"></i></button>' +
        '<div class="story-carousel-counter" id="storyCarouselCounter">1 / ' + mediaUrls.length + '</div>' +
        '<div class="story-carousel-dots" id="storyCarouselDots">' + dots + '</div></div>';
}

var VERIFIED_SVG = '<span class="verified-badge-tw" title="Verified"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1d9bf0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg></span>';
function verifiedSvgSize(size) { var cls = size === 'lg' ? 'lg' : (size === 'sm' ? 'sm' : ''); return VERIFIED_SVG.replace('class="verified-badge-tw"', 'class="verified-badge-tw ' + cls + '"'); }

function showTelegramGate() {
    var gate = document.getElementById('telegramGate'); gate.classList.remove('hidden');
    var link = document.getElementById('tgGateOpenLink'); var bot = state.homeNotes.telegramBotUsername || state.botUsername || 'FesstaleMovieBot';
    link.href = 'https://t.me/' + bot; document.getElementById('siteFooter').style.display = 'none';
    document.querySelector('.bottom-nav-app').style.display = 'none'; document.getElementById('mainHeader').style.display = 'none';
    var floating = document.querySelector('.floating-leaderboard-btn'); if (floating) floating.style.display = 'none';
}
function hideTelegramGate() {
    var gate = document.getElementById('telegramGate'); if (gate) gate.classList.add('hidden');
    document.getElementById('siteFooter').style.display = ''; document.querySelector('.bottom-nav-app').style.display = '';
    document.getElementById('mainHeader').style.display = '';
    var floating = document.querySelector('.floating-leaderboard-btn'); if (floating) floating.style.display = '';
}
function isInTelegram() { return !!(window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData); }

function handleAuthButton() { if (state.user) { navigate('profile'); return; } if (isInTelegram()) { retryTelegramLogin(); } else { openAuthModal(); } }
function openAuthModal() {
    document.getElementById('authModal').classList.remove('hidden'); document.body.style.overflow = 'hidden';
    var link = document.getElementById('authOpenTgLink'); var bot = state.homeNotes.telegramBotUsername || state.botUsername || 'FesstaleMovieBot'; link.href = 'https://t.me/' + bot;
    var err = document.getElementById('authError'); if (err) err.classList.add('hidden');
}
function closeAuthModal() { document.getElementById('authModal').classList.add('hidden'); document.body.style.overflow = ''; var err = document.getElementById('authError'); if (err) err.classList.add('hidden'); }
function showAuthError(msg) { var errEl = document.getElementById('authError'); if (errEl) { errEl.textContent = msg; errEl.classList.remove('hidden'); } }

async function retryTelegramLogin() {
    var btn = document.getElementById('retryTgBtn'); if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...'; }
    try {
        if (!isInTelegram()) { showAuthError('Bukan di Telegram. Buka aplikasi melalui Telegram Bot.'); return; }
        var tg = window.Telegram.WebApp;
        var startParam = (tg.initDataUnsafe && tg.initDataUnsafe.start_param) ? tg.initDataUnsafe.start_param : null;
        var res = await apiCall('/api/auth/telegram-webapp', { method: 'POST', body: JSON.stringify({ initData: tg.initData, startParam: startParam }) });
        if (res.success) {
            state.token = res.data.token; state.user = res.data.user;
            localStorage.setItem('fesstale_token', state.token); localStorage.setItem('fesstale_user', JSON.stringify(state.user));
            closeAuthModal(); updateAuthUI(); showToast('✅ ' + (res.message || 'Login berhasil!'), 'success');
            if (state.currentPage === 'home') renderHome(); else if (state.currentPage === 'profile') renderProfile(); else navigate(state.currentPage);
        } else { showAuthError(res.error || 'Login Telegram gagal. Coba lagi.'); }
    } catch (e) { showAuthError('Error: ' + e.message); }
    finally { if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-rotate-right mr-2"></i>Coba Login Ulang'; } }
}

function logout() { apiCall('/api/auth/logout', { method: 'POST' }); state.user = null; state.token = null; localStorage.removeItem('fesstale_token'); localStorage.removeItem('fesstale_user'); updateAuthUI(); showToast('Berhasil keluar', 'info'); if (isInTelegram()) { setTimeout(function() { window.location.reload(); }, 500); } else { navigate('home'); } }

function updateAuthUI() {
    var btn = document.getElementById('authBtn'); var coinDisplay = document.getElementById('coinDisplay');
    if (state.user) { btn.innerHTML = '<i class="fa-solid fa-user-check text-sm" style="color: #7c3aed;"></i>'; coinDisplay.classList.remove('hidden'); document.getElementById('coinAmount').textContent = formatKoin(state.user.koin || 0); }
    else { btn.innerHTML = '<i class="fa-solid fa-user text-sm"></i>'; coinDisplay.classList.add('hidden'); }
}

function initTheme() { var saved = localStorage.getItem('fesstale_theme'); state.theme = saved === 'dark' ? 'dark' : 'light'; applyTheme(state.theme); }
function applyTheme(theme) { state.theme = theme; document.documentElement.setAttribute('data-theme', theme); var icon = document.getElementById('themeIcon'); if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-moon text-sm' : 'fa-solid fa-sun text-sm'; var metaTheme = document.querySelector('meta[name="theme-color"]'); if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff'); }
function toggleTheme() { var next = state.theme === 'light' ? 'dark' : 'light'; applyTheme(next); localStorage.setItem('fesstale_theme', next); }

function updatePageMeta(title, description, image, keywords) {
    if (title) document.title = title + ' — Fesstale Movie';
    var descEl = document.querySelector('meta[name="description"]'); if (descEl && description) descEl.setAttribute('content', description);
    var kwEl = document.querySelector('meta[name="keywords"]'); if (kwEl && keywords) kwEl.setAttribute('content', keywords);
    var ogTitle = document.querySelector('meta[property="og:title"]'); if (ogTitle && title) ogTitle.setAttribute('content', title + ' — Fesstale Movie');
    var ogDesc = document.querySelector('meta[property="og:description"]'); if (ogDesc && description) ogDesc.setAttribute('content', description);
    if (image) { var ogImg = document.querySelector('meta[property="og:image"]'); if (!ogImg) { ogImg = document.createElement('meta'); ogImg.setAttribute('property', 'og:image'); document.head.appendChild(ogImg); } ogImg.setAttribute('content', image); }
    if (title) { var twTitle = document.querySelector('meta[name="twitter:title"]'); if (!twTitle) { twTitle = document.createElement('meta'); twTitle.setAttribute('name', 'twitter:title'); document.head.appendChild(twTitle); } twTitle.setAttribute('content', title + ' — Fesstale Movie'); }
    if (image) { var twImg = document.querySelector('meta[name="twitter:image"]'); if (!twImg) { twImg = document.createElement('meta'); twImg.setAttribute('name', 'twitter:image'); document.head.appendChild(twImg); } twImg.setAttribute('content', image); }
}
function resetDefaultMeta() { updatePageMeta('Streaming Drakor Series Gratis Kualitas HD', 'Fesstale Movie - Nonton Drakor series & episode gratis kualitas HD. Streaming cepat, update setiap hari.', '', 'streaming drakor, nonton drakor gratis, fesstale movie, drakor sub indo'); }

function navigate(page, pushState) {
    destroyActivePlayer(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; } currentParty = null; partyVideoEl = null; partyHls = null;
    state.currentPage = page; updateNavUI(page); document.getElementById('app').innerHTML = renderSkeleton(); resetDefaultMeta();
    if (pushState !== false && window.history && window.history.pushState) {
        var url = '/';
        if (page.indexOf('watch/') === 0) url = '/view?id=' + page.split('/')[1];
        else if (page === 'home') url = '/'; else if (page === 'genre') url = '/genre'; else if (page === 'gallery') url = '/story'; else if (page === 'request') url = '/request'; else if (page === 'party') url = '/party';
        else if (page.indexOf('party-room/') === 0) url = '/party/' + page.split('/')[1];
        else if (page === 'profile') url = '/profile'; else if (page === 'missions') url = '/missions'; else if (page === 'referral') url = '/referral';
        else if (page.indexOf('gallery-detail/') === 0) url = '/story?id=' + page.split('/')[1];
        else if (page.indexOf('user/') === 0) url = '/@' + page.split('/')[1];
        else url = '/' + page;
        try { window.history.pushState({ page: page }, '', url); } catch (e) {}
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') renderHome(); else if (page === 'genre') renderGenrePage(); else if (page === 'gallery') renderGalleryPage(); else if (page === 'request') renderRequestPage(); else if (page === 'profile') renderProfile(); else if (page === 'admin') renderAdmin(); else if (page === 'missions') renderMissions(); else if (page === 'referral') renderReferralPage(); else if (page === 'party') renderPartyPage(); else if (page.indexOf('party-room/') === 0) renderPartyRoomPage(page.split('/')[1]); else if (page.indexOf('gallery-detail/') === 0) renderGalleryDetail(page.split('/')[1]); else if (page.indexOf('custom/') === 0) renderCustomTabPage(page.split('/')[1]); else if (page.indexOf('watch/') === 0) renderWatchPage(page.split('/')[1]); else if (page.indexOf('user/') === 0) { state.viewingUsername = page.split('/')[1]; renderUserProfile(page.split('/')[1]); }
}

function updateNavUI(page) {
    document.querySelectorAll('.nav-btn').forEach(function(btn) { var nav = btn.dataset.nav; btn.classList.remove('active'); if (nav === page || (page.indexOf('watch/') === 0 && nav === 'home') || (page.indexOf('user/') === 0 && nav === 'profile') || (page.indexOf('custom/') === 0 && nav === 'home') || (page.indexOf('gallery-detail/') === 0 && nav === 'gallery') || (page.indexOf('party') === 0 && nav === 'party')) btn.classList.add('active'); });
}

function renderSkeleton() { return '<div class="space-y-4"><div class="skeleton h-8 w-48"></div><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div></div></div>'; }

function renderMLBBAvatar(opts) {
    var size = opts.size || 44; var scale = opts.borderScale || 1.2;
    var hasBorder = opts.borderUrl && opts.borderUrl.trim() !== '';
    var borderW = size * scale; var borderOffset = (borderW - size) / 2;
    var inner = opts.avatarUrl ? '<img src="' + opts.avatarUrl + '" alt="" loading="lazy" oncontextmenu="return false;" draggable="false">' : escapeHtml((opts.username || '?').charAt(0).toUpperCase());
    var innerStyle = 'width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.42) + 'px;background:' + getAvatarColor(opts.username) + ';';
    var borderHtml = hasBorder ? '<div class="mlbb-avatar-border" style="width:' + borderW + 'px;height:' + borderW + 'px;left:' + (-borderOffset) + 'px;top:' + (-borderOffset) + 'px;background-image:url(' + opts.borderUrl + ');"></div>' : '';
    var clickAttr = opts.onClick ? 'onclick="' + opts.onClick + '"' : '';
    return '<div class="mlbb-avatar-wrap cursor-pointer" style="width:' + size + 'px;height:' + size + 'px;" ' + clickAttr + '><div class="mlbb-avatar-inner" style="' + innerStyle + '">' + inner + '</div>' + borderHtml + '</div>';
}

function renderLevelPhoto(levelUrl, size) { if (!levelUrl) return ''; size = size || 32; return '<img src="' + levelUrl + '" class="level-photo" style="width:' + size + 'px;height:' + size + 'px;" alt="Lv" loading="lazy" oncontextmenu="return false;" draggable="false">'; }

function renderCommentBubble(c) {
    var contentHtml = formatCommentTextHtml(c.content);
    var mediaHtml = c.mediaUrl ? '<div class="comment-media-preview"><img src="' + c.mediaUrl + '" alt="media" loading="lazy" onclick="openImagePreview(\'' + c.mediaUrl + '\')" oncontextmenu="return false;" draggable="false"></div>' : '';
    if (c.bubbleCss && c.bubbleHtml) { var filled = c.bubbleHtml.indexOf('{{content}}') !== -1 ? c.bubbleHtml.split('{{content}}').join(contentHtml) : contentHtml; return '<style scoped>' + (c.bubbleCss || '') + '</style><div class="bubble-custom">' + filled + mediaHtml + '</div>'; }
    return '<div class="bubble-default"><div class="text-sm" style="word-break: break-word; color: var(--text-secondary);">' + contentHtml + '</div>' + mediaHtml + '</div>';
}

function renderContentCard(item) {
    var poster = item.posterUrl || null; var title = item.title || 'Untitled'; var rating = item.rating || 0; var type = item.type || 'free'; var duration = item.duration || 0; var price = item.price || 0;
    var latestEp = item.latestEpisodeNumber || item.latest_episode_number || 0; var totalEp = item.totalEpisodes || item.total_episodes || 0;
    var typeLabel = type === 'premium' ? 'VIP' : (type === 'coin' ? 'COIN' : 'FREE');
    var typeColor = type === 'premium' ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : (type === 'coin' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'linear-gradient(135deg, #10b981, #059669)');
    var posterHtml = poster ? '<img src="' + poster + '" alt="' + escapeHtml(title) + '" class="movie-poster" loading="lazy" style="border-radius: 12px;" oncontextmenu="return false;" draggable="false">' : '<div class="movie-poster flex items-center justify-center" style="background: var(--bg-secondary); border-radius: 12px;"><i class="fa-solid fa-video text-3xl" style="color: var(--text-muted);"></i></div>';
    var typeBadge = '<div class="type-badge-modern" style="background:' + typeColor + ';">' + typeLabel + '</div>';
    var durBadge = duration ? '<div class="card-corner-badge corner-top-right"><i class="fa-regular fa-clock"></i>' + formatDuration(duration) + '</div>' : '';
    var ratingBadge = rating ? '<div class="card-corner-badge corner-bottom-left"><i class="fa-solid fa-star"></i>' + Number(rating).toFixed(1) + '</div>' : '';
    var totalEpDisplay = totalEp > 0 ? totalEp : latestEp;
    var epsBadge = latestEp ? '<div class="card-corner-badge corner-bottom-right"><i class="fa-solid fa-tv"></i>' + latestEp + '/' + totalEpDisplay + '</div>' : '';
    var priceHtml = ''; if (type === 'coin' && price > 0) priceHtml = '<div style="position:absolute;top:28px;right:6px;padding:2px 6px;border-radius:6px;font-size:9px;font-weight:700;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:white;z-index:4;"><i class="fa-solid fa-coins text-[8px] mr-0.5"></i>' + price + '</div>';
    return '<div onclick="navigate(\'watch/' + item.id + '\')" class="movie-card cursor-pointer animate-fade-up"><div class="relative" style="border-radius:12px;overflow:hidden;">' + posterHtml + '<div class="poster-gradient"></div>' + typeBadge + durBadge + ratingBadge + epsBadge + priceHtml + '<div class="thumb-watermark">FESSTALE</div></div><div class="mt-1.5 px-0.5"><p class="text-[11px] font-semibold line-clamp-2 leading-snug" style="color: var(--text-primary);">' + escapeHtml(title) + '</p></div></div>';
}

function renderPaginationWithFn(currentPage, totalPages, fnBuilder) {
    if (!totalPages || totalPages <= 1) return '';
    var pages = []; var start = Math.max(1, currentPage - 1), end = Math.min(totalPages, currentPage + 1);
    if (start > 1) { pages.push({ num: 1, label: '1' }); if (start > 2) pages.push({ num: null, label: '...' }); }
    for (var i = start; i <= end; i++) pages.push({ num: i, label: String(i) });
    if (end < totalPages) { if (end < totalPages - 1) pages.push({ num: null, label: '...' }); pages.push({ num: totalPages, label: String(totalPages) }); }
    var html = '<div class="pagination">';
    html += '<button class="page-btn" ' + (currentPage <= 1 ? 'disabled' : '') + ' onclick="' + fnBuilder(currentPage - 1) + '"><i class="fa-solid fa-chevron-left"></i></button>';
    pages.forEach(function(p) { if (p.num === null) html += '<span class="page-btn" style="border: none; background: transparent;">...</span>'; else html += '<button class="page-btn ' + (p.num === currentPage ? 'active' : '') + '" onclick="' + fnBuilder(p.num) + '">' + p.label + '</button>'; });
    html += '<button class="page-btn" ' + (currentPage >= totalPages ? 'disabled' : '') + ' onclick="' + fnBuilder(currentPage + 1) + '"><i class="fa-solid fa-chevron-right"></i></button>';
    html += '<div class="flex items-center gap-1 ml-2"><input type="number" class="page-input" min="1" max="' + totalPages + '" value="' + currentPage + '" onchange="' + fnBuilder('this.value') + '" id="pageInput">';
    html += '<button class="page-btn" onclick="' + fnBuilder('document.getElementById(\'pageInput\').value') + '"><i class="fa-solid fa-arrow-right"></i></button></div></div>';
    return html;
}

function renderNoteBanner(note) { if (!note || note.trim() === '') return ''; return '<div class="note-banner mb-4 animate-fade-up"><i class="fa-solid fa-bullhorn mt-0.5 flex-shrink-0" style="color: var(--accent);"></i><div class="text-sm flex-1" style="color: var(--text-secondary);">' + escapeHtml(note).replace(/\n/g, '<br>') + '</div></div>'; }

function renderPremiumPromo() {
    if (isPremiumUser()) return '';
    var promo = state.homeNotes.promos && state.homeNotes.promos.length > 0 ? state.homeNotes.promos[0] : null;
    var title = promo ? promo.name : 'Premium 3rb/Bulan'; var desc = promo ? promo.description : 'Promo Khusus Member Setia';
    return '<div class="premium-banner animate-fade-up" onclick="openVipModal()"><div class="premium-banner-icon"><i class="fa-solid fa-crown text-2xl" style="color: #b91c1c;"></i></div><div class="premium-banner-text"><p class="premium-banner-title">' + escapeHtml(title) + '</p><p class="premium-banner-desc">' + escapeHtml(desc) + '</p><span class="premium-banner-badge"><i class="fa-solid fa-clock"></i> TERBATAS</span></div><button class="premium-banner-btn">Klaim sekarang <i class="fa-solid fa-chevron-right text-[10px]"></i></button></div>';
}

async function loadFooterStats() {
    var data = await apiCall('/api/stats');
    if (data.success) { var v = document.getElementById('statVideos'); var g = document.getElementById('statGallery'); var e = document.getElementById('statEpisodes'); if (v) v.textContent = (data.data.totalVideos || 0).toLocaleString('id-ID'); if (g) g.textContent = (data.data.totalGallery || 0).toLocaleString('id-ID'); if (e) e.textContent = (data.data.totalEpisodes || 0).toLocaleString('id-ID'); }
}

function getStorySeenKey() { return STORY_SEEN_KEY + new Date().toDateString(); }
function getStorySeenCount() { return parseInt(localStorage.getItem(getStorySeenKey()) || '0'); }
function markStorySeen(count) { localStorage.setItem(getStorySeenKey(), String(count)); }
function hideStoryBadge() { var badge = document.getElementById('storyNavBadge'); if (badge) badge.classList.add('hidden'); }
async function loadStoryBadge() {
    try {
        var data = await apiCall('/api/stats/story-count');
        if (data.success && data.data) {
            var badge = document.getElementById('storyNavBadge'); if (!badge) return;
            var totalToday = data.data.newToday || 0; var seen = getStorySeenCount(); var unseen = Math.max(0, totalToday - seen);
            if (unseen > 0) { badge.textContent = unseen > 99 ? '99+' : String(unseen); badge.classList.remove('hidden'); badge.classList.add('story-badge-pulse'); } else { badge.classList.add('hidden'); }
        }
    } catch (e) { console.warn('loadStoryBadge error:', e); }
}
async function markStoryAsSeenNow() { try { var data = await apiCall('/api/stats/story-count'); if (data.success && data.data) markStorySeen(data.data.newToday || 0); hideStoryBadge(); } catch (e) {} }

function renderCarousel() {
    var list = state.featuredContent || []; if (list.length === 0) return '';
    var slidesHtml = list.map(function(item, idx) {
        var poster = item.posterUrl || ''; var title = escapeHtml(item.title || '');
        var desc = escapeHtml((item.description || '').substring(0, 120)) + ((item.description || '').length > 120 ? '...' : '');
        var rating = item.rating ? '<span class="carousel-slide-badge"><i class="fa-solid fa-star" style="color:#fbbf24;"></i> ' + Number(item.rating).toFixed(1) + '</span>' : '';
        var year = item.year ? '<span class="carousel-slide-badge">' + escapeHtml(item.year) + '</span>' : '';
        var country = item.country ? '<span class="carousel-slide-badge">' + getCountryFlag(item.country) + ' ' + escapeHtml(item.country) + '</span>' : '';
        var eps = item.latestEpisodeNumber ? '<span class="carousel-slide-badge ep"><i class="fa-solid fa-tv"></i> Eps ' + item.latestEpisodeNumber + '</span>' : '';
        var imgHtml = poster ? '<img src="' + poster + '" alt="' + title + '" oncontextmenu="return false;" draggable="false">' : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-film" style="font-size:60px;color:rgba(255,255,255,0.5);"></i></div>';
        return '<div class="carousel-slide" data-idx="' + idx + '" onclick="navigate(\'watch/' + item.id + '\')">' + imgHtml + '<div class="carousel-slide-overlay"><p class="carousel-slide-title">' + title + '</p>' + (desc ? '<p class="carousel-slide-desc">' + desc + '</p>' : '') + '<div class="carousel-slide-meta">' + eps + rating + year + country + '</div><button class="carousel-slide-watch" onclick="event.stopPropagation(); navigate(\'watch/' + item.id + '\')"><i class="fa-solid fa-play"></i> Tonton Sekarang</button></div></div>';
    }).join('');
    var dotsHtml = list.map(function(_, i) { return '<button class="carousel-dot ' + (i === 0 ? 'active' : '') + '" data-dot="' + i + '" onclick="event.stopPropagation(); goCarouselSlide(' + i + ')"></button>'; }).join('');
    return '<div class="carousel-wrap animate-fade-up" id="carouselWrap"><div class="carousel-track" id="carouselTrack">' + slidesHtml + '</div><button class="carousel-arrow prev" onclick="event.stopPropagation(); prevCarouselSlide()"><i class="fa-solid fa-chevron-left"></i></button><button class="carousel-arrow next" onclick="event.stopPropagation(); nextCarouselSlide()"><i class="fa-solid fa-chevron-right"></i></button><div class="carousel-dots" id="carouselDots">' + dotsHtml + '</div></div>';
}
function startCarousel() { stopCarousel(); if (!state.featuredContent || state.featuredContent.length <= 1) return; state.carouselInterval = setInterval(function() { nextCarouselSlide(); }, 5000); }
function stopCarousel() { if (state.carouselInterval) { clearInterval(state.carouselInterval); state.carouselInterval = null; } }
function goCarouselSlide(idx) { var list = state.featuredContent || []; if (list.length === 0) return; if (idx < 0) idx = list.length - 1; if (idx >= list.length) idx = 0; state.carouselIndex = idx; var track = document.getElementById('carouselTrack'); if (track) track.style.transform = 'translateX(-' + (idx * 100) + '%)'; document.querySelectorAll('.carousel-dot').forEach(function(d) { d.classList.toggle('active', parseInt(d.dataset.dot) === idx); }); }
function nextCarouselSlide() { goCarouselSlide(state.carouselIndex + 1); }
function prevCarouselSlide() { goCarouselSlide(state.carouselIndex - 1); }

async function renderHome() {
    var app = document.getElementById('app');
    var promises = [ apiCall('/api/notes'), apiCall('/api/featured'), apiCall('/api/trending?limit=20'), apiCall('/api/content?sort=latest&page=' + state.pagination.home + '&limit=20'), apiCall('/api/content?sort=popular&page=1&limit=10') ];
    if (state.user) { promises.push(apiCall('/api/recently-watched')); promises.push(apiCall('/api/recommendations')); }
    var results = await Promise.all(promises);
    var notes = results[0], featuredRes = results[1], trending = results[2], latest = results[3], popular = results[4];
    var recentWatch = state.user ? results[5] : null; var recommendations = state.user ? results[6] : null;
    if (notes.success) {
        state.homeNotes = notes.data; state.playerAds = notes.data.playerAds || []; state.botUsername = notes.data.telegramBotUsername || null; renderCustomTabs();
        var headerAdSlot = document.getElementById('headerAdSlot');
        if (state.homeNotes.adSlots && state.homeNotes.adSlots.header && state.homeNotes.adSlots.header.enabled && !isPremiumUser()) { headerAdSlot.innerHTML = renderAdSlots(state.homeNotes.adSlots.header); headerAdSlot.classList.remove('hidden'); } else headerAdSlot.classList.add('hidden');
        if (state.homeNotes.promoBanners && state.homeNotes.promoBanners.length > 0 && !isPremiumUser()) { var validBanners = state.homeNotes.promoBanners.filter(function(b) { return b.enabled && b.image; }); if (validBanners.length > 0) { var randomBanner = validBanners[Math.floor(Math.random() * validBanners.length)]; showPromoBanner(randomBanner); } }
    }
    state.featuredContent = (featuredRes.success && featuredRes.data.featured) ? featuredRes.data.featured : [];
    state.carouselIndex = 0;
    var recentWatchHtml = '';
    if (recentWatch && recentWatch.success && recentWatch.data.recent.length > 0) {
        recentWatchHtml = '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-clock-rotate-left" style="color: #06b6d4;"></i>Terakhir Ditonton</h2><div class="recent-watch-scroll scrollbar-hide">' +
            recentWatch.data.recent.map(function(item) { var posterHtml = item.posterUrl ? '<img src="' + item.posterUrl + '" alt="' + escapeHtml(item.title) + '" loading="lazy" oncontextmenu="return false;" draggable="false">' : '<div style="width: 120px; height: 180px; background: var(--bg-card); border-radius: 10px;"></div>'; var lastEp = item.lastEpisodeNumber || item.latestEpisodeNumber || 0; var epOverlay = lastEp ? '<div class="card-corner-badge corner-bottom-right"><i class="fa-solid fa-tv"></i>Eps ' + lastEp + '</div>' : ''; return '<div class="recent-watch-card" onclick="navigate(\'watch/' + item.contentId + '\')"><div class="relative" style="border-radius:10px;overflow:hidden;">' + posterHtml + '<div class="thumb-watermark thumb-watermark-sm">FESSTALE</div>' + epOverlay + '</div><p class="text-[11px] font-medium mt-1 line-clamp-2" style="color: var(--text-primary);">' + escapeHtml(item.title) + '</p></div>'; }).join('') + '</div></div>';
    }
    var recommendationsHtml = '';
    if (recommendations && recommendations.success && recommendations.data.recommendations.length > 0) {
        recommendationsHtml = '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-wand-magic-sparkles" style="color: #8b5cf6;"></i>Rekomendasi Untukmu</h2><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + recommendations.data.recommendations.slice(0, 10).map(renderContentCard).join('') + '</div></div>';
    }
    var trendingCards = trending.success ? trending.data.trending.slice(0, 10).map(renderContentCard).join('') : '';
    var latestCards = latest.success ? latest.data.content.map(renderContentCard).join('') : '';
    var latestPagination = latest.success ? renderPaginationWithFn(state.pagination.home, latest.data.totalPages, function(p) { return 'homePage(' + p + ')'; }) : '';
    var popularCards = popular.success ? popular.data.content.map(renderContentCard).join('') : '';
    app.innerHTML = renderCarousel() + renderNoteBanner(state.homeNotes.homeNote) + renderPremiumPromo() + renderAdSlotByPosition('home_top') + recentWatchHtml +
        (trendingCards ? '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-fire" style="color: #ef4444;"></i>Trending Minggu Ini</h2><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + trendingCards + '</div></div>' : '') +
        recommendationsHtml + renderAdSlotByPosition('home_middle') +
        (popularCards ? '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-star" style="color: #fbbf24;"></i>Populer</h2><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + popularCards + '</div></div>' : '') +
        '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-clock" style="color: #06b6d4;"></i>Terbaru</h2><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + latestCards + '</div>' + latestPagination + '</div>' +
        renderAdSlotByPosition('home_bottom');
    setupCarouselTouch(); startCarousel();
}

function setupCarouselTouch() {
    var wrap = document.getElementById('carouselWrap'); if (!wrap) return;
    var startX = 0, isDown = false;
    wrap.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; isDown = true; stopCarousel(); }, {passive: true});
    wrap.addEventListener('touchend', function(e) { if (!isDown) return; isDown = false; var endX = e.changedTouches[0].clientX; var diff = startX - endX; if (Math.abs(diff) > 40) { if (diff > 0) nextCarouselSlide(); else prevCarouselSlide(); } startCarousel(); }, {passive: true});
    wrap.addEventListener('mouseenter', stopCarousel); wrap.addEventListener('mouseleave', startCarousel);
}

function isPremiumUser() { return state.user && (state.user.isVip || state.user.role === 'admin'); }
function homePage(page) { state.pagination.home = parseInt(page) || 1; try { window.history.pushState({}, '', '/page?p=' + state.pagination.home); } catch(e) {} renderHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function renderAdSlots(slotData) { if (!slotData || !slotData.enabled || !slotData.code) return ''; if (isPremiumUser()) return ''; var codes = slotData.code.split('|||').filter(function(c) { return c.trim(); }); if (codes.length === 0) return ''; var html = '<div class="ad-grid' + (codes.length >= 2 ? ' two-col' : '') + '">'; codes.forEach(function(code, i) { html += '<div class="ad-slot"><div class="ad-slot-label">Sponsored</div>' + code.trim() + '</div>'; }); html += '</div>'; return html; }
function renderAdSlotByPosition(position) { var slot = state.homeNotes.adSlots && state.homeNotes.adSlots[position]; if (!slot || !slot.enabled || !slot.code) return ''; return renderAdSlots(slot); }

function renderCustomTabs() {
    var container = document.getElementById('customTabsContainer'); var tabs = state.homeNotes.customTabs || [];
    if (!tabs || tabs.length === 0) { container.classList.add('hidden'); return; }
    container.classList.remove('hidden');
    container.innerHTML = '<div class="flex gap-2 overflow-x-auto scrollbar-hide pb-1">' + tabs.map(function(tab) { var isActive = state.selectedCustomTab === tab.id; return '<button onclick="selectCustomTab(' + tab.id + ')" class="custom-tab-btn ' + (isActive ? 'active' : '') + '"><i class="fa-solid ' + escapeHtml(tab.icon || 'fa-folder') + '"></i><span>' + escapeHtml(tab.name) + '</span></button>'; }).join('') + '</div>';
}
function selectCustomTab(tabId) { state.selectedCustomTab = tabId; state.pagination.customTab = 1; renderCustomTabs(); navigate('custom/' + tabId); }

async function renderCustomTabPage(tabId) {
    var app = document.getElementById('app'); var tab = (state.homeNotes.customTabs || []).find(function(t) { return t.id == tabId; });
    if (!tab) { app.innerHTML = '<div class="text-center py-16"><p style="color: var(--text-secondary);">Tab tidak ditemukan</p></div>'; return; }
    app.innerHTML = renderSkeleton();
    if (tab.url && (tab.url.startsWith('http://') || tab.url.startsWith('https://')) && tab.url.indexOf('/api/') !== 0 && tab.url.indexOf(API_BASE) !== 0) { app.innerHTML = '<div class="mb-4"><h1 class="text-2xl font-bold font-display mb-1">' + escapeHtml(tab.name) + '</h1></div><div class="card p-4" style="min-height: 70vh;"><iframe src="' + tab.url + '" style="width: 100%; height: 70vh; border: none; border-radius: 12px;" allowfullscreen></iframe></div>'; return; }
    var url = '/api/content?page=' + state.pagination.customTab + '&limit=20'; if (tab.genre) url += '&genre=' + encodeURIComponent(tab.genre);
    var data = await apiCall(url);
    if (data && data.success) { app.innerHTML = '<div class="mb-4"><h1 class="text-2xl font-bold font-display mb-1">' + escapeHtml(tab.name) + '</h1></div><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + data.data.content.map(renderContentCard).join('') + '</div>' + (data.data.totalPages > 1 ? renderPaginationWithFn(state.pagination.customTab, data.data.totalPages, function(p) { return 'customTabPage(' + tabId + ', ' + p + ')'; }) : ''); }
}
function customTabPage(tabId, page) { state.pagination.customTab = parseInt(page) || 1; renderCustomTabPage(tabId); window.scrollTo({ top: 0, behavior: 'smooth' }); }

async function renderGenrePage() {
    var app = document.getElementById('app');
    var promises = [apiCall('/api/genres'), apiCall('/api/countries')];
    var url = '/api/content?page=' + state.pagination.genre + '&limit=20'; if (state.selectedGenre) url += '&genre=' + encodeURIComponent(state.selectedGenre); if (state.selectedCountry) url += '&country=' + state.selectedCountry;
    promises.push(apiCall(url));
    var results = await Promise.all(promises); var genresData = results[0], countriesData = results[1], data = results[2];
    var availableGenres = genresData.success ? genresData.data.genres : []; var availableCountries = countriesData.success ? countriesData.data.countries : [];
    var selectedGenre = state.selectedGenre, selectedCountry = state.selectedCountry;
    var cards = data.success ? data.data.content.map(renderContentCard).join('') : '';
    var pagination = data.success ? renderPaginationWithFn(state.pagination.genre, data.data.totalPages, function(p) { return 'genrePage(' + p + ')'; }) : '';
    var genresHtml = '<div class="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-3"><button onclick="filterGenre(\'\')" class="tab-btn ' + (!selectedGenre ? 'active' : '') + '" style="white-space: nowrap; font-size: 12px; padding: 6px 12px;">Semua Genre</button>' + availableGenres.map(function(g) { return '<button onclick="filterGenre(\'' + escapeAttr(g) + '\')" class="tab-btn ' + (selectedGenre === g ? 'active' : '') + '" style="white-space: nowrap; font-size: 12px; padding: 6px 12px;">' + escapeHtml(g) + '</button>'; }).join('') + '</div>';
    var countryHtml = '<div class="country-filter-scroll scrollbar-hide"><button onclick="filterCountry(\'\')" class="tab-btn ' + (!selectedCountry ? 'active' : '') + '" style="white-space: nowrap; font-size: 12px; padding: 6px 12px;">🌍 Semua</button>' + availableCountries.map(function(c) { return '<button onclick="filterCountry(\'' + c + '\')" class="tab-btn ' + (selectedCountry === c ? 'active' : '') + '" style="white-space: nowrap; font-size: 12px; padding: 6px 12px;">' + getCountryFlag(c) + ' ' + c + '</button>'; }).join('') + '</div>';
    app.innerHTML = '<div class="mb-4"><h1 class="text-2xl font-bold font-display mb-1">Genre</h1></div>' + genresHtml + countryHtml + '<div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + cards + '</div>' + pagination;
}
function filterGenre(genre) { state.selectedGenre = genre; state.pagination.genre = 1; renderGenrePage(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function filterCountry(code) { state.selectedCountry = code; state.pagination.genre = 1; renderGenrePage(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function genrePage(page) { state.pagination.genre = parseInt(page) || 1; renderGenrePage(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

async function renderWatchPage(contentId) {
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    var results = await Promise.all([apiCall('/api/content/' + contentId), apiCall('/api/content/' + contentId + '/episodes')]);
    var seriesRes = results[0], episodesRes = results[1];
    if (!seriesRes.success) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-exclamation-triangle text-4xl mb-4" style="color: var(--danger);"></i><p class="mb-4" style="color: var(--text-secondary);">' + (seriesRes.error || 'Series tidak ditemukan') + '</p><button onclick="navigate(\'home\')" class="btn-primary">Kembali</button></div>'; return; }
    var series = seriesRes.data; var episodes = (episodesRes.success && episodesRes.data.episodes) ? episodesRes.data.episodes : [];
    state.currentSeries = series; state.currentEpisodes = episodes; state.currentEpisode = null; state.activeEpisodeId = null; state.episodeSearchQuery = ''; state.pendingCommentMedia = null;
    var tagParts = ['nonton drakor ' + series.title, 'streaming ' + series.title, 'download ' + series.title, series.title + ' sub indo'];
    if (series.genres && series.genres.length) tagParts = tagParts.concat(series.genres.map(function(g){ return 'drakor ' + g; })); if (series.country) tagParts.push('drakor ' + series.country); if (series.year) tagParts.push('drakor ' + series.year);
    var seoTitle = 'Nonton ' + series.title + (series.year ? ' (' + series.year + ')' : '') + ' Sub Indo';
    var seoDesc = series.description || ('Streaming ' + series.title + ' sub indo gratis kualitas HD di Fesstale Movie.');
    updatePageMeta(seoTitle, seoDesc.substring(0, 300), series.posterUrl || '', tagParts.join(', '));
    var isVip = isPremiumUser(); var isSeriesLocked = series.type === 'premium' && !isVip;
    var totalSeriesEps = series.totalEpisodes || series.total_episodes || episodes.length || 0;
    var latestSeriesEp = series.latestEpisodeNumber || series.latest_episode_number || (episodes.length ? Math.max.apply(null, episodes.map(function(e){return e.episodeNumber||0;})) : 0);
    var posterHtml = series.posterUrl ? '<img src="' + series.posterUrl + '" class="w-32 rounded-xl shadow-lg flex-shrink-0" style="aspect-ratio: 2/3; object-fit: cover;" oncontextmenu="return false;" draggable="false">' : '';
    var genresHtml = (series.genres || []).length > 0 ? '<div class="flex flex-wrap gap-1 mt-2">' + series.genres.map(function(g) { return '<span class="badge" style="background: rgba(124, 58, 237, 0.15); color: var(--accent);">' + escapeHtml(g) + '</span>'; }).join('') + '</div>' : '';
    var typeLabel = series.type === 'premium' ? 'VIP' : (series.type === 'coin' ? 'COIN' : 'FREE');
    var typeColor = series.type === 'premium' ? '#fbbf24' : (series.type === 'coin' ? '#8b5cf6' : '#10b981');
    var epInfo = ''; if (totalSeriesEps > 0) epInfo = '<span><i class="fa-solid fa-tv"></i> ' + latestSeriesEp + '/' + totalSeriesEps + ' Episode</span>';
    var episodesHtml = '';
    if (isSeriesLocked) { episodesHtml = '<div class="card p-6 text-center mb-5"><i class="fa-solid fa-crown text-4xl mb-3" style="color: #fbbf24;"></i><p class="font-bold mb-2">Series VIP</p><p class="text-sm mb-4" style="color: var(--text-secondary);">Upgrade ke VIP untuk menonton semua episode</p><button onclick="openVipModal()" class="btn-primary"><i class="fa-solid fa-crown mr-2"></i>Beli VIP</button></div>'; }
    else if (episodes.length === 0) { episodesHtml = '<div class="card p-8 text-center mb-5"><i class="fa-solid fa-inbox text-4xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">Belum ada episode. Cek lagi nanti ya!</p></div>'; }
    else {
        var episodeCards = episodes.map(function(ep) { return renderEpisodeCard(ep); }).join('');
        episodesHtml = '<div class="mb-5"><div class="flex items-center justify-between mb-3 flex-wrap gap-2"><h2 class="font-bold flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-list-ol" style="color: var(--accent);"></i>Daftar Episode <span class="text-xs font-normal" id="episodeCountLabel" style="color: var(--text-muted);">(' + episodes.length + ')</span></h2><div class="relative" style="width: 100%; max-width: 240px;"><i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs" style="color: var(--text-muted);"></i><input type="text" id="episodeSearchInput" class="input-modern" style="padding: 8px 12px 8px 32px; font-size: 12px;" placeholder="Cari episode..." oninput="filterEpisodeList(this.value)"></div></div><div id="episodeGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + episodeCards + '</div><p id="episodeEmptyState" class="text-center py-6 text-sm hidden" style="color: var(--text-muted);">Tidak ada episode yang cocok</p></div>';
    }
    var playerSectionHtml = '<div id="episodePlayerSection" class="mb-5"></div>';
    if (!state.user) { playerSectionHtml = '<div id="episodePlayerSection" class="mb-5"><div class="card p-6 text-center"><i class="fa-solid fa-lock text-4xl mb-3" style="color: var(--text-muted);"></i><p class="font-bold mb-2">Login untuk Menonton</p><p class="text-sm mb-4" style="color: var(--text-secondary);">Akun otomatis dari Telegram, klik tombol login</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div></div>'; }
    app.innerHTML = '<button onclick="navigate(\'home\')" class="flex items-center gap-2 text-sm mb-4" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali</span></button>' +
        '<div class="card p-5 mb-5"><div class="flex items-start gap-4">' + posterHtml + '<div class="flex-1 min-w-0"><h1 class="text-xl font-bold font-display mb-1">' + escapeHtml(series.title) + '</h1><div class="flex items-center gap-3 text-xs mb-2 flex-wrap" style="color: var(--text-secondary);">' + (series.year ? '<span>' + series.year + '</span>' : '') + (series.duration ? '<span>' + formatDuration(series.duration) + '</span>' : '') + (series.rating ? '<span><i class="fa-solid fa-star" style="color: #fbbf24;"></i> ' + Number(series.rating).toFixed(1) + '</span>' : '') + epInfo + '<span class="badge" style="background: ' + typeColor + '; color: white;">' + typeLabel + '</span></div>' + genresHtml + '</div></div>' + (series.description ? '<p class="text-sm leading-relaxed mt-4" style="color: var(--text-secondary);">' + escapeHtml(series.description) + '</p>' : '') + '</div>' + episodesHtml + playerSectionHtml +
        '<div class="mb-6"><h3 class="font-bold mb-3">Reaksi</h3><div id="reactionsSection" class="flex gap-2 overflow-x-auto scrollbar-hide pb-2"></div></div>' +
        '<div class="mb-6"><div class="flex items-center justify-between mb-3"><h3 class="font-bold">Komentar <span id="commentCount" class="text-sm font-normal" style="color: var(--text-muted);"></span></h3></div><div class="mb-3"><textarea id="commentInput" class="input-modern" rows="2" placeholder="Tulis komentar (maks 2000 karakter)..." maxlength="2000" oninput="updateCommentCounter(\'commentInput\', \'commentCounter\')"></textarea><div id="commentMediaArea" class="mt-2"></div><div class="flex justify-between items-center mt-2 flex-wrap gap-2"><div class="flex items-center gap-2"><span id="commentCounter" class="comment-counter">0 / 2000</span><button onclick="openCommentMediaPicker(\'series\', null)" class="comment-media-btn"><i class="fa-solid fa-image"></i>Foto</button></div><button onclick="submitComment(' + series.id + ')" class="btn-primary" style="padding: 8px 16px; font-size: 13px;">Kirim</button></div></div><div id="commentsList"></div><div id="commentsPagination"></div></div>' +
        '<div class="mb-6" id="drakorRecsSection"></div>';
    loadComments(series.id, 1); loadReactions(series.id); loadDrakorRecommendations(series.id);
    if (state.user && episodes.length > 0 && !isSeriesLocked) {
        var lastEpKey = LAST_EP_STORAGE_KEY + series.id; var lastEpId = parseInt(localStorage.getItem(lastEpKey) || '0');
        var resumeEp = episodes.find(function(e) { return e.id === lastEpId; }) || episodes[0];
        setTimeout(function() { loadEpisode(resumeEp.id); }, 200);
    }
}

function renderEpisodeCard(ep) {
    var thumb = ep.thumbnailUrl ? '<img src="' + ep.thumbnailUrl + '" class="episode-thumb" loading="lazy" oncontextmenu="return false;" draggable="false" alt="Episode ' + ep.episodeNumber + '">' : '<div class="episode-thumb flex items-center justify-center" style="background: var(--bg-secondary);"><i class="fa-solid fa-film text-3xl" style="color: var(--text-muted);"></i></div>';
    var vipBadge = ep.type === 'premium' ? '<div class="episode-vip-badge"><i class="fa-solid fa-crown"></i> VIP</div>' : (ep.type === 'coin' ? '<div class="episode-coin-badge"><i class="fa-solid fa-coins"></i> ' + ep.price + '</div>' : '');
    var durBadge = ep.duration ? '<div class="episode-duration-badge">' + formatDuration(ep.duration) + '</div>' : '';
    return '<div class="episode-card" id="episodeCard_' + ep.id + '" data-title="' + escapeAttr((ep.title || '').toLowerCase()) + '" data-num="' + ep.episodeNumber + '" onclick="loadEpisode(' + ep.id + ')"><div style="position: relative;">' + thumb + '<div class="episode-number-badge">Eps ' + ep.episodeNumber + '</div>' + vipBadge + durBadge + '</div><div class="episode-info"><p class="text-xs font-semibold line-clamp-2" style="color: var(--text-primary);">' + escapeHtml(ep.title) + '</p></div></div>';
}

function filterEpisodeList(query) {
    query = (query || '').toLowerCase().trim(); state.episodeSearchQuery = query;
    var cards = document.querySelectorAll('#episodeGrid .episode-card'); var shown = 0;
    cards.forEach(function(card) { var title = card.dataset.title || ''; var num = card.dataset.num || ''; if (!query || title.indexOf(query) !== -1 || num.indexOf(query) !== -1) { card.style.display = ''; shown++; } else { card.style.display = 'none'; } });
    var empty = document.getElementById('episodeEmptyState'); if (empty) { if (shown === 0) empty.classList.remove('hidden'); else empty.classList.add('hidden'); }
    var label = document.getElementById('episodeCountLabel'); if (label) label.textContent = '(' + shown + '/' + state.currentEpisodes.length + ')';
}

function toggleAutoNext(checked) { state.autoNextEnabled = !!checked; localStorage.setItem(AUTO_NEXT_STORAGE_KEY, state.autoNextEnabled ? 'true' : 'false'); showToast('Auto-next ' + (state.autoNextEnabled ? 'diaktifkan' : 'dimatikan'), 'info'); }

function autoNextEpisode() {
    var currentId = state.currentEpisode ? state.currentEpisode.id : null; if (!currentId || !state.currentEpisodes) return;
    var currentIdx = state.currentEpisodes.findIndex(function(e) { return e.id === currentId; });
    if (currentIdx >= 0 && currentIdx < state.currentEpisodes.length - 1) { var nextEp = state.currentEpisodes[currentIdx + 1]; showToast('▶️ Auto-next: Episode ' + nextEp.episodeNumber, 'info'); loadEpisode(nextEp.id); } else { showToast('🎉 Kamu sudah menonton episode terakhir!', 'success'); }
}

async function loadEpisode(episodeId) {
    if (!state.user) { handleAuthButton(); return; }
    destroyActivePlayer(); document.querySelectorAll('.episode-card').forEach(function(c) { c.classList.remove('active'); });
    var cardEl = document.getElementById('episodeCard_' + episodeId); if (cardEl) cardEl.classList.add('active');
    var section = document.getElementById('episodePlayerSection'); if (!section) return;
    section.innerHTML = '<div class="card p-4"><div class="skeleton h-48 w-full mb-3"></div><div class="skeleton h-6 w-1/2"></div></div>';
    var data = await apiCall('/api/episode/' + episodeId);
    if (!data.success) { section.innerHTML = '<div class="card p-4 text-center"><p class="text-sm" style="color: var(--danger);">' + (data.error || 'Gagal memuat episode') + '</p></div>'; return; }
    var ep = data.data; state.currentEpisode = ep; state.playerAds = ep.playerAds || [];
    if (state.currentSeries && state.currentSeries.id) { try { localStorage.setItem(LAST_EP_STORAGE_KEY + state.currentSeries.id, String(ep.id)); } catch (e) {} }
    var isLocked = ep.locked; var isVip = ep.isVipUser; var dailyWatch = ep.dailyWatch || {};
    var lockCard = ''; if (isLocked) lockCard = '<div class="card p-6 text-center"><i class="fa-solid fa-crown text-4xl mb-3" style="color: #fbbf24;"></i><p class="font-bold mb-2">Episode VIP</p><p class="text-sm mb-4" style="color: var(--text-secondary);">Upgrade ke VIP untuk menonton episode ini</p><button onclick="openVipModal()" class="btn-primary"><i class="fa-solid fa-crown mr-2"></i>Beli VIP</button></div>';
    var limitBadge = ''; if (!isVip && !isLocked) { var limitClass = dailyWatch.used >= dailyWatch.freeLimit ? 'danger' : (dailyWatch.used >= dailyWatch.freeLimit - 2 ? 'warning' : 'safe'); limitBadge = '<div class="daily-limit-badge ' + limitClass + ' mt-2"><i class="fa-solid fa-eye"></i> Limit: ' + dailyWatch.used + '/' + dailyWatch.freeLimit + ' (Gratis)</div>'; }
    var downloadBtnHtml = ''; if (!isLocked) { if (ep.downloadFree && !isPremiumUser()) downloadBtnHtml += '<button onclick="startDownload(\'' + escapeAttr(ep.downloadFree) + '\', \'free\')" class="download-btn"><i class="fa-solid fa-download"></i>Download</button>'; if (ep.downloadPremium && isVip) downloadBtnHtml += '<button onclick="startDownload(\'' + escapeAttr(ep.downloadPremium) + '\', \'premium\')" class="download-btn" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);"><i class="fa-solid fa-crown"></i>Premium DL</button>'; }
    var watchRow = '';
    if (!isLocked) {
        if (ep.type === 'coin' && !isVip) { var totalCost = (dailyWatch.needsPayment ? 100 : 0) + ep.price; watchRow = '<div class="flex gap-2 mb-3 flex-wrap"><button onclick="confirmBuyEpisode(' + ep.id + ', ' + totalCost + ')" class="watch-btn-main" style="background:linear-gradient(135deg,#8b5cf6,#6d28d9);box-shadow:0 6px 20px rgba(139,92,246,0.35);"><i class="fa-solid fa-coins"></i> Beli ' + totalCost + ' Koin</button>' + downloadBtnHtml + '</div>'; }
        else { var payCost = dailyWatch.needsPayment ? 100 : 0; var btnText = payCost > 0 ? '<i class="fa-solid fa-coins"></i> Tonton (' + payCost + ' Koin)' : '<i class="fa-solid fa-play"></i> Tonton Fullscreen'; watchRow = '<div class="flex gap-2 mb-3 flex-wrap"><button onclick="payAndPlayEpisode(' + ep.id + ', ' + payCost + ')" class="watch-btn-main">' + btnText + '</button>' + downloadBtnHtml + '</div>'; }
    }
    var thumbHtml = ep.thumbnailUrl ? '<img src="' + ep.thumbnailUrl + '" class="w-24 rounded-xl flex-shrink-0" style="aspect-ratio: 16/9; object-fit: cover;" oncontextmenu="return false;" draggable="false" alt="Thumb">' : '';
    var autoNextToggleHtml = '';
    if (!isLocked && state.currentEpisodes.length > 1) { var currentIdx = state.currentEpisodes.findIndex(function(e){ return e.id === ep.id; }); var hasNext = currentIdx >= 0 && currentIdx < state.currentEpisodes.length - 1; if (hasNext) { autoNextToggleHtml = '<div class="flex items-center gap-2 mb-2 p-2 rounded-lg" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><label class="flex items-center gap-2 text-xs cursor-pointer" style="flex:1;"><input type="checkbox" id="autoNextToggle" onchange="toggleAutoNext(this.checked)" ' + (state.autoNextEnabled ? 'checked' : '') + ' style="width:16px;height:16px;cursor:pointer;"><span style="color: var(--text-primary); font-weight: 500;"><i class="fa-solid fa-forward-step mr-1" style="color: var(--accent);"></i>Auto-next episode</span></label></div>'; } }
    section.innerHTML = '<div class="card p-4 animate-fade-up"><div class="flex items-start gap-3 mb-3">' + thumbHtml + '<div class="flex-1 min-w-0"><h3 class="font-bold text-lg mb-1">Eps ' + ep.episodeNumber + ' — ' + escapeHtml(ep.title) + '</h3>' + (ep.description ? '<p class="text-xs leading-relaxed" style="color: var(--text-secondary);">' + escapeHtml(ep.description) + '</p>' : '') + limitBadge + '</div></div>' + lockCard + watchRow + autoNextToggleHtml + renderNoteBanner(state.homeNotes.playerNote) + '<div id="playerSection" class="hidden" style="position: relative;"></div></div>';
}

async function confirmBuyEpisode(episodeId, totalCost) { if (!confirm('Beli episode ini dengan ' + totalCost + ' koin?\n\nKoin akan dipotong dari akunmu.')) return; await doPayAndPlayEpisode(episodeId); }
async function payAndPlayEpisode(episodeId, totalCost) { if (totalCost > 0) { if (!confirm('Nonton episode ini akan memotong ' + totalCost + ' koin. Lanjutkan?')) return; } await doPayAndPlayEpisode(episodeId); }
async function doPayAndPlayEpisode(episodeId) {
    showToast('Memproses...', 'info');
    var data = await apiCall('/api/episode/' + episodeId + '/pay', { method: 'POST' });
    if (data.success) {
        if (data.data && data.data.newKoin !== undefined) { state.user.koin = data.data.newKoin; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); }
        if (data.data && data.data.videoServers && state.currentEpisode) state.currentEpisode.videoServers = data.data.videoServers;
        if (data.data && data.data.dailyWatch && state.currentEpisode) state.currentEpisode.dailyWatch = data.data.dailyWatch;
        playEpisodePlayer(episodeId); showToast('Selamat menonton! 🎬', 'success');
    } else showToast(data.error || 'Gagal memproses pembayaran', 'error');
}

function playEpisodePlayer(episodeId) {
    var ep = state.currentEpisode;
    if (!ep || !ep.videoServers || ep.videoServers.length === 0) { showToast('Server tidak tersedia', 'error'); return; }
    var playerSection = document.getElementById('playerSection'); if (!playerSection) return;
    var servers = ep.videoServers; state.activeServerIndex = 0;
    var tabsHtml = servers.map(function(s, i) { var serverLabel = escapeHtml(s.name || s.server || ('Server ' + (i + 1))); var qualityMatch = serverLabel.match(/(\d{3,4}p)/i); var qualityBadge = qualityMatch ? '<span class="quality-badge">' + qualityMatch[1] + '</span>' : ''; var vipTag = s.isVip ? ' <i class="fa-solid fa-crown" style="font-size:9px;color:#fbbf24;"></i>' : ''; return '<button data-server-idx="' + i + '" onclick="playEpisodeServer(\'' + escapeAttr(s.url) + '\', ' + i + ', this)" class="tab-btn ' + (i === 0 ? 'active' : '') + '" style="white-space: nowrap; display: inline-flex; align-items: center; gap: 4px;">' + serverLabel + qualityBadge + vipTag + '</button>'; }).join('');
    playerSection.classList.remove('hidden'); playerSection.style.paddingBottom = '0'; playerSection.style.position = 'relative';
    playerSection.innerHTML = '<div style="margin-bottom: 10px;"><p class="text-xs font-semibold mb-2" style="color: var(--text-secondary);"><i class="fa-solid fa-server mr-1" style="color: var(--accent);"></i>Pilih Kualitas / Server <span class="text-[10px] font-normal" style="color: var(--text-muted);">(' + servers.length + ' tersedia)</span></p><div id="playerTabs" class="player-tabs-wrap">' + tabsHtml + '</div><button onclick="toggleFullscreen()" style="margin-top:8px;width:100%;padding:10px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:white;border:none;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 4px 12px rgba(139,92,246,0.35);"><i class="fa-solid fa-expand"></i>Fullscreen</button></div><div id="playerWrapper" class="player-wrapper-el"></div>';
    var wrapper = document.getElementById('playerWrapper');
    if (!isPremiumUser() && state.playerAds && state.playerAds.length > 0) showPlayerAd(servers[0].url, wrapper); else embedPlayer(servers[0].url, wrapper);
    playerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function playEpisodeServer(url, idx, btn) {
    state.activeServerIndex = idx;
    var tabs = document.getElementById('playerTabs'); if (tabs) tabs.querySelectorAll('.tab-btn').forEach(function(t) { t.classList.remove('active'); });
    if (btn) btn.classList.add('active'); else { var target = tabs ? tabs.querySelector('[data-server-idx="' + idx + '"]') : null; if (target) target.classList.add('active'); }
    var wrapper = document.getElementById('playerWrapper'); if (!wrapper) { var playerSection = document.getElementById('playerSection'); if (playerSection) { wrapper = document.createElement('div'); wrapper.id = 'playerWrapper'; wrapper.className = 'player-wrapper-el'; playerSection.appendChild(wrapper); } else return; }
    embedPlayer(url, wrapper);
}

async function loadDrakorRecommendations(seriesId) {
    var section = document.getElementById('drakorRecsSection'); if (!section) return;
    section.innerHTML = '<div class="skeleton h-6 w-1/3 mb-3"></div><div class="rec-drakor-scroll">' + Array.from({length: 5}).map(function() { return '<div class="skeleton" style="width:110px;height:165px;border-radius:10px;flex-shrink:0;"></div>'; }).join('') + '</div>';
    var data = await apiCall('/api/drakor-recommendations/' + seriesId);
    if (!data.success || !data.data.recommendations || data.data.recommendations.length === 0) { section.innerHTML = ''; return; }
    var items = data.data.recommendations.map(function(item) { var posterHtml = item.posterUrl ? '<img src="' + item.posterUrl + '" loading="lazy" oncontextmenu="return false;" draggable="false" alt="' + escapeAttr(item.title) + '">' : '<div style="width:110px;height:165px;border-radius:10px;background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-video" style="color:var(--text-muted);"></i></div>'; var epsBadge = item.latestEpisodeNumber ? '<div style="position:absolute;bottom:6px;right:6px;background:rgba(124,58,237,0.9);color:white;padding:2px 6px;border-radius:6px;font-size:9px;font-weight:800;">Eps ' + item.latestEpisodeNumber + '</div>' : ''; return '<div class="rec-drakor-item" onclick="navigate(\'watch/' + item.id + '\')"><div style="position:relative;">' + posterHtml + epsBadge + '</div><p class="text-[11px] font-semibold line-clamp-2 leading-snug mt-1" style="color: var(--text-primary);">' + escapeHtml(item.title) + '</p></div>'; }).join('');
    section.innerHTML = '<div class="card p-4 animate-fade-up"><h3 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-lightbulb" style="color: #fbbf24;"></i>Saran Drakor Lainnya</h3><div class="rec-drakor-scroll scrollbar-hide">' + items + '</div></div>';
}

function embedPlayer(url, container) {
    if (!container) return;
    destroyActivePlayer(); container.innerHTML = '';
    url = url.trim();
    var isM3u8 = url.indexOf('.m3u8') !== -1; var isMp4 = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
    if (isMp4 || isM3u8) {
        var video = document.createElement('video');
        video.controls = true; video.playsInline = true; video.preload = 'metadata';
        video.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback');
        video.setAttribute('disablePictureInPicture', 'true'); video.setAttribute('oncontextmenu', 'return false;'); video.setAttribute('draggable', 'false');
        video.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;';
        activeVideoEl = video;
        var resumeKey = RESUME_STORAGE_KEY + (state.currentEpisode ? state.currentEpisode.id : url);
        var savedTime = parseFloat(localStorage.getItem(resumeKey) || '0') || 0; var didResume = false;
        function tryResume(targetVideo) { if (didResume) return; if (savedTime > 10 && (!targetVideo.duration || savedTime < targetVideo.duration - 10)) { try { targetVideo.currentTime = savedTime; showToast('▶️ Melanjutkan dari ' + formatVideoTime(savedTime), 'info'); didResume = true; } catch (e) {} } else { didResume = true; } }
        var lastSaved = 0;
        video.ontimeupdate = function() { var t = Math.floor(video.currentTime); if (t > 5 && Math.abs(t - lastSaved) >= 5) { lastSaved = t; try { localStorage.setItem(resumeKey, String(t)); } catch (e) {} } };
        video.onended = function() { try { localStorage.removeItem(resumeKey); } catch (e) {} if (state.autoNextEnabled) autoNextEpisode(); };
        if (isM3u8 && typeof Hls !== 'undefined' && Hls.isSupported()) {
            var hls = new Hls({ enableWorker: true, lowLatencyMode: true, backBufferLength: 90 }); activeHlsInstance = hls;
            hls.loadSource(url); hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() { tryResume(video); video.play().catch(function(e) {}); });
            hls.on(Hls.Events.ERROR, function(event, data) { if (data.fatal) { if (data.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad(); else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError(); else hls.destroy(); } });
        } else { video.src = url; video.onloadedmetadata = function() { tryResume(video); video.play().catch(function(e) {}); }; }
        container.appendChild(video);
        if (savedTime > 10) { var badge = document.createElement('div'); badge.className = 'resume-badge'; badge.innerHTML = '<i class="fa-solid fa-play"></i> Lanjut dari ' + formatVideoTime(savedTime); container.appendChild(badge); setTimeout(function() { if (badge.parentNode) badge.style.display = 'none'; }, 4000); }
    } else {
        var iframe = document.createElement('iframe');
        iframe.src = url; iframe.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; iframe.allowFullscreen = true; iframe.referrerPolicy = 'origin';
        container.appendChild(iframe);
    }
    var shield = document.createElement('div'); shield.className = 'player-shield'; container.appendChild(shield);
}

function showPlayerAd(videoUrl, container) {
    if (isPremiumUser()) { embedPlayer(videoUrl, container); return; }
    if (!state.playerAds || state.playerAds.length === 0) { embedPlayer(videoUrl, container); return; }
    var now = new Date(); var validAds = state.playerAds.filter(function(ad) { if (ad.enabled === false) return false; if (ad.expiresAt && new Date(ad.expiresAt) <= now) return false; return true; });
    if (validAds.length === 0) { embedPlayer(videoUrl, container); return; }
    var ad = validAds[Math.floor(Math.random() * validAds.length)]; destroyActivePlayer(); container.innerHTML = '';
    var adOverlay = document.createElement('div'); adOverlay.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.95);';
    var adVideo = document.createElement('video'); adVideo.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';
    adVideo.autoplay = true; adVideo.playsInline = true; adVideo.muted = true; adVideo.src = ad.videoUrl; adVideo.setAttribute('controlsList', 'nodownload');
    var adLabel = document.createElement('div'); adLabel.style.cssText = 'position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.6); padding: 4px 10px; border-radius: 6px; font-size: 12px; color: white; font-weight: 600;'; adLabel.textContent = 'Sponsor';
    var skipBtn = document.createElement('button'); skipBtn.style.cssText = 'position: absolute; bottom: 20px; right: 20px; padding: 8px 16px; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 8px; cursor: not-allowed; font-size: 14px; font-weight: 600;';
    skipBtn.disabled = true; skipBtn.textContent = 'Skip dalam 5 detik';
    adOverlay.appendChild(adVideo); adOverlay.appendChild(adLabel); adOverlay.appendChild(skipBtn); container.appendChild(adOverlay);
    var skipCountdown = 5; var skipInterval = setInterval(function() { skipCountdown--; if (skipCountdown <= 0) { skipBtn.disabled = false; skipBtn.textContent = 'Skip Sponsor'; skipBtn.style.cursor = 'pointer'; skipBtn.style.background = 'rgba(124, 58, 237, 0.9)'; clearInterval(skipInterval); } else skipBtn.textContent = 'Skip dalam ' + skipCountdown + ' detik'; }, 1000);
    skipBtn.onclick = function() { if (skipBtn.disabled) return; clearInterval(skipInterval); embedPlayer(videoUrl, container); };
    adVideo.onended = function() { clearInterval(skipInterval); embedPlayer(videoUrl, container); };
    adVideo.onerror = function() { clearInterval(skipInterval); embedPlayer(videoUrl, container); };
    adVideo.play().catch(function(e) { clearInterval(skipInterval); embedPlayer(videoUrl, container); });
}

function startDownload(url, kind) {
    state.downloadUrl = url; state.downloadKind = kind || 'free';
    if (isPremiumUser() || kind === 'premium') { state.downloadStep = 4; document.getElementById('downloadStepOverlay').classList.remove('hidden'); document.body.style.overflow = 'hidden'; renderDownloadChallenge(); return; }
    state.downloadStep = 1; document.getElementById('downloadStepOverlay').classList.remove('hidden'); document.body.style.overflow = 'hidden'; renderDownloadChallenge();
}
function closeDownloadStep() { document.getElementById('downloadStepOverlay').classList.add('hidden'); document.body.style.overflow = ''; state.downloadStep = 0; state.downloadUrl = null; state.downloadKind = null; }
function shuffleArray(arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function renderDownloadChallenge() {
    var content = document.getElementById('downloadStepContent'); if (!content) return;
    var step = state.downloadStep;
    if (step > 3) { var isPremium = isPremiumUser() || state.downloadKind === 'premium'; content.innerHTML = '<div style="animation: pop 0.4s ease;"><div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #10b981, #059669);"><i class="fa-solid fa-check text-white text-2xl"></i></div><h3 class="font-bold text-lg mb-2">Download Siap!</h3><p class="text-sm mb-4" style="color: var(--text-secondary);">' + (isPremium ? 'Download premium tanpa iklan.' : 'Klik tombol di bawah untuk memulai.') + '</p><a href="' + state.downloadUrl + '" target="_blank" rel="noopener" style="display:block;padding:14px;border-radius:12px;font-weight:700;font-size:14px;background:linear-gradient(135deg,#10b981,#059669);color:white;text-decoration:none;margin-top:12px;"><i class="fa-solid fa-download mr-2"></i>Mulai Download</a><button onclick="closeDownloadStep()" style="width:100%;padding:12px;border-radius:12px;background:var(--bg-secondary);color:var(--text-secondary);border:1px solid var(--border-color);margin-top:8px;font-weight:600;">Tutup</button></div>'; return; }
    var downloadAds = (state.homeNotes.downloadAds || []).filter(function(a) { return a.enabled !== false && a.url; });
    var correctTexts = { 1: 'Download', 2: 'Lanjutkan', 3: 'Download Sekarang' }; var correctText = correctTexts[step] || 'Download';
    var buttons = [{ label: correctText, isCorrect: true, adUrl: null }]; var usedLabels = {}; usedLabels[correctText] = true;
    downloadAds.forEach(function(ad) { var label = (ad.text || '').trim() || 'Download'; if (!usedLabels[label]) { usedLabels[label] = true; buttons.push({ label: label, isCorrect: false, adUrl: ad.url }); } });
    if (buttons.length < 4) { var fallbacks = shuffleArray(['Verifikasi', 'Konfirmasi', 'Lanjut', 'Klik Disini', 'Mulai']); for (var j = 0; j < fallbacks.length && buttons.length < 4; j++) { if (usedLabels[fallbacks[j]]) continue; usedLabels[fallbacks[j]] = true; buttons.push({ label: fallbacks[j], isCorrect: false, adUrl: null }); } }
    buttons = shuffleArray(buttons);
    var colors = ['linear-gradient(135deg,#3b82f6,#2563eb)', 'linear-gradient(135deg,#ef4444,#dc2626)', 'linear-gradient(135deg,#8b5cf6,#6d28d9)', 'linear-gradient(135deg,#f97316,#ea580c)', 'linear-gradient(135deg,#10b981,#059669)']; var colorPool = shuffleArray(colors); var btnsHtml = '';
    buttons.forEach(function(btn, i) { var color = colorPool[i % colorPool.length]; var onclick = btn.isCorrect ? 'handleDownloadCorrect(this)' : 'handleDownloadWrong(this, \'' + escapeAttr(btn.adUrl || '') + '\')'; btnsHtml += '<button class="challenge-btn" style="background:' + color + ';" onclick="' + onclick + '">' + escapeHtml(btn.label) + '</button>'; });
    content.innerHTML = '<div style="margin-bottom: 12px;"><span class="badge" style="background: var(--accent); color: white; font-size: 11px; padding: 4px 12px;">Langkah ' + step + ' dari 3</span></div><div class="challenge-grid">' + btnsHtml + '</div>';
}
function handleDownloadCorrect(btn) { btn.classList.add('correct'); btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i>' + escapeHtml(btn.textContent); btn.disabled = true; setTimeout(function() { state.downloadStep++; renderDownloadChallenge(); }, 400); }
function handleDownloadWrong(btn, adUrl) { if (adUrl) { try { window.open(adUrl, '_blank'); } catch (e) {} } btn.classList.add('wrong'); btn.disabled = true; showToast('❌ Tombol salah! Coba lagi.', 'error'); setTimeout(function() { renderDownloadChallenge(); }, 1200); }

async function loadReactions(contentId) {
    var container = document.getElementById('reactionsSection'); if (!container) return;
    var data = await apiCall('/api/reactions/' + contentId); var reactions = data.success ? data.data.reactions : {};
    container.innerHTML = REACTION_TYPES.map(function(type) { var count = reactions[type] || 0; return '<button onclick="submitReaction(' + contentId + ', \'' + type + '\')" class="reaction-btn"><span class="reaction-emoji">' + REACTION_EMOJIS[type] + '</span><span class="reaction-label">' + REACTION_LABELS[type] + '</span><span class="text-xs font-bold" style="color: var(--accent);">' + count + '</span></button>'; }).join('');
}
async function submitReaction(contentId, reaction) { if (!state.user) { showToast('Login untuk memberi reaksi', 'error'); handleAuthButton(); return; } var data = await apiCall('/api/reactions/' + contentId, { method: 'POST', body: JSON.stringify({ reaction }) }); if (data.success) loadReactions(contentId); else showToast(data.error || 'Gagal', 'error'); }

function renderCommentItem(c, contentId, isReply, isGallery) {
    var size = isReply ? 40 : 48;
    var avatarHtml = renderMLBBAvatar({ username: c.username, avatarUrl: c.avatarUrl, borderUrl: c.borderUrl, borderScale: c.borderScale || 1.2, size: size, onClick: 'navigate(\'user/' + escapeAttr(c.username) + '\')' });
    var adminBadge = c.isAdmin ? '<span class="badge" style="background: rgba(239,68,68,0.2); color: #dc2626; font-size:9px;">ADMIN</span>' : '';
    var vipBadge = c.isVip ? '<span class="badge vip-badge" style="font-size:9px;">VIP</span>' : '';
    var verifiedCheck = c.isVerified ? VERIFIED_SVG : '';
    var levelPhoto = renderLevelPhoto(c.levelUrl, 32);
    var displayName = c.displayName || c.username;
    var canDelete = state.user && (state.user.id === c.userId || state.user.role === 'admin');
    var canEdit = state.user && state.user.id === c.userId;
    var deleteFn = isGallery ? 'deleteGalleryComment' : 'deleteComment';
    var replyToggleFn = isGallery ? 'toggleGalleryReplyBox' : 'toggleReplyBox';
    var submitReplyFn = isGallery ? 'submitGalleryReply' : 'submitReply';
    var toggleRepliesFn = isGallery ? 'toggleGalleryReplies' : 'toggleReplies';
    var counterKey = isGallery ? 'gallery_' : '';
    var deleteBtn = canDelete ? '<button onclick="' + deleteFn + '(' + c.id + ', ' + contentId + ')" class="text-xs" style="color: var(--danger);"><i class="fa-solid fa-trash text-[11px]"></i></button>' : '';
    var editBtn = canEdit ? '<button data-comment-id="' + c.id + '" data-content-id="' + contentId + '" data-is-gallery="' + (isGallery ? '1' : '0') + '" data-content="' + escapeAttrValue(c.content || '') + '" onclick="openEditCommentModalFromBtn(this)" class="text-xs" style="color: #06b6d4;"><i class="fa-solid fa-pen text-[11px]"></i></button>' : '';
    var replyBtn = !isReply && state.user ? '<button onclick="' + replyToggleFn + '(' + c.id + ')" class="text-xs font-medium" style="color: var(--accent);"><i class="fa-solid fa-reply mr-1"></i>Balas</button>' : '';
    var editedLabel = c.isEdited ? '<span class="text-[10px]" style="color: var(--text-muted);">(diedit)</span>' : '';
    var html = '<div class="' + (isReply ? 'mt-2 flex gap-3' : 'card p-3 mb-3 flex gap-3') + '"' + (isReply ? ' style="background: var(--bg-secondary); border-radius: 12px; padding: 10px;"' : '') + '>' + avatarHtml + '<div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1 flex-wrap"><span class="font-semibold text-sm cursor-pointer hover:underline" style="color: var(--text-primary);" onclick="navigate(\'user/' + escapeAttr(c.username) + '\')">' + escapeHtml(displayName) + '</span>' + verifiedCheck + adminBadge + vipBadge + levelPhoto + '</div>' + renderCommentBubble(c) + '<div class="flex items-center gap-3 mt-2 flex-wrap"><p class="text-[10px]" style="color: var(--text-muted);">' + c.createdAtWIB + '</p>' + editedLabel + replyBtn + editBtn + deleteBtn + '</div>' +
        '<div id="' + counterKey + 'replyBox_' + c.id + '" class="hidden mt-2"><textarea id="' + counterKey + 'replyInput_' + c.id + '" class="input-modern" rows="2" placeholder="Tulis balasan (maks 2000 karakter)..." maxlength="2000" oninput="updateCommentCounter(\'' + counterKey + 'replyInput_' + c.id + '\', \'' + counterKey + 'replyCounter_' + c.id + '\')" style="font-size: 13px; padding: 8px 12px;"></textarea><div id="' + counterKey + 'replyMediaArea_' + c.id + '" class="mt-2"></div><div class="flex justify-between items-center mt-2 flex-wrap gap-2"><div class="flex items-center gap-2"><span id="' + counterKey + 'replyCounter_' + c.id + '" class="comment-counter">0 / 2000</span><button onclick="openCommentMediaPicker(\'' + (isGallery ? 'gallery' : 'series') + '\', ' + c.id + ')" class="comment-media-btn"><i class="fa-solid fa-image"></i>Foto</button></div><div class="flex gap-2"><button onclick="' + submitReplyFn + '(' + c.id + ', ' + contentId + ')" class="btn-primary" style="padding: 6px 12px; font-size: 12px;">Kirim</button><button onclick="' + replyToggleFn + '(' + c.id + ')" class="btn-secondary" style="padding: 6px 12px; font-size: 12px;">Batal</button></div></div></div></div></div>';
    if (!isReply && c.replies && c.replies.length > 0) { html += '<div class="ml-12 mt-1"><button onclick="' + toggleRepliesFn + '(' + c.id + ')" class="text-xs font-semibold" style="color: var(--accent);" id="' + counterKey + 'replyToggle_' + c.id + '"><i class="fa-solid fa-caret-down mr-1"></i>Klik untuk melihat (' + c.replies.length + ') balasan</button></div>'; html += '<div id="' + counterKey + 'repliesContainer_' + c.id + '" class="reply-thread hidden">' + c.replies.map(function(r) { return renderCommentItem(r, contentId, true, isGallery); }).join('') + '</div>'; }
    return html;
}

function toggleReplies(commentId) { var container = document.getElementById('repliesContainer_' + commentId); var btn = document.getElementById('replyToggle_' + commentId); if (!container || !btn) return; if (container.classList.contains('hidden')) { container.classList.remove('hidden'); btn.innerHTML = '<i class="fa-solid fa-caret-up mr-1"></i>Sembunyikan balasan'; } else { container.classList.add('hidden'); btn.innerHTML = '<i class="fa-solid fa-caret-down mr-1"></i>Klik untuk melihat balasan'; } }

async function loadComments(contentId, page) {
    var container = document.getElementById('commentsList'); var paginationEl = document.getElementById('commentsPagination'); var countEl = document.getElementById('commentCount'); if (!container) return;
    var data = await apiCall('/api/comments/' + contentId + '?page=' + page);
    if (!data.success) { container.innerHTML = '<p class="text-sm text-center py-4" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
    state.pagination.comments = page; if (countEl) countEl.textContent = '(' + data.data.total + ')';
    if (data.data.comments.length > 0) container.innerHTML = data.data.comments.map(function(c) { return renderCommentItem(c, contentId, false, false); }).join(''); else container.innerHTML = '<p class="text-sm text-center py-4" style="color: var(--text-muted);">Belum ada komentar</p>';
    if (paginationEl) paginationEl.innerHTML = renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'commentsPage(' + p + ', ' + contentId + ')'; });
}
function commentsPage(page, contentId) { if (page < 1) return; loadComments(contentId, parseInt(page) || 1); }
function toggleReplyBox(commentId) { var box = document.getElementById('replyBox_' + commentId); if (!box) return; box.classList.toggle('hidden'); if (!box.classList.contains('hidden')) { var input = document.getElementById('replyInput_' + commentId); if (input) input.focus(); } }

async function submitComment(contentId) {
    if (!state.user) { showToast('Login untuk berkomentar', 'error'); handleAuthButton(); return; }
    var input = document.getElementById('commentInput'); var content = input.value.trim(); if (!content && !state.pendingCommentMedia) return;
    var body = { content: content, mediaUrl: state.pendingCommentMedia || null };
    var data = await apiCall('/api/comments/' + contentId, { method: 'POST', body: JSON.stringify(body) });
    if (data.success) { input.value = ''; state.pendingCommentMedia = null; var mArea = document.getElementById('commentMediaArea'); if (mArea) mArea.innerHTML = ''; var cnt = document.getElementById('commentCounter'); if (cnt) { cnt.textContent = '0 / 2000'; cnt.classList.remove('near-limit','at-limit'); } showToast('Komentar ditambahkan', 'success'); loadComments(contentId, 1); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } }
    else showToast(data.error || 'Gagal', 'error');
}
async function submitReply(parentId, contentId) {
    if (!state.user) { showToast('Login untuk membalas', 'error'); return; }
    var input = document.getElementById('replyInput_' + parentId); var content = input.value.trim(); var mediaUrl = state.pendingReplyMedia[parentId] || null; if (!content && !mediaUrl) return;
    var data = await apiCall('/api/comments/' + contentId, { method: 'POST', body: JSON.stringify({ content, parentId, mediaUrl }) });
    if (data.success) { input.value = ''; state.pendingReplyMedia[parentId] = null; var mArea = document.getElementById('replyMediaArea_' + parentId); if (mArea) mArea.innerHTML = ''; var cnt = document.getElementById('replyCounter_' + parentId); if (cnt) { cnt.textContent = '0 / 2000'; cnt.classList.remove('near-limit','at-limit'); } showToast('Balasan ditambahkan', 'success'); loadComments(contentId, state.pagination.comments); }
    else showToast(data.error || 'Gagal', 'error');
}

function openEditCommentModalFromBtn(btn) { var commentId = parseInt(btn.dataset.commentId); var contentId = parseInt(btn.dataset.contentId); var isGallery = btn.dataset.isGallery === '1'; var currentContent = btn.dataset.content || ''; openEditCommentModal(commentId, contentId, isGallery, currentContent); }
function openEditCommentModal(commentId, contentId, isGallery, currentContent) {
    var submitFn = isGallery ? 'submitEditGalleryCommentModal' : 'submitEditCommentModal';
    var html = '<div class="space-y-3"><textarea id="editCommentModalInput" class="input-modern" rows="5" maxlength="2000" style="font-size: 14px; padding: 12px 14px;" placeholder="Edit komentar..." oninput="updateCommentCounter(\'editCommentModalInput\', \'editCommentModalCounter\')">' + escapeHtml(currentContent || '') + '</textarea><div class="flex justify-between items-center flex-wrap gap-2"><span id="editCommentModalCounter" class="comment-counter">0 / 2000</span><div class="flex gap-2"><button onclick="closeInfoModal()" class="btn-secondary" style="padding: 8px 16px; font-size: 13px;">Batal</button><button onclick="' + submitFn + '(' + commentId + ', ' + contentId + ')" class="btn-primary" style="padding: 8px 16px; font-size: 13px;">Simpan</button></div></div></div>';
    showInfoModal('Edit Komentar', html);
    setTimeout(function() { var inp = document.getElementById('editCommentModalInput'); if (inp) { inp.focus(); updateCommentCounter('editCommentModalInput', 'editCommentModalCounter'); } }, 100);
}
async function submitEditCommentModal(commentId, contentId) {
    var input = document.getElementById('editCommentModalInput'); if (!input) return;
    var newContent = input.value.trim(); if (!newContent) { showToast('Komentar tidak boleh kosong', 'error'); return; } if (newContent.length > 2000) { showToast('Maksimal 2000 karakter', 'error'); return; }
    var data = await apiCall('/api/comments/edit/' + commentId, { method: 'PUT', body: JSON.stringify({ content: newContent }) });
    if (data.success) { closeInfoModal(); showToast('Komentar diedit', 'success'); loadComments(contentId, state.pagination.comments); } else showToast(data.error || 'Gagal', 'error');
}
async function submitEditGalleryCommentModal(commentId, postId) {
    var input = document.getElementById('editCommentModalInput'); if (!input) return;
    var newContent = input.value.trim(); if (!newContent) { showToast('Komentar tidak boleh kosong', 'error'); return; } if (newContent.length > 2000) { showToast('Maksimal 2000 karakter', 'error'); return; }
    var data = await apiCall('/api/gallery/comments/edit/' + commentId, { method: 'PUT', body: JSON.stringify({ content: newContent }) });
    if (data.success) { closeInfoModal(); showToast('Komentar diedit', 'success'); loadGalleryComments(postId, state.pagination.galleryComments); } else showToast(data.error || 'Gagal', 'error');
}
async function deleteComment(commentId, contentId) { if (!confirm('Hapus komentar ini?')) return; var data = await apiCall('/api/comments/delete/' + commentId, { method: 'DELETE' }); if (data.success) { showToast('Dihapus', 'success'); loadComments(contentId, state.pagination.comments); } else showToast(data.error || 'Gagal', 'error'); }

function openCommentMediaPicker(kind, parentId) {
    if (!state.user) { showToast('Login dulu', 'error'); handleAuthButton(); return; }
    var input = document.createElement('input'); input.type = 'file'; input.accept = 'image/*';
    input.onchange = async function(e) {
        var file = e.target.files[0]; if (!file) return;
        var okTypes = ['image/jpeg','image/png','image/webp','image/gif']; if (!okTypes.includes(file.type)) { showToast('Format harus JPEG/PNG/WEBP/GIF', 'error'); return; }
        if (file.size > MEDIA_MAX_MB * 1024 * 1024) { showToast('Maksimal ' + MEDIA_MAX_MB + 'MB', 'error'); return; }
        showToast('Mengunggah foto...', 'info');
        var formData = new FormData(); formData.append('image', file);
        try {
            var response = await fetch(API_BASE + '/api/upload/gyazo', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData });
            var data = await response.json(); if (!data.success) { showToast(data.error || 'Gagal upload', 'error'); return; }
            var url = data.data.url; var areaId = (kind === 'series' ? (parentId ? 'replyMediaArea_' + parentId : 'commentMediaArea') : (parentId ? 'gallery_replyMediaArea_' + parentId : 'galleryCommentMediaArea'));
            var area = document.getElementById(areaId); if (!area) return;
            area.innerHTML = '<div class="comment-media-preview"><img src="' + url + '" onclick="openImagePreview(\'' + url + '\')" oncontextmenu="return false;" draggable="false" alt="Media"><button class="comment-media-remove" onclick="removeCommentMedia(\'' + kind + '\', ' + (parentId || 'null') + ')"><i class="fa-solid fa-xmark"></i></button></div>';
            if (kind === 'series') { if (parentId) state.pendingReplyMedia[parentId] = url; else state.pendingCommentMedia = url; } else { if (parentId) state.pendingGalleryReplyMedia[parentId] = url; else state.pendingGalleryCommentMedia = url; }
            showToast('Foto terpasang', 'success');
        } catch (err) { showToast('Gagal: ' + err.message, 'error'); }
    };
    input.click();
}
function removeCommentMedia(kind, parentId) {
    var areaId = (kind === 'series' ? (parentId ? 'replyMediaArea_' + parentId : 'commentMediaArea') : (parentId ? 'gallery_replyMediaArea_' + parentId : 'galleryCommentMediaArea'));
    var area = document.getElementById(areaId); if (area) area.innerHTML = '';
    if (kind === 'series') { if (parentId) state.pendingReplyMedia[parentId] = null; else state.pendingCommentMedia = null; } else { if (parentId) state.pendingGalleryReplyMedia[parentId] = null; else state.pendingGalleryCommentMedia = null; }
}

function renderGalleryItemHtml(p, isAdmin) {
    var avatar = renderMLBBAvatar({ username: p.username, avatarUrl: p.avatar_url, borderUrl: p.border_url, borderScale: p.border_scale, size: 24 });
    var lvl = renderLevelPhoto(p.level_url, 26);
    var verifiedCheck = p.is_verified ? verifiedSvgSize('sm') : '';
    var nameHtml = '<span class="text-[10px] font-semibold flex-1 truncate cursor-pointer hover:underline" style="color: var(--text-primary);" onclick="event.stopPropagation(); navigate(\'user/' + escapeAttr(p.username) + '\')">' + escapeHtml(p.display_name || p.username) + '</span>' + verifiedCheck;
    var descHtml = p.description ? '<p class="px-2 pt-1 text-[11px] leading-snug" style="color: var(--text-secondary); word-break: break-word; display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">' + escapeHtml(p.description) + '</p>' : '';
    var adminDelBtn = isAdmin ? '<button onclick="event.stopPropagation(); adminDeleteGallery(' + p.id + ')" class="text-[10px] py-1 px-2 rounded" style="background: rgba(239,68,68,0.15); color: #dc2626;"><i class="fa-solid fa-trash"></i></button>' : '';
    var commentBtn = '<button onclick="event.stopPropagation(); navigate(\'gallery-detail/' + p.id + '\')" class="text-[10px] py-1 px-2 rounded" style="background: var(--bg-secondary); color: var(--text-secondary);" title="Lihat & Komentar"><i class="fa-solid fa-comment"></i>' + (p.comments_count ? ' ' + p.comments_count : '') + '</button>';
    var priceTag = ''; if (p.price > 0) priceTag = '<div class="gallery-price-tag"><i class="fa-solid fa-coins"></i> ' + formatKoin(p.price) + '</div>';
    var mediaUrls = p.mediaUrls || (p.image_url ? [p.image_url] : []); var mediaCount = mediaUrls.length; var firstImage = mediaUrls[0] || p.image_url;
    var multiBadge = mediaCount > 1 ? '<div class="story-multi-badge"><i class="fa-solid fa-images" style="font-size:9px;"></i>' + mediaCount + '</div>' : '';
    var imageHtml;
    if (p.locked) { imageHtml = '<div class="gallery-locked-wrap"><img src="' + firstImage + '" alt="" loading="lazy" class="locked-img" style="width:100%;display:block;" oncontextmenu="return false;" draggable="false"><div class="gallery-watermark"><span class="gallery-watermark-text">FESSTALE</span></div>' + multiBadge + '<div class="gallery-lock-overlay"><div class="gallery-lock-icon"><i class="fa-solid fa-lock"></i></div><div class="gallery-lock-price"><i class="fa-solid fa-coins mr-1"></i>' + formatKoin(p.price) + ' koin</div><div class="gallery-lock-label">Tap untuk beli</div></div></div>'; }
    else { imageHtml = '<div style="position:relative;"><img src="' + firstImage + '" alt="' + escapeHtml(p.description || '') + '" loading="lazy" onclick="openImagePreview(\'' + firstImage + '\')" oncontextmenu="return false;" draggable="false"><div class="gallery-watermark-subtle"><span class="gallery-watermark-subtle-text">FESSTALE</span></div>' + multiBadge + '</div>'; }
    var likeActive = p.userLiked ? 'color:#dc2626;' : ''; var saveActive = p.userSaved ? 'color:#06b6d4;' : '';
    return '<div class="masonry-item animate-fade-up" onclick="' + (p.locked ? 'promptBuyGallery(' + p.id + ', ' + p.price + ')' : 'navigate(\'gallery-detail/' + p.id + '\')') + '">' + priceTag + imageHtml + descHtml + '<div class="masonry-info">' + avatar + nameHtml + lvl + '</div><div class="px-2 pb-2 flex gap-2 items-center"><button onclick="event.stopPropagation(); galleryAction(' + p.id + ', \'like\')" class="flex-1 text-center text-[10px] py-1 rounded" style="background: var(--bg-secondary); ' + likeActive + '"><i class="fa-solid fa-heart"></i> ' + (p.likes_count || 0) + '</button><button onclick="event.stopPropagation(); galleryAction(' + p.id + ', \'save\')" class="flex-1 text-center text-[10px] py-1 rounded" style="background: var(--bg-secondary); ' + saveActive + '"><i class="fa-solid fa-bookmark"></i> ' + (p.saves_count || 0) + '</button>' + commentBtn + adminDelBtn + '</div></div>';
}

async function renderGalleryPage() {
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-lock text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk mengakses story</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    var user = state.user; var isAdmin = user && user.role === 'admin';
    app.innerHTML = '<div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold font-display">Story</h1><button onclick="openUploadGallery()" class="btn-primary" style="padding: 8px 16px; font-size: 13px;"><i class="fa-solid fa-plus mr-1"></i>Upload</button></div><div class="flex gap-2 mb-4 overflow-x-auto scrollbar-hide"><button onclick="switchGalleryTab(\'all\')" class="tab-btn ' + (state.galleryTab === 'all' ? 'active' : '') + '" style="white-space:nowrap;"><i class="fa-solid fa-circle-play mr-1"></i>Semua Story</button><button onclick="switchGalleryTab(\'saved\')" class="tab-btn ' + (state.galleryTab === 'saved' ? 'active' : '') + '" style="white-space:nowrap;"><i class="fa-solid fa-bookmark mr-1"></i>Tersimpan</button></div><div class="mb-4"><input type="text" id="gallerySearch" class="input-modern" placeholder="Cari story..." oninput="searchGallery()"></div><div id="galleryMasonry" class="masonry"></div>';
    loadGallery(1); loadStoryBadge();
    markStoryAsSeenNow();
}
function switchGalleryTab(tab) { state.galleryTab = tab; state.pagination.gallery = 1; renderGalleryPage(); }

async function loadGallery(page) {
    var container = document.getElementById('galleryMasonry'); if (!container) return;
    if (!state.user) { container.innerHTML = '<p class="text-center py-8" style="color: var(--text-muted);">Login dulu untuk melihat story.</p>'; return; }
    var q = document.getElementById('gallerySearch') ? document.getElementById('gallerySearch').value : '';
    var endpoint = state.galleryTab === 'saved' ? '/api/gallery/saved' : '/api/gallery';
    var data = await apiCall(endpoint + '?page=' + page + '&q=' + encodeURIComponent(q));
    if (!data.success) { container.innerHTML = '<p class="text-center py-8">Gagal memuat</p>'; return; }
    if (data.data.posts.length === 0) { container.innerHTML = '<p class="text-center py-8" style="color: var(--text-muted);">' + (state.galleryTab === 'saved' ? 'Belum ada story tersimpan' : 'Belum ada story') + '</p>'; return; }
    state.pagination.gallery = page; var isAdmin = state.user && state.user.role === 'admin';
    var html = data.data.posts.map(function(p) { return renderGalleryItemHtml(p, isAdmin); }).join('');
    html += renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'galleryPage(' + p + ')'; });
    container.innerHTML = html;
}
function galleryPage(page) { loadGallery(parseInt(page) || 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function searchGallery() { loadGallery(1); }

async function galleryAction(postId, action) {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    var data = await apiCall('/api/gallery/' + action + '/' + postId, { method: 'POST' });
    if (data.success) { if (state.currentPage && state.currentPage.indexOf('gallery-detail/') === 0) renderGalleryDetail(postId); else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername); else if (state.currentPage === 'profile') renderProfile(); else loadGallery(state.pagination.gallery); }
}
async function promptBuyGallery(postId, price) {
    if (!state.user) { showToast('Login dulu untuk beli', 'error'); handleAuthButton(); return; }
    if (!confirm('Beli story ini dengan ' + formatKoin(price) + ' koin?')) return;
    var data = await apiCall('/api/gallery/buy/' + postId, { method: 'POST' });
    if (data.success) { showToast('Berhasil membeli story! 🎉', 'success'); if (data.data && data.data.newKoin !== undefined) { state.user.koin = data.data.newKoin; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } if (state.currentPage && state.currentPage.indexOf('gallery-detail/') === 0) renderGalleryDetail(postId); else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername); else if (state.currentPage === 'profile') renderProfile(); else loadGallery(state.pagination.gallery); }
    else showToast(data.error || 'Gagal', 'error');
}
async function adminDeleteGallery(postId) { if (!confirm('Hapus story ini?')) return; var data = await apiCall('/api/admin/gallery/' + postId, { method: 'DELETE' }); if (data.success) { showToast('Story dihapus', 'success'); if (state.currentPage && state.currentPage.indexOf('gallery-detail/') === 0) navigate('gallery'); else loadGallery(state.pagination.gallery); } else showToast(data.error || 'Gagal', 'error'); }

async function renderGalleryDetail(postId) {
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-lock text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk mengakses story</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = renderSkeleton(); state.pendingGalleryCommentMedia = null; state.pendingGalleryReplyMedia = {};
    var data = await apiCall('/api/gallery/' + postId);
    if (!data.success) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-image text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Story tidak ditemukan</p><button onclick="navigate(\'gallery\')" class="btn-primary">Kembali ke Story</button></div>'; return; }
    var p = data.data.post; var isAdmin = state.user && state.user.role === 'admin';
    var avatar = renderMLBBAvatar({ username: p.username, avatarUrl: p.avatar_url, borderUrl: p.border_url, borderScale: p.border_scale, size: 44, onClick: 'navigate(\'user/' + escapeAttr(p.username) + '\')' });
    var lvl = renderLevelPhoto(p.level_url, 32); var verifiedCheck = p.is_verified ? verifiedSvgSize('lg') : '';
    var adminDelBtn = isAdmin ? '<button onclick="adminDeleteGallery(' + p.id + ')" class="btn-secondary" style="color:#dc2626;"><i class="fa-solid fa-trash mr-1"></i>Hapus</button>' : '';
    var mediaUrls = p.mediaUrls || (p.image_url ? [p.image_url] : []); var imageHtml = renderStoryMediaCarousel(mediaUrls, p.locked, p.price, p.id);
    var buyBtn = ''; if (p.locked) buyBtn = '<button onclick="promptBuyGallery(' + p.id + ', ' + p.price + ')" class="btn-primary flex-1" style="min-width: 120px;"><i class="fa-solid fa-coins mr-1"></i>Beli ' + formatKoin(p.price) + ' Koin</button>';
    var priceInfo = p.price > 0 ? '<p class="text-xs mt-1" style="color: #d97706;"><i class="fa-solid fa-coins"></i> Dijual ' + formatKoin(p.price) + ' koin' + (p.isOwner ? ' (milikmu)' : '') + '</p>' : '';
    var likeActive = p.userLiked ? 'color:#dc2626;' : ''; var saveActive = p.userSaved ? 'color:#06b6d4;' : '';
    app.innerHTML = '<button onclick="navigate(\'gallery\')" class="flex items-center gap-2 text-sm mb-4" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali ke Story</span></button>' +
        '<div class="card overflow-hidden mb-4 animate-fade-up">' + imageHtml +
        (p.description ? '<div class="p-4"><p class="text-sm leading-relaxed" style="color: var(--text-secondary);">' + escapeHtml(p.description) + '</p></div>' : '') +
        '<div class="p-4 flex items-center gap-3" style="border-top: 1px solid var(--border-color);">' + avatar + '<div class="flex-1 min-w-0"><p class="font-semibold text-sm cursor-pointer hover:underline flex items-center gap-1" style="color: var(--text-primary);" onclick="navigate(\'user/' + escapeAttr(p.username) + '\')">' + escapeHtml(p.display_name || p.username) + verifiedCheck + '</p><p class="text-[10px]" style="color: var(--text-muted);">' + formatDateWIB(p.created_at) + '</p>' + priceInfo + '</div>' + lvl + '</div>' +
        '<div class="px-4 pb-4 flex gap-2 flex-wrap">' + buyBtn + '<button onclick="galleryAction(' + p.id + ', \'like\')" class="btn-secondary flex-1" style="min-width: 100px; ' + likeActive + '"><i class="fa-solid fa-heart mr-1"></i>' + (p.likes_count || 0) + '</button><button onclick="galleryAction(' + p.id + ', \'save\')" class="btn-secondary flex-1" style="min-width: 100px; ' + saveActive + '"><i class="fa-solid fa-bookmark mr-1"></i>' + (p.saves_count || 0) + '</button><button onclick="shareGalleryDetail(' + p.id + ')" class="btn-secondary flex-1" style="min-width: 100px;"><i class="fa-solid fa-share mr-1"></i>Share</button>' + adminDelBtn + '</div></div>' +
        '<div class="gallery-comment-section card p-4"><div class="flex items-center justify-between mb-3"><h3 class="font-bold"><i class="fa-solid fa-comments mr-2" style="color: var(--accent);"></i>Komentar <span id="galleryCommentCount" class="text-sm font-normal" style="color: var(--text-muted);"></span></h3></div><div class="mb-3"><textarea id="galleryCommentInput" class="input-modern" rows="2" placeholder="Tulis komentar (maks 2000 karakter)..." maxlength="2000" oninput="updateCommentCounter(\'galleryCommentInput\', \'galleryCommentCounter\')"></textarea><div id="galleryCommentMediaArea" class="mt-2"></div><div class="flex justify-between items-center mt-2 flex-wrap gap-2"><div class="flex items-center gap-2"><span id="galleryCommentCounter" class="comment-counter">0 / 2000</span><button onclick="openCommentMediaPicker(\'gallery\', null)" class="comment-media-btn"><i class="fa-solid fa-image"></i>Foto</button></div><button onclick="submitGalleryComment(' + p.id + ')" class="btn-primary" style="padding: 8px 16px; font-size: 13px;">Kirim</button></div></div><div id="galleryCommentsList"></div><div id="galleryCommentsPagination"></div></div>';
    loadGalleryComments(p.id, 1);
}

function shareGalleryDetail(postId) { var url = window.location.origin + '/story?id=' + postId; if (navigator.share) navigator.share({ title: 'Story Fesstale', url: url }).catch(function() {}); else { navigator.clipboard.writeText(url); showToast('Link story disalin!', 'success'); } }

async function loadGalleryComments(postId, page) {
    var container = document.getElementById('galleryCommentsList'); var paginationEl = document.getElementById('galleryCommentsPagination'); var countEl = document.getElementById('galleryCommentCount'); if (!container) return;
    var data = await apiCall('/api/gallery/' + postId + '/comments?page=' + page);
    if (!data.success) { container.innerHTML = '<p class="text-sm text-center py-4" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
    state.pagination.galleryComments = page; if (countEl) countEl.textContent = '(' + data.data.total + ')';
    if (data.data.comments.length > 0) container.innerHTML = data.data.comments.map(function(c) { return renderCommentItem(c, postId, false, true); }).join(''); else container.innerHTML = '<p class="text-sm text-center py-4" style="color: var(--text-muted);">Belum ada komentar</p>';
    if (paginationEl) paginationEl.innerHTML = renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'galleryCommentsPage(' + p + ', ' + postId + ')'; });
}
function galleryCommentsPage(page, postId) { if (page < 1) return; loadGalleryComments(postId, parseInt(page) || 1); }
function toggleGalleryReplyBox(commentId) { var box = document.getElementById('gallery_replyBox_' + commentId); if (!box) return; box.classList.toggle('hidden'); if (!box.classList.contains('hidden')) { var input = document.getElementById('gallery_replyInput_' + commentId); if (input) input.focus(); } }
function toggleGalleryReplies(commentId) { var container = document.getElementById('gallery_repliesContainer_' + commentId); var btn = document.getElementById('gallery_replyToggle_' + commentId); if (!container || !btn) return; if (container.classList.contains('hidden')) { container.classList.remove('hidden'); btn.innerHTML = '<i class="fa-solid fa-caret-up mr-1"></i>Sembunyikan balasan'; } else { container.classList.add('hidden'); btn.innerHTML = '<i class="fa-solid fa-caret-down mr-1"></i>Klik untuk melihat balasan'; } }

async function submitGalleryComment(postId) {
    if (!state.user) { showToast('Login untuk berkomentar', 'error'); handleAuthButton(); return; }
    var input = document.getElementById('galleryCommentInput'); var content = input.value.trim(); if (!content && !state.pendingGalleryCommentMedia) return;
    var body = { content: content, mediaUrl: state.pendingGalleryCommentMedia || null };
    var data = await apiCall('/api/gallery/' + postId + '/comments', { method: 'POST', body: JSON.stringify(body) });
    if (data.success) { input.value = ''; state.pendingGalleryCommentMedia = null; var mArea = document.getElementById('galleryCommentMediaArea'); if (mArea) mArea.innerHTML = ''; var cnt = document.getElementById('galleryCommentCounter'); if (cnt) { cnt.textContent = '0 / 2000'; cnt.classList.remove('near-limit','at-limit'); } showToast('Komentar ditambahkan', 'success'); loadGalleryComments(postId, 1); }
    else showToast(data.error || 'Gagal', 'error');
}
async function submitGalleryReply(parentId, postId) {
    if (!state.user) { showToast('Login untuk membalas', 'error'); return; }
    var input = document.getElementById('gallery_replyInput_' + parentId); var content = input.value.trim(); var mediaUrl = state.pendingGalleryReplyMedia[parentId] || null; if (!content && !mediaUrl) return;
    var data = await apiCall('/api/gallery/' + postId + '/comments', { method: 'POST', body: JSON.stringify({ content, parentId, mediaUrl }) });
    if (data.success) { input.value = ''; state.pendingGalleryReplyMedia[parentId] = null; var mArea = document.getElementById('gallery_replyMediaArea_' + parentId); if (mArea) mArea.innerHTML = ''; var cnt = document.getElementById('gallery_replyCounter_' + parentId); if (cnt) { cnt.textContent = '0 / 2000'; cnt.classList.remove('near-limit','at-limit'); } showToast('Balasan ditambahkan', 'success'); loadGalleryComments(postId, state.pagination.galleryComments); }
    else showToast(data.error || 'Gagal', 'error');
}
async function deleteGalleryComment(commentId, postId) { if (!confirm('Hapus komentar ini?')) return; var data = await apiCall('/api/gallery/comments/delete/' + commentId, { method: 'DELETE' }); if (data.success) { showToast('Dihapus', 'success'); loadGalleryComments(postId, state.pagination.galleryComments); } else showToast(data.error || 'Gagal', 'error'); }

function openUploadGallery() {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    state.pendingGalleryFiles = [];
    var html = '<div class="space-y-4"><div class="p-3 rounded-xl" style="background: linear-gradient(135deg, rgba(124,58,237,0.10), rgba(139,92,246,0.06)); border: 1px solid rgba(124,58,237,0.25);"><p class="text-xs flex items-center gap-2" style="color: var(--text-secondary);"><i class="fa-solid fa-coins" style="color:#fbbf24;"></i><strong>Upload story = +20 koin & EXP!</strong></p><p class="text-[10px] mt-1" style="color: var(--text-muted);"><i class="fa-solid fa-images mr-1"></i>Bisa upload <strong>beberapa foto sekaligus</strong> — tampil sebagai carousel.</p></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">File Gambar (Multi-upload, maks 10) *</label><input type="file" id="galleryFile" accept="image/jpeg,image/png,image/webp,image/gif" multiple class="input-modern" style="padding: 8px;" onchange="handleGalleryFileSelect(this)"><div id="galleryFilePreview" class="mt-2"></div></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Deskripsi / Caption <span id="captionCount" style="float:right; color:var(--text-muted);">0 / 2000</span></label><textarea id="galleryDesc" class="input-modern" rows="3" placeholder="Deskripsi story (caption)..." maxlength="2000" oninput="document.getElementById(\'captionCount\').textContent = this.value.length + \' / 2000\'"></textarea></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Harga (Koin) — 0 = Gratis</label><input type="number" id="galleryPrice" class="input-modern" placeholder="0" min="0" max="1000000" value="0" oninput="updateGalleryPriceHint()"><p class="text-[10px] mt-1" id="galleryPriceHint" style="color: var(--text-muted);">Kosongkan atau isi 0 untuk gratis. Max 1.000.000 koin.</p></div>' +
        '<div class="flex gap-2"><button onclick="submitGallery()" class="btn-primary flex-1" id="uploadGalleryBtn"><i class="fa-solid fa-plus mr-1"></i>Upload Story</button><button onclick="closeInfoModal()" class="btn-secondary">Batal</button></div></div>';
    showInfoModal('Upload Story', html);
}
function updateGalleryPriceHint() {
    var priceInput = document.getElementById('galleryPrice'); var hint = document.getElementById('galleryPriceHint'); if (!priceInput || !hint) return;
    var v = parseInt(priceInput.value) || 0;
    if (v <= 0) { hint.textContent = 'Story akan tampil GRATIS untuk semua user.'; hint.style.color = 'var(--text-muted)'; }
    else if (v > 1000000) { hint.textContent = '⚠️ Maksimal 1.000.000 koin!'; hint.style.color = '#dc2626'; }
    else { hint.textContent = '🔒 Story akan dispoiler & dijual ' + formatKoin(v) + ' koin. Kamu terima 100% saat terjual.'; hint.style.color = '#d97706'; }
}
async function submitGallery() {
    var fileInput = document.getElementById('galleryFile');
    var files = (state.pendingGalleryFiles && state.pendingGalleryFiles.length > 0) ? state.pendingGalleryFiles : (fileInput && fileInput.files ? Array.from(fileInput.files) : []);
    var descEl = document.getElementById('galleryDesc'); var priceEl = document.getElementById('galleryPrice');
    var desc = descEl ? descEl.value.trim() : ''; var priceRaw = priceEl ? priceEl.value : '0'; var price = parseInt(priceRaw) || 0;
    if (!files || files.length === 0) { showToast('Pilih minimal 1 file', 'error'); return; }
    if (files.length > 10) { showToast('Maksimal 10 foto per story', 'error'); return; }
    if (desc.length > 2000) { showToast('Caption maksimal 2000 karakter', 'error'); return; }
    if (price < 0 || price > 1000000) { showToast('Harga harus 0 - 1.000.000 koin', 'error'); return; }
    var btn = document.getElementById('uploadGalleryBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading ' + files.length + ' foto...';
    var formData = new FormData(); for (var i = 0; i < files.length; i++) formData.append('image', files[i]); formData.append('description', desc); formData.append('price', String(price));
    try {
        var response = await fetch(API_BASE + '/api/gallery/upload', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData });
        var data = await response.json();
        if (data.success) { showToast(data.message || 'Berhasil!', 'success'); state.pendingGalleryFiles = []; closeInfoModal(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } if (state.currentPage === 'profile') renderProfile(); else if (state.currentPage === 'gallery') loadGallery(1); loadFooterStats(); loadStoryBadge(); }
        else { showToast(data.error || 'Gagal', 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-plus mr-1"></i>Upload Story'; }
    } catch (e) { showToast('Gagal: ' + e.message, 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-plus mr-1"></i>Upload Story'; }
}

async function renderPartyPage() {
    destroyActivePlayer(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; } currentParty = null; partyVideoEl = null; partyHls = null;
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-users-rectangle text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk mengakses Room Party</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = '<div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold font-display"><i class="fa-solid fa-users-rectangle mr-1" style="color:var(--accent);"></i>Room Party</h1><button onclick="openCreatePartyModal()" class="btn-primary" style="padding:8px 16px;font-size:13px;"><i class="fa-solid fa-plus mr-1"></i>Buat Room</button></div>' +
        '<div class="card p-4 mb-4"><h3 class="font-bold text-sm mb-2"><i class="fa-solid fa-key mr-1" style="color:var(--accent);"></i>Join via Kode</h3><div class="flex gap-2"><input type="text" id="joinPartyCode" class="input-modern flex-1" placeholder="Kode room (6 karakter)" maxlength="10" style="text-transform:uppercase;letter-spacing:4px;text-align:center;font-weight:800;font-size:16px;" onkeydown="if(event.key===\'Enter\')joinPartyByCode()"><button onclick="joinPartyByCode()" class="btn-primary" style="padding:12px 20px;"><i class="fa-solid fa-arrow-right"></i></button></div></div>' +
        '<div class="mb-3"><h2 class="font-bold mb-2">Room Publik Aktif</h2><p class="text-[10px] mb-2" style="color:var(--text-muted);"><i class="fa-solid fa-info-circle mr-1"></i>Room private tidak muncul di sini — join pakai kode.</p><div id="partyRoomsList"><div class="skeleton h-20"></div></div></div>';
    loadPartyRooms();
}

async function loadPartyRooms() {
    var container = document.getElementById('partyRoomsList'); if (!container) return;
    var data = await apiCall('/api/party/rooms');
    if (!data.success || !data.data.rooms || data.data.rooms.length === 0) { container.innerHTML = '<div class="card p-6 text-center"><i class="fa-solid fa-inbox text-3xl mb-2" style="color:var(--text-muted);"></i><p class="text-sm" style="color:var(--text-secondary);">Belum ada room publik aktif. Buat room pertama!</p></div>'; return; }
    container.innerHTML = data.data.rooms.map(function(r) { var avatar = r.host_avatar ? '<img src="' + r.host_avatar + '" style="width:40px;height:40px;border-radius:50%;object-fit:cover;" oncontextmenu="return false;" draggable="false">' : '<div style="width:40px;height:40px;border-radius:50%;background:' + getAvatarColor(r.host_username) + ';display:flex;align-items:center;justify-content:center;color:white;font-weight:700;">' + escapeHtml(r.host_username.charAt(0).toUpperCase()) + '</div>'; return '<div class="party-room-card flex items-center gap-3" onclick="doJoinParty(\'' + r.code + '\')">' + avatar + '<div class="flex-1 min-w-0"><p class="font-semibold text-sm truncate">' + escapeHtml(r.title) + '</p><p class="text-[10px]" style="color:var(--text-muted);">Host: ' + escapeHtml(r.host_display_name || r.host_username) + ' • ' + (r.member_count || 1) + ' member</p><div class="mt-1 flex items-center gap-2 flex-wrap"><span class="party-code-badge"><i class="fa-solid fa-key" style="font-size:9px;"></i>' + r.code + '</span><span class="party-public-badge"><i class="fa-solid fa-globe"></i>PUBLIC</span></div></div><i class="fa-solid fa-chevron-right" style="color:var(--text-muted);"></i></div>'; }).join('');
}

async function joinPartyByCode() { var input = document.getElementById('joinPartyCode'); if (!input) return; var code = (input.value || '').trim().toUpperCase(); if (!code || code.length < 4) { showToast('Masukkan kode room (min 4 karakter)', 'error'); return; } await doJoinParty(code); }
async function doJoinParty(code) { showToast('Bergabung ke room...', 'info'); var data = await apiCall('/api/party/join/' + code, { method: 'POST' }); if (data.success) { navigate('party-room/' + code); } else { showToast(data.error || 'Gagal join room', 'error'); } }

async function openCreatePartyModal() {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    state.partyCreateSelectedSeries = null; state.partyCreateVideoUrl = '';
    var html = '<div class="space-y-3">' +
        '<div><label class="block text-xs font-medium mb-2" style="color:var(--text-secondary);">Judul Room</label><input type="text" id="partyTitle" class="input-modern" placeholder="Contoh: Nonton Bareng" maxlength="80" value="Watch Party"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color:var(--text-secondary);">Tipe Room</label><div class="flex gap-2"><label class="flex-1 flex items-center gap-2 p-3 rounded-xl cursor-pointer" style="background:var(--bg-secondary);border:1.5px solid var(--border-color);"><input type="radio" name="partyVisibility" value="public" checked><div><p class="text-xs font-semibold" style="color:var(--text-primary);">🌍 Publik</p><p class="text-[10px]" style="color:var(--text-muted);">Muncul di daftar</p></div></label><label class="flex-1 flex items-center gap-2 p-3 rounded-xl cursor-pointer" style="background:var(--bg-secondary);border:1.5px solid var(--border-color);"><input type="radio" name="partyVisibility" value="private"><div><p class="text-xs font-semibold" style="color:var(--text-primary);">🔒 Private</p><p class="text-[10px]" style="color:var(--text-muted);">Hanya join by code</p></div></label></div></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color:var(--text-secondary);">Pilih Series (opsional)</label><input type="text" id="partySeriesSearch" class="input-modern mb-2" placeholder="Cari series..." oninput="filterPartySeriesOptions(this.value)"><div id="partySeriesList" class="max-h-48 overflow-y-auto"><p class="text-xs text-center py-4" style="color:var(--text-muted);">Loading...</p></div></div>' +
        '<div id="partyEpisodeSelectWrap" class="hidden"><label class="block text-xs font-medium mb-2" style="color:var(--text-secondary);">Pilih Episode</label><select id="partyEpisodeSelect" class="input-modern" onchange="loadPartyEpisodeUrl()"><option value="">-- Pilih Episode --</option></select></div>' +
        '<div id="partyManualUrlWrap"><label class="block text-xs font-medium mb-2" style="color:var(--text-secondary);">URL Video Manual <span class="text-[10px]" style="color:var(--text-muted);">(hidden, tidak ditampilkan)</span></label><input type="password" id="partyVideoUrl" class="input-modern" placeholder="https://...m3u8 atau .mp4" autocomplete="off"><p class="text-[10px] mt-1" style="color:var(--text-muted);"><i class="fa-solid fa-shield-halved mr-1"></i>URL disembunyikan untuk keamanan.</p></div>' +
        '<div class="flex gap-2"><button onclick="submitCreateParty()" class="btn-primary flex-1"><i class="fa-solid fa-plus mr-1"></i>Buat Room</button><button onclick="closeInfoModal()" class="btn-secondary">Batal</button></div></div>';
    showInfoModal('Buat Room Party', html);
    loadPartySeriesOptions();
}

async function loadPartySeriesOptions() {
    var container = document.getElementById('partySeriesList'); if (!container) return;
    var data = await apiCall('/api/content?page=1&limit=200');
    var seriesList = (data.success && data.data.content) ? data.data.content : [];
    if (seriesList.length === 0) { container.innerHTML = '<p class="text-xs text-center py-4" style="color:var(--text-muted);">Belum ada series</p>'; return; }
    container.innerHTML = seriesList.map(function(s) { return '<div class="party-series-option" data-title="' + escapeAttr((s.title || '').toLowerCase()) + '" data-id="' + s.id + '" onclick="selectPartySeries(' + s.id + ', \'' + escapeAttr(s.title) + '\')"><i class="fa-solid fa-film" style="color:var(--accent);"></i><div class="flex-1 min-w-0"><p class="text-xs font-semibold truncate" style="color:var(--text-primary);">' + escapeHtml(s.title) + '</p><p class="text-[10px]" style="color:var(--text-muted);">' + (s.totalEpisodes || 0) + ' episode</p></div></div>'; }).join('');
}
function filterPartySeriesOptions(query) { query = (query || '').toLowerCase().trim(); document.querySelectorAll('#partySeriesList .party-series-option').forEach(function(el) { var title = el.dataset.title || ''; if (!query || title.indexOf(query) !== -1) el.style.display = ''; else el.style.display = 'none'; }); }
async function selectPartySeries(seriesId, title) {
    state.partyCreateSelectedSeries = seriesId;
    document.querySelectorAll('#partySeriesList .party-series-option').forEach(function(el) { el.classList.toggle('selected', parseInt(el.dataset.id) === seriesId); });
    var wrap = document.getElementById('partyEpisodeSelectWrap'); var sel = document.getElementById('partyEpisodeSelect');
    wrap.classList.remove('hidden'); sel.innerHTML = '<option value="">Loading...</option>';
    var data = await apiCall('/api/content/' + seriesId + '/episodes');
    if (data.success && data.data.episodes && data.data.episodes.length > 0) { sel.innerHTML = '<option value="">-- Pilih Episode --</option>' + data.data.episodes.map(function(e) { return '<option value="' + e.id + '">Eps ' + e.episodeNumber + ' — ' + escapeHtml(e.title) + '</option>'; }).join(''); }
    else { sel.innerHTML = '<option value="">Tidak ada episode</option>'; }
}
async function loadPartyEpisodeUrl() {
    var epId = document.getElementById('partyEpisodeSelect').value; if (!epId) return;
    var data = await apiCall('/api/episode/' + epId);
    if (data.success && data.data.videoServers && data.data.videoServers.length > 0) { document.getElementById('partyVideoUrl').value = data.data.videoServers[0].url; }
}

async function submitCreateParty() {
    var title = document.getElementById('partyTitle').value.trim() || 'Watch Party';
    var visibility = (document.querySelector('input[name="partyVisibility"]:checked') || {}).value || 'public';
    var seriesId = state.partyCreateSelectedSeries;
    var episodeId = document.getElementById('partyEpisodeSelect') ? document.getElementById('partyEpisodeSelect').value : null;
    var videoUrl = document.getElementById('partyVideoUrl').value.trim();
    if (!videoUrl) { showToast('URL video wajib diisi', 'error'); return; }
    var data = await apiCall('/api/party/create', { method: 'POST', body: JSON.stringify({ title: title, contentId: seriesId ? parseInt(seriesId) : null, episodeId: episodeId ? parseInt(episodeId) : null, videoUrl: videoUrl, visibility: visibility }) });
    if (data.success) { closeInfoModal(); showToast('✅ Room dibuat! Kode: ' + data.data.code, 'success'); navigate('party-room/' + data.data.code); }
    else showToast(data.error || 'Gagal', 'error');
}

async function renderPartyRoomPage(code) {
    destroyActivePlayer(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; }
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><p>Login dulu</p></div>'; return; }
    app.innerHTML = renderSkeleton();
    var data = await apiCall('/api/party/' + code + '/state');
    if (!data.success) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-exclamation-triangle text-4xl mb-4" style="color:var(--danger);"></i><p class="mb-4">' + (data.error || 'Room tidak ditemukan') + '</p><button onclick="navigate(\'party\')" class="btn-primary">Kembali</button></div>'; return; }
    currentParty = { code: code, data: data.data, isHost: data.data.room.isHost }; lastPartySeq = data.data.state.action_seq || 0;
    var isHost = data.data.room.isHost;
    app.innerHTML = '<button onclick="leavePartyRoom()" class="flex items-center gap-2 text-sm mb-3" style="color:var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Keluar Room</span></button>' +
        '<div class="card p-3 mb-3 flex items-center justify-between flex-wrap gap-2"><div><h2 class="font-bold text-base flex items-center gap-2">' + escapeHtml(data.data.room.title) + (isHost ? '<span class="party-host-badge"><i class="fa-solid fa-crown"></i>HOST</span>' : '') + '</h2><p class="text-[11px]" style="color:var(--text-muted);">Host: ' + escapeHtml(data.data.room.hostDisplayName) + ' • Kode: <strong style="color:var(--accent);">' + data.data.room.code + '</strong>' + (data.data.room.visibility === 'private' ? ' • <span class="party-private-badge"><i class="fa-solid fa-lock"></i>PRIVATE</span>' : ' • <span class="party-public-badge"><i class="fa-solid fa-globe"></i>PUBLIC</span>') + '</p></div><div class="flex gap-2"><button onclick="copyToClipboard(\'' + data.data.room.code + '\')" class="btn-secondary" style="padding:6px 12px;font-size:11px;"><i class="fa-regular fa-copy mr-1"></i>Salin</button>' + (isHost ? '<button onclick="endPartyRoom()" class="btn-secondary" style="padding:6px 12px;font-size:11px;color:#dc2626;"><i class="fa-solid fa-stop mr-1"></i>Akhiri</button>' : '') + '</div></div>' +
        '<div id="partyPlayerWrapper" class="player-wrapper-el mb-3"></div>' +
        '<div class="card p-3 mb-3"><p class="text-xs font-bold mb-2"><i class="fa-solid fa-sliders mr-1" style="color:var(--accent);"></i>Kontrol ' + (isHost ? 'Host' : 'Host (read-only)') + '</p>' +
        (isHost ? '<div class="flex gap-2 flex-wrap"><button onclick="partyControl(\'play\')" class="party-control-btn primary"><i class="fa-solid fa-play"></i>Play</button><button onclick="partyControl(\'pause\')" class="party-control-btn"><i class="fa-solid fa-pause"></i>Pause</button><button onclick="partySeek(-10)" class="party-control-btn"><i class="fa-solid fa-backward"></i>10s</button><button onclick="partySeek(10)" class="party-control-btn"><i class="fa-solid fa-forward"></i>10s</button><button onclick="partySyncNow()" class="party-control-btn"><i class="fa-solid fa-sync"></i>Sync</button></div>'
        : '<p class="text-[11px]" style="color:var(--text-muted);"><i class="fa-solid fa-info-circle mr-1"></i>Hanya host yang bisa kontrol player. Player akan mengikuti host otomatis.</p>') + '</div>' +
        '<div class="card mb-3" style="overflow:hidden;"><div class="flex items-center justify-between p-3" style="border-bottom:1px solid var(--border-color);"><p class="text-sm font-bold"><i class="fa-solid fa-users mr-1" style="color:var(--accent);"></i>Members <span id="partyMemberCount">(' + data.data.members.length + ')</span></p></div><div id="partyMembersList" class="p-3" style="display:flex;flex-wrap:wrap;gap:8px;"></div></div>' +
        '<div class="card" style="overflow:hidden;"><div class="p-3" style="border-bottom:1px solid var(--border-color);"><p class="text-sm font-bold"><i class="fa-solid fa-comments mr-1" style="color:var(--accent);"></i>Live Chat</p></div><div id="partyChatList" class="party-chat-scroll"></div><div class="p-3 flex gap-2" style="border-top:1px solid var(--border-color);"><input type="text" id="partyChatInput" class="input-modern flex-1" placeholder="Ketik pesan..." maxlength="500" onkeydown="if(event.key===\'Enter\')sendPartyChat()"><button onclick="sendPartyChat()" class="btn-primary" style="padding:10px 16px;"><i class="fa-solid fa-paper-plane"></i></button></div></div>';
    initPartyPlayer(data.data.room.videoUrl); renderPartyMembers(data.data.members); renderPartyMessages(data.data.messages);
    partyPollInterval = setInterval(pollPartyState, 1500);
}

function initPartyPlayer(url) {
    var wrap = document.getElementById('partyPlayerWrapper'); if (!wrap) return; wrap.innerHTML = ''; if (!url) return;
    var isM3u8 = url.indexOf('.m3u8') !== -1; var isMp4 = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
    if (isMp4 || isM3u8) {
        var video = document.createElement('video'); video.playsInline = true; video.preload = 'metadata';
        video.setAttribute('controlsList', 'nodownload'); video.setAttribute('oncontextmenu', 'return false;'); video.setAttribute('draggable', 'false');
        video.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;background:#000;';
        if (currentParty && currentParty.isHost) { video.controls = true; } else { video.controls = false; video.style.pointerEvents = 'none'; }
        partyVideoEl = video;
        if (isM3u8 && typeof Hls !== 'undefined' && Hls.isSupported()) { partyHls = new Hls({ enableWorker: true, lowLatencyMode: true }); partyHls.loadSource(url); partyHls.attachMedia(video); } else { video.src = url; }
        wrap.appendChild(video);
    } else {
        var iframe = document.createElement('iframe'); iframe.src = url; iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
        if (!currentParty || !currentParty.isHost) iframe.style.pointerEvents = 'none';
        wrap.appendChild(iframe);
    }
}

function renderPartyMembers(members) {
    var c = document.getElementById('partyMembersList'); if (!c) return;
    var countEl = document.getElementById('partyMemberCount'); if (countEl) countEl.textContent = '(' + members.length + ')';
    c.innerHTML = members.map(function(m) { var av = renderMLBBAvatar({ username: m.username, avatarUrl: m.avatarUrl, borderUrl: m.borderUrl, borderScale: m.borderScale, size: 36 }); return '<div class="party-member-chip"><div class="cursor-pointer" onclick="navigate(\'user/' + escapeAttr(m.username) + '\')">' + av + '</div><p class="text-[9px] text-center truncate w-full" style="color:var(--text-primary);" title="' + escapeAttr(m.displayName) + '">' + escapeHtml(m.displayName) + '</p></div>'; }).join('');
}

function renderPartyMessages(messages) {
    var c = document.getElementById('partyChatList'); if (!c) return;
    if (!messages || messages.length === 0) { c.innerHTML = '<p class="text-xs text-center" style="color:var(--text-muted);">Belum ada pesan</p>'; return; }
    c.innerHTML = messages.map(function(m) {
        var av = renderMLBBAvatar({ username: m.username, avatarUrl: m.avatarUrl, borderUrl: m.borderUrl, borderScale: m.borderScale, size: 32 });
        var verified = m.isVerified ? verifiedSvgSize('sm') : '';
        var lvl = m.levelUrl ? '<img src="' + m.levelUrl + '" style="width:16px;height:16px;object-fit:contain;">' : '';
        var bubble;
        if (m.bubbleCss && m.bubbleHtml) { var filled = m.bubbleHtml.indexOf('{{content}}') !== -1 ? m.bubbleHtml.split('{{content}}').join(escapeHtml(m.content)) : escapeHtml(m.content); bubble = '<style scoped>' + m.bubbleCss + '</style><div class="bubble-custom">' + filled + '</div>'; }
        else { bubble = '<div class="bubble-default" style="padding:8px 12px;font-size:13px;">' + escapeHtml(m.content) + '</div>'; }
        return '<div class="flex gap-2 mb-2"><div class="flex-shrink-0">' + av + '</div><div class="flex-1 min-w-0"><div class="flex items-center gap-1 flex-wrap"><span class="text-xs font-semibold" style="color:var(--text-primary);">' + escapeHtml(m.displayName) + '</span>' + verified + lvl + '<span class="text-[9px]" style="color:var(--text-muted);">' + m.createdAtWIB + '</span></div>' + bubble + '</div></div>';
    }).join('');
    c.scrollTop = c.scrollHeight;
}

function partyControl(action) {
    if (!currentParty || !currentParty.isHost) { showToast('Hanya host yang bisa kontrol player', 'error'); return; }
    var currentTime = partyVideoEl ? partyVideoEl.currentTime : 0;
    apiCall('/api/party/' + currentParty.code + '/control', { method: 'POST', body: JSON.stringify({ action: action, currentTime: currentTime }) }).then(function(r) {
        if (!r.success) showToast(r.error || 'Gagal', 'error');
        else { lastPartySeq = r.data.actionSeq; if (action === 'play' && partyVideoEl) partyVideoEl.play().catch(function(){}); else if (action === 'pause' && partyVideoEl) partyVideoEl.pause(); }
    });
}
function partySeek(delta) { if (!currentParty || !currentParty.isHost) { showToast('Hanya host yang bisa kontrol player', 'error'); return; } if (!partyVideoEl) return; partyVideoEl.currentTime = Math.max(0, (partyVideoEl.currentTime || 0) + delta); partyControl('seek'); }
function partySyncNow() { partyControl('sync'); }

async function sendPartyChat() {
    if (!currentParty) return;
    var input = document.getElementById('partyChatInput'); var msg = (input.value || '').trim(); if (!msg) return;
    input.value = ''; var r = await apiCall('/api/party/' + currentParty.code + '/chat', { method: 'POST', body: JSON.stringify({ content: msg }) });
    if (r.success) pollPartyState(); else showToast(r.error || 'Gagal kirim', 'error');
}

async function pollPartyState() {
    if (!currentParty) return;
    var data = await apiCall('/api/party/' + currentParty.code + '/state'); if (!data.success) return;
    renderPartyMembers(data.data.members); renderPartyMessages(data.data.messages);
    if (partyVideoEl && data.data.state && data.data.state.action_seq !== lastPartySeq) {
        lastPartySeq = data.data.state.action_seq;
        var targetTime = data.data.state.current_time; var isPlaying = data.data.state.is_playing === 1;
        if (Math.abs((partyVideoEl.currentTime || 0) - targetTime) > 2) { try { partyVideoEl.currentTime = targetTime; } catch (e) {} }
        if (isPlaying && partyVideoEl.paused) partyVideoEl.play().catch(function(){});
        if (!isPlaying && !partyVideoEl.paused) partyVideoEl.pause();
    }
}

async function leavePartyRoom() {
    if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; }
    if (partyHls) { try { partyHls.destroy(); } catch (e) {} partyHls = null; }
    if (partyVideoEl) { try { partyVideoEl.pause(); } catch (e) {} partyVideoEl = null; }
    if (currentParty) { try { await apiCall('/api/party/' + currentParty.code + '/leave', { method: 'POST' }); } catch (e) {} }
    currentParty = null; navigate('party');
}
async function endPartyRoom() {
    if (!currentParty) return; if (!confirm('Akhiri room ini untuk semua member?')) return;
    var r = await apiCall('/api/party/' + currentParty.code, { method: 'DELETE' });
    if (r.success) { showToast('Room diakhiri', 'success'); leavePartyRoom(); } else showToast(r.error || 'Gagal', 'error');
}

async function renderRequestPage() {
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-plus-circle text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk request drakor</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = '<button onclick="navigate(\'profile\')" class="flex items-center gap-2 text-sm mb-3" style="color:var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali</span></button><div class="mb-6"><h1 class="text-2xl font-bold font-display mb-1">Request Drakor</h1><p class="text-sm" style="color: var(--text-secondary);">Minta drakor series yang ingin ditambahkan</p></div><div class="card p-4 mb-6"><div class="mb-4"><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Judul Drakor *</label><input type="text" id="requestTitle" class="input-modern" placeholder="Contoh: Crash Landing on You" maxlength="200"></div><div class="mb-4"><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Kategori</label><div class="input-modern" style="background: var(--bg-secondary); display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-tv" style="color: var(--accent);"></i><span class="text-sm font-medium">Drakor Series</span><span class="badge" style="background: rgba(124,58,237,0.15); color: var(--accent); margin-left: auto;">FIXED</span></div></div><div class="mb-4"><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Catatan (Opsional)</label><textarea id="requestNotes" class="input-modern" rows="3" maxlength="500" placeholder="Contoh: Drakor 2024, genre romance"></textarea></div><button onclick="submitRequest()" class="btn-primary w-full"><i class="fa-solid fa-paper-plane mr-2"></i>Kirim Request Drakor</button></div><div id="myRequests"></div>';
    loadMyRequests();
}
async function submitRequest() {
    var title = document.getElementById('requestTitle').value.trim(); var notes = document.getElementById('requestNotes').value.trim();
    if (!title) { showToast('Judul drakor wajib diisi', 'error'); return; }
    var data = await apiCall('/api/content-requests', { method: 'POST', body: JSON.stringify({ title, notes }) });
    if (data.success) { showToast(data.message || 'Request terkirim', 'success'); document.getElementById('requestTitle').value = ''; document.getElementById('requestNotes').value = ''; loadMyRequests(); } else showToast(data.error || 'Gagal', 'error');
}
async function loadMyRequests() {
    var container = document.getElementById('myRequests'); if (!container || !state.user) return;
    var data = await apiCall('/api/content-requests'); if (!data.success) return;
    if (data.data.requests.length === 0) { container.innerHTML = '<p class="text-center py-4" style="color: var(--text-muted);">Belum ada request</p>'; return; }
    container.innerHTML = '<h3 class="font-bold mb-3">Request Saya</h3>' + data.data.requests.map(function(r) { var statusColor = r.status === 'pending' ? '#d97706' : (r.status === 'approved' ? '#059669' : '#dc2626'); return '<div class="card p-3 mb-2 flex items-center gap-3"><div class="flex-1 min-w-0"><p class="font-medium text-sm">' + escapeHtml(r.title) + '</p><p class="text-[10px]" style="color: var(--text-muted);"><i class="fa-solid fa-tv mr-1"></i>Drakor • ' + r.createdAtWIB + '</p></div><span class="badge" style="background: ' + statusColor + '20; color: ' + statusColor + ';">' + r.status + '</span></div>'; }).join('');
}

async function openGiftModal(userId, targetName) {
    if (!state.user) { showToast('Login dulu', 'error'); handleAuthButton(); return; }
    if (userId === state.user.id) { showToast('Tidak bisa kirim gift ke diri sendiri', 'error'); return; }
    state.giftTargetUserId = userId; state.giftTargetName = targetName; state.selectedGiftId = null;
    document.getElementById('giftTargetName').textContent = 'Untuk: ' + targetName; document.getElementById('giftMyKoin').textContent = formatKoin(state.user.koin || 0);
    document.getElementById('sendGiftBtn').disabled = true; document.getElementById('sendGiftBtn').innerHTML = '<i class="fa-solid fa-paper-plane mr-2"></i>Pilih Gift Dulu';
    document.getElementById('giftModal').classList.remove('hidden'); document.body.style.overflow = 'hidden';
    var container = document.getElementById('giftListContainer'); container.innerHTML = '<div class="skeleton h-24 col-span-3"></div>';
    var data = await apiCall('/api/gifts');
    if (!data.success || !data.data.gifts || data.data.gifts.length === 0) { container.innerHTML = '<p class="text-center text-sm col-span-3 py-6" style="color: var(--text-muted);">Belum ada gift tersedia</p>'; return; }
    state.giftList = data.data.gifts;
    container.innerHTML = data.data.gifts.map(function(g) { return '<div class="gift-card" data-gift-id="' + g.id + '" onclick="selectGift(' + g.id + ')"><div class="relative w-full mb-2"><img src="' + g.url + '" class="gift-card-img" alt="' + escapeAttr(g.name) + '" oncontextmenu="return false;" draggable="false"><div class="absolute top-1 right-1 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow"><i class="fa-solid fa-coins text-yellow-400 mr-0.5"></i>' + formatKoin(g.price) + '</div></div><p class="gift-card-name">' + escapeHtml(g.name) + '</p><p class="gift-card-exp"><i class="fa-solid fa-star text-[8px]"></i> +' + g.exp_reward + ' EXP</p></div>'; }).join('');
}
function selectGift(giftId) {
    state.selectedGiftId = giftId; document.querySelectorAll('.gift-card').forEach(function(c) { c.classList.toggle('selected', parseInt(c.dataset.giftId) === giftId); });
    var btn = document.getElementById('sendGiftBtn'); btn.disabled = false;
    var gift = (state.giftList || []).find(function(g) { return g.id === giftId; });
    if (gift) btn.innerHTML = '<i class="fa-solid fa-paper-plane mr-2"></i>Kirim ' + escapeHtml(gift.name) + ' (' + formatKoin(gift.price) + ' koin)';
}
async function sendGift() {
    if (!state.selectedGiftId) return;
    var gift = (state.giftList || []).find(function(g) { return g.id === state.selectedGiftId; }); if (!gift) return;
    if ((state.user.koin || 0) < gift.price) { showToast('Koin tidak cukup. Butuh ' + gift.price, 'error'); return; }
    if (!confirm('Kirim ' + gift.name + ' ke ' + state.giftTargetName + '?\n\nHarga: ' + formatKoin(gift.price) + ' koin\nKamu juga dapat +' + gift.exp_reward + ' EXP!')) return;
    var btn = document.getElementById('sendGiftBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mengirim...';
    var data = await apiCall('/api/gifts/send/' + state.selectedGiftId, { method: 'POST', body: JSON.stringify({ targetUserId: state.giftTargetUserId }) });
    if (data.success) { if (data.data && data.data.newKoin !== undefined) { state.user.koin = data.data.newKoin; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } showToast('🎁 ' + data.message, 'success'); closeGiftModal(); if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername); }
    else { showToast(data.error || 'Gagal', 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane mr-2"></i>Kirim'; }
}
function closeGiftModal() { document.getElementById('giftModal').classList.add('hidden'); document.body.style.overflow = ''; state.selectedGiftId = null; state.giftTargetUserId = null; }

function openTransferModal() {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    document.getElementById('transferMyKoin').textContent = formatKoin(state.user.koin || 0);
    document.getElementById('transferUsername').value = ''; document.getElementById('transferAmount').value = '';
    document.querySelectorAll('.transfer-amount-preset').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('transferModal').classList.remove('hidden'); document.body.style.overflow = 'hidden';
}
function closeTransferModal() { document.getElementById('transferModal').classList.add('hidden'); document.body.style.overflow = ''; }
function setTransferPreset(amount) { document.getElementById('transferAmount').value = amount; document.querySelectorAll('.transfer-amount-preset').forEach(function(b) { b.classList.toggle('active', parseInt(b.textContent.replace(/[^0-9]/g, '')) === amount); }); }
async function submitTransfer() {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    var username = document.getElementById('transferUsername').value.trim().replace(/^@/, '');
    var amount = parseInt(document.getElementById('transferAmount').value) || 0;
    if (!username) { showToast('Masukkan username penerima', 'error'); return; }
    if (amount < 1) { showToast('Jumlah minimal 1 koin', 'error'); return; }
    if (amount > (state.user.koin || 0)) { showToast('Koin kamu tidak cukup', 'error'); return; }
    if (username.toLowerCase() === (state.user.username || '').toLowerCase()) { showToast('Tidak bisa transfer ke diri sendiri', 'error'); return; }
    if (!confirm('Transfer ' + formatKoin(amount) + ' koin ke @' + username + '?\n\nPenerima akan mendapat notifikasi via bot Telegram.')) return;
    var btn = document.getElementById('transferBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mengirim...';
    var data = await apiCall('/api/coins/transfer', { method: 'POST', body: JSON.stringify({ username: username, amount: amount }) });
    if (data.success) {
        if (data.data && data.data.newKoin !== undefined) { state.user.koin = data.data.newKoin; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); }
        showToast('✅ ' + (data.message || 'Transfer berhasil!'), 'success'); closeTransferModal();
    } else { showToast(data.error || 'Gagal transfer', 'error'); }
    btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-paper-plane mr-2"></i>Kirim Koin';
}

async function renderProfile() {
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-user text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk melihat profil</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    var me = await apiCall('/api/auth/me');
    if (me.success && me.data) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } else { app.innerHTML = '<div class="text-center py-16"><p class="mb-4">Gagal memuat profil.</p><button onclick="logout()" class="btn-primary">Login Ulang</button></div>'; return; }
    var user = state.user; var isVip = user.isVip, isAdmin = user.role === 'admin';
    var badges = ''; if (isAdmin) badges += '<span class="badge vip-badge"><i class="fa-solid fa-crown text-[8px] mr-1"></i>Admin</span>';
    if (isVip) badges += '<span class="badge vip-badge"><i class="fa-solid fa-star text-[8px] mr-1"></i>VIP</span>';
    if (!isAdmin && !isVip) badges += '<span class="badge" style="background: var(--bg-secondary); color: var(--text-muted);">Member</span>';
    if (user.isVerified) badges += verifiedSvgSize('lg');
    var levelProgress = user.nextLevelExp ? Math.min(100, (user.exp / user.nextLevelExp) * 100) : 0;
    var levelPhoto = renderLevelPhoto(user.levelUrl, 56);
    var avatarHtml = renderMLBBAvatar({ username: user.username, avatarUrl: user.avatarUrl, borderUrl: user.borderUrl, borderScale: user.borderScale || 1.2, size: 100, onClick: user.avatarUrl ? 'openImagePreview(\'' + user.avatarUrl + '\')' : '' });
    var coverHtml = user.coverUrl ? '<div class="profile-header-cover" style="background-image: url(\'' + user.coverUrl + '\'); background-size: cover; background-position: center; cursor: pointer;" onclick="openImagePreview(\'' + user.coverUrl + '\')" title="Klik untuk preview"></div>' : '<div class="profile-header-cover"></div>';
    var adminBtn = isAdmin ? '<button onclick="navigate(\'admin\')" class="profile-menu-row" style="border-top:none; position: relative;"><div class="profile-menu-icon" style="background: rgba(239, 68, 68, 0.15);"><i class="fa-solid fa-shield-halved" style="color: #dc2626;"></i></div><span class="font-medium text-sm flex-1 text-left" style="color: var(--text-primary);">Admin Panel</span>' + (state.adminPendingRequests > 0 ? '<span class="admin-notif-badge" style="position:relative;top:0;right:0;">' + state.adminPendingRequests + '</span>' : '') + '<i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button>' : '';
    var limitBadge = '';
    if (!isVip) { var dw = user.dailyWatch || { used: 0, freeLimit: 20 }; var limitClass = dw.used >= dw.freeLimit ? 'danger' : (dw.used >= dw.freeLimit - 2 ? 'warning' : 'safe'); limitBadge = '<div class="daily-limit-badge ' + limitClass + ' mt-2"><i class="fa-solid fa-eye"></i> Nonton Gratis: ' + dw.used + '/' + dw.freeLimit + ' hari ini</div>'; }
    var telegramInfo = '';
    if (user.telegramId) { telegramInfo = '<p class="text-xs mt-1" style="color: #229ED9;"><i class="fa-brands fa-telegram mr-1"></i>@' + escapeHtml(user.telegram || '-') + '</p>'; }
    var giftsReceived = user.giftsReceived || []; var giftsReceivedHtml = '';
    if (giftsReceived.length > 0) {
        var giftItems = giftsReceived.map(function(g) { return '<div class="gift-received-card" title="' + escapeAttr(g.giftName + ' dari ' + (g.senderDisplayName || g.senderUsername)) + '"><img src="' + g.giftUrl + '" alt="' + escapeAttr(g.giftName) + '" oncontextmenu="return false;" draggable="false"><p class="gift-received-name">' + escapeHtml(g.giftName) + '</p><p class="gift-received-sender cursor-pointer hover:underline" onclick="event.stopPropagation(); navigate(\'user/' + escapeAttr(g.senderUsername) + '\')">dari ' + escapeHtml(g.senderDisplayName || g.senderUsername) + '</p></div>'; }).join('');
        giftsReceivedHtml = '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-gift" style="color: #ec4899;"></i>Gift Diterima <span class="text-[10px] font-normal" style="color: var(--text-muted); margin-left:auto;">(' + (user.giftsCount || giftsReceived.length) + ')</span></div><div class="p-3" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">' + giftItems + '</div></div>';
    }
    app.innerHTML = '<div class="card overflow-hidden mb-5">' + coverHtml + '<div class="px-6 pb-6 text-center" style="margin-top: -50px;"><div class="flex justify-center mb-4">' + avatarHtml + '</div><h2 class="text-xl font-bold font-display mb-1">' + escapeHtml(user.displayName || user.username) + '</h2><p class="text-xs mb-2" style="color: var(--text-muted);">@' + escapeHtml(user.username) + '</p>' + telegramInfo + '<div class="flex items-center justify-center gap-2 mb-2 flex-wrap">' + badges + '</div>' + (user.email && !user.email.includes('@telegram.local') ? '<p class="text-xs" style="color: var(--text-muted);">' + escapeHtml(user.email) + '</p>' : '') + (isVip && user.vipExpiresAt ? '<p class="text-xs mt-1" style="color: #d97706;"><i class="fa-solid fa-clock mr-1"></i>VIP sampai ' + user.vipExpiresAtWIB + '</p>' : '') + (user.bio ? '<p class="text-sm mt-3 max-w-md mx-auto" style="color: var(--text-secondary);">' + escapeHtml(user.bio) + '</p>' : '') +
        '<div class="flex items-center justify-center gap-4 mt-4 text-xs" style="color: var(--text-muted);"><span><i class="fa-solid fa-coins" style="color: #d97706;"></i> ' + formatKoin(user.koin || 0) + ' Koin</span><span style="display:inline-flex;align-items:center;gap:6px;">' + (levelPhoto || '<i class="fa-solid fa-star" style="color: var(--accent);"></i>') + ' Level ' + (user.level || 1) + '</span></div>' + limitBadge +
        '<div class="mt-4 max-w-xs mx-auto"><div class="flex justify-between text-[10px] mb-1" style="color: var(--text-muted);"><span>EXP: ' + (user.exp || 0) + '</span>' + (user.nextLevelExp ? '<span>Next: ' + user.nextLevelExp + '</span>' : '') + '</div><div class="level-bar" style="height: 8px;"><div class="level-bar-fill" style="width: ' + levelProgress + '%"></div></div></div><p class="text-[10px] mt-3" style="color: var(--text-muted);">Bergabung: ' + (user.createdAtWIB || '-') + '</p>' +
        '<div class="flex gap-2 justify-center mt-4 flex-wrap"><button onclick="openEditProfile()" class="btn-primary" style="padding: 8px 16px; font-size: 13px;"><i class="fa-solid fa-pen mr-1"></i>Edit Profil</button><button onclick="shareProfile()" class="btn-secondary" style="padding: 8px 16px; font-size: 13px;"><i class="fa-solid fa-share mr-1"></i>Bagikan</button></div></div></div>' + giftsReceivedHtml + renderPremiumPromo() +
        (adminBtn ? '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-shield-halved" style="color:#dc2626;"></i>Administrasi</div>' + adminBtn + '</div>' : '') +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-coins" style="color:#d97706;"></i>Koin</div><button onclick="openTransferModal()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(251,191,36,0.15);"><i class="fa-solid fa-paper-plane" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Transfer Koin ke User Lain</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openCoinHistory()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-coins" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Histori Koin</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openVoucherModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(139, 92, 246, 0.15);"><i class="fa-solid fa-ticket" style="color: #8b5cf6;"></i></div><span class="font-medium text-sm flex-1 text-left">Redeem Voucher</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-users" style="color:var(--accent);"></i>Sosial & Hadiah</div><button onclick="navigate(\'referral\')" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(124,58,237,0.15);"><i class="fa-solid fa-gift" style="color: #7c3aed;"></i></div><span class="font-medium text-sm flex-1 text-left">Ajak Teman (Referral)</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openLeaderboardModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-trophy" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Leaderboard</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-chart-line" style="color:#059669;"></i>Aktivitas</div><button onclick="navigate(\'missions\')" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(16, 185, 129, 0.15);"><i class="fa-solid fa-trophy" style="color: #059669;"></i></div><span class="font-medium text-sm flex-1 text-left">Misi Harian</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="navigate(\'request\')" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(124, 58, 237, 0.15);"><i class="fa-solid fa-plus-circle" style="color: #7c3aed;"></i></div><span class="font-medium text-sm flex-1 text-left">Request Drakor</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="navigate(\'party\')" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(236, 72, 153, 0.15);"><i class="fa-solid fa-users-rectangle" style="color: #ec4899;"></i></div><span class="font-medium text-sm flex-1 text-left">Room Party</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-cart-shopping" style="color:#ec4899;"></i>Belanja & Kosmetik</div><button onclick="openVipModal()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-crown" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Beli VIP dengan Koin</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openShopModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(139, 92, 246, 0.15);"><i class="fa-solid fa-store" style="color: #8b5cf6;"></i></div><span class="font-medium text-sm flex-1 text-left">Toko Border & Bubble</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-gear" style="color:#06b6d4;"></i>Pengaturan</div><button onclick="openEditProfile()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(6, 182, 212, 0.15);"><i class="fa-solid fa-camera" style="color: #06b6d4;"></i></div><span class="font-medium text-sm flex-1 text-left">Ganti Foto Profil & Sampul</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="logout()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(239, 68, 68, 0.15);"><i class="fa-solid fa-right-from-bracket" style="color: #dc2626;"></i></div><span class="font-medium text-sm flex-1 text-left" style="color: #dc2626;">Keluar</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>';
    try {
        var myStoryData = await apiCall('/api/user/' + user.username);
        if (myStoryData.success && myStoryData.data.gallery && myStoryData.data.gallery.length > 0) {
            var galleryItems = myStoryData.data.gallery.map(function(p) { var item = { id: p.id, user_id: user.id, username: user.username, display_name: user.displayName || user.username, avatar_url: user.avatarUrl, is_verified: user.isVerified, avatar_border_id: user.avatarBorderId, level: user.level, border_url: user.borderUrl, border_scale: user.borderScale, level_url: user.levelUrl, image_url: p.image_url, mediaUrls: p.mediaUrls || (p.image_url ? [p.image_url] : []), comments_count: p.comments_count || 0, description: p.description, price: p.price, purchase_count: p.purchase_count, likes_count: p.likes_count, saves_count: p.saves_count, created_at: p.created_at, isOwner: p.isOwner, isPurchased: p.isPurchased, locked: p.locked, userLiked: p.userLiked, userSaved: p.userSaved }; return renderGalleryItemHtml(item, isAdmin); }).join('');
            app.innerHTML += '<div class="mt-4 mb-4 animate-fade-up"><div class="flex items-center justify-between mb-3"><h2 class="text-lg font-bold font-display flex items-center gap-2"><i class="fa-solid fa-circle-play" style="color:#06b6d4;"></i>Story Saya <span class="text-xs font-normal" style="color:var(--text-muted);">(' + myStoryData.data.gallery.length + ')</span></h2><button onclick="openUploadGallery()" class="btn-primary" style="padding:6px 14px;font-size:12px;"><i class="fa-solid fa-plus mr-1"></i>Upload</button></div><div class="masonry">' + galleryItems + '</div></div>';
        } else {
            app.innerHTML += '<div class="mt-4 mb-4 animate-fade-up"><h2 class="text-lg font-bold font-display mb-3 flex items-center gap-2"><i class="fa-solid fa-circle-play" style="color:#06b6d4;"></i>Story Saya</h2><div class="card p-6 text-center"><i class="fa-solid fa-image text-3xl mb-2" style="color:var(--text-muted);"></i><p class="text-sm mb-3" style="color:var(--text-secondary);">Belum ada story</p><button onclick="openUploadGallery()" class="btn-primary" style="padding:8px 16px;font-size:12px;"><i class="fa-solid fa-plus mr-1"></i>Upload Story</button></div></div>';
        }
    } catch (e) { console.warn('Load own story error:', e); }
    if (isAdmin) { apiCall('/api/admin/pending-count').then(function(res) { if (res.success) { state.adminPendingRequests = res.data.count || 0; } }); }
}

function shareProfile() { var url = window.location.origin + '/@' + state.user.username; if (navigator.share) navigator.share({ title: 'Profil ' + state.user.username, url: url }); else { navigator.clipboard.writeText(url); showToast('Link disalin!', 'success'); } }

async function renderUserProfile(username) {
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    var data = await apiCall('/api/user/' + username);
    if (!data.success) { app.innerHTML = '<div class="text-center py-16"><p class="mb-4">User tidak ditemukan</p><button onclick="navigate(\'home\')" class="btn-primary">Kembali</button></div>'; return; }
    var u = data.data; state.viewingUserId = u.id; state.viewingUsername = u.username;
    var badges = ''; if (u.role === 'admin') badges += '<span class="badge vip-badge"><i class="fa-solid fa-crown text-[8px] mr-1"></i>Admin</span>'; if (u.isVip) badges += '<span class="badge vip-badge"><i class="fa-solid fa-star text-[8px] mr-1"></i>VIP</span>'; if (u.isVerified) badges += verifiedSvgSize('lg');
    var levelProgress = u.nextLevelExp ? Math.min(100, (u.exp / u.nextLevelExp) * 100) : 0;
    var levelPhoto = renderLevelPhoto(u.levelUrl, 56);
    var avatarHtml = renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 100, onClick: u.avatarUrl ? 'openImagePreview(\'' + u.avatarUrl + '\')' : '' });
    var coverHtml = u.coverUrl ? '<div class="profile-header-cover" style="background-image: url(\'' + u.coverUrl + '\'); background-size: cover; background-position: center; cursor: pointer;" onclick="openImagePreview(\'' + u.coverUrl + '\')" title="Klik untuk preview"></div>' : '<div class="profile-header-cover"></div>';
    var myId = state.user ? state.user.id : 0; var isSelf = myId && myId === u.id;
    var giftBtn = (!isSelf && state.user) ? '<button onclick="openGiftModal(' + u.id + ', \'' + escapeAttr(u.displayName || u.username) + '\')" class="btn-primary" style="padding: 8px 16px; font-size: 13px; background: linear-gradient(135deg, #ec4899, #be185d); box-shadow: 0 4px 12px rgba(236,72,153,0.35);"><i class="fa-solid fa-gift mr-1"></i>Kirim Gift</button>' : '';
    var giftsReceivedHtml = '';
    if (u.giftsReceived && u.giftsReceived.length > 0) {
        var giftItems = u.giftsReceived.map(function(g) { return '<div class="gift-received-card" title="' + escapeAttr(g.giftName + ' dari ' + g.senderDisplayName) + '"><img src="' + g.giftUrl + '" alt="' + escapeAttr(g.giftName) + '" oncontextmenu="return false;" draggable="false"><p class="gift-received-name">' + escapeHtml(g.giftName) + '</p><p class="gift-received-sender cursor-pointer hover:underline" onclick="event.stopPropagation(); navigate(\'user/' + escapeAttr(g.senderUsername) + '\')">dari ' + escapeHtml(g.senderDisplayName || g.senderUsername) + '</p></div>'; }).join('');
        giftsReceivedHtml = '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-gift" style="color: #ec4899;"></i>Gift Diterima <span class="text-[10px] font-normal" style="color: var(--text-muted); margin-left:auto;">(' + (u.giftsCount || 0) + ')</span></div><div class="p-3" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">' + giftItems + '</div></div>';
    }
    var galleryHtml = ''; var galleryList = u.gallery || [];
    if (galleryList.length > 0) { var isAdminViewer = state.user && state.user.role === 'admin'; var galleryItems = galleryList.map(function(p) { var item = { id: p.id, user_id: u.id, username: u.username, display_name: u.displayName || u.username, avatar_url: u.avatarUrl, is_verified: u.isVerified, avatar_border_id: u.avatarBorderId, level: u.level, border_url: u.borderUrl, border_scale: u.borderScale, level_url: u.levelUrl, image_url: p.image_url, mediaUrls: p.mediaUrls || (p.image_url ? [p.image_url] : []), comments_count: p.comments_count || 0, description: p.description, price: p.price, purchase_count: p.purchase_count, likes_count: p.likes_count, saves_count: p.saves_count, created_at: p.created_at, isOwner: p.isOwner, isPurchased: p.isPurchased, locked: p.locked, userLiked: p.userLiked, userSaved: p.userSaved }; return renderGalleryItemHtml(item, isAdminViewer); }).join(''); galleryHtml = '<div class="mt-6 mb-4"><h2 class="text-lg font-bold font-display mb-3 flex items-center gap-2"><i class="fa-solid fa-circle-play" style="color: #06b6d4;"></i>Story <span class="text-xs font-normal" style="color: var(--text-muted);">(' + galleryList.length + ' foto)</span></h2><div class="masonry">' + galleryItems + '</div></div>'; }
    else { galleryHtml = '<div class="mt-6 mb-4"><h2 class="text-lg font-bold font-display mb-3 flex items-center gap-2"><i class="fa-solid fa-circle-play" style="color: #06b6d4;"></i>Story</h2><div class="card p-8 text-center"><i class="fa-solid fa-image text-4xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">User belum pernah upload story</p></div></div>'; }
    app.innerHTML = '<button onclick="history.back()" class="flex items-center gap-2 text-sm mb-4" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali</span></button><div class="card overflow-hidden mb-5">' + coverHtml + '<div class="px-6 pb-6 text-center" style="margin-top: -50px;"><div class="flex justify-center mb-4">' + avatarHtml + '</div><h2 class="text-xl font-bold font-display mb-1">' + escapeHtml(u.displayName || u.username) + '</h2><p class="text-xs mb-2" style="color: var(--text-muted);">@' + escapeHtml(u.username) + '</p><div class="flex items-center justify-center gap-2 mb-2 flex-wrap">' + badges + '</div>' + (u.bio ? '<p class="text-sm mt-3 max-w-md mx-auto" style="color: var(--text-secondary);">' + escapeHtml(u.bio) + '</p>' : '') + '<div class="flex items-center justify-center gap-4 mt-4 text-xs" style="color: var(--text-muted);"><span style="display:inline-flex;align-items:center;gap:6px;">' + (levelPhoto || '<i class="fa-solid fa-star" style="color: var(--accent);"></i>') + ' Level ' + (u.level || 1) + '</span></div><div class="mt-4 max-w-xs mx-auto"><div class="level-bar" style="height: 6px;"><div class="level-bar-fill" style="width: ' + levelProgress + '%"></div></div></div><p class="text-[10px] mt-3" style="color: var(--text-muted);">Bergabung: ' + (u.createdAtWIB || '-') + '</p>' + (giftBtn ? '<div class="mt-3">' + giftBtn + '</div>' : '') + '</div></div>' + giftsReceivedHtml + '<div class="grid grid-cols-3 gap-3 mb-5"><div class="card p-3 text-center"><p class="text-xl font-bold" style="color: var(--accent);">' + (u.totalWatch || 0) + '</p><p class="text-[10px]" style="color: var(--text-muted);">Nonton</p></div><div class="card p-3 text-center"><p class="text-xl font-bold" style="color: #06b6d4;">' + (u.totalComments || 0) + '</p><p class="text-[10px]" style="color: var(--text-muted);">Komentar</p></div><div class="card p-3 text-center"><p class="text-xl font-bold" style="color: #dc2626;">' + (u.totalLikes || 0) + '</p><p class="text-[10px]" style="color: var(--text-muted);">Like</p></div></div>' + galleryHtml;
}

async function openEditProfile() {
    if (!state.user) return;
    var user = state.user; var canChangeUsername = user.canChangeUsername !== false; var daysRemaining = user.usernameChangeDaysRemaining || 0;
    var tgDisabled = !!user.telegramId;
    var html = '<div class="space-y-4"><div class="p-3 rounded-xl" style="background: rgba(124,58,237,0.08); border: 1px solid var(--border-color);"><p class="text-[11px] flex items-center gap-2" style="color: var(--text-secondary);"><i class="fa-solid fa-info-circle" style="color: var(--accent);"></i> Foto profil & sampul wajib via Gyazo. Support JPG/PNG/WEBP/GIF.</p></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Foto Profil (Avatar)</label><div class="flex items-center gap-3 mb-2">' + renderMLBBAvatar({ username: user.username, avatarUrl: user.avatarUrl, borderUrl: user.borderUrl, borderScale: user.borderScale || 1.2, size: 60 }) + '<input type="file" id="editAvatarFile" accept="image/jpeg,image/png,image/webp,image/gif" class="input-modern flex-1" style="padding: 6px; font-size: 11px;"></div><button onclick="uploadAvatarInline()" class="btn-secondary w-full" style="padding: 8px; font-size:12px;" id="uploadAvatarBtn"><i class="fa-solid fa-upload mr-1"></i>Upload Foto Profil</button></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Foto Sampul (Cover)</label><input type="file" id="editCoverFile" accept="image/jpeg,image/png,image/webp,image/gif" class="input-modern mb-2" style="padding: 6px; font-size: 11px;"><button onclick="uploadCoverInline()" class="btn-secondary w-full" style="padding: 8px; font-size:12px;" id="uploadCoverBtn"><i class="fa-solid fa-upload mr-1"></i>Upload Cover</button></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Nama Tampilan</label><input type="text" id="editDisplayName" class="input-modern" value="' + escapeHtml(user.displayName || user.username) + '" maxlength="50"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Username</label><div class="relative"><i class="fa-solid fa-at absolute left-4 top-1/2 -translate-y-1/2 text-sm" style="color: var(--text-muted);"></i><input type="text" id="editUsername" class="input-modern" style="padding-left: 44px;" value="' + escapeHtml(user.username) + '" ' + (canChangeUsername ? '' : 'disabled') + '></div>' + (canChangeUsername ? '<p class="text-[10px] mt-1" style="color: var(--text-muted);">⚠️ Ubah username = tunggu 30 hari. Butuh instan? Bayar <strong style="color:#d97706;">5.000 koin</strong>.</p>' : '<p class="text-[10px] mt-1" style="color: #d97706;">⏳ Bisa diubah dalam <strong>' + daysRemaining + ' hari</strong> lagi. Butuh instan? Bayar <strong>5.000 koin</strong>.</p>') + '</div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Email (opsional)</label><input type="email" id="editEmail" class="input-modern" value="' + escapeHtml(user.email && !user.email.includes('@telegram.local') ? user.email : '') + '"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">No. HP</label><input type="text" id="editPhone" class="input-modern" value="' + escapeHtml(user.phone || '') + '" placeholder="08xxxxxxxxxx"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Telegram ' + (tgDisabled ? '<span class="badge" style="background:rgba(34,158,217,0.15);color:#229ED9;font-size:9px;margin-left:6px;"><i class="fa-brands fa-telegram"></i> TERHUBUNG</span>' : '') + '</label><input type="text" id="editTelegram" class="input-modern" value="' + escapeHtml(user.telegram || '') + '" placeholder="username (tanpa @)" ' + (tgDisabled ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '') + '>' + (tgDisabled ? '<p class="text-[10px] mt-1" style="color:#d97706;"><i class="fa-solid fa-lock mr-1"></i>Username Telegram terhubung otomatis, tidak bisa diganti. Butuh ganti? Bayar <strong>' + formatKoin(TELEGRAM_CHANGE_COST) + ' koin</strong>.</p><button onclick="buyTelegramChange()" class="btn-secondary w-full mt-2" style="color:#d97706;border-color:#fbbf24;padding:6px;font-size:11px;"><i class="fa-solid fa-bolt mr-1"></i>Ganti Telegram (' + formatKoin(TELEGRAM_CHANGE_COST) + ' Koin)</button>' : '') + '</div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Bio <span id="bioCounter" style="float:right; color:var(--text-muted);">0 / 500</span></label><textarea id="editBio" class="input-modern" rows="3" maxlength="500" oninput="document.getElementById(\'bioCounter\').textContent = this.value.length + \' / 500\'">' + escapeHtml(user.bio || '') + '</textarea></div>' +
        '<div class="flex gap-2 pt-2"><button onclick="saveEditProfile()" class="btn-primary flex-1"><i class="fa-solid fa-save mr-1"></i>Simpan</button><button onclick="closeInfoModal()" class="btn-secondary">Batal</button></div>' +
        '<button onclick="buyInstantUsernameChange()" class="btn-secondary w-full" style="color: #d97706; border-color: #fbbf24;"><i class="fa-solid fa-bolt mr-1"></i>Ubah Username Instan (5.000 Koin)</button></div>';
    showInfoModal('Edit Profil', html);
    setTimeout(function() { var bioEl = document.getElementById('editBio'); if (bioEl) { var bioCounter = document.getElementById('bioCounter'); if (bioCounter) bioCounter.textContent = bioEl.value.length + ' / 500'; } }, 100);
}

async function buyTelegramChange() {
    if (!confirm('Bayar ' + formatKoin(TELEGRAM_CHANGE_COST) + ' koin untuk mengganti username Telegram?')) return;
    var input = prompt('Masukkan username Telegram baru (tanpa @):');
    if (!input) return;
    var newTg = input.trim().replace(/^@/, '');
    if (!/^[a-zA-Z0-9_]{3,32}$/.test(newTg)) { showToast('Username Telegram tidak valid', 'error'); return; }
    var data = await apiCall('/api/profile/change-telegram', { method: 'POST', body: JSON.stringify({ telegram: newTg }) });
    if (data.success) { showToast('Telegram berhasil diganti', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } closeInfoModal(); renderProfile(); }
    else showToast(data.error || 'Gagal', 'error');
}

async function uploadAvatarInline() {
    var fileInput = document.getElementById('editAvatarFile'); var file = fileInput.files[0];
    if (!file) { showToast('Pilih file dulu', 'error'); return; }
    var allowed = ['image/jpeg','image/png','image/webp','image/gif'];
    if (!allowed.includes(file.type)) { showToast('Format harus JPG/PNG/WEBP/GIF', 'error'); return; }
    if (file.size > 8 * 1024 * 1024) { showToast('Maksimal 8MB', 'error'); return; }
    var btn = document.getElementById('uploadAvatarBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading...';
    var formData = new FormData(); formData.append('avatar', file);
    try {
        var response = await fetch(API_BASE + '/api/profile/avatar', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData });
        var data = await response.json();
        if (data.success) { showToast('Foto profil berhasil diupload', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } closeInfoModal(); if (state.currentPage === 'profile') renderProfile(); else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername); }
        else { showToast(data.error || 'Gagal', 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-upload mr-1"></i>Upload Foto Profil'; }
    } catch (e) { showToast('Gagal: ' + e.message, 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-upload mr-1"></i>Upload Foto Profil'; }
}
async function uploadCoverInline() {
    var fileInput = document.getElementById('editCoverFile'); var file = fileInput.files[0];
    if (!file) { showToast('Pilih file dulu', 'error'); return; }
    var allowed = ['image/jpeg','image/png','image/webp','image/gif'];
    if (!allowed.includes(file.type)) { showToast('Format harus JPG/PNG/WEBP/GIF', 'error'); return; }
    if (file.size > 10 * 1024 * 1024) { showToast('Maksimal 10MB', 'error'); return; }
    var btn = document.getElementById('uploadCoverBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading...';
    var formData = new FormData(); formData.append('cover', file);
    try {
        var response = await fetch(API_BASE + '/api/profile/cover', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData });
        var data = await response.json();
        if (data.success) { showToast('Cover berhasil diupload', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } closeInfoModal(); if (state.currentPage === 'profile') renderProfile(); else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername); }
        else { showToast(data.error || 'Gagal', 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-upload mr-1"></i>Upload Cover'; }
    } catch (e) { showToast('Gagal: ' + e.message, 'error'); btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-upload mr-1"></i>Upload Cover'; }
}
async function buyInstantUsernameChange() {
    if (!confirm('Bayar 5.000 koin untuk reset cooldown username?')) return;
    var data = await apiCall('/api/profile/reset-username-cooldown', { method: 'POST' });
    if (data.success) { showToast('Cooldown username di-reset!', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } closeInfoModal(); openEditProfile(); } else showToast(data.error || 'Gagal', 'error');
}
async function saveEditProfile() {
    var displayName = document.getElementById('editDisplayName').value.trim();
    var usernameEl = document.getElementById('editUsername'); var username = usernameEl.disabled ? null : usernameEl.value.trim();
    var email = document.getElementById('editEmail').value.trim(); var phone = document.getElementById('editPhone').value.trim();
    var telegramEl = document.getElementById('editTelegram'); var telegram = telegramEl.disabled ? undefined : telegramEl.value.trim();
    var bio = document.getElementById('editBio').value.trim();
    if (email && (email.includes('+') || !/^[^\s+@]+@gmail\.com$/i.test(email))) { showToast('Email wajib @gmail.com dan tanpa "+"', 'error'); return; }
    var body = { displayName, email: email || null, phone, bio };
    if (telegram !== undefined) body.telegram = telegram;
    if (username && username !== state.user.username) body.username = username;
    var data = await apiCall('/api/profile/update', { method: 'PUT', body: JSON.stringify(body) });
    if (data.success) { showToast('Profil diperbarui', 'success'); closeInfoModal(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } renderProfile(); }
    else showToast(data.error || 'Gagal update', 'error');
}

function openCoinHistory() { if (!state.user) { showToast('Login dulu', 'error'); return; } showInfoModal('Histori Koin', '<div id="coinHistoryList"><div class="skeleton h-20"></div></div>'); loadCoinHistory(1); }
function getSourceLabel(source) {
    if (!source) return 'Transaksi';
    var m = { view: 'Nonton episode', comment: 'Komentar', checkin: 'Check-in harian', admin: 'Bonus admin', gallery_upload: 'Upload story', gallery_like: 'Like story', reaction: 'Reaksi series', reply_comment: 'Balas komentar', vip_purchase: 'Pembelian VIP', username_reset: 'Reset cooldown username', voucher_redeem: 'Redeem voucher', coin_transfer_send: 'Transfer keluar', coin_transfer_receive: 'Transfer masuk', telegram_change: 'Ganti Telegram' };
    if (m[source]) return m[source];
    if (source.indexOf('referral_') === 0) return 'Bonus Referral';
    if (source.indexOf('gift_send_') === 0) return 'Kirim gift';
    if (source.indexOf('mission_') === 0) return 'Misi: ' + source.substring(8).replace(/_/g, ' ');
    if (source.indexOf('watch_') === 0) return 'Nonton konten';
    if (source.indexOf('episode_') === 0) return 'Nonton episode';
    if (source.indexOf('avatar_border_') === 0) return 'Pembelian border';
    if (source.indexOf('bubble_') === 0) return 'Pembelian bubble';
    if (source.indexOf('gallery_buy_') === 0) return 'Beli story';
    if (source.indexOf('gallery_sell_') === 0) return 'Penjualan story';
    return source;
}
async function loadCoinHistory(page) {
    page = parseInt(page) || 1; var data = await apiCall('/api/coin-history?page=' + page); var container = document.getElementById('coinHistoryList'); if (!container) return;
    if (!data.success) { container.innerHTML = '<p class="text-center py-4" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
    if (data.data.transactions.length === 0) { container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Belum ada transaksi</p>'; return; }
    var html = '<div class="space-y-2">';
    data.data.transactions.forEach(function(t) { var isEarn = t.type === 'earn'; var sign = isEarn ? '+' : '-'; var color = isEarn ? '#059669' : '#dc2626'; var label = getSourceLabel(t.source); html += '<div class="flex items-center gap-3 p-2.5 mb-2 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background: ' + color + '20; color: ' + color + ';"><i class="fa-solid ' + (isEarn ? 'fa-plus' : 'fa-minus') + '"></i></div><div class="flex-1 min-w-0"><p class="text-xs font-medium truncate" style="color: var(--text-primary);">' + escapeHtml(label) + '</p><p class="text-[10px]" style="color: var(--text-muted);">' + t.createdAtWIB + '</p></div><p class="font-bold text-sm" style="color: ' + color + '; white-space: nowrap;">' + sign + formatKoin(t.amount) + '</p></div>'; });
    html += '</div>' + renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'loadCoinHistory(' + p + ')'; });
    container.innerHTML = html;
}

function openVoucherModal() { if (!state.user) { showToast('Login dulu', 'error'); return; } document.getElementById('voucherCodeInput').value = ''; document.getElementById('voucherModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; setTimeout(function() { var inp = document.getElementById('voucherCodeInput'); if (inp) { inp.value = ''; inp.focus(); } }, 100); }
function closeVoucherModal() { document.getElementById('voucherModal').classList.add('hidden'); document.body.style.overflow = ''; }
async function submitVoucher() {
    var input = document.getElementById('voucherCodeInput'); var code = (input.value || '').replace(/\D/g, '');
    if (code.length !== 12) { showToast('Masukkan 12 digit kode', 'error'); return; }
    var btn = document.getElementById('redeemBtn'); btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Redeem...';
    var data = await apiCall('/api/vouchers/redeem', { method: 'POST', body: JSON.stringify({ code }) });
    if (data.success) { showToast('Voucher berhasil diredeem!', 'success'); closeVoucherModal(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } if (state.currentPage === 'profile') renderProfile(); }
    else showToast(data.error || 'Gagal', 'error');
    btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-gift mr-2"></i>Redeem';
}

function openLeaderboardModal() { document.getElementById('leaderboardModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; loadLeaderboard(1); }
function closeLeaderboardModal() { document.getElementById('leaderboardModal').classList.add('hidden'); document.body.style.overflow = ''; }
function changeLbCategory(cat) { state.leaderboardCategory = cat; document.querySelectorAll('#lbTabs .lb-tab').forEach(function(b) { b.classList.remove('active'); if (b.dataset.cat === cat) b.classList.add('active'); }); loadLeaderboard(1); }
function _lbStatFor(u, cat) { if (!u) return '0'; if (cat === 'xp') return (u.exp || 0) + ' XP'; if (cat === 'watch') return (u.totalWatch || 0) + ' Nonton'; if (cat === 'gallery') return (u.totalGallery || 0) + ' Story'; if (cat === 'koin') return formatKoin(u.koin || 0) + ' Koin'; if (cat === 'level') return 'Lv ' + (u.level || 1); return '0'; }

async function loadLeaderboard(page) {
    page = parseInt(page) || 1; var container = document.getElementById('leaderboardContent'); if (!container) return;
    container.innerHTML = '<div class="skeleton h-40"></div>'; var cat = state.leaderboardCategory;
    try {
        var data = await apiCall('/api/leaderboard?page=' + page + '&limit=20&category=' + cat);
        if (!data || !data.success) { container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Gagal memuat leaderboard</p>'; return; }
        var payload = data.data || {}; var users = payload.users || payload.leaderboard || []; var totalPages = payload.totalPages || 1;
        var myRank = payload.myRank || null; var myData = payload.myData || null; var startRank = (page - 1) * 20; var html = '';
        if (page === 1 && users.length >= 3) {
            var top1 = users[0], top2 = users[1], top3 = users[2];
            function renderPodium(u, rank, cls) { if (!u) return ''; var name = escapeHtml(u.displayName || u.username || 'User'); var avatar = renderMLBBAvatar({ username: u.username || '?', avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 56 }); var crown = ''; if (rank === 1) crown = '<div class="podium-crown">👑</div>'; else if (rank === 2) crown = '<div class="podium-crown" style="font-size:20px; top:-8px;">🥈</div>'; else if (rank === 3) crown = '<div class="podium-crown" style="font-size:20px; top:-8px;">🥉</div>'; return '<div class="podium-card ' + cls + '" onclick="closeLeaderboardModal(); navigate(\'user/' + escapeAttr(u.username || '') + '\')">' + crown + avatar + '<p class="podium-name">' + name + '</p><div class="podium-level">Lv ' + (u.level || 1) + '</div><p class="podium-xp">' + _lbStatFor(u, cat) + '</p></div>'; }
            html += '<div class="flex items-end justify-center gap-2 mb-6 px-2"><div class="flex-1">' + renderPodium(top2, 2, 'rank-2') + '</div><div class="flex-1" style="transform: scale(1.1); z-index: 10;">' + renderPodium(top1, 1, 'rank-1') + '</div><div class="flex-1">' + renderPodium(top3, 3, 'rank-3') + '</div></div>';
        }
        html += '<div class="space-y-2">';
        var startIndex = (page === 1 && users.length >= 3) ? 3 : 0;
        for (var i = startIndex; i < users.length; i++) { var u = users[i]; if (!u) continue; var rank = startRank + i + 1; var medalIcon = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : rank)); var rankClass = rank === 1 ? 'gold' : (rank === 2 ? 'silver' : (rank === 3 ? 'bronze' : 'normal')); var avatarHtml = renderMLBBAvatar({ username: u.username || '?', avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 44 }); html += '<div class="leaderboard-item" onclick="closeLeaderboardModal(); navigate(\'user/' + escapeAttr(u.username || '') + '\');"><div class="leaderboard-rank ' + rankClass + '">' + medalIcon + '</div>' + avatarHtml + '<div class="flex-1 min-w-0"><p class="font-semibold text-sm truncate" style="color: var(--text-primary);">' + escapeHtml(u.displayName || u.username || 'User') + '</p><p class="text-[10px]" style="color: var(--text-muted);">Lv ' + (u.level || 1) + '</p></div><div class="text-right"><p class="font-bold text-sm" style="color: #d97706;">' + _lbStatFor(u, cat) + '</p></div></div>'; }
        html += '</div>';
        if (!users.length) { html = '<p class="text-center py-8" style="color: var(--text-muted);">Belum ada data leaderboard</p>'; } else if (totalPages > 1) { html += renderPaginationWithFn(page, totalPages, function(p) { return 'loadLeaderboard(' + p + ')'; }); }
        if (myRank && myData) { var myAvatar = renderMLBBAvatar({ username: myData.username || '?', avatarUrl: myData.avatarUrl, borderUrl: myData.borderUrl, borderScale: myData.borderScale || 1.2, size: 40 }); html += '<div class="leaderboard-my-rank mt-4 sticky bottom-0" style="z-index: 20;"><div class="flex items-center gap-2" style="position: relative; z-index: 1;"><div class="leaderboard-rank normal" style="width:36px;height:36px;font-size:12px;">#' + myRank + '</div>' + myAvatar + '<div class="flex-1 min-w-0"><p class="font-bold text-sm truncate" style="color: var(--text-primary);">' + escapeHtml(myData.displayName || myData.username || 'Kamu') + '</p><p class="text-[10px]" style="color: var(--text-muted);">Lv ' + (myData.level || 1) + '</p></div><div class="text-right"><p class="font-bold text-sm" style="color: #d97706;">' + _lbStatFor(myData, cat) + '</p></div></div></div>'; }
        container.innerHTML = html;
    } catch (e) { console.error('Leaderboard error:', e); container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Terjadi kesalahan. Coba lagi.</p>'; }
}

async function renderMissions() {
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><p class="mb-4">Login untuk melihat misi</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = '<div class="mb-6"><h1 class="text-2xl font-bold font-display mb-1">Misi Harian</h1></div><div id="missionsList"><div class="skeleton h-20 mb-3"></div><div class="skeleton h-20 mb-3"></div><div class="skeleton h-20 mb-3"></div><div class="skeleton h-20"></div></div>';
    var data = await apiCall('/api/missions'); if (!data.success) { document.getElementById('missionsList').innerHTML = '<p class="text-center py-8" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
    var icons = { checkin: 'fa-calendar-check', comment: 'fa-comment', watch: 'fa-eye', profile: 'fa-user-pen', like: 'fa-thumbs-up', reply_comment: 'fa-reply', watch_500: 'fa-fire', watch_1000: 'fa-crown' };
    var colors = { checkin: '#059669', comment: '#06b6d4', watch: '#7c3aed', profile: '#8b5cf6', like: '#ec4899', reply_comment: '#14b8a6', watch_500: '#dc2626', watch_1000: '#d97706' };
    document.getElementById('missionsList').innerHTML = data.data.missions.map(function(m) { var progressPct = Math.min(100, (m.progress / m.target) * 100); var isDone = m.isCompleted; var icon = icons[m.type] || 'fa-star', color = colors[m.type] || '#7c3aed'; return '<div class="mission-card mb-3"><div class="mission-icon" style="background: ' + color + '20; color: ' + color + ';"><i class="fa-solid ' + icon + '"></i></div><div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-1"><p class="font-semibold text-sm">' + escapeHtml(m.label) + '</p>' + (isDone ? '<span class="badge" style="background: rgba(16,185,129,0.2); color: #059669;">✓ Selesai</span>' : '') + '</div><div class="level-bar mb-1"><div class="level-bar-fill" style="width: ' + progressPct + '%; background: ' + color + ';"></div></div><div class="flex items-center justify-between text-[10px]" style="color: var(--text-muted);"><span>' + m.progress + '/' + m.target + '</span><span><i class="fa-solid fa-coins" style="color: #d97706;"></i> +' + m.rewardKoin + ' • +' + m.rewardExp + ' XP</span></div></div>' + (m.type === 'checkin' && !isDone ? '<button onclick="doCheckin()" class="btn-primary" style="padding: 6px 12px; font-size: 12px;">Check-in</button>' : '') + '</div>'; }).join('');
}
async function doCheckin() { var data = await apiCall('/api/missions/checkin', { method: 'POST' }); if (data.success) { showToast(data.message, 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } renderMissions(); } else showToast(data.error || 'Gagal', 'error'); }

function openShopModal() { if (!state.user) { showToast('Login dulu', 'error'); return; } document.getElementById('shopModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; loadShop(); }
function closeShopModal() { document.getElementById('shopModal').classList.add('hidden'); document.body.style.overflow = ''; }
function switchShopTab(tab) { state.shopTab = tab; document.getElementById('shopTabBorder').classList.toggle('active', tab === 'border'); document.getElementById('shopTabBubble').classList.toggle('active', tab === 'bubble'); loadShop(); }
async function loadShop() {
    var container = document.getElementById('shopContent'); container.innerHTML = '<div class="skeleton h-20"></div>';
    if (state.shopTab === 'border') {
        var data = await apiCall('/api/avatar-borders'); if (!data.success) { container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
        if (data.data.borders.length === 0) { container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Belum ada border</p>'; return; }
        container.innerHTML = '<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">' + data.data.borders.map(function(b) { var owned = b.owned, equipped = b.id === data.data.equippedId; var btnText = equipped ? '✓ Terpasang' : (owned ? 'Pasang' : 'Beli'); var btnAction = equipped ? 'unequipBorder()' : (owned ? 'equipBorder(' + b.id + ')' : 'buyBorder(' + b.id + ')'); var preview = renderMLBBAvatar({ username: state.user.username, avatarUrl: state.user.avatarUrl, borderUrl: b.url, borderScale: b.scale || 1.2, size: 72 }); var expiryText = b.owned && b.expiresAt ? '<p class="text-[10px] mb-1" style="color: #d97706;"><i class="fa-solid fa-clock mr-1"></i>s/d ' + formatDateWIB(b.expiresAt) + '</p>' : (b.durationDays > 0 ? '<p class="text-[10px] mb-1" style="color: var(--text-muted);">' + b.durationDays + ' hari</p>' : '<p class="text-[10px] mb-1" style="color: var(--text-muted);">Permanen</p>'); return '<div class="card p-3' + (equipped ? ' border-2' : '') + '"' + (equipped ? ' style="border-color: var(--accent);"' : '') + '><div class="flex justify-center mb-3">' + preview + '</div><p class="font-semibold text-sm mb-1" style="color: var(--text-primary);">' + escapeHtml(b.name) + '</p><p class="text-xs mb-1" style="color: #d97706;"><i class="fa-solid fa-coins mr-1"></i>' + b.price + ' koin</p>' + expiryText + '<button onclick="' + btnAction + '" class="btn-primary w-full" style="padding: 6px 12px; font-size: 12px;' + (equipped ? 'background: linear-gradient(135deg, #ef4444, #dc2626);' : '') + '">' + btnText + '</button></div>'; }).join('') + '</div>';
    } else {
        var data = await apiCall('/api/bubbles'); if (!data.success) { container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Gagal memuat</p>'; return; }
        if (data.data.bubbles.length === 0) { container.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Belum ada bubble</p>'; return; }
        container.innerHTML = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + data.data.bubbles.map(function(b) { var owned = b.owned, equipped = b.id === data.data.equippedId; var btnText = equipped ? '✓ Terpasang' : (owned ? 'Pasang' : 'Beli'); var btnAction = equipped ? 'unequipBubble()' : (owned ? 'equipBubble(' + b.id + ')' : 'buyBubble(' + b.id + ')'); var preview = b.css ? '<style scoped>' + b.css + '</style><div style="position:relative;">' + (b.previewHtml || '<div class="bubble-custom"><p>Preview</p></div>') + '</div>' : '<div class="bubble-default"><p class="text-sm">Contoh</p></div>'; var expiryText = b.owned && b.expiresAt ? '<p class="text-[10px] mb-1" style="color: #d97706;"><i class="fa-solid fa-clock mr-1"></i>s/d ' + formatDateWIB(b.expiresAt) + '</p>' : '<p class="text-[10px] mb-1" style="color: var(--text-muted);">' + (b.durationDays > 0 ? b.durationDays + ' hari' : 'Permanen') + '</p>'; return '<div class="card p-3' + (equipped ? ' border-2' : '') + '"' + (equipped ? ' style="border-color: var(--accent);"' : '') + '><div class="mb-3" style="min-height:70px;">' + preview + '</div><p class="font-semibold text-sm mb-1" style="color: var(--text-primary);">' + escapeHtml(b.name) + '</p><p class="text-xs mb-1" style="color: #d97706;"><i class="fa-solid fa-coins mr-1"></i>' + b.price + ' koin</p>' + expiryText + '<button onclick="' + btnAction + '" class="btn-primary w-full" style="padding: 6px 12px; font-size: 12px;' + (equipped ? 'background: linear-gradient(135deg, #ef4444, #dc2626);' : '') + '">' + btnText + '</button></div>'; }).join('') + '</div>';
    }
}
async function buyBorder(borderId) { var data = await apiCall('/api/avatar-borders/buy/' + borderId, { method: 'POST' }); if (data.success) { showToast(data.message, 'success'); loadShop(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } } else showToast(data.error || 'Gagal', 'error'); }
async function equipBorder(borderId) { var data = await apiCall('/api/avatar-borders/equip/' + borderId, { method: 'POST' }); if (data.success) { showToast('Border dipasang ✨', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } loadShop(); } else showToast(data.error || 'Gagal', 'error'); }
async function unequipBorder() { var data = await apiCall('/api/avatar-borders/equip/0', { method: 'POST' }); if (data.success) { showToast('Border dilepas', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } loadShop(); } else showToast(data.error || 'Gagal', 'error'); }
async function buyBubble(bubbleId) { var data = await apiCall('/api/bubbles/buy/' + bubbleId, { method: 'POST' }); if (data.success) { showToast(data.message, 'success'); loadShop(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } } else showToast(data.error || 'Gagal', 'error'); }
async function equipBubble(bubbleId) { var data = await apiCall('/api/bubbles/equip/' + bubbleId, { method: 'POST' }); if (data.success) { showToast('Bubble dipasang ✨', 'success'); loadShop(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } } else showToast(data.error || 'Gagal', 'error'); }
async function unequipBubble() { var data = await apiCall('/api/bubbles/equip/0', { method: 'POST' }); if (data.success) { showToast('Bubble dilepas', 'success'); loadShop(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } } else showToast(data.error || 'Gagal', 'error'); }

function openVipModal() { if (!state.user) { showToast('Login dulu', 'error'); return; } document.getElementById('vipModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; loadVipModal(); }
function closeVipModal() { document.getElementById('vipModal').classList.add('hidden'); document.body.style.overflow = ''; }
function loadVipModal() {
    var container = document.getElementById('vipContent'); var user = state.user; var isVip = user.isVip; var koin = user.koin || 0;
    var promo = state.homeNotes.promos && state.homeNotes.promos.length > 0 ? state.homeNotes.promos[0] : null; var vipPrice = promo ? promo.price_koin : 50000; var canBuy = koin >= vipPrice;
    container.innerHTML = '<div class="text-center mb-5"><div class="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);"><i class="fa-solid fa-crown text-white text-3xl"></i></div><h3 class="text-xl font-bold font-display">VIP Member</h3><p class="text-sm mt-1" style="color: var(--text-muted);">Tanpa iklan selamanya + unlimited</p></div><div class="space-y-2 mb-5"><div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-infinity" style="color: #059669;"></i><span class="text-sm">Unlimited nonton semua episode</span></div><div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-ban" style="color: #dc2626;"></i><span class="text-sm">BEBAS SEMUA IKLAN</span></div><div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-download" style="color: #06b6d4;"></i><span class="text-sm">Download premium</span></div><div class="flex items-center gap-3 p-3 rounded-xl" style="background: var(--bg-secondary);"><i class="fa-solid fa-star" style="color: #d97706;"></i><span class="text-sm">Badge VIP di profil & komentar</span></div></div>' + (isVip ? '<div class="p-4 rounded-xl text-center" style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3);"><p class="text-sm font-medium" style="color: #d97706;">Kamu sudah VIP! 🎉</p><p class="text-xs mt-1" style="color: var(--text-muted);">Berlaku sampai ' + (user.vipExpiresAtWIB || 'selamanya') + '</p></div>' : '<div class="p-4 rounded-xl mb-4" style="background: var(--bg-secondary);"><div class="flex items-center justify-between mb-2"><span class="text-sm">Harga</span><span class="font-bold" style="color: #d97706;"><i class="fa-solid fa-coins"></i> ' + formatKoin(vipPrice) + ' koin</span></div><div class="flex items-center justify-between"><span class="text-sm">Koin kamu</span><span class="font-bold" style="color: ' + (canBuy ? '#059669' : '#dc2626') + ';"><i class="fa-solid fa-coins"></i> ' + formatKoin(koin) + '</span></div></div>' + (canBuy ? '<button onclick="buyVip()" class="btn-primary w-full" style="padding: 14px;"><i class="fa-solid fa-crown mr-2"></i>Beli VIP (30 Hari)</button>' : '<button class="btn-primary w-full" style="padding: 14px;" disabled>Koin Tidak Cukup</button>'));
}
async function buyVip() { var data = await apiCall('/api/vip/buy', { method: 'POST' }); if (data.success) { showToast(data.message, 'success'); closeVipModal(); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); } if (state.currentPage === 'profile') renderProfile(); } else showToast(data.error || 'Gagal', 'error'); }

async function renderReferralPage() {
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><p class="mb-4" style="color: var(--text-secondary);">Login untuk melihat halaman referral</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    var data = await apiCall('/api/referral/stats');
    if (!data.success || !data.data) { data = { success: true, data: { referralCode: state.user.referralCode || '------', referralLink: null, stats: { registered: 0, verifiedPhone: 0, premium: 0 }, referrals: [] } }; }
    var code = data.data.referralCode || state.user.referralCode || '------'; var botUsername = data.data.telegramBotUsername || state.botUsername || state.homeNotes.telegramBotUsername || 'FesstaleMovieBot';
    var link = data.data.referralLink || ('https://t.me/' + botUsername + '?startapp=' + code);
    var stats = data.data.stats || {}; stats.registered = stats.registered || 0; stats.verifiedPhone = stats.verifiedPhone || 0; stats.premium = stats.premium || 0;
    var referralsList = data.data.referrals || []; var applyHtml = ''; var alreadyReferred = state.user.referredBy;
    if (!alreadyReferred) { applyHtml = '<div class="card p-4 mb-4 animate-fade-up"><h3 class="font-bold mb-2 text-sm flex items-center gap-2"><i class="fa-solid fa-ticket" style="color: var(--accent);"></i>Punya Kode Referral?</h3><p class="text-xs mb-3" style="color: var(--text-muted);">Masukkan kode referral temanmu. Kode hanya bisa dipakai <strong>sekali</strong> dan tidak bisa diubah setelahnya.</p><div class="flex gap-2"><input type="text" id="applyReferralCode" class="input-modern flex-1" placeholder="Contoh: DYEWJ54" style="text-transform: uppercase;" maxlength="10" autocomplete="off"><button onclick="applyReferralCode()" class="btn-primary" style="padding: 10px 16px; white-space: nowrap;">Terapkan</button></div><p class="text-[10px] mt-2" style="color: var(--text-muted);"><i class="fa-solid fa-shield-halved mr-1"></i>Sistem anti-curang: self-referral & multiple use diblokir otomatis.</p></div>'; }
    else { applyHtml = '<div class="card p-4 mb-4 animate-fade-up" style="border-color: rgba(16,185,129,0.4);"><p class="text-sm flex items-center gap-2" style="color: #059669;"><i class="fa-solid fa-circle-check"></i> Kamu sudah terdaftar via kode referral. Terima kasih!</p></div>'; }
    var friendsHtml = '';
    if (referralsList.length > 0) { friendsHtml = '<div class="card p-4 mb-4 animate-fade-up"><h3 class="font-bold mb-3 text-sm flex items-center gap-2"><i class="fa-solid fa-users" style="color: var(--accent);"></i>Teman yang Diundang <span class="badge" style="background:var(--accent); color:white;">' + referralsList.length + '</span></h3><div class="space-y-2">' + referralsList.map(function(r) { return '<div class="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-[var(--bg-card-hover)]" onclick="navigate(\'user/' + escapeAttr(r.username) + '\')"><div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style="background: ' + getAvatarColor(r.username) + ';">' + escapeHtml(r.username.charAt(0).toUpperCase()) + '</div><div class="flex-1 min-w-0"><p class="font-semibold text-sm truncate">' + escapeHtml(r.displayName || r.username) + '</p><p class="text-[10px]" style="color: var(--text-muted);">Bergabung: ' + formatDateWIB(r.createdAt) + '</p></div><div class="text-right"><p class="font-bold text-xs" style="color: #d97706;"><i class="fa-solid fa-coins"></i> +' + formatKoin(r.earnedKoin) + '</p>' + (r.isVip ? '<span class="badge vip-badge text-[8px] mt-1">VIP</span>' : '') + '</div></div>'; }).join('') + '</div></div>'; }
    else { friendsHtml = '<div class="card p-6 text-center mb-4 animate-fade-up"><i class="fa-solid fa-user-group text-4xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">Belum ada teman yang mendaftar menggunakan kodemu.</p></div>'; }
    app.innerHTML = '<button onclick="navigate(\'profile\')" class="flex items-center gap-2 text-sm mb-4" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali ke Profil</span></button><div class="referral-container animate-fade-up"><i class="fa-solid fa-gift referral-bg-icon"></i><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full" style="background: rgba(255,255,255,0.2); font-size: 11px; font-weight: 700;"><i class="fa-solid fa-users"></i> Ajak Teman, Dapat Koin</div><h2 class="text-lg font-bold mt-3 mb-1" style="line-height: 1.4;">Bagikan link Telegram Mini App kamu dan dapatkan koin tiap tahap: daftar, verifikasi, hingga teman premium.</h2><p class="text-xs font-semibold mt-5 mb-1 text-white/80">Kode Referral</p><div class="referral-code-box"><span class="referral-code-text">' + escapeHtml(code) + '</span><button onclick="copyToClipboard(\'' + escapeAttr(code) + '\')" class="btn-secondary" style="padding: 8px 16px; border: none; border-radius: 8px; font-weight: 700; color: #5b21b6;"><i class="fa-regular fa-copy mr-1"></i>Salin</button></div><div class="referral-link-box"><i class="fa-brands fa-telegram"></i><span class="truncate">' + escapeHtml(link) + '</span></div><div class="flex gap-2 mt-4"><button onclick="copyToClipboard(\'' + escapeAttr(link) + '\')" class="flex-1 py-2.5 rounded-xl font-bold text-sm" style="background: transparent; border: 1.5px solid rgba(255,255,255,0.4); color: white;"><i class="fa-regular fa-copy mr-1"></i>Salin Link</button><button onclick="shareReferral(\'' + escapeAttr(link) + '\')" class="flex-1 py-2.5 rounded-xl font-bold text-sm" style="background: white; color: #5b21b6;"><i class="fa-solid fa-share-nodes mr-1"></i>Bagikan</button></div></div>' + applyHtml + friendsHtml +
        '<div class="referral-stats-grid animate-fade-up"><div class="referral-stat-card"><div class="referral-stat-icon"><i class="fa-solid fa-user-plus"></i></div><div class="referral-stat-value">' + stats.registered + '</div><div class="referral-stat-label">Teman Daftar</div></div><div class="referral-stat-card"><div class="referral-stat-icon"><i class="fa-solid fa-comment-dots"></i></div><div class="referral-stat-value">' + stats.verifiedPhone + '</div><div class="referral-stat-label">Verifikasi WA</div></div><div class="referral-stat-card"><div class="referral-stat-icon"><i class="fa-solid fa-crown"></i></div><div class="referral-stat-value">' + stats.premium + '</div><div class="referral-stat-label">Jadi Premium</div></div></div>' +
        '<div class="referral-step-list animate-fade-up"><h3 class="font-bold mb-4 text-sm flex items-center gap-2"><i class="fa-solid fa-medal" style="color: #7c3aed;"></i> Cara Kerja Referral</h3><div class="referral-step"><div class="referral-step-line"></div><div class="referral-step-num">1</div><div class="referral-step-content"><span class="referral-step-text"><i class="fa-solid fa-user-plus mr-2 text-muted"></i>Teman daftar pakai kode kamu</span><span class="referral-step-reward">+1.000 Koin</span></div></div><div class="referral-step"><div class="referral-step-line"></div><div class="referral-step-num">2</div><div class="referral-step-content"><span class="referral-step-text"><i class="fa-solid fa-envelope mr-2 text-muted"></i>Teman melakukan verifikasi email</span><span class="referral-step-reward">+500 Koin</span></div></div><div class="referral-step"><div class="referral-step-line"></div><div class="referral-step-num">3</div><div class="referral-step-content"><span class="referral-step-text"><i class="fa-brands fa-whatsapp mr-2 text-muted"></i>Teman verifikasi WhatsApp & Telegram</span><span class="referral-step-reward">+1.000 Koin</span></div></div><div class="referral-step"><div class="referral-step-line"></div><div class="referral-step-num">4</div><div class="referral-step-content"><span class="referral-step-text"><i class="fa-solid fa-crown mr-2 text-muted"></i>Teman menjadi Premium</span><span class="referral-step-reward">+5.000 Koin</span></div></div></div>';
}

async function applyReferralCode() {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    var input = document.getElementById('applyReferralCode'); if (!input) return;
    var code = (input.value || '').trim().toUpperCase();
    if (!code) { showToast('Masukkan kode referral', 'error'); return; }
    if (!/^[A-Z0-9]{4,10}$/.test(code)) { showToast('Format kode tidak valid (4-10 huruf/angka)', 'error'); return; }
    var myCode = state.user.referralCode; if (myCode && code === myCode) { showToast('Tidak bisa memakai kode sendiri', 'error'); return; }
    if (state.user.referredBy) { showToast('Kamu sudah pernah memakai kode referral', 'error'); return; }
    var btn = input.parentElement.querySelector('button'); if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>'; }
    var data = await apiCall('/api/referral/apply', { method: 'POST', body: JSON.stringify({ code: code }) });
    if (data.success) { showToast('Kode referral berhasil diterapkan! 🎉', 'success'); var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } renderReferralPage(); }
    else { showToast(data.error || 'Gagal menerapkan kode referral', 'error'); if (btn) { btn.disabled = false; btn.textContent = 'Terapkan'; } }
}

function copyToClipboard(text) { navigator.clipboard.writeText(text).then(function() { showToast('Berhasil disalin!', 'success'); }).catch(function() { showToast('Gagal menyalin', 'error'); }); }
function shareReferral(link) { if (navigator.share) { navigator.share({ title: 'Ayo gabung di Fesstale Movie!', text: 'Nonton drakor gratis kualitas HD. Buka link Telegram ini:', url: link }).catch(function() {}); } else { copyToClipboard(link); } }

function toggleSearch() { var bar = document.getElementById('searchBar'); bar.classList.toggle('hidden'); if (!bar.classList.contains('hidden')) setTimeout(function() { document.getElementById('searchInput').focus(); }, 100); }
var searchTimeout;
async function performSearch(query, page) {
    if (query.length < 2) { if (state.currentPage === 'search') navigate('home'); return; }
    page = page || 1; state.currentPage = 'search';
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    var data = await apiCall('/api/content?q=' + encodeURIComponent(query) + '&page=' + page);
    if (data.success) { var paginationHtml = renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'searchPage(\'' + escapeAttr(query) + '\', ' + p + ')'; }); app.innerHTML = '<div class="mb-5"><h1 class="text-xl font-bold font-display mb-1">Hasil Pencarian</h1><p class="text-sm" style="color: var(--text-secondary);">' + data.data.total + ' hasil untuk "' + escapeHtml(query) + '"</p></div><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">' + data.data.content.map(renderContentCard).join('') + '</div>' + paginationHtml; }
}
function searchPage(query, page) { performSearch(query, parseInt(page) || 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }

function showInfoModal(title, content) { document.getElementById('infoTitle').textContent = title; document.getElementById('infoContent').innerHTML = content; document.getElementById('infoModal').classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function closeInfoModal() { document.getElementById('infoModal').classList.add('hidden'); document.body.style.overflow = ''; }
function showAbout() { showInfoModal('Tentang Fesstale Movie', '<p class="mb-3">Platform streaming drakor series & episode.</p><p class="text-xs" style="color: var(--text-muted);">Akses hanya melalui Telegram Mini App.</p>'); }
function showDMCA() { showInfoModal('DMCA / Legal', '<p>Fesstale does not host any media files.</p>'); }

function showPromoBanner(banner) { if (!banner || !banner.enabled || !banner.image) return; if (isPremiumUser()) return; var dismissed = sessionStorage.getItem('fesstale_promo_dismissed'); if (dismissed === banner.image) return; document.getElementById('promoBannerImage').src = banner.image; document.getElementById('promoBannerLink').href = banner.link || '#'; document.getElementById('promoBannerOverlay').classList.remove('hidden'); }
function closePromoBanner() { document.getElementById('promoBannerOverlay').classList.add('hidden'); var img = document.getElementById('promoBannerImage').src; if (img) sessionStorage.setItem('fesstale_promo_dismissed', img); }

async function renderAdmin() {
    var app = document.getElementById('app');
    if (!state.user || state.user.role !== 'admin') { app.innerHTML = '<div class="text-center py-16"><p>Akses ditolak</p></div>'; return; }
    app.innerHTML = '<button onclick="navigate(\'profile\')" class="flex items-center gap-2 text-sm mb-4" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali</span></button><h1 class="text-2xl font-bold font-display mb-4">Admin Panel</h1><div class="flex gap-2 overflow-x-auto scrollbar-hide mb-4">' +
        ['content:Series', 'episodes:Episodes', 'users:Users', 'gifts:Gifts', 'ads:Iklan', 'promos:Promo', 'vouchers:Voucher', 'borders:Border', 'bubbles:Bubble', 'levels:Level', 'customtabs:Menu', 'settings:Settings', 'telegram:Telegram', 'requests:Request'].map(function(t) { var parts = t.split(':'); var isFirst = parts[0] === 'content'; return '<button onclick="showAdminTab(\'' + parts[0] + '\')" id="adminTab' + parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + '" class="tab-btn ' + (isFirst ? 'active' : '') + '" style="white-space: nowrap;' + (parts[0] === 'telegram' ? 'color:#229ED9;' : '') + '">' + (parts[0] === 'telegram' ? '<i class="fa-brands fa-telegram mr-1"></i>' : '') + parts[1] + '</button>'; }).join('') + '</div><div id="adminContent"></div>';
    loadPendingCount(); showAdminTab('content');
}
async function loadPendingCount() { var res = await apiCall('/api/admin/pending-count'); if (res.success) { state.adminPendingRequests = res.data.count || 0; var btn = document.getElementById('adminTabRequests'); if (btn) { var existing = btn.querySelector('.admin-notif-badge'); if (existing) existing.remove(); if (state.adminPendingRequests > 0) { var span = document.createElement('span'); span.className = 'admin-notif-badge'; span.textContent = state.adminPendingRequests; btn.appendChild(span); } } } }

function showAdminTab(tab) {
    var allTabs = ['content', 'episodes', 'users', 'gifts', 'ads', 'promos', 'vouchers', 'borders', 'bubbles', 'levels', 'customtabs', 'settings', 'telegram', 'requests'];
    allTabs.forEach(function(t) { var b = document.getElementById('adminTab' + t.charAt(0).toUpperCase() + t.slice(1)); if (b) b.classList.remove('active'); });
    var tabBtn = document.getElementById('adminTab' + tab.charAt(0).toUpperCase() + tab.slice(1)); if (tabBtn) tabBtn.classList.add('active');
    var container = document.getElementById('adminContent'); if (!container) return;
    if (tab === 'content') loadAdminContent();
    else if (tab === 'episodes') loadAdminEpisodesSeriesList();
    else if (tab === 'users') loadAdminUsers();
    else if (tab === 'gifts') loadAdminGifts();
    else if (tab === 'ads') loadAdminAds();
    else if (tab === 'promos') loadAdminPromos();
    else if (tab === 'vouchers') loadAdminVouchers();
    else if (tab === 'borders') loadAdminBorders();
    else if (tab === 'bubbles') loadAdminBubbles();
    else if (tab === 'levels') loadAdminLevels();
    else if (tab === 'customtabs') loadAdminCustomTabs();
    else if (tab === 'settings') loadAdminSettings();
    else if (tab === 'telegram') loadAdminTelegram();
    else if (tab === 'requests') loadAdminRequests();
}

async function loadAdminTelegram() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var status = await apiCall('/api/telegram/status'); var data = status.success ? status.data : { configured: false };
    var webhookUrl = data.webhookInfo && data.webhookInfo.result ? data.webhookInfo.result.url : null;
    var webhookPending = data.webhookInfo && data.webhookInfo.result ? data.webhookInfo.result.pending_update_count : 0;
    var lastError = data.webhookInfo && data.webhookInfo.result ? data.webhookInfo.result.last_error_message : null;
    var html = '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm flex items-center gap-2"><i class="fa-brands fa-telegram" style="color:#229ED9;"></i>Status Telegram Bot</h2><div class="space-y-2 text-xs">' +
        '<div class="flex items-center justify-between p-2 rounded" style="background: var(--bg-secondary);"><span>Bot Token</span>' + (data.configured ? '<span style="color:#059669;"><i class="fa-solid fa-circle-check"></i> Terkonfigurasi</span>' : '<span style="color:#dc2626;"><i class="fa-solid fa-circle-xmark"></i> Belum diset</span>') + '</div>' +
        '<div class="flex items-center justify-between p-2 rounded" style="background: var(--bg-secondary);"><span>Bot Username</span>' + (data.botUsername ? '<span style="color: var(--text-primary); font-weight: 600;">@' + escapeHtml(data.botUsername) + '</span>' : '<span style="color:#d97706;">Belum diset</span>') + '</div>' +
        '<div class="flex items-center justify-between p-2 rounded" style="background: var(--bg-secondary);"><span>Mini App Mode</span><span style="color:#059669;"><i class="fa-solid fa-circle-check"></i> AKTIF</span></div>' +
        '<div class="flex items-center justify-between p-2 rounded" style="background: var(--bg-secondary);"><span>Webhook URL</span>' + (webhookUrl ? '<span style="color:#059669; font-family: monospace; font-size: 10px; max-width: 60%; overflow: hidden; text-overflow: ellipsis;">' + escapeHtml(webhookUrl) + '</span>' : '<span style="color:#d97706;">Belum diset</span>') + '</div>' +
        (webhookPending > 0 ? '<div class="flex items-center justify-between p-2 rounded" style="background: var(--bg-secondary);"><span>Pending Updates</span><span style="color:#d97706;">' + webhookPending + '</span></div>' : '') +
        (lastError ? '<div class="p-2 rounded" style="background: rgba(239,68,68,0.15);"><span style="color:#dc2626;"><i class="fa-solid fa-triangle-exclamation"></i> Last Error: ' + escapeHtml(lastError) + '</span></div>' : '') + '</div></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm flex items-center gap-2"><i class="fa-solid fa-cog" style="color: var(--accent);"></i>Konfigurasi Bot</h2><div class="space-y-2"><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">Bot Username (tanpa @)</label><input type="text" id="tgBotUsername" class="input-modern" value="' + escapeHtml(data.botUsername || '') + '" placeholder="FesstaleMovieBot"><p class="text-[10px] mt-1" style="color: var(--text-muted);">Digunakan untuk auto-generate link Mini App & referral.</p></div><button onclick="saveTelegramBotUsername()" class="btn-primary w-full" style="padding: 8px;"><i class="fa-solid fa-save mr-1"></i>Simpan Bot Username</button></div></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm flex items-center gap-2"><i class="fa-solid fa-webhook" style="color: #06b6d4;"></i>Webhook</h2><button onclick="setupTelegramWebhook()" class="btn-primary w-full mb-2" style="padding: 10px;"><i class="fa-solid fa-link mr-1"></i>Setup / Update Webhook</button><div class="mt-3 p-3 rounded-lg" style="background: rgba(124,58,237,0.08); border: 1px solid var(--border-color);"><p class="text-[11px] font-bold mb-2" style="color: var(--text-primary);"><i class="fa-solid fa-info-circle mr-1" style="color: var(--accent);"></i> Info:</p><div class="text-[11px] flex flex-col gap-1" style="color: var(--text-secondary);"><span>✅ Bot otomatis merespon /start dengan tombol Mini App</span><span>✅ User klik tombol → akun otomatis dibuat dari Telegram</span><span>✅ Notifikasi gift, komentar, dan transfer koin terkirim otomatis ke bot</span><span>✅ Referral via startapp parameter</span></div></div></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm flex items-center gap-2"><i class="fa-solid fa-terminal" style="color: #8b5cf6;"></i>Perintah Bot</h2><div class="text-xs space-y-1" style="color: var(--text-secondary);"><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/start</code> - Tampilkan menu Mini App</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/start REFCODE</code> - Daftar dengan referral</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/profile</code> - Lihat profil</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/series</code> - 10 series terbaru</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/notifications</code> - Atur notifikasi</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/help</code> - Bantuan</div><div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color);"><strong>Admin only:</strong></div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/broadcast &lt;pesan&gt;</code> - Broadcast</div><div><code style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 4px;">/stats</code> - Statistik</div></div></div>';
    c.innerHTML = html;
}
async function saveTelegramBotUsername() { var username = document.getElementById('tgBotUsername').value.trim().replace(/^@/, ''); if (!username) { showToast('Isi username dulu', 'error'); return; } var data = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ telegramBotUsername: username }) }); if (data.success) { showToast('Bot username tersimpan', 'success'); state.homeNotes.telegramBotUsername = username; state.botUsername = username; } else showToast(data.error || 'Gagal', 'error'); }
async function setupTelegramWebhook() { showToast('Menyetup webhook...', 'info'); var data = await apiCall('/api/telegram/setup-webhook', { method: 'POST' }); if (data.success) { showToast(data.message || 'Webhook berhasil disetup!', 'success'); loadAdminTelegram(); } else showToast(data.error || 'Gagal setup webhook', 'error'); }

async function loadAdminCustomTabs() {
    var container = document.getElementById('adminContent'); container.innerHTML = '<div class="skeleton h-40"></div>';
    var notes = await apiCall('/api/notes'); var customTabs = (notes.success && notes.data.customTabs) ? notes.data.customTabs : [];
    var html = '<button onclick="showAddCustomTabForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Menu Tab</button><div id="customTabFormContainer"></div><div class="space-y-2">';
    if (customTabs.length === 0) html += '<p class="text-center py-8" style="color: var(--text-muted);">Kosong</p>';
    else customTabs.forEach(function(tab) { html += '<div class="card p-3 flex items-center gap-3"><div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(124,58,237,0.15);"><i class="fa-solid ' + escapeHtml(tab.icon || 'fa-folder') + '" style="color: var(--accent);"></i></div><div class="flex-1 min-w-0"><p class="font-medium text-sm">' + escapeHtml(tab.name) + '</p><p class="text-[10px] truncate" style="color: var(--text-muted);">' + escapeHtml(tab.url || '') + '</p></div><button onclick="editCustomTab(' + tab.id + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteCustomTab(' + tab.id + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color: #dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>'; container.innerHTML = html;
}
function showAddCustomTabForm() { document.getElementById('customTabFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Menu Tab</h3><div class="space-y-3"><input type="text" id="customTabName" class="input-modern" placeholder="Nama Tab"><input type="text" id="customTabUrl" class="input-modern" placeholder="/api/content?genre=action"><input type="text" id="customTabIcon" class="input-modern" value="fa-folder"><div class="flex gap-2"><button onclick="submitAddCustomTab()" class="btn-primary flex-1">Simpan</button><button onclick="hideCustomTabForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideCustomTabForm() { document.getElementById('customTabFormContainer').innerHTML = ''; }
async function submitAddCustomTab() { var name = document.getElementById('customTabName').value.trim(); var url = document.getElementById('customTabUrl').value.trim(); var icon = document.getElementById('customTabIcon').value.trim() || 'fa-folder'; if (!name || !url) { showToast('Nama & URL wajib', 'error'); return; } var notes = await apiCall('/api/notes'); var customTabs = (notes.success && notes.data.customTabs) ? notes.data.customTabs : []; customTabs.push({ id: Date.now(), name, url, icon }); var data = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ customTabs }) }); if (data.success) { showToast('Ditambahkan', 'success'); hideCustomTabForm(); loadAdminCustomTabs(); state.homeNotes.customTabs = customTabs; renderCustomTabs(); } }
async function editCustomTab(tabId) { var notes = await apiCall('/api/notes'); var tabs = (notes.success && notes.data.customTabs) ? notes.data.customTabs : []; var tab = tabs.find(function(t) { return t.id == tabId; }); if (!tab) return; document.getElementById('customTabFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Menu Tab</h3><div class="space-y-3"><input type="text" id="editCustomTabName" class="input-modern" value="' + escapeHtml(tab.name) + '"><input type="text" id="editCustomTabUrl" class="input-modern" value="' + escapeHtml(tab.url) + '"><input type="text" id="editCustomTabIcon" class="input-modern" value="' + escapeHtml(tab.icon || 'fa-folder') + '"><div class="flex gap-2"><button onclick="submitEditCustomTab(' + tabId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideCustomTabForm()" class="btn-secondary">Batal</button></div></div></div>'; }
async function submitEditCustomTab(tabId) { var name = document.getElementById('editCustomTabName').value.trim(); var url = document.getElementById('editCustomTabUrl').value.trim(); var icon = document.getElementById('editCustomTabIcon').value.trim() || 'fa-folder'; var notes = await apiCall('/api/notes'); var customTabs = (notes.success && notes.data.customTabs) ? notes.data.customTabs : []; var idx = customTabs.findIndex(function(t) { return t.id == tabId; }); if (idx === -1) return; customTabs[idx] = Object.assign({}, customTabs[idx], { name, url, icon }); var data = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ customTabs }) }); if (data.success) { showToast('Diperbarui', 'success'); hideCustomTabForm(); loadAdminCustomTabs(); state.homeNotes.customTabs = customTabs; renderCustomTabs(); } }
async function deleteCustomTab(tabId) { if (!confirm('Hapus?')) return; var notes = await apiCall('/api/notes'); var customTabs = ((notes.success && notes.data.customTabs) ? notes.data.customTabs : []).filter(function(t) { return t.id != tabId; }); var data = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ customTabs }) }); if (data.success) { showToast('Dihapus', 'success'); loadAdminCustomTabs(); state.homeNotes.customTabs = customTabs; renderCustomTabs(); } }

async function loadAdminContent(page) {
    page = page || state.pagination.adminContent || 1; state.pagination.adminContent = page;
    var container = document.getElementById('adminContent'); var search = state.adminContentSearch || '';
    container.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/content?page=' + page + '&limit=20&q=' + encodeURIComponent(search));
    if (!data.success) { container.innerHTML = '<p class="text-center">Gagal</p>'; return; }
    var html = '<div class="flex gap-2 mb-4"><input type="text" id="adminContentSearch" class="input-modern flex-1" placeholder="Cari judul / deskripsi..." value="' + escapeHtml(search) + '" onkeydown="if(event.key===\'Enter\'){state.adminContentSearch=this.value;loadAdminContent(1);}"><button onclick="state.adminContentSearch=document.getElementById(\'adminContentSearch\').value;loadAdminContent(1)" class="btn-secondary"><i class="fa-solid fa-search"></i></button></div><button onclick="showAddContentForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Series</button><div id="contentFormContainer"></div><div class="space-y-2">';
    data.data.content.forEach(function(c) { var epInfo = c.totalEpisodes > 0 ? '<span class="admin-series-id-badge ml-1">' + c.totalEpisodes + ' eps</span>' : ''; var featuredBadge = c.isFeatured ? '<span class="badge ml-1" style="background: rgba(251,191,36,0.2); color:#d97706; font-size:9px;">⭐ FEATURED</span>' : ''; html += '<div class="card p-3 flex items-center gap-3">' + (c.poster_url ? '<img src="' + c.poster_url + '" class="w-12 h-16 rounded-lg object-cover" oncontextmenu="return false;" draggable="false" alt="Poster">' : '<div class="w-12 h-16 rounded-lg flex items-center justify-center" style="background: var(--bg-secondary);"><i class="fa-solid fa-video" style="color: var(--text-muted);"></i></div>') + '<div class="flex-1 min-w-0"><p class="font-medium text-sm truncate">' + escapeHtml(c.title) + ' <span class="admin-series-id-badge">ID: ' + c.id + '</span>' + epInfo + featuredBadge + '</p><div class="flex items-center gap-2 text-[10px]" style="color: var(--text-muted);"><span>' + c.type + '</span><span>•</span><span>Eps ' + (c.latest_episode_number || 0) + '/' + (c.total_episodes || 0) + '</span></div></div><button onclick="editContent(' + c.id + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteContent(' + c.id + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color: #dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>' + renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'loadAdminContent(' + p + ')'; });
    container.innerHTML = html;
}

function showAddContentForm() {
    document.getElementById('contentFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Series</h3><p class="text-[10px] mb-3" style="color: var(--text-muted);">Setelah simpan, catat ID series untuk menambah episode di tab "Episodes".</p><div class="space-y-3"><input type="text" id="addTitle" class="input-modern" placeholder="Judul Series *"><textarea id="addDescription" class="input-modern" rows="2" placeholder="Deskripsi"></textarea><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">Thumbnail / Poster *</label><input type="file" id="addPosterFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="addPosterUrl" class="input-modern" placeholder="URL Foto (auto terisi setelah upload Gyazo)"><button onclick="uploadToGyazo(\'addPosterFile\', \'addPosterUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><div class="grid grid-cols-2 gap-2"><input type="number" id="addRating" class="input-modern" value="0" step="0.1" placeholder="Rating"><input type="number" id="addDuration" class="input-modern" value="0" placeholder="Durasi (menit)"></div><input type="text" id="addGenres" class="input-modern" placeholder="Genre (koma)"><input type="text" id="addCountry" class="input-modern" placeholder="Negara (KR, CN, ID)"><input type="text" id="addYear" class="input-modern" placeholder="Tahun"><select id="addType" class="input-modern"><option value="free">Free</option><option value="premium">Premium (VIP)</option><option value="coin">Coin</option></select><input type="number" id="addPrice" class="input-modern" value="0" placeholder="Harga koin"><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="addFeatured"> Tampilkan di Carousel Featured</label><div class="flex gap-2 pt-2"><button onclick="submitAddContent()" class="btn-primary flex-1">Simpan Series</button><button onclick="hideAddContentForm()" class="btn-secondary">Batal</button></div></div></div>';
}
function hideAddContentForm() { document.getElementById('contentFormContainer').innerHTML = ''; }
async function submitAddContent() {
    var title = document.getElementById('addTitle').value.trim(); var description = document.getElementById('addDescription').value.trim(); var posterUrl = document.getElementById('addPosterUrl').value.trim();
    var rating = parseFloat(document.getElementById('addRating').value) || 0; var duration = parseInt(document.getElementById('addDuration').value) || 0;
    var genres = document.getElementById('addGenres').value.trim(); var country = document.getElementById('addCountry').value.trim(); var year = document.getElementById('addYear').value.trim();
    var type = document.getElementById('addType').value; var price = parseInt(document.getElementById('addPrice').value) || 0; var isFeatured = document.getElementById('addFeatured').checked;
    if (!title || !posterUrl) { showToast('Judul & foto wajib', 'error'); return; }
    var data = await apiCall('/api/admin/content', { method: 'POST', body: JSON.stringify({ title, description, posterUrl, rating, duration, genres, country, year, type, price, isFeatured }) });
    if (data.success) { showToast('Series berhasil ditambahkan! ID: ' + data.data.id, 'success'); hideAddContentForm(); loadAdminContent(1); loadFooterStats(); setTimeout(function() { showAdminTab('episodes'); state.adminActiveSeriesId = data.data.id; loadAdminEpisodes(data.data.id); }, 800); }
    else showToast(data.error || 'Gagal', 'error');
}
async function editContent(contentId) {
    var data = await apiCall('/api/content/' + contentId); if (!data.success) return; var c = data.data;
    document.getElementById('contentFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Series <span class="admin-series-id-badge">ID: ' + contentId + '</span></h3><div class="space-y-3"><input type="text" id="editTitle" class="input-modern" value="' + escapeHtml(c.title) + '"><textarea id="editDescription" class="input-modern" rows="2">' + escapeHtml(c.description || '') + '</textarea><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">Thumbnail / Poster</label><input type="file" id="editPosterFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="editPosterUrl" class="input-modern" value="' + escapeHtml(c.posterUrl || '') + '"><button onclick="uploadToGyazo(\'editPosterFile\', \'editPosterUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><div class="grid grid-cols-2 gap-2"><input type="number" id="editRating" class="input-modern" value="' + (c.rating || 0) + '" step="0.1"><input type="number" id="editDuration" class="input-modern" value="' + (c.duration || 0) + '"></div><input type="text" id="editGenres" class="input-modern" value="' + escapeHtml((c.genres || []).join(', ')) + '" placeholder="Genre (koma)"><input type="text" id="editCountry" class="input-modern" value="' + escapeHtml(c.country || '') + '" placeholder="Negara"><input type="text" id="editYear" class="input-modern" value="' + escapeHtml(c.year || '') + '" placeholder="Tahun"><select id="editType" class="input-modern"><option value="free" ' + (c.type === 'free' ? 'selected' : '') + '>Free</option><option value="premium" ' + (c.type === 'premium' ? 'selected' : '') + '>Premium</option><option value="coin" ' + (c.type === 'coin' ? 'selected' : '') + '>Coin</option></select><input type="number" id="editPrice" class="input-modern" value="' + (c.price || 0) + '"><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="editFeatured" ' + (c.isFeatured ? 'checked' : '') + '> Tampilkan di Carousel Featured</label><div class="flex gap-2 pt-2"><button onclick="submitEditContent(' + contentId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideAddContentForm()" class="btn-secondary">Batal</button></div></div></div>';
}
async function submitEditContent(contentId) {
    var body = { title: document.getElementById('editTitle').value.trim(), description: document.getElementById('editDescription').value.trim(), posterUrl: document.getElementById('editPosterUrl').value.trim(), rating: parseFloat(document.getElementById('editRating').value) || 0, duration: parseInt(document.getElementById('editDuration').value) || 0, genres: document.getElementById('editGenres').value.trim(), country: document.getElementById('editCountry').value.trim(), year: document.getElementById('editYear').value.trim(), type: document.getElementById('editType').value, price: parseInt(document.getElementById('editPrice').value) || 0, isFeatured: document.getElementById('editFeatured').checked };
    var data = await apiCall('/api/admin/content/' + contentId, { method: 'PUT', body: JSON.stringify(body) });
    if (data.success) { showToast('Diperbarui', 'success'); hideAddContentForm(); loadAdminContent(state.pagination.adminContent); } else showToast(data.error || 'Gagal', 'error');
}
async function deleteContent(contentId) { if (!confirm('Hapus series ini secara PERMANEN?\n\nSemua episode, komentar, dan riwayat terkait akan ikut terhapus dan tidak bisa dikembalikan.')) return; var d = await apiCall('/api/admin/content/' + contentId, { method: 'DELETE' }); if (d.success) { showToast('Series & semua episode dihapus', 'success'); loadAdminContent(state.pagination.adminContent); loadFooterStats(); } else showToast(d.error || 'Gagal', 'error'); }

async function loadAdminEpisodesSeriesList() {
    var container = document.getElementById('adminContent'); container.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/content?page=1&limit=100'); if (!data.success) { container.innerHTML = '<p class="text-center">Gagal</p>'; return; }
    var html = '<div class="card p-3 mb-4" style="background: rgba(124,58,237,0.08); border-color: var(--accent);"><p class="text-xs" style="color: var(--text-secondary);"><i class="fa-solid fa-info-circle mr-1" style="color: var(--accent);"></i> Klik series untuk kelola episode. ID series ada di sebelah judul.</p></div><h3 class="font-bold mb-3">Pilih Series</h3><div class="mb-3 relative"><i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs" style="color: var(--text-muted);"></i><input type="text" id="adminSeriesSearchInput" class="input-modern" style="padding: 10px 12px 10px 32px;" placeholder="Cari series (judul / ID)..." oninput="filterAdminSeriesList(this.value)"></div>';
    if (data.data.content.length === 0) { html += '<div class="card p-8 text-center"><i class="fa-solid fa-inbox text-4xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">Belum ada series. Tambah dulu di tab Series.</p></div>'; }
    else { html += '<div class="space-y-2" id="adminSeriesListContainer">'; data.data.content.forEach(function(c) { html += '<div class="admin-series-row" data-title="' + escapeAttr((c.title || '').toLowerCase()) + '" data-id="' + c.id + '" onclick="loadAdminEpisodes(' + c.id + ')">' + (c.poster_url ? '<img src="' + c.poster_url + '" class="w-10 h-14 rounded-lg object-cover flex-shrink-0" oncontextmenu="return false;" draggable="false" alt="Poster">' : '<div class="w-10 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--bg-secondary);"><i class="fa-solid fa-video" style="color: var(--text-muted);"></i></div>') + '<div class="flex-1 min-w-0"><p class="font-medium text-sm truncate">' + escapeHtml(c.title) + '</p><div class="flex items-center gap-2 text-[10px] mt-1" style="color: var(--text-muted);"><span class="admin-series-id-badge">ID: ' + c.id + '</span><span>' + (c.total_episodes || 0) + ' episode</span>' + (c.latest_episode_number ? '<span>• Eps terbaru: ' + c.latest_episode_number + '</span>' : '') + '</div></div><i class="fa-solid fa-chevron-right" style="color: var(--text-muted);"></i></div>'; }); html += '</div><p id="adminSeriesEmpty" class="text-center py-6 text-sm hidden" style="color: var(--text-muted);">Tidak ada series yang cocok</p>'; }
    container.innerHTML = html;
}
function filterAdminSeriesList(query) { query = (query || '').toLowerCase().trim(); var rows = document.querySelectorAll('#adminSeriesListContainer .admin-series-row'); var shown = 0; rows.forEach(function(row) { var title = row.dataset.title || ''; var id = row.dataset.id || ''; if (!query || title.indexOf(query) !== -1 || id.indexOf(query) !== -1) { row.style.display = ''; shown++; } else { row.style.display = 'none'; } }); var empty = document.getElementById('adminSeriesEmpty'); if (empty) { if (shown === 0) empty.classList.remove('hidden'); else empty.classList.add('hidden'); } }

async function loadAdminEpisodes(seriesId, page, q) {
    state.adminActiveSeriesId = seriesId; page = page || state.pagination.adminEpisodes || 1; state.pagination.adminEpisodes = page;
    if (q !== undefined) state.adminEpisodesSearch = q;
    var container = document.getElementById('adminContent'); container.innerHTML = '<div class="skeleton h-40"></div>';
    var url = '/api/admin/series/' + seriesId + '/episodes?page=' + page + '&limit=20&q=' + encodeURIComponent(state.adminEpisodesSearch || '');
    var data = await apiCall(url); if (!data.success) { container.innerHTML = '<p class="text-center">Gagal</p>'; return; }
    var series = data.data; var episodes = series.episodes || [];
    var html = '<button onclick="loadAdminEpisodesSeriesList()" class="flex items-center gap-2 text-sm mb-3" style="color: var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Kembali ke daftar series</span></button><div class="card p-3 mb-4" style="background: rgba(124,58,237,0.08); border-color: var(--accent);"><div class="flex items-center justify-between flex-wrap gap-2"><div><p class="text-xs font-semibold" style="color: var(--text-primary);">Series: ' + escapeHtml(series.seriesTitle) + '</p><p class="text-[10px] mt-1" style="color: var(--text-muted);">Gunakan ID series ini untuk menambah episode:</p></div><span class="admin-series-id-badge" style="font-size: 14px; padding: 4px 10px;">ID: ' + seriesId + '</span></div></div><div class="flex gap-2 mb-3"><button onclick="showAddEpisodeForm(' + seriesId + ', ' + (episodes.length > 0 ? Math.max.apply(null, episodes.map(function(e) { return e.episode_number; })) + 1 : 1) + ')" class="btn-primary flex-1"><i class="fa-solid fa-plus mr-2"></i>Tambah Episode</button></div><div class="mb-3"><input type="text" class="input-modern" placeholder="Cari episode (judul / nomor)..." value="' + escapeHtml(state.adminEpisodesSearch || '') + '" onkeydown="if(event.key===\'Enter\'){state.adminEpisodesSearch=this.value;state.pagination.adminEpisodes=1;loadAdminEpisodes(' + seriesId + ', 1, this.value);}"></div><div id="episodeFormContainer"></div>';
    if (episodes.length === 0) { html += '<div class="card p-8 text-center"><i class="fa-solid fa-inbox text-4xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">' + (state.adminEpisodesSearch ? 'Tidak ada episode cocok' : 'Belum ada episode. Klik "Tambah Episode" untuk mulai.') + '</p></div>'; }
    else { html += '<h3 class="font-bold mb-3">Daftar Episode <span class="text-xs font-normal" style="color: var(--text-muted);">(' + data.data.total + ' total)</span></h3><div class="space-y-2">'; episodes.forEach(function(e) { var status = e.is_active ? '' : '<span class="badge ml-1" style="background: rgba(239,68,68,0.2); color: #dc2626; font-size: 9px;">NONAKTIF</span>'; var thumb = e.thumbnail_url ? '<img src="' + e.thumbnail_url + '" class="w-16 h-10 rounded-md object-cover flex-shrink-0" oncontextmenu="return false;" draggable="false" alt="Thumb">' : '<div class="w-16 h-10 rounded-md flex items-center justify-center flex-shrink-0" style="background: var(--bg-secondary);"><i class="fa-solid fa-film" style="color: var(--text-muted);"></i></div>'; html += '<div class="card p-2 flex items-center gap-2">' + thumb + '<div class="flex-1 min-w-0"><p class="font-semibold text-xs">Eps ' + e.episode_number + (e.title ? ' — ' + escapeHtml(e.title) : '') + status + '</p><p class="text-[10px]" style="color: var(--text-muted);">' + (e.duration ? formatDuration(e.duration) + ' • ' : '') + e.type + (e.type === 'coin' ? ' • ' + e.price + ' koin' : '') + '</p></div><button onclick="editEpisode(' + e.id + ', ' + seriesId + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteEpisode(' + e.id + ', ' + seriesId + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color: #dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; }); html += '</div>'; html += renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'adminEpisodesPage(' + seriesId + ', ' + p + ')'; }); }
    container.innerHTML = html;
}
function adminEpisodesPage(seriesId, page) { state.pagination.adminEpisodes = parseInt(page) || 1; loadAdminEpisodes(seriesId, state.pagination.adminEpisodes, state.adminEpisodesSearch); }

function showAddEpisodeForm(seriesId, defaultEpNumber) {
    document.getElementById('episodeFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Episode Baru</h3><div class="mb-2 p-2 rounded" style="background: var(--bg-secondary);"><p class="text-xs" style="color: var(--text-secondary);">Series ID: <strong class="admin-series-id-badge">' + seriesId + '</strong></p></div><div class="space-y-3"><input type="number" id="addEpNumber" class="input-modern" value="' + defaultEpNumber + '" placeholder="Nomor episode *" min="1"><input type="text" id="addEpTitle" class="input-modern" placeholder="Judul episode (opsional)"><textarea id="addEpDescription" class="input-modern" rows="2" placeholder="Deskripsi episode (opsional)"></textarea><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">Thumbnail Episode</label><input type="file" id="addEpThumbFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="addEpThumbUrl" class="input-modern" placeholder="URL Thumbnail (auto terisi setelah upload Gyazo)"><button onclick="uploadToGyazo(\'addEpThumbFile\', \'addEpThumbUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><input type="number" id="addEpDuration" class="input-modern" value="0" placeholder="Durasi (menit)"><input type="text" id="addEpServer1Name" class="input-modern mb-1" placeholder="Server 1 nama (default Server 1)"><input type="text" id="addEpServer1Url" class="input-modern" placeholder="Server 1 URL *"><div class="flex items-center gap-2 mb-2"><input type="checkbox" id="addEpServer1Vip"><label for="addEpServer1Vip" class="text-xs" style="color:var(--text-primary);">Server 1 VIP Only</label></div><input type="text" id="addEpServer2Name" class="input-modern mb-1" placeholder="Server 2 nama"><input type="text" id="addEpServer2Url" class="input-modern" placeholder="Server 2 URL (opsional)"><div class="flex items-center gap-2 mb-2"><input type="checkbox" id="addEpServer2Vip"><label for="addEpServer2Vip" class="text-xs" style="color:var(--text-primary);">Server 2 VIP Only</label></div><input type="text" id="addEpDownloadFree" class="input-modern" placeholder="Download Free URL (opsional)"><input type="text" id="addEpDownloadPremium" class="input-modern" placeholder="Download Premium URL (opsional)"><select id="addEpType" class="input-modern"><option value="free">Free</option><option value="premium">Premium (VIP)</option><option value="coin">Coin</option></select><input type="number" id="addEpPrice" class="input-modern" value="0" placeholder="Harga koin (jika coin)"><div class="flex gap-2 pt-2"><button onclick="submitAddEpisode(' + seriesId + ')" class="btn-primary flex-1">Simpan Episode</button><button onclick="hideEpisodeForm()" class="btn-secondary">Batal</button></div></div></div>';
}
function hideEpisodeForm() { document.getElementById('episodeFormContainer').innerHTML = ''; }
async function submitAddEpisode(seriesId) {
    var epNum = parseInt(document.getElementById('addEpNumber').value) || 0; var title = document.getElementById('addEpTitle').value.trim(); var description = document.getElementById('addEpDescription').value.trim();
    var thumbnailUrl = document.getElementById('addEpThumbUrl').value.trim(); var duration = parseInt(document.getElementById('addEpDuration').value) || 0;
    var s1n = document.getElementById('addEpServer1Name').value.trim() || 'Server 1'; var s1u = document.getElementById('addEpServer1Url').value.trim(); var s1v = document.getElementById('addEpServer1Vip').checked;
    var s2n = document.getElementById('addEpServer2Name').value.trim(); var s2u = document.getElementById('addEpServer2Url').value.trim(); var s2v = document.getElementById('addEpServer2Vip').checked;
    var df = document.getElementById('addEpDownloadFree').value.trim(); var dp = document.getElementById('addEpDownloadPremium').value.trim();
    var type = document.getElementById('addEpType').value; var price = parseInt(document.getElementById('addEpPrice').value) || 0;
    if (epNum < 1) { showToast('Nomor episode wajib diisi', 'error'); return; } if (!s1u) { showToast('Server 1 URL wajib', 'error'); return; }
    var videoServers = [{ name: s1n, url: s1u, isVip: s1v }]; if (s2u) videoServers.push({ name: s2n || 'Server 2', url: s2u, isVip: s2v });
    var body = { episodeNumber: epNum, title, description, thumbnailUrl, videoServers, duration, type, price, downloadFree: df, downloadPremium: dp };
    var data = await apiCall('/api/admin/series/' + seriesId + '/episodes', { method: 'POST', body: JSON.stringify(body) });
    if (data.success) { showToast('Episode ' + epNum + ' berhasil ditambahkan!', 'success'); hideEpisodeForm(); loadAdminEpisodes(seriesId, 1, state.adminEpisodesSearch); } else showToast(data.error || 'Gagal', 'error');
}
async function editEpisode(episodeId, seriesId) {
    var data = await apiCall('/api/admin/series/' + seriesId + '/episodes?page=1&limit=1000'); if (!data.success) return;
    var ep = data.data.episodes.find(function(x) { return x.id === episodeId; }); if (!ep) return;
    var servers = []; try { servers = JSON.parse(ep.video_servers || '[]'); } catch (e) {}
    document.getElementById('episodeFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Episode ' + ep.episode_number + '</h3><div class="space-y-3"><input type="number" id="editEpNumber" class="input-modern" value="' + ep.episode_number + '"><input type="text" id="editEpTitle" class="input-modern" value="' + escapeHtml(ep.title || '') + '" placeholder="Judul"><textarea id="editEpDescription" class="input-modern" rows="2" placeholder="Deskripsi">' + escapeHtml(ep.description || '') + '</textarea><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">Thumbnail</label><input type="file" id="editEpThumbFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="editEpThumbUrl" class="input-modern" value="' + escapeHtml(ep.thumbnail_url || '') + '"><button onclick="uploadToGyazo(\'editEpThumbFile\', \'editEpThumbUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><input type="number" id="editEpDuration" class="input-modern" value="' + (ep.duration || 0) + '"><textarea id="editEpServers" class="input-modern" rows="3" style="font-family: monospace; font-size: 11px;" placeholder="JSON array servers">' + escapeHtml(JSON.stringify(servers, null, 0)) + '</textarea><input type="text" id="editEpDownloadFree" class="input-modern" value="' + escapeHtml(ep.download_free || '') + '" placeholder="Download Free URL"><input type="text" id="editEpDownloadPremium" class="input-modern" value="' + escapeHtml(ep.download_premium || '') + '" placeholder="Download Premium URL"><select id="editEpType" class="input-modern"><option value="free" ' + (ep.type === 'free' ? 'selected' : '') + '>Free</option><option value="premium" ' + (ep.type === 'premium' ? 'selected' : '') + '>Premium</option><option value="coin" ' + (ep.type === 'coin' ? 'selected' : '') + '>Coin</option></select><input type="number" id="editEpPrice" class="input-modern" value="' + (ep.price || 0) + '"><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="editEpActive" ' + (ep.is_active ? 'checked' : '') + '> Aktif</label><div class="flex gap-2 pt-2"><button onclick="submitEditEpisode(' + episodeId + ', ' + seriesId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideEpisodeForm()" class="btn-secondary">Batal</button></div></div></div>';
}
async function submitEditEpisode(episodeId, seriesId) {
    var body = { episodeNumber: parseInt(document.getElementById('editEpNumber').value) || 1, title: document.getElementById('editEpTitle').value.trim(), description: document.getElementById('editEpDescription').value.trim(), thumbnailUrl: document.getElementById('editEpThumbUrl').value.trim(), duration: parseInt(document.getElementById('editEpDuration').value) || 0, downloadFree: document.getElementById('editEpDownloadFree').value.trim(), downloadPremium: document.getElementById('editEpDownloadPremium').value.trim(), type: document.getElementById('editEpType').value, price: parseInt(document.getElementById('editEpPrice').value) || 0, isActive: document.getElementById('editEpActive').checked };
    try { body.videoServers = JSON.parse(document.getElementById('editEpServers').value.trim()); } catch (e) { showToast('JSON servers error', 'error'); return; }
    var data = await apiCall('/api/admin/episodes/' + episodeId, { method: 'PUT', body: JSON.stringify(body) });
    if (data.success) { showToast('Episode diperbarui', 'success'); hideEpisodeForm(); loadAdminEpisodes(seriesId, state.pagination.adminEpisodes, state.adminEpisodesSearch); } else showToast(data.error || 'Gagal', 'error');
}
async function deleteEpisode(episodeId, seriesId) { if (!confirm('Hapus episode ini?')) return; var d = await apiCall('/api/admin/episodes/' + episodeId, { method: 'DELETE' }); if (d.success) { showToast('Episode dihapus', 'success'); loadAdminEpisodes(seriesId, state.pagination.adminEpisodes, state.adminEpisodesSearch); } else showToast(d.error || 'Gagal', 'error'); }

async function uploadToGyazo(fileInputId, targetInputId) {
    var fileInput = document.getElementById(fileInputId); if (!fileInput || !fileInput.files[0]) { showToast('Pilih file dulu', 'error'); return; }
    var formData = new FormData(); formData.append('image', fileInput.files[0]); showToast('Upload ke Gyazo...', 'info');
    try { var response = await fetch(API_BASE + '/api/upload/gyazo', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData }); var data = await response.json(); if (data.success) { document.getElementById(targetInputId).value = data.data.url; showToast('Upload berhasil!', 'success'); } else showToast(data.error || 'Gagal', 'error'); }
    catch (e) { showToast('Gagal upload: ' + e.message, 'error'); }
}

async function loadAdminUsers() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/users'); if (!data.success) { c.innerHTML = '<p class="text-center">Gagal</p>'; return; }
    var html = '<input type="text" id="adminUserSearch" class="input-modern mb-3" placeholder="Cari user..." oninput="searchAdminUsers()"><div id="adminUsersList">';
    data.data.users.forEach(function(u) { html += renderAdminUserCard(u); }); html += '</div>'; c.innerHTML = html;
}
function renderAdminUserCard(u) {
    var vipBadge = u.isVip ? '<span class="badge vip-badge ml-1" style="font-size:8px;">VIP</span>' : '';
    var adminBadge = u.role === 'admin' ? '<span class="badge" style="background: rgba(239,68,68,0.2); color: #dc2626; font-size:8px;">Admin</span>' : '';
    var blockedBadge = u.isBlocked ? '<span class="badge ml-1" style="background: rgba(239,68,68,0.3); color: #dc2626; font-size:8px;"><i class="fa-solid fa-ban"></i> BLOCKED</span>' : '';
    var verifiedBadge = u.isVerified ? verifiedSvgSize('sm') : '';
    var tgBadge = u.telegramId ? '<span class="badge ml-1" style="background: rgba(34,158,217,0.15); color: #229ED9; font-size:8px;"><i class="fa-brands fa-telegram"></i> TG</span>' : '';
    var ipHtml = u.ipAddress ? '<p class="text-[10px] truncate" style="color: var(--text-muted);"><i class="fa-solid fa-network-wired mr-1"></i>' + escapeHtml(u.ipAddress) + '</p>' : '<p class="text-[10px]" style="color: var(--text-muted);"><i class="fa-solid fa-network-wired mr-1"></i>-</p>';
    var blockBtn = u.ipAddress ? '<button onclick="toggleBlockIp(' + u.id + ', ' + (u.isBlocked ? 'true' : 'false') + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color:' + (u.isBlocked ? '#059669' : '#d97706') + ';" title="' + (u.isBlocked ? 'Unblock IP' : 'Block IP') + '"><i class="fa-solid ' + (u.isBlocked ? 'fa-unlock' : 'fa-ban') + '"></i></button>' : '';
    var verifyBtn = '<button onclick="toggleVerify(' + u.id + ', ' + (u.isVerified ? 'false' : 'true') + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color:' + (u.isVerified ? '#1d9bf0' : '#94a3b8') + ';" title="' + (u.isVerified ? 'Cabut verifikasi' : 'Verifikasi user') + '"><i class="fa-solid fa-circle-check"></i></button>';
    return '<div class="card p-3 flex items-center gap-2 mb-2"><div style="background: ' + getAvatarColor(u.username) + '; width:32px;height:32px;border-radius:50%;font-size:13px;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;">' + escapeHtml(u.username.charAt(0).toUpperCase()) + '</div><div class="flex-1 min-w-0"><p class="font-medium text-xs truncate">' + escapeHtml(u.display_name || u.username) + ' <span style="color:var(--text-muted);">@' + escapeHtml(u.username) + '</span>' + verifiedBadge + vipBadge + adminBadge + tgBadge + blockedBadge + '</p><p class="text-[10px]" style="color: var(--text-muted);">Lv.' + u.level + ' • ' + formatKoin(u.koin) + ' koin</p>' + ipHtml + '</div>' + verifyBtn + '<button onclick="toggleVip(' + u.id + ', ' + (u.isVip ? 'false' : 'true') + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;">' + (u.isVip ? 'Cabut' : 'VIP') + '</button><button onclick="promptSetKoin(' + u.id + ', \'' + escapeAttr(u.username) + '\')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;"><i class="fa-solid fa-coins"></i></button>' + blockBtn + '<button onclick="deleteAdminUser(' + u.id + ', \'' + escapeAttr(u.username) + '\')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>';
}
async function searchAdminUsers() { var q = document.getElementById('adminUserSearch').value.trim(); var data = await apiCall('/api/admin/users?q=' + encodeURIComponent(q)); if (data.success) document.getElementById('adminUsersList').innerHTML = data.data.users.map(renderAdminUserCard).join(''); }
async function toggleVip(userId, isVip) { var d = await apiCall('/api/admin/users/' + userId + '/vip', { method: 'PUT', body: JSON.stringify({ isVip, durationDays: isVip ? 30 : 0 }) }); if (d.success) { showToast(d.message, 'success'); loadAdminUsers(); } }
async function toggleVerify(userId, isVerified) { var d = await apiCall('/api/admin/users/' + userId + '/verify', { method: 'PUT', body: JSON.stringify({ isVerified }) }); if (d.success) { showToast(d.message || 'OK', 'success'); loadAdminUsers(); } else showToast(d.error || 'Gagal', 'error'); }
async function promptSetKoin(userId, username) { var input = prompt('Koin untuk ' + username + ':\n(contoh: 100 untuk set, +100 untuk tambah)', '100'); if (!input) return; var action = 'set', val = parseInt(input); if (input.startsWith('+')) { action = 'add'; val = parseInt(input.substring(1)); } var d = await apiCall('/api/admin/users/' + userId + '/koin', { method: 'PUT', body: JSON.stringify({ koin: val, action }) }); if (d.success) { showToast('OK', 'success'); loadAdminUsers(); } }
async function toggleBlockIp(userId, currentlyBlocked) { var action = currentlyBlocked ? 'meng-unblock' : 'memblokir'; if (!confirm('Yakin ' + action + ' IP user ini?')) return; var d = await apiCall('/api/admin/users/' + userId + '/block-ip', { method: 'PUT', body: JSON.stringify({ block: !currentlyBlocked }) }); if (d.success) { showToast(d.message || 'OK', 'success'); loadAdminUsers(); } else showToast(d.error || 'Gagal', 'error'); }
async function deleteAdminUser(userId, username) { if (!confirm('Hapus user @' + username + ' secara PERMANEN?\n\nSemua data akan terhapus dan tidak bisa dikembalikan.')) return; var d = await apiCall('/api/admin/users/' + userId, { method: 'DELETE' }); if (d.success) { showToast('User dihapus', 'success'); loadAdminUsers(); } else showToast(d.error || 'Gagal', 'error'); }

async function loadAdminGifts() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/gifts'); if (!data.success) { c.innerHTML = '<p class="text-center">Gagal</p>'; return; }
    var html = '<button onclick="showAddGiftForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Gift</button><div id="giftFormContainer"></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3">';
    data.data.gifts.forEach(function(g) { var status = g.is_active ? '<span class="badge" style="background: rgba(16,185,129,0.2); color:#059669; font-size:9px;">AKTIF</span>' : '<span class="badge" style="background: rgba(239,68,68,0.2); color:#dc2626; font-size:9px;">NONAKTIF</span>'; html += '<div class="card p-3 flex flex-col items-center text-center"><img src="' + g.url + '" style="width: 64px; height: 64px; object-fit: contain; margin-bottom: 8px;" oncontextmenu="return false;" draggable="false" alt="Gift"><p class="font-semibold text-sm">' + escapeHtml(g.name) + '</p><p class="text-xs" style="color: #d97706;"><i class="fa-solid fa-coins"></i> ' + formatKoin(g.price) + '</p><p class="text-[10px]" style="color: #8b5cf6;"><i class="fa-solid fa-star"></i> +' + g.exp_reward + ' EXP</p><div class="mt-2">' + status + '</div><div class="flex gap-1 mt-2 w-full"><button onclick="editGift(' + g.id + ')" class="btn-secondary flex-1" style="padding: 4px 8px; font-size: 10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteGift(' + g.id + ')" class="btn-secondary flex-1" style="padding: 4px 8px; font-size: 10px; color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div></div>'; });
    html += '</div>'; c.innerHTML = html;
}
function showAddGiftForm() { document.getElementById('giftFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Gift</h3><div class="space-y-3"><input type="text" id="giftName" class="input-modern" placeholder="Nama Gift * (contoh: Bunga Mawar)"><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">URL Foto Gift *</label><input type="file" id="giftImageFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="giftImageUrl" class="input-modern" placeholder="URL Foto (auto terisi setelah upload Gyazo)"><button onclick="uploadToGyazo(\'giftImageFile\', \'giftImageUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><input type="number" id="giftPrice" class="input-modern" value="100" placeholder="Harga koin *"><input type="number" id="giftExp" class="input-modern" value="10" placeholder="EXP reward *"><div class="flex gap-2"><button onclick="submitAddGift()" class="btn-primary flex-1">Simpan</button><button onclick="hideGiftForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideGiftForm() { document.getElementById('giftFormContainer').innerHTML = ''; }
async function submitAddGift() { var name = document.getElementById('giftName').value.trim(); var url = document.getElementById('giftImageUrl').value.trim(); var price = parseInt(document.getElementById('giftPrice').value) || 0; var expReward = parseInt(document.getElementById('giftExp').value) || 0; if (!name || !url) { showToast('Nama & URL wajib', 'error'); return; } var d = await apiCall('/api/admin/gifts', { method: 'POST', body: JSON.stringify({ name, url, price, expReward }) }); if (d.success) { showToast('Gift ditambahkan', 'success'); hideGiftForm(); loadAdminGifts(); } else showToast(d.error || 'Gagal', 'error'); }
async function editGift(giftId) { var data = await apiCall('/api/admin/gifts'); if (!data.success) return; var g = data.data.gifts.find(function(x) { return x.id === giftId; }); if (!g) return; document.getElementById('giftFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Gift</h3><div class="space-y-3"><input type="text" id="editGiftName" class="input-modern" value="' + escapeHtml(g.name) + '"><div><label class="block text-xs mb-1" style="color: var(--text-secondary);">URL Foto</label><input type="file" id="editGiftImageFile" accept="image/*" class="input-modern mb-1" style="padding: 6px;"><input type="text" id="editGiftImageUrl" class="input-modern" value="' + escapeHtml(g.url) + '"><button onclick="uploadToGyazo(\'editGiftImageFile\', \'editGiftImageUrl\')" class="btn-secondary w-full mt-1" style="padding: 6px; font-size: 11px;"><i class="fa-solid fa-upload mr-1"></i>Upload via Gyazo</button></div><input type="number" id="editGiftPrice" class="input-modern" value="' + g.price + '"><input type="number" id="editGiftExp" class="input-modern" value="' + g.exp_reward + '"><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="editGiftActive" ' + (g.is_active ? 'checked' : '') + '> Aktif</label><div class="flex gap-2"><button onclick="submitEditGift(' + giftId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideGiftForm()" class="btn-secondary">Batal</button></div></div></div>'; }
async function submitEditGift(giftId) { var body = { name: document.getElementById('editGiftName').value.trim(), url: document.getElementById('editGiftImageUrl').value.trim(), price: parseInt(document.getElementById('editGiftPrice').value) || 0, expReward: parseInt(document.getElementById('editGiftExp').value) || 0, isActive: document.getElementById('editGiftActive').checked }; var d = await apiCall('/api/admin/gifts/' + giftId, { method: 'PUT', body: JSON.stringify(body) }); if (d.success) { showToast('Gift diperbarui', 'success'); hideGiftForm(); loadAdminGifts(); } else showToast(d.error || 'Gagal', 'error'); }
async function deleteGift(giftId) { if (!confirm('Nonaktifkan gift ini?')) return; var d = await apiCall('/api/admin/gifts/' + giftId, { method: 'DELETE' }); if (d.success) { showToast('Gift dinonaktifkan', 'success'); loadAdminGifts(); } else showToast(d.error || 'Gagal', 'error'); }

async function loadAdminAds() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/player-ads'); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    var html = '<button onclick="showAddAdForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Iklan Player</button><div id="adFormContainer"></div><div class="space-y-2">';
    data.data.ads.forEach(function(ad) { var status = ad.isExpired ? '<span class="badge" style="background: rgba(239,68,68,0.2); color:#dc2626;">Expired</span>' : (ad.enabled ? '<span class="badge" style="background: rgba(16,185,129,0.2); color:#059669;">Aktif</span>' : '<span class="badge" style="background:rgba(107,114,128,0.2);color:#6b7280;">Nonaktif</span>'); html += '<div class="card p-3 flex items-center gap-3"><i class="fa-solid fa-video" style="color: var(--accent);"></i><div class="flex-1 min-w-0"><p class="font-medium text-sm truncate">' + escapeHtml(ad.title) + '</p><div class="text-[10px]">' + status + '</div></div><button onclick="toggleAd(\'' + ad.id + '\', ' + !ad.enabled + ')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px;">' + (ad.enabled ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>') + '</button><button onclick="deleteAd(\'' + ad.id + '\')" class="btn-secondary" style="padding: 4px 8px; font-size: 10px; color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>'; c.innerHTML = html;
}
function showAddAdForm() { document.getElementById('adFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Iklan</h3><div class="space-y-3"><input type="text" id="adTitle" class="input-modern" placeholder="Judul *"><input type="text" id="adVideoUrl" class="input-modern" placeholder="URL Video mp4 *"><input type="datetime-local" id="adExpiresAt" class="input-modern"><div class="flex gap-2"><button onclick="submitAddAd()" class="btn-primary flex-1">Simpan</button><button onclick="hideAddAdForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideAddAdForm() { document.getElementById('adFormContainer').innerHTML = ''; }
async function submitAddAd() { var title = document.getElementById('adTitle').value.trim(); var videoUrl = document.getElementById('adVideoUrl').value.trim(); var expiresAt = document.getElementById('adExpiresAt').value; if (!title || !videoUrl) { showToast('Wajib diisi', 'error'); return; } var d = await apiCall('/api/admin/player-ads', { method: 'POST', body: JSON.stringify({ title, videoUrl, expiresAt: expiresAt || null, enabled: true }) }); if (d.success) { showToast('OK', 'success'); hideAddAdForm(); loadAdminAds(); } }
async function toggleAd(adId, enabled) { var d = await apiCall('/api/admin/player-ads/' + adId, { method: 'PUT', body: JSON.stringify({ enabled }) }); if (d.success) { showToast('OK', 'success'); loadAdminAds(); } }
async function deleteAd(adId) { if (!confirm('Hapus?')) return; var d = await apiCall('/api/admin/player-ads/' + adId, { method: 'DELETE' }); if (d.success) { showToast('OK', 'success'); loadAdminAds(); } }

async function loadAdminBorders(page) {
    page = page || state.pagination.adminBorders || 1;
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/avatar-borders?page=' + page); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    state.pagination.adminBorders = page;
    var html = '<button onclick="showAddBorderForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Border</button><div id="borderFormContainer"></div><div class="space-y-2">';
    data.data.borders.forEach(function(b) { var status = b.is_active ? '<span class="badge" style="background: rgba(16,185,129,0.2);color:#059669;">Aktif</span>' : '<span class="badge" style="background:rgba(239,68,68,0.2);color:#dc2626;">Nonaktif</span>'; html += '<div class="card p-3 flex items-center gap-3"><div class="w-12 h-12 relative" style="border-radius:50%;background:var(--bg-secondary);"><div style="position:absolute;inset:-4px;background-image:url(' + b.url + ');background-size:100% 100%;border-radius:50%;"></div></div><div class="flex-1 min-w-0"><p class="font-medium text-sm">' + escapeHtml(b.name) + '</p><div class="text-[10px]" style="color:var(--text-muted);"><i class="fa-solid fa-coins" style="color:#d97706;"></i> ' + b.price + ' • Scale ' + (b.scale || 1.2) + 'x • ' + status + '</div></div><button onclick="editBorder(' + b.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteBorder(' + b.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>' + renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'loadAdminBorders(' + p + ')'; }); c.innerHTML = html;
}
function showAddBorderForm() { document.getElementById('borderFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Border</h3><div class="space-y-3"><input type="text" id="borderName" class="input-modern" placeholder="Nama *"><input type="text" id="borderUrl" class="input-modern" placeholder="URL Gambar *"><div class="grid grid-cols-2 gap-2"><input type="number" id="borderPrice" class="input-modern" value="100" placeholder="Harga koin"><input type="number" id="borderScale" class="input-modern" value="1.2" step="0.1" placeholder="Scale"></div><input type="number" id="borderDuration" class="input-modern" value="0" placeholder="Durasi hari (0=permanen)"><div class="flex gap-2"><button onclick="submitAddBorder()" class="btn-primary flex-1">Simpan</button><button onclick="hideBorderForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideBorderForm() { document.getElementById('borderFormContainer').innerHTML = ''; }
async function submitAddBorder() { var name = document.getElementById('borderName').value.trim(); var url = document.getElementById('borderUrl').value.trim(); var price = parseInt(document.getElementById('borderPrice').value) || 0; var scale = parseFloat(document.getElementById('borderScale').value) || 1.2; var durationDays = parseInt(document.getElementById('borderDuration').value) || 0; if (!name || !url) { showToast('Wajib diisi', 'error'); return; } var d = await apiCall('/api/admin/avatar-borders', { method: 'POST', body: JSON.stringify({ name, url, price, scale, durationDays }) }); if (d.success) { showToast('OK', 'success'); hideBorderForm(); loadAdminBorders(1); } }
async function editBorder(borderId) { var data = await apiCall('/api/admin/avatar-borders?page=1&limit=1000'); if (!data.success) return; var b = data.data.borders.find(function(x) { return x.id === borderId; }); if (!b) return; document.getElementById('borderFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Border</h3><div class="space-y-3"><input type="text" id="editBorderName" class="input-modern" value="' + escapeHtml(b.name) + '"><input type="text" id="editBorderUrl" class="input-modern" value="' + escapeHtml(b.url) + '"><div class="grid grid-cols-2 gap-2"><input type="number" id="editBorderPrice" class="input-modern" value="' + b.price + '"><input type="number" id="editBorderScale" class="input-modern" value="' + (b.scale || 1.2) + '" step="0.1"></div><input type="number" id="editBorderDuration" class="input-modern" value="' + (b.duration_days || 0) + '"><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="editBorderActive" ' + (b.is_active ? 'checked' : '') + '> Aktif</label><div class="flex gap-2"><button onclick="submitEditBorder(' + borderId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideBorderForm()" class="btn-secondary">Batal</button></div></div></div>'; }
async function submitEditBorder(borderId) { var body = { name: document.getElementById('editBorderName').value.trim(), url: document.getElementById('editBorderUrl').value.trim(), price: parseInt(document.getElementById('editBorderPrice').value) || 0, scale: parseFloat(document.getElementById('editBorderScale').value) || 1.2, durationDays: parseInt(document.getElementById('editBorderDuration').value) || 0, isActive: document.getElementById('editBorderActive').checked }; var d = await apiCall('/api/admin/avatar-borders/' + borderId, { method: 'PUT', body: JSON.stringify(body) }); if (d.success) { showToast('OK', 'success'); hideBorderForm(); loadAdminBorders(state.pagination.adminBorders); } }
async function deleteBorder(borderId) { if (!confirm('Nonaktifkan?')) return; var d = await apiCall('/api/admin/avatar-borders/' + borderId, { method: 'DELETE' }); if (d.success) { showToast('OK', 'success'); loadAdminBorders(state.pagination.adminBorders); } }

async function loadAdminBubbles(page) {
    page = page || state.pagination.adminBubbles || 1;
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/bubbles?page=' + page); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    state.pagination.adminBubbles = page;
    var html = '<button onclick="showAddBubbleForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Bubble Chat</button><div id="bubbleFormContainer"></div><div class="space-y-2">';
    data.data.bubbles.forEach(function(b) { var status = b.is_active ? '<span class="badge" style="background: rgba(16,185,129,0.2);color:#059669;">Aktif</span>' : '<span class="badge" style="background:rgba(239,68,68,0.2);color:#dc2626;">Nonaktif</span>'; html += '<div class="card p-3"><div class="flex items-center gap-3 mb-2"><div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:rgba(139,92,246,0.15);"><i class="fa-solid fa-comment-dots" style="color:#8b5cf6;"></i></div><div class="flex-1 min-w-0"><p class="font-medium text-sm">' + escapeHtml(b.name) + '</p><div class="text-[10px]" style="color:var(--text-muted);"><i class="fa-solid fa-coins" style="color:#d97706;"></i> ' + b.price + ' • ' + (b.duration_days > 0 ? b.duration_days + ' hari' : 'Permanen') + ' • ' + status + '</div></div><button onclick="editBubble(' + b.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteBubble(' + b.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>' + (b.css ? '<div style="background:var(--bg-secondary);border-radius:10px;padding:8px;"><style scoped>' + b.css + '</style><div class="bubble-custom">' + (b.html || '<p>Preview</p>') + '</div></div>' : '') + '</div>'; });
    html += '</div>' + renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'loadAdminBubbles(' + p + ')'; }); c.innerHTML = html;
}
function showAddBubbleForm() { document.getElementById('bubbleFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Bubble Chat</h3><div class="space-y-3"><input type="text" id="bubbleName" class="input-modern" placeholder="Nama Bubble *"><input type="number" id="bubblePrice" class="input-modern" value="100" placeholder="Harga (koin)"><input type="number" id="bubbleDuration" class="input-modern" value="0" placeholder="Durasi (hari, 0=permanen)"><textarea id="bubbleCss" class="input-modern" rows="6" placeholder=".bubble-kucing { ... }" style="font-family: monospace; font-size: 11px;"></textarea><textarea id="bubbleHtml" class="input-modern" rows="3" placeholder="<div class=\'bubble-kucing\'>{{content}}</div>" style="font-family: monospace; font-size: 11px;"></textarea><div class="flex gap-2"><button onclick="submitAddBubble()" class="btn-primary flex-1">Simpan</button><button onclick="hideBubbleForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideBubbleForm() { document.getElementById('bubbleFormContainer').innerHTML = ''; }
async function submitAddBubble() { var name = document.getElementById('bubbleName').value.trim(); var price = parseInt(document.getElementById('bubblePrice').value) || 0; var durationDays = parseInt(document.getElementById('bubbleDuration').value) || 0; var css = document.getElementById('bubbleCss').value.trim(); var html = document.getElementById('bubbleHtml').value.trim(); if (!name || !css || !html) { showToast('Nama, CSS, HTML wajib', 'error'); return; } var d = await apiCall('/api/admin/bubbles', { method: 'POST', body: JSON.stringify({ name, price, durationDays, css, html }) }); if (d.success) { showToast('OK', 'success'); hideBubbleForm(); loadAdminBubbles(1); } else showToast(d.error || 'Gagal', 'error'); }
async function editBubble(bubbleId) { var data = await apiCall('/api/admin/bubbles?page=1&limit=1000'); if (!data.success) return; var b = data.data.bubbles.find(function(x) { return x.id === bubbleId; }); if (!b) return; document.getElementById('bubbleFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Bubble</h3><div class="space-y-3"><input type="text" id="editBubbleName" class="input-modern" value="' + escapeHtml(b.name) + '"><input type="number" id="editBubblePrice" class="input-modern" value="' + b.price + '"><input type="number" id="editBubbleDuration" class="input-modern" value="' + (b.duration_days || 0) + '"><textarea id="editBubbleCss" class="input-modern" rows="6" style="font-family: monospace; font-size: 11px;">' + escapeHtml(b.css || '') + '</textarea><textarea id="editBubbleHtml" class="input-modern" rows="3" style="font-family: monospace; font-size: 11px;">' + escapeHtml(b.html || '') + '</textarea><label class="flex items-center gap-2 text-xs"><input type="checkbox" id="editBubbleActive" ' + (b.is_active ? 'checked' : '') + '> Aktif</label><div class="flex gap-2"><button onclick="submitEditBubble(' + bubbleId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideBubbleForm()" class="btn-secondary">Batal</button></div></div></div>'; }
async function submitEditBubble(bubbleId) { var body = { name: document.getElementById('editBubbleName').value.trim(), price: parseInt(document.getElementById('editBubblePrice').value) || 0, durationDays: parseInt(document.getElementById('editBubbleDuration').value) || 0, css: document.getElementById('editBubbleCss').value.trim(), html: document.getElementById('editBubbleHtml').value.trim(), isActive: document.getElementById('editBubbleActive').checked }; var d = await apiCall('/api/admin/bubbles/' + bubbleId, { method: 'PUT', body: JSON.stringify(body) }); if (d.success) { showToast('OK', 'success'); hideBubbleForm(); loadAdminBubbles(state.pagination.adminBubbles); } }
async function deleteBubble(bubbleId) { if (!confirm('Nonaktifkan?')) return; var d = await apiCall('/api/admin/bubbles/' + bubbleId, { method: 'DELETE' }); if (d.success) { showToast('OK', 'success'); loadAdminBubbles(state.pagination.adminBubbles); } }

async function loadAdminLevels(page) {
    page = page || state.pagination.adminLevels || 1;
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/levels?page=' + page); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    state.pagination.adminLevels = page;
    var html = '<button onclick="showAddLevelForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Tambah Level</button><div id="levelFormContainer"></div><div class="space-y-2">';
    data.data.levels.forEach(function(l) { html += '<div class="card p-3 flex items-center gap-3">' + (l.level_url ? '<img src="' + l.level_url + '" class="w-12 h-12 rounded-lg object-contain" oncontextmenu="return false;" draggable="false" alt="Lv">' : '<div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: var(--bg-secondary);"><i class="fa-solid fa-star" style="color: var(--text-muted);"></i></div>') + '<div class="flex-1 min-w-0"><p class="font-medium text-sm">Level ' + l.level_number + '</p><p class="text-[10px]" style="color: var(--text-muted);">EXP: ' + l.exp_required + '</p></div><button onclick="editLevel(' + l.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;"><i class="fa-solid fa-pen"></i></button><button onclick="deleteLevel(' + l.id + ')" class="btn-secondary" style="padding:4px 8px;font-size:10px;color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>' + renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'loadAdminLevels(' + p + ')'; }); c.innerHTML = html;
}
function showAddLevelForm() { document.getElementById('levelFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Tambah Level</h3><div class="space-y-3"><input type="number" id="levelNumber" class="input-modern" value="1" placeholder="Nomor Level"><input type="text" id="levelUrl" class="input-modern" placeholder="URL Gambar *"><input type="number" id="levelExpRequired" class="input-modern" value="100" placeholder="EXP Required *"><div class="flex gap-2"><button onclick="submitAddLevel()" class="btn-primary flex-1">Simpan</button><button onclick="hideLevelForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideLevelForm() { document.getElementById('levelFormContainer').innerHTML = ''; }
async function submitAddLevel() { var levelNumber = parseInt(document.getElementById('levelNumber').value) || 1; var levelUrl = document.getElementById('levelUrl').value.trim(); var expRequired = parseInt(document.getElementById('levelExpRequired').value) || 100; if (!levelUrl) { showToast('URL wajib', 'error'); return; } var d = await apiCall('/api/admin/levels', { method: 'POST', body: JSON.stringify({ levelNumber, levelUrl, expRequired }) }); if (d.success) { showToast('OK', 'success'); hideLevelForm(); loadAdminLevels(1); } }
async function editLevel(levelId) { var data = await apiCall('/api/admin/levels?page=1&limit=1000'); if (!data.success) return; var l = data.data.levels.find(function(x) { return x.id === levelId; }); if (!l) return; document.getElementById('levelFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Edit Level</h3><div class="space-y-3"><input type="number" id="editLevelNumber" class="input-modern" value="' + l.level_number + '"><input type="text" id="editLevelUrl" class="input-modern" value="' + escapeHtml(l.level_url) + '"><input type="number" id="editLevelExpRequired" class="input-modern" value="' + l.exp_required + '"><div class="flex gap-2"><button onclick="submitEditLevel(' + levelId + ')" class="btn-primary flex-1">Simpan</button><button onclick="hideLevelForm()" class="btn-secondary">Batal</button></div></div></div>'; }
async function submitEditLevel(levelId) { var body = { levelNumber: parseInt(document.getElementById('editLevelNumber').value) || 1, levelUrl: document.getElementById('editLevelUrl').value.trim(), expRequired: parseInt(document.getElementById('editLevelExpRequired').value) || 100 }; var d = await apiCall('/api/admin/levels/' + levelId, { method: 'PUT', body: JSON.stringify(body) }); if (d.success) { showToast('OK', 'success'); hideLevelForm(); loadAdminLevels(state.pagination.adminLevels); } }
async function deleteLevel(levelId) { if (!confirm('Hapus?')) return; var d = await apiCall('/api/admin/levels/' + levelId, { method: 'DELETE' }); if (d.success) { showToast('OK', 'success'); loadAdminLevels(state.pagination.adminLevels); } }

async function loadAdminPromos() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/notes'); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    var promos = data.data.promos || [];
    var html = '<button onclick="showAddPromoForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Buat Promo Premium</button><div id="promoFormContainer"></div><div class="space-y-2">';
    if (promos.length === 0) html += '<p class="text-center py-8" style="color: var(--text-muted);">Belum ada promo</p>';
    else promos.forEach(function(p) { html += '<div class="card p-3 flex items-center justify-between"><div><p class="font-bold text-sm">' + escapeHtml(p.name) + '</p><p class="text-xs" style="color: var(--text-muted);">' + escapeHtml(p.description || '') + '</p><p class="text-xs" style="color: #d97706;"><i class="fa-solid fa-coins"></i> ' + p.price_koin + ' Koin</p>' + (p.expires_at ? '<p class="text-[10px]" style="color:#dc2626;">Expired: ' + formatDateWIB(p.expires_at) + '</p>' : '') + '</div><button onclick="deletePromo(' + p.id + ')" class="btn-secondary" style="padding:4px 8px;color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>'; c.innerHTML = html;
}
function showAddPromoForm() { document.getElementById('promoFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Buat Promo</h3><div class="space-y-3"><input type="text" id="promoName" class="input-modern" placeholder="Nama Promo *"><input type="text" id="promoDesc" class="input-modern" placeholder="Deskripsi"><input type="number" id="promoPrice" class="input-modern" value="3000" placeholder="Harga Koin *"><input type="datetime-local" id="promoExpires" class="input-modern"><div class="flex gap-2"><button onclick="submitAddPromo()" class="btn-primary flex-1">Simpan</button><button onclick="hidePromoForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hidePromoForm() { document.getElementById('promoFormContainer').innerHTML = ''; }
async function submitAddPromo() { var name = document.getElementById('promoName').value.trim(); var description = document.getElementById('promoDesc').value.trim(); var priceKoin = parseInt(document.getElementById('promoPrice').value) || 3000; var expiresAt = document.getElementById('promoExpires').value; if (!name) { showToast('Nama wajib', 'error'); return; } var d = await apiCall('/api/admin/promos', { method: 'POST', body: JSON.stringify({ name, description, priceKoin, expiresAt: expiresAt || null }) }); if (d.success) { showToast('Promo dibuat', 'success'); hidePromoForm(); loadAdminPromos(); } }
async function deletePromo(promoId) { if (!confirm('Hapus promo ini?')) return; var d = await apiCall('/api/admin/promos/' + promoId, { method: 'DELETE' }); if (d.success) { showToast('Dihapus', 'success'); loadAdminPromos(); } }

async function loadAdminVouchers() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/admin/vouchers'); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    var html = '<button onclick="showCreateVoucherForm()" class="btn-primary mb-4 w-full"><i class="fa-solid fa-plus mr-2"></i>Buat Voucher Baru</button><div id="voucherFormContainer"></div><div class="space-y-2">';
    data.data.vouchers.forEach(function(v) { var status = v.is_used ? '<span class="badge" style="background:rgba(239,68,68,0.2);color:#dc2626;">Terpakai</span>' : '<span class="badge" style="background:rgba(16,185,129,0.2);color:#059669;">Tersedia</span>'; html += '<div class="card p-3 flex items-center justify-between mb-2"><div><p class="font-bold text-lg tracking-widest font-mono">' + v.code + '</p><p class="text-xs" style="color: var(--text-muted);">Type: ' + v.type.toUpperCase() + ' | Value: ' + v.value + '</p>' + status + '</div><button onclick="deleteVoucher(' + v.id + ')" class="btn-secondary" style="padding:4px 8px;color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div>'; });
    html += '</div>'; c.innerHTML = html;
}
function showCreateVoucherForm() { document.getElementById('voucherFormContainer').innerHTML = '<div class="card p-4 mb-4"><h3 class="font-bold mb-3">Buat Voucher</h3><div class="space-y-3"><select id="voucherType" class="input-modern"><option value="koin">Koin</option><option value="vip">VIP (Hari)</option></select><input type="number" id="voucherValue" class="input-modern" value="100" placeholder="Jumlah *"><input type="text" id="voucherCode" class="input-modern" placeholder="Kode Manual (Kosongkan untuk acak)"><div class="flex gap-2"><button onclick="submitCreateVoucher()" class="btn-primary flex-1">Simpan</button><button onclick="hideVoucherForm()" class="btn-secondary">Batal</button></div></div></div>'; }
function hideVoucherForm() { document.getElementById('voucherFormContainer').innerHTML = ''; }
async function submitCreateVoucher() { var type = document.getElementById('voucherType').value; var value = parseInt(document.getElementById('voucherValue').value) || 0; var code = document.getElementById('voucherCode').value.trim(); if (value <= 0) { showToast('Value wajib > 0', 'error'); return; } var d = await apiCall('/api/admin/vouchers', { method: 'POST', body: JSON.stringify({ type, value, code: code || null }) }); if (d.success) { showToast('Voucher dibuat: ' + d.data.code, 'success'); hideVoucherForm(); loadAdminVouchers(); } else showToast(d.error || 'Gagal', 'error'); }
async function deleteVoucher(id) { if (!confirm('Hapus voucher ini?')) return; var d = await apiCall('/api/admin/vouchers/' + id, { method: 'DELETE' }); if (d.success) { showToast('Voucher dihapus', 'success'); loadAdminVouchers(); } else showToast(d.error || 'Gagal', 'error'); }

async function loadAdminSettings() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var notes = await apiCall('/api/notes'); var data = notes.success ? notes.data : {}; var adSlots = data.adSlots || {}; var gyazo = data.gyazoConfig || {};
    function adSlotEditor(key, label) { var slot = adSlots[key] || { enabled: false, code: '' }; var codes = (slot.code || '').split('|||'); return '<div class="mb-4 p-3 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold">' + label + '</span><label class="flex items-center gap-1 text-xs"><input type="checkbox" id="adEnabled_' + key + '" ' + (slot.enabled ? 'checked' : '') + '> Aktif</label></div><textarea id="adCode1_' + key + '" class="input-modern mb-1" rows="2" placeholder="Slot 1" style="font-size: 11px;">' + escapeHtml(codes[0] || '') + '</textarea><textarea id="adCode2_' + key + '" class="input-modern mb-1" rows="2" placeholder="Slot 2" style="font-size: 11px;">' + escapeHtml(codes[1] || '') + '</textarea><textarea id="adCode3_' + key + '" class="input-modern" rows="2" placeholder="Slot 3" style="font-size: 11px;">' + escapeHtml(codes[2] || '') + '</textarea></div>'; }
    var promoBanners = data.promoBanners || []; var emailVerifEnabled = data.emailVerificationEnabled !== false;
    var html = '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm">Info / Notes</h2><label class="block text-xs mb-1">Note Beranda</label><textarea id="adminHomeNote" class="input-modern mb-3" rows="2">' + escapeHtml(data.homeNote || '') + '</textarea><label class="block text-xs mb-1">Note Player</label><textarea id="adminPlayerNote" class="input-modern mb-3" rows="2">' + escapeHtml(data.playerNote || '') + '</textarea><h2 class="font-bold mb-3 text-sm">Verifikasi Email (Legacy)</h2><label class="flex items-center gap-2 mb-2 text-xs p-2 rounded-lg" style="background: var(--bg-secondary); opacity:0.6;"><input type="checkbox" id="emailVerificationEnabled" ' + (emailVerifEnabled ? 'checked' : '') + ' disabled> Verifikasi email (disabled - Mini App only)</label><h2 class="font-bold mb-3 text-sm">Turnstile (Anti-Bot)</h2><label class="flex items-center gap-2 mb-3 text-xs" style="opacity:0.6;"><input type="checkbox" id="turnstileEnabled" ' + (data.turnstileEnabled ? 'checked' : '') + ' disabled> Turnstile (disabled - Mini App verified by Telegram)</label><h2 class="font-bold mb-3 text-sm">Gyazo API</h2><input type="text" id="gyazoClientId" class="input-modern mb-2" value="' + escapeHtml(gyazo.clientId || '') + '" placeholder="Client ID"><input type="text" id="gyazoClientSecret" class="input-modern mb-2" value="' + escapeHtml(gyazo.clientSecret || '') + '" placeholder="Client Secret"><input type="text" id="gyazoCallbackUrl" class="input-modern mb-2" value="' + escapeHtml(gyazo.callbackUrl || '') + '" placeholder="Callback URL"><input type="text" id="gyazoAccessToken" class="input-modern mb-3" value="' + escapeHtml(gyazo.accessToken || '') + '" placeholder="Access Token (Wajib!)"><button onclick="saveAdminSettings()" class="btn-primary w-full mb-3">Simpan Settings</button></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm">Slot Iklan (Free User)</h2>' + adSlotEditor('header', 'Header') + adSlotEditor('home_top', 'Home Atas') + adSlotEditor('home_middle', 'Home Tengah') + adSlotEditor('home_bottom', 'Home Bawah') + '<button onclick="saveAdminSettings()" class="btn-primary w-full mb-3">Simpan Iklan</button></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm">Promo Banner Popup</h2><div id="promoBannersEditor">';
    promoBanners.forEach(function(ad, i) { html += '<div class="mb-3 p-2 rounded-lg" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="flex items-center justify-between mb-1"><span class="text-xs font-semibold">Banner ' + (i+1) + '</span><button onclick="removePromoBanner(' + i + ')" class="text-xs" style="color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div><label class="flex items-center gap-2 mb-1 text-xs"><input type="checkbox" id="promoEnabled_' + i + '" ' + (ad.enabled !== false ? 'checked' : '') + '> Aktif</label><input type="text" id="promoImage_' + i + '" class="input-modern mb-1" value="' + escapeHtml(ad.image || '') + '" placeholder="URL Gambar" style="font-size:11px;"><input type="text" id="promoLink_' + i + '" class="input-modern" value="' + escapeHtml(ad.link || '') + '" placeholder="Link Tujuan" style="font-size:11px;"></div>'; });
    html += '</div><button onclick="addPromoBanner()" class="btn-secondary w-full mb-2"><i class="fa-solid fa-plus mr-1"></i>Tambah Banner</button><button onclick="savePromoBanners()" class="btn-primary w-full mb-3">Simpan Banners</button></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm">Download Ads (Step System)</h2><div id="downloadAdsEditor">';
    (data.downloadAds || []).forEach(function(ad, i) { html += '<div class="mb-3 p-2 rounded-lg" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="flex items-center justify-between mb-1"><span class="text-xs font-semibold">Ad ' + (i+1) + '</span><button onclick="removeDownloadAd(' + i + ')" class="text-xs" style="color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div><select id="dlAdType_' + i + '" class="input-modern mb-1" style="font-size:11px;"><option value="link" ' + (ad.type === 'link' ? 'selected' : '') + '>Link Text</option><option value="banner" ' + (ad.type === 'banner' ? 'selected' : '') + '>Banner</option></select><input type="text" id="dlAdText_' + i + '" class="input-modern mb-1" value="' + escapeHtml(ad.text || '') + '" placeholder="Text" style="font-size:11px;"><input type="text" id="dlAdUrl_' + i + '" class="input-modern mb-1" value="' + escapeHtml(ad.url || '') + '" placeholder="URL" style="font-size:11px;"><input type="text" id="dlAdImage_' + i + '" class="input-modern" value="' + escapeHtml(ad.image || '') + '" placeholder="URL Gambar (banner)" style="font-size:11px;"></div>'; });
    html += '</div><button onclick="addDownloadAd()" class="btn-secondary w-full mb-2"><i class="fa-solid fa-plus mr-1"></i>Tambah</button><button onclick="saveDownloadAds()" class="btn-primary w-full">Simpan</button></div>';
    c.innerHTML = html;
}
function addPromoBanner() { var container = document.getElementById('promoBannersEditor'); var index = container.children.length; var div = document.createElement('div'); div.className = 'mb-3 p-2 rounded-lg'; div.style.cssText = 'background: var(--bg-secondary); border: 1px solid var(--border-color);'; div.innerHTML = '<div class="flex items-center justify-between mb-1"><span class="text-xs font-semibold">Banner ' + (index+1) + '</span><button onclick="this.parentElement.parentElement.remove()" class="text-xs" style="color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div><label class="flex items-center gap-2 mb-1 text-xs"><input type="checkbox" id="promoEnabled_' + index + '" checked> Aktif</label><input type="text" id="promoImage_' + index + '" class="input-modern mb-1" placeholder="URL Gambar" style="font-size:11px;"><input type="text" id="promoLink_' + index + '" class="input-modern" placeholder="Link Tujuan" style="font-size:11px;">'; container.appendChild(div); }
function removePromoBanner(index) { var c = document.getElementById('promoBannersEditor'); if (c.children[index]) c.children[index].remove(); }
async function savePromoBanners() { var container = document.getElementById('promoBannersEditor'); var banners = []; for (var i = 0; i < container.children.length; i++) { var enabled = document.getElementById('promoEnabled_' + i).checked; var image = document.getElementById('promoImage_' + i).value.trim(); var link = document.getElementById('promoLink_' + i).value.trim(); if (image) banners.push({ enabled, image, link }); } var d = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ promoBanners: banners }) }); if (d.success) { showToast('Banners disimpan', 'success'); state.homeNotes.promoBanners = banners; } }
function addDownloadAd() { var container = document.getElementById('downloadAdsEditor'); var index = container.children.length; var div = document.createElement('div'); div.className = 'mb-3 p-2 rounded-lg'; div.style.cssText = 'background: var(--bg-secondary); border: 1px solid var(--border-color);'; div.innerHTML = '<div class="flex items-center justify-between mb-1"><span class="text-xs font-semibold">Ad ' + (index+1) + '</span><button onclick="this.parentElement.parentElement.remove()" class="text-xs" style="color:#dc2626;"><i class="fa-solid fa-trash"></i></button></div><select id="dlAdType_' + index + '" class="input-modern mb-1" style="font-size:11px;"><option value="link">Link Text</option><option value="banner">Banner</option></select><input type="text" id="dlAdText_' + index + '" class="input-modern mb-1" placeholder="Text" style="font-size:11px;"><input type="text" id="dlAdUrl_' + index + '" class="input-modern mb-1" placeholder="URL" style="font-size:11px;"><input type="text" id="dlAdImage_' + index + '" class="input-modern" placeholder="URL Gambar" style="font-size:11px;">'; container.appendChild(div); }
function removeDownloadAd(index) { var c = document.getElementById('downloadAdsEditor'); if (c.children[index]) c.children[index].remove(); }
async function saveDownloadAds() { var container = document.getElementById('downloadAdsEditor'); var ads = []; for (var i = 0; i < container.children.length; i++) { var type = document.getElementById('dlAdType_' + i).value; var text = document.getElementById('dlAdText_' + i).value.trim(); var url = document.getElementById('dlAdUrl_' + i).value.trim(); var image = document.getElementById('dlAdImage_' + i).value.trim(); if (url || image) ads.push({ type, text, url, image, enabled: true }); } var d = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify({ downloadAds: ads }) }); if (d.success) { showToast('Download Ads disimpan', 'success'); state.homeNotes.downloadAds = ads; } }
async function saveAdminSettings() { var body = { homeNote: document.getElementById('adminHomeNote').value, playerNote: document.getElementById('adminPlayerNote').value, adSlots: {}, gyazoConfig: { clientId: document.getElementById('gyazoClientId').value.trim(), clientSecret: document.getElementById('gyazoClientSecret').value.trim(), callbackUrl: document.getElementById('gyazoCallbackUrl').value.trim(), accessToken: document.getElementById('gyazoAccessToken').value.trim() } }; ['header', 'home_top', 'home_middle', 'home_bottom'].forEach(function(key) { var enabledEl = document.getElementById('adEnabled_' + key); var c1 = document.getElementById('adCode1_' + key) ? document.getElementById('adCode1_' + key).value.trim() : ''; var c2 = document.getElementById('adCode2_' + key) ? document.getElementById('adCode2_' + key).value.trim() : ''; var c3 = document.getElementById('adCode3_' + key) ? document.getElementById('adCode3_' + key).value.trim() : ''; var codes = [c1, c2, c3].filter(function(c) { return c; }); body.adSlots[key] = { enabled: enabledEl ? enabledEl.checked : false, code: codes.join('|||') }; }); var d = await apiCall('/api/admin/notes', { method: 'PUT', body: JSON.stringify(body) }); if (d.success) showToast('Settings Tersimpan', 'success'); }

async function loadAdminRequests() {
    var c = document.getElementById('adminContent'); c.innerHTML = '<div class="skeleton h-40"></div>';
    var data = await apiCall('/api/content-requests'); if (!data.success) { c.innerHTML = '<p>Gagal</p>'; return; }
    if (data.data.requests.length === 0) { c.innerHTML = '<p class="text-center py-8" style="color: var(--text-muted);">Tidak ada request</p>'; return; }
    c.innerHTML = '<div class="space-y-2">' + data.data.requests.map(function(r) { return '<div class="card p-3"><div class="flex items-center justify-between mb-2"><p class="font-medium text-sm">' + escapeHtml(r.title) + '</p><span class="badge" style="background: rgba(124,58,237,0.15); color: var(--accent);">DRAKOR</span></div><p class="text-xs mb-2" style="color:var(--text-secondary);">Dari: ' + escapeHtml(r.username) + ' • ' + r.createdAtWIB + '</p>' + (r.notes ? '<p class="text-xs mb-2" style="color:var(--text-muted);">' + escapeHtml(r.notes) + '</p>' : '') + '<div class="flex gap-2"><button onclick="processRequest(' + r.id + ', \'approve\')" class="btn-primary" style="padding:4px 12px;font-size:11px;">Approve</button><button onclick="processRequest(' + r.id + ', \'reject\')" class="btn-secondary" style="padding:4px 12px;font-size:11px;color:#dc2626;">Reject</button></div></div>'; }).join('') + '</div>';
}
async function processRequest(requestId, action) { var d = await apiCall('/api/content-requests/' + requestId, { method: 'PUT', body: JSON.stringify({ action }) }); if (d.success) { showToast('OK', 'success'); loadAdminRequests(); loadPendingCount(); } }

async function toggleFullscreen() {
    var wrapper = document.getElementById('playerWrapper') || document.getElementById('playerSection'); if (!wrapper) { showToast('Player belum aktif', 'error'); return; }
    try {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) { if (document.exitFullscreen) await document.exitFullscreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen(); return; }
        var canNative = !!(wrapper.requestFullscreen || wrapper.webkitRequestFullscreen || wrapper.msRequestFullscreen);
        if (canNative) { if (wrapper.requestFullscreen) await wrapper.requestFullscreen(); else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen(); else if (wrapper.msRequestFullscreen) wrapper.msRequestFullscreen(); return; }
        if (window.Telegram && window.Telegram.WebApp) {
            try { window.Telegram.WebApp.expand(); } catch (e) {}
            try { if (window.Telegram.WebApp.requestFullscreen) window.Telegram.WebApp.requestFullscreen(); } catch (e) {}
            if (wrapper.classList) wrapper.classList.add('force-fullscreen');
            var style = document.getElementById('forceFullscreenStyle');
            if (!style) { style = document.createElement('style'); style.id = 'forceFullscreenStyle'; style.textContent = '.force-fullscreen{position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:99999 !important;background:#000 !important;border-radius:0 !important;padding-bottom:0 !important;} .force-fullscreen iframe,.force-fullscreen video{width:100vw !important;height:100vh !important;border-radius:0 !important;}'; document.head.appendChild(style); }
            showToast('Mode maximize aktif. Tap tombol lagi untuk keluar.', 'info');
        } else { showToast('Fullscreen tidak didukung di perangkat ini', 'error'); }
    } catch (e) { console.warn('Fullscreen error:', e); showToast('Gagal fullscreen, coba rotate device', 'info'); }
}
function closePlayerModal() { document.getElementById('playerModal').classList.add('hidden'); document.body.style.overflow = ''; }

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) { searchInput.addEventListener('input', function(e) { clearTimeout(searchTimeout); var query = e.target.value.trim(); searchTimeout = setTimeout(function() { performSearch(query, 1); }, 500); }); }
    document.querySelectorAll('.modal-backdrop').forEach(function(modal) { modal.addEventListener('click', function(e) { if (e.target === modal) { if (modal.id === 'authModal') closeAuthModal(); else if (modal.id === 'playerModal') closePlayerModal(); else if (modal.id === 'shopModal') closeShopModal(); else if (modal.id === 'infoModal') closeInfoModal(); else if (modal.id === 'vipModal') closeVipModal(); else if (modal.id === 'leaderboardModal') closeLeaderboardModal(); else if (modal.id === 'voucherModal') closeVoucherModal(); else if (modal.id === 'giftModal') closeGiftModal(); else if (modal.id === 'imagePreviewModal') closeImagePreview(); else if (modal.id === 'transferModal') closeTransferModal(); } }); });
});

if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/sw.js').catch(function() {}); }); }

window.addEventListener('popstate', function(e) {
    destroyActivePlayer(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; }
    var path = window.location.pathname, search = window.location.search;
    if (path === '/' || path === '') { state.currentPage = 'home'; renderHome(); }
    else if (path === '/genre') { state.currentPage = 'genre'; renderGenrePage(); }
    else if (path === '/story' || path === '/gallery') { var galId = new URLSearchParams(search).get('id'); if (galId) { state.currentPage = 'gallery-detail/' + galId; renderGalleryDetail(galId); } else { state.currentPage = 'gallery'; renderGalleryPage(); } }
    else if (path === '/request') { state.currentPage = 'request'; renderRequestPage(); }
    else if (path === '/party') { state.currentPage = 'party'; renderPartyPage(); }
    else if (path.indexOf('/party/') === 0) { var partyCode = path.substring(7); state.currentPage = 'party-room/' + partyCode; renderPartyRoomPage(partyCode); }
    else if (path === '/profile') { state.currentPage = 'profile'; renderProfile(); }
    else if (path === '/referral') { state.currentPage = 'referral'; renderReferralPage(); }
    else { var viewMatch = path.match(/^\/view$/); if (viewMatch) { var id = new URLSearchParams(search).get('id'); if (id) { state.currentPage = 'watch/' + id; renderWatchPage(id); } } else { var pageMatch = path.match(/^\/page$/); if (pageMatch) { state.pagination.home = parseInt(new URLSearchParams(search).get('p') || 1); state.currentPage = 'home'; renderHome(); } else { var userMatch = path.match(/^\/@([a-zA-Z0-9_]+)$/); if (userMatch) { state.currentPage = 'user/' + userMatch[1]; renderUserProfile(userMatch[1]); } } } }
    updateNavUI(state.currentPage);
});

async function initTelegramWebApp() {
    if (!window.Telegram || !window.Telegram.WebApp) { return { ok: false, reason: 'no_telegram' }; }
    const tg = window.Telegram.WebApp;
    try { tg.ready(); tg.expand(); } catch (e) {}
    if (!tg.initData) { return { ok: false, reason: 'no_initdata' }; }
    try {
        const startParam = (tg.initDataUnsafe && tg.initDataUnsafe.start_param) ? tg.initDataUnsafe.start_param : null;
        const res = await apiCall('/api/auth/telegram-webapp', { method: 'POST', body: JSON.stringify({ initData: tg.initData, startParam: startParam }) });
        if (res.success) { state.token = res.data.token; state.user = res.data.user; state.telegramReady = true; localStorage.setItem('fesstale_token', state.token); localStorage.setItem('fesstale_user', JSON.stringify(state.user)); return { ok: true, isNew: res.data.isNew }; }
        return { ok: false, reason: res.error || 'auth_failed' };
    } catch (e) { console.error('TG WebApp auto-login error:', e); return { ok: false, reason: e.message }; }
}

async function init() {
    initTheme();
    var notesInit = await apiCall('/api/notes');
    if (notesInit.success) { state.homeNotes = notesInit.data; state.botUsername = notesInit.data.telegramBotUsername || null; }
    if (!isInTelegram()) { showTelegramGate(); return; }
    var tgResult = await initTelegramWebApp();
    if (!tgResult.ok) {
        var savedToken = localStorage.getItem('fesstale_token');
        if (savedToken) { state.token = savedToken; var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } else { localStorage.removeItem('fesstale_token'); localStorage.removeItem('fesstale_user'); openAuthModal(); showAuthError('Auto-login gagal. Klik "Coba Login Ulang".'); return; } }
        else { openAuthModal(); showAuthError('Auto-login gagal. Klik "Coba Login Ulang".'); return; }
    } else if (tgResult.isNew) { showToast('🎉 Akun berhasil dibuat dari Telegram!', 'success'); }
    hideTelegramGate(); updateAuthUI(); loadFooterStats(); loadStoryBadge();
    var path = window.location.pathname, search = window.location.search;
    var viewMatch = path.match(/^\/view$/); var pageMatch = path.match(/^\/page$/); var userMatch = path.match(/^\/@([a-zA-Z0-9_]+)$/); var partyRoomMatch = path.match(/^\/party\/([A-Z0-9]{4,10})$/i); var galeriMatch = path.match(/^\/story$/) || path.match(/^\/galeri$/) || path.match(/^\/gallery$/);
    if (viewMatch) { var id = new URLSearchParams(search).get('id'); if (id) { state.currentPage = 'watch/' + id; renderWatchPage(id); } else navigate('home'); }
    else if (partyRoomMatch) { state.currentPage = 'party-room/' + partyRoomMatch[1]; renderPartyRoomPage(partyRoomMatch[1]); }
    else if (path === '/party') { state.currentPage = 'party'; renderPartyPage(); }
    else if (galeriMatch) { var galId = new URLSearchParams(search).get('id'); if (galId) { state.currentPage = 'gallery-detail/' + galId; renderGalleryDetail(galId); } else { state.currentPage = 'gallery'; renderGalleryPage(); } }
    else if (pageMatch) { state.pagination.home = parseInt(new URLSearchParams(search).get('p') || 1); state.currentPage = 'home'; renderHome(); }
    else if (userMatch) { state.viewingUsername = userMatch[1]; state.currentPage = 'user/' + userMatch[1]; renderUserProfile(userMatch[1]); }
    else if (path === '/genre') { state.currentPage = 'genre'; renderGenrePage(); }
    else if (path === '/request') { state.currentPage = 'request'; renderRequestPage(); }
    else if (path === '/profile') { state.currentPage = 'profile'; renderProfile(); }
    else if (path === '/missions') { state.currentPage = 'missions'; renderMissions(); }
    else if (path === '/referral') { state.currentPage = 'referral'; renderReferralPage(); }
    else { state.currentPage = 'home'; renderHome(); }
    updateNavUI(state.currentPage);
}

init();
</script>
</body>
</html>`;
