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
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <style>
        :root { --bg-primary:#f1f5f9;--bg-secondary:#fff;--bg-card:#fff;--bg-card-hover:#f8fafc;--border-color:#e2e8f0;--text-primary:#0f172a;--text-secondary:#475569;--text-muted:#94a3b8;--accent:#7c3aed;--accent-hover:#6d28d9;--accent-glow:rgba(124,58,237,0.3);--success:#059669;--danger:#dc2626;--glass-bg:rgba(255,255,255,0.85);--modal-backdrop-bg:rgba(15,23,42,0.5);--skeleton-a:#e2e8f0;--skeleton-b:#f1f5f9;--shadow-color:rgba(0,0,0,0.1); }
        [data-theme="dark"] { --bg-primary:#0a0e17;--bg-secondary:#111827;--bg-card:#1a2233;--bg-card-hover:#1f2a3f;--border-color:#2a3447;--text-primary:#f1f5f9;--text-secondary:#94a3b8;--text-muted:#64748b;--accent:#8b5cf6;--accent-hover:#7c3aed;--accent-glow:rgba(139,92,246,0.4);--success:#10b981;--danger:#ef4444;--glass-bg:rgba(17,24,39,0.85);--modal-backdrop-bg:rgba(0,0,0,0.75);--skeleton-a:#1a2233;--skeleton-b:#243044;--shadow-color:rgba(0,0,0,0.5); }
        *{ -webkit-tap-highlight-color:transparent;user-select:none; }
        html{ scroll-behavior:smooth; }
        body{ font-family:'Nunito','Inter',system-ui,sans-serif;background:var(--bg-primary);color:var(--text-primary);overscroll-behavior-y:none;-webkit-font-smoothing:antialiased;transition:background 0.3s,color 0.3s; }
        h1,h2,h3,h4,.font-display{ font-family:'Fredoka','Nunito',sans-serif;letter-spacing:-0.02em; }
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
        .footer-stat-value{ font-size:28px;font-weight:800;font-family:'Fredoka','Nunito',sans-serif;line-height:1; }
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
        .carousel-slide-title{ color:#fff;font-weight:800;font-size:18px;line-height:1.2;text-shadow:0 2px 8px rgba(0,0,0,0.6);font-family:'Fredoka','Nunito',sans-serif; }
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
        .tg-gate-title{ font-size:22px;font-weight:800;color:#fff;margin-bottom:12px;font-family:'Fredoka','Nunito',sans-serif; }
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
    /* ==== APP POLISH START (auto-sync dari worker/style-polish.css, jangan edit di sini) ==== */
/* ============================================================
   FESSTALE MOVIE — APP POLISH V4
   Sumber: worker/style-polish.css  (disinkronkan otomatis ke
   dalam <style> worker/view.js oleh scripts/extract-html.mjs)
   Isi: performa scroll, tipografi gen-z, header, nav, profil ala
   Facebook, story ala Facebook, pencarian series/user, pasangan +
   kartu streak, fullscreen + rotasi player.
   ============================================================ */

/* ---------- 0. PERFORMA SCROLL ---------- */
:root{
    --glass-bg:rgba(255,255,255,0.98);
    --modal-backdrop-bg:rgba(15,23,42,0.62);
    --font-body:'Nunito','Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
    --font-display:'Fredoka','Nunito',system-ui,-apple-system,sans-serif;
    --pink:#ec4899;
}
[data-theme="dark"]{ --glass-bg:rgba(17,24,39,0.98);--modal-backdrop-bg:rgba(0,0,0,0.78); }
html{ touch-action:manipulation; }
/* blur latar (backdrop-filter) mahal saat scroll di HP — dimatikan, diganti warna solid */
.glass,.bottom-nav-app,#searchBar,.toast,.modal-backdrop,.card-corner-badge,.type-badge-modern,
.episode-number-badge,.carousel-slide-badge,.carousel-arrow,.story-multi-badge,.story-carousel-counter,
.story-carousel-arrow,.gallery-price-tag,.party-code-badge,.player-tabs-wrap .tab-btn{
    -webkit-backdrop-filter:none;backdrop-filter:none;
}
/* latar polos: tanpa gradien fixed, tanpa layer tambahan */
body{ background-image:none; }
/* kartu daftar: tanpa bayangan, tanpa layer sendiri, perubahan di dalam kartu tidak memengaruhi kartu lain */
.card{ box-shadow:none;transition:border-color .2s ease,background .2s ease; }
.movie-card{ will-change:auto;contain:layout style paint;transition:transform .2s ease; }
.movie-card.animate-fade-up,.masonry-item{ animation:none; }
.episode-card,.recent-watch-card,.rec-drakor-item{ contain:layout style paint; }
/* animasi box-shadow tanpa henti memaksa repaint tiap frame */
.admin-notif-badge,#mainHeader .coin-display{ animation:none; }
@keyframes softPulse{ 0%,100%{ transform:scale(1); }50%{ transform:scale(1.14); } }
.story-badge-pulse{ animation:softPulse 1.6s ease-in-out infinite; }
.gallery-locked-wrap img.locked-img{ filter:blur(16px) brightness(0.55); }
.recent-watch-scroll,.rec-drakor-scroll,.country-filter-scroll,.episode-pager,.fb-stories{ -webkit-overflow-scrolling:touch;overscroll-behavior-x:contain; }
/* di layar sentuh, :hover ikut terpicu saat jari scroll — efeknya dimatikan */
@media (hover:none){
    .card:hover{ background:var(--bg-card);border-color:var(--border-color); }
    .btn-primary:hover{ transform:none;box-shadow:0 4px 12px rgba(139,92,246,0.3); }
    .btn-secondary:hover{ background:var(--bg-card);border-color:var(--border-color); }
    .episode-card:not(.active):hover{ transform:none;box-shadow:none;border-color:var(--border-color); }
    .gift-card:not(.selected):hover{ transform:none;border-color:var(--border-color); }
    .leaderboard-item:hover,.party-room-card:hover{ transform:none;box-shadow:none;border-color:var(--border-color); }
    .rec-drakor-item:hover{ transform:none; }
    .profile-menu-row:hover{ background:transparent; }
    .carousel-arrow{ display:none; }
}

/* ---------- 1. TIPOGRAFI GEN-Z (Fredoka + Nunito, tebal & bulat) ---------- */
body,button,input,textarea,select{ font-family:var(--font-body); }
body{ font-weight:700;letter-spacing:0.004em; }
h1,h2,h3,h4,.font-display,.btn-primary,.btn-secondary,.tab-btn,.nav-btn span,.badge,.watch-btn-main,
.download-btn,.carousel-slide-title,.carousel-slide-watch,.carousel-slide-badge,.custom-tab-btn,.lb-tab,
.page-btn,.coin-display,.party-control-btn,.premium-banner-title,.premium-banner-btn,.podium-name,
.podium-xp,.footer-stat-value,.referral-stat-value,.referral-code-text,.tg-gate-title,.tg-gate-btn,
.type-badge-modern,.card-corner-badge,.episode-number-badge,.profile-section-title{
    font-family:var(--font-display);
}
h1,h2,h3,h4,.font-display{ font-weight:700;letter-spacing:-0.005em; }
.btn-primary,.btn-secondary,.watch-btn-main,.download-btn,.tab-btn,.custom-tab-btn,.lb-tab,
.party-control-btn,.page-btn{ font-weight:600;letter-spacing:0.012em; }
.nav-btn span{ font-weight:600;letter-spacing:0.02em; }
.badge{ font-weight:600;letter-spacing:0.06em; }
body .font-normal{ font-weight:600; }
body .font-medium{ font-weight:700; }
body .font-semibold{ font-weight:800; }
body .font-bold{ font-weight:800; }
body .font-extrabold{ font-weight:900; }
.input-modern{ font-weight:700; }
.input-modern::placeholder{ font-weight:600; }
main#app h2.flex > i:first-child,main#app h3.flex > i:first-child{
    width:28px;height:28px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;
    font-size:13px;flex-shrink:0;background:color-mix(in srgb, currentColor 15%, transparent);
}
.profile-section-title{ font-weight:600;font-size:12px;letter-spacing:0.07em; }

/* ---------- 2. HEADER + AVATAR + PENCARIAN ---------- */
#mainHeader{ border-bottom:1px solid var(--border-color);box-shadow:none; }
#mainHeader button{ transition:transform .15s ease; }
#mainHeader button:active{ transform:scale(0.9); }
#mainHeader .coin-display{ font-weight:600;border-radius:999px;padding:6px 12px; }
#authBtn.header-avatar-btn{ background:transparent !important;overflow:visible;border-radius:50%;padding:0; }
#authBtn.header-avatar-btn .mlbb-avatar-wrap{ pointer-events:none; }
#authBtn.header-avatar-btn .mlbb-avatar-wrap:not(:has(.mlbb-avatar-border)) .mlbb-avatar-inner{
    box-shadow:0 0 0 2px var(--bg-secondary),0 0 0 4px var(--accent);
}
#searchBar .input-modern{ border-radius:999px; }
.search-seg{ display:flex;gap:4px;padding:4px;margin-bottom:8px;border-radius:999px;background:var(--bg-primary);border:1px solid var(--border-color); }
.search-seg-btn{
    flex:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;height:34px;border-radius:999px;border:none;cursor:pointer;
    background:transparent;color:var(--text-secondary);font-family:var(--font-display);font-weight:600;font-size:13px;
}
.search-seg-btn.active{ background:var(--accent);color:#fff; }
.user-results{ display:flex;flex-direction:column;gap:8px; }
.user-result{ display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:16px;cursor:pointer; }
.user-result:active{ background:var(--bg-card-hover); }
.user-result-av{ flex-shrink:0;display:flex; }
.user-result-body{ flex:1;min-width:0;display:flex;flex-direction:column;gap:1px; }
.user-result-name{ display:flex;align-items:center;flex-wrap:wrap;gap:5px;font-weight:800;font-size:14.5px;color:var(--text-primary); }
.user-result-meta{ font-size:12px;color:var(--text-muted); }
.user-result-bio{ font-size:12px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.user-result-go{ color:var(--text-muted);font-size:12px;flex-shrink:0; }
/* indikator koneksi */
.conn-pill{
    position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 10px);z-index:9998;
    display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;color:#fff;
    font-family:var(--font-display);font-weight:600;font-size:12.5px;white-space:nowrap;pointer-events:none;
    transform:translate(-50%,-180%);transition:transform .3s ease;
}
.conn-pill.show{ transform:translate(-50%,0); }
.conn-pill.ok{ background:#059669; }
.conn-pill.off{ background:#dc2626; }
.conn-pill.wait{ background:#d97706; }
.share-chip{
    display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:6px 12px;border-radius:999px;cursor:pointer;
    border:1px solid var(--border-color);background:var(--bg-secondary);color:var(--text-secondary);
    font-family:var(--font-display);font-weight:600;font-size:12px;
}
.share-chip:active{ transform:scale(0.95); }

/* ---------- 3. BOTTOM NAV (pill melayang) ---------- */
.bottom-nav-app{
    bottom:max(env(safe-area-inset-bottom),10px);left:12px;right:12px;
    border-radius:24px;border:1px solid var(--border-color);
    box-shadow:0 8px 20px -12px rgba(15,23,42,0.35);
    padding-bottom:0;overflow:hidden;
}
.bottom-nav-inner{ padding:6px;max-width:640px; }
.nav-btn{ border-radius:16px;padding:7px 6px;min-width:56px;transition:transform .2s ease,background .2s ease,color .2s ease; }
.nav-btn:active{ transform:scale(0.92); }
.nav-btn.active{ color:#fff;background:linear-gradient(135deg,#8b5cf6,#7c3aed); }
.nav-btn.active::before{ display:none; }
.nav-btn i{ font-size:17px; }
.nav-btn span{ font-size:10px; }
.floating-leaderboard-btn{ bottom:96px;right:16px;box-shadow:0 6px 14px -6px rgba(245,158,11,0.6); }
.floating-leaderboard-btn:active{ transform:scale(0.92); }
main#app{ padding-bottom:120px; }

/* ---------- 4. KARTU / POSTER / TOMBOL ---------- */
.movie-card:active{ transform:scale(0.96); }
.movie-card p{ font-weight:800; }
.carousel-wrap{ border-radius:22px;border:1px solid var(--border-color);box-shadow:none; }
.carousel-slide-title{ font-weight:700;letter-spacing:0; }
.carousel-slide-watch{ font-weight:600;border-radius:999px;padding:9px 18px; }
.carousel-slide-watch:active{ transform:scale(0.95); }
.btn-primary{ border-radius:14px;transition:transform .15s ease; }
.btn-primary:active{ transform:scale(0.96); }
.btn-secondary{ border-radius:14px;transition:transform .15s ease,border-color .2s ease,background .2s ease; }
.btn-secondary:active{ transform:scale(0.97); }
.tab-btn,.custom-tab-btn,.lb-tab{ border-radius:999px; }
.toast{ border-radius:999px;font-weight:800;box-shadow:0 10px 24px -12px rgba(15,23,42,0.5); }
.toast.success #toastIcon{ color:#059669; }
.toast.error #toastIcon{ color:#dc2626; }
.toast.info #toastIcon{ color:var(--accent); }
.note-banner{ border-radius:16px; }
.premium-banner{ border-radius:20px; }
.episode-card{ border-radius:16px; }
.mission-card,.party-room-card,.leaderboard-item{ border-radius:18px; }
.gift-card,.gift-received-card{ border-radius:16px; }
.podium-card,.referral-stat-card,.footer-stat-card{ border-radius:20px; }
.referral-container,.download-step-box{ border-radius:24px; }
.bubble-default{ border-radius:18px 18px 18px 5px;line-height:1.5;font-weight:700; }
.reply-thread{ border-left:2px solid rgba(124,58,237,0.35); }
.reaction-btn{ border-radius:16px;transition:transform .15s ease; }
.reaction-btn:active{ transform:scale(0.94); }
.country-filter-scroll::-webkit-scrollbar,.recent-watch-scroll::-webkit-scrollbar,
.rec-drakor-scroll::-webkit-scrollbar,.episode-pager::-webkit-scrollbar,.fb-stories::-webkit-scrollbar{ height:0;display:none; }

/* ---------- 5. PROFIL ALA FACEBOOK ---------- */
.fbp{ border-radius:22px; }
.fbp-back{ display:inline-flex;align-items:center;gap:8px;margin-bottom:12px;padding:0;border:none;background:none;color:var(--accent);font-weight:800;font-size:14px;cursor:pointer; }
.fbp-cover{
    position:relative;height:180px;cursor:pointer;
    background:linear-gradient(135deg,#8b5cf6 0%,#ec4899 55%,#f59e0b 100%);
    background-size:cover;background-position:center;
}
@media(min-width:640px){ .fbp-cover{ height:260px; } }
.fbp-cover-btn{
    position:absolute;right:12px;bottom:12px;display:inline-flex;align-items:center;gap:6px;padding:7px 12px;
    border-radius:10px;border:none;cursor:pointer;background:rgba(255,255,255,0.94);color:#0f172a;font-weight:800;font-size:12px;
}
.fbp-body{ position:relative;padding:0 16px 16px; }
/* foto profil menumpuk sampul di kiri, dengan cincin warna kartu */
.fbp-avatar{
    position:relative;width:116px;height:116px;margin-top:-58px;margin-bottom:8px;border-radius:50%;
    background:var(--bg-card);display:flex;align-items:center;justify-content:center;
}
.fbp-avatar-cam{
    position:absolute;right:0;bottom:6px;z-index:6;width:34px;height:34px;border-radius:50%;cursor:pointer;
    display:flex;align-items:center;justify-content:center;font-size:13px;
    background:var(--bg-primary);color:var(--text-primary);border:3px solid var(--bg-card);
}
.fbp-name{ display:flex;align-items:center;flex-wrap:wrap;gap:2px;font-size:1.55rem;line-height:1.15;font-weight:700;color:var(--text-primary);word-break:break-word; }
.fbp-username{ display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-top:4px;font-size:13px;color:var(--text-muted); }
.fbp-chip{
    display:inline-flex;align-items:center;gap:4px;padding:2px 9px;border-radius:999px;
    background:var(--bg-primary);color:var(--text-secondary);font-family:var(--font-display);font-weight:600;font-size:10.5px;
}
.fbp-chip i{ font-size:9px; }
.fbp-chip-admin{ background:rgba(239,68,68,0.14);color:#dc2626; }
.fbp-chip-vip{ background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a; }
.fbp-bio{ margin-top:10px;font-size:14px;line-height:1.5;color:var(--text-secondary);white-space:pre-line;word-break:break-word; }
.fbp-stats{ display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:14px;padding:10px 0;border-top:1px solid var(--border-color);border-bottom:1px solid var(--border-color); }
.fbp-stat{ min-width:0;text-align:center; }
.fbp-stat b{ display:block;font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.fbp-stat span{ display:block;font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted); }
.fbp-actions{ display:flex;gap:8px;margin-top:12px; }
.fbp-btn{
    flex:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;height:40px;padding:0 12px;min-width:0;
    border:none;border-radius:10px;cursor:pointer;background:var(--bg-primary);color:var(--text-primary);
    font-family:var(--font-display);font-weight:600;font-size:13.5px;white-space:nowrap;
}
.fbp-btn:active{ transform:scale(0.97); }
.fbp-btn-primary{ background:var(--accent);color:#fff; }
.fbp-btn-icon{ flex:0 0 44px;padding:0; }
.fbp-details{ margin-top:14px; }
.fbp-details-title{ font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary);margin-bottom:4px; }
.fbp-detail{ display:flex;align-items:center;gap:10px;padding:7px 0;font-size:13.5px;color:var(--text-secondary); }
.fbp-detail b{ color:var(--text-primary);font-weight:800; }
.fbp-detail.is-link{ cursor:pointer; }
.fbp-detail-ic{ width:24px;flex-shrink:0;display:flex;justify-content:center;font-size:15px;color:var(--text-muted); }
.fbp-detail-body{ flex:1;min-width:0; }
.fbp-detail .level-bar{ height:6px;margin-top:5px; }
.profile-section-card{ border-radius:20px; }
/* menu profil: baris penuh, teks mentok kiri, panah mentok kanan */
.profile-menu-row{
    width:100%;margin:0;border-radius:0;padding:13px 16px;
    text-align:left;background:transparent;
    border-left:none;border-right:none;border-bottom:none;
}
.profile-menu-row > span{ flex:1 1 auto;min-width:0;text-align:left;font-weight:800;font-size:14px; }
.profile-menu-row > i.fa-chevron-right{ margin-left:auto;flex-shrink:0; }
.profile-menu-row:active{ background:var(--bg-card-hover); }
.profile-menu-icon{ border-radius:12px; }
/* grid story di profil (kartu "Story") */
.ig-section{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:20px;overflow:hidden;margin-bottom:16px; }
.ig-head{ display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px; }
.ig-head-title{ display:flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
.ig-head-title i{ color:var(--accent);font-size:15px; }
.ig-head-title b{ font-size:11px;font-weight:600;padding:2px 9px;border-radius:999px;background:rgba(124,58,237,0.13);color:var(--accent); }
.ig-upload-btn{
    display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;border:none;cursor:pointer;
    background:var(--accent);color:#fff;font-family:var(--font-display);font-weight:600;font-size:12px;
}
.ig-upload-btn:active{ transform:scale(0.95); }
.ig-grid{ display:grid;grid-template-columns:repeat(3,1fr);gap:3px;padding:0 10px 10px; }
.ig-tile{ position:relative;display:block;width:100%;aspect-ratio:1/1;padding:0;border:none;border-radius:0;overflow:hidden;background:var(--bg-secondary);cursor:pointer; }
.ig-grid .ig-tile:first-child{ border-top-left-radius:12px; }
.ig-grid .ig-tile:nth-child(3){ border-top-right-radius:12px; }
.ig-tile img{ position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block; }
.ig-tile:active{ opacity:0.82; }
.ig-tile.is-locked img{ filter:blur(14px) brightness(0.6);transform:scale(1.15); }
.ig-tile-multi{ position:absolute;top:7px;right:7px;color:#fff;font-size:13px;z-index:2;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.75)); }
.ig-tile-price{
    position:absolute;left:6px;bottom:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;
    padding:2px 7px;border-radius:999px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:10px;font-weight:800;
}
.ig-tile-lock{ position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px; }
.ig-tile-stats{
    position:absolute;inset:0;z-index:3;display:flex;align-items:center;justify-content:center;gap:14px;
    color:#fff;font-weight:800;font-size:13px;background:rgba(0,0,0,0.4);opacity:0;transition:opacity .2s ease;
}
.ig-tile-stats span{ display:inline-flex;align-items:center;gap:5px; }
.ig-empty{ padding:26px 16px 30px;text-align:center; }
.ig-empty-icon{ width:60px;height:60px;margin:0 auto 10px;border-radius:50%;background:var(--bg-primary);display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--text-muted); }
.ig-empty-title{ font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary); }
.ig-empty-desc{ font-size:12px;color:var(--text-muted);margin-top:2px; }

/* ---------- 6. STORY ALA FACEBOOK ---------- */
.fb-feed-wrap{ max-width:640px;margin:0 auto; }
.fb-composer{ display:flex;align-items:center;gap:10px;padding:12px;margin-bottom:12px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:18px; }
.fb-composer-av{ flex-shrink:0;display:flex; }
.fb-composer-input{
    flex:1;min-width:0;height:40px;padding:0 16px;border:none;border-radius:999px;cursor:pointer;text-align:left;
    background:var(--bg-primary);color:var(--text-muted);font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.fb-composer-photo{ flex-shrink:0;width:40px;height:40px;border:none;border-radius:50%;cursor:pointer;background:rgba(16,185,129,0.15);color:#059669;font-size:16px; }
.fb-stories{ display:flex;gap:8px;overflow-x:auto;padding:2px 0 10px;margin-bottom:4px;scroll-snap-type:x proximity; }
.fb-story{
    position:relative;flex:0 0 104px;height:176px;border-radius:16px;overflow:hidden;cursor:pointer;
    background:var(--bg-secondary);border:1px solid var(--border-color);scroll-snap-align:start;contain:layout style paint;
}
.fb-story:active{ transform:scale(0.97); }
.fb-story-bg{ position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover; }
.fb-story.is-locked .fb-story-bg{ filter:blur(10px) brightness(0.6);transform:scale(1.2); }
.fb-story-shade{ position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.38) 0%,rgba(0,0,0,0) 36%,rgba(0,0,0,0) 55%,rgba(0,0,0,0.68) 100%); }
.fb-story-avatar{ position:absolute;top:8px;left:8px;z-index:2;display:flex; }
.fb-story-avatar .mlbb-avatar-wrap:not(:has(.mlbb-avatar-border)) .mlbb-avatar-inner{ box-shadow:0 0 0 3px var(--accent); }
.fb-story-lock{ position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px; }
.fb-story-name{
    position:absolute;left:8px;right:8px;bottom:8px;z-index:2;color:#fff;font-size:11.5px;font-weight:800;line-height:1.2;
    text-shadow:0 1px 3px rgba(0,0,0,0.85);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
.fb-story-create{ display:flex;flex-direction:column;background:var(--bg-card); }
.fb-story-create-top{ display:block;height:66%;overflow:hidden;background:var(--bg-secondary); }
.fb-story-create-top img{ width:100%;height:100%;object-fit:cover;display:block; }
.fb-story-initial{ width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-size:38px;font-weight:700; }
.fb-story-plus{
    position:absolute;left:50%;top:66%;z-index:2;width:34px;height:34px;border-radius:50%;transform:translate(-50%,-50%);
    display:flex;align-items:center;justify-content:center;font-size:14px;background:var(--accent);color:#fff;border:3px solid var(--bg-card);
}
.fb-story-create-label{ flex:1;display:flex;align-items:flex-end;justify-content:center;padding-bottom:9px;font-size:11.5px;font-weight:800;color:var(--text-primary); }
.fb-feed-bar{ display:flex;align-items:center;justify-content:space-between;gap:10px;margin:6px 0 10px; }
.fb-feed-title{ font-size:1.45rem;font-weight:700; }
.fb-feed-tabs{ display:flex;gap:6px; }
.fb-feed-tabs .tab-btn{ padding:7px 12px;font-size:12px;white-space:nowrap; }
.fb-feed-search{ position:relative;margin-bottom:12px; }
.fb-feed-search > i{ position:absolute;left:15px;top:50%;transform:translateY(-50%);font-size:13px;color:var(--text-muted); }
.fb-feed-search .input-modern{ height:42px;padding:0 16px 0 40px;border-radius:999px; }
.fb-feed{ display:flex;flex-direction:column;gap:12px; }
.fb-post,.fb-skel{ background:var(--bg-card);border:1px solid var(--border-color);border-radius:18px;overflow:hidden;contain:layout style; }
.fb-post-head{ display:flex;align-items:center;gap:10px;padding:12px 12px 8px; }
.fb-post-who{ flex:1;min-width:0; }
.fb-post-name{ display:flex;align-items:center;gap:3px;font-weight:800;font-size:14.5px;color:var(--text-primary);cursor:pointer; }
.fb-post-time{ margin-top:1px;font-size:11.5px;color:var(--text-muted); }
.fb-post-time i{ font-size:10px; }
.fb-post-price{ flex-shrink:0;display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:999px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-size:11px;font-weight:800; }
.fb-post-menu{ flex-shrink:0;width:34px;height:34px;border:none;border-radius:50%;cursor:pointer;background:rgba(239,68,68,0.12);color:#dc2626;font-size:12px; }
.fb-post-caption{ padding:0 12px 10px;font-size:14.5px;line-height:1.5;color:var(--text-primary);white-space:pre-line;word-break:break-word; }
.fb-media{ position:relative;display:grid;gap:2px;overflow:hidden;cursor:pointer;background:var(--bg-secondary); }
.fb-media-1{ aspect-ratio:4/5;max-height:560px; }
.fb-media-2{ grid-template-columns:1fr 1fr;aspect-ratio:1/1; }
.fb-media-3{ grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;aspect-ratio:1/1; }
.fb-media-3 .fb-media-tile:first-child{ grid-row:1 / span 2; }
.fb-media-4{ grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;aspect-ratio:1/1; }
.fb-media-tile{ position:relative;overflow:hidden;min-width:0;min-height:0; }
.fb-media-tile img,.fb-media-locked img{ position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block; }
.fb-media-more{ position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.55);color:#fff;font-family:var(--font-display);font-weight:700;font-size:26px; }
.fb-media-locked{ display:block;aspect-ratio:4/5;max-height:480px; }
.fb-media-locked .fb-locked-img{ filter:blur(16px) brightness(0.55);transform:scale(1.15); }
.fb-lock{ position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px;text-align:center;color:#fff; }
.fb-lock-icon{ width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;background:#fbbf24;color:#0f172a; }
.fb-lock-price{ display:inline-flex;align-items:center;gap:6px;padding:7px 16px;border-radius:999px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a;font-family:var(--font-display);font-weight:700;font-size:15px; }
.fb-lock-hint{ font-size:11.5px;font-weight:800;opacity:0.92; }
.fb-post-counts{ display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 12px;font-size:12.5px;color:var(--text-muted); }
.fb-post-counts > span:first-child{ display:inline-flex;align-items:center;gap:6px;font-weight:800; }
.fb-like-dot{ width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:9px;color:#fff;background:linear-gradient(135deg,#fb7185,#e11d48); }
.fb-post-actions{ display:grid;grid-template-columns:repeat(4,1fr);padding:3px 4px;border-top:1px solid var(--border-color); }
.fb-act{ display:flex;align-items:center;justify-content:center;gap:6px;height:38px;border:none;border-radius:8px;cursor:pointer;background:transparent;color:var(--text-secondary);font-weight:800;font-size:12.5px; }
.fb-act:active{ background:var(--bg-card-hover); }
.fb-act.is-liked{ color:#e11d48; }
.fb-act.is-saved{ color:var(--accent); }
/* viewer story */
.story-viewer-card{ border-radius:22px;overflow:hidden; }
.story-carousel{ border-radius:0;background:#000; }
.story-carousel-dots{ top:10px;bottom:auto;left:50%;transform:translateX(-50%);width:92%;max-width:400px;gap:4px;z-index:6; }
.story-carousel-dot{ flex:1 1 0;width:auto;height:4px;border-radius:2px;background:rgba(255,255,255,0.35); }
.story-carousel-dot.active{ background:#fff;width:auto;border-radius:2px; }
.story-carousel-counter{ bottom:14px;top:auto;right:14px;font-weight:800; }

/* ---------- 7. PASANGAN + KARTU STREAK ---------- */
.btn-couple{
    display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:none;border-radius:14px;cursor:pointer;
    background:linear-gradient(135deg,#ec4899,#8b5cf6);color:#fff;font-family:var(--font-display);font-weight:600;font-size:14px;
}
.btn-couple:active{ transform:scale(0.97); }
.btn-couple:disabled{ opacity:0.6;cursor:default;transform:none; }
.couple-entry{
    display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:12px;border-radius:18px;cursor:pointer;color:#fff;
    background:linear-gradient(135deg,#ec4899,#8b5cf6);
}
.couple-entry:active{ transform:scale(0.98); }
.couple-entry-emoji{ font-size:26px;line-height:1; }
.couple-entry-body{ flex:1;min-width:0;display:flex;flex-direction:column; }
.couple-entry-body b{ font-family:var(--font-display);font-weight:700;font-size:15px; }
.couple-entry-body span{ font-size:11.5px;opacity:0.92; }
.couple-hero{ text-align:center;padding:22px 18px;margin-bottom:12px;border-radius:24px;color:#fff;background:linear-gradient(135deg,#ec4899 0%,#a855f7 60%,#6366f1 100%); }
.couple-hero-emoji{ font-size:44px;line-height:1;margin-bottom:8px; }
.couple-hero h2{ font-size:1.5rem;font-weight:700; }
.couple-hero p{ margin-top:6px;font-size:13px;line-height:1.5;opacity:0.95; }
.couple-steps{ display:grid;gap:8px; }
.couple-steps > div{ display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-color);font-size:13px;color:var(--text-secondary); }
.couple-steps b{ flex-shrink:0;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(236,72,153,0.15);color:var(--pink);font-family:var(--font-display);font-weight:700;font-size:13px; }
.couple-wait{ display:flex;flex-direction:column;align-items:center;gap:10px;padding:22px 16px;text-align:center;border-radius:24px; }
.couple-wait-avatars{ display:flex;align-items:center;gap:14px;margin-bottom:4px; }
.couple-wait-heart{ color:var(--pink);font-size:22px;animation:softPulse 1.2s ease-in-out infinite; }
.couple-wait-empty{ width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;color:var(--text-muted);border:2.5px dashed var(--border-color); }
.couple-wait-title{ font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
@keyframes coupleDot{ 0%,80%,100%{ opacity:0.25; }40%{ opacity:1; } }
.couple-dots{ display:inline-flex;gap:3px;margin-left:5px; }
.couple-dots i{ width:5px;height:5px;border-radius:50%;background:var(--pink);animation:coupleDot 1.2s ease-in-out infinite; }
.couple-dots i:nth-child(2){ animation-delay:.2s; }
.couple-dots i:nth-child(3){ animation-delay:.4s; }
.couple-code{
    width:100%;padding:14px 10px;border-radius:18px;cursor:pointer;text-align:center;
    background:rgba(236,72,153,0.1);border:2px dashed rgba(236,72,153,0.5);color:var(--pink);
    font-family:'Courier New',monospace;font-weight:800;font-size:30px;letter-spacing:10px;padding-left:20px;
}
.couple-cancel{ margin-top:4px;padding:8px 12px;border:none;background:none;cursor:pointer;color:var(--text-muted);font-weight:800;font-size:12.5px;text-decoration:underline;display:block;width:100%;text-align:center; }
.couple-demo{ width:100%;margin-top:8px;padding:9px 12px;border-radius:12px;cursor:pointer;border:1.5px dashed var(--border-color);background:transparent;color:var(--text-secondary);font-weight:800;font-size:12px; }
.couple-checkin{ padding:16px;margin-bottom:12px;text-align:center;border-radius:20px; }
.couple-checkin-title{ font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
.couple-checkin-desc{ margin:3px 0 12px;font-size:13px;color:var(--text-secondary); }
/* kartu streak */
@keyframes flameBob{ 0%,100%{ transform:translateY(0) scale(1); }50%{ transform:translateY(-3px) scale(1.08); } }
.streak-card{
    position:relative;overflow:hidden;margin-bottom:12px;padding:16px 14px 14px;border-radius:26px;color:#fff;
    background:linear-gradient(135deg,#ec4899 0%,#a855f7 55%,#6366f1 100%);
}
.streak-card.is-hot{ background:linear-gradient(135deg,#f97316 0%,#ec4899 48%,#8b5cf6 100%); }
.streak-card[role="button"]{ cursor:pointer; }
.streak-card::before,.streak-card::after{ content:'';position:absolute;border-radius:50%;background:rgba(255,255,255,0.12);pointer-events:none; }
.streak-card::before{ width:180px;height:180px;right:-60px;top:-70px; }
.streak-card::after{ width:120px;height:120px;left:-40px;bottom:-50px; }
.streak-card > *{ position:relative;z-index:1; }
.streak-card-top{ display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:14px; }
.streak-brand{ display:inline-flex;align-items:center;gap:6px;padding:4px 11px;border-radius:999px;background:rgba(255,255,255,0.22);font-family:var(--font-display);font-weight:600;font-size:12.5px; }
.streak-together{ font-size:11.5px;font-weight:800; }
.streak-pair{ display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:6px; }
.streak-person{ display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;cursor:pointer; }
.streak-person .mlbb-avatar-wrap:not(:has(.mlbb-avatar-border)) .mlbb-avatar-inner{ box-shadow:0 0 0 3px rgba(255,255,255,0.9); }
.streak-name{ display:flex;align-items:center;justify-content:center;max-width:100%;margin-top:4px;font-family:var(--font-display);font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.streak-check{ display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:999px;background:rgba(255,255,255,0.22);font-size:10px;font-weight:800; }
.streak-check.on{ background:#fff;color:#db2777; }
.streak-center{ display:flex;flex-direction:column;align-items:center;padding:0 2px; }
.streak-flame{ font-size:28px;line-height:1; }
.streak-card.is-hot .streak-flame{ animation:flameBob 1.8s ease-in-out infinite; }
.streak-card:not(.is-hot) .streak-flame{ filter:grayscale(1);opacity:0.7; }
.streak-num{ font-family:var(--font-display);font-weight:700;font-size:48px;line-height:1;text-shadow:0 3px 0 rgba(0,0,0,0.16); }
.streak-label{ font-size:9.5px;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;opacity:0.95;white-space:nowrap; }
.streak-week{ display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:14px;padding:10px 8px;border-radius:16px;background:rgba(255,255,255,0.17); }
.streak-day{ display:flex;flex-direction:column;align-items:center;gap:4px; }
.streak-dot{ width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;background:rgba(255,255,255,0.22);color:#fff; }
.streak-day.half .streak-dot{ background:rgba(255,255,255,0.5); }
.streak-day.both .streak-dot{ background:#fff;color:#f97316; }
.streak-day.today .streak-dot{ box-shadow:0 0 0 2px #fff; }
.streak-day-label{ font-size:9px;font-weight:800;opacity:0.95; }
.streak-foot{ display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:12px;font-size:11px;font-weight:800; }
.streak-foot span{ display:inline-flex;align-items:center;gap:5px;white-space:nowrap; }
.streak-card.compact{ padding:14px 12px 12px;border-radius:22px;margin-bottom:16px; }
.streak-card.compact .streak-num{ font-size:38px; }
.streak-card.compact .streak-card-top{ margin-bottom:10px; }
/* rank streak di leaderboard */
.lb-tab-streak.active{ background:rgba(249,115,22,0.15);border-color:#f97316;color:#ea580c; }
.couple-rank-list{ display:flex;flex-direction:column;gap:8px; }
.couple-rank-item{ display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:18px;background:var(--bg-secondary);border:1px solid var(--border-color); }
.couple-rank-item.is-mine{ border-color:var(--pink);background:rgba(236,72,153,0.07); }
.leaderboard-my-rank .couple-rank-item{ background:transparent;border:none;padding:0; }
.couple-rank-avatars{ display:flex;align-items:center;flex-shrink:0; }
.couple-rank-avatars > span{ display:flex;cursor:pointer; }
.couple-rank-heart{ width:20px;justify-content:center;color:var(--pink);font-size:11px;cursor:default !important; }
.couple-rank-body{ flex:1;min-width:0; }
.couple-rank-names{ font-weight:800;font-size:13.5px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.couple-rank-names span{ color:var(--pink); }
.couple-rank-meta{ font-size:10.5px;color:var(--text-muted); }
.couple-rank-streak{ flex-shrink:0;display:flex;align-items:center;gap:3px;padding:5px 10px;border-radius:999px;background:rgba(249,115,22,0.14); }
.couple-rank-streak b{ font-family:var(--font-display);font-weight:700;font-size:16px;color:#ea580c; }

/* ---------- 8. PLAYER: FULLSCREEN + ROTASI (series & party identik) ---------- */
.fs-enter-btn{
    position:absolute;top:10px;left:10px;z-index:16;width:38px;height:38px;border-radius:12px;
    display:flex;align-items:center;justify-content:center;cursor:pointer;
    background:rgba(15,15,20,0.7);color:#fff;border:1px solid rgba(255,255,255,0.22);font-size:14px;
}
.fs-enter-btn:active{ transform:scale(0.9); }
.player-fs-btn{
    width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border-radius:14px;border:none;cursor:pointer;
    color:#fff;font-family:var(--font-display);font-weight:600;font-size:13px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);
}
.player-wrapper-el + .player-fs-btn{ margin-top:10px; }
.player-fs-btn:active{ transform:scale(0.98); }
.fs-placeholder{ width:100%; }
/* saat fullscreen: kunci scroll & sembunyikan semua chrome aplikasi */
html.player-fs-root,body.player-fs-active{ overflow:hidden !important;overscroll-behavior:none !important; }
body.player-fs-active #mainHeader,
body.player-fs-active .bottom-nav-app,
body.player-fs-active .floating-leaderboard-btn,
body.player-fs-active #siteFooter,
body.player-fs-active #searchBar,
body.player-fs-active .conn-pill{ display:none !important; }
body.player-fs-active .toast{ z-index:2147483600 !important; }
/* induk player: lepas animasi/transform/filter/contain agar position:fixed mengacu ke layar.
   animation:none wajib — di sebagian WebView, transform dari animasi tetap menang atas !important */
.fs-no-anim{ animation:none !important; }
.fs-ancestor{
    animation:none !important;
    -webkit-transform:none !important;transform:none !important;translate:none !important;rotate:none !important;scale:none !important;
    filter:none !important;perspective:none !important;
    -webkit-backdrop-filter:none !important;backdrop-filter:none !important;
    contain:none !important;content-visibility:visible !important;will-change:auto !important;
}
.player-fs-on{
    --fs-l:0px;--fs-r:0px;
    --fs-t:max(env(safe-area-inset-top,0px), var(--tg-safe-area-inset-top,0px));
    --fs-b:max(env(safe-area-inset-bottom,0px), var(--tg-safe-area-inset-bottom,0px));
    --fs-bar-t:max(env(safe-area-inset-top,0px), calc(var(--tg-safe-area-inset-top,0px) + var(--tg-content-safe-area-inset-top,0px)));
    position:fixed !important;top:0 !important;left:0 !important;right:auto !important;bottom:auto !important;
    width:100vw !important;height:100vh !important;height:100dvh !important;
    margin:0 !important;padding:0 !important;border-radius:0 !important;
    background:#000 !important;box-shadow:none !important;overflow:hidden !important;
    z-index:2147483000 !important;
}
/* rotasi CSS 90 derajat: dipakai bila layar HP tidak bisa diputar oleh sistem */
.player-fs-on.fs-rotated{
    --fs-t:0px;--fs-b:0px;--fs-bar-t:0px;
    --fs-l:max(env(safe-area-inset-top,0px), calc(var(--tg-safe-area-inset-top,0px) + var(--tg-content-safe-area-inset-top,0px)));
    --fs-r:max(env(safe-area-inset-bottom,0px), var(--tg-safe-area-inset-bottom,0px));
    top:50% !important;left:50% !important;
    width:100vh !important;width:100dvh !important;height:100vw !important;
    transform:translate(-50%,-50%) rotate(90deg) !important;transform-origin:center center !important;
}
.player-fs-on > iframe,.player-fs-on > video{
    position:absolute !important;left:var(--fs-l) !important;top:var(--fs-t) !important;
    width:calc(100% - var(--fs-l) - var(--fs-r)) !important;height:calc(100% - var(--fs-t) - var(--fs-b)) !important;
    border-radius:0 !important;object-fit:contain !important;background:#000 !important;
}
.player-fs-on .fs-enter-btn{ display:none; }
.fs-toolbar{
    position:absolute;z-index:30;display:flex;align-items:center;gap:10px;
    top:calc(var(--fs-bar-t) + 10px);left:calc(var(--fs-l) + 12px);right:calc(var(--fs-r) + 12px);
    pointer-events:none;
}
.fs-toolbar > button{ pointer-events:auto; }
.fs-title{ flex:1;min-width:0;color:#fff;font-family:var(--font-display);font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 1px 6px rgba(0,0,0,0.85);transition:opacity .35s ease; }
.fs-btn{
    display:inline-flex;align-items:center;justify-content:center;gap:6px;height:40px;min-width:40px;padding:0 14px;
    border-radius:999px;border:1px solid rgba(255,255,255,0.28);background:rgba(15,15,20,0.78);color:#fff;
    font-family:var(--font-display);font-weight:600;font-size:12.5px;cursor:pointer;transition:transform .15s ease,opacity .35s ease;
}
.fs-btn:active{ transform:scale(0.9); }
.fs-btn-exit{ background:rgba(220,38,38,0.92);border-color:rgba(255,255,255,0.45); }
.fs-btn-rotate.is-on{ background:rgba(124,58,237,0.92);border-color:rgba(255,255,255,0.4); }
.fs-btn-rotate i{ transition:transform .3s ease; }
.fs-btn-rotate.is-on i{ transform:rotate(90deg); }
/* tombol Tutup selalu terlihat jelas; hanya judul & tombol Putar yang meredup */
.player-fs-on.fs-dim .fs-title,.player-fs-on.fs-dim .fs-btn-rotate{ opacity:0.4; }

/* ---------- 9. EFEK HOVER — hanya perangkat ber-mouse ---------- */
@media (hover:hover) and (pointer:fine){
    #mainHeader button:hover{ transform:translateY(-2px); }
    .movie-card:hover{ transform:translateY(-4px); }
    .ig-tile:hover .ig-tile-stats{ opacity:1; }
    .carousel-arrow:hover{ background:rgba(124,58,237,0.85); }
    .profile-menu-icon{ transition:transform .2s ease; }
    .profile-menu-row:hover .profile-menu-icon{ transform:scale(1.08) rotate(-4deg); }
    .user-result:hover,.fb-act:hover{ background:var(--bg-card-hover); }
    .fb-post-name:hover{ text-decoration:underline; }
    .fbp-btn:hover,.share-chip:hover{ filter:brightness(0.96); }
    .reaction-btn:hover{ transform:translateY(-3px); }
    .floating-leaderboard-btn:hover{ transform:scale(1.08) rotate(8deg); }
    .fs-enter-btn:hover,.fs-btn-rotate:hover{ background:rgba(124,58,237,0.92); }
    .player-fs-on.fs-dim .fs-toolbar:hover .fs-title,.player-fs-on.fs-dim .fs-toolbar:hover .fs-btn-rotate{ opacity:1; }
}

/* ---------- 10. RESPONSIF ---------- */
@media(max-width:400px){
    .nav-btn{ min-width:48px;padding:6px 4px; }
    .nav-btn span{ font-size:9px; }
    .nav-btn i{ font-size:16px; }
    .carousel-wrap{ height:180px;border-radius:18px; }
    .fbp-cover{ height:150px; }
    .fbp-name{ font-size:1.35rem; }
    .fs-btn-rotate span{ display:none; }
    .fb-act span{ display:none; }
    .fb-story{ flex-basis:96px;height:164px; }
    .streak-num{ font-size:42px; }
    .couple-code{ font-size:26px;letter-spacing:8px; }
}
@media(min-width:1024px){
    .bottom-nav-app{ left:50%;right:auto;transform:translateX(-50%);width:100%;max-width:760px;border-radius:28px; }
    .bottom-nav-inner{ max-width:760px;padding:8px; }
    .nav-btn{ min-width:80px;padding:9px 10px; }
    .nav-btn span{ font-size:11px; }
    .nav-btn i{ font-size:19px; }
    main#app{ padding-bottom:130px; }
    .floating-leaderboard-btn{ bottom:110px; }
    .carousel-wrap{ height:360px; }
    .profile-card,.ig-section,.profile-section-card,.streak-card,#coupleBox{ max-width:720px;margin-left:auto;margin-right:auto; }
}
@media(max-height:520px) and (orientation:landscape){
    #mainHeader{ padding-top:5px;padding-bottom:5px; }
    .carousel-wrap{ height:170px; }
    .fbp-cover{ height:120px; }
    .bottom-nav-app{ bottom:6px; }
}
@media(prefers-reduced-motion:reduce){
    *,*::before,*::after{ animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important; }
    html{ scroll-behavior:auto; }
}

/* ---------- 11. RANDOM DICE ---------- */
body.rd-playing #mainHeader,body.rd-playing .bottom-nav-app,body.rd-playing .floating-leaderboard-btn,
body.rd-playing #siteFooter,body.rd-playing #searchBar{ display:none !important; }
body.rd-playing main#app{ padding-top:8px;padding-bottom:16px; }
.rd-wrap{ max-width:520px;margin:0 auto; }
.rd-top{ display:flex;align-items:center;gap:10px;margin-bottom:10px; }
.rd-back{ flex-shrink:0;width:38px;height:38px;border-radius:12px;cursor:pointer;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-primary); }
.rd-title{ flex:1;min-width:0;font-size:1.25rem;font-weight:700; }
.rd-mode-badge{ flex-shrink:0;padding:4px 11px;border-radius:999px;background:rgba(124,58,237,0.13);color:var(--accent);font-family:var(--font-display);font-weight:600;font-size:12px; }
.rd-mode-badge:empty{ display:none; }
.rd-entry{ display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:12px;border-radius:18px;cursor:pointer;background:var(--bg-card);border:1.5px solid var(--border-color); }
.rd-entry:active{ transform:scale(0.98); }
.rd-entry.is-invited{ border-color:var(--pink);background:rgba(236,72,153,0.08); }
.rd-entry-icon{ font-size:28px;line-height:1; }
.rd-entry-body{ flex:1;min-width:0;display:flex;flex-direction:column; }
.rd-entry-body b{ font-family:var(--font-display);font-weight:700;font-size:15px;color:var(--text-primary); }
.rd-entry-body span{ font-size:11.5px;color:var(--text-muted); }
.rd-entry-go{ flex-shrink:0;padding:7px 14px;border-radius:999px;background:linear-gradient(135deg,#8b5cf6,#ec4899);color:#fff;font-family:var(--font-display);font-weight:600;font-size:12.5px; }
.rd-hero{ text-align:center;padding:20px 16px;margin-bottom:14px;border-radius:24px;color:#fff;background:linear-gradient(135deg,#1e1b4b 0%,#6d28d9 60%,#db2777 100%); }
.rd-hero-dice{ font-size:34px;letter-spacing:8px;margin-bottom:6px; }
.rd-hero h2{ font-size:1.35rem;font-weight:700; }
.rd-hero p{ margin-top:5px;font-size:13px;line-height:1.5;opacity:0.94; }
.rd-section-label{ margin-bottom:8px;font-family:var(--font-display);font-weight:700;font-size:15px;color:var(--text-primary); }
.rd-mode-cards{ display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px; }
.rd-mode-card{ display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 10px;text-align:center;border-radius:18px;cursor:pointer;border:1.5px solid var(--border-color);background:var(--bg-card); }
.rd-mode-card:active{ transform:scale(0.97);border-color:var(--accent); }
.rd-mode-emoji{ font-size:34px;line-height:1; }
.rd-mode-card b{ font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary); }
.rd-mode-card span:last-child{ font-size:11.5px;line-height:1.35;color:var(--text-muted); }
.rd-note{ margin-top:8px;text-align:center;font-size:11.5px;color:var(--text-muted); }
.rd-note i{ margin-right:5px;color:var(--pink); }
.rd-lobby{ display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px 16px;text-align:center;border-radius:24px; }
.rd-lobby-emoji{ font-size:46px;line-height:1; }
.rd-lobby-title{ font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
.rd-lobby-sub{ margin-bottom:8px;font-size:13px;color:var(--text-secondary); }
.rd-pick-head{ display:flex;align-items:center;gap:12px;margin-bottom:10px; }
.rd-count{ flex-shrink:0;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-weight:700;font-size:24px;background:linear-gradient(135deg,#8b5cf6,#ec4899); }
.rd-count.is-low{ background:#dc2626;animation:softPulse 0.6s ease-in-out infinite; }
.rd-pick-info{ min-width:0; }
.rd-pick-title{ font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
.rd-pick-sub{ font-size:12px;color:var(--text-muted); }
.rd-modes{ display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px; }
.rd-modes button{ display:flex;flex-direction:column;gap:1px;padding:9px 10px;text-align:left;border-radius:14px;cursor:pointer;border:1.5px solid var(--border-color);background:var(--bg-card); }
.rd-modes button.active{ border-color:var(--accent);background:rgba(124,58,237,0.1); }
.rd-modes b{ font-family:var(--font-display);font-weight:700;font-size:14px;color:var(--text-primary); }
.rd-modes span{ font-size:10.5px;color:var(--text-muted); }
.rd-dice-list{ display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px; }
.rd-dice-card{ position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;padding:10px 6px 8px;text-align:center;border-radius:16px;cursor:pointer;border:2px solid var(--border-color);background:var(--bg-card); }
.rd-dice-card:active{ transform:scale(0.96); }
.rd-dice-card.selected{ border-color:var(--dc);background:var(--bg-card-hover);background:color-mix(in srgb, var(--dc) 12%, var(--bg-card)); }
.rd-dice-card.selected::after{ content:'✓';position:absolute;top:5px;right:6px;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff;background:var(--dc); }
.rd-dice-emoji{ width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid var(--dc);background:var(--bg-primary);background:color-mix(in srgb, var(--dc) 18%, transparent); }
.rd-dice-name{ margin-top:3px;font-family:var(--font-display);font-weight:700;font-size:13px;color:var(--text-primary); }
.rd-dice-stat{ font-size:10px;font-weight:800;color:var(--text-secondary); }
.rd-dice-desc{ font-size:9.5px;line-height:1.25;color:var(--text-muted); }
.rd-hud{ display:grid;grid-template-columns:1fr 1.25fr 1fr;gap:8px;margin-bottom:6px; }
.rd-hud-item{ display:flex;flex-direction:column;align-items:center;padding:6px 4px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-color); }
.rd-hud-item span{ font-size:9.5px;font-weight:800;letter-spacing:0.07em;text-transform:uppercase;color:var(--text-muted); }
.rd-hud-item b{ font-family:var(--font-display);font-weight:700;font-size:17px;line-height:1.25;color:var(--text-primary); }
.rd-hud-lives b{ font-size:14px;letter-spacing:1px; }
.rd-stagebar{ height:4px;margin-bottom:8px;border-radius:2px;overflow:hidden;background:var(--border-color); }
.rd-stagebar i{ display:block;width:100%;height:100%;background:linear-gradient(90deg,#8b5cf6,#ec4899);transform-origin:left center;transform:scaleX(0); }
.rd-rival{ display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;margin-bottom:8px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-color); }
.rd-rival-who{ display:flex;align-items:center;gap:9px;min-width:0; }
.rd-rival-text{ min-width:0;display:flex;flex-direction:column; }
.rd-rival-text b{ font-weight:800;font-size:13px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.rd-rival-text span{ font-size:11px;color:var(--text-muted);white-space:nowrap; }
.rd-rival-grid{ flex-shrink:0;display:grid;grid-template-columns:repeat(5,18px);grid-auto-rows:18px;gap:2px; }
.rd-mini{ position:relative;border-radius:5px;background:var(--bg-primary);font-size:10px;line-height:18px;text-align:center; }
.rd-mini i{ position:absolute;right:-1px;bottom:-3px;font-size:7.5px;font-style:normal;font-weight:900;line-height:1;color:var(--text-primary); }
.rd-field{ position:relative;width:100%;aspect-ratio:100/72;margin-bottom:10px;border-radius:20px;overflow:hidden;background:var(--bg-card);border:1px solid var(--border-color);touch-action:none; }
#rdCanvas{ position:absolute;top:0;left:0;width:100%;height:100%;display:block; }
.rd-grid{ position:absolute;left:18%;width:64%;top:27%;height:70%;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(3,1fr);gap:4px;touch-action:none; }
.rd-cell{ position:relative;min-width:0;min-height:0;padding:0;display:flex;align-items:center;justify-content:center;border-radius:12px;cursor:pointer;background:transparent;border:1.5px dashed var(--border-color); }
.rd-cell.has-die{ border-color:transparent; }
.rd-die{ width:94%;height:94%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:11px;pointer-events:none;border:2px solid var(--dc);background:var(--bg-primary);background:color-mix(in srgb, var(--dc) 16%, var(--bg-card));transition:transform .12s ease; }
.rd-die-emoji{ font-size:clamp(13px,4.6vw,22px);line-height:1; }
.rd-pips{ display:flex;gap:2px;height:4px; }
.rd-pips i{ width:4px;height:4px;border-radius:50%;background:var(--dc); }
.rd-cell.is-selected .rd-die{ transform:scale(1.07);box-shadow:0 0 0 3px var(--accent); }
.rd-cell.can-merge .rd-die{ box-shadow:0 0 0 3px #22c55e; }
.rd-cell.is-locked .rd-die{ filter:grayscale(1);opacity:0.5; }
.rd-cell.is-locked::after{ content:'🔒';position:absolute;font-size:14px; }
.rd-banner{ position:absolute;left:50%;top:3%;z-index:3;padding:5px 12px;border-radius:999px;white-space:nowrap;pointer-events:none;color:#fff;background:rgba(15,23,42,0.88);font-family:var(--font-display);font-weight:600;font-size:12px;opacity:0;transform:translate(-50%,-8px);transition:opacity .25s ease,transform .25s ease; }
.rd-banner.show{ opacity:1;transform:translate(-50%,0); }
.rd-banner.boss{ background:#dc2626; }
.rd-banner.good{ background:#059669; }
.rd-summon{ width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:13px;border:none;border-radius:16px;cursor:pointer;color:#fff;font-family:var(--font-display);font-weight:600;font-size:15px;background:linear-gradient(135deg,#8b5cf6,#ec4899); }
.rd-summon:active{ transform:scale(0.98); }
.rd-summon.is-off{ opacity:0.5; }
.rd-summon-ic{ font-size:18px; }
.rd-summon b{ padding:2px 10px;border-radius:999px;background:rgba(255,255,255,0.25);font-weight:700; }
.rd-power{ display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:8px; }
.rd-power-btn{ display:flex;flex-direction:column;align-items:center;gap:1px;padding:7px 2px;border-radius:12px;cursor:pointer;opacity:0.55;border:1.5px solid var(--border-color);background:var(--bg-card); }
.rd-power-btn.can-buy{ opacity:1;border-color:var(--dc); }
.rd-power-emoji{ font-size:18px;line-height:1.1; }
.rd-power-lv{ font-size:10px;font-weight:800;color:var(--text-primary); }
.rd-power-cost{ font-size:10px;font-weight:800;color:var(--text-muted); }
.rd-result{ display:flex;flex-direction:column;align-items:center;gap:4px;padding:26px 18px;text-align:center;border-radius:24px; }
.rd-result.is-win{ border-color:#f59e0b; }
.rd-result-emoji{ font-size:58px;line-height:1; }
.rd-result h2{ font-size:1.75rem;font-weight:700; }
.rd-result-sub{ font-size:13.5px;color:var(--text-secondary); }
.rd-result-stage{ font-size:12.5px;color:var(--text-muted); }
.rd-result-note{ margin:10px 0 14px;font-size:12.5px;color:var(--text-muted); }
.rd-reward{ display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:12px 0 16px; }
.rd-reward span{ display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;font-family:var(--font-display);font-weight:700;font-size:14px; }
.rd-reward span:first-child{ background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a; }
.rd-reward span:last-child{ background:rgba(124,58,237,0.14);color:var(--accent); }

/* ---------- 12. TOP UP KOIN (TELEGRAM STARS) ---------- */
#coinDisplay{ cursor:pointer; }
.coin-plus{ width:16px;height:16px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:8px;background:rgba(15,23,42,0.2); }
.topup-balance{ display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:16px;background:var(--bg-primary); }
.topup-balance span{ font-size:12.5px;color:var(--text-muted); }
.topup-balance b{ display:inline-flex;align-items:center;gap:7px;font-family:var(--font-display);font-weight:700;font-size:18px;color:#d97706; }
.topup-rate{ margin:12px 0 8px;text-align:center;font-family:var(--font-display);font-weight:600;font-size:13.5px;color:var(--text-primary); }
.topup-list{ display:grid;grid-template-columns:repeat(3,1fr);gap:8px; }
.topup-pack{ display:flex;flex-direction:column;align-items:center;gap:1px;padding:14px 6px 10px;border-radius:16px;cursor:pointer;border:1.5px solid var(--border-color);background:var(--bg-card); }
.topup-pack:active{ transform:scale(0.96);border-color:#229ED9; }
.topup-pack:disabled{ opacity:0.5; }
.topup-koin{ font-family:var(--font-display);font-weight:700;font-size:19px;color:#d97706; }
.topup-label{ font-size:10.5px;color:var(--text-muted); }
.topup-price{ margin-top:7px;padding:5px 12px;border-radius:999px;background:#229ED9;color:#fff;font-family:var(--font-display);font-weight:700;font-size:13px; }
.topup-note{ margin-top:12px;text-align:center;font-size:11.5px;line-height:1.45;color:var(--text-muted); }
@media(max-width:380px){ .rd-dice-desc{ display:none; } .rd-rival-grid{ grid-template-columns:repeat(5,15px);grid-auto-rows:15px; } }

/* ---------- 13. MEDIA RAPI + SPOILER TEBAL ---------- */
/* semua media story memakai bingkai yang sama (lebar penuh, rasio 4:5) supaya ukurannya seragam */
.story-viewer-card,.gallery-comment-section{ max-width:640px;margin-left:auto;margin-right:auto; }
.story-frame,.story-carousel-slide{ position:relative;width:100%;aspect-ratio:4/5;max-height:74vh;overflow:hidden;background:#000; }
.story-frame > img,.story-carousel-slide > img{ position:absolute;top:0;left:0;width:100%;height:100%;max-height:none;object-fit:contain;display:block;cursor:zoom-in; }
.story-frame.gallery-locked-wrap > img.locked-img{ object-fit:cover;cursor:default; }
.fb-media-1,.fb-media-locked{ aspect-ratio:4/5;max-height:520px; }
/* media berbayar: blur jauh lebih tebal + lapisan gelap berpola, supaya isi tidak terbaca */
.fb-media-locked .fb-locked-img,.gallery-locked-wrap img.locked-img{ filter:blur(34px) saturate(0.55) brightness(0.45);transform:scale(1.35); }
.ig-tile.is-locked img{ filter:blur(20px) saturate(0.55) brightness(0.45);transform:scale(1.4); }
.fb-story.is-locked .fb-story-bg{ filter:blur(18px) saturate(0.55) brightness(0.45);transform:scale(1.4); }
.fb-lock,.gallery-lock-overlay,.ig-tile-lock,.fb-story-lock{
    background-color:rgba(15,23,42,0.52);
    background-image:radial-gradient(rgba(255,255,255,0.17) 1.2px,transparent 1.5px);background-size:9px 9px;
}

/* ---------- 14. MENGIKUTI / PENGIKUT ---------- */
.fbp-stat-btn{ border:none;background:none;padding:0;cursor:pointer;font:inherit;color:inherit; }
.fbp-stat-btn:active{ opacity:0.6; }
.follow-btn.is-following{ background:var(--bg-primary);color:var(--text-primary); }
.fb-follow-btn{
    flex-shrink:0;display:inline-flex;align-items:center;gap:4px;padding:5px 12px;border-radius:999px;border:none;cursor:pointer;
    background:rgba(124,58,237,0.13);color:var(--accent);font-family:var(--font-display);font-weight:600;font-size:12px;
}
.fb-follow-btn:active{ transform:scale(0.95); }
.follow-list{ display:flex;flex-direction:column;gap:2px; }
.follow-row{ display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 2px; }
.follow-row-who{ display:flex;align-items:center;gap:10px;min-width:0;cursor:pointer; }
.follow-row-text{ min-width:0;display:flex;flex-direction:column; }
.follow-row-text b{ display:flex;align-items:center;gap:3px;font-weight:800;font-size:14px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.follow-row-text span{ font-size:11.5px;color:var(--text-muted); }
.follow-mini{
    flex-shrink:0;display:inline-flex;align-items:center;gap:5px;height:32px;padding:0 12px;border-radius:10px;border:none;cursor:pointer;
    background:var(--bg-primary);color:var(--text-primary);font-family:var(--font-display);font-weight:600;font-size:12px;
}
.follow-mini.fbp-btn-primary{ background:var(--accent);color:#fff; }

/* ---------- 15. KARTU STREAK BERTINGKAT (makin panjang streak, makin meriah) ---------- */
.streak-card > .streak-shine,.streak-card > .streak-holo,.streak-card > .streak-fx{ position:absolute;z-index:0;pointer-events:none; }
.streak-tier{ display:inline-flex;align-items:center;gap:4px;padding:4px 11px;border-radius:999px;background:rgba(255,255,255,0.22);font-family:var(--font-display);font-weight:600;font-size:12px;white-space:nowrap; }
.streak-next{ margin-top:10px;font-size:11px;font-weight:800; }
.streak-next-bar{ height:5px;margin-top:5px;border-radius:3px;overflow:hidden;background:rgba(255,255,255,0.25); }
.streak-next-bar i{ display:block;height:100%;border-radius:3px;background:#fff; }
@keyframes streakShine{ 0%{ transform:translateX(-140%) skewX(-18deg); }55%,100%{ transform:translateX(320%) skewX(-18deg); } }
@keyframes streakFloat{ 0%{ transform:translateY(0) scale(0.6);opacity:0; }15%{ opacity:0.95; }100%{ transform:translateY(-170px) scale(1.15);opacity:0; } }
@keyframes streakSpin{ to{ transform:rotate(360deg); } }
@keyframes streakPop{ 0%,100%{ transform:scale(1); }50%{ transform:scale(1.06); } }
.streak-shine{ top:0;left:0;width:42%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);animation:streakShine 3.4s ease-in-out infinite; }
.streak-fx{ top:0;left:0;width:100%;height:100%;overflow:hidden; }
.streak-fx i{ position:absolute;bottom:-16px;font-style:normal;font-size:13px;opacity:0;animation:streakFloat 4s linear infinite; }
.streak-holo{ top:50%;left:50%;width:170%;aspect-ratio:1/1;margin:-85% 0 0 -85%;opacity:0.3;background:conic-gradient(from 0deg,#f0abfc,#67e8f9,#fde68a,#86efac,#f0abfc);animation:streakSpin 9s linear infinite; }
.streak-card.tier-0{ background:linear-gradient(135deg,#94a3b8 0%,#a78bfa 60%,#818cf8 100%); }
.streak-card.tier-1{ background:linear-gradient(135deg,#f97316 0%,#ec4899 48%,#8b5cf6 100%); }
.streak-card.tier-2{ background:linear-gradient(135deg,#ff512f 0%,#dd2476 52%,#7c3aed 100%); }
.streak-card.tier-2 .streak-num,.streak-card.tier-3 .streak-num,.streak-card.tier-4 .streak-num{ animation:streakPop 2.2s ease-in-out infinite; }
.streak-card.tier-3{ background:linear-gradient(135deg,#f59e0b 0%,#f97316 45%,#db2777 100%);box-shadow:inset 0 0 0 2.5px #fde68a; }
.streak-card.tier-3 .streak-num{ color:#fffbeb;text-shadow:0 0 16px rgba(253,230,138,0.95),0 3px 0 rgba(0,0,0,0.18); }
.streak-card.tier-3 .streak-tier,.streak-card.tier-4 .streak-tier{ background:#fff;color:#b45309; }
.streak-card.tier-4{ background:linear-gradient(135deg,#1e1b4b 0%,#6d28d9 50%,#db2777 100%);box-shadow:inset 0 0 0 2.5px #e9d5ff,inset 0 0 0 5px rgba(255,255,255,0.18); }
.streak-card.tier-4 .streak-num{ font-size:56px;background:linear-gradient(180deg,#fff 0%,#fde68a 55%,#a5f3fc 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;text-shadow:none; }
.streak-card.tier-4 .streak-tier{ color:#6d28d9; }
.streak-card.compact.tier-4 .streak-num{ font-size:42px; }
.streak-foot span{ white-space:normal; }

/* ---------- 16. RANDOM DICE: GLOBAL, TROPHY, CHAT ---------- */
.rd-title small{ margin-left:4px;padding:2px 8px;border-radius:999px;background:rgba(245,158,11,0.16);color:#d97706;font-size:11px;font-weight:600;vertical-align:middle; }
.rd-mode-card em{ margin-top:5px;padding:2px 10px;border-radius:999px;background:rgba(124,58,237,0.12);color:var(--accent);font-style:normal;font-size:10.5px;font-weight:800; }
.rd-trophy-card{ display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:14px;border-radius:18px;cursor:pointer;color:#422006;background:linear-gradient(135deg,#fde68a,#f59e0b); }
.rd-trophy-card:active{ transform:scale(0.98); }
.rd-trophy-ic{ font-size:30px;line-height:1; }
.rd-trophy-body{ flex:1;min-width:0;display:flex;flex-direction:column; }
.rd-trophy-body b{ font-family:var(--font-display);font-weight:700;font-size:22px;line-height:1.1; }
.rd-trophy-body span{ font-size:11px;font-weight:800;opacity:0.85; }
.rd-trophy-card .rd-entry-go{ background:#422006;color:#fde68a; }
.rd-lobby-wait{ margin-top:6px;font-size:13px;font-weight:800;color:var(--text-secondary); }
.rd-dice-list{ max-height:46vh;overflow-y:auto;overscroll-behavior:contain;padding:2px; }
.rd-reward span.rd-chip-trophy{ background:linear-gradient(135deg,#fde68a,#f59e0b);color:#422006; }
.rd-reward span.rd-chip-exp{ background:rgba(124,58,237,0.14);color:var(--accent); }
.couple-entry.dice-entry{ background:linear-gradient(135deg,#f59e0b,#ef4444); }
.lb-tab-trophy.active{ background:rgba(245,158,11,0.16);border-color:#f59e0b;color:#d97706; }
.trophy-season{ display:flex;justify-content:space-between;gap:8px;padding:8px 12px;margin-bottom:10px;border-radius:12px;background:rgba(245,158,11,0.13);color:#b45309;font-size:12px;font-weight:800; }
.trophy-count{ flex-shrink:0;display:flex;align-items:center;gap:4px;padding:5px 10px;border-radius:999px;background:rgba(245,158,11,0.16); }
.trophy-count b{ font-family:var(--font-display);font-weight:700;font-size:15px;color:#b45309; }
.rd-chat{ margin-top:12px;border-radius:18px;overflow:hidden;background:var(--bg-card);border:1px solid var(--border-color); }
.rd-chat-head{ display:flex;align-items:center;gap:7px;padding:8px 12px;border-bottom:1px solid var(--border-color);font-family:var(--font-display);font-weight:600;font-size:12.5px;color:var(--text-secondary); }
.rd-chat-list{ max-height:136px;overflow-y:auto;overscroll-behavior:contain;padding:8px 10px;display:flex;flex-direction:column;gap:7px; }
.rd-chat-empty{ padding:6px 0;text-align:center;font-size:12px;color:var(--text-muted); }
.rd-chat-msg{ display:flex;align-items:flex-start;gap:8px; }
.rd-chat-msg.is-me{ flex-direction:row-reverse; }
.rd-chat-av{ flex-shrink:0;display:flex;margin-top:2px; }
.rd-chat-body{ min-width:0;max-width:78%; }
.rd-chat-msg.is-me .rd-chat-body{ text-align:right; }
.rd-chat-name{ display:flex;align-items:center;gap:4px;font-size:11px;font-weight:800;color:var(--text-secondary); }
.rd-chat-msg.is-me .rd-chat-name{ justify-content:flex-end; }
.rd-chat-lv{ display:inline-flex;align-items:center;gap:2px;padding:0 6px;border-radius:999px;background:rgba(124,58,237,0.13);color:var(--accent);font-size:9.5px;font-weight:800; }
.rd-chat-text{ display:inline-block;margin-top:2px;padding:6px 10px;border-radius:14px 14px 14px 4px;background:var(--bg-primary);color:var(--text-primary);font-size:13px;line-height:1.35;text-align:left;word-break:break-word; }
.rd-chat-msg.is-me .rd-chat-text{ border-radius:14px 14px 4px 14px;background:var(--accent);color:#fff; }
.rd-chat-quick{ display:flex;gap:6px;overflow-x:auto;padding:6px 10px 0; }
.rd-chat-quick button{ flex-shrink:0;padding:4px 10px;border-radius:999px;cursor:pointer;border:1px solid var(--border-color);background:var(--bg-secondary);color:var(--text-primary);font-size:12px;font-weight:800; }
.rd-chat-form{ display:flex;gap:6px;padding:8px 10px 10px; }
.rd-chat-form .input-modern{ height:38px;padding:0 14px;border-radius:999px;font-size:13px; }
.rd-chat-send{ flex-shrink:0;width:38px;height:38px;border:none;border-radius:50%;cursor:pointer;background:var(--accent);color:#fff; }


/* ---------- 17. PENAMPIL FOTO DENGAN ZOOM ---------- */
.zoom-modal{ z-index:70;background:rgba(0,0,0,0.95); }
.zoom-stage{ position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;cursor:zoom-in; }
.zoom-stage.is-zoomed{ cursor:grab; }
.zoom-stage img{ max-width:100%;max-height:100%;object-fit:contain;touch-action:none;transform-origin:center center;will-change:transform;-webkit-user-drag:none;user-select:none; }
.zoom-close,.zoom-nav{ position:absolute;z-index:3;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:rgba(20,20,26,0.8);color:#fff;border:1px solid rgba(255,255,255,0.22);font-size:16px; }
.zoom-close{ top:calc(env(safe-area-inset-top,0px) + 12px);right:12px; }
.zoom-nav{ top:50%;transform:translateY(-50%); }
.zoom-nav.prev{ left:10px; }
.zoom-nav.next{ right:10px; }
.zoom-nav.hidden,.zoom-count.hidden{ display:none; }
.zoom-bar{ position:absolute;z-index:3;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 16px);transform:translateX(-50%);display:flex;align-items:center;gap:2px;padding:5px;border-radius:999px;background:rgba(20,20,26,0.85);border:1px solid rgba(255,255,255,0.18); }
.zoom-bar button{ width:42px;height:42px;border:none;border-radius:50%;cursor:pointer;background:transparent;color:#fff;font-size:16px; }
.zoom-bar button:active{ background:rgba(255,255,255,0.18); }
#zoomLabel{ min-width:54px;text-align:center;color:#fff;font-family:var(--font-display);font-weight:600;font-size:13px; }
.zoom-count{ padding:0 12px 0 10px;color:rgba(255,255,255,0.8);font-size:12px;font-weight:800;border-left:1px solid rgba(255,255,255,0.2); }
@keyframes zoomHint{ 0%{ opacity:0; }12%,70%{ opacity:1; }100%{ opacity:0; } }
.zoom-hint{ position:absolute;z-index:3;left:50%;top:calc(env(safe-area-inset-top,0px) + 22px);transform:translateX(-50%);padding:6px 14px;border-radius:999px;white-space:nowrap;pointer-events:none;opacity:0;background:rgba(20,20,26,0.8);color:#fff;font-size:12px;font-weight:800; }
.zoom-hint.show{ animation:zoomHint 3.2s ease forwards; }
.fb-media-tile{ cursor:zoom-in; }
.fb-post-counts b{ font-weight:inherit; }

/* ---------- 18. IKLAN (tampilan ala unit iklan display) ---------- */
.gad-slot{ display:flex;flex-direction:column;align-items:center;gap:10px;margin:0 auto 16px; }
@media(min-width:768px){ .gad-slot.gad-multi{ flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:flex-start; } .gad-slot.gad-multi .gad{ flex:1 1 300px; } }
.gad{ position:relative;width:100%;max-width:728px;overflow:hidden;background:#fff;border:1px solid #dadce0;border-radius:2px;color:#202124;font-family:Roboto,Arial,Helvetica,sans-serif;font-weight:400;line-height:1.4;letter-spacing:0;contain:layout style; }
[data-theme="dark"] .gad{ background:#202124;border-color:#3c4043;color:#e8eaed; }
.gad-top{ position:absolute;top:0;left:0;right:0;z-index:3;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none; }
.gad-label{ pointer-events:auto;padding:1px 6px;background:rgba(255,255,255,0.94);color:#5f6368;font-size:10px;font-weight:700;line-height:16px;border-bottom-right-radius:2px; }
.gad-tools{ pointer-events:auto;display:flex;background:rgba(255,255,255,0.94);border-bottom-left-radius:2px; }
.gad-tool{ width:20px;height:18px;padding:0;border:none;background:transparent;color:#00aecd;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center; }
.gad-body{ display:flex;justify-content:center;align-items:center;min-height:50px; }
.gad-link{ display:block;width:100%;text-align:center;line-height:0; }
.gad-img{ display:block;width:auto;height:auto;max-width:100%;max-height:280px;margin:0 auto; }
.gad-pos-header .gad-img{ max-height:100px; }
.gad-video{ width:100%; }
.gad-video video{ display:block;width:100%;aspect-ratio:16/9;max-height:300px;background:#000;object-fit:contain; }
.gad-pos-header .gad-video video{ max-height:170px; }
.gad-cta{ display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border-top:1px solid #dadce0;color:#1a73e8;font-size:14px;font-weight:500;text-decoration:none; }
[data-theme="dark"] .gad-cta{ border-color:#3c4043;color:#8ab4f8; }
.gad-embed{ width:100%;aspect-ratio:16/9;max-height:300px; }
.gad-embed iframe{ display:block;width:100%;height:100%;border:0; }
.gad-frame{ display:block;width:100%;height:250px;border:0;background:transparent; }
.gad-pos-header .gad-frame{ height:100px; }
.gad-html{ width:100%;padding:22px 12px 12px;font-size:14px;overflow:hidden;word-break:break-word; }
.gad-html img,.gad-html video,.gad-html iframe{ max-width:100%;height:auto; }
.gad-closed{ width:100%;min-height:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:14px;background:#fafafa;color:#5f6368;font-size:13px; }
[data-theme="dark"] .gad-closed{ background:#292a2d;color:#9aa0a6; }
.gad-closed button,.gad-info button{ padding:5px 14px;border:1px solid #dadce0;border-radius:4px;background:transparent;color:#1a73e8;font-size:12px;font-weight:500;cursor:pointer; }
.gad-info{ position:absolute;top:0;left:0;width:100%;height:100%;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px;text-align:center;background:rgba(255,255,255,0.98);color:#3c4043;font-size:12px; }
.gad-info b{ font-size:13px;font-weight:700; }
.gad-info div{ display:flex;gap:8px; }
.gad.is-closed .gad-top{ display:none; }
#headerAdSlot .gad-slot{ margin-bottom:0; }
.ad-help{ display:flex;flex-direction:column;gap:3px;padding:10px 12px;margin-bottom:12px;border-radius:12px;background:var(--bg-primary);font-size:11px;color:var(--text-secondary); }
.ad-help code{ padding:1px 5px;border-radius:5px;background:var(--bg-card);color:var(--accent);font-size:10.5px;word-break:break-all; }

/* ---------- 19. PROFIL: tombol "Edit sampul" + edit profil ala Facebook ---------- */
/* Margin negatif foto profil dulu menarik SELURUH blok profil ke atas sampul, sehingga blok itu menutupi tombol
   "Edit sampul" dan ketukannya tidak pernah sampai. flow-root menghentikan itu; z-index menjaga tombol tetap di atas. */
.fbp-body{ display:flow-root; }
.fbp-avatar{ z-index:2; }
.fbp-cover-btn{ z-index:3; }
.ep-section{ padding:14px 0;border-bottom:1px solid var(--border-color); }
.ep-section:first-child{ padding-top:2px; }
.ep-section:last-child{ border-bottom:none;padding-bottom:0; }
.ep-head{ display:flex;align-items:center;justify-content:space-between;margin-bottom:10px; }
.ep-head b{ font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--text-primary); }
.ep-edit{ border:none;background:none;padding:4px 6px;cursor:pointer;color:var(--accent);font-weight:800;font-size:14px; }
.ep-avatar{ display:flex;justify-content:center;padding:10px 0 6px;cursor:pointer; }
.ep-cover,.pe-cover{ display:flex;align-items:center;justify-content:center;border-radius:16px;cursor:pointer;background:linear-gradient(135deg,#8b5cf6 0%,#ec4899 55%,#f59e0b 100%);background-size:cover;background-position:center; }
.ep-cover{ height:130px; }
.pe-cover{ width:100%;aspect-ratio:16/7;cursor:default; }
.ep-cover span,.pe-cover span{ display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,0.93);color:#0f172a;font-weight:800;font-size:13px; }
.pe{ display:flex;flex-direction:column;gap:10px; }
.pe-avatar{ width:180px;height:180px;margin:6px auto;border-radius:50%;overflow:hidden;background:var(--bg-primary);box-shadow:0 0 0 4px var(--bg-card),0 0 0 6px var(--border-color); }
.pe-avatar img,.pe-avatar span{ width:100%;height:100%;display:flex;align-items:center;justify-content:center;object-fit:cover; }
.pe-avatar span{ color:#fff;font-family:var(--font-display);font-weight:700;font-size:72px; }
.pe-hint{ text-align:center;font-size:12px;color:var(--text-muted);word-break:break-word; }
.pe-back{ border:none;background:none;padding:6px;cursor:pointer;color:var(--text-muted);font-weight:800;font-size:12.5px; }

/* ---------- 20. BUAT STORY ---------- */
.sc{ display:flex;flex-direction:column;gap:10px; }
.sc-head{ display:flex;align-items:center;gap:10px; }
.sc-who{ min-width:0;display:flex;flex-direction:column; }
.sc-who b{ font-weight:800;font-size:15px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.sc-who span{ display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:var(--text-muted); }
.sc-text{ display:block;width:100%;min-height:76px;padding:2px 0;border:none;outline:none;resize:none;background:transparent;color:var(--text-primary);font-size:17px;font-weight:700;line-height:1.45; }
.sc-text::placeholder{ color:var(--text-muted); }
.sc-count{ margin-top:-6px;text-align:right;font-size:11px;color:var(--text-muted); }
.sc-drop{ width:100%;display:flex;flex-direction:column;align-items:center;gap:4px;padding:22px 12px;border-radius:16px;cursor:pointer;border:2px dashed var(--border-color);background:var(--bg-primary); }
.sc-drop:active{ border-color:var(--accent); }
.sc-drop-ic{ width:48px;height:48px;margin-bottom:4px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;background:rgba(16,185,129,0.15);color:#059669; }
.sc-drop b{ font-family:var(--font-display);font-weight:700;font-size:15px;color:var(--text-primary); }
.sc-drop span:last-child{ font-size:11.5px;color:var(--text-muted); }
.sc-grid{ display:grid;grid-template-columns:repeat(3,1fr);gap:6px; }
@media(min-width:480px){ .sc-grid{ grid-template-columns:repeat(4,1fr); } }
.sc-thumb{ position:relative;aspect-ratio:1/1;padding:0;border-radius:12px;overflow:hidden;background:var(--bg-primary);border:1px solid var(--border-color); }
.sc-thumb img{ position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover; }
.sc-thumb-name{ position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:6px;text-align:center;font-size:10px;word-break:break-all;color:var(--text-muted); }
.sc-thumb-no{ position:absolute;left:5px;bottom:5px;min-width:20px;height:20px;padding:0 6px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.8);color:#fff;font-size:11px;font-weight:800; }
.sc-thumb-x{ position:absolute;top:4px;right:4px;width:28px;height:28px;border:none;border-radius:50%;cursor:pointer;background:rgba(15,23,42,0.8);color:#fff;font-size:12px; }
.sc-thumb-add{ display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px dashed var(--border-color);color:var(--text-muted);font-size:20px; }
.sc-media-info{ margin-top:6px;font-size:11.5px;color:var(--text-muted); }
.sc-tools{ display:flex;align-items:center;gap:8px;padding:8px 8px 8px 14px;border:1px solid var(--border-color);border-radius:16px; }
.sc-tools > span{ flex:1;min-width:0;font-weight:800;font-size:13px;color:var(--text-primary); }
.sc-tool{ display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border:none;border-radius:999px;cursor:pointer;background:rgba(16,185,129,0.14);color:#059669;font-size:13px; }
.sc-tool b{ font-weight:800; }
.sc-tool:active{ transform:scale(0.95); }
.sc-tool-price{ background:rgba(245,158,11,0.16);color:#b45309; }
.sc-tool-price.active{ background:#f59e0b;color:#fff; }
.sc-price{ padding:10px 12px;border-radius:14px;background:var(--bg-primary); }
.sc-price label{ display:block;margin-bottom:6px;font-size:12px;font-weight:800;color:var(--text-secondary); }
.sc-price-hint{ margin-top:6px;font-size:11px;color:var(--text-muted); }
.sc-post{ height:46px;font-size:15px; }

/* ---------- 21. KOMENTAR ALA FACEBOOK ---------- */
:root{ --cmt-bubble:#e4e8ef; }
[data-theme="dark"]{ --cmt-bubble:#263247; }
.cmt{ display:flex;align-items:flex-start;gap:8px;margin-bottom:10px; }
.cmt-av{ flex-shrink:0;display:flex;margin-top:2px; }
.cmt-main{ flex:1;min-width:0; }
.cmt-bubble{ display:inline-block;max-width:100%;padding:8px 12px;border-radius:18px;background:var(--cmt-bubble); }
.cmt-name{ display:flex;align-items:center;flex-wrap:wrap;gap:4px;font-weight:800;font-size:13px;line-height:1.3;color:var(--text-primary); }
.cmt-name > span:first-child{ cursor:pointer; }
.cmt-text{ font-size:14px;line-height:1.4;color:var(--text-primary);word-break:break-word; }
.cmt-badge{ padding:0 6px;border-radius:999px;font-size:9.5px;font-weight:800;line-height:16px; }
.cmt-badge-admin{ background:rgba(239,68,68,0.16);color:#dc2626; }
.cmt-badge-vip{ background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f172a; }
.cmt-custom .cmt-name{ margin:0 0 2px 4px; }
.cmt-custom .bubble-custom{ margin-top:0; }
.cmt-media{ max-width:240px;margin-top:6px;border-radius:14px;overflow:hidden;border:1px solid var(--border-color); }
.cmt-media img{ display:block;width:100%;max-height:260px;object-fit:cover;cursor:zoom-in; }
.cmt-meta{ display:flex;align-items:center;flex-wrap:wrap;gap:4px 12px;margin:3px 0 0 12px;font-size:12px;color:var(--text-muted); }
.cmt-meta button{ border:none;background:none;padding:2px 0;cursor:pointer;font-weight:800;font-size:12px;color:var(--text-secondary); }
.cmt-meta .cmt-del{ color:var(--danger); }
.cmt-more{ display:inline-flex;align-items:center;gap:7px;margin:6px 0 0 12px;padding:2px 0;border:none;background:none;cursor:pointer;font-weight:800;font-size:13px;color:var(--text-secondary); }
.cmt-replies{ margin-top:8px; }
.cmt-reply{ margin-bottom:8px; }
.cmt-replybox{ margin-top:8px; }
.cmt-composer{ display:flex;align-items:flex-start;gap:8px;margin-bottom:14px; }
.cmt-composer-box{ flex:1;min-width:0;padding:8px 8px 4px 14px;border-radius:20px;background:var(--cmt-bubble); }
.cmt-composer-box textarea{ display:block;width:100%;max-height:160px;padding:2px 0;border:none;outline:none;resize:none;background:transparent;color:var(--text-primary);font-size:14px;font-weight:700;line-height:1.4; }
.cmt-composer-box textarea::placeholder{ color:var(--text-muted); }
.cmt-composer-bar{ display:flex;align-items:center;gap:6px;margin-top:2px; }
.cmt-composer-bar .comment-counter{ flex:1; }
.cmt-icon,.cmt-send{ width:34px;height:34px;border:none;border-radius:50%;background:transparent;cursor:pointer;font-size:15px;color:var(--text-secondary); }
.cmt-send{ color:var(--accent); }
.cmt-icon:active,.cmt-send:active{ background:rgba(124,58,237,0.14); }
.cmt-cancel{ border:none;background:none;padding:4px 6px;cursor:pointer;font-weight:800;font-size:12px;color:var(--text-muted); }

/* ---------- 22. ROOM: tab Nobar / Game / Pasangan ---------- */
.room-tabs{ display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px; }
.room-tab{ min-width:0;display:flex;flex-direction:column;align-items:center;gap:1px;padding:10px 4px 9px;border-radius:18px;cursor:pointer;border:1.5px solid var(--border-color);background:var(--bg-card); }
.room-tab:active{ transform:scale(0.97); }
.room-tab-ic{ font-size:24px;line-height:1.15; }
.room-tab b{ font-family:var(--font-display);font-weight:700;font-size:14px;color:var(--text-primary); }
.room-tab span:last-child{ max-width:100%;font-size:10.5px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
.room-tab.active{ border-color:transparent;background:linear-gradient(135deg,#8b5cf6,#7c3aed); }
.room-tab[data-room="game"].active{ background:linear-gradient(135deg,#f59e0b,#ef4444); }
.room-tab[data-room="couple"].active{ background:linear-gradient(135deg,#ec4899,#8b5cf6); }
.room-tab.active b,.room-tab.active span:last-child{ color:#fff; }
.room-head{ display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px; }
.room-title{ font-size:1.4rem;font-weight:700; }
.room-sub{ font-size:12px;color:var(--text-muted); }

/* ---------- 23. RANDOM DICE: solo + trophy berkurang ---------- */
.rd-solo-card{ width:100%;display:flex;align-items:center;gap:12px;padding:14px;margin-bottom:14px;border-radius:18px;cursor:pointer;text-align:left;border:1.5px solid var(--border-color);background:var(--bg-card); }
.rd-solo-card:active{ transform:scale(0.98);border-color:var(--accent); }
.rd-solo-body{ flex:1;min-width:0;display:flex;flex-direction:column; }
.rd-solo-body b{ font-family:var(--font-display);font-weight:700;font-size:16px;color:var(--text-primary); }
.rd-solo-body span{ font-size:11.5px;line-height:1.35;color:var(--text-muted); }
.rd-solo-card em{ flex-shrink:0;padding:4px 11px;border-radius:999px;background:rgba(124,58,237,0.12);color:var(--accent);font-style:normal;font-size:12px;font-weight:800; }
.rd-solo-bar{ display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;margin-bottom:8px;border-radius:14px;background:var(--bg-card);border:1px solid var(--border-color);font-size:12.5px;color:var(--text-secondary); }
.rd-solo-bar b{ color:var(--text-primary); }
.rd-reward span.rd-chip-lost{ background:rgba(239,68,68,0.14);color:#dc2626; }

/* ---------- 24. KARTU STREAK: unduh JPG ---------- */
.card-dl{ display:flex;flex-direction:column;gap:12px; }
.card-dl-img{ display:block;width:100%;max-width:300px;margin:0 auto;border-radius:18px;-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto; }
.card-dl-hint{ text-align:center;font-size:11.5px;color:var(--text-muted); }
/* ==== APP POLISH END ==== */
    </style>
<!-- TAILWIND:START -->
<style id="tailwindCss">*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\!container{width:100%!important}.container{width:100%}@media (min-width:640px){.\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width:768px){.\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width:1024px){.\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width:1280px){.\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width:1536px){.\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{inset:0}.bottom-0{bottom:0}.left-3{left:.75rem}.left-4{left:1rem}.right-1{right:.25rem}.right-3{right:.75rem}.top-0{top:0}.top-1{top:.25rem}.top-1\/2{top:50%}.z-40{z-index:40}.z-50{z-index:50}.col-span-2{grid-column:span 2/span 2}.col-span-3{grid-column:span 3/span 3}.mx-auto{margin-left:auto;margin-right:auto}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-0\.5{margin-right:.125rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mt-0\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-8{margin-top:2rem}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-2,.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.line-clamp-3{-webkit-line-clamp:3}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.flow-root{display:flow-root}.\!grid{display:grid!important}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-20{height:5rem}.h-24{height:6rem}.h-40{height:10rem}.h-48{height:12rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.max-h-48{max-height:12rem}.w-1\/2{width:50%}.w-1\/3{width:33.333333%}.w-10{width:2.5rem}.w-12{width:3rem}.w-16{width:4rem}.w-20{width:5rem}.w-24{width:6rem}.w-32{width:8rem}.w-48{width:12rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-full{width:100%}.min-w-0{min-width:0}.max-w-2xl{max-width:42rem}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.grow{flex-grow:1}.-translate-y-1\/2{--tw-translate-y:-50%}.-translate-y-1\/2,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-2\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem*var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem*var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem*var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t-3xl{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}.border{border-width:1px}.border-2{border-width:2px}.bg-black\/60{background-color:rgba(0,0,0,.6)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-2{padding:.5rem}.p-2\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-0\.5{padding-left:.125rem;padding-right:.125rem}.px-1\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.pb-28{padding-bottom:7rem}.pb-4{padding-bottom:1rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\[10px\]{font-size:10px}.text-\[11px\]{font-size:11px}.text-\[8px\]{font-size:8px}.text-\[9px\]{font-size:9px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.tracking-widest{letter-spacing:.1em}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.text-white\/80{color:hsla(0,0%,100%,.8)}.text-yellow-400{--tw-text-opacity:1;color:rgb(250 204 21/var(--tw-text-opacity,1))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\:bg-\[var\(--bg-card-hover\)\]:hover{background-color:var(--bg-card-hover)}.hover\:underline:hover{text-decoration-line:underline}@media (min-width:640px){.sm\:max-w-2xl{max-width:42rem}.sm\:max-w-5xl{max-width:64rem}.sm\:max-w-lg{max-width:32rem}.sm\:max-w-md{max-width:28rem}.sm\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\:flex-row{flex-direction:row}.sm\:items-center{align-items:center}.sm\:rounded-3xl{border-radius:1.5rem}}@media (min-width:768px){.md\:col-span-1{grid-column:span 1/span 1}.md\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1024px){.lg\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}</style>
<!-- TAILWIND:END -->
</head>
<body oncontextmenu="return !!(event.target && event.target.closest && event.target.closest('[data-allow-save]'));">

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
            <div id="coinDisplay" class="coin-display hidden" role="button" tabindex="0" onclick="openTopupModal()" title="Top up koin"><i class="fa-solid fa-coins"></i><span id="coinAmount">0</span><i class="fa-solid fa-plus coin-plus"></i></div>
            <button onclick="toggleSearch()" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-magnifying-glass text-sm"></i></button>
            <button onclick="handleAuthButton()" id="authBtn" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-user text-sm"></i></button>
            <button onclick="toggleTheme()" id="themeBtn" class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: var(--bg-card); color: var(--text-secondary);"><i class="fa-solid fa-sun text-sm" id="themeIcon"></i></button>
        </div>
    </div>
    <div id="customTabsContainer" class="max-w-6xl mx-auto mt-2 hidden"></div>
    <div id="headerAdSlot" class="max-w-6xl mx-auto mt-2 hidden"></div>
</header>

<div id="searchBar" class="hidden px-4 py-3 animate-fade-in" style="background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
    <div id="searchModeSeg" class="search-seg max-w-2xl mx-auto"><button type="button" class="search-seg-btn active" data-mode="series" onclick="setSearchMode('series')"><i class="fa-solid fa-film"></i>Series</button><button type="button" class="search-seg-btn" data-mode="user" onclick="setSearchMode('user')"><i class="fa-solid fa-user-group"></i>User</button></div>
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
        <button onclick="navigate('party')" data-nav="party" class="nav-btn"><i class="fa-solid fa-door-open"></i><span>Room</span></button>
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

<div id="imagePreviewModal" class="fixed inset-0 hidden zoom-modal">
    <div id="zoomStage" class="zoom-stage"><img id="previewImage" src="" oncontextmenu="return false;" draggable="false" alt="Preview"></div>
    <button type="button" class="zoom-close" onclick="closeImagePreview()" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button>
    <button type="button" class="zoom-nav prev hidden" id="zoomPrev" onclick="zoomStep(-1)" aria-label="Foto sebelumnya"><i class="fa-solid fa-chevron-left"></i></button>
    <button type="button" class="zoom-nav next hidden" id="zoomNext" onclick="zoomStep(1)" aria-label="Foto berikutnya"><i class="fa-solid fa-chevron-right"></i></button>
    <p class="zoom-hint" id="zoomHint">Cubit atau ketuk 2x untuk memperbesar</p>
    <div class="zoom-bar"><button type="button" onclick="zoomBy(1 / 1.5)" aria-label="Perkecil"><i class="fa-solid fa-magnifying-glass-minus"></i></button><span id="zoomLabel">100%</span><button type="button" onclick="zoomBy(1.5)" aria-label="Perbesar"><i class="fa-solid fa-magnifying-glass-plus"></i></button><button type="button" onclick="zoomReset(true)" aria-label="Ukuran awal"><i class="fa-solid fa-compress"></i></button><span id="zoomCount" class="zoom-count hidden"></span></div>
</div>

<div id="leaderboardModal" class="fixed inset-0 z-50 hidden modal-backdrop flex items-end sm:items-center justify-center">
    <div class="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-6 animate-fade-up" style="background: var(--bg-card); border: 1px solid var(--border-color); max-height: 90vh; overflow-y: auto;">
        <div class="flex justify-between items-center mb-4"><div><h2 class="text-xl font-bold font-display" style="color: var(--text-primary);"><i class="fa-solid fa-trophy" style="color: #fbbf24;"></i> Leaderboard</h2></div><button onclick="closeLeaderboardModal()" class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: var(--bg-secondary); color: var(--text-muted);"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="flex gap-2 mb-4 overflow-x-auto scrollbar-hide" id="lbTabs">
            <button onclick="changeLbCategory('xp')" class="lb-tab active" data-cat="xp"><i class="fa-solid fa-star mr-1"></i>XP</button>
            <button onclick="changeLbCategory('watch')" class="lb-tab" data-cat="watch"><i class="fa-solid fa-eye mr-1"></i>Nonton</button>
            <button onclick="changeLbCategory('gallery')" class="lb-tab" data-cat="gallery"><i class="fa-solid fa-images mr-1"></i>Story</button>
            <button onclick="changeLbCategory('streak')" class="lb-tab lb-tab-streak" data-cat="streak"><i class="fa-solid fa-fire mr-1"></i>Streak</button>
            <button onclick="changeLbCategory('trophy')" class="lb-tab lb-tab-trophy" data-cat="trophy"><i class="fa-solid fa-trophy mr-1"></i>Trophy</button>
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
    exitPlayerFullscreen();
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

document.addEventListener('contextmenu', function(e) { if (e.target && e.target.closest && e.target.closest('[data-allow-save]')) return; e.preventDefault(); return false; }, true);
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
    if (options.method && options.method !== 'GET') state.homeCache = null;      // ada perubahan data → cache beranda dibuang
    var headers = { 'Content-Type': 'application/json' };
    if (options.headers) for (var k in options.headers) headers[k] = options.headers[k];
    if (state.token) headers['Authorization'] = 'Bearer ' + state.token;
    try { var response = await fetch(API_BASE + endpoint, { method: options.method || 'GET', headers: headers, body: options.body }); return await response.json(); }
    catch (e) { console.error('API error:', e); return { success: false, error: 'Network error' }; }
}


function updateCommentCounter(inputId, counterId) {
    var input = document.getElementById(inputId); var counter = document.getElementById(counterId);
    if (!input || !counter) return; var len = input.value.length; var max = COMMENT_MAX_LENGTH;
    counter.textContent = len + ' / ' + max; counter.classList.remove('near-limit', 'at-limit');
    if (len >= max) counter.classList.add('at-limit'); else if (len >= max * 0.85) counter.classList.add('near-limit');
}

function handleGalleryFileSelect(input) {
    var picked = Array.from(input.files || []); try { input.value = ''; } catch (e) {}      // supaya foto yang sama bisa dipilih lagi
    var list = state.pendingGalleryFiles || (state.pendingGalleryFiles = []); var skipped = 0;
    picked.forEach(function (f) {
        var okType = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].indexOf(f.type) !== -1;
        var tooBig = f.type === 'image/gif' ? f.size > 8 * 1024 * 1024 : f.size > 30 * 1024 * 1024;      // GIF tidak diperkecil
        if (!okType || tooBig || list.length >= 10) { skipped++; return; }
        list.push(f);
    });
    if (skipped) showToast(skipped + ' file dilewati (maks 10 foto · JPG, PNG, WEBP, GIF)', 'info');
    scRenderMedia();
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
    state.zoomList = isLocked ? [] : mediaUrls.slice();
    if (isLocked) {
        return '<div class="story-frame gallery-locked-wrap"><img src="' + mediaUrls[0] + '" class="locked-img" oncontextmenu="return false;" draggable="false" alt="Terkunci">' +
            '<div class="gallery-lock-overlay"><div class="gallery-lock-icon"><i class="fa-solid fa-lock"></i></div>' +
            '<div class="gallery-lock-price"><i class="fa-solid fa-coins mr-1"></i>' + formatKoin(price) + ' koin</div>' +
            '<div class="gallery-lock-label">Klik tombol di bawah untuk beli' + (mediaUrls.length > 1 ? ' · ' + mediaUrls.length + ' foto' : '') + '</div></div></div>';
    }
    if (mediaUrls.length === 1) {
        return '<div class="story-frame"><img src="' + mediaUrls[0] + '" onclick="openImagePreview(\'' + mediaUrls[0] + '\')" oncontextmenu="return false;" draggable="false" alt="Story">' +
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
    var gateSp = locationToStartParam(); link.href = 'https://t.me/' + bot + (gateSp ? '?startapp=' + encodeURIComponent(gateSp) : ''); document.getElementById('siteFooter').style.display = 'none';
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

// Ambil data user terbaru (avatar + border) tanpa mengganggu UI
function refreshMeSilently() {
    if (!state.token) return;
    apiCall('/api/auth/me').then(function (me) {
        if (me && me.success && me.data) { state.user = me.data; try { localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } catch (e) {} updateAuthUI(); }
    }).catch(function () {});
}
function updateAuthUI() {
    var btn = document.getElementById('authBtn'); var coinDisplay = document.getElementById('coinDisplay');
    if (state.user) { btn.innerHTML = renderMLBBAvatar({ username: state.user.username, avatarUrl: state.user.avatarUrl, borderUrl: state.user.borderUrl, borderScale: state.user.borderScale || 1.2, size: 32 }); btn.classList.add('header-avatar-btn'); btn.setAttribute('aria-label', 'Profil'); coinDisplay.classList.remove('hidden'); document.getElementById('coinAmount').textContent = formatKoin(state.user.koin || 0); }
    else { btn.innerHTML = '<i class="fa-solid fa-user text-sm"></i>'; btn.classList.remove('header-avatar-btn'); coinDisplay.classList.add('hidden'); }
}

function initTheme() { var saved = localStorage.getItem('fesstale_theme'); state.theme = saved === 'dark' ? 'dark' : 'light'; applyTheme(state.theme); }
function applyTheme(theme) { state.theme = theme; document.documentElement.setAttribute('data-theme', theme); var icon = document.getElementById('themeIcon'); if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-moon text-sm' : 'fa-solid fa-sun text-sm'; var metaTheme = document.querySelector('meta[name="theme-color"]'); if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff'); syncTelegramChrome(theme); }
// Sinkronisasi warna header & background Telegram dengan tema aplikasi
function syncTelegramChrome(theme) {
    try {
        var tg = window.Telegram && window.Telegram.WebApp;
        if (!tg) return;
        if (tg.setHeaderColor) tg.setHeaderColor(theme === 'dark' ? '#0a0e17' : '#f1f5f9');
        if (tg.setBackgroundColor) tg.setBackgroundColor(theme === 'dark' ? '#0a0e17' : '#f1f5f9');
        // swipe-turun-untuk-tutup milik Telegram berebut gestur dengan scroll halaman
        if (tg.isVersionAtLeast && tg.isVersionAtLeast('7.7') && tg.disableVerticalSwipes) tg.disableVerticalSwipes();
    } catch (e) {}
}
// Haptic feedback ringan (seperti app native) — Telegram HapticFeedback dgn fallback vibrate
function haptic(style) {
    try {
        var tg = window.Telegram && window.Telegram.WebApp;
        if (tg && tg.HapticFeedback) { tg.HapticFeedback.impactOccurred(style || 'light'); return; }
        if (navigator.vibrate) navigator.vibrate(style === 'heavy' || style === 'rigid' ? 20 : (style === 'medium' ? 15 : 8));
    } catch (e) {}
}
document.addEventListener('click', function (e) {
    try {
        var t = e.target && e.target.closest ? e.target.closest('.btn-primary,.btn-secondary,.nav-btn,.movie-card,.episode-card,.masonry-item,.gift-card,.reaction-btn') : null;
        if (t) haptic('light');
    } catch (err) {}
}, true);
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
    destroyActivePlayer(); stopCouplePoll(); rdStopAll(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; } currentParty = null; partyVideoEl = null; partyHls = null;
    state.currentPage = page; updateNavUI(page); document.getElementById('app').innerHTML = renderSkeleton(); resetDefaultMeta();
    if (pushState !== false && window.history && window.history.pushState) {
        var url = '/';
        if (page.indexOf('watch/') === 0) url = '/view?id=' + page.split('/')[1];
        else if (page === 'home') url = '/'; else if (page === 'genre') url = '/genre'; else if (page === 'gallery') url = '/story'; else if (page === 'request') url = '/request'; else if (page === 'party') url = '/party'; else if (page === 'couple') url = '/couple'; else if (page === 'couple-game') url = '/couple/game'; else if (page === 'dice') url = '/dice';
        else if (page.indexOf('party-room/') === 0) url = '/party/' + page.split('/')[1];
        else if (page === 'profile') url = '/profile'; else if (page === 'missions') url = '/missions'; else if (page === 'referral') url = '/referral';
        else if (page.indexOf('gallery-detail/') === 0) url = '/story?id=' + page.split('/')[1];
        else if (page.indexOf('user/') === 0) url = '/@' + page.split('/')[1];
        else url = '/' + page;
        try { window.history.pushState({ page: page }, '', url); } catch (e) {}
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') renderHome(); else if (page === 'genre') renderGenrePage(); else if (page === 'gallery') renderGalleryPage(); else if (page === 'request') renderRequestPage(); else if (page === 'profile') renderProfile(); else if (page === 'admin') renderAdmin(); else if (page === 'missions') renderMissions(); else if (page === 'referral') renderReferralPage(); else if (page === 'party') renderPartyPage(); else if (page === 'couple') renderCouplePage(); else if (page === 'couple-game') renderCoupleGamePage(); else if (page === 'dice') renderDicePage(); else if (page.indexOf('party-room/') === 0) renderPartyRoomPage(page.split('/')[1]); else if (page.indexOf('gallery-detail/') === 0) renderGalleryDetail(page.split('/')[1]); else if (page.indexOf('custom/') === 0) renderCustomTabPage(page.split('/')[1]); else if (page.indexOf('watch/') === 0) renderWatchPage(page.split('/')[1]); else if (page.indexOf('user/') === 0) { state.viewingUsername = page.split('/')[1]; renderUserProfile(page.split('/')[1]); }
}

function updateNavUI(page) {
    document.querySelectorAll('.nav-btn').forEach(function(btn) { var nav = btn.dataset.nav; btn.classList.remove('active'); if (nav === page || (page.indexOf('watch/') === 0 && nav === 'home') || (page.indexOf('user/') === 0 && nav === 'profile') || (page.indexOf('custom/') === 0 && nav === 'home') || (page.indexOf('gallery-detail/') === 0 && nav === 'gallery') || (page.indexOf('party') === 0 && nav === 'party') || (page.indexOf('couple') === 0 && nav === 'party') || (page === 'dice' && nav === 'party')) btn.classList.add('active'); });
}

function renderSkeleton() { return '<div class="space-y-4"><div class="skeleton h-8 w-48"></div><div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div><div class="skeleton" style="aspect-ratio: 2/3;"></div></div></div>'; }

function renderMLBBAvatar(opts) {
    var size = opts.size || 44; var scale = opts.borderScale || 1.2;
    var hasBorder = opts.borderUrl && opts.borderUrl.trim() !== '';
    var borderW = size * scale; var borderOffset = (borderW - size) / 2;
    var inner = opts.avatarUrl ? '<img src="' + opts.avatarUrl + '" alt="" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false">' : escapeHtml((opts.username || '?').charAt(0).toUpperCase());
    var innerStyle = 'width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.42) + 'px;background:' + getAvatarColor(opts.username) + ';';
    var borderHtml = hasBorder ? '<div class="mlbb-avatar-border" style="width:' + borderW + 'px;height:' + borderW + 'px;left:' + (-borderOffset) + 'px;top:' + (-borderOffset) + 'px;background-image:url(' + opts.borderUrl + ');"></div>' : '';
    var clickAttr = opts.onClick ? 'onclick="' + opts.onClick + '"' : '';
    return '<div class="mlbb-avatar-wrap cursor-pointer" style="width:' + size + 'px;height:' + size + 'px;" ' + clickAttr + '><div class="mlbb-avatar-inner" style="' + innerStyle + '">' + inner + '</div>' + borderHtml + '</div>';
}

function renderLevelPhoto(levelUrl, size) { if (!levelUrl) return ''; size = size || 32; return '<img src="' + levelUrl + '" class="level-photo" style="width:' + size + 'px;height:' + size + 'px;" alt="Lv" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false">'; }

function renderCommentBubble(c) {
    var contentHtml = formatCommentTextHtml(c.content);
    var mediaHtml = c.mediaUrl ? '<div class="comment-media-preview"><img src="' + c.mediaUrl + '" alt="media" loading="lazy" decoding="async" onclick="openImagePreview(\'' + c.mediaUrl + '\')" oncontextmenu="return false;" draggable="false"></div>' : '';
    if (c.bubbleCss && c.bubbleHtml) { var filled = c.bubbleHtml.indexOf('{{content}}') !== -1 ? c.bubbleHtml.split('{{content}}').join(contentHtml) : contentHtml; return '<style scoped>' + (c.bubbleCss || '') + '</style><div class="bubble-custom">' + filled + mediaHtml + '</div>'; }
    return '<div class="bubble-default"><div class="text-sm" style="word-break: break-word; color: var(--text-secondary);">' + contentHtml + '</div>' + mediaHtml + '</div>';
}

function renderContentCard(item) {
    var poster = item.posterUrl || null; var title = item.title || 'Untitled'; var rating = item.rating || 0; var type = item.type || 'free'; var duration = item.duration || 0; var price = item.price || 0;
    var latestEp = item.latestEpisodeNumber || item.latest_episode_number || 0; var totalEp = item.totalEpisodes || item.total_episodes || 0;
    var typeLabel = type === 'premium' ? 'VIP' : (type === 'coin' ? 'COIN' : 'FREE');
    var typeColor = type === 'premium' ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : (type === 'coin' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'linear-gradient(135deg, #10b981, #059669)');
    var posterHtml = poster ? '<img src="' + poster + '" alt="' + escapeHtml(title) + '" class="movie-poster" loading="lazy" decoding="async" style="border-radius: 12px;" oncontextmenu="return false;" draggable="false">' : '<div class="movie-poster flex items-center justify-center" style="background: var(--bg-secondary); border-radius: 12px;"><i class="fa-solid fa-video text-3xl" style="color: var(--text-muted);"></i></div>';
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
        var imgHtml = poster ? '<img src="' + poster + '" alt="' + title + '" decoding="async" oncontextmenu="return false;" draggable="false">' : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#8b5cf6,#7c3aed);display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-film" style="font-size:60px;color:rgba(255,255,255,0.5);"></i></div>';
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
    var homePageNo = state.pagination.home; var results = cachedHomeData(homePageNo) || await loadHomeData(homePageNo);
    if (state.currentPage !== 'home') return;      // data datang setelah user pindah halaman: jangan menimpa halaman lain
    var notes = results[0], featuredRes = results[1], trending = results[2], latest = results[3], popular = results[4];
    var recentWatch = state.user ? results[5] : null; var recommendations = state.user ? results[6] : null;
    if (notes.success) {
        state.notesLoaded = true; state.homeNotes = notes.data; state.playerAds = notes.data.playerAds || []; state.botUsername = notes.data.telegramBotUsername || null; renderCustomTabs();
        var headerAdSlot = document.getElementById('headerAdSlot');
        if (state.homeNotes.adSlots && state.homeNotes.adSlots.header && state.homeNotes.adSlots.header.enabled && !isPremiumUser()) { headerAdSlot.innerHTML = renderAdSlots(state.homeNotes.adSlots.header, 'header'); headerAdSlot.classList.remove('hidden'); } else headerAdSlot.classList.add('hidden');
        if (state.homeNotes.promoBanners && state.homeNotes.promoBanners.length > 0 && !isPremiumUser()) { var validBanners = state.homeNotes.promoBanners.filter(function(b) { return b.enabled && b.image; }); if (validBanners.length > 0) { var randomBanner = validBanners[Math.floor(Math.random() * validBanners.length)]; showPromoBanner(randomBanner); } }
    }
    state.featuredContent = (featuredRes.success && featuredRes.data.featured) ? featuredRes.data.featured : [];
    state.carouselIndex = 0;
    var recentWatchHtml = '';
    if (recentWatch && recentWatch.success && recentWatch.data.recent.length > 0) {
        recentWatchHtml = '<div class="mb-6 animate-fade-up"><h2 class="font-bold mb-3 flex items-center gap-2" style="color: var(--text-primary);"><i class="fa-solid fa-clock-rotate-left" style="color: #06b6d4;"></i>Terakhir Ditonton</h2><div class="recent-watch-scroll scrollbar-hide">' +
            recentWatch.data.recent.map(function(item) { var posterHtml = item.posterUrl ? '<img src="' + item.posterUrl + '" alt="' + escapeHtml(item.title) + '" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false">' : '<div style="width: 120px; height: 180px; background: var(--bg-card); border-radius: 10px;"></div>'; var lastEp = item.lastEpisodeNumber || item.latestEpisodeNumber || 0; var epOverlay = lastEp ? '<div class="card-corner-badge corner-bottom-right"><i class="fa-solid fa-tv"></i>Eps ' + lastEp + '</div>' : ''; return '<div class="recent-watch-card" onclick="navigate(\'watch/' + item.contentId + '\')"><div class="relative" style="border-radius:10px;overflow:hidden;">' + posterHtml + '<div class="thumb-watermark thumb-watermark-sm">FESSTALE</div>' + epOverlay + '</div><p class="text-[11px] font-medium mt-1 line-clamp-2" style="color: var(--text-primary);">' + escapeHtml(item.title) + '</p></div>'; }).join('') + '</div></div>';
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
    setupCarouselTouch(); startCarousel(); initAdMedia();
}

function setupCarouselTouch() {
    var wrap = document.getElementById('carouselWrap'); if (!wrap) return;
    var startX = 0, isDown = false;
    wrap.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; isDown = true; stopCarousel(); }, {passive: true});
    wrap.addEventListener('touchend', function(e) { if (!isDown) return; isDown = false; var endX = e.changedTouches[0].clientX; var diff = startX - endX; if (Math.abs(diff) > 40) { if (diff > 0) nextCarouselSlide(); else prevCarouselSlide(); } startCarousel(); }, {passive: true});
    wrap.addEventListener('mouseenter', stopCarousel); wrap.addEventListener('mouseleave', startCarousel);
    try { if ('IntersectionObserver' in window) { if (window.__carouselIO) window.__carouselIO.disconnect(); window.__carouselIO = new IntersectionObserver(function (entries) { if (entries[0] && entries[0].isIntersecting) startCarousel(); else stopCarousel(); }, { threshold: 0.15 }); window.__carouselIO.observe(wrap); } } catch (e) {}
}

function isPremiumUser() { return state.user && (state.user.isVip || state.user.role === 'admin'); }
function homePage(page) { state.pagination.home = parseInt(page) || 1; try { window.history.pushState({}, '', '/page?p=' + state.pagination.home); } catch(e) {} renderHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

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
        '<div class="card p-5 mb-5"><div class="flex items-start gap-4">' + posterHtml + '<div class="flex-1 min-w-0"><h1 class="text-xl font-bold font-display mb-1">' + escapeHtml(series.title) + '</h1><div class="flex items-center gap-3 text-xs mb-2 flex-wrap" style="color: var(--text-secondary);">' + (series.year ? '<span>' + series.year + '</span>' : '') + (series.duration ? '<span>' + formatDuration(series.duration) + '</span>' : '') + (series.rating ? '<span><i class="fa-solid fa-star" style="color: #fbbf24;"></i> ' + Number(series.rating).toFixed(1) + '</span>' : '') + epInfo + '<span class="badge" style="background: ' + typeColor + '; color: white;">' + typeLabel + '</span></div>' + genresHtml + '<button type="button" onclick="shareSeries()" class="share-chip"><i class="fa-solid fa-share-nodes"></i>Bagikan</button></div></div>' + (series.description ? '<p class="text-sm leading-relaxed mt-4" style="color: var(--text-secondary);">' + escapeHtml(series.description) + '</p>' : '') + '</div>' + episodesHtml + playerSectionHtml +
        '<div class="mb-6"><h3 class="font-bold mb-3">Reaksi</h3><div id="reactionsSection" class="flex gap-2 overflow-x-auto scrollbar-hide pb-2"></div></div>' +
        '<div class="mb-6"><div class="flex items-center justify-between mb-3"><h3 class="font-bold">Komentar <span id="commentCount" class="text-sm font-normal" style="color: var(--text-muted);"></span></h3></div>' + renderCommentComposer(false, series.id) + '<div id="commentsList"></div><div id="commentsPagination"></div></div>' +
        '<div class="mb-6" id="drakorRecsSection"></div>';
    loadComments(series.id, 1); loadReactions(series.id); loadDrakorRecommendations(series.id);
    if (state.user && episodes.length > 0 && !isSeriesLocked) {
        var lastEpKey = LAST_EP_STORAGE_KEY + series.id; var lastEpId = parseInt(localStorage.getItem(lastEpKey) || '0');
        var resumeEp = episodes.find(function(e) { return e.id === lastEpId; }) || episodes[0];
        setTimeout(function() { loadEpisode(resumeEp.id); }, 200);
    }
}

function renderEpisodeCard(ep) {
    var thumb = ep.thumbnailUrl ? '<img src="' + ep.thumbnailUrl + '" class="episode-thumb" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false" alt="Episode ' + ep.episodeNumber + '">' : '<div class="episode-thumb flex items-center justify-center" style="background: var(--bg-secondary);"><i class="fa-solid fa-film text-3xl" style="color: var(--text-muted);"></i></div>';
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
    playerSection.innerHTML = '<div style="margin-bottom: 10px;"><p class="text-xs font-semibold mb-2" style="color: var(--text-secondary);"><i class="fa-solid fa-server mr-1" style="color: var(--accent);"></i>Pilih Kualitas / Server <span class="text-[10px] font-normal" style="color: var(--text-muted);">(' + servers.length + ' tersedia)</span></p><div id="playerTabs" class="player-tabs-wrap">' + tabsHtml + '</div></div><div id="playerWrapper" class="player-wrapper-el"></div><button type="button" onclick="toggleFullscreen(\'playerWrapper\')" class="player-fs-btn"><i class="fa-solid fa-expand"></i>Fullscreen &amp; Putar Layar</button>';
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
    var items = data.data.recommendations.map(function(item) { var posterHtml = item.posterUrl ? '<img src="' + item.posterUrl + '" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false" alt="' + escapeAttr(item.title) + '">' : '<div style="width:110px;height:165px;border-radius:10px;background:var(--bg-secondary);display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-video" style="color:var(--text-muted);"></i></div>'; var epsBadge = item.latestEpisodeNumber ? '<div style="position:absolute;bottom:6px;right:6px;background:rgba(124,58,237,0.9);color:white;padding:2px 6px;border-radius:6px;font-size:9px;font-weight:800;">Eps ' + item.latestEpisodeNumber + '</div>' : ''; return '<div class="rec-drakor-item" onclick="navigate(\'watch/' + item.id + '\')"><div style="position:relative;">' + posterHtml + epsBadge + '</div><p class="text-[11px] font-semibold line-clamp-2 leading-snug mt-1" style="color: var(--text-primary);">' + escapeHtml(item.title) + '</p></div>'; }).join('');
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
        video.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback nofullscreen');
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
    var shield = document.createElement('div'); shield.className = 'player-shield'; container.appendChild(shield); attachFsButton(container);
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
    var goUser = 'navigate(\'user/' + escapeAttr(c.username) + '\')';
    var avatarHtml = renderMLBBAvatar({ username: c.username, avatarUrl: c.avatarUrl, borderUrl: c.borderUrl, borderScale: c.borderScale || 1.2, size: isReply ? 28 : 36, onClick: goUser });
    var displayName = c.displayName || c.username;
    var canDelete = state.user && (state.user.id === c.userId || state.user.role === 'admin');
    var canEdit = state.user && state.user.id === c.userId;
    var deleteFn = isGallery ? 'deleteGalleryComment' : 'deleteComment';
    var replyToggleFn = isGallery ? 'toggleGalleryReplyBox' : 'toggleReplyBox';
    var submitReplyFn = isGallery ? 'submitGalleryReply' : 'submitReply';
    var toggleRepliesFn = isGallery ? 'toggleGalleryReplies' : 'toggleReplies';
    var counterKey = isGallery ? 'gallery_' : ''; var kind = isGallery ? 'gallery' : 'series';
    var nameHtml = '<p class="cmt-name"><span onclick="' + goUser + '">' + escapeHtml(displayName) + '</span>' + (c.isVerified ? verifiedSvgSize('sm') : '') + (c.isAdmin ? '<span class="cmt-badge cmt-badge-admin">Admin</span>' : '') + (c.isVip ? '<span class="cmt-badge cmt-badge-vip">VIP</span>' : '') + renderLevelPhoto(c.levelUrl, 16) + '</p>';
    var mediaHtml = c.mediaUrl ? '<div class="cmt-media"><img src="' + c.mediaUrl + '" alt="" loading="lazy" decoding="async" onclick="openImagePreview(\'' + c.mediaUrl + '\')" oncontextmenu="return false;" draggable="false"></div>' : '';
    // gelembung kustom (kosmetik yang dibeli user) tetap dipakai; selain itu gelembung abu-abu dengan nama di dalamnya
    var bubble = (c.bubbleCss && c.bubbleHtml) ? '<div class="cmt-custom">' + nameHtml + renderCommentBubble(c) + '</div>'
        : ((c.content ? '<div class="cmt-bubble">' + nameHtml + '<div class="cmt-text">' + formatCommentTextHtml(c.content) + '</div></div>' : nameHtml) + mediaHtml);
    var meta = '<div class="cmt-meta"><span>' + c.createdAtWIB + '</span>' + (c.isEdited ? '<span>· Diedit</span>' : '') +
        (!isReply && state.user ? '<button type="button" onclick="' + replyToggleFn + '(' + c.id + ')">Balas</button>' : '') +
        (canEdit ? '<button type="button" data-comment-id="' + c.id + '" data-content-id="' + contentId + '" data-is-gallery="' + (isGallery ? '1' : '0') + '" data-content="' + escapeAttrValue(c.content || '') + '" onclick="openEditCommentModalFromBtn(this)">Edit</button>' : '') +
        (canDelete ? '<button type="button" class="cmt-del" onclick="' + deleteFn + '(' + c.id + ', ' + contentId + ')">Hapus</button>' : '') + '</div>';
    var replyBox = isReply ? '' : '<div id="' + counterKey + 'replyBox_' + c.id + '" class="hidden cmt-replybox"><div class="cmt-composer-box"><textarea id="' + counterKey + 'replyInput_' + c.id + '" rows="1" maxlength="2000" placeholder="Balas ' + escapeAttrValue(displayName) + '..." oninput="updateCommentCounter(\'' + counterKey + 'replyInput_' + c.id + '\', \'' + counterKey + 'replyCounter_' + c.id + '\'); cmtGrow(this)"></textarea><div id="' + counterKey + 'replyMediaArea_' + c.id + '"></div><div class="cmt-composer-bar"><button type="button" class="cmt-icon" onclick="openCommentMediaPicker(\'' + kind + '\', ' + c.id + ')" aria-label="Tambah foto"><i class="fa-solid fa-camera"></i></button><span id="' + counterKey + 'replyCounter_' + c.id + '" class="comment-counter">0 / 2000</span><button type="button" class="cmt-cancel" onclick="' + replyToggleFn + '(' + c.id + ')">Batal</button><button type="button" class="cmt-send" onclick="' + submitReplyFn + '(' + c.id + ', ' + contentId + ')" aria-label="Kirim balasan"><i class="fa-solid fa-paper-plane"></i></button></div></div></div>';
    var replies = '';
    if (!isReply && c.replies && c.replies.length > 0) {
        replies = '<button type="button" class="cmt-more" onclick="' + toggleRepliesFn + '(' + c.id + ')" id="' + counterKey + 'replyToggle_' + c.id + '" data-count="' + c.replies.length + '"><i class="fa-solid fa-reply fa-flip-vertical"></i>Lihat ' + c.replies.length + ' balasan</button>' +
            '<div id="' + counterKey + 'repliesContainer_' + c.id + '" class="cmt-replies hidden">' + c.replies.map(function (r) { return renderCommentItem(r, contentId, true, isGallery); }).join('') + '</div>';
    }
    return '<div class="cmt' + (isReply ? ' cmt-reply' : '') + '"><span class="cmt-av">' + avatarHtml + '</span><div class="cmt-main">' + bubble + meta + replyBox + replies + '</div></div>';
}

function toggleReplies(commentId) { cmtToggleReplies('', commentId); }

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

// Grid story di profil — gaya Instagram (3 kolom, kotak, rapat)
function renderProfileStoryGrid(list, opts) {
    opts = opts || {}; var loading = !!opts.loading; list = list || [];
    var uploadBtn = opts.isSelf ? '<button type="button" onclick="openUploadGallery()" class="ig-upload-btn"><i class="fa-solid fa-plus"></i>Upload</button>' : '';
    var head = '<div class="ig-head"><div class="ig-head-title"><i class="fa-solid fa-table-cells"></i><span>Story</span>' + (loading ? '' : '<b>' + list.length + '</b>') + '</div>' + uploadBtn + '</div>';
    if (loading) return '<div class="ig-section">' + head + '<div class="ig-grid"><div class="ig-tile skeleton"></div><div class="ig-tile skeleton"></div><div class="ig-tile skeleton"></div></div></div>';
    if (list.length === 0) {
        return '<div class="ig-section">' + head + '<div class="ig-empty"><div class="ig-empty-icon"><i class="fa-solid fa-camera"></i></div><p class="ig-empty-title">Belum ada story</p><p class="ig-empty-desc">' + (opts.isSelf ? 'Bagikan momen pertamamu ✨' : 'User ini belum upload story') + '</p>' + (opts.isSelf ? '<button type="button" onclick="openUploadGallery()" class="btn-primary" style="padding:8px 18px;font-size:12px;margin-top:12px;"><i class="fa-solid fa-plus mr-1"></i>Upload Story</button>' : '') + '</div></div>';
    }
    var tiles = list.map(function (p) {
        var media = p.mediaUrls || (p.image_url ? [p.image_url] : []); var first = media[0] || p.image_url || '';
        var locked = !!p.locked; var price = p.price || 0;
        var multi = media.length > 1 ? '<span class="ig-tile-multi"><i class="fa-solid fa-clone"></i></span>' : '';
        var priceTag = price > 0 ? '<span class="ig-tile-price"><i class="fa-solid fa-coins"></i>' + formatKoin(price) + '</span>' : '';
        var lock = locked ? '<span class="ig-tile-lock"><i class="fa-solid fa-lock"></i></span>' : '';
        var stats = '<span class="ig-tile-stats"><span><i class="fa-solid fa-heart"></i>' + (p.likes_count || 0) + '</span><span><i class="fa-solid fa-comment"></i>' + (p.comments_count || 0) + '</span></span>';
        var img = first ? '<img src="' + first + '" alt="" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false">' : '';
        return '<button type="button" class="ig-tile' + (locked ? ' is-locked' : '') + '" onclick="navigate(\'gallery-detail/' + p.id + '\')" aria-label="Buka story">' + img + multi + priceTag + lock + stats + '</button>';
    }).join('');
    return '<div class="ig-section">' + head + '<div class="ig-grid">' + tiles + '</div></div>';
}
async function renderGalleryPage() {
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-lock text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk mengakses story</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    var user = state.user; var isAdmin = user && user.role === 'admin';
    app.innerHTML = renderFbFeedShell();
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
    var tray = document.getElementById('fbStoriesTray'); if (tray && page === 1 && state.galleryTab !== 'saved' && !q) tray.innerHTML = renderFbStoriesTray(data.data.posts);
    var html = data.data.posts.map(function(p) { return renderGalleryItemHtml(p, isAdmin); }).join('');
    html += renderPaginationWithFn(page, data.data.totalPages, function(p) { return 'galleryPage(' + p + ')'; });
    container.innerHTML = html;
}
function galleryPage(page) { loadGallery(parseInt(page) || 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }

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
        '<div class="card overflow-hidden mb-4 animate-fade-up story-viewer-card">' + imageHtml +
        (p.description ? '<div class="p-4"><p class="text-sm leading-relaxed" style="color: var(--text-secondary);">' + escapeHtml(p.description) + '</p></div>' : '') +
        '<div class="p-4 flex items-center gap-3" style="border-top: 1px solid var(--border-color);">' + avatar + '<div class="flex-1 min-w-0"><p class="font-semibold text-sm cursor-pointer hover:underline flex items-center gap-1" style="color: var(--text-primary);" onclick="navigate(\'user/' + escapeAttr(p.username) + '\')">' + escapeHtml(p.display_name || p.username) + verifiedCheck + '</p><p class="text-[10px]" style="color: var(--text-muted);">' + formatDateWIB(p.created_at) + '</p>' + priceInfo + '</div>' + lvl + '</div>' +
        '<div class="px-4 pb-4 flex gap-2 flex-wrap">' + buyBtn + '<button onclick="galleryAction(' + p.id + ', \'like\')" class="btn-secondary flex-1" style="min-width: 100px; ' + likeActive + '"><i class="fa-solid fa-heart mr-1"></i>' + (p.likes_count || 0) + '</button><button onclick="galleryAction(' + p.id + ', \'save\')" class="btn-secondary flex-1" style="min-width: 100px; ' + saveActive + '"><i class="fa-solid fa-bookmark mr-1"></i>' + (p.saves_count || 0) + '</button><button onclick="shareGalleryDetail(' + p.id + ')" class="btn-secondary flex-1" style="min-width: 100px;"><i class="fa-solid fa-share mr-1"></i>Share</button>' + adminDelBtn + '</div></div>' +
        '<div class="gallery-comment-section card p-4"><div class="flex items-center justify-between mb-3"><h3 class="font-bold"><i class="fa-solid fa-comments mr-2" style="color: var(--accent);"></i>Komentar <span id="galleryCommentCount" class="text-sm font-normal" style="color: var(--text-muted);"></span></h3></div>' + renderCommentComposer(true, p.id) + '<div id="galleryCommentsList"></div><div id="galleryCommentsPagination"></div></div>';
    loadGalleryComments(p.id, 1);
}


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
function toggleGalleryReplies(commentId) { cmtToggleReplies('gallery_', commentId); }

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
    state.pendingGalleryFiles = []; var u = state.user;
    var av = renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 44 });
    var first = escapeHtml(String(u.displayName || u.username || '').split(' ')[0]);
    var html = '<div class="sc">' +
        '<div class="sc-head">' + av + '<div class="sc-who"><b>' + escapeHtml(u.displayName || u.username) + '</b><span><i class="fa-solid fa-earth-asia"></i>Publik · dapat koin &amp; EXP</span></div></div>' +
        '<textarea id="galleryDesc" class="sc-text" rows="3" maxlength="2000" placeholder="Apa ceritamu hari ini' + (first ? ', ' + first : '') + '?" oninput="scOnCaption(this)"></textarea>' +
        '<div class="sc-count"><span id="captionCount">0 / 2000</span></div>' +
        '<input type="file" id="galleryFile" accept="image/jpeg,image/png,image/webp,image/gif" multiple class="hidden" onchange="handleGalleryFileSelect(this)">' +
        '<div id="galleryFilePreview" class="sc-media"></div>' +
        '<div class="sc-tools"><span>Tambahkan ke story</span><button type="button" class="sc-tool" onclick="scPickPhotos()"><i class="fa-solid fa-images"></i><b>Foto</b></button><button type="button" class="sc-tool sc-tool-price" id="scPriceToggle" onclick="scTogglePrice()"><i class="fa-solid fa-coins"></i><b>Jual</b></button></div>' +
        '<div id="scPriceBox" class="sc-price hidden"><label for="galleryPrice">Harga (koin)</label><input type="number" id="galleryPrice" class="input-modern" inputmode="numeric" placeholder="0" min="0" max="1000000" value="0" oninput="updateGalleryPriceHint()"><p id="galleryPriceHint" class="sc-price-hint">Isi 0 untuk gratis. Maks 1.000.000 koin.</p></div>' +
        '<button type="button" onclick="submitGallery()" class="btn-primary w-full sc-post" id="uploadGalleryBtn" disabled>Pilih foto dulu</button></div>';
    showInfoModal('Buat Story', html); scRenderMedia();
}

function updateGalleryPriceHint() {
    var priceInput = document.getElementById('galleryPrice'); var hint = document.getElementById('galleryPriceHint'); if (!priceInput || !hint) return;
    var v = parseInt(priceInput.value) || 0;
    if (v <= 0) { hint.textContent = 'Story akan tampil GRATIS untuk semua user.'; hint.style.color = 'var(--text-muted)'; }
    else if (v > 1000000) { hint.textContent = '⚠️ Maksimal 1.000.000 koin!'; hint.style.color = '#dc2626'; }
    else { hint.textContent = '🔒 Story akan dispoiler & dijual ' + formatKoin(v) + ' koin. Kamu terima 100% saat terjual.'; hint.style.color = '#d97706'; }
}
async function submitGallery() {
    var files = (state.pendingGalleryFiles || []).slice();
    var descEl = document.getElementById('galleryDesc'); var priceEl = document.getElementById('galleryPrice');
    var desc = descEl ? descEl.value.trim() : ''; var price = parseInt(priceEl ? priceEl.value : '0') || 0;
    if (!files.length) { showToast('Pilih minimal 1 foto', 'error'); return; }
    if (files.length > 10) { showToast('Maksimal 10 foto per story', 'error'); return; }
    if (desc.length > 2000) { showToast('Caption maksimal 2000 karakter', 'error'); return; }
    if (price < 0 || price > 1000000) { showToast('Harga harus 0 - 1.000.000 koin', 'error'); return; }
    var btn = document.getElementById('uploadGalleryBtn');
    function label(t) { if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i>' + t; } }
    function fail(msg) { showToast(msg, 'error'); scRenderMedia(); }
    try {
        var done = 0; label('Menyiapkan foto 0/' + files.length + '…');
        // foto diperkecil di HP dulu (semua sekaligus), baru diunggah — jauh lebih cepat daripada mengirim foto kamera mentah
        var ready = await Promise.all(files.map(function (f) { return compressImage(f, 1600, 0.85).then(function (r) { done++; label('Menyiapkan foto ' + done + '/' + files.length + '…'); return r; }); }));
        if (ready.some(function (r) { return r.size > 8 * 1024 * 1024; })) { fail('Ada foto yang masih di atas 8 MB'); return; }
        label('Mengunggah ' + files.length + ' foto…');
        var formData = new FormData(); ready.forEach(function (r, i) { formData.append('image', r, r.name || files[i].name || ('foto-' + (i + 1) + '.jpg')); });
        formData.append('description', desc); formData.append('price', String(price));
        var response = await fetch(API_BASE + '/api/gallery/upload', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: formData });
        var data = await response.json();
        if (!data.success) { fail(data.error || 'Gagal mengunggah story'); return; }
        showToast(data.message || 'Story terposting!', 'success'); state.pendingGalleryFiles = []; state.homeCache = null; closeInfoModal();
        var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); }
        if (state.currentPage === 'profile') renderProfile(); else if (state.currentPage === 'gallery') loadGallery(1);
        loadFooterStats(); loadStoryBadge();
    } catch (e) { fail('Gagal: ' + e.message); }
}

async function renderPartyPage() {
    destroyActivePlayer(); stopCouplePoll(); rdStopAll(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; } currentParty = null; partyVideoEl = null; partyHls = null;
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-users-rectangle text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk mengakses Room Party</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = renderRoomTabs('nobar') + '<div class="room-head"><div><h1 class="room-title">Room Nobar</h1><p class="room-sub">Nonton bareng — video semua anggota mengikuti host.</p></div><button onclick="openCreatePartyModal()" class="btn-primary" style="padding:8px 16px;font-size:13px;white-space:nowrap;"><i class="fa-solid fa-plus mr-1"></i>Buat Room</button></div>' +
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
    destroyActivePlayer(); stopCouplePoll(); rdStopAll(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; }
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><p>Login dulu</p></div>'; return; }
    app.innerHTML = renderSkeleton();
    var data = await apiCall('/api/party/' + code + '/state');
    if (!data.success) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-exclamation-triangle text-4xl mb-4" style="color:var(--danger);"></i><p class="mb-4">' + (data.error || 'Room tidak ditemukan') + '</p><button onclick="navigate(\'party\')" class="btn-primary">Kembali</button></div>'; return; }
    currentParty = { code: code, data: data.data, isHost: data.data.room.isHost }; lastPartySeq = data.data.state.action_seq || 0;
    var isHost = data.data.room.isHost;
    app.innerHTML = '<button onclick="leavePartyRoom()" class="flex items-center gap-2 text-sm mb-3" style="color:var(--accent);"><i class="fa-solid fa-arrow-left"></i><span>Keluar Room</span></button>' +
        '<div class="card p-3 mb-3 flex items-center justify-between flex-wrap gap-2"><div><h2 class="font-bold text-base flex items-center gap-2">' + escapeHtml(data.data.room.title) + (isHost ? '<span class="party-host-badge"><i class="fa-solid fa-crown"></i>HOST</span>' : '') + '</h2><p class="text-[11px]" style="color:var(--text-muted);">Host: ' + escapeHtml(data.data.room.hostDisplayName) + ' • Kode: <strong style="color:var(--accent);">' + data.data.room.code + '</strong>' + (data.data.room.visibility === 'private' ? ' • <span class="party-private-badge"><i class="fa-solid fa-lock"></i>PRIVATE</span>' : ' • <span class="party-public-badge"><i class="fa-solid fa-globe"></i>PUBLIC</span>') + '</p></div><div class="flex gap-2"><button onclick="copyToClipboard(\'' + data.data.room.code + '\')" class="btn-secondary" style="padding:6px 12px;font-size:11px;"><i class="fa-regular fa-copy mr-1"></i>Salin</button><button onclick="shareParty()" class="btn-secondary" style="padding:6px 12px;font-size:11px;"><i class="fa-brands fa-telegram mr-1"></i>Undang</button>' + (isHost ? '<button onclick="endPartyRoom()" class="btn-secondary" style="padding:6px 12px;font-size:11px;color:#dc2626;"><i class="fa-solid fa-stop mr-1"></i>Akhiri</button>' : '') + '</div></div>' +
        '<div id="partyPlayerWrapper" class="player-wrapper-el"></div>' +
        '<button type="button" onclick="toggleFullscreen(\'partyPlayerWrapper\')" class="player-fs-btn mb-3"><i class="fa-solid fa-expand"></i>Fullscreen &amp; Putar Layar</button>' +
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
        video.setAttribute('controlsList', 'nodownload nofullscreen'); video.setAttribute('oncontextmenu', 'return false;'); video.setAttribute('draggable', 'false');
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
    attachFsButton(wrap);
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
    app.innerHTML = renderFbProfileHeader(user, { isSelf: true }) + '<div id="coupleProfileSlot"></div><div id="profileStorySection">' + renderProfileStoryGrid(null, { isSelf: true, loading: true }) + '</div>' + giftsReceivedHtml + renderPremiumPromo() +
        (adminBtn ? '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-shield-halved" style="color:#dc2626;"></i>Administrasi</div>' + adminBtn + '</div>' : '') +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-coins" style="color:#d97706;"></i>Koin</div><button onclick="openTopupModal()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(34,158,217,0.15);"><i class="fa-solid fa-star" style="color: #229ED9;"></i></div><span class="font-medium text-sm flex-1 text-left">Top Up Koin (Telegram Stars)</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openTransferModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(251,191,36,0.15);"><i class="fa-solid fa-paper-plane" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Transfer Koin ke User Lain</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openCoinHistory()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-coins" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Histori Koin</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openVoucherModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(139, 92, 246, 0.15);"><i class="fa-solid fa-ticket" style="color: #8b5cf6;"></i></div><span class="font-medium text-sm flex-1 text-left">Redeem Voucher</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-users" style="color:var(--accent);"></i>Sosial & Hadiah</div><button onclick="navigate(\'referral\')" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(124,58,237,0.15);"><i class="fa-solid fa-gift" style="color: #7c3aed;"></i></div><span class="font-medium text-sm flex-1 text-left">Ajak Teman (Referral)</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="navigate(\'couple\')" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(236,72,153,0.15);"><i class="fa-solid fa-heart" style="color: #ec4899;"></i></div><span class="font-medium text-sm flex-1 text-left">Pasangan &amp; Streak</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openLeaderboardModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-trophy" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Leaderboard</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-chart-line" style="color:#059669;"></i>Aktivitas</div><button onclick="navigate(\'missions\')" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(16, 185, 129, 0.15);"><i class="fa-solid fa-trophy" style="color: #059669;"></i></div><span class="font-medium text-sm flex-1 text-left">Misi Harian</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="navigate(\'request\')" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(124, 58, 237, 0.15);"><i class="fa-solid fa-plus-circle" style="color: #7c3aed;"></i></div><span class="font-medium text-sm flex-1 text-left">Request Drakor</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="navigate(\'party\')" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(236, 72, 153, 0.15);"><i class="fa-solid fa-users-rectangle" style="color: #ec4899;"></i></div><span class="font-medium text-sm flex-1 text-left">Room Party</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-cart-shopping" style="color:#ec4899;"></i>Belanja & Kosmetik</div><button onclick="openVipModal()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(251, 191, 36, 0.15);"><i class="fa-solid fa-crown" style="color: #d97706;"></i></div><span class="font-medium text-sm flex-1 text-left">Beli VIP dengan Koin</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openShopModal()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(139, 92, 246, 0.15);"><i class="fa-solid fa-store" style="color: #8b5cf6;"></i></div><span class="font-medium text-sm flex-1 text-left">Toko Border & Bubble</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>' +
        '<div class="profile-section-card"><div class="profile-section-title"><i class="fa-solid fa-gear" style="color:#06b6d4;"></i>Pengaturan</div><button onclick="openEditProfile()" class="profile-menu-row" style="border-top:none;"><div class="profile-menu-icon" style="background: rgba(124, 58, 237, 0.15);"><i class="fa-solid fa-pen" style="color: #7c3aed;"></i></div><span class="font-medium text-sm flex-1 text-left">Edit Profil</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openAvatarEditor()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(6, 182, 212, 0.15);"><i class="fa-solid fa-circle-user" style="color: #06b6d4;"></i></div><span class="font-medium text-sm flex-1 text-left">Ganti Foto Profil</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="openCoverEditor()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(16, 185, 129, 0.15);"><i class="fa-solid fa-image" style="color: #059669;"></i></div><span class="font-medium text-sm flex-1 text-left">Ganti Foto Sampul</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button><button onclick="logout()" class="profile-menu-row"><div class="profile-menu-icon" style="background: rgba(239, 68, 68, 0.15);"><i class="fa-solid fa-right-from-bracket" style="color: #dc2626;"></i></div><span class="font-medium text-sm flex-1 text-left" style="color: #dc2626;">Keluar</span><i class="fa-solid fa-chevron-right text-xs" style="color: var(--text-muted);"></i></button></div>';
    loadCoupleProfileSlot();
    try {
        var myStoryData = await apiCall('/api/user/' + user.username);
        var myStories = (myStoryData.success && myStoryData.data.gallery) ? myStoryData.data.gallery : [];
        var storyBox = document.getElementById('profileStorySection');
        if (storyBox) storyBox.innerHTML = renderProfileStoryGrid(myStories, { isSelf: true });
        var storyCountEl = document.getElementById('fbpStoryCount'); if (storyCountEl) storyCountEl.textContent = myStories.length;
    } catch (e) { console.warn('Load own story error:', e); }
    if (isAdmin) { apiCall('/api/admin/pending-count').then(function(res) { if (res.success) { state.adminPendingRequests = res.data.count || 0; } }); }
}


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
    var galleryList = u.gallery || []; var galleryHtml = renderProfileStoryGrid(galleryList, { isSelf: !!isSelf });
    app.innerHTML = '<button onclick="history.back()" class="fbp-back"><i class="fa-solid fa-arrow-left"></i><span>Kembali</span></button>' + renderFbProfileHeader(u, { isSelf: !!isSelf }) + galleryHtml + giftsReceivedHtml;
}

async function openEditProfile() {
    if (!state.user) return;
    var user = state.user; var canChangeUsername = user.canChangeUsername !== false; var daysRemaining = user.usernameChangeDaysRemaining || 0;
    var tgDisabled = !!user.telegramId;
    var html = '<div class="ep">' +
        '<div class="ep-section"><div class="ep-head"><b>Foto profil</b><button type="button" class="ep-edit" onclick="openAvatarEditor()">Edit</button></div><div class="ep-avatar" role="button" onclick="openAvatarEditor()">' + renderMLBBAvatar({ username: user.username, avatarUrl: user.avatarUrl, borderUrl: user.borderUrl, borderScale: user.borderScale || 1.2, size: 104 }) + '</div></div>' +
        '<div class="ep-section"><div class="ep-head"><b>Foto sampul</b><button type="button" class="ep-edit" onclick="openCoverEditor()">Edit</button></div><div class="ep-cover" role="button" onclick="openCoverEditor()"' + (user.coverUrl ? ' style="background-image:url(\'' + user.coverUrl + '\');"' : '') + '>' + (user.coverUrl ? '' : '<span><i class="fa-solid fa-image"></i>Tambah foto sampul</span>') + '</div></div>' +
        '<div class="ep-section ep-form space-y-4"><div class="ep-head"><b>Info profil</b></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Nama Tampilan</label><input type="text" id="editDisplayName" class="input-modern" value="' + escapeHtml(user.displayName || user.username) + '" maxlength="50"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Username</label><div class="relative"><i class="fa-solid fa-at absolute left-4 top-1/2 -translate-y-1/2 text-sm" style="color: var(--text-muted);"></i><input type="text" id="editUsername" class="input-modern" style="padding-left: 44px;" value="' + escapeHtml(user.username) + '" ' + (canChangeUsername ? '' : 'disabled') + '></div>' + (canChangeUsername ? '<p class="text-[10px] mt-1" style="color: var(--text-muted);">⚠️ Ubah username = tunggu 30 hari. Butuh instan? Bayar <strong style="color:#d97706;">5.000 koin</strong>.</p>' : '<p class="text-[10px] mt-1" style="color: #d97706;">⏳ Bisa diubah dalam <strong>' + daysRemaining + ' hari</strong> lagi. Butuh instan? Bayar <strong>5.000 koin</strong>.</p>') + '</div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Email (opsional)</label><input type="email" id="editEmail" class="input-modern" value="' + escapeHtml(user.email && !user.email.includes('@telegram.local') ? user.email : '') + '"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">No. HP</label><input type="text" id="editPhone" class="input-modern" value="' + escapeHtml(user.phone || '') + '" placeholder="08xxxxxxxxxx"></div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Telegram ' + (tgDisabled ? '<span class="badge" style="background:rgba(34,158,217,0.15);color:#229ED9;font-size:9px;margin-left:6px;"><i class="fa-brands fa-telegram"></i> TERHUBUNG</span>' : '') + '</label><input type="text" id="editTelegram" class="input-modern" value="' + escapeHtml(user.telegram || '') + '" placeholder="username (tanpa @)" ' + (tgDisabled ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '') + '>' + (tgDisabled ? '<p class="text-[10px] mt-1" style="color:#d97706;"><i class="fa-solid fa-lock mr-1"></i>Username Telegram terhubung otomatis, tidak bisa diganti. Butuh ganti? Bayar <strong>' + formatKoin(TELEGRAM_CHANGE_COST) + ' koin</strong>.</p><button onclick="buyTelegramChange()" class="btn-secondary w-full mt-2" style="color:#d97706;border-color:#fbbf24;padding:6px;font-size:11px;"><i class="fa-solid fa-bolt mr-1"></i>Ganti Telegram (' + formatKoin(TELEGRAM_CHANGE_COST) + ' Koin)</button>' : '') + '</div>' +
        '<div><label class="block text-xs font-medium mb-2" style="color: var(--text-secondary);">Bio <span id="bioCounter" style="float:right; color:var(--text-muted);">0 / 500</span></label><textarea id="editBio" class="input-modern" rows="3" maxlength="500" oninput="document.getElementById(\'bioCounter\').textContent = this.value.length + \' / 500\'">' + escapeHtml(user.bio || '') + '</textarea></div>' +
        '<div class="flex gap-2 pt-2"><button onclick="saveEditProfile()" class="btn-primary flex-1"><i class="fa-solid fa-save mr-1"></i>Simpan</button><button onclick="closeInfoModal()" class="btn-secondary">Batal</button></div>' +
        '<button onclick="buyInstantUsernameChange()" class="btn-secondary w-full" style="color: #d97706; border-color: #fbbf24;"><i class="fa-solid fa-bolt mr-1"></i>Ubah Username Instan (5.000 Koin)</button></div></div>';
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

function uploadAvatarInline() { return uploadProfileImage('avatar'); }

function uploadCoverInline() { return uploadProfileImage('cover'); }

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
    var m = { view: 'Nonton episode', comment: 'Komentar', checkin: 'Check-in harian', admin: 'Bonus admin', gallery_upload: 'Upload story', gallery_like: 'Like story', reaction: 'Reaksi series', reply_comment: 'Balas komentar', vip_purchase: 'Pembelian VIP', username_reset: 'Reset cooldown username', voucher_redeem: 'Redeem voucher', topup_stars: 'Top up Telegram Stars', random_dice_win: 'Menang Random Dice', coin_transfer_send: 'Transfer keluar', coin_transfer_receive: 'Transfer masuk', telegram_change: 'Ganti Telegram' };
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
    if (cat === 'streak') { loadCoupleLeaderboard(page, container); return; }
    if (cat === 'trophy') { loadTrophyLeaderboard(page, container); return; }
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

function shareReferral(link) { if (navigator.share) { navigator.share({ title: 'Ayo gabung di Fesstale Movie!', text: 'Nonton drakor gratis kualitas HD. Buka link Telegram ini:', url: link }).catch(function() {}); } else { copyToClipboard(link); } }

function toggleSearch() { var bar = document.getElementById('searchBar'); bar.classList.toggle('hidden'); if (!bar.classList.contains('hidden')) setTimeout(function() { document.getElementById('searchInput').focus(); }, 100); }
var searchTimeout;
async function performSearch(query, page) {
    if (state.searchMode === 'user') { return performUserSearch(query, page); }
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
    function adSlotEditor(key, label) { var slot = adSlots[key] || { enabled: false, code: '' }; var codes = (slot.code || '').split('|||'); return '<div class="mb-4 p-3 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold">' + label + '</span><label class="flex items-center gap-1 text-xs"><input type="checkbox" id="adEnabled_' + key + '" ' + (slot.enabled ? 'checked' : '') + '> Aktif</label></div><textarea id="adCode1_' + key + '" class="input-modern mb-1" rows="2" placeholder="Slot 1" style="font-size: 11px;">' + escapeHtml(codes[0] || '') + '</textarea><textarea id="adCode2_' + key + '" class="input-modern mb-1" rows="2" placeholder="Slot 2" style="font-size: 11px;">' + escapeHtml(codes[1] || '') + '</textarea><textarea id="adCode3_' + key + '" class="input-modern" rows="2" placeholder="Slot 3" style="font-size: 11px;">' + escapeHtml(codes[2] || '') + '</textarea><div class="flex items-center justify-end mt-2"><button type="button" onclick="previewAdSlot(\'' + key + '\')" class="btn-secondary" style="padding:5px 12px;font-size:11px;"><i class="fa-solid fa-eye mr-1"></i>Pratinjau</button></div><div id="adPreview_' + key + '" class="mt-2"></div></div>'; }
    var promoBanners = data.promoBanners || []; var emailVerifEnabled = data.emailVerificationEnabled !== false;
    var html = '<div class="card p-4 mb-4"><h2 class="font-bold mb-3 text-sm">Info / Notes</h2><label class="block text-xs mb-1">Note Beranda</label><textarea id="adminHomeNote" class="input-modern mb-3" rows="2">' + escapeHtml(data.homeNote || '') + '</textarea><label class="block text-xs mb-1">Note Player</label><textarea id="adminPlayerNote" class="input-modern mb-3" rows="2">' + escapeHtml(data.playerNote || '') + '</textarea><h2 class="font-bold mb-3 text-sm">Verifikasi Email (Legacy)</h2><label class="flex items-center gap-2 mb-2 text-xs p-2 rounded-lg" style="background: var(--bg-secondary); opacity:0.6;"><input type="checkbox" id="emailVerificationEnabled" ' + (emailVerifEnabled ? 'checked' : '') + ' disabled> Verifikasi email (disabled - Mini App only)</label><h2 class="font-bold mb-3 text-sm">Turnstile (Anti-Bot)</h2><label class="flex items-center gap-2 mb-3 text-xs" style="opacity:0.6;"><input type="checkbox" id="turnstileEnabled" ' + (data.turnstileEnabled ? 'checked' : '') + ' disabled> Turnstile (disabled - Mini App verified by Telegram)</label><h2 class="font-bold mb-3 text-sm">Gyazo API</h2><input type="text" id="gyazoClientId" class="input-modern mb-2" value="' + escapeHtml(gyazo.clientId || '') + '" placeholder="Client ID"><input type="text" id="gyazoClientSecret" class="input-modern mb-2" value="' + escapeHtml(gyazo.clientSecret || '') + '" placeholder="Client Secret"><input type="text" id="gyazoCallbackUrl" class="input-modern mb-2" value="' + escapeHtml(gyazo.callbackUrl || '') + '" placeholder="Callback URL"><input type="text" id="gyazoAccessToken" class="input-modern mb-3" value="' + escapeHtml(gyazo.accessToken || '') + '" placeholder="Access Token (Wajib!)"><button onclick="saveAdminSettings()" class="btn-primary w-full mb-3">Simpan Settings</button></div>' +
        '<div class="card p-4 mb-4"><h2 class="font-bold mb-2 text-sm">Slot Iklan (Free User)</h2><div class="ad-help"><b>Tiap kotak boleh diisi salah satu:</b><span><code>&lt;script ...&gt;&lt;/script&gt;</code> kode jaringan iklan</span><span><code>&lt;a href=...&gt;&lt;img ...&gt;&lt;/a&gt;</code> HTML</span><span><code>https://.../banner.jpg | https://link-tujuan</code> URL foto (link opsional)</span><span><code>https://.../iklan.mp4 | https://link-tujuan</code> URL video (link opsional)</span></div>' + adSlotEditor('header', 'Header') + adSlotEditor('home_top', 'Home Atas') + adSlotEditor('home_middle', 'Home Tengah') + adSlotEditor('home_bottom', 'Home Bawah') + '<button onclick="saveAdminSettings()" class="btn-primary w-full mb-3">Simpan Iklan</button></div>' +
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

/* ============================================================
   PLAYER FULLSCREEN + ROTASI v2
   - Fullscreen CSS (selalu berhasil, termasuk di WebView Telegram / iOS)
   - Telegram Mini App: requestFullscreen, kunci swipe-close, tombol Back
   - Browser biasa: fullscreen native pada <html> + screen.orientation.lock
   - Rotasi otomatis ke landscape di HP, fallback rotasi CSS 90 derajat
   - Layar tetap menyala (Wake Lock), tombol Putar & Keluar di dalam player
   ============================================================ */
var fsState = { active: false, el: null, mobile: false, toggled: false, usedNative: false, nativeLocked: false, tgEntered: false, tgSwipesWere: null, wakeLock: null, dimTimer: null, lastWake: 0, ancestors: [], backHandler: null };

function fsTg() { try { return (window.Telegram && window.Telegram.WebApp) || null; } catch (e) { return null; } }
function fsTgAtLeast(v) { var tg = fsTg(); try { return !!(tg && tg.isVersionAtLeast && tg.isVersionAtLeast(v)); } catch (e) { return false; } }
function fsIsTgMobile() { var tg = fsTg(); var plat = tg && tg.platform ? String(tg.platform) : ''; return plat === 'android' || plat === 'android_x' || plat === 'ios'; }
function fsIsMobileDevice() { var coarse = false; try { coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches); } catch (e) {} return fsIsTgMobile() || coarse; }
function fsViewportLandscape() { return window.innerWidth > window.innerHeight; }
function fsNativeElement() { return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null; }
function fsResolveWrapper(target) {
    if (target && target.nodeType === 1) return target;
    if (typeof target === 'string' && target) { var byId = document.getElementById(target); if (byId) return byId; }
    return document.getElementById('playerWrapper') || document.getElementById('partyPlayerWrapper') || document.querySelector('#playerContent .player-wrapper-el') || document.querySelector('.player-wrapper-el');
}

function toggleFullscreen(target) {
    if (fsState.active) { exitPlayerFullscreen(); return; }
    var wrapper = fsResolveWrapper(target);
    if (!wrapper) { showToast('Player belum aktif', 'error'); return; }
    enterPlayerFullscreen(wrapper);
}

function enterPlayerFullscreen(wrapper) {
    if (fsState.active || !wrapper) return;
    fsState.active = true; fsState.el = wrapper; fsState.mobile = fsIsMobileDevice(); fsState.toggled = false; fsState.usedNative = false; fsState.nativeLocked = false; fsState.tgEntered = false;
    fsState.portal = null; fsState.scrollY = window.scrollY || window.pageYOffset || 0;
    // 1) Netralkan transform/filter/contain di semua induk — tanpa ini position:fixed terkurung di dalam kartu
    fsState.ancestors = [];
    var node = wrapper.parentElement;
    while (node && node !== document.body && node !== document.documentElement) { node.classList.add('fs-ancestor', 'fs-no-anim'); fsState.ancestors.push(node); node = node.parentElement; }
    // 2) Fullscreen CSS + sembunyikan header, bottom nav, footer
    wrapper.classList.add('player-fs-on');
    document.documentElement.classList.add('player-fs-root');
    document.body.classList.add('player-fs-active');
    fsBuildToolbar(wrapper);
    fsEnsureCoversViewport(wrapper);
    // 3) Telegram Mini App
    var tg = fsTg();
    if (tg) {
        try { if (tg.expand) tg.expand(); } catch (e) {}
        try { if (fsTgAtLeast('8.0') && tg.requestFullscreen && !tg.isFullscreen) { tg.requestFullscreen(); fsState.tgEntered = true; } } catch (e) {}
        try { if (fsTgAtLeast('7.7') && tg.disableVerticalSwipes) { fsState.tgSwipesWere = tg.isVerticalSwipesEnabled; tg.disableVerticalSwipes(); } } catch (e) {}
        try { if (fsTgAtLeast('6.1') && tg.BackButton) { fsState.backHandler = function () { exitPlayerFullscreen(); }; tg.BackButton.onClick(fsState.backHandler); tg.BackButton.show(); } } catch (e) {}
    }
    // 4) Di luar Telegram mobile: fullscreen native pada <html> (bukan pada player, supaya rotasi CSS tetap bisa)
    var started = false;
    if (!fsIsTgMobile()) {
        try {
            var root = document.documentElement; var fn = root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
            if (fn) {
                fsState.usedNative = true; started = true;
                var req = fn.call(root, { navigationUI: 'hide' });
                if (req && typeof req.then === 'function') req.then(function () { fsSyncOrientation(); }).catch(function () { fsState.usedNative = false; fsSyncOrientation(); });
                else fsSyncOrientation();
            }
        } catch (e) { fsState.usedNative = false; started = false; }
    }
    if (!started) fsSyncOrientation();
    // 5) Layar tetap menyala selama fullscreen
    try { if (navigator.wakeLock && navigator.wakeLock.request) navigator.wakeLock.request('screen').then(function (lock) { if (fsState.active) fsState.wakeLock = lock; else { try { lock.release(); } catch (e) {} } }).catch(function () {}); } catch (e) {}
    fsWakeToolbar(true);
    try { haptic('medium'); } catch (e) {}
}

function exitPlayerFullscreen(fromNative) {
    if (!fsState.active) { try { document.body.classList.remove('player-fs-active'); document.documentElement.classList.remove('player-fs-root'); } catch (e) {} return; }
    fsState.active = false;
    var el = fsState.el;
    if (fsState.dimTimer) { clearTimeout(fsState.dimTimer); fsState.dimTimer = null; }
    try { var so = window.screen && window.screen.orientation; if (so && so.unlock) so.unlock(); } catch (e) {}
    if (!fromNative && fsState.usedNative && fsNativeElement()) {
        try { if (document.exitFullscreen) { var pr = document.exitFullscreen(); if (pr && pr.catch) pr.catch(function () {}); } else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen(); } catch (e) {}
    }
    var tg = fsTg();
    if (tg) {
        try { if (fsState.tgEntered && tg.exitFullscreen) tg.exitFullscreen(); } catch (e) {}
        try { if (fsState.tgSwipesWere === true && tg.enableVerticalSwipes) tg.enableVerticalSwipes(); } catch (e) {}
        try { if (fsState.backHandler && tg.BackButton) { tg.BackButton.offClick(fsState.backHandler); tg.BackButton.hide(); } } catch (e) {}
    }
    try { if (fsState.wakeLock) fsState.wakeLock.release(); } catch (e) {}
    if (el) { el.classList.remove('player-fs-on', 'fs-rotated', 'fs-dim', 'force-fullscreen'); var bar = el.querySelector('.fs-toolbar'); if (bar && bar.parentNode) bar.parentNode.removeChild(bar); }
    // kembalikan player ke tempat asalnya bila tadi dipindah ke <body>
    if (el && fsState.portal) {
        var ph = fsState.portal.placeholder; var pv = el.querySelector('video'); var pvPlaying = !!(pv && !pv.paused && !pv.ended);
        if (ph && ph.parentNode) { ph.parentNode.insertBefore(el, ph); ph.parentNode.removeChild(ph); if (pvPlaying && pv.paused) { try { var pr2 = pv.play(); if (pr2 && pr2.catch) pr2.catch(function () {}); } catch (e) {} } }
        else if (el.parentNode) el.parentNode.removeChild(el);
    }
    fsState.portal = null;
    (fsState.ancestors || []).forEach(function (n) { try { n.classList.remove('fs-ancestor'); } catch (e) {} });
    document.body.classList.remove('player-fs-active'); document.documentElement.classList.remove('player-fs-root');
    fsState.el = null; fsState.ancestors = []; fsState.usedNative = false; fsState.nativeLocked = false; fsState.tgEntered = false; fsState.tgSwipesWere = null; fsState.backHandler = null; fsState.wakeLock = null; fsState.toggled = false;
    // posisi scroll kembali persis seperti sebelum fullscreen
    try { window.scrollTo({ top: fsState.scrollY || 0, left: 0, behavior: 'instant' }); } catch (e) { try { window.scrollTo(0, fsState.scrollY || 0); } catch (e2) {} }
}

// Pengaman: kalau setelah masuk fullscreen player masih terkurung di induknya (tidak memenuhi layar),
// pindahkan langsung ke <body>. Saat keluar, player dikembalikan ke tempat asalnya.
function fsEnsureCoversViewport(wrapper) {
    try {
        var r = wrapper.getBoundingClientRect();
        if (!r || (!r.width && !r.height)) return;
        var vw = window.innerWidth, vh = window.innerHeight;
        if (Math.abs(r.left) <= 2 && Math.abs(r.top) <= 2 && Math.abs(r.width - vw) <= 4 && r.height >= vh - 120) return;
        var parent = wrapper.parentNode; if (!parent || parent === document.body) return;
        var video = wrapper.querySelector('video'); var wasPlaying = !!(video && !video.paused && !video.ended);
        var ph = document.createElement('div'); ph.className = 'fs-placeholder'; ph.style.height = Math.round(r.height) + 'px';
        parent.insertBefore(ph, wrapper); document.body.appendChild(wrapper);
        fsState.portal = { placeholder: ph };
        if (wasPlaying && video.paused) { try { var pp = video.play(); if (pp && pp.catch) pp.catch(function () {}); } catch (e) {} }
    } catch (e) {}
}
// HP: default landscape, tombol Putar = balik ke portrait. Desktop: tombol Putar = rotasi manual 90 derajat.
function fsWantLandscape() { return !fsState.toggled; }
function fsApplyRotation() {
    var el = fsState.el; if (!el || !fsState.active) return;
    var rotate = fsState.mobile ? (fsWantLandscape() !== fsViewportLandscape()) : fsState.toggled;
    el.classList.toggle('fs-rotated', !!rotate);
    var btn = el.querySelector('.fs-btn-rotate'); if (btn) btn.classList.toggle('is-on', !!rotate || (fsState.mobile && fsWantLandscape()));
}
function fsSyncOrientation() {
    if (!fsState.active) return;
    if (!fsState.mobile) { fsApplyRotation(); return; }
    var so = (window.screen && window.screen.orientation) || null;
    try {
        if (fsWantLandscape()) {
            if (so && so.lock) {
                var p = so.lock('landscape');
                if (p && typeof p.then === 'function') {
                    var settled = false;
                    p.then(function () { settled = true; fsState.nativeLocked = true; setTimeout(fsApplyRotation, 350); }).catch(function () { settled = true; fsState.nativeLocked = false; fsApplyRotation(); });
                    // sebagian WebView tidak pernah menjawab permintaan lock — jangan menunggu selamanya
                    setTimeout(function () { if (!settled) fsApplyRotation(); }, 600);
                    return;
                }
            }
        } else if (so && so.unlock) {
            try { so.unlock(); } catch (e) {}
            if (fsState.nativeLocked) { fsState.nativeLocked = false; setTimeout(fsApplyRotation, 350); return; }
        }
    } catch (e) {}
    fsApplyRotation();
}
function fsToggleRotate() {
    if (!fsState.active) return;
    fsState.toggled = !fsState.toggled;
    fsSyncOrientation(); fsWakeToolbar(true);
    try { haptic('medium'); } catch (e) {}
}

function fsBuildToolbar(wrapper) {
    var old = wrapper.querySelector('.fs-toolbar'); if (old && old.parentNode) old.parentNode.removeChild(old);
    var title = '';
    try {
        if (wrapper.id === 'partyPlayerWrapper') title = (currentParty && currentParty.data && currentParty.data.room) ? currentParty.data.room.title : 'Room Party';
        else if (state.currentEpisode) title = (state.currentSeries ? state.currentSeries.title + ' • ' : '') + 'Eps ' + state.currentEpisode.episodeNumber;
    } catch (e) {}
    var bar = document.createElement('div'); bar.className = 'fs-toolbar';
    bar.innerHTML = '<button type="button" class="fs-btn fs-btn-exit" aria-label="Tutup layar penuh"><i class="fa-solid fa-xmark"></i><span>Tutup</span></button><span class="fs-title"></span><button type="button" class="fs-btn fs-btn-rotate" aria-label="Putar layar"><i class="fa-solid fa-rotate"></i><span>Putar</span></button>';
    bar.querySelector('.fs-title').textContent = title || '';
    bar.querySelector('.fs-btn-exit').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); exitPlayerFullscreen(); });
    bar.querySelector('.fs-btn-rotate').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); fsToggleRotate(); });
    wrapper.appendChild(bar);
}
// Toolbar meredup setelah 3 detik (tetap bisa ditekan), muncul lagi saat layar disentuh
function fsWakeToolbar(force) {
    if (!fsState.active || !fsState.el) return;
    var now = Date.now(); if (!force && now - fsState.lastWake < 400) return; fsState.lastWake = now;
    fsState.el.classList.remove('fs-dim');
    if (fsState.dimTimer) clearTimeout(fsState.dimTimer);
    fsState.dimTimer = setTimeout(function () { if (fsState.active && fsState.el) fsState.el.classList.add('fs-dim'); }, 3200);
}
// Tombol fullscreen yang menempel di pojok video (episode & party)
function attachFsButton(wrapper) {
    if (!wrapper) return;
    var old = wrapper.querySelector('.fs-enter-btn'); if (old && old.parentNode) old.parentNode.removeChild(old);
    var b = document.createElement('button'); b.type = 'button'; b.className = 'fs-enter-btn'; b.setAttribute('aria-label', 'Layar penuh');
    b.innerHTML = '<i class="fa-solid fa-expand"></i>';
    b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); toggleFullscreen(wrapper); });
    wrapper.appendChild(b);
}
// Kompatibilitas kode lama
function setPlayerFullscreenUI(active) { if (!active) exitPlayerFullscreen(); }

function fsOnNativeChange() {
    if (!fsState.active) return;
    if (fsNativeElement()) fsState.usedNative = true;
    else if (fsState.usedNative) exitPlayerFullscreen(true);
}
document.addEventListener('fullscreenchange', fsOnNativeChange);
document.addEventListener('webkitfullscreenchange', fsOnNativeChange);
window.addEventListener('resize', function () { if (fsState.active) fsApplyRotation(); }, { passive: true });
window.addEventListener('orientationchange', function () { if (fsState.active) setTimeout(fsApplyRotation, 250); }, { passive: true });
document.addEventListener('pointerdown', function () { if (fsState.active) fsWakeToolbar(true); }, { passive: true, capture: true });
document.addEventListener('pointermove', function () { if (fsState.active) fsWakeToolbar(false); }, { passive: true, capture: true });
document.addEventListener('keydown', function (e) {
    if (!fsState.active) return;
    if (e.key === 'Escape') exitPlayerFullscreen();
    else if (e.key === 'r' || e.key === 'R') fsToggleRotate();
});

/* ============================================================
   DEEP LINK TELEGRAM, BAGIKAN, DAN KONEKSI ULANG
   Link yang dibagikan berbentuk t.me/<bot>?startapp=<kode> sehingga
   saat dibuka kembali langsung terhubung ke konten di Mini App.
   v_<id> series · s_<id> story · u_<username> profil · p_<KODE> party · c_<KODE> pasangan
   ============================================================ */
function tgWebApp() { try { return (window.Telegram && window.Telegram.WebApp) || null; } catch (e) { return null; } }
function isRealTelegram() { var tg = tgWebApp(); return !!(tg && tg.platform && tg.platform !== 'unknown' && tg.initData && tg.initData !== 'demo_init_data_standalone'); }
function tgBotName() { return state.botUsername || (state.homeNotes && state.homeNotes.telegramBotUsername) || null; }
function appLink(payload, webPath) {
    var bot = tgBotName();
    if (bot && payload) return 'https://t.me/' + bot + '?startapp=' + encodeURIComponent(payload);
    return window.location.origin + (webPath || '/');
}
function shareLink(url, text) {
    var tg = tgWebApp();
    try { if (isRealTelegram() && tg.openTelegramLink) { tg.openTelegramLink('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text || '')); return; } } catch (e) {}
    try { if (navigator.share) { navigator.share({ title: 'Fesstale Movie', text: text || '', url: url }).catch(function () {}); return; } } catch (e) {}
    copyToClipboard(url);
}
function startParamToTarget(sp) {
    sp = String(sp || ''); var m;
    if ((m = sp.match(/^v_(\d+)$/))) return { page: 'watch/' + m[1] };
    if ((m = sp.match(/^s_(\d+)$/))) return { page: 'gallery-detail/' + m[1] };
    if ((m = sp.match(/^u_([A-Za-z0-9_]+)$/))) return { page: 'user/' + m[1] };
    if ((m = sp.match(/^p_([A-Za-z0-9]{4,10})$/))) return { party: m[1].toUpperCase() };
    if ((m = sp.match(/^c_([A-Za-z0-9]{4,10})$/))) return { couple: m[1].toUpperCase() };
    if ((m = sp.match(/^d_([A-Za-z0-9]{4,10})$/))) return { dice: m[1].toUpperCase() };
    return null;
}
function locationToStartParam() {
    var path = window.location.pathname, qs = new URLSearchParams(window.location.search), m;
    if (path === '/view' && /^\d+$/.test(qs.get('id') || '')) return 'v_' + qs.get('id');
    if ((path === '/story' || path === '/galeri' || path === '/gallery') && /^\d+$/.test(qs.get('id') || '')) return 's_' + qs.get('id');
    if ((m = path.match(/^\/@([a-zA-Z0-9_]+)$/))) return 'u_' + m[1];
    if ((m = path.match(/^\/party\/([A-Za-z0-9]{4,10})$/))) return 'p_' + m[1].toUpperCase();
    return '';
}
// Dipanggil sekali setelah login: buka konten sesuai start_param
function handleStartParamDeepLink(forced) {
    var tg = tgWebApp(); var sp = forced || (tg && tg.initDataUnsafe ? tg.initDataUnsafe.start_param : null);
    if (!sp) return false;
    var target = startParamToTarget(sp); if (!target) return false;
    try { if (!forced && sessionStorage.getItem('fesstale_deeplink_done') === sp) return false; sessionStorage.setItem('fesstale_deeplink_done', sp); } catch (e) {}
    if (target.party) { navigate('party'); doJoinParty(target.party); }
    else if (target.couple) { state.coupleJoinCode = target.couple; navigate('couple'); }
    else if (target.dice) { state.diceJoinCode = target.dice; navigate('dice'); }
    else navigate(target.page);
    return true;
}
function shareGalleryDetail(postId) { shareLink(appLink('s_' + postId, '/story?id=' + postId), 'Lihat story ini di Fesstale Movie ✨'); }
function shareProfile() { if (!state.user) return; shareUserProfile(state.user.username); }
function shareUserProfile(username) { shareLink(appLink('u_' + username, '/@' + username), 'Lihat profil @' + username + ' di Fesstale Movie'); }
function shareSeries() { var s = state.currentSeries; if (!s) return; shareLink(appLink('v_' + s.id, '/view?id=' + s.id), 'Nonton ' + s.title + ' di Fesstale Movie 🎬'); }
function shareParty() { if (!currentParty) return; shareLink(appLink('p_' + currentParty.code, '/party/' + currentParty.code), 'Nobar bareng yuk! Masuk room party-ku di Fesstale Movie 🍿 Kode: ' + currentParty.code); }
function copyToClipboard(text) {
    function done() { showToast('Berhasil disalin!', 'success'); }
    function fallback() {
        try { var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:-1000px;opacity:0;'; document.body.appendChild(ta); ta.select(); var okCopy = document.execCommand && document.execCommand('copy'); document.body.removeChild(ta); if (okCopy) done(); else showToast('Gagal menyalin', 'error'); }
        catch (e) { showToast('Gagal menyalin', 'error'); }
    }
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done).catch(fallback); return; } } catch (e) {}
    fallback();
}

// Indikator koneksi + sambung ulang otomatis saat Mini App dibuka kembali
var connHiddenAt = 0;
function showConnPill(text, kind, sticky) {
    var el = document.getElementById('connPill');
    if (!el) { el = document.createElement('div'); el.id = 'connPill'; document.body.appendChild(el); }
    var icon = kind === 'off' ? 'fa-plug-circle-xmark' : (kind === 'wait' ? 'fa-rotate fa-spin' : 'fa-circle-check');
    el.className = 'conn-pill show ' + (kind || 'ok');
    el.innerHTML = '<i class="fa-solid ' + icon + '"></i><span>' + escapeHtml(text) + '</span>';
    if (el._timer) clearTimeout(el._timer);
    if (!sticky) el._timer = setTimeout(function () { el.classList.remove('show'); }, 2600);
}
async function reconnectSession(showOk) {
    if (!state.token) return false;
    var me = await apiCall('/api/auth/me');
    if (me && me.success && me.data) {
        state.user = me.data; try { localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } catch (e) {}
        updateAuthUI(); if (showOk) showConnPill('Terhubung kembali ke Telegram', 'ok'); return true;
    }
    if (me && me.error === 'Network error') { showConnPill('Koneksi terputus', 'off', true); return false; }
    // sesi kedaluwarsa: login ulang otomatis lewat data Telegram
    showConnPill('Menghubungkan ulang…', 'wait', true);
    var r = await initTelegramWebApp();
    if (r && r.ok) { updateAuthUI(); showConnPill('Terhubung kembali ke Telegram', 'ok'); return true; }
    showConnPill('Gagal terhubung. Buka ulang Mini App', 'off');
    return false;
}
function onAppResume(force) {
    var away = connHiddenAt ? Date.now() - connHiddenAt : 0; connHiddenAt = 0;
    if (!force && away < 30000) return;             // baru sebentar ditinggal: tidak perlu apa-apa
    reconnectSession(true);
    try { loadStoryBadge(); } catch (e) {}
    if (state.currentPage === 'couple') { try { loadCoupleState(true); } catch (e) {} }
}
function initConnectionWatch() {
    if (window.__fesstaleConnWatch) return; window.__fesstaleConnWatch = true;
    window.addEventListener('offline', function () { showConnPill('Koneksi terputus', 'off', true); });
    window.addEventListener('online', function () { reconnectSession(true); });
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') connHiddenAt = Date.now(); else onAppResume(false); });
    try { var tg = tgWebApp(); if (tg && tg.onEvent) { tg.onEvent('deactivated', function () { connHiddenAt = Date.now(); }); tg.onEvent('activated', function () { onAppResume(false); }); } } catch (e) {}
}

/* ============================================================
   PENCARIAN: SERIES / USER
   ============================================================ */
var userSearchSeq = 0;
function setSearchMode(mode) {
    state.searchMode = mode === 'user' ? 'user' : 'series';
    document.querySelectorAll('#searchModeSeg .search-seg-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.mode === state.searchMode); });
    var input = document.getElementById('searchInput'); if (!input) return;
    input.placeholder = state.searchMode === 'user' ? 'Cari user (nama atau @username)...' : 'Cari drakor series...';
    var qv = input.value.trim(); if (qv.length >= 2) performSearch(qv, 1);
    try { input.focus(); } catch (e) {}
}
function renderUserResultRow(u) {
    var av = renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 48 });
    var chips = (u.role === 'admin' ? '<span class="fbp-chip fbp-chip-admin"><i class="fa-solid fa-crown"></i>Admin</span>' : '') + (u.isVip ? '<span class="fbp-chip fbp-chip-vip"><i class="fa-solid fa-star"></i>VIP</span>' : '');
    return '<div class="user-result" role="button" tabindex="0" onclick="navigate(\'user/' + escapeAttr(u.username) + '\')"><span class="user-result-av">' + av + '</span><span class="user-result-body"><span class="user-result-name">' + escapeHtml(u.displayName || u.username) + (u.isVerified ? verifiedSvgSize('sm') : '') + chips + '</span><span class="user-result-meta">@' + escapeHtml(u.username) + ' · Lv ' + (u.level || 1) + '</span>' + (u.bio ? '<span class="user-result-bio">' + escapeHtml(u.bio) + '</span>' : '') + '</span><i class="fa-solid fa-chevron-right user-result-go"></i></div>';
}
async function performUserSearch(query, page) {
    query = String(query || '').trim().replace(/^@/, '');
    if (query.length < 2) { if (state.currentPage === 'search') navigate('home'); return; }
    page = page || 1; state.currentPage = 'search'; var seq = ++userSearchSeq;
    var app = document.getElementById('app'); app.innerHTML = renderSkeleton();
    var data = await apiCall('/api/users/search?q=' + encodeURIComponent(query) + '&page=' + page);
    if (seq !== userSearchSeq) return;
    if (!data.success) { app.innerHTML = '<div class="card p-8 text-center"><p class="text-sm" style="color: var(--danger);">' + escapeHtml(data.error || 'Gagal mencari user') + '</p></div>'; return; }
    var users = data.data.users || [];
    var head = '<div class="mb-4"><h1 class="text-xl font-bold font-display mb-1">Cari User</h1><p class="text-sm" style="color: var(--text-secondary);">' + (data.data.total || 0) + ' user untuk "' + escapeHtml(query) + '"</p></div>';
    if (!users.length) { app.innerHTML = head + '<div class="card p-8 text-center"><i class="fa-solid fa-user-slash text-3xl mb-3" style="color: var(--text-muted);"></i><p class="text-sm" style="color: var(--text-secondary);">User tidak ditemukan</p></div>'; return; }
    app.innerHTML = head + '<div class="user-results">' + users.map(renderUserResultRow).join('') + '</div>' + renderPaginationWithFn(page, data.data.totalPages, function (p) { return 'performUserSearch(\'' + escapeAttr(query) + '\', ' + p + ')'; });
}

/* ============================================================
   PROFIL ALA FACEBOOK
   ============================================================ */
function renderFbProfileHeader(u, opts) {
    opts = opts || {}; var isSelf = !!opts.isSelf;
    var nameRaw = u.displayName || u.username || 'User'; var uname = escapeAttr(u.username);
    var coverAttr = u.coverUrl ? ' style="background-image:url(\'' + u.coverUrl + '\');" onclick="openImagePreview(\'' + u.coverUrl + '\')"' : '';
    var coverBtn = isSelf ? '<button type="button" class="fbp-cover-btn" onclick="event.stopPropagation(); openCoverEditor()"><i class="fa-solid fa-camera"></i><span>Edit sampul</span></button>' : '';
    var avatar = renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 104, onClick: u.avatarUrl ? 'openImagePreview(\'' + u.avatarUrl + '\')' : '' });
    var avatarCam = isSelf ? '<button type="button" class="fbp-avatar-cam" onclick="openAvatarEditor()" aria-label="Ganti foto profil"><i class="fa-solid fa-camera"></i></button>' : '';
    var chips = '';
    if (u.role === 'admin') chips += '<span class="fbp-chip fbp-chip-admin"><i class="fa-solid fa-crown"></i>Admin</span>';
    if (u.isVip) chips += '<span class="fbp-chip fbp-chip-vip"><i class="fa-solid fa-star"></i>VIP</span>';
    if (!chips) chips = '<span class="fbp-chip">Member</span>';
    if (!isSelf && u.followsMe) chips += '<span class="fbp-chip">Mengikutimu</span>';
    var storyCount = u.galleryCount != null ? u.galleryCount : (u.gallery ? u.gallery.length : null);
    var statsHtml = '<div class="fbp-stat"><b id="fbpStoryCount">' + (storyCount == null ? '–' : storyCount) + '</b><span>Story</span></div>' +
        '<button type="button" class="fbp-stat fbp-stat-btn" onclick="openFollowList(\'' + uname + '\', \'followers\')"><b id="fbpFollowers">' + formatViews(u.followersCount || 0) + '</b><span>Pengikut</span></button>' +
        '<button type="button" class="fbp-stat fbp-stat-btn" onclick="openFollowList(\'' + uname + '\', \'following\')"><b>' + formatViews(u.followingCount || 0) + '</b><span>Mengikuti</span></button>' +
        '<div class="fbp-stat"><b>' + (u.giftsCount || 0) + '</b><span>Gift</span></div>';
    var actions;
    if (isSelf) actions = '<button type="button" class="fbp-btn fbp-btn-primary" onclick="openEditProfile()"><i class="fa-solid fa-pen"></i>Edit profil</button><button type="button" class="fbp-btn" onclick="shareProfile()"><i class="fa-solid fa-share"></i>Bagikan</button><button type="button" class="fbp-btn fbp-btn-icon" onclick="openShopModal()" aria-label="Toko"><i class="fa-solid fa-store"></i></button>';
    else actions = (state.user ? followBtnHtml(u.id, !!u.isFollowing, !!u.followsMe) + '<button type="button" class="fbp-btn" onclick="openGiftModal(' + u.id + ', \'' + escapeAttr(nameRaw) + '\')"><i class="fa-solid fa-gift"></i>Kirim Gift</button>' : '') + '<button type="button" class="fbp-btn fbp-btn-icon" onclick="shareUserProfile(\'' + uname + '\')" aria-label="Bagikan profil"><i class="fa-solid fa-share"></i></button>';
    var levelPct = u.nextLevelExp ? Math.min(100, ((u.exp || 0) / u.nextLevelExp) * 100) : 100;
    var levelIcon = renderLevelPhoto(u.levelUrl, 22) || '<i class="fa-solid fa-star"></i>';
    function row(icon, html, extra) { return '<div class="fbp-detail' + (extra ? ' ' + extra.cls : '') + '"' + (extra && extra.onclick ? ' onclick="' + extra.onclick + '"' : '') + '><span class="fbp-detail-ic">' + icon + '</span><div class="fbp-detail-body">' + html + '</div></div>'; }
    var details = row(levelIcon, '<p>Level <b>' + (u.level || 1) + '</b> · ' + formatKoin(u.exp || 0) + (u.nextLevelExp ? ' / ' + formatKoin(u.nextLevelExp) : '') + ' EXP</p><div class="level-bar"><div class="level-bar-fill" style="width:' + levelPct + '%"></div></div>');
    if (isSelf) details += row('<i class="fa-solid fa-coins" style="color:#d97706;"></i>', '<p>Koin <b>' + formatKoin(u.koin || 0) + '</b></p>');
    if (u.couple && u.couple.partner) details += row('<i class="fa-solid fa-heart" style="color:#ec4899;"></i>', '<p>Berpasangan dengan <b>' + escapeHtml(u.couple.partner.displayName || u.couple.partner.username) + '</b> · 🔥 ' + (u.couple.streak || 0) + ' hari</p>', { cls: 'is-link', onclick: 'navigate(\'user/' + escapeAttr(u.couple.partner.username) + '\')' });
    if (isSelf && u.telegramId) details += row('<i class="fa-brands fa-telegram" style="color:#229ED9;"></i>', '<p>Telegram <b>@' + escapeHtml(u.telegram || '-') + '</b></p>');
    if (isSelf && u.isVip && u.vipExpiresAt) details += row('<i class="fa-solid fa-crown" style="color:#d97706;"></i>', '<p>VIP sampai <b>' + escapeHtml(u.vipExpiresAtWIB || '-') + '</b></p>');
    if (isSelf && !u.isVip && u.dailyWatch && u.dailyWatch.freeLimit) details += row('<i class="fa-solid fa-eye" style="color:#059669;"></i>', '<p>Nonton gratis hari ini <b>' + (u.dailyWatch.used || 0) + '/' + u.dailyWatch.freeLimit + '</b></p>');
    details += row('<i class="fa-solid fa-clock"></i>', '<p>Bergabung <b>' + escapeHtml(u.createdAtWIB || '-') + '</b></p>');
    return '<div class="card overflow-hidden mb-4 profile-card fbp">' +
        '<div class="fbp-cover"' + coverAttr + '>' + coverBtn + '</div>' +
        '<div class="fbp-body"><div class="fbp-avatar">' + avatar + avatarCam + '</div>' +
        '<h2 class="fbp-name">' + escapeHtml(nameRaw) + (u.isVerified ? verifiedSvgSize('lg') : '') + '</h2>' +
        '<p class="fbp-username">@' + escapeHtml(u.username) + chips + '</p>' +
        (u.bio ? '<p class="fbp-bio">' + escapeHtml(u.bio) + '</p>' : '') +
        '<div class="fbp-stats">' + statsHtml + '</div>' +
        '<div class="fbp-actions">' + actions + '</div>' +
        '<div class="fbp-details"><p class="fbp-details-title">Detail</p>' + details + '</div></div></div>';
}

/* ============================================================
   STORY ALA FACEBOOK (composer, tray cerita, feed postingan)
   ============================================================ */
function renderFbStoriesTray(posts) {
    var me = state.user || {}; var seen = {}; var items = [];
    (posts || []).forEach(function (p) { if (seen[p.user_id] || items.length >= 12) return; seen[p.user_id] = 1; items.push(p); });
    var top = me.avatarUrl ? '<img src="' + me.avatarUrl + '" alt="" decoding="async">' : '<span class="fb-story-initial" style="background:' + getAvatarColor(me.username) + ';">' + escapeHtml(String(me.username || '?').charAt(0).toUpperCase()) + '</span>';
    var create = '<div class="fb-story fb-story-create" role="button" tabindex="0" onclick="openUploadGallery()"><span class="fb-story-create-top">' + top + '</span><span class="fb-story-plus"><i class="fa-solid fa-plus"></i></span><span class="fb-story-create-label">Buat cerita</span></div>';
    return create + items.map(function (p) {
        var media = p.mediaUrls || (p.image_url ? [p.image_url] : []); var first = media[0] || '';
        var av = renderMLBBAvatar({ username: p.username, avatarUrl: p.avatar_url, borderUrl: p.border_url, borderScale: p.border_scale || 1.2, size: 34 });
        var act = p.locked ? 'promptBuyGallery(' + p.id + ', ' + (p.price || 0) + ')' : 'navigate(\'gallery-detail/' + p.id + '\')';
        return '<div class="fb-story' + (p.locked ? ' is-locked' : '') + '" role="button" tabindex="0" onclick="' + act + '">' + (first ? '<img class="fb-story-bg" src="' + first + '" alt="" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false">' : '') + '<span class="fb-story-shade"></span><span class="fb-story-avatar">' + av + '</span>' + (p.locked ? '<span class="fb-story-lock"><i class="fa-solid fa-lock"></i></span>' : '') + '<span class="fb-story-name">' + escapeHtml(p.display_name || p.username) + '</span></div>';
    }).join('');
}
function renderFbFeedShell() {
    var me = state.user || {};
    var myAv = renderMLBBAvatar({ username: me.username, avatarUrl: me.avatarUrl, borderUrl: me.borderUrl, borderScale: me.borderScale || 1.2, size: 40, onClick: 'navigate(\'profile\')' });
    var first = escapeHtml(String(me.displayName || me.username || '').split(' ')[0]);
    return '<div class="fb-feed-wrap">' +
        '<div class="fb-composer"><div class="fb-composer-av">' + myAv + '</div><button type="button" class="fb-composer-input" onclick="openUploadGallery()">Apa ceritamu hari ini' + (first ? ', ' + first : '') + '?</button><button type="button" class="fb-composer-photo" onclick="openUploadGallery()" aria-label="Upload foto"><i class="fa-solid fa-images"></i></button></div>' +
        '<div id="fbStoriesTray" class="fb-stories scrollbar-hide">' + renderFbStoriesTray([]) + '</div>' +
        '<div class="fb-feed-bar"><h1 class="fb-feed-title">Story</h1><div class="fb-feed-tabs"><button type="button" onclick="switchGalleryTab(\'all\')" class="tab-btn ' + (state.galleryTab === 'saved' ? '' : 'active') + '"><i class="fa-solid fa-earth-asia mr-1"></i>Semua</button><button type="button" onclick="switchGalleryTab(\'saved\')" class="tab-btn ' + (state.galleryTab === 'saved' ? 'active' : '') + '"><i class="fa-solid fa-bookmark mr-1"></i>Tersimpan</button></div></div>' +
        '<div class="fb-feed-search"><i class="fa-solid fa-magnifying-glass"></i><input type="text" id="gallerySearch" class="input-modern" placeholder="Cari story..." oninput="searchGallery()"></div>' +
        '<div id="galleryMasonry" class="fb-feed"><div class="fb-skel"><div class="skeleton" style="height:44px;margin:12px;"></div><div class="skeleton" style="height:260px;border-radius:0;"></div></div></div></div>';
}
function renderFbPostMedia(p, media) {
    if (!media.length) return '';
    function img(url, extra) { return '<img src="' + url + '" alt="" loading="lazy" decoding="async" oncontextmenu="return false;" draggable="false"' + (extra || '') + '>'; }
    if (p.locked) {
        return '<div class="fb-media fb-media-locked" onclick="promptBuyGallery(' + p.id + ', ' + (p.price || 0) + ')">' + img(media[0], ' class="fb-locked-img"') + '<div class="fb-lock"><span class="fb-lock-icon"><i class="fa-solid fa-lock"></i></span><span class="fb-lock-price"><i class="fa-solid fa-coins"></i>' + formatKoin(p.price || 0) + ' koin</span><span class="fb-lock-hint">Ketuk untuk membuka' + (media.length > 1 ? ' · ' + media.length + ' foto' : '') + '</span></div></div>';
    }
    var n = media.length;
    var tiles = media.slice(0, 4).map(function (u, i) { return '<div class="fb-media-tile" onclick="openFeedMedia(this, ' + i + ')">' + img(u) + ((i === 3 && n > 4) ? '<span class="fb-media-more">+' + (n - 4) + '</span>' : '') + '</div>'; }).join('');
    return '<div class="fb-media fb-media-' + Math.min(n, 4) + '" data-media="' + escapeAttrValue(JSON.stringify(media)) + '">' + tiles + '<div class="gallery-watermark-subtle"><span class="gallery-watermark-subtle-text">FESSTALE</span></div></div>';
}
function renderGalleryItemHtml(p, isAdmin) {
    var goUser = 'navigate(\'user/' + escapeAttr(p.username) + '\')';
    var avatar = renderMLBBAvatar({ username: p.username, avatarUrl: p.avatar_url, borderUrl: p.border_url, borderScale: p.border_scale || 1.2, size: 40, onClick: goUser });
    var media = p.mediaUrls || (p.image_url ? [p.image_url] : []);
    var followBtn = (state.user && !p.isOwner && p.isFollowing === false && p.user_id !== state.user.id) ? '<button type="button" class="fb-follow-btn" data-follow-user="' + p.user_id + '" onclick="followFromFeed(' + p.user_id + ', this)"><i class="fa-solid fa-plus"></i>Ikuti</button>' : '';
    var priceChip = p.price > 0 ? '<span class="fb-post-price"><i class="fa-solid fa-coins"></i>' + formatKoin(p.price) + '</span>' : '';
    var adminDel = isAdmin ? '<button type="button" class="fb-post-menu" onclick="adminDeleteGallery(' + p.id + ')" aria-label="Hapus story"><i class="fa-solid fa-trash"></i></button>' : '';
    var header = '<div class="fb-post-head">' + avatar + '<div class="fb-post-who"><p class="fb-post-name" onclick="' + goUser + '">' + escapeHtml(p.display_name || p.username) + (p.is_verified ? verifiedSvgSize('sm') : '') + renderLevelPhoto(p.level_url, 18) + '</p><p class="fb-post-time">' + formatDateWIB(p.created_at) + ' · <i class="fa-solid fa-earth-asia"></i></p></div>' + followBtn + priceChip + adminDel + '</div>';
    var caption = p.description ? '<p class="fb-post-caption">' + escapeHtml(p.description) + '</p>' : '';
    var right = (p.comments_count != null ? p.comments_count + ' komentar · ' : '') + '<b data-count="save">' + (p.saves_count || 0) + '</b> disimpan' + (p.price > 0 && p.purchase_count ? ' · ' + p.purchase_count + ' dibeli' : '');
    var counts = '<div class="fb-post-counts"><span><span class="fb-like-dot"><i class="fa-solid fa-heart"></i></span><b data-count="like">' + (p.likes_count || 0) + '</b></span><span>' + right + '</span></div>';
    var actions = '<div class="fb-post-actions">' +
        '<button type="button" data-act="like" class="fb-act' + (p.userLiked ? ' is-liked' : '') + '" onclick="galleryAction(' + p.id + ', \'like\')"><i class="fa-' + (p.userLiked ? 'solid' : 'regular') + ' fa-heart"></i><span>Suka</span></button>' +
        '<button type="button" class="fb-act" onclick="navigate(\'gallery-detail/' + p.id + '\')"><i class="fa-regular fa-comment"></i><span>Komentar</span></button>' +
        '<button type="button" data-act="save" class="fb-act' + (p.userSaved ? ' is-saved' : '') + '" onclick="galleryAction(' + p.id + ', \'save\')"><i class="fa-' + (p.userSaved ? 'solid' : 'regular') + ' fa-bookmark"></i><span>Simpan</span></button>' +
        '<button type="button" class="fb-act" onclick="shareGalleryDetail(' + p.id + ')"><i class="fa-solid fa-share"></i><span>Bagikan</span></button></div>';
    return '<article class="fb-post" data-post-id="' + p.id + '">' + header + caption + renderFbPostMedia(p, media) + counts + actions + '</article>';
}
// Suka/Simpan: perbarui satu postingan saja (tanpa memuat ulang seluruh feed)
async function refreshFeedPost(postId) {
    var el = document.querySelector('.fb-post[data-post-id="' + postId + '"]');
    if (!el) { loadGallery(state.pagination.gallery); return; }
    var res = await apiCall('/api/gallery/' + postId);
    if (res.success && res.data && res.data.post && el.parentNode) {
        var tmp = document.createElement('div'); tmp.innerHTML = renderGalleryItemHtml(res.data.post, !!(state.user && state.user.role === 'admin'));
        if (tmp.firstChild) el.parentNode.replaceChild(tmp.firstChild, el);
    } else loadGallery(state.pagination.gallery);
}
var gallerySearchTimer = null;
function searchGallery() { clearTimeout(gallerySearchTimer); gallerySearchTimer = setTimeout(function () { loadGallery(1); }, 350); }

/* ============================================================
   PASANGAN + STREAK HARIAN
   ============================================================ */
var couplePollInterval = null; var coupleSig = '';
function stopCouplePoll() { if (couplePollInterval) { clearInterval(couplePollInterval); couplePollInterval = null; } }
function coupleAvatar(p, size) { p = p || {}; return renderMLBBAvatar({ username: p.username || '?', avatarUrl: p.avatarUrl, borderUrl: p.borderUrl, borderScale: p.borderScale || 1.2, size: size || 72 }); }
function renderStreakCard(c, opts) {
    opts = opts || {}; var compact = !!opts.compact; var streak = c.streak || 0; var tier = streakTier(streak);
    function person(p) {
        p = p || {};
        var st = p.checkedInToday ? '<span class="streak-check on"><i class="fa-solid fa-circle-check"></i>Check-in</span>' : '<span class="streak-check"><i class="fa-regular fa-clock"></i>Belum</span>';
        return '<div class="streak-person" onclick="event.stopPropagation(); navigate(\'user/' + escapeAttr(p.username || '') + '\')">' + coupleAvatar(p, compact ? 54 : 76) + '<p class="streak-name">' + escapeHtml(p.displayName || p.username || 'User') + (p.isVerified ? verifiedSvgSize('sm') : '') + '</p>' + st + '</div>';
    }
    var week = (c.week || []).map(function (d) {
        var both = d.me && d.partner, half = !both && (d.me || d.partner);
        return '<div class="streak-day' + (both ? ' both' : (half ? ' half' : '')) + (d.isToday ? ' today' : '') + '"><span class="streak-dot">' + (both ? '<i class="fa-solid fa-fire"></i>' : (half ? '<i class="fa-solid fa-heart"></i>' : '')) + '</span><span class="streak-day-label">' + escapeHtml(d.label || '') + '</span></div>';
    }).join('');
    var fxCount = [0, 0, 5, 8, 12][tier.id]; var fxIcons = tier.id >= 4 ? ['💎', '✨', '💖', '⭐'] : (tier.id === 3 ? ['✨', '⭐', '💛'] : ['💗', '✨']); var fx = '';
    for (var i = 0; i < fxCount; i++) fx += '<i style="left:' + ((i * 37 + 11) % 92 + 2) + '%;animation-delay:' + ((i * 0.7) % 4).toFixed(1) + 's;animation-duration:' + (3.6 + (i % 4) * 0.7).toFixed(1) + 's;">' + fxIcons[i % fxIcons.length] + '</i>';
    var nextTier = tier.next ? streakTier(tier.next) : null;
    var pct = tier.next ? Math.max(4, Math.round(((streak - tier.from) / (tier.next - tier.from)) * 100)) : 100;
    var nextHtml = '<div class="streak-next"><span>' + (nextTier ? (tier.next - streak) + ' hari lagi ke tier ' + nextTier.icon + ' ' + nextTier.name : 'Tier tertinggi tercapai 💎') + '</span><div class="streak-next-bar"><i style="width:' + pct + '%"></i></div></div>';
    return '<div class="streak-card tier-' + tier.id + (compact ? ' compact' : '') + (streak > 0 ? ' is-hot' : '') + '"' + (opts.onClick ? ' role="button" onclick="' + opts.onClick + '"' : '') + '>' +
        (tier.id >= 4 ? '<span class="streak-holo"></span>' : '') + (tier.id >= 2 ? '<span class="streak-shine"></span>' : '') + (fx ? '<span class="streak-fx">' + fx + '</span>' : '') +
        '<div class="streak-card-top"><span class="streak-brand"><i class="fa-solid fa-heart"></i>Kartu Streak</span><span class="streak-tier">' + tier.icon + ' ' + tier.name + '</span></div>' +
        '<div class="streak-pair">' + person(c.me) + '<div class="streak-center"><span class="streak-flame">🔥</span><span class="streak-num">' + streak + '</span><span class="streak-label">hari streak</span></div>' + person(c.partner) + '</div>' +
        (compact ? '' : '<div class="streak-week">' + week + '</div>' + nextHtml) +
        '<div class="streak-foot"><span><i class="fa-solid fa-trophy"></i>Rekor ' + (c.bestStreak || 0) + ' hari</span><span><i class="fa-solid fa-calendar-days"></i>Bersama ' + (c.daysTogether || 1) + ' hari · Sejak ' + escapeHtml(c.pairedAtText || '-') + '</span></div></div>';
}

function renderCoupleBox(c) {
    var demo = !!window.FesstaleMock;
    if (!c) {
        return '<div class="couple-hero"><div class="couple-hero-emoji">💞</div><h2>Room Pasangan</h2><p>Buat room lalu bagikan kodenya ke doi. Begitu kalian berdua ada di room yang sama, kalian resmi berpasangan dan bisa bangun streak harian bareng.</p></div>' +
            '<div class="card p-4 mb-3"><h3 class="font-bold text-sm mb-1 flex items-center gap-2"><i class="fa-solid fa-plus" style="color:#ec4899;"></i>Buat Room Pasangan</h3><p class="text-xs mb-3" style="color:var(--text-muted);">Kamu dapat kode 6 karakter untuk dibagikan ke pasanganmu.</p><button type="button" onclick="createCoupleRoom()" class="btn-couple w-full"><i class="fa-solid fa-heart"></i>Buat Room</button></div>' +
            '<div class="card p-4 mb-3"><h3 class="font-bold text-sm mb-2 flex items-center gap-2"><i class="fa-solid fa-key" style="color:#ec4899;"></i>Masuk dengan Kode</h3><div class="flex gap-2"><input type="text" id="coupleJoinCode" class="input-modern flex-1" placeholder="KODE" maxlength="10" autocomplete="off" style="text-transform:uppercase;letter-spacing:4px;text-align:center;font-weight:800;font-size:16px;" onkeydown="if(event.key===\'Enter\')joinCoupleRoom()"><button type="button" onclick="joinCoupleRoom()" class="btn-couple" style="padding:12px 20px;" aria-label="Masuk room"><i class="fa-solid fa-arrow-right"></i></button></div></div>' +
            '<div class="couple-steps"><div><b>1</b><span>Buat room & bagikan kode</span></div><div><b>2</b><span>Pasangan masuk pakai kode</span></div><div><b>3</b><span>Check-in berdua tiap hari = streak +1 🔥</span></div></div>';
    }
    if (c.status === 'waiting') {
        return '<div class="card couple-wait"><div class="couple-wait-avatars">' + coupleAvatar(c.me, 72) + '<span class="couple-wait-heart"><i class="fa-solid fa-heart"></i></span><span class="couple-wait-empty"><i class="fa-solid fa-question"></i></span></div>' +
            '<p class="couple-wait-title">Menunggu pasanganmu masuk<span class="couple-dots"><i></i><i></i><i></i></span></p><p class="text-xs" style="color:var(--text-muted);">Bagikan kode ini ke doi</p>' +
            '<div class="couple-code" role="button" onclick="copyToClipboard(\'' + escapeAttr(c.code) + '\')">' + escapeHtml(c.code) + '</div>' +
            '<div class="flex gap-2 w-full"><button type="button" onclick="copyToClipboard(\'' + escapeAttr(c.code) + '\')" class="btn-secondary flex-1"><i class="fa-regular fa-copy mr-1"></i>Salin Kode</button><button type="button" onclick="shareCouple()" class="btn-couple flex-1"><i class="fa-brands fa-telegram"></i>Undang</button></div>' +
            (demo ? '<button type="button" class="couple-demo" onclick="FesstaleMock.partnerJoin(); coupleSig=\'\'; loadCoupleState(false)">Mode demo: simulasikan pasangan masuk</button>' : '') +
            '<button type="button" onclick="endCouple(true)" class="couple-cancel">Batalkan room</button></div>';
    }
    var me = c.me || {}, pt = c.partner || {}; var ptName = escapeHtml(pt.displayName || pt.username || 'pasanganmu');
    var title, desc, btn;
    if (c.bothCheckedInToday) { title = 'Streak hari ini aman 🔥'; desc = 'Kalian berdua sudah check-in. Balik lagi besok ya!'; btn = '<button type="button" id="coupleCheckinBtn" class="btn-couple w-full" disabled><i class="fa-solid fa-circle-check"></i>Sudah check-in berdua</button>'; }
    else if (me.checkedInToday) { title = 'Kamu sudah check-in ✓'; desc = 'Menunggu ' + ptName + ' check-in supaya streak bertambah.'; btn = '<button type="button" id="coupleCheckinBtn" class="btn-couple w-full" disabled><i class="fa-regular fa-clock"></i>Menunggu pasangan</button>'; }
    else { title = 'Check-in hari ini 💖'; desc = pt.checkedInToday ? ptName + ' sudah check-in. Giliranmu — streak langsung bertambah!' : 'Streak bertambah 1 hari setelah kalian berdua check-in.'; btn = '<button type="button" id="coupleCheckinBtn" onclick="coupleCheckin()" class="btn-couple w-full"><i class="fa-solid fa-heart"></i>Check-in Sekarang</button>'; }
    return renderStreakCard(c) +
        '<div class="card couple-checkin"><p class="couple-checkin-title">' + title + '</p><p class="couple-checkin-desc">' + desc + '</p>' + btn +
        (demo && !pt.checkedInToday ? '<button type="button" class="couple-demo" onclick="FesstaleMock.partnerCheckin(); coupleSig=\'\'; loadCoupleState(false)">Mode demo: simulasikan pasangan check-in</button>' : '') + '</div>' +
        rdEntryHtml(c) +
        '<div class="flex gap-2 mb-3"><button type="button" onclick="downloadStreakCard()" class="btn-couple flex-1" id="streakDownloadBtn"><i class="fa-solid fa-download"></i>Unduh JPG</button><button type="button" onclick="shareCouple()" class="btn-secondary flex-1"><i class="fa-solid fa-share mr-1"></i>Bagikan</button></div>' +
        '<button type="button" onclick="endCouple(false)" class="couple-cancel">Akhiri hubungan</button>';
}
async function loadCoupleState(silent) {
    var box = document.getElementById('coupleBox'); if (!box) return;
    var res = await apiCall('/api/couple');
    if (!res.success) { if (!silent) box.innerHTML = '<div class="card p-6 text-center"><p class="text-sm" style="color:var(--danger);">' + escapeHtml(res.error || 'Gagal memuat data pasangan') + '</p></div>'; return; }
    var c = res.data ? res.data.couple : null;
    var sig = c ? [c.status, c.code, c.streak, c.partner ? c.partner.id : 0, (c.me && c.me.checkedInToday) ? 1 : 0, (c.partner && c.partner.checkedInToday) ? 1 : 0, c.today, c.game ? c.game.status + (c.game.invited ? 'i' : '') : '-'].join('|') : 'none';
    if (silent && sig === coupleSig) return;
    var prev = coupleSig; coupleSig = sig; state.couple = c;
    box.innerHTML = renderCoupleBox(c);
    if (silent && c && c.game && c.game.invited && prev.indexOf('lobbyi') === -1) { showToast('🎲 Pasanganmu mengajak main Random Dice!', 'info'); try { haptic('medium'); } catch (e) {} }
    if (silent && c && c.status === 'active' && prev.indexOf('waiting') === 0) { showToast('💞 Pasanganmu sudah masuk! Kalian resmi berpasangan', 'success'); try { haptic('heavy'); } catch (e) {} }
    if (!c && state.coupleJoinCode) { var ci = document.getElementById('coupleJoinCode'); if (ci) { ci.value = state.coupleJoinCode; showToast('Kode pasangan terisi. Ketuk tombol panah untuk masuk', 'info'); } state.coupleJoinCode = null; }
}
async function renderCouplePage() {
    stopCouplePoll(); coupleSig = '';
    var app = document.getElementById('app');
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><i class="fa-solid fa-heart text-4xl mb-4" style="color: var(--text-muted);"></i><p class="mb-4" style="color: var(--text-secondary);">Login untuk membuka Room Pasangan</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    app.innerHTML = renderRoomTabs('couple') + '<div class="room-head"><div><h1 class="room-title">Room Pasangan</h1><p class="room-sub">Check-in berdua tiap hari untuk menjaga streak.</p></div><button type="button" onclick="openStreakLeaderboard()" class="btn-secondary" style="padding:8px 14px;font-size:12px;"><i class="fa-solid fa-fire mr-1" style="color:#f97316;"></i>Rank Streak</button></div><div id="coupleBox"><div class="skeleton" style="height:260px;border-radius:24px;"></div></div>';
    await loadCoupleState(false);
    couplePollInterval = setInterval(function () { if (state.currentPage !== 'couple' || document.hidden) return; loadCoupleState(true); }, 5000);
}
async function createCoupleRoom() {
    var r = await apiCall('/api/couple/create', { method: 'POST' });
    if (r.success) { showToast(r.message || 'Room pasangan dibuat', 'success'); coupleSig = ''; loadCoupleState(false); } else showToast(r.error || 'Gagal membuat room', 'error');
}
async function joinCoupleRoom() {
    var input = document.getElementById('coupleJoinCode'); var code = input ? String(input.value || '').trim().toUpperCase() : '';
    if (code.length < 4) { showToast('Masukkan kode room pasangan', 'error'); return; }
    var r = await apiCall('/api/couple/join', { method: 'POST', body: JSON.stringify({ code: code }) });
    if (r.success) { showToast(r.message || 'Kalian resmi berpasangan 💞', 'success'); try { haptic('heavy'); } catch (e) {} coupleSig = ''; loadCoupleState(false); } else showToast(r.error || 'Gagal masuk room', 'error');
}
async function coupleCheckin() {
    var btn = document.getElementById('coupleCheckinBtn'); if (btn) btn.disabled = true;
    var r = await apiCall('/api/couple/checkin', { method: 'POST' });
    if (r.success) { showToast(r.message || 'Check-in berhasil', 'success'); try { haptic(r.data && r.data.streakUp ? 'heavy' : 'medium'); } catch (e) {} coupleSig = ''; loadCoupleState(false); }
    else { showToast(r.error || 'Gagal check-in', 'error'); if (btn) btn.disabled = false; }
}
async function endCouple(isWaiting) {
    if (!confirm(isWaiting ? 'Batalkan room pasangan ini?' : 'Yakin akhiri hubungan? Streak kalian akan hilang.')) return;
    var r = await apiCall('/api/couple', { method: 'DELETE' });
    if (r.success) { showToast(r.message || 'Selesai', 'info'); coupleSig = ''; loadCoupleState(false); } else showToast(r.error || 'Gagal', 'error');
}
function shareCouple() {
    var c = state.couple; if (!c || !state.user) return;
    if (c.status === 'waiting') shareLink(appLink('c_' + c.code, '/couple'), 'Masuk room pasanganku di Fesstale Movie 💞 Kode: ' + c.code);
    else shareLink(appLink('u_' + state.user.username, '/@' + state.user.username), '🔥 Streak ' + (c.streak || 0) + ' hari bareng ' + ((c.partner && (c.partner.displayName || c.partner.username)) || 'pasanganku') + ' di Fesstale Movie 💞');
}
// Kartu streak ringkas di profil sendiri
async function loadCoupleProfileSlot() {
    var res = await apiCall('/api/couple');
    var slot = document.getElementById('coupleProfileSlot'); if (!slot || !res.success) return;
    var c = res.data ? res.data.couple : null;
    slot.innerHTML = (c && c.status === 'active') ? renderStreakCard(c, { compact: true, onClick: 'navigate(\'couple\')' }) : '';
}
function openStreakLeaderboard() {
    state.leaderboardCategory = 'streak';
    document.getElementById('leaderboardModal').classList.remove('hidden'); document.body.style.overflow = 'hidden';
    changeLbCategory('streak');
}
async function loadCoupleLeaderboard(page, container) {
    page = parseInt(page) || 1;
    try {
        var res = await apiCall('/api/couple/leaderboard?page=' + page + '&limit=20');
        if (state.leaderboardCategory !== 'streak') return;
        if (!res || !res.success) { container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Gagal memuat rank streak</p>'; return; }
        var d = res.data || {}; var list = d.couples || []; var html = '';
        function row(c, pinned) {
            var a = c.a || {}, b = c.b || {}; var rank = c.rank;
            var medal = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : (pinned ? '#' + rank : rank)));
            var rc = rank === 1 ? 'gold' : (rank === 2 ? 'silver' : (rank === 3 ? 'bronze' : 'normal'));
            return '<div class="couple-rank-item' + (c.isMine ? ' is-mine' : '') + '"><div class="leaderboard-rank ' + rc + '">' + medal + '</div><div class="couple-rank-avatars"><span onclick="closeLeaderboardModal(); navigate(\'user/' + escapeAttr(a.username || '') + '\')">' + coupleAvatar(a, 40) + '</span><span class="couple-rank-heart"><i class="fa-solid fa-heart"></i></span><span onclick="closeLeaderboardModal(); navigate(\'user/' + escapeAttr(b.username || '') + '\')">' + coupleAvatar(b, 40) + '</span></div><div class="couple-rank-body"><p class="couple-rank-names">' + escapeHtml(a.displayName || a.username || '?') + ' <span>&amp;</span> ' + escapeHtml(b.displayName || b.username || '?') + '</p><p class="couple-rank-meta">Bersama ' + (c.daysTogether || 1) + ' hari · Rekor ' + (c.bestStreak || 0) + '</p></div><div class="couple-rank-streak"><span>🔥</span><b>' + (c.streak || 0) + '</b></div></div>';
        }
        if (!list.length) html = '<div class="text-center py-8"><div style="font-size:40px;">💞</div><p class="text-sm mt-2" style="color: var(--text-muted);">Belum ada pasangan di papan streak</p></div>';
        else { html = '<div class="couple-rank-list">' + list.map(function (c) { return row(c, false); }).join('') + '</div>'; if ((d.totalPages || 1) > 1) html += renderPaginationWithFn(page, d.totalPages, function (p) { return 'loadLeaderboard(' + p + ')'; }); }
        if (d.myCouple) html += '<div class="leaderboard-my-rank mt-4 sticky bottom-0" style="z-index:20;">' + row(d.myCouple, true) + '</div>';
        else html += '<button type="button" class="btn-couple w-full mt-4" onclick="closeLeaderboardModal(); navigate(\'couple\')"><i class="fa-solid fa-heart"></i>Buat Room Pasangan</button>';
        container.innerHTML = html;
    } catch (e) { console.error('Couple leaderboard error:', e); container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Terjadi kesalahan. Coba lagi.</p>'; }
}

/* ============================================================
   RANDOM DICE: pintu masuk di halaman Pasangan
   ============================================================ */
function rdEntryHtml(c) {
    var gm = c && c.game; var invited = !!(gm && gm.invited); var active = !!gm;
    var sub = invited ? 'Pasanganmu mengajak main — ketuk untuk gabung!' : (active ? 'Game sedang berjalan — ketuk untuk kembali' : 'Game pertahanan berdua: lawan atau kerja sama');
    return '<div class="rd-entry' + (invited ? ' is-invited' : '') + '" role="button" tabindex="0" onclick="navigate(\'couple-game\')"><span class="rd-entry-icon">🎲</span><span class="rd-entry-body"><b>Random Dice</b><span>' + sub + '</span></span><span class="rd-entry-go">' + (invited ? 'Gabung' : (active ? 'Lanjut' : 'Main')) + '</span></div>';
}

/* ============================================================
   TOP UP KOIN — TELEGRAM STARS
   ============================================================ */
async function openTopupModal() {
    if (!state.user) { handleAuthButton(); return; }
    showInfoModal('Top Up Koin', '<div class="skeleton" style="height:170px;border-radius:16px;"></div>');
    var res = await apiCall('/api/topup/packages');
    var box = document.getElementById('infoContent'); if (!box) return;
    if (!res.success) { box.innerHTML = '<p class="text-sm text-center" style="color:var(--danger);">' + escapeHtml(res.error || 'Gagal memuat paket top up') + '</p>'; return; }
    var packs = res.data.packages || [];
    box.innerHTML = '<div class="topup"><div class="topup-balance"><span>Saldo kamu</span><b><i class="fa-solid fa-coins"></i>' + formatKoin(state.user.koin || 0) + '</b></div>' +
        '<p class="topup-rate">1.000 koin = 3 ⭐ Telegram Stars</p><div class="topup-list">' +
        packs.map(function (p) { return '<button type="button" class="topup-pack" data-pack="' + p.id + '" onclick="buyStars(\'' + p.id + '\')"><span class="topup-koin">' + formatKoin(p.koin) + '</span><span class="topup-label">koin</span><span class="topup-price">⭐ ' + p.stars + '</span></button>'; }).join('') +
        '</div><p class="topup-note">' + (res.data.demo ? 'Mode demo: pembayaran disimulasikan, tidak ada Stars yang terpotong.' : (res.data.available === false ? 'Top up belum aktif: bot Telegram belum dikonfigurasi.' : 'Pembayaran diproses oleh Telegram. Koin masuk otomatis setelah pembayaran berhasil.')) + '</p></div>';
}
function onTopupPaid(newKoin, added) {
    if (state.user && typeof newKoin === 'number') { state.user.koin = newKoin; try { localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } catch (e) {} updateAuthUI(); }
    showToast('✅ Top up berhasil: +' + formatKoin(added || 0) + ' koin', 'success');
    try { haptic('heavy'); } catch (e) {}
    try { closeInfoModal(); } catch (e) {}
    if (state.currentPage === 'profile') renderProfile();
}
async function waitTopupPaid(orderId, tries) {
    var s = await apiCall('/api/topup/stars/status?orderId=' + orderId);
    if (s.success && s.data.status === 'paid') { onTopupPaid(s.data.koin, s.data.added); return; }
    if (tries < 12) setTimeout(function () { waitTopupPaid(orderId, tries + 1); }, 1200);
    else showToast('Pembayaran diterima. Koin sedang diproses, cek lagi sebentar.', 'info');
}
async function buyStars(packId) {
    var btn = document.querySelector('.topup-pack[data-pack="' + packId + '"]'); if (btn) btn.disabled = true;
    var r = await apiCall('/api/topup/stars', { method: 'POST', body: JSON.stringify({ packageId: packId }) });
    if (btn) btn.disabled = false;
    if (!r.success) { showToast(r.error || 'Gagal membuat tagihan', 'error'); return; }
    var d = r.data; var tg = tgWebApp();
    if (d.demo) {
        var pay = await apiCall('/api/topup/stars/demo-pay', { method: 'POST', body: JSON.stringify({ orderId: d.orderId }) });
        if (pay.success) onTopupPaid(pay.data.koin, pay.data.added); else showToast(pay.error || 'Gagal', 'error');
        return;
    }
    if (d.invoiceLink && tg && tg.openInvoice && isRealTelegram()) {
        try {
            tg.openInvoice(d.invoiceLink, function (status) {
                if (status === 'paid') { showToast('Pembayaran berhasil, menambahkan koin…', 'info'); waitTopupPaid(d.orderId, 0); }
                else if (status === 'failed') showToast('Pembayaran gagal', 'error');
                else if (status === 'cancelled') showToast('Pembayaran dibatalkan', 'info');
            });
            return;
        } catch (e) {}
    }
    if (d.invoiceLink) { try { window.open(d.invoiceLink, '_blank'); } catch (e) {} showToast('Selesaikan pembayaran di Telegram', 'info'); waitTopupPaid(d.orderId, 0); }
}

/* ==== RANDOM DICE START (auto-sync dari worker/random-dice.js, jangan edit di sini) ==== */
/* ============================================================
   RANDOM DICE — game pertahanan berdua untuk Room Pasangan
   Sumber: worker/random-dice.js (disinkronkan otomatis ke worker/view.js
   oleh scripts/extract-html.mjs — edit di file ini, bukan di salinannya).

   BAGIAN 1  INTI   : logika murni tanpa DOM (dipakai juga oleh test & simulasi)
   BAGIAN 2  TAMPILAN: lobi, pilih dadu 30 detik, papan, sinkronisasi 2 pemain

   Aturan (meniru Random Dice):
   - Dipakai di Room Pasangan dan di room global berkode. Ada chat dan efek suara (WebAudio).
   - Papan 5x3. Panggil dadu acak dari 5 dadu pilihan (dari 20) memakai SP; harga naik tiap panggil.
   - Gabung 2 dadu yang jenis DAN jumlah matanya sama -> dadu acak dengan mata +1 (maks 7).
   - Mata dadu = jumlah serangan per putaran. Tiap jenis bisa di-upgrade (Lv 1-5) pakai SP.
   - Monster berjalan mengelilingi papan, tiap monster punya angka HP. Lolos = nyawa -1 (bos -2).
   - Stage berganti tiap 9 detik; tiap kelipatan 10 muncul bos dengan kemampuan khusus.
   ============================================================ */
var RD = {
    COLS: 5, ROWS: 3, SLOTS: 15, MAX_PIPS: 7,
    STAGE_SEC: 9, START_DELAY: 3, FINAL_STAGE: 30, BOSS_EVERY: 10,
    START_SP: 100, SUMMON_BASE: 10, SUMMON_STEP: 10,
    LIVES: 3, PICK_SECONDS: 30, DECK_SIZE: 5,
    POWER_COST: [100, 200, 400, 700], POWER_MULT: [1, 1.6, 2.4, 3.6, 5.4],
    HP_BASE: 100, HP_STEP: 42, HP_LATE: 1.12, BOSS_HP: 18, COOP_HP: 2, STEP: 0.05
};
// atk = kerusakan per serangan, spd = jeda antar serangan (detik) untuk dadu bermata 1
var RD_DICE = [
    { id: 'fire', emoji: '🔥', name: 'Api', color: '#ef4444', atk: 20, spd: 0.8, target: 'first', splash: 15, desc: 'Ledakan ikut melukai monster di dekat target' },
    { id: 'electric', emoji: '⚡', name: 'Listrik', color: '#eab308', atk: 25, spd: 0.7, target: 'first', chain: 3, desc: 'Menyambar ke 3 monster di belakang target' },
    { id: 'wind', emoji: '💨', name: 'Angin', color: '#22d3ee', atk: 30, spd: 0.45, target: 'first', desc: 'Kecepatan serang paling tinggi' },
    { id: 'poison', emoji: '☠️', name: 'Racun', color: '#84cc16', atk: 20, spd: 1.3, target: 'unpoisoned', poison: 40, desc: 'Meracuni: HP monster terus berkurang' },
    { id: 'ice', emoji: '❄️', name: 'Es', color: '#60a5fa', atk: 40, spd: 1.5, target: 'first', slow: 0.07, desc: 'Memperlambat monster (maks 50%)' },
    { id: 'iron', emoji: '⚙️', name: 'Besi', color: '#94a3b8', atk: 100, spd: 1.0, target: 'strong', bossMult: 2, desc: 'Mengincar HP terbesar, 2x ke bos' },
    { id: 'gamble', emoji: '🎲', name: 'Judi', color: '#a855f7', atk: 80, spd: 1.0, target: 'random', gambleMax: 160, desc: 'Kerusakan acak 1-160, target acak' },
    { id: 'lock', emoji: '🔒', name: 'Kunci', color: '#f97316', atk: 45, spd: 0.8, target: 'first', stun: 0.05, desc: '5% peluang membekukan monster 3 detik' },
    { id: 'crit', emoji: '💥', name: 'Kritis', color: '#ec4899', atk: 35, spd: 0.8, target: 'first', crit: 0.2, critMult: 5, desc: '20% peluang kerusakan 5x' },
    { id: 'light', emoji: '☀️', name: 'Cahaya', color: '#facc15', atk: 30, spd: 0.8, target: 'first', buff: 0.15, desc: 'Mempercepat dadu di sebelahnya' },
    { id: 'mine', emoji: '⛏️', name: 'Tambang', color: '#f59e0b', atk: 0, spd: 4, target: 'none', mine: 4, desc: 'Tidak menyerang; menghasilkan SP' },
    { id: 'typhoon', emoji: '🌪️', name: 'Topan', color: '#14b8a6', atk: 25, spd: 0.9, target: 'first', rage: 3, desc: 'Tiap 6 detik mengamuk: kecepatan 3x' },
    { id: 'death', emoji: '💀', name: 'Maut', color: '#64748b', atk: 30, spd: 1.2, target: 'first', kill: 0.02, desc: '2% peluang langsung membunuh (bukan bos)' },
    { id: 'bomb', emoji: '💣', name: 'Bom', color: '#b91c1c', atk: 50, spd: 1.8, target: 'first', splash: 50, splashRange: 0.1, desc: 'Lambat, tapi ledakannya luas' },
    { id: 'acid', emoji: '🧪', name: 'Asam', color: '#65a30d', atk: 20, spd: 1.0, target: 'first', vuln: 0.04, desc: 'Monster jadi menerima kerusakan lebih besar (maks +60%)' },
    { id: 'growth', emoji: '🌱', name: 'Tumbuh', color: '#22c55e', atk: 25, spd: 0.9, target: 'first', grow: 18, desc: 'Tiap 18 detik mata +1 dan berubah jenis' },
    { id: 'meteor', emoji: '☄️', name: 'Meteor', color: '#fb923c', atk: 35, spd: 2.5, target: 'first', all: true, desc: 'Menghantam semua monster sekaligus' },
    { id: 'joker', emoji: '🃏', name: 'Joker', color: '#d946ef', atk: 20, spd: 1.0, target: 'first', joker: true, desc: 'Gabung ke dadu lain bermata sama untuk menirunya' },
    { id: 'magnet', emoji: '🧲', name: 'Magnet', color: '#e11d48', atk: 25, spd: 1.0, target: 'first', knock: 0.1, desc: '10% peluang menarik monster mundur' },
    { id: 'arrow', emoji: '🏹', name: 'Panah', color: '#0ea5e9', atk: 30, spd: 0.7, target: 'first', nth: 5, nthMult: 5, desc: 'Serangan ke-5 selalu 5x' }
];
var RD_DIE_MAP = {};
(function () { for (var i = 0; i < RD_DICE.length; i++) RD_DIE_MAP[RD_DICE[i].id] = RD_DICE[i]; })();
var RD_BOSS = {
    snake: { name: 'Ular', emoji: '🐍', every: 2.5, info: 'memanggil anak buah' },
    silencer: { name: 'Pembungkam', emoji: '🤐', every: 5, info: 'mengunci dadu' },
    knight: { name: 'Ksatria', emoji: '🛡️', every: 6, info: 'mengurangi mata dadu' }
};

/* ---------------- BAGIAN 1: INTI ---------------- */
function rdRng(seed) {
    var a = seed >>> 0;
    return function () {
        a = (a + 0x6D2B79F5) >>> 0; var t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function rdIsBossStage(stage) { return stage > 0 && stage % RD.BOSS_EVERY === 0; }
function rdBossType(stage) { return ['snake', 'silencer', 'knight'][(Math.floor(stage / RD.BOSS_EVERY) - 1 + 300) % 3]; }
function rdMonsterHp(stage, mode) {
    var hp = RD.HP_BASE + RD.HP_STEP * (stage - 1);
    if (stage > RD.FINAL_STAGE) hp *= Math.pow(RD.HP_LATE, stage - RD.FINAL_STAGE);
    return Math.round(hp * (mode === 'coop' ? RD.COOP_HP : 1));
}
// Gelombang satu stage: sama persis untuk kedua pemain (ditentukan seed + nomor stage)
function rdWave(seed, stage, mode) {
    var rnd = rdRng(((seed >>> 0) * 131 + stage * 7919) >>> 0);
    var hp = rdMonsterHp(stage, mode); var out = [];
    if (rdIsBossStage(stage)) {
        out.push({ delay: 0.5, kind: 'boss', boss: true, bossType: rdBossType(stage), hp: hp * RD.BOSS_HP, speed: 1 / 30, sp: 200 });
        return out;
    }
    var n = Math.min(5 + Math.floor(stage / 2), 14);
    for (var i = 0; i < n; i++) {
        var r = rnd(); var kind = 'normal';
        if (stage >= 4 && r < 0.12) kind = 'tank'; else if (stage >= 2 && r < 0.37) kind = 'fast';
        out.push({
            delay: i * 0.55, kind: kind, boss: false,
            hp: Math.round(hp * (kind === 'tank' ? 3 : (kind === 'fast' ? 0.5 : 1))),
            speed: kind === 'tank' ? 1 / 19 : (kind === 'fast' ? 1 / 9.5 : 1 / 14), sp: kind === 'tank' ? 20 : 10
        });
    }
    return out;
}
function rdStageAt(time) { return time < RD.START_DELAY ? 0 : Math.floor((time - RD.START_DELAY) / RD.STAGE_SEC) + 1; }
function rdCreateGame(opts) {
    var deck = (opts.deck || []).slice(0, RD.DECK_SIZE); var power = {};
    for (var i = 0; i < deck.length; i++) power[deck[i]] = 1;
    var board = []; for (var s = 0; s < RD.SLOTS; s++) board.push(null);
    return {
        mode: opts.mode === 'versus' ? 'versus' : (opts.mode === 'solo' ? 'solo' : 'coop'), seed: opts.seed >>> 0,
        rng: rdRng(((opts.seed >>> 0) ^ (((opts.playerKey || 1) * 2654435761) >>> 0)) >>> 0),
        time: 0, stage: 0, lives: RD.LIVES, sp: RD.START_SP, summons: 0, kills: 0, leaked: 0,
        deck: deck, power: power, board: board, partnerBoard: [], partnerPower: {},
        monsters: [], queue: [], fx: [], events: [], nextId: 1, over: false, cleared: false, boardDirty: true
    };
}
function rdSummonCost(g) { return RD.SUMMON_BASE + RD.SUMMON_STEP * g.summons; }
function rdEmptySlots(g) { var out = []; for (var i = 0; i < RD.SLOTS; i++) if (!g.board[i]) out.push(i); return out; }
function rdSummon(g) {
    if (g.over || g.cleared) return -1;
    var cost = rdSummonCost(g); var empty = rdEmptySlots(g);
    if (g.sp < cost || !empty.length || !g.deck.length) return -1;
    g.sp -= cost; g.summons++;
    var slot = empty[Math.floor(g.rng() * empty.length)];
    var type = g.deck[Math.floor(g.rng() * g.deck.length)];
    g.board[slot] = { type: type, pips: 1, cd: RD_DIE_MAP[type].spd * 0.5, lockedUntil: 0 };
    g.boardDirty = true; return slot;
}
function rdCanMerge(g, a, b) {
    if (a === b || a < 0 || b < 0) return false;
    var x = g.board[a], y = g.board[b];
    if (!x || !y || x.pips !== y.pips) return false;
    if ((x.type === 'joker') !== (y.type === 'joker')) return true;   /* Joker meniru dadu lain yang matanya sama */
    return x.type === y.type && x.pips < RD.MAX_PIPS;
}
// Gabung: dadu asal hilang, dadu tujuan menjadi jenis acak dari deck dengan mata +1
function rdMerge(g, from, to) {
    if (g.over || g.cleared || !rdCanMerge(g, from, to)) return false;
    var x = g.board[from], y = g.board[to]; var jx = x.type === 'joker', jy = y.type === 'joker';
    if (jx !== jy) {
        var src = jx ? y : x; var copy = { type: src.type, pips: src.pips, cd: RD_DIE_MAP[src.type].spd * 0.5, lockedUntil: 0 };
        if (jx) g.board[from] = copy; else g.board[to] = copy;
        g.boardDirty = true; return true;
    }
    var pips = y.pips + 1; var type = g.deck[Math.floor(g.rng() * g.deck.length)];
    g.board[from] = null; g.board[to] = { type: type, pips: pips, cd: RD_DIE_MAP[type].spd * 0.5, lockedUntil: 0 };
    g.boardDirty = true; return true;
}
function rdPowerCost(g, id) { var lvl = g.power[id] || 0; if (!lvl || lvl > RD.POWER_COST.length) return -1; return RD.POWER_COST[lvl - 1]; }
function rdPowerUp(g, id) {
    if (g.over || g.cleared) return false;
    var cost = rdPowerCost(g, id); if (cost < 0 || g.sp < cost) return false;
    g.sp -= cost; g.power[id]++; return true;
}
function rdLightBuff(board, slot) {
    var col = slot % RD.COLS, row = Math.floor(slot / RD.COLS), buff = 0;
    var nb = [[col - 1, row], [col + 1, row], [col, row - 1], [col, row + 1]];
    for (var i = 0; i < nb.length; i++) {
        var c = nb[i][0], r = nb[i][1]; if (c < 0 || c >= RD.COLS || r < 0 || r >= RD.ROWS) continue;
        var cell = board[r * RD.COLS + c]; if (cell && cell.type === 'light') buff += RD_DIE_MAP.light.buff * cell.pips;
    }
    return Math.min(1, buff);
}
function rdPickTarget(g, d) {
    var ms = g.monsters; if (!ms.length) return null;
    if (d.target === 'strong') { var best = ms[0]; for (var i = 1; i < ms.length; i++) if (ms[i].hp > best.hp) best = ms[i]; return best; }
    if (d.target === 'random') return ms[Math.floor(g.rng() * ms.length)];
    if (d.target === 'unpoisoned') { for (var j = 0; j < ms.length; j++) if (!ms[j].poison) return ms[j]; }
    return ms[0];
}
function rdHit(g, d, m, own, slot, cell) {
    var lvl = (own ? g.power[d.id] : g.partnerPower[d.id]) || 1;
    var mult = RD.POWER_MULT[Math.max(1, Math.min(RD.POWER_MULT.length, lvl)) - 1];
    var dmg = d.atk * mult, i;
    if (d.gambleMax) dmg = (1 + Math.floor(g.rng() * d.gambleMax)) * mult;
    if (d.crit && g.rng() < d.crit) dmg *= d.critMult;
    if (d.nth && cell) { cell.n = (cell.n || 0) + 1; if (cell.n >= d.nth) { cell.n = 0; dmg *= d.nthMult; } }
    if (d.bossMult && m.boss) dmg *= d.bossMult;
    if (d.vuln) m.vuln = Math.min(0.6, (m.vuln || 0) + d.vuln);
    if (d.kill && g.rng() < d.kill) dmg = m.boss ? dmg * 4 : Math.max(dmg, m.hp);
    if (d.all) { for (i = 0; i < g.monsters.length; i++) rdDmg(g.monsters[i], dmg); }
    else rdDmg(m, dmg);
    if (d.splash) { var range = d.splashRange || 0.05; for (i = 0; i < g.monsters.length; i++) { var o = g.monsters[i]; if (o !== m && Math.abs(o.pos - m.pos) < range) rdDmg(o, d.splash * mult); } }
    if (d.chain) { var idx = g.monsters.indexOf(m); for (var c = 1; c <= d.chain; c++) { var nx = g.monsters[idx + c]; if (!nx) break; rdDmg(nx, dmg * 0.6); } }
    if (d.poison) m.poison = Math.max(m.poison, d.poison * mult);
    if (d.slow) m.slow = Math.min(0.5, m.slow + d.slow);
    if (d.stun && g.rng() < d.stun) m.stunUntil = g.time + (m.boss ? 1 : 3);
    if (d.knock && !m.boss && g.rng() < d.knock) m.pos = Math.max(0, m.pos - 0.05);
    g.hitN = (g.hitN || 0) + 1; g.lastHit = d.id;
    if (g.fx.length < 70) g.fx.push({ slot: slot, own: own, tp: m.pos, color: d.color, ttl: 0.12 });
}
function rdDiceAct(g, board, own, dt) {
    for (var s = 0; s < board.length; s++) {
        var cell = board[s]; if (!cell) continue;
        var d = RD_DIE_MAP[cell.type]; if (!d) continue;
        if (d.mine) { if (!own) continue; cell.cd -= dt; if (cell.cd <= 0) { cell.cd += d.spd; g.sp += d.mine * cell.pips; } continue; }
        if (own && cell.lockedUntil > g.time) continue;
        if (d.grow && own && cell.pips < RD.MAX_PIPS) {
            cell.grow = (cell.grow || 0) + dt;
            if (cell.grow >= d.grow) {
                var nt = g.deck[Math.floor(g.rng() * g.deck.length)];
                cell = board[s] = { type: nt, pips: cell.pips + 1, cd: RD_DIE_MAP[nt].spd * 0.5, lockedUntil: cell.lockedUntil || 0 };
                d = RD_DIE_MAP[nt]; g.boardDirty = true; g.events.push({ k: 'grow' });
                if (d.mine) continue;
            }
        }
        var speed = 1 + rdLightBuff(board, s);
        if (d.rage && (g.time % 6) < 2.5) speed *= d.rage;
        cell.cd -= dt * speed;
        var guard = 0;
        while (cell.cd <= 0 && guard++ < 8) {
            var m = rdPickTarget(g, d);
            if (!m) { cell.cd = 0; break; }
            rdHit(g, d, m, own, s, cell);
            cell.cd += d.spd / cell.pips;
        }
    }
}
function rdBossSkill(g, m) {
    var def = RD_BOSS[m.bossType]; if (!def) return;
    m.nextSkill = g.time + def.every;
    if (m.bossType === 'snake') {
        g.monsters.push({ id: g.nextId++, kind: 'fast', boss: false, stage: m.stage, hp: Math.round(rdMonsterHp(m.stage, g.mode) * 0.4), maxHp: 0, pos: m.pos, speed: 1 / 9.5, slow: 0, poison: 0, vuln: 0, stunUntil: 0, sp: 5, nextSkill: 0 });
        g.events.push({ k: 'snake' });
    } else if (m.bossType === 'silencer') {
        var have = []; for (var i = 0; i < RD.SLOTS; i++) if (g.board[i] && !(g.board[i].lockedUntil > g.time)) have.push(i);
        for (var k = 0; k < 2 && have.length; k++) { var pick = have.splice(Math.floor(g.rng() * have.length), 1)[0]; g.board[pick].lockedUntil = g.time + 3; }
        g.boardDirty = true; g.events.push({ k: 'silence' });
    } else if (m.bossType === 'knight') {
        var big = []; for (var j = 0; j < RD.SLOTS; j++) if (g.board[j] && g.board[j].pips > 1) big.push(j);
        if (big.length) { g.board[big[Math.floor(g.rng() * big.length)]].pips--; g.boardDirty = true; g.events.push({ k: 'knight' }); }
    }
}
function rdStep(g, dt) {
    if (g.over || g.cleared) return;
    g.time += dt;
    var cur = rdStageAt(g.time);
    while (g.stage < cur) {
        g.stage++;
        var wave = rdWave(g.seed, g.stage, g.mode); var t0 = RD.START_DELAY + (g.stage - 1) * RD.STAGE_SEC;
        for (var w = 0; w < wave.length; w++) g.queue.push({ t: t0 + wave[w].delay, def: wave[w], stage: g.stage });
        g.events.push({ k: 'stage', stage: g.stage, boss: rdIsBossStage(g.stage) ? rdBossType(g.stage) : null });
    }
    while (g.queue.length && g.queue[0].t <= g.time) {
        var q = g.queue.shift(), df = q.def;
        g.monsters.push({ id: g.nextId++, kind: df.kind, boss: !!df.boss, bossType: df.bossType || null, stage: q.stage, hp: df.hp, maxHp: df.hp, pos: 0, speed: df.speed, slow: 0, poison: 0, vuln: 0, stunUntil: 0, sp: df.sp, nextSkill: df.boss ? g.time + 3 : 0 });
    }
    var ms = g.monsters, i;
    for (i = 0; i < ms.length; i++) {
        var m = ms[i];
        if (m.poison) rdDmg(m, m.poison * dt);
        if (m.boss && g.time >= m.nextSkill) rdBossSkill(g, m);
        if (m.stunUntil > g.time) continue;
        m.pos += m.speed * (1 - m.slow) * dt;
    }
    ms.sort(function (a, b) { return b.pos - a.pos; });
    rdDiceAct(g, g.board, true, dt);
    if (g.mode === 'coop' && g.partnerBoard.length) rdDiceAct(g, g.partnerBoard, false, dt);
    for (i = ms.length - 1; i >= 0; i--) {
        var x = ms[i];
        if (x.hp <= 0) {
            g.sp += x.sp; g.kills++;
            if (x.boss) { g.events.push({ k: 'bossdown', stage: x.stage }); if (g.mode !== 'versus' && x.stage >= RD.FINAL_STAGE) g.cleared = true; }
            else g.events.push({ k: 'kill', kind: x.kind });
            ms.splice(i, 1);
        } else if (x.pos >= 1) { g.lives -= x.boss ? 2 : 1; g.leaked++; g.events.push({ k: 'leak' }); ms.splice(i, 1); }
    }
    if (g.lives <= 0) { g.lives = 0; g.over = true; g.cleared = false; }
    for (i = g.fx.length - 1; i >= 0; i--) { g.fx[i].ttl -= dt; if (g.fx[i].ttl <= 0) g.fx.splice(i, 1); }
    if (g.events.length > 200) g.events.splice(0, g.events.length - 200);
}
// Ringkasan papan untuk dikirim ke server / pasangan
function rdSnapshot(g) {
    var b = []; for (var i = 0; i < RD.SLOTS; i++) b.push(g.board[i] ? [g.board[i].type, g.board[i].pips] : 0);
    var p = {}; for (var k in g.power) if (Object.prototype.hasOwnProperty.call(g.power, k)) p[k] = g.power[k];
    return { b: b, p: p };
}
// Mode teman: terapkan papan pasangan (jeda serang dadu yang tidak berubah dipertahankan)
function rdApplyPartner(g, snap) {
    if (!snap || !snap.b) return;
    var nb = [];
    for (var i = 0; i < RD.SLOTS; i++) {
        var e = snap.b[i], old = g.partnerBoard[i] || null;
        if (!e || !RD_DIE_MAP[e[0]]) { nb.push(null); continue; }
        var pips = Math.max(1, Math.min(RD.MAX_PIPS, e[1] | 0));
        nb.push(old && old.type === e[0] && old.pips === pips ? old : { type: e[0], pips: pips, cd: RD_DIE_MAP[e[0]].spd * 0.5, lockedUntil: 0 });
    }
    g.partnerBoard = nb; g.partnerPower = snap.p || {};
}
// Pulihkan permainan setelah halaman dimuat ulang di tengah game
function rdRestore(g, st, time) {
    for (var i = 0; i < RD.SLOTS; i++) {
        var e = st.b && st.b[i];
        g.board[i] = (e && RD_DIE_MAP[e[0]] && g.deck.indexOf(e[0]) !== -1) ? { type: e[0], pips: Math.max(1, Math.min(RD.MAX_PIPS, e[1] | 0)), cd: 0.3, lockedUntil: 0 } : null;
    }
    if (st.p) for (var k in g.power) if (st.p[k]) g.power[k] = Math.max(1, Math.min(RD.POWER_COST.length + 1, st.p[k] | 0));
    g.lives = Math.max(1, Math.min(RD.LIVES, st.lives | 0)); g.sp = Math.max(0, st.sp | 0); g.summons = Math.max(0, st.n | 0); g.kills = Math.max(0, st.k | 0);
    g.time = time; g.stage = rdStageAt(time); g.boardDirty = true;
}

/* ---------------- BAGIAN 2: TAMPILAN ---------------- */
var rdUi = null;
var RD_GEO = { x0: 0.08, x1: 0.92, yTop: 0.12, yBot: 1, gx: 0.18, gw: 0.128, gy: 0.27, gh: 0.70 / 3 };
function rdStopAll() {
    try { document.body.classList.remove('rd-playing'); } catch (e) {}
    if (!rdUi) return;
    if (rdUi.raf) cancelAnimationFrame(rdUi.raf);
    if (rdUi.pollTimer) clearInterval(rdUi.pollTimer);
    if (rdUi.syncTimer) clearInterval(rdUi.syncTimer);
    if (rdUi.tickTimer) clearInterval(rdUi.tickTimer);
    rdUi = null;
}
function rdNow() { return Date.now() + (rdUi ? rdUi.offset : 0); }
function rdFmt(n) { n = Math.max(0, Math.ceil(n)); if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'; if (n >= 10000) return (n / 1000).toFixed(1) + 'K'; return String(n); }
function rdPipsHtml(pips) { var s = ''; for (var i = 0; i < pips; i++) s += '<i></i>'; return '<span class="rd-pips">' + s + '</span>'; }
function rdDieHtml(type, pips) { var d = RD_DIE_MAP[type]; if (!d) return ''; return '<span class="rd-die" style="--dc:' + d.color + ';"><span class="rd-die-emoji">' + d.emoji + '</span>' + rdPipsHtml(pips) + '</span>'; }
function rdBody() { return document.getElementById('rdBody'); }
function rdPartnerName() { var p = rdUi && rdUi.srv ? rdUi.srv.partner : null; return escapeHtml((p && (p.displayName || p.username)) || (rdUi && rdUi.scope === 'global' ? 'Pemain lain' : 'Pasangan')); }
function rdModeLabel(mode) { return mode === 'versus' ? '⚔️ Lawan' : (mode === 'solo' ? '🎯 Solo' : '🤝 Teman'); }

function renderCoupleGamePage() { return renderDiceGamePage('couple'); }
async function rdRefresh() {
    if (!rdUi) return;
    var res = await apiCall(rdUi.base + '?chatAfter=' + rdUi.chatAfter);
    if (!rdUi) return;
    if (!res.success) { rdUi.phase = 'error'; var b = rdBody(); if (b) b.innerHTML = '<div class="card p-6 text-center"><div style="font-size:40px;">💞</div><p class="text-sm my-3" style="color:var(--text-secondary);">' + escapeHtml(res.error || 'Gagal memuat game') + '</p><button type="button" class="btn-couple" onclick="navigate(\'' + rdUi.back + '\')"><i class="fa-solid fa-arrow-left"></i>Kembali</button></div>'; return; }
    rdApplyServer(res.data);
}
async function rdPost(path, body) {
    if (!rdUi) return { success: false };
    rdSfxInit();
    var res = await apiCall(rdUi.base + '/' + path, { method: 'POST', body: JSON.stringify(body || {}) });
    if (!rdUi) return res;
    if (res.success) rdApplyServer(res.data); else showToast(res.error || 'Gagal', 'error');
    return res;
}
function rdApplyServer(data) {
    if (!rdUi || !data) return;
    if (typeof data.serverNow === 'number') rdUi.offset = data.serverNow - Date.now();
    if (data.me) rdUi.me = data.me;
    var gm = data.game || null;
    if (gm && gm.status === 'finished' && rdUi.dismissed === gm.id) gm = null;   /* hasil yang sudah ditutup lewat "Main Lagi" */
    if (gm && gm.status === 'finished' && !rdUi.sawPlaying && rdUi.phase !== 'playing' && rdUi.phase !== 'finished' && (rdNow() - (gm.endedAt || 0) > 15000)) gm = null;
    rdUi.srv = gm;
    rdChatApply(gm, data.chat);
    var badge = document.getElementById('rdModeBadge'); if (badge) badge.textContent = gm && gm.status !== 'finished' ? rdModeLabel(gm.mode) : '';
    if (rdUi.phase === 'playing') { if (!gm || gm.status === 'finished') { rdShowResult(); return; } rdUpdatePartner(); return; }
    if (!gm) { rdSetPhase('none', 'none|' + (rdUi.me ? rdUi.me.trophies : '')); return; }
    if (gm.status === 'lobby') { rdSetPhase('lobby', 'lobby|' + gm.mode + '|' + gm.me.isHost + '|' + gm.partner.present); return; }
    if (gm.status === 'picking') { rdSetPhase('picking', 'picking'); return; }
    if (gm.status === 'playing') { try { localStorage.setItem('fesstale_rd_deck', JSON.stringify(gm.me.deck || [])); } catch (e) {} rdSound('start'); rdStartPlaying(); return; }
    if (gm.status === 'finished') rdShowResult();
}
function rdSetPhase(phase, sig) {
    if (rdUi.phase === phase && rdUi.sig === sig) return;
    rdUi.phase = phase; rdUi.sig = sig; rdPhaseUi(); var b = rdBody(); if (!b) return;
    if (phase === 'none') b.innerHTML = rdNoneHtml();
    else if (phase === 'lobby') b.innerHTML = rdLobbyHtml();
    else if (phase === 'picking') {
        rdUi.lastTick = -1; rdUi.deck = (rdUi.srv.me.deck || []).slice(0, RD.DECK_SIZE);
        if (!rdUi.deck.length) {
            try { var saved = JSON.parse(localStorage.getItem('fesstale_rd_deck') || '[]'); if (Array.isArray(saved)) rdUi.deck = saved.filter(function (id, i) { return RD_DIE_MAP[id] && saved.indexOf(id) === i; }).slice(0, RD.DECK_SIZE); } catch (e) {}
            if (rdUi.deck.length === RD.DECK_SIZE) rdPost('pick', { deck: rdUi.deck });
        }
        b.innerHTML = rdPickingHtml(); rdTick();
    }
}
function rdNoneHtml() {
    var global = rdUi.scope === 'global'; var me = rdUi.me || {};
    var hero = '<div class="rd-hero"><div class="rd-hero-dice">🔥⚡💨</div><h2>Bertahan dari serbuan monster</h2><p>Panggil dadu, gabungkan, dan jangan biarkan monster lolos. Tiap kelipatan 10 stage muncul bos.</p></div>';
    if (!global) return hero + '<p class="rd-section-label">Pilih cara main</p>' + rdModeCardsHtml() + '<p class="rd-note"><i class="fa-solid fa-gift"></i>Menang dapat EXP. Kalah tidak dapat apa-apa.</p>';
    return hero +
        '<div class="rd-trophy-card" role="button" tabindex="0" onclick="openTrophyLeaderboard()"><span class="rd-trophy-ic">🏆</span><span class="rd-trophy-body"><b id="rdMyTrophies">' + formatKoin(me.trophies || 0) + '</b><span>trophy · musim ' + escapeHtml(me.seasonLabel || '-') + ' · reset ' + (me.resetInDays || 0) + ' hari lagi</span></span><span class="rd-entry-go">Peringkat</span></div>' +
        '<p class="rd-section-label">Main sendiri</p><button type="button" class="rd-solo-card" onclick="rdCreate(\'solo\')"><span class="rd-mode-emoji">🎯</span><span class="rd-solo-body"><b>Solo</b><span>Tanpa lawan. Menang bila bos stage ' + RD.FINAL_STAGE + ' tumbang.</span></span><em>+' + (me.winExpSolo || 150) + ' EXP</em></button>' +
        '<p class="rd-section-label">Main bareng (buat room)</p>' + rdModeCardsHtml() +
        '<p class="rd-section-label">Masuk dengan kode</p><div class="flex gap-2 mb-2"><input type="text" id="rdJoinCode" class="input-modern flex-1" placeholder="KODE" maxlength="10" autocomplete="off" style="text-transform:uppercase;letter-spacing:4px;text-align:center;font-weight:800;font-size:16px;" onkeydown="if(event.key===\'Enter\')rdJoinCode()"><button type="button" onclick="rdJoinCode()" class="btn-couple" style="padding:12px 20px;" aria-label="Masuk room"><i class="fa-solid fa-arrow-right"></i></button></div>' +
        '<p class="rd-note"><i class="fa-solid fa-gift"></i>Lawan: menang +' + (me.winTrophies || 30) + ' 🏆, kalah −' + (me.loseTrophies || 20) + ' 🏆. Teman &amp; Solo: menang dapat EXP. Trophy kembali 0 tiap awal bulan.</p>';
}
// Tab room dan tombol kembali hanya tampil di menu / lobi, bukan saat memilih dadu atau bermain

function rdLobbyHtml() {
    var gm = rdUi.srv; var demo = !!window.FesstaleMock;
    var demoBtn = demo ? '<button type="button" class="couple-demo" onclick="FesstaleMock.rdBotJoin(); rdRefresh()">Mode demo: bot ikut main</button>' : '';
    if (rdUi.scope === 'global') {
        var code = escapeAttr(gm.code || '');
        return '<div class="card rd-lobby"><p class="rd-lobby-title">Room ' + rdModeLabel(gm.mode) + '</p><p class="rd-lobby-sub">Bagikan kode ini. Begitu ada yang masuk, kalian langsung memilih dadu.</p><div class="couple-code" role="button" onclick="copyToClipboard(\'' + code + '\')">' + escapeHtml(gm.code || '') + '</div>' +
            '<div class="flex gap-2 w-full"><button type="button" onclick="copyToClipboard(\'' + code + '\')" class="btn-secondary flex-1"><i class="fa-regular fa-copy mr-1"></i>Salin Kode</button><button type="button" onclick="rdShareRoom()" class="btn-couple flex-1"><i class="fa-brands fa-telegram"></i>Undang</button></div>' +
            '<p class="rd-lobby-wait">Menunggu pemain lain<span class="couple-dots"><i></i><i></i><i></i></span></p>' + demoBtn + '<button type="button" class="couple-cancel" onclick="rdLeave()">Tutup room</button></div>';
    }
    if (!gm.me.isHost && !gm.me.present) {
        return '<div class="card rd-lobby"><div class="rd-lobby-emoji">🎲</div><p class="rd-lobby-title">' + rdPartnerName() + ' mengajak main!</p><p class="rd-lobby-sub">Mode ' + rdModeLabel(gm.mode) + '. Kalian punya ' + RD.PICK_SECONDS + ' detik untuk memilih 5 dadu.</p><button type="button" class="btn-couple w-full" onclick="rdPost(\'join\')"><i class="fa-solid fa-play"></i>Gabung</button><button type="button" class="couple-cancel" onclick="rdLeave()">Tolak</button></div>';
    }
    return '<div class="card rd-lobby"><div class="rd-lobby-emoji">⏳</div><p class="rd-lobby-title">Menunggu ' + rdPartnerName() + ' masuk<span class="couple-dots"><i></i><i></i><i></i></span></p><p class="rd-lobby-sub">Mode ' + rdModeLabel(gm.mode) + '. Pasanganmu mendapat ajakan di halaman Pasangan.</p>' + demoBtn + '<button type="button" class="couple-cancel" onclick="rdLeave()">Batalkan</button></div>';
}
function rdPickingHtml() {
    var global = rdUi.scope === 'global'; var solo = !!(rdUi.srv && rdUi.srv.mode === 'solo');
    var cards = RD_DICE.map(function (d) {
        var stat = d.mine ? '+' + d.mine + ' SP / ' + d.spd + ' dtk' : '⚔️ ' + (d.gambleMax ? '1-' + d.gambleMax : d.atk) + ' · ⏱ ' + d.spd + ' dtk';
        return '<button type="button" class="rd-dice-card" data-die="' + d.id + '" onclick="rdToggleDie(\'' + d.id + '\')" style="--dc:' + d.color + ';"><span class="rd-dice-emoji">' + d.emoji + '</span><span class="rd-dice-name">' + d.name + '</span><span class="rd-dice-stat">' + stat + '</span><span class="rd-dice-desc">' + d.desc + '</span></button>';
    }).join('');
    return '<div class="rd-pick"><div class="rd-pick-head"><div class="rd-count" id="rdCount">' + RD.PICK_SECONDS + '</div><div class="rd-pick-info"><p class="rd-pick-title">Pilih 5 dari ' + RD_DICE.length + ' dadu</p><p class="rd-pick-sub" id="rdPartnerPick">' + (solo ? 'Mode Solo — tumbangkan bos stage ' + RD.FINAL_STAGE : rdPartnerName() + ' sedang memilih…') + '</p></div></div>' +
        (solo ? '' : '<div class="rd-modes" id="rdModes"><button type="button" data-mode="coop" onclick="rdSetMode(\'coop\')"><b>🤝 Teman</b><span>Jalur sama · hadiah EXP</span></button><button type="button" data-mode="versus" onclick="rdSetMode(\'versus\')"><b>⚔️ Lawan</b><span>Jalur terpisah · hadiah ' + (global ? 'trophy' : 'EXP') + '</span></button></div>') +
        '<div class="rd-dice-list" id="rdDiceList">' + cards + '</div>' +
        '<button type="button" id="rdReadyBtn" class="btn-couple w-full" onclick="rdReady()">Siap!</button><p class="rd-note">Deck terakhirmu otomatis terpilih. Dadu yang kurang saat waktu habis diisi acak.</p></div>';
}
function rdToggleDie(id) {
    if (!rdUi || rdUi.phase !== 'picking') return;
    var i = rdUi.deck.indexOf(id);
    if (i !== -1) rdUi.deck.splice(i, 1);
    else { if (rdUi.deck.length >= RD.DECK_SIZE) { showToast('Maksimal ' + RD.DECK_SIZE + ' dadu', 'info'); return; } rdUi.deck.push(id); }
    rdTick();
    if (rdUi.deck.length === RD.DECK_SIZE) rdPost('pick', { deck: rdUi.deck });
}
function rdSetMode(mode) { if (rdUi && rdUi.phase === 'picking') rdPost('pick', { mode: mode }); }
function rdReady() {
    if (!rdUi || rdUi.phase !== 'picking') return;
    if (rdUi.deck.length !== RD.DECK_SIZE) { showToast('Pilih ' + RD.DECK_SIZE + ' dadu dulu', 'info'); return; }
    rdPost('pick', { deck: rdUi.deck, ready: true });
}
// Perbarui bagian yang berubah tiap 250 ms tanpa menggambar ulang seluruh layar
function rdTick() {
    if (!rdUi || rdUi.phase !== 'picking' || !rdUi.srv) return;
    var gm = rdUi.srv; var left = Math.max(0, Math.ceil(((gm.startsAt || 0) - rdNow()) / 1000));
    var c = document.getElementById('rdCount'); if (c) { c.textContent = left; c.classList.toggle('is-low', left <= 5); }
    if (left <= 5 && left > 0 && rdUi.lastTick !== left) { rdUi.lastTick = left; rdSound('tick'); }
    document.querySelectorAll('#rdDiceList .rd-dice-card').forEach(function (el) { el.classList.toggle('selected', rdUi.deck.indexOf(el.dataset.die) !== -1); });
    document.querySelectorAll('#rdModes button').forEach(function (el) { el.classList.toggle('active', el.dataset.mode === gm.mode); });
    var pp = document.getElementById('rdPartnerPick'); var pt = gm.partner || {};
    if (pp && gm.mode !== 'solo') pp.textContent = (pt.displayName || pt.username || 'Pemain lain') + (pt.ready ? ' sudah siap ✓' : ' memilih ' + ((pt.deck || []).length) + '/' + RD.DECK_SIZE + ' dadu');
    var rb = document.getElementById('rdReadyBtn');
    if (rb) { rb.disabled = !!gm.me.ready; rb.textContent = gm.me.ready ? 'Menunggu mulai…' : 'Siap! (' + rdUi.deck.length + '/' + RD.DECK_SIZE + ')'; }
}
async function rdCreate(mode) { await rdPost('create', { mode: mode }); }
async function rdLeave() {
    if (!rdUi) { navigate('party'); return; }
    var phase = rdUi.phase, back = rdUi.back;
    if (phase === 'playing' && !confirm('Keluar dari game? Kamu dianggap menyerah.')) return;
    if (phase === 'lobby' || phase === 'picking' || phase === 'playing') { try { await apiCall(rdUi.base + '/leave', { method: 'POST', body: '{}' }); } catch (e) {} }
    if (rdUi && rdUi.scope === 'global' && (phase === 'lobby' || phase === 'picking')) { rdUi.srv = null; rdUi.phase = ''; await rdRefresh(); return; }
    navigate(back);
}
/* ----- bermain ----- */
function rdStartPlaying() {
    var gm = rdUi.srv; if (!gm || !gm.me || !gm.me.deck) return;
    rdUi.phase = 'playing'; rdUi.sig = 'playing'; rdUi.sawPlaying = true; rdUi.reported = false; rdPhaseUi();
    document.body.classList.add('rd-playing');
    var g = rdCreateGame({ mode: gm.mode, seed: gm.seed, deck: gm.me.deck, playerKey: state.user.id });
    var t = (rdNow() - gm.startedAt) / 1000;
    if (gm.me.state && gm.me.state.b && t > RD.START_DELAY + 2) rdRestore(g, gm.me.state, t);
    rdUi.game = g; rdUi.sel = -1; rdUi.dragFrom = -1; rdUi.dirty = true; rdUi.hud = {}; rdUi.locks = 0;
    var cells = ''; for (var i = 0; i < RD.SLOTS; i++) cells += '<button type="button" class="rd-cell" data-slot="' + i + '"></button>';
    var mini = ''; for (var j = 0; j < RD.SLOTS; j++) mini += '<span class="rd-mini" data-mini="' + j + '"></span>';
    var pt = gm.partner || {};
    var av = renderMLBBAvatar({ username: pt.username || '?', avatarUrl: pt.avatarUrl, borderUrl: pt.borderUrl, borderScale: pt.borderScale || 1.2, size: 34 });
    rdBody().innerHTML = '<div class="rd-game">' +
        '<div class="rd-hud"><div class="rd-hud-item"><span>Stage</span><b id="rdStage">-</b></div><div class="rd-hud-item rd-hud-lives"><span>Nyawa</span><b id="rdLives"></b></div><div class="rd-hud-item"><span>SP</span><b id="rdSp">0</b></div></div>' +
        '<div class="rd-stagebar"><i id="rdStageBar"></i></div>' +
        (gm.mode === 'solo' ? '<div class="rd-solo-bar"><b>🎯 Mode Solo</b><span>Tumbangkan bos stage ' + RD.FINAL_STAGE + '</span></div>' : '<div class="rd-rival" id="rdRival"><div class="rd-rival-who">' + av + '<div class="rd-rival-text"><b>' + rdPartnerName() + '</b><span id="rdRivalInfo">' + (gm.mode === 'versus' ? 'Lawan' : 'Dadu pasangan ikut menyerang') + '</span></div></div><div class="rd-rival-grid" id="rdRivalGrid">' + mini + '</div></div>') +
        '<div class="rd-field" id="rdField"><canvas id="rdCanvas"></canvas><div class="rd-grid" id="rdGrid">' + cells + '</div><div class="rd-banner" id="rdBanner"></div></div>' +
        '<button type="button" id="rdSummonBtn" class="rd-summon" onclick="rdDoSummon()"><span class="rd-summon-ic">🎲</span><span>Panggil Dadu</span><b id="rdSummonCost">10</b></button>' +
        '<div class="rd-power" id="rdPower"></div><p class="rd-note">Ketuk dadu lalu ketuk (atau seret ke) dadu kembarannya untuk menggabung.</p></div>';
    rdLayout(); rdBindGrid(); rdRenderPower(); rdUpdatePartner();
    if (rdUi.syncTimer) clearInterval(rdUi.syncTimer);
    rdUi.syncTimer = setInterval(rdSync, 1500);
    rdUi.raf = requestAnimationFrame(rdFrame);
}
function rdLayout() {
    if (!rdUi) return; var f = document.getElementById('rdField'), c = document.getElementById('rdCanvas'); if (!f || !c) return;
    var w = f.clientWidth || 360, h = f.clientHeight || Math.round(w * 0.72); var dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
    var ctx = null; try { ctx = c.getContext ? c.getContext('2d') : null; } catch (e) { ctx = null; }
    rdUi.view = { w: w, h: h, dpr: dpr, ctx: ctx };
}
function rdSlotFromPoint(x, y) {
    var el = document.elementFromPoint ? document.elementFromPoint(x, y) : null; var cell = el && el.closest ? el.closest('.rd-cell') : null;
    return cell ? parseInt(cell.dataset.slot, 10) : -1;
}
// Ketuk dadu: pilih; ketuk kembarannya: gabung
function rdTapSlot(slot) {
    if (!rdUi || rdUi.phase !== 'playing') return; var g = rdUi.game;
    if (rdUi.sel >= 0 && rdUi.sel !== slot && rdCanMerge(g, rdUi.sel, slot)) rdDoMerge(rdUi.sel, slot);
    else if (g.board[slot]) { rdUi.sel = slot; rdUi.dragFrom = slot; }
    else { rdUi.sel = -1; rdUi.dragFrom = -1; }
    rdUi.dirty = true;
}
// Lepas seretan di atas dadu lain
function rdDropOn(slot) {
    if (!rdUi || rdUi.phase !== 'playing') return; var g = rdUi.game; var from = rdUi.dragFrom; rdUi.dragFrom = -1;
    if (from >= 0 && slot >= 0 && slot !== from && rdCanMerge(g, from, slot)) rdDoMerge(from, slot);
}
function rdBindGrid() {
    var grid = document.getElementById('rdGrid'); if (!grid) return;
    grid.addEventListener('pointerdown', function (e) { var cell = e.target.closest ? e.target.closest('.rd-cell') : null; if (!cell) return; e.preventDefault(); rdTapSlot(parseInt(cell.dataset.slot, 10)); });
    grid.addEventListener('pointerup', function (e) { rdDropOn(rdSlotFromPoint(e.clientX, e.clientY)); });
    grid.addEventListener('pointercancel', function () { if (rdUi) rdUi.dragFrom = -1; });
    window.addEventListener('resize', rdLayout, { passive: true });
}
function rdDoSummon() {
    if (!rdUi || rdUi.phase !== 'playing') return; var g = rdUi.game;
    if (rdSummon(g) < 0) { rdSound('deny', 200); showToast(rdEmptySlots(g).length ? 'SP belum cukup' : 'Papan penuh — gabungkan dadu dulu', 'info'); return; }
    rdUi.dirty = true; rdSound('summon'); try { haptic('light'); } catch (e) {}
}
function rdDoPower(id) {
    if (!rdUi || rdUi.phase !== 'playing') return;
    if (!rdPowerUp(rdUi.game, id)) { rdSound('deny', 200); showToast(rdPowerCost(rdUi.game, id) < 0 ? 'Level sudah maksimal' : 'SP belum cukup', 'info'); return; }
    rdRenderPower(); rdSound('power'); try { haptic('medium'); } catch (e) {}
}
function rdRenderPower() {
    var el = document.getElementById('rdPower'); if (!el || !rdUi || !rdUi.game) return; var g = rdUi.game;
    el.innerHTML = g.deck.map(function (id) {
        var d = RD_DIE_MAP[id]; var cost = rdPowerCost(g, id);
        return '<button type="button" class="rd-power-btn" data-power="' + id + '" onclick="rdDoPower(\'' + id + '\')" style="--dc:' + d.color + ';"><span class="rd-power-emoji">' + d.emoji + '</span><span class="rd-power-lv">Lv ' + g.power[id] + '</span><span class="rd-power-cost">' + (cost < 0 ? 'MAX' : cost) + '</span></button>';
    }).join('');
}
function rdRenderGrid() {
    var g = rdUi.game; var cells = document.querySelectorAll('#rdGrid .rd-cell');
    for (var i = 0; i < cells.length; i++) {
        var c = g.board[i]; var cls = 'rd-cell';
        if (c) { cls += ' has-die'; if (c.lockedUntil > g.time) cls += ' is-locked'; }
        if (i === rdUi.sel) cls += ' is-selected'; else if (rdUi.sel >= 0 && rdCanMerge(g, rdUi.sel, i)) cls += ' can-merge';
        cells[i].className = cls; cells[i].innerHTML = c ? rdDieHtml(c.type, c.pips) : '';
    }
}
function rdUpdatePartner() {
    if (!rdUi || rdUi.phase !== 'playing') return; var gm = rdUi.srv, g = rdUi.game; if (!gm) return;
    var st = gm.partner ? gm.partner.state : null;
    if (g.mode === 'coop' && st) { rdApplyPartner(g, st); if (typeof st.lives === 'number' && st.lives < g.lives && st.lives >= 0) g.lives = st.lives; if (g.lives <= 0) { g.lives = 0; g.over = true; } }
    var minis = document.querySelectorAll('#rdRivalGrid .rd-mini');
    for (var i = 0; i < minis.length; i++) { var e = st && st.b ? st.b[i] : 0; var d = e ? RD_DIE_MAP[e[0]] : null; minis[i].innerHTML = d ? d.emoji + '<i>' + e[1] + '</i>' : ''; minis[i].className = 'rd-mini' + (d ? ' has-die' : ''); }
    var info = document.getElementById('rdRivalInfo');
    if (info) {
        if (g.mode === 'versus') { var lv = st && typeof st.lives === 'number' ? st.lives : RD.LIVES; var hearts = ''; for (var h = 0; h < RD.LIVES; h++) hearts += h < lv ? '❤️' : '🖤'; info.textContent = hearts + '  Stage ' + ((st && st.stage) || 1); }
        else info.textContent = 'Dadu pasangan ikut menyerang';
    }
}
function rdBanner(text, kind) {
    var el = document.getElementById('rdBanner'); if (!el) return;
    el.textContent = text; el.className = 'rd-banner show ' + (kind || '');
    if (el._t) clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('show'); }, 1600);
}
function rdConsumeEvents() {
    var g = rdUi.game;
    if (g.hitN && g.hitN !== rdUi.hitSeen) { rdUi.hitSeen = g.hitN; rdHitSound(g.lastHit); }
    while (g.events.length) {
        var ev = g.events.shift();
        if (ev.k === 'stage') {
            if (ev.boss) { rdBanner('⚠️ BOS ' + RD_BOSS[ev.boss].emoji + ' ' + RD_BOSS[ev.boss].name + ' — ' + RD_BOSS[ev.boss].info, 'boss'); rdSound('boss_' + ev.boss); }
            else { if (ev.stage === 1 || ev.stage % 5 === 0) rdBanner('Stage ' + ev.stage, ''); rdSound('stage', 300); }
        }
        else if (ev.k === 'kill') rdSound('kill_' + ev.kind, 70);
        else if (ev.k === 'bossdown') { rdBanner('Bos tumbang! 🎉', 'good'); rdSound('kill_boss'); }
        else if (ev.k === 'snake') rdSound('skill_snake', 400);
        else if (ev.k === 'silence') { rdBanner('🤐 Dadumu dikunci!', 'boss'); rdSound('skill_silencer'); }
        else if (ev.k === 'knight') { rdBanner('🛡️ Mata dadu berkurang!', 'boss'); rdSound('skill_knight'); }
        else if (ev.k === 'grow') rdSound('grow', 300);
        else if (ev.k === 'leak') { rdSound('leak', 150); try { haptic('heavy'); } catch (e) {} }
    }
}
function rdUpdateHud() {
    var g = rdUi.game, hud = rdUi.hud, el;
    var stage = Math.max(1, g.stage);
    if (hud.stage !== stage) { hud.stage = stage; el = document.getElementById('rdStage'); if (el) el.textContent = stage + (rdIsBossStage(stage) ? ' 👑' : ''); }
    if (hud.lives !== g.lives) { hud.lives = g.lives; el = document.getElementById('rdLives'); if (el) { var s = ''; for (var i = 0; i < RD.LIVES; i++) s += i < g.lives ? '❤️' : '🖤'; el.textContent = s; } }
    var sp = Math.floor(g.sp);
    if (hud.sp !== sp) { hud.sp = sp; el = document.getElementById('rdSp'); if (el) el.textContent = sp; }
    var cost = rdSummonCost(g); var can = sp >= cost && rdEmptySlots(g).length > 0;
    if (hud.cost !== cost || hud.can !== can) { hud.cost = cost; hud.can = can; el = document.getElementById('rdSummonCost'); if (el) el.textContent = cost; el = document.getElementById('rdSummonBtn'); if (el) el.classList.toggle('is-off', !can); }
    var afford = ''; for (var k = 0; k < g.deck.length; k++) { var pc = rdPowerCost(g, g.deck[k]); afford += (pc >= 0 && sp >= pc) ? '1' : '0'; }
    if (hud.afford !== afford) { hud.afford = afford; var btns = document.querySelectorAll('#rdPower .rd-power-btn'); for (var b = 0; b < btns.length; b++) btns[b].classList.toggle('can-buy', afford.charAt(b) === '1'); }
    var bar = document.getElementById('rdStageBar');
    if (bar) { var t = g.time - RD.START_DELAY; var frac = t < 0 ? 0 : (t % RD.STAGE_SEC) / RD.STAGE_SEC; bar.style.transform = 'scaleX(' + frac.toFixed(3) + ')'; }
    var locks = 0; for (var q = 0; q < RD.SLOTS; q++) if (g.board[q] && g.board[q].lockedUntil > g.time) locks++;
    if (locks !== rdUi.locks) { rdUi.locks = locks; rdUi.dirty = true; }
}
function rdPathPoint(pos, w, h) {
    var a = (RD_GEO.yBot - RD_GEO.yTop) * h, b = (RD_GEO.x1 - RD_GEO.x0) * w; var d = Math.max(0, Math.min(1, pos)) * (2 * a + b);
    if (d <= a) return { x: RD_GEO.x0 * w, y: RD_GEO.yBot * h - d };
    if (d <= a + b) return { x: RD_GEO.x0 * w + (d - a), y: RD_GEO.yTop * h };
    return { x: RD_GEO.x1 * w, y: RD_GEO.yTop * h + (d - a - b) };
}
function rdSlotCenter(slot, w, h, own) {
    var col = slot % RD.COLS, row = Math.floor(slot / RD.COLS); var x = (RD_GEO.gx + (col + 0.5) * RD_GEO.gw) * w;
    return own ? { x: x, y: (RD_GEO.gy + (row + 0.5) * RD_GEO.gh) * h } : { x: x, y: 0.015 * h };
}
function rdRoundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function rdDraw() {
    var v = rdUi.view, g = rdUi.game; if (!v || !v.ctx) return; var ctx = v.ctx, w = v.w, h = v.h, i;
    ctx.setTransform(v.dpr, 0, 0, v.dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    var tw = Math.max(20, w * 0.09); var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = tw; ctx.strokeStyle = dark ? 'rgba(148,163,184,0.18)' : 'rgba(100,116,139,0.16)';
    ctx.beginPath(); ctx.moveTo(RD_GEO.x0 * w, RD_GEO.yBot * h); ctx.lineTo(RD_GEO.x0 * w, RD_GEO.yTop * h); ctx.lineTo(RD_GEO.x1 * w, RD_GEO.yTop * h); ctx.lineTo(RD_GEO.x1 * w, RD_GEO.yBot * h); ctx.stroke();
    ctx.lineWidth = 2;
    for (i = 0; i < g.fx.length; i++) { var f = g.fx[i]; var a = rdSlotCenter(f.slot, w, h, f.own), b = rdPathPoint(f.tp, w, h); ctx.globalAlpha = Math.max(0, f.ttl / 0.12); ctx.strokeStyle = f.color; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    ctx.globalAlpha = 1; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (i = g.monsters.length - 1; i >= 0; i--) {
        var m = g.monsters[i]; var p = rdPathPoint(m.pos, w, h);
        var size = m.boss ? tw * 1.3 : (m.kind === 'tank' ? tw * 0.98 : (m.kind === 'fast' ? tw * 0.66 : tw * 0.82));
        ctx.fillStyle = m.boss ? '#7c3aed' : (m.kind === 'tank' ? '#b45309' : (m.kind === 'fast' ? '#0891b2' : '#475569'));
        rdRoundRect(ctx, p.x - size / 2, p.y - size / 2, size, size, size * 0.24); ctx.fill();
        if (m.poison || m.slow > 0 || m.stunUntil > g.time) { ctx.lineWidth = 2.5; ctx.strokeStyle = m.stunUntil > g.time ? '#f97316' : (m.poison ? '#84cc16' : '#60a5fa'); ctx.stroke(); }
        ctx.fillStyle = '#fff';
        if (m.boss) { ctx.font = Math.round(size * 0.42) + 'px sans-serif'; ctx.fillText(RD_BOSS[m.bossType] ? RD_BOSS[m.bossType].emoji : '👑', p.x, p.y - size * 0.16); ctx.font = '700 ' + Math.round(size * 0.26) + 'px Nunito, sans-serif'; ctx.fillText(rdFmt(m.hp), p.x, p.y + size * 0.24); }
        else { ctx.font = '800 ' + Math.round(size * 0.4) + 'px Nunito, sans-serif'; ctx.fillText(rdFmt(m.hp), p.x, p.y + 0.5); }
    }
}
// Majukan simulasi sampai waktu server saat ini (stage berjalan menurut jam bersama).
// Dipanggil dari frame DAN dari sinkronisasi, supaya meminimalkan aplikasi tidak "menghentikan" monster.
function rdAdvanceSim() {
    if (!rdUi || !rdUi.game || !rdUi.srv) return;
    var g = rdUi.game; var target = (rdNow() - rdUi.srv.startedAt) / 1000; var n = 0;
    while (!g.over && !g.cleared && g.time + RD.STEP <= target && n < 300) { rdStep(g, RD.STEP); n++; }
}
function rdFrame() {
    if (!rdUi || rdUi.phase !== 'playing') return;
    var g = rdUi.game; rdAdvanceSim();
    rdConsumeEvents(); rdUpdateHud();
    if (g.boardDirty) { g.boardDirty = false; rdUi.dirty = true; }
    if (rdUi.dirty) { rdUi.dirty = false; rdRenderGrid(); }
    rdDraw();
    if ((g.over || g.cleared) && !rdUi.reported) { rdUi.reported = true; rdSync(); }
    rdUi.raf = requestAnimationFrame(rdFrame);
}
async function rdSync() {
    if (!rdUi || rdUi.phase !== 'playing' || rdUi.syncing) return;
    rdUi.syncing = true; rdAdvanceSim(); var g = rdUi.game; var st = rdSnapshot(g);
    st.stage = Math.max(1, g.stage); st.lives = g.lives; st.alive = !g.over; st.cleared = !!g.cleared; st.sp = Math.floor(g.sp); st.n = g.summons; st.k = g.kills;
    var res = await apiCall(rdUi.base + '/sync', { method: 'POST', body: JSON.stringify({ gameId: rdUi.srv.id, state: st, chatAfter: rdUi.chatAfter }) });
    if (!rdUi) return; rdUi.syncing = false;
    if (res && res.success) rdApplyServer(res.data);
}
function rdShowResult() {
    if (!rdUi) return; var gm = rdUi.srv;
    if (rdUi.raf) cancelAnimationFrame(rdUi.raf); if (rdUi.syncTimer) { clearInterval(rdUi.syncTimer); rdUi.syncTimer = null; }
    document.body.classList.remove('rd-playing');
    if (rdUi.phase === 'finished' && rdUi.sig === 'finished|' + (gm ? gm.id : 0)) return;
    rdUi.phase = 'finished'; rdUi.sig = 'finished|' + (gm ? gm.id : 0); rdPhaseUi();
    var b = rdBody(); if (!b) return;
    var r = (gm && gm.result) || { outcome: 'lose' }; var g = rdUi.game; var stage = g ? Math.max(1, g.stage) : ((gm && gm.me && gm.me.state && gm.me.state.stage) || 1);
    var win = r.outcome === 'win', draw = r.outcome === 'draw'; var chips = '';
    if (win && r.rewarded) {
        if (r.trophies) chips += '<span class="rd-chip-trophy">🏆 +' + r.trophies + ' trophy</span>';
        if (r.exp) chips += '<span class="rd-chip-exp"><i class="fa-solid fa-star"></i>+' + formatKoin(r.exp) + ' EXP</span>';
    }
    var lostChip = r.trophiesLost ? '<div class="rd-reward"><span class="rd-chip-lost">🏆 −' + r.trophiesLost + ' trophy</span></div>' : '';
    var reward = win ? (chips ? '<div class="rd-reward">' + chips + '</div>' : '<p class="rd-result-note">' + escapeHtml(r.note || 'Hadiah tidak diberikan untuk game ini.') + '</p>')
        : (lostChip + '<p class="rd-result-note">' + (draw ? 'Seri — tidak ada hadiah.' : (lostChip ? 'Kalah di mode Lawan mengurangi trophy. Balas di game berikutnya!' : 'Kalah tidak mendapat hadiah. Coba lagi!')) + '</p>');
    b.innerHTML = '<div class="card rd-result ' + (win ? 'is-win' : 'is-lose') + '"><div class="rd-result-emoji">' + (win ? '🏆' : (draw ? '🤝' : '😵')) + '</div><h2>' + (win ? 'Menang!' : (draw ? 'Seri' : 'Kalah')) + '</h2><p class="rd-result-sub">' + escapeHtml(r.reason || '') + '</p><p class="rd-result-stage">Sampai stage <b>' + stage + '</b> · ' + rdModeLabel(gm ? gm.mode : 'coop') + '</p>' + reward +
        '<button type="button" class="btn-couple w-full" onclick="rdPlayAgain()"><i class="fa-solid fa-rotate-right"></i>Main Lagi</button>' + (rdUi.scope === 'global' ? '' : '<button type="button" class="couple-cancel" onclick="navigate(\'couple\')">Kembali ke Room Pasangan</button>') + '</div>';
    rdSound(win ? 'win' : 'lose'); try { haptic(win ? 'heavy' : 'medium'); } catch (e) {}
    if (win) { try { refreshMeSilently(); } catch (e) {} }
}
function rdPlayAgain() {
    if (!rdUi) return;
    rdUi.dismissed = rdUi.srv ? rdUi.srv.id : 0; rdUi.sawPlaying = false; rdUi.srv = null; rdUi.game = null; rdUi.phase = ''; rdUi.sig = '';
    rdChatApply(null); rdSetPhase('none', 'none-again');
}
function rdDmg(m, dmg) { m.hp -= dmg * (1 + (m.vuln || 0)); }
var rdSfx = { ctx: null, master: null, on: true, last: {}, log: [] };
try { rdSfx.on = localStorage.getItem('fesstale_rd_sound') !== 'off'; } catch (e) {}
var RD_SOUNDS = {
    summon: [['noise', 900, 2400, 0.05, 0.5, 0], ['noise', 1400, 3000, 0.04, 0.4, 0.07], ['noise', 1100, 2600, 0.05, 0.45, 0.13], ['triangle', 520, 780, 0.09, 0.5, 0.19]],
    merge: [['triangle', 440, 440, 0.07, 0.5, 0], ['triangle', 660, 660, 0.07, 0.5, 0.07], ['triangle', 880, 990, 0.14, 0.5, 0.14]],
    joker: [['square', 330, 660, 0.08, 0.3, 0], ['square', 660, 330, 0.08, 0.3, 0.08], ['triangle', 990, 990, 0.1, 0.4, 0.16]],
    power: [['square', 392, 392, 0.06, 0.3, 0], ['square', 523, 523, 0.06, 0.3, 0.06], ['square', 659, 659, 0.06, 0.3, 0.12], ['square', 784, 784, 0.14, 0.3, 0.18]],
    grow: [['triangle', 520, 780, 0.12, 0.35, 0]],
    deny: [['sawtooth', 160, 110, 0.12, 0.3, 0]],
    tick: [['sine', 880, 880, 0.05, 0.4, 0]],
    start: [['triangle', 523, 523, 0.1, 0.5, 0], ['triangle', 784, 784, 0.2, 0.5, 0.12]],
    stage: [['sine', 660, 880, 0.08, 0.25, 0]],
    chat: [['sine', 740, 980, 0.07, 0.35, 0]],
    leak: [['sawtooth', 220, 70, 0.3, 0.5, 0], ['noise', 300, 120, 0.25, 0.4, 0]],
    win: [['triangle', 523, 523, 0.12, 0.5, 0], ['triangle', 659, 659, 0.12, 0.5, 0.12], ['triangle', 784, 784, 0.12, 0.5, 0.24], ['triangle', 1046, 1046, 0.4, 0.5, 0.36]],
    lose: [['sawtooth', 392, 370, 0.18, 0.35, 0], ['sawtooth', 330, 311, 0.18, 0.35, 0.18], ['sawtooth', 262, 196, 0.45, 0.35, 0.36]],
    kill_normal: [['sine', 320, 110, 0.1, 0.5, 0]],
    kill_fast: [['triangle', 900, 420, 0.06, 0.4, 0]],
    kill_tank: [['sine', 130, 45, 0.22, 0.7, 0], ['noise', 400, 90, 0.16, 0.4, 0]],
    kill_boss: [['noise', 1200, 60, 0.7, 0.8, 0], ['sawtooth', 180, 30, 0.7, 0.6, 0], ['triangle', 523, 1046, 0.3, 0.5, 0.5]],
    boss_snake: [['noise', 5000, 7000, 0.55, 0.45, 0], ['noise', 6500, 4000, 0.3, 0.35, 0.35]],
    boss_silencer: [['sawtooth', 300, 90, 0.6, 0.4, 0], ['sawtooth', 306, 93, 0.6, 0.4, 0]],
    boss_knight: [['square', 196, 196, 0.35, 0.35, 0], ['square', 293, 293, 0.3, 0.3, 0], ['triangle', 587, 587, 0.25, 0.3, 0.02]],
    skill_snake: [['noise', 6000, 3500, 0.2, 0.4, 0]],
    skill_silencer: [['square', 700, 140, 0.25, 0.3, 0]],
    skill_knight: [['square', 240, 200, 0.12, 0.4, 0], ['triangle', 720, 700, 0.15, 0.3, 0]]
};
var RD_HIT_SOUND = {
    fire: ['sawtooth', 300, 150, 0.06], electric: ['square', 1400, 500, 0.04], wind: ['noise', 2500, 5000, 0.04], poison: ['sine', 240, 180, 0.08], ice: ['triangle', 1700, 2300, 0.05],
    iron: ['square', 150, 90, 0.07], gamble: ['triangle', 600, 900, 0.05], lock: ['square', 900, 880, 0.04], crit: ['sawtooth', 700, 250, 0.06], light: ['sine', 1300, 1500, 0.05],
    typhoon: ['noise', 900, 2600, 0.07], death: ['sine', 200, 60, 0.12], bomb: ['noise', 500, 80, 0.14], acid: ['sine', 500, 300, 0.07], growth: ['triangle', 520, 640, 0.05],
    meteor: ['noise', 1800, 200, 0.16], joker: ['square', 520, 780, 0.05], magnet: ['sine', 380, 620, 0.07], arrow: ['triangle', 1100, 700, 0.04]
};
function rdSfxInit() {
    if (rdSfx.ctx || !rdSfx.on) return;
    try {
        var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        rdSfx.ctx = new AC(); rdSfx.master = rdSfx.ctx.createGain(); rdSfx.master.gain.value = 0.22; rdSfx.master.connect(rdSfx.ctx.destination);
    } catch (e) { rdSfx.ctx = null; }
}
function rdTone(spec, t0) {
    var ctx = rdSfx.ctx; var wave = spec[0], f0 = spec[1], f1 = spec[2], dur = spec[3], vol = spec[4] == null ? 0.4 : spec[4], at = t0 + (spec[5] || 0);
    var gain = ctx.createGain(); gain.gain.setValueAtTime(vol, at); gain.gain.exponentialRampToValueAtTime(0.001, at + dur); gain.connect(rdSfx.master);
    if (wave === 'noise') {
        var len = Math.max(1, Math.floor(ctx.sampleRate * dur)); var buf = ctx.createBuffer(1, len, ctx.sampleRate); var data = buf.getChannelData(0);
        for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        var src = ctx.createBufferSource(); src.buffer = buf;
        var filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.setValueAtTime(f0, at); filt.frequency.exponentialRampToValueAtTime(Math.max(40, f1), at + dur);
        src.connect(filt); filt.connect(gain); src.start(at); src.stop(at + dur + 0.02);
    } else {
        var osc = ctx.createOscillator(); osc.type = wave; osc.frequency.setValueAtTime(f0, at); osc.frequency.exponentialRampToValueAtTime(Math.max(20, f1), at + dur);
        osc.connect(gain); osc.start(at); osc.stop(at + dur + 0.02);
    }
}
function rdSfxPlay(name, specs) {
    rdSfx.log.push(name); if (rdSfx.log.length > 60) rdSfx.log.shift();
    rdSfxInit(); var ctx = rdSfx.ctx; if (!ctx) return;
    try { if (ctx.state === 'suspended' && ctx.resume) ctx.resume(); var t0 = ctx.currentTime + 0.005; for (var i = 0; i < specs.length; i++) rdTone(specs[i], t0); } catch (e) {}
}
function rdSound(name, minGapMs) {
    if (!rdSfx.on || !RD_SOUNDS[name]) return;
    var now = Date.now(); if (minGapMs && now - (rdSfx.last[name] || 0) < minGapMs) return; rdSfx.last[name] = now;
    rdSfxPlay(name, RD_SOUNDS[name]);
}
function rdHitSound(dieId) {
    var h = RD_HIT_SOUND[dieId]; if (!rdSfx.on || !h) return;
    var now = Date.now(); if (now - (rdSfx.last._hit || 0) < 110) return; rdSfx.last._hit = now;
    rdSfxPlay('hit_' + dieId, [[h[0], h[1], h[2], h[3], 0.16, 0]]);
}
function rdSoundIcon() { return rdSfx.on ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>'; }
function rdToggleSound() {
    rdSfx.on = !rdSfx.on; try { localStorage.setItem('fesstale_rd_sound', rdSfx.on ? 'on' : 'off'); } catch (e) {}
    var b = document.getElementById('rdSoundBtn'); if (b) b.innerHTML = rdSoundIcon();
    if (rdSfx.on) rdSound('tick'); else if (rdSfx.ctx && rdSfx.ctx.suspend) { try { rdSfx.ctx.suspend(); } catch (e) {} }
}
function renderDicePage() { return renderDiceGamePage('global'); }
async function renderDiceGamePage(scope) {
    rdStopAll();
    var app = document.getElementById('app'); var global = scope === 'global';
    if (!state.user) { app.innerHTML = '<div class="text-center py-16"><p class="mb-4" style="color: var(--text-secondary);">Login untuk bermain Random Dice</p><button onclick="handleAuthButton()" class="btn-primary"><i class="fa-brands fa-telegram mr-2"></i>Login via Telegram</button></div>'; return; }
    rdUi = { scope: scope, base: global ? '/api/dice' : '/api/couple/game', back: global ? 'dice' : 'couple', phase: 'loading', offset: 0, srv: null, game: null, deck: [], sig: '', sel: -1, dragFrom: -1, dirty: true, hud: {}, sawPlaying: false, reported: false, syncing: false, view: null, chatAfter: 0, chatGame: 0, me: null, hitSeen: 0, lastTick: -1 };
    app.innerHTML = (global ? '<div id="rdRoomTabs">' + renderRoomTabs('game') + '</div>' : '') + '<div class="rd-wrap"><div class="rd-top"><button type="button" class="rd-back" id="rdBackBtn" onclick="rdLeave()" aria-label="Keluar"><i class="fa-solid fa-arrow-left"></i></button><h1 class="rd-title">🎲 Random Dice' + (global ? ' <small>Global</small>' : '') + '</h1><span id="rdModeBadge" class="rd-mode-badge"></span><button type="button" id="rdSoundBtn" class="rd-back" onclick="rdToggleSound()" aria-label="Suara">' + rdSoundIcon() + '</button></div><div id="rdBody"><div class="skeleton" style="height:320px;border-radius:24px;"></div></div>' + rdChatShellHtml() + '</div>';
    rdPhaseUi(); await rdRefresh();
    if (!rdUi || rdUi.phase === 'error') return;
    if (global && state.diceJoinCode) { var code = state.diceJoinCode; state.diceJoinCode = null; if (!rdUi.srv) rdJoinCode(code); }
    rdUi.pollTimer = setInterval(function () { if (!rdUi || rdUi.phase === 'playing' || (rdUi.scope === 'global' && rdUi.phase === 'none')) return; rdRefresh(); }, 1000);
    rdUi.tickTimer = setInterval(rdTick, 250);
}
function rdModeCardsHtml() {
    var global = rdUi.scope === 'global'; var me = rdUi.me || {};
    return '<div class="rd-mode-cards"><button type="button" class="rd-mode-card" onclick="rdCreate(\'coop\')"><span class="rd-mode-emoji">🤝</span><b>Teman</b><span>Satu jalur, serang bersama. Menang bila bos stage ' + RD.FINAL_STAGE + ' tumbang.</span><em>Hadiah: EXP</em></button>' +
        '<button type="button" class="rd-mode-card" onclick="rdCreate(\'versus\')"><span class="rd-mode-emoji">⚔️</span><b>Lawan</b><span>Jalur terpisah. Yang kehabisan nyawa lebih dulu kalah.</span><em>' + (global ? 'Menang +' + (me.winTrophies || 30) + ' 🏆 · Kalah −' + (me.loseTrophies || 20) + ' 🏆' : 'Hadiah: EXP') + '</em></button></div>';
}

async function rdJoinCode(code) {
    var input = document.getElementById('rdJoinCode'); code = String(code || (input ? input.value : '') || '').trim().toUpperCase();
    if (code.length < 4) { showToast('Masukkan kode room', 'error'); return; }
    await rdPost('join', { code: code });
}
function rdShareRoom() { var gm = rdUi && rdUi.srv; if (!gm || !gm.code) return; shareLink(appLink('d_' + gm.code, '/dice'), 'Main Random Dice bareng aku di Fesstale Movie 🎲 Kode room: ' + gm.code); }
function rdDoMerge(from, to) {
    var g = rdUi.game; var a = g.board[from], b = g.board[to]; if (!a || !b) return false;
    var copy = (a.type === 'joker') !== (b.type === 'joker');
    if (!rdMerge(g, from, to)) return false;
    rdUi.sel = -1; rdUi.dragFrom = -1; rdUi.dirty = true; rdSound(copy ? 'joker' : 'merge'); try { haptic('medium'); } catch (e) {}
    return true;
}
function rdChatShellHtml() {
    var quick = ['GG', '😂', '🔥', 'Semangat!', 'Ampun 🙏', '👏'].map(function (t) { return '<button type="button" onclick="rdSendChat(\'' + t + '\')">' + t + '</button>'; }).join('');
    return '<div id="rdChat" class="rd-chat hidden"><div class="rd-chat-head"><i class="fa-solid fa-comments"></i>Chat</div><div class="rd-chat-list" id="rdChatList"></div><div class="rd-chat-quick">' + quick + '</div><div class="rd-chat-form"><input type="text" id="rdChatInput" class="input-modern" maxlength="120" autocomplete="off" placeholder="Tulis pesan..." onkeydown="if(event.key===\'Enter\')rdSendChat()"><button type="button" class="rd-chat-send" onclick="rdSendChat()" aria-label="Kirim"><i class="fa-solid fa-paper-plane"></i></button></div></div>';
}
function rdChatMsgHtml(m) {
    var mine = state.user && m.userId === state.user.id;
    var av = renderMLBBAvatar({ username: m.username || '?', avatarUrl: m.avatarUrl, borderUrl: m.borderUrl, borderScale: m.borderScale || 1.2, size: 28 });
    return '<div class="rd-chat-msg' + (mine ? ' is-me' : '') + '" data-chat-id="' + m.id + '"><span class="rd-chat-av">' + av + '</span><div class="rd-chat-body"><p class="rd-chat-name">' + escapeHtml(m.displayName || m.username || 'User') + (m.isVerified ? verifiedSvgSize('sm') : '') + '<span class="rd-chat-lv">' + (m.levelUrl ? renderLevelPhoto(m.levelUrl, 14) : '') + 'Lv ' + (m.level || 1) + '</span></p><p class="rd-chat-text">' + escapeHtml(m.content) + '</p></div></div>';
}
function rdChatApply(gm, msgs) {
    if (!rdUi) return; var box = document.getElementById('rdChat'), list = document.getElementById('rdChatList'); if (!box || !list) return;
    if (!gm || !(gm.partner && gm.partner.username)) { box.classList.add('hidden'); if (!gm) { rdUi.chatGame = 0; rdUi.chatAfter = 0; list.innerHTML = ''; } return; }
    box.classList.remove('hidden');
    if (rdUi.chatGame !== gm.id) { rdUi.chatGame = gm.id; rdUi.chatAfter = 0; list.innerHTML = '<p class="rd-chat-empty">Belum ada pesan. Sapa dulu! 👋</p>'; }
    if (!msgs || !msgs.length) return;
    var fresh = msgs.filter(function (m) { return m.id > rdUi.chatAfter; }); if (!fresh.length) return;
    var firstLoad = rdUi.chatAfter === 0; var empty = list.querySelector('.rd-chat-empty'); if (empty && empty.parentNode) empty.parentNode.removeChild(empty);
    list.insertAdjacentHTML('beforeend', fresh.map(rdChatMsgHtml).join(''));
    rdUi.chatAfter = fresh[fresh.length - 1].id;
    while (list.children.length > 40) list.removeChild(list.firstChild);
    list.scrollTop = list.scrollHeight;
    if (!firstLoad && fresh.some(function (m) { return !state.user || m.userId !== state.user.id; })) rdSound('chat', 250);
}
async function rdSendChat(text) {
    if (!rdUi || !rdUi.srv) return; var input = document.getElementById('rdChatInput');
    var content = String(text || (input ? input.value : '') || '').trim(); if (!content) return;
    if (!text && input) input.value = '';
    rdSfxInit();
    var res = await apiCall(rdUi.base + '/chat', { method: 'POST', body: JSON.stringify({ content: content, chatAfter: rdUi.chatAfter }) });
    if (!rdUi) return;
    if (res.success) rdChatApply(rdUi.srv, res.data.chat); else showToast(res.error || 'Gagal mengirim pesan', 'error');
}
function openTrophyLeaderboard() {
    state.leaderboardCategory = 'trophy';
    document.getElementById('leaderboardModal').classList.remove('hidden'); document.body.style.overflow = 'hidden';
    changeLbCategory('trophy');
}
async function loadTrophyLeaderboard(page, container) {
    page = parseInt(page) || 1;
    try {
        var res = await apiCall('/api/dice/leaderboard?page=' + page);
        if (state.leaderboardCategory !== 'trophy') return;
        if (!res || !res.success) { container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Gagal memuat peringkat trophy</p>'; return; }
        var d = res.data || {}; var list = d.users || [];
        function row(u, pinned) {
            var rank = u.rank; var medal = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : (rank ? (pinned ? '#' + rank : rank) : '–')));
            var rc = rank === 1 ? 'gold' : (rank === 2 ? 'silver' : (rank === 3 ? 'bronze' : 'normal'));
            var av = renderMLBBAvatar({ username: u.username || '?', avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 44 });
            return '<div class="leaderboard-item trophy-rank-item" onclick="closeLeaderboardModal(); navigate(\'user/' + escapeAttr(u.username || '') + '\');"><div class="leaderboard-rank ' + rc + '">' + medal + '</div>' + av + '<div class="flex-1 min-w-0"><p class="font-semibold text-sm truncate" style="color: var(--text-primary);">' + escapeHtml(u.displayName || u.username || 'User') + '</p><p class="text-[10px]" style="color: var(--text-muted);">Lv ' + (u.level || 1) + ' · ' + (u.wins || 0) + ' menang</p></div><div class="trophy-count"><span>🏆</span><b>' + formatKoin(u.trophies || 0) + '</b></div></div>';
        }
        var html = '<div class="trophy-season"><span>🏆 Musim ' + escapeHtml(d.seasonLabel || '-') + '</span><span>Reset ' + (d.resetInDays || 0) + ' hari lagi</span></div>';
        if (!list.length) html += '<div class="text-center py-8"><div style="font-size:40px;">🏆</div><p class="text-sm mt-2" style="color: var(--text-muted);">Belum ada yang punya trophy musim ini</p></div>';
        else { html += '<div class="space-y-2">' + list.map(function (u) { return row(u, false); }).join('') + '</div>'; if ((d.totalPages || 1) > 1) html += renderPaginationWithFn(page, d.totalPages, function (p) { return 'loadLeaderboard(' + p + ')'; }); }
        if (d.mine) html += '<div class="leaderboard-my-rank mt-4 sticky bottom-0" style="z-index:20;">' + row(d.mine, true) + '</div>';
        html += '<button type="button" class="btn-couple w-full mt-4" onclick="closeLeaderboardModal(); navigate(\'dice\')">🎲 Main Random Dice</button>';
        container.innerHTML = html;
    } catch (e) { console.error('Trophy leaderboard error:', e); container.innerHTML = '<p class="text-center py-6" style="color: var(--text-muted);">Terjadi kesalahan. Coba lagi.</p>'; }
}
function rdPhaseUi() {
    if (!rdUi) return; var menu = rdUi.phase === 'none' || rdUi.phase === 'lobby' || rdUi.phase === 'loading' || rdUi.phase === '';
    var tabs = document.getElementById('rdRoomTabs'); if (tabs) tabs.classList.toggle('hidden', !menu);
    var back = document.getElementById('rdBackBtn'); if (back) back.classList.toggle('hidden', rdUi.scope === 'global' && (rdUi.phase === 'none' || rdUi.phase === 'loading' || rdUi.phase === ''));
}
/* ==== RANDOM DICE END ==== */
function followBtnLabel(isFollowing, followsMe) { return isFollowing ? '<i class="fa-solid fa-user-check"></i>Mengikuti' : '<i class="fa-solid fa-user-plus"></i>' + (followsMe ? 'Ikuti Balik' : 'Ikuti'); }
function followBtnHtml(userId, isFollowing, followsMe, cls) {
    return '<button type="button" class="' + (cls || 'fbp-btn') + ' follow-btn ' + (isFollowing ? 'is-following' : 'fbp-btn-primary') + '" data-follow-user="' + userId + '" data-following="' + (isFollowing ? '1' : '0') + '" data-follows-me="' + (followsMe ? '1' : '0') + '" onclick="toggleFollow(' + userId + ', this)">' + followBtnLabel(isFollowing, followsMe) + '</button>';
}
function applyFollowState(userId, following, followersCount) {
    document.querySelectorAll('.follow-btn[data-follow-user="' + userId + '"]').forEach(function (b) {
        b.setAttribute('data-following', following ? '1' : '0');
        b.classList.toggle('is-following', !!following); b.classList.toggle('fbp-btn-primary', !following);
        b.innerHTML = followBtnLabel(following, b.getAttribute('data-follows-me') === '1');
    });
    if (following) document.querySelectorAll('.fb-follow-btn[data-follow-user="' + userId + '"]').forEach(function (b) { if (b.parentNode) b.parentNode.removeChild(b); });
    if (state.viewingUserId === userId && typeof followersCount === 'number') { var el = document.getElementById('fbpFollowers'); if (el) el.textContent = formatViews(followersCount); }
}
async function toggleFollow(userId, btn) {
    if (!state.user) { handleAuthButton(); return; }
    var following = !!btn && btn.getAttribute('data-following') === '1';
    if (following && !confirm('Berhenti mengikuti user ini?')) return;
    if (btn) btn.disabled = true;
    var res = await apiCall('/api/follow/' + userId, { method: following ? 'DELETE' : 'POST' });
    if (btn) btn.disabled = false;
    if (!res.success) { showToast(res.error || 'Gagal', 'error'); return; }
    applyFollowState(userId, res.data.following, res.data.followersCount);
    try { haptic('light'); } catch (e) {}
}
async function followFromFeed(userId, btn) {
    if (!state.user) { handleAuthButton(); return; }
    if (btn) btn.disabled = true;
    var res = await apiCall('/api/follow/' + userId, { method: 'POST' });
    if (!res.success) { if (btn) btn.disabled = false; showToast(res.error || 'Gagal', 'error'); return; }
    applyFollowState(userId, true, res.data.followersCount);
    showToast('Kamu sekarang mengikuti user ini', 'success'); try { haptic('light'); } catch (e) {}
}
async function openFollowList(username, type) {
    showInfoModal(type === 'followers' ? 'Pengikut' : 'Mengikuti', '<div class="skeleton" style="height:120px;border-radius:14px;"></div>');
    var res = await apiCall('/api/user/' + username + '/' + type);
    var box = document.getElementById('infoContent'); if (!box) return;
    if (!res.success) { box.innerHTML = '<p class="text-sm text-center" style="color:var(--danger);">' + escapeHtml(res.error || 'Gagal memuat daftar') + '</p>'; return; }
    var users = res.data.users || [];
    if (!users.length) { box.innerHTML = '<div class="text-center py-6"><i class="fa-solid fa-user-group text-3xl mb-2" style="color:var(--text-muted);"></i><p class="text-sm" style="color:var(--text-secondary);">' + (type === 'followers' ? 'Belum ada pengikut' : 'Belum mengikuti siapa pun') + '</p></div>'; return; }
    box.innerHTML = '<div class="follow-list">' + users.map(function (u) {
        var av = renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 44 });
        var btn = (!state.user || u.isSelf) ? '' : followBtnHtml(u.id, u.isFollowing, false, 'follow-mini');
        return '<div class="follow-row"><span class="follow-row-who" onclick="closeInfoModal(); navigate(\'user/' + escapeAttr(u.username) + '\')">' + av + '<span class="follow-row-text"><b>' + escapeHtml(u.displayName || u.username) + (u.isVerified ? verifiedSvgSize('sm') : '') + '</b><span>@' + escapeHtml(u.username) + ' · Lv ' + (u.level || 1) + '</span></span></span>' + btn + '</div>';
    }).join('') + '</div>' + (res.data.total > users.length ? '<p class="text-xs text-center mt-3" style="color:var(--text-muted);">Menampilkan ' + users.length + ' dari ' + res.data.total + '</p>' : '');
}
function streakTier(streak) {
    streak = streak || 0;
    if (streak >= 100) return { id: 4, name: 'Legenda', icon: '💎', from: 100, next: null };
    if (streak >= 30) return { id: 3, name: 'Emas', icon: '👑', from: 30, next: 100 };
    if (streak >= 7) return { id: 2, name: 'Membara', icon: '🔥', from: 7, next: 30 };
    if (streak >= 1) return { id: 1, name: 'Percikan', icon: '✨', from: 1, next: 7 };
    return { id: 0, name: 'Baru Mulai', icon: '🌱', from: 0, next: 1 };
}
/* ============================================================
   PENAMPIL FOTO DENGAN ZOOM — cubit, ketuk 2x, roda mouse, atau tombol
   ============================================================ */
var zoomV = { scale: 1, x: 0, y: 0, min: 1, max: 6, pts: {}, pinch: null, pan: null, moved: false, lastTap: 0, lastTapX: 0, lastTapY: 0, downTarget: null, closeTimer: null, list: [], index: 0, bound: false };
function zoomStageEl() { return document.getElementById('zoomStage'); }
function zoomPoint(e) { var st = zoomStageEl(); var r = st ? st.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 }; return { x: e.clientX - (r.left + r.width / 2), y: e.clientY - (r.top + r.height / 2) }; }
function zoomClamp() {
    var img = document.getElementById('previewImage'), st = zoomStageEl(); if (!img || !st) return;
    var w = img.offsetWidth, h = img.offsetHeight, sw = st.clientWidth, sh = st.clientHeight;
    if (!w || !h || !sw || !sh) return;
    var mx = Math.max(0, (w * zoomV.scale - sw) / 2), my = Math.max(0, (h * zoomV.scale - sh) / 2);
    zoomV.x = Math.max(-mx, Math.min(mx, zoomV.x)); zoomV.y = Math.max(-my, Math.min(my, zoomV.y));
}
function zoomApply(animate) {
    var img = document.getElementById('previewImage'); if (!img) return;
    img.style.transition = animate ? 'transform .2s ease' : 'none';
    img.style.transform = 'translate3d(' + zoomV.x.toFixed(1) + 'px,' + zoomV.y.toFixed(1) + 'px,0) scale(' + zoomV.scale.toFixed(3) + ')';
    var lb = document.getElementById('zoomLabel'); if (lb) lb.textContent = Math.round(zoomV.scale * 100) + '%';
    var st = zoomStageEl(); if (st) st.classList.toggle('is-zoomed', zoomV.scale > 1.01);
}
// Perbesar ke skala tertentu dengan titik (cx, cy) tetap di tempatnya (koordinat dari tengah layar)
function zoomTo(scale, cx, cy, animate) {
    var ns = Math.max(zoomV.min, Math.min(zoomV.max, scale)); var k = ns / zoomV.scale; cx = cx || 0; cy = cy || 0;
    zoomV.x = cx - k * (cx - zoomV.x); zoomV.y = cy - k * (cy - zoomV.y); zoomV.scale = ns;
    if (ns <= 1.001) { zoomV.scale = 1; zoomV.x = 0; zoomV.y = 0; }
    zoomClamp(); zoomApply(animate);
}
function zoomBy(factor) { zoomTo(zoomV.scale * factor, 0, 0, true); }
function zoomReset(animate) { zoomV.scale = 1; zoomV.x = 0; zoomV.y = 0; zoomApply(!!animate); }
function zoomPointerDown(e) {
    if (e.target && e.target.closest && e.target.closest('button')) return;
    zoomV.pts[e.pointerId] = { x: e.clientX, y: e.clientY }; var ids = Object.keys(zoomV.pts);
    zoomV.moved = false; zoomV.downTarget = e.target || null;
    if (ids.length === 2) { var a = zoomV.pts[ids[0]], b = zoomV.pts[ids[1]]; zoomV.pinch = { dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, scale: zoomV.scale }; zoomV.pan = null; }
    else if (ids.length === 1) zoomV.pan = { x: e.clientX, y: e.clientY, ox: zoomV.x, oy: zoomV.y };
}
function zoomPointerMove(e) {
    if (!zoomV.pts[e.pointerId]) return;
    zoomV.pts[e.pointerId] = { x: e.clientX, y: e.clientY }; var ids = Object.keys(zoomV.pts);
    if (ids.length >= 2 && zoomV.pinch) {
        var a = zoomV.pts[ids[0]], b = zoomV.pts[ids[1]]; var dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        var mid = zoomPoint({ clientX: (a.x + b.x) / 2, clientY: (a.y + b.y) / 2 });
        zoomV.moved = true; zoomTo(zoomV.pinch.scale * dist / zoomV.pinch.dist, mid.x, mid.y, false);
    } else if (zoomV.pan) {
        var dx = e.clientX - zoomV.pan.x, dy = e.clientY - zoomV.pan.y;
        if (Math.abs(dx) + Math.abs(dy) > 6) zoomV.moved = true;
        if (zoomV.scale > 1.01) { zoomV.x = zoomV.pan.ox + dx; zoomV.y = zoomV.pan.oy + dy; zoomClamp(); zoomApply(false); }
    }
}
function zoomPointerUp(e) {
    var had = zoomV.pts[e.pointerId]; delete zoomV.pts[e.pointerId]; var left = Object.keys(zoomV.pts);
    if (left.length < 2) zoomV.pinch = null;
    if (left.length === 1) { var p = zoomV.pts[left[0]]; zoomV.pan = { x: p.x, y: p.y, ox: zoomV.x, oy: zoomV.y }; zoomV.moved = true; return; }
    if (!had || left.length) return;
    var pan = zoomV.pan; zoomV.pan = null;
    if (zoomV.moved) {      // geser di ukuran normal = pindah foto
        if (zoomV.scale <= 1.01 && pan && zoomV.list.length > 1) { var sx = e.clientX - pan.x; if (Math.abs(sx) > 60) zoomStep(sx < 0 ? 1 : -1); }
        return;
    }
    var now = Date.now(); var pt = zoomPoint(e);
    if (now - zoomV.lastTap < 320 && Math.abs(pt.x - zoomV.lastTapX) < 40 && Math.abs(pt.y - zoomV.lastTapY) < 40) {      // ketuk 2x
        zoomV.lastTap = 0; if (zoomV.closeTimer) { clearTimeout(zoomV.closeTimer); zoomV.closeTimer = null; }
        if (zoomV.scale > 1.01) zoomReset(true); else zoomTo(2.5, pt.x, pt.y, true);
        return;
    }
    zoomV.lastTap = now; zoomV.lastTapX = pt.x; zoomV.lastTapY = pt.y;
    // ketuk sekali di luar foto pada ukuran normal = tutup
    if (zoomV.scale <= 1.01 && zoomV.downTarget && zoomV.downTarget.id === 'zoomStage') zoomV.closeTimer = setTimeout(function () { zoomV.closeTimer = null; closeImagePreview(); }, 330);
}
function zoomBind() {
    if (zoomV.bound) return; var st = zoomStageEl(); if (!st) return; zoomV.bound = true;
    st.addEventListener('pointerdown', zoomPointerDown);
    st.addEventListener('pointermove', zoomPointerMove);
    st.addEventListener('pointerup', zoomPointerUp);
    st.addEventListener('pointercancel', function (e) { delete zoomV.pts[e.pointerId]; zoomV.pinch = null; zoomV.pan = null; });
    st.addEventListener('wheel', function (e) { e.preventDefault(); var pt = zoomPoint(e); zoomTo(zoomV.scale * (e.deltaY < 0 ? 1.2 : 1 / 1.2), pt.x, pt.y, false); }, { passive: false });
    document.addEventListener('keydown', function (e) {
        var modal = document.getElementById('imagePreviewModal'); if (!modal || modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeImagePreview(); else if (e.key === '+' || e.key === '=') zoomBy(1.5); else if (e.key === '-') zoomBy(1 / 1.5); else if (e.key === '0') zoomReset(true);
        else if (e.key === 'ArrowRight') zoomStep(1); else if (e.key === 'ArrowLeft') zoomStep(-1);
    });
}
function zoomShow() {
    var img = document.getElementById('previewImage'); if (!img) return; var n = zoomV.list.length;
    img.src = zoomV.list[zoomV.index] || ''; zoomReset(false);
    var prev = document.getElementById('zoomPrev'), next = document.getElementById('zoomNext'), cnt = document.getElementById('zoomCount');
    if (prev) prev.classList.toggle('hidden', n < 2); if (next) next.classList.toggle('hidden', n < 2);
    if (cnt) { cnt.classList.toggle('hidden', n < 2); cnt.textContent = (zoomV.index + 1) + ' / ' + n; }
}
function zoomStep(d) { var n = zoomV.list.length; if (n < 2) return; zoomV.index = (zoomV.index + d + n) % n; zoomShow(); }
function openImagePreview(url, list) {
    if (!url) return; zoomBind();
    var arr = (Array.isArray(list) && list.length) ? list : ((state.zoomList && state.zoomList.indexOf(url) !== -1) ? state.zoomList : [url]);
    zoomV.list = arr.slice(); zoomV.index = Math.max(0, zoomV.list.indexOf(url)); zoomV.pts = {}; zoomV.pinch = null; zoomV.pan = null; zoomV.lastTap = 0;
    var modal = document.getElementById('imagePreviewModal'); modal.classList.remove('hidden'); document.body.style.overflow = 'hidden';
    var hint = document.getElementById('zoomHint'); if (hint) { hint.classList.remove('show'); void hint.offsetWidth; hint.classList.add('show'); }
    zoomShow();
}
function closeImagePreview() {
    if (zoomV.closeTimer) { clearTimeout(zoomV.closeTimer); zoomV.closeTimer = null; }
    document.getElementById('imagePreviewModal').classList.add('hidden'); document.body.style.overflow = '';
    zoomV.pts = {}; zoomV.pinch = null; zoomV.pan = null; zoomReset(false);
}
// Foto di feed: ketuk langsung membuka penampil zoom (bisa geser ke foto lain di postingan yang sama)
function openFeedMedia(tile, index) {
    var box = tile && tile.closest ? tile.closest('.fb-media') : null; var list = [];
    try { list = JSON.parse((box && box.getAttribute('data-media')) || '[]'); } catch (e) { list = []; }
    if (list.length) openImagePreview(list[Math.min(index, list.length - 1)], list);
}

/* ============================================================
   IKLAN — tampilan ala unit iklan display.
   Isi tiap slot boleh: kode script, HTML, URL foto, atau URL video.
     https://.../banner.jpg | https://tujuan-klik       (foto + link, link opsional)
     https://.../iklan.mp4  | https://tujuan-klik       (video + link, link opsional)
     https://youtu.be/XXXX                               (video YouTube)
     kode script dari jaringan iklan                     (dijalankan di bingkai terisolasi)
     <a href="..."><img src="..."></a>                   (HTML biasa)
   Awalan opsional untuk memaksa jenis: foto: , video: , iframe: , html:
   ============================================================ */
var adFrameSeq = 0;
function adEsc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function parseAdItem(raw) {
    raw = String(raw || '').trim(); if (!raw) return null;
    var m = raw.match(/^(image|img|foto|video|iframe|html)\s*:\s*([\s\S]+)$/i);
    var forced = m ? m[1].toLowerCase() : ''; var body = m ? m[2].trim() : raw;
    if (forced === 'img' || forced === 'foto') forced = 'image';
    if (forced === 'html') return { type: 'html', code: body };
    if (!forced && /<script[\s>]/i.test(body)) return { type: 'script', code: body };
    var parts = body.split('|'); var url = parts[0].trim(); var link = parts.length > 1 ? parts.slice(1).join('|').trim() : '';
    var isUrl = function (u) { return /^https?:\/\/[^\s<>"']+$/i.test(u); };
    if (isUrl(url) && (!link || isUrl(link))) {
        if (forced === 'iframe') return { type: 'iframe', url: url };
        var yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
        if (!forced && yt) return { type: 'iframe', url: 'https://www.youtube.com/embed/' + yt[1] + '?autoplay=1&mute=1&playsinline=1&rel=0' };
        if (forced === 'video' || (!forced && /\.(mp4|webm|ogv|ogg|mov|m3u8)(\?[^\s]*)?$/i.test(url))) return { type: 'video', url: url, link: link };
        return { type: 'image', url: url, link: link };
    }
    return { type: 'html', code: body };
}
// Kode script dijalankan di dalam iframe terisolasi: script-nya benar-benar jalan (termasuk document.write),
// tetapi tidak bisa membaca token login / data halaman utama.
function adFrameDoc(code, id) {
    return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base target="_blank"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;font-family:Arial,Helvetica,sans-serif;}body{display:flex;flex-direction:column;align-items:center;}img,video,iframe,ins{max-width:100%;}</style></head><body>' + code +
        '<scr' + 'ipt>(function(){var last=0;function r(){var h=Math.max(document.body.scrollHeight,document.body.offsetHeight);if(h&&h!==last){last=h;try{parent.postMessage({fesstaleAd:"' + id + '",h:h},"*");}catch(e){}}}window.addEventListener("load",r);setInterval(r,800);r();})();</scr' + 'ipt></body></html>';
}
function adLinkAttrs(link) { return ' href="' + adEsc(link) + '" target="_blank" rel="noopener nofollow sponsored" onclick="return adOpenLink(this.href)"'; }
function renderAdItem(item) {
    if (item.type === 'image') {
        var img = '<img class="gad-img" src="' + adEsc(item.url) + '" alt="Iklan" loading="lazy" decoding="async" draggable="false">';
        return item.link ? '<a class="gad-link"' + adLinkAttrs(item.link) + '>' + img + '</a>' : img;
    }
    if (item.type === 'video') {
        var hls = /\.m3u8(\?|$)/i.test(item.url) ? ' data-hls="1"' : '';
        return '<div class="gad-video"><video src="' + adEsc(item.url) + '"' + hls + ' muted autoplay loop playsinline controls preload="metadata" controlsList="nodownload noremoteplayback" disablePictureInPicture></video>' +
            (item.link ? '<a class="gad-cta"' + adLinkAttrs(item.link) + '><span>Pelajari selengkapnya</span><i class="fa-solid fa-chevron-right"></i></a>' : '') + '</div>';
    }
    if (item.type === 'iframe') return '<div class="gad-embed"><iframe src="' + adEsc(item.url) + '" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen scrolling="no" title="Iklan"></iframe></div>';
    if (item.type === 'script') {
        var id = 'ad' + (++adFrameSeq);
        return '<iframe class="gad-frame" data-ad-frame="' + id + '" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation" srcdoc="' + adEsc(adFrameDoc(item.code, id)) + '" scrolling="no" title="Iklan"></iframe>';
    }
    return '<div class="gad-html">' + item.code + '</div>';
}
function adClosedMap() { try { return JSON.parse(sessionStorage.getItem('fesstale_ads_closed') || '{}') || {}; } catch (e) { return {}; } }
function renderAdSlots(slotData, position, opts) {
    opts = opts || {}; position = position || 'home_top';
    if (!slotData || !slotData.code || (!slotData.enabled && !opts.preview)) return '';
    if (!opts.preview && isPremiumUser()) return '';
    var items = String(slotData.code).split('|||').map(parseAdItem).filter(Boolean); if (!items.length) return '';
    var closed = opts.preview ? {} : adClosedMap();
    var html = items.map(function (item, i) {
        var key = position + ':' + i; if (closed[key]) return '';
        return '<div class="gad gad-' + item.type + '" data-ad-key="' + key + '"' + (opts.preview ? ' data-ad-preview="1"' : '') + '><div class="gad-top"><span class="gad-label">Iklan</span><span class="gad-tools"><button type="button" class="gad-tool" onclick="adInfo(this)" aria-label="Tentang iklan ini"><i class="fa-solid fa-circle-info"></i></button><button type="button" class="gad-tool" onclick="adClose(this)" aria-label="Tutup iklan"><i class="fa-solid fa-xmark"></i></button></span></div><div class="gad-body">' + renderAdItem(item) + '</div></div>';
    }).join('');
    if (!html) return '';
    return '<div class="gad-slot gad-pos-' + position + (items.length > 1 ? ' gad-multi' : '') + '">' + html + '</div>';
}
function renderAdSlotByPosition(position) { var slot = state.homeNotes.adSlots && state.homeNotes.adSlots[position]; return renderAdSlots(slot, position); }
function adOpenLink(url) { try { var tg = tgWebApp(); if (isRealTelegram() && tg.openLink) { tg.openLink(url); return false; } } catch (e) {} return true; }
function adClose(btn) {
    var box = btn.closest('.gad'); if (!box || box.classList.contains('is-closed')) return; var body = box.querySelector('.gad-body');
    box.querySelectorAll('video').forEach(function (v) { try { v.pause(); } catch (e) {} });
    var info = box.querySelector('.gad-info'); if (info) info.parentNode.removeChild(info);
    box._adHtml = body.innerHTML; box.classList.add('is-closed');
    body.innerHTML = '<div class="gad-closed"><span>Iklan ditutup</span><button type="button" onclick="adUndo(this)">Urungkan</button></div>';
    if (!box.getAttribute('data-ad-preview')) { try { var map = adClosedMap(); map[box.getAttribute('data-ad-key')] = 1; sessionStorage.setItem('fesstale_ads_closed', JSON.stringify(map)); } catch (e) {} }
}
function adUndo(btn) {
    var box = btn.closest('.gad'); if (!box) return; var body = box.querySelector('.gad-body');
    if (box._adHtml != null) body.innerHTML = box._adHtml; box._adHtml = null; box.classList.remove('is-closed');
    try { var map = adClosedMap(); delete map[box.getAttribute('data-ad-key')]; sessionStorage.setItem('fesstale_ads_closed', JSON.stringify(map)); } catch (e) {}
    initAdMedia(box);
}
function adInfo(btn) {
    var box = btn.closest('.gad'); if (!box || box.classList.contains('is-closed')) return;
    var old = box.querySelector('.gad-info'); if (old) { old.parentNode.removeChild(old); return; }
    var el = document.createElement('div'); el.className = 'gad-info';
    el.innerHTML = '<b>Tentang iklan ini</b><p>Iklan ditayangkan oleh Fesstale Movie untuk pengguna gratis. Member VIP bebas iklan.</p><div><button type="button" onclick="openVipModal()">Lihat VIP</button><button type="button" onclick="adInfo(this)">Tutup</button></div>';
    box.appendChild(el);
}
function initAdMedia(root) {
    root = root || document;
    try {
        root.querySelectorAll('.gad video').forEach(function (v) { v.muted = true; });      // wajib bisu agar boleh diputar otomatis di HP
        root.querySelectorAll('.gad video[data-hls]').forEach(function (v) { if (v._hls || typeof Hls === 'undefined' || !Hls.isSupported()) return; var h = new Hls(); v._hls = h; h.loadSource(v.getAttribute('src')); h.attachMedia(v); });
        if ('IntersectionObserver' in window) {      // video iklan hanya diputar saat terlihat di layar
            if (!window.__adIO) window.__adIO = new IntersectionObserver(function (entries) { entries.forEach(function (en) { var v = en.target; try { if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); } catch (e) {} }); }, { threshold: 0.4 });
            root.querySelectorAll('.gad video').forEach(function (v) { if (!v._adSeen) { v._adSeen = 1; window.__adIO.observe(v); } });
        }
    } catch (e) {}
}
// Bingkai iklan script melaporkan tingginya → sesuaikan tinggi iframe
window.addEventListener('message', function (e) {
    var d = e.data; if (!d || !d.fesstaleAd) return;
    var f = document.querySelector('iframe[data-ad-frame="' + String(d.fesstaleAd).replace(/[^a-z0-9]/gi, '') + '"]');
    if (!f || e.source !== f.contentWindow) return;
    f.style.height = Math.max(40, Math.min(640, parseInt(d.h, 10) || 0)) + 'px';
});
// Panel admin: lihat tampilan iklan sebelum disimpan
function previewAdSlot(key) {
    var codes = [1, 2, 3].map(function (n) { var el = document.getElementById('adCode' + n + '_' + key); return el ? el.value.trim() : ''; }).filter(Boolean);
    var box = document.getElementById('adPreview_' + key); if (!box) return;
    if (!codes.length) { box.innerHTML = '<p class="text-[11px]" style="color:var(--text-muted);">Isi dulu salah satu slot.</p>'; return; }
    box.innerHTML = renderAdSlots({ enabled: true, code: codes.join('|||') }, key, { preview: true }); initAdMedia(box);
}

/* ============================================================
   START CEPAT + DATA BERANDA DALAM SATU REQUEST
   ============================================================ */
var notesPromise = null;
function loadNotesOnce() {
    if (state.notesLoaded) return Promise.resolve();
    if (!notesPromise) notesPromise = apiCall('/api/notes').then(function (r) {
        notesPromise = null;
        if (r && r.success) { state.homeNotes = r.data; state.playerAds = r.data.playerAds || []; state.botUsername = r.data.telegramBotUsername || null; state.notesLoaded = true; try { renderCustomTabs(); } catch (e) {} }
    });
    return notesPromise;
}
// Sesi tersimpan milik akun Telegram yang SAMA → aplikasi langsung tampil; pemeriksaan sesi berjalan di belakang layar
function tryCachedSession() {
    try {
        var tg = tgWebApp(); var unsafe = (tg && tg.initDataUnsafe) || {}; var tgUser = unsafe.user;
        if (!tgUser || !tgUser.id) return false;
        if (unsafe.start_param && !startParamToTarget(unsafe.start_param)) return false;      // kode referral harus diproses server saat login
        var token = localStorage.getItem('fesstale_token'); var at = parseInt(localStorage.getItem('fesstale_token_at') || '0', 10);
        var u = JSON.parse(localStorage.getItem('fesstale_user') || 'null');
        if (!token || !u || !at || Date.now() - at > 6 * 86400000) return false;
        if (String(u.telegramId || '') !== String(tgUser.id)) return false;                      // akun Telegram lain di perangkat yang sama
        state.token = token; state.user = u; state.telegramReady = true;
        try { tg.ready(); tg.expand(); } catch (e) {}
        syncTelegramChrome(state.theme || 'light');
        return true;
    } catch (e) { return false; }
}
function verifyCachedSession() {
    apiCall('/api/auth/me').then(async function (me) {
        if (me && me.success && me.data) { state.user = me.data; try { localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } catch (e) {} updateAuthUI(); return; }
        if (me && me.error === 'Network error') return;
        var r = await initTelegramWebApp();      // sesi ditolak server → login ulang, lalu muat ulang halaman yang sedang dibuka
        if (r && r.ok) { state.homeCache = null; updateAuthUI(); navigate(state.currentPage || 'home', false); }
        else { openAuthModal(); showAuthError('Sesi berakhir. Klik "Coba Login Ulang".'); }
    });
}
function cachedHomeData(page) { var c = state.homeCache; var uid = state.user ? state.user.id : 0; return (c && c.page === page && c.uid === uid && Date.now() - c.at < 60000) ? c.results : null; }
async function loadHomeData(page) {
    var uid = state.user ? state.user.id : 0; var results;
    var one = await apiCall('/api/home?page=' + page);
    if (one && one.success && one.data && one.data.latest && one.data.notes) { var d = one.data; results = [d.notes, d.featured, d.trending, d.latest, d.popular, d.recent || null, d.recommendations || null]; }
    else {      // Worker versi lama (belum punya /api/home): cara lama, beberapa request
        var promises = [apiCall('/api/notes'), apiCall('/api/featured'), apiCall('/api/trending?limit=20'), apiCall('/api/content?sort=latest&page=' + page + '&limit=20'), apiCall('/api/content?sort=popular&page=1&limit=10')];
        if (state.user) { promises.push(apiCall('/api/recently-watched')); promises.push(apiCall('/api/recommendations')); }
        results = await Promise.all(promises);
    }
    if (results[3] && results[3].success) state.homeCache = { page: page, uid: uid, at: Date.now(), results: results };
    return results;
}
// Suka / Simpan di feed: tampilkan hasilnya dulu, kirim ke server belakangan
function feedToggle(el, action) {
    var btn = el.querySelector('.fb-act[data-act="' + action + '"]'); if (!btn) return false;
    var cls = action === 'like' ? 'is-liked' : 'is-saved'; var on = !btn.classList.contains(cls);
    btn.classList.toggle(cls, on); var ic = btn.querySelector('i'); if (ic) { ic.classList.toggle('fa-solid', on); ic.classList.toggle('fa-regular', !on); }
    var cnt = el.querySelector('[data-count="' + action + '"]'); if (cnt) cnt.textContent = Math.max(0, (parseInt(cnt.textContent, 10) || 0) + (on ? 1 : -1));
    return true;
}
async function galleryAction(postId, action) {
    if (!state.user) { showToast('Login dulu', 'error'); return; }
    var el = state.currentPage === 'gallery' ? document.querySelector('.fb-post[data-post-id="' + postId + '"]') : null;
    var optimistic = el ? feedToggle(el, action) : false;
    if (optimistic) { try { haptic('light'); } catch (e) {} }
    var data = await apiCall('/api/gallery/' + action + '/' + postId, { method: 'POST' });
    if (!data.success) { showToast(data.error || 'Gagal', 'error'); if (optimistic) refreshFeedPost(postId); return; }
    if (optimistic) return;
    if (state.currentPage && state.currentPage.indexOf('gallery-detail/') === 0) renderGalleryDetail(postId);
    else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername);
    else if (state.currentPage === 'profile') renderProfile();
    else loadGallery(state.pagination.gallery);
}
function cmtToggleReplies(prefix, id) {
    var box = document.getElementById(prefix + 'repliesContainer_' + id), btn = document.getElementById(prefix + 'replyToggle_' + id); if (!box || !btn) return;
    var open = box.classList.contains('hidden'); box.classList.toggle('hidden', !open);
    btn.innerHTML = open ? '<i class="fa-solid fa-chevron-up"></i>Sembunyikan balasan' : '<i class="fa-solid fa-reply fa-flip-vertical"></i>Lihat ' + (btn.getAttribute('data-count') || '') + ' balasan';
}
function cmtGrow(t) { try { t.style.height = 'auto'; t.style.height = Math.min(160, t.scrollHeight) + 'px'; } catch (e) {} }
// Kotak tulis komentar ala Facebook: avatar + kotak membulat, ikon kamera & kirim di dalamnya
function renderCommentComposer(isGallery, targetId) {
    var u = state.user || {}; var pre = isGallery ? 'galleryComment' : 'comment';
    var av = state.user ? renderMLBBAvatar({ username: u.username, avatarUrl: u.avatarUrl, borderUrl: u.borderUrl, borderScale: u.borderScale || 1.2, size: 36 }) : '';
    return '<div class="cmt-composer"><span class="cmt-av">' + av + '</span><div class="cmt-composer-box"><textarea id="' + pre + 'Input" rows="1" maxlength="2000" placeholder="Tulis komentar..." oninput="updateCommentCounter(\'' + pre + 'Input\', \'' + pre + 'Counter\'); cmtGrow(this)"></textarea><div id="' + pre + 'MediaArea"></div><div class="cmt-composer-bar"><button type="button" class="cmt-icon" onclick="openCommentMediaPicker(\'' + (isGallery ? 'gallery' : 'series') + '\', null)" aria-label="Tambah foto"><i class="fa-solid fa-camera"></i></button><span id="' + pre + 'Counter" class="comment-counter">0 / 2000</span><button type="button" class="cmt-send" onclick="' + (isGallery ? 'submitGalleryComment' : 'submitComment') + '(' + targetId + ')" aria-label="Kirim komentar"><i class="fa-solid fa-paper-plane"></i></button></div></div></div>';
}
function renderRoomTabs(active) {
    var tabs = [['nobar', 'party', '🍿', 'Nobar', 'Nonton bareng'], ['game', 'dice', '🎲', 'Game', 'Random Dice'], ['couple', 'couple', '💞', 'Pasangan', 'Streak berdua']];
    return '<div class="room-tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" role="tab" class="room-tab' + (t[0] === active ? ' active' : '') + '" data-room="' + t[0] + '" onclick="navigate(\'' + t[1] + '\')"><span class="room-tab-ic">' + t[2] + '</span><b>' + t[3] + '</b><span>' + t[4] + '</span></button>'; }).join('') + '</div>';
}
function filePreviewUrl(file) { try { return URL.createObjectURL(file); } catch (e) { return ''; } }
// Foto kamera 5–10 MB diperkecil di HP (sisi terpanjang maxDim, JPEG) sebelum diunggah. GIF dan foto kecil dibiarkan.
// Bila ada yang gagal (perangkat tidak mendukung), foto asli yang dipakai.
function compressImage(file, maxDim, quality) {
    return new Promise(function (resolve) {
        try {
            if (!file || !/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < 350 * 1024) { resolve(file); return; }
            var url = URL.createObjectURL(file); var img = new Image(); var done = false;
            var finish = function (out) { if (done) return; done = true; clearTimeout(timer); try { URL.revokeObjectURL(url); } catch (e) {} resolve(out || file); };
            var timer = setTimeout(function () { finish(file); }, 8000);
            img.onerror = function () { finish(file); };
            img.onload = function () {
                try {
                    var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height; if (!w || !h) { finish(file); return; }
                    var k = Math.min(1, maxDim / Math.max(w, h)); var cw = Math.max(1, Math.round(w * k)), ch = Math.max(1, Math.round(h * k));
                    var canvas = document.createElement('canvas'); canvas.width = cw; canvas.height = ch; var ctx = canvas.getContext('2d'); if (!ctx) { finish(file); return; }
                    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cw, ch); ctx.drawImage(img, 0, 0, cw, ch);
                    canvas.toBlob(function (blob) {
                        if (!blob || blob.size >= file.size) { finish(file); return; }
                        var name = String(file.name || 'foto').replace(/\.[^.]+$/, '') + '.jpg';
                        try { finish(new File([blob], name, { type: 'image/jpeg' })); } catch (e) { finish(file); }
                    }, 'image/jpeg', quality || 0.85);
                } catch (e) { finish(file); }
            };
            img.src = url;
        } catch (e) { resolve(file); }
    });
}
function profileImageSpec(kind) {
    return kind === 'cover'
        ? { field: 'cover', api: '/api/profile/cover', input: 'editCoverFile', btn: 'uploadCoverBtn', max: 10, dim: 1600, title: 'Foto Sampul', ok: 'Foto sampul diperbarui', tip: 'Foto melebar paling pas.' }
        : { field: 'avatar', api: '/api/profile/avatar', input: 'editAvatarFile', btn: 'uploadAvatarBtn', max: 8, dim: 640, title: 'Foto Profil', ok: 'Foto profil diperbarui', tip: 'Foto persegi paling pas.' };
}
function openPhotoEditor(kind) {
    if (!state.user) return; var u = state.user; var sp = profileImageSpec(kind); state.pendingProfileImage = null;
    var preview = kind === 'cover'
        ? '<div class="pe-cover" id="pePreview"' + (u.coverUrl ? ' style="background-image:url(\'' + u.coverUrl + '\');"' : '') + '>' + (u.coverUrl ? '' : '<span><i class="fa-solid fa-image"></i>Belum ada foto sampul</span>') + '</div>'
        : '<div class="pe-avatar" id="pePreview">' + (u.avatarUrl ? '<img src="' + u.avatarUrl + '" alt="">' : '<span style="background:' + getAvatarColor(u.username) + ';">' + escapeHtml(String(u.username || '?').charAt(0).toUpperCase()) + '</span>') + '</div>';
    showInfoModal(sp.title, '<div class="pe" data-kind="' + kind + '">' + preview +
        '<p class="pe-hint" id="peHint">' + sp.tip + ' JPG, PNG, WEBP, atau GIF.</p>' +
        '<input type="file" id="' + sp.input + '" accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" onchange="onProfileImagePicked(\'' + kind + '\', this)">' +
        '<button type="button" class="btn-secondary w-full" id="pePickBtn" onclick="document.getElementById(\'' + sp.input + '\').click()"><i class="fa-solid fa-images mr-1"></i>Pilih foto</button>' +
        '<button type="button" class="btn-primary w-full" id="' + sp.btn + '" onclick="uploadProfileImage(\'' + kind + '\')" disabled><i class="fa-solid fa-check mr-1"></i>Simpan</button>' +
        '<button type="button" class="pe-back" onclick="openEditProfile()"><i class="fa-solid fa-arrow-left mr-1"></i>Kembali ke Edit Profil</button></div>');
}
function openAvatarEditor() { openPhotoEditor('avatar'); }
function openCoverEditor() { openPhotoEditor('cover'); }
function onProfileImagePicked(kind, input) {
    var sp = profileImageSpec(kind); var file = input.files && input.files[0]; if (!file) return;
    if (['image/jpeg', 'image/png', 'image/webp', 'image/gif'].indexOf(file.type) === -1) { showToast('Format harus JPG, PNG, WEBP, atau GIF', 'error'); return; }
    if (file.type === 'image/gif' ? file.size > sp.max * 1024 * 1024 : file.size > 30 * 1024 * 1024) { showToast('Ukuran foto terlalu besar', 'error'); return; }
    state.pendingProfileImage = { kind: kind, file: file };
    var url = filePreviewUrl(file); var box = document.getElementById('pePreview');
    if (box && url) { if (kind === 'cover') { box.style.backgroundImage = 'url(' + url + ')'; box.innerHTML = ''; } else box.innerHTML = '<img src="' + url + '" alt="">'; }
    var hint = document.getElementById('peHint'); if (hint) hint.textContent = file.name + ' · ' + (file.size / 1048576).toFixed(1) + ' MB — siap disimpan';
    var btn = document.getElementById(sp.btn); if (btn) btn.disabled = false;
}
async function uploadProfileImage(kind) {
    var sp = profileImageSpec(kind); var pend = state.pendingProfileImage; var input = document.getElementById(sp.input);
    var file = (pend && pend.kind === kind) ? pend.file : (input && input.files ? input.files[0] : null);
    if (!file) { showToast('Pilih foto dulu', 'error'); return; }
    var btn = document.getElementById(sp.btn); if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i>Menyimpan…'; }
    var fail = function (msg) { showToast(msg, 'error'); if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i>Simpan'; } };
    try {
        var ready = await compressImage(file, sp.dim, 0.86);
        if (ready.size > sp.max * 1024 * 1024) { fail('Ukuran foto maksimal ' + sp.max + ' MB'); return; }
        var fd = new FormData(); fd.append(sp.field, ready, ready.name || file.name || 'foto.jpg');
        var response = await fetch(API_BASE + sp.api, { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: fd });
        var data = await response.json();
        if (!data.success) { fail(data.error || 'Gagal mengunggah foto'); return; }
        showToast(sp.ok, 'success'); state.pendingProfileImage = null;
        var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); updateAuthUI(); }
        closeInfoModal();
        if (state.currentPage === 'profile') renderProfile(); else if (state.currentPage && state.currentPage.indexOf('user/') === 0) renderUserProfile(state.viewingUsername);
    } catch (e) { fail('Gagal: ' + e.message); }
}
function scPickPhotos() { var i = document.getElementById('galleryFile'); if (i) i.click(); }
function scTogglePrice() {
    var box = document.getElementById('scPriceBox'), btn = document.getElementById('scPriceToggle'); if (!box) return;
    var show = box.classList.contains('hidden'); box.classList.toggle('hidden', !show); if (btn) btn.classList.toggle('active', show);
    var input = document.getElementById('galleryPrice'); if (!input) return;
    if (show) { try { input.focus(); } catch (e) {} } else { input.value = '0'; }
    updateGalleryPriceHint();
}
function scOnCaption(t) { var c = document.getElementById('captionCount'); if (c) c.textContent = t.value.length + ' / 2000'; try { t.style.height = 'auto'; t.style.height = Math.min(220, t.scrollHeight) + 'px'; } catch (e) {} }
function scRemovePhoto(i) { var list = state.pendingGalleryFiles || []; var f = list.splice(i, 1)[0]; try { if (f && f._preview) URL.revokeObjectURL(f._preview); } catch (e) {} scRenderMedia(); }
function scRenderMedia() {
    var box = document.getElementById('galleryFilePreview'); if (!box) return; var files = state.pendingGalleryFiles || [];
    var btn = document.getElementById('uploadGalleryBtn');
    if (btn) { btn.disabled = files.length === 0; btn.innerHTML = files.length ? '<i class="fa-solid fa-paper-plane mr-1"></i>Posting ' + files.length + ' foto' : 'Pilih foto dulu'; }
    if (!files.length) { box.innerHTML = '<button type="button" class="sc-drop" onclick="scPickPhotos()"><span class="sc-drop-ic"><i class="fa-solid fa-images"></i></span><b>Tambah foto</b><span>Maks 10 foto · JPG, PNG, WEBP, GIF</span></button>'; return; }
    var tiles = files.map(function (f, i) {
        var url = f._preview || (f._preview = filePreviewUrl(f));
        return '<div class="sc-thumb">' + (url ? '<img src="' + url + '" alt="">' : '<span class="sc-thumb-name">' + escapeHtml(f.name || 'foto') + '</span>') + '<span class="sc-thumb-no">' + (i + 1) + '</span><button type="button" class="sc-thumb-x" onclick="scRemovePhoto(' + i + ')" aria-label="Hapus foto"><i class="fa-solid fa-xmark"></i></button></div>';
    }).join('');
    var add = files.length < 10 ? '<button type="button" class="sc-thumb sc-thumb-add" onclick="scPickPhotos()" aria-label="Tambah foto"><i class="fa-solid fa-plus"></i></button>' : '';
    var mb = files.reduce(function (a, f) { return a + f.size; }, 0) / 1048576;
    box.innerHTML = '<div class="sc-grid">' + tiles + add + '</div><p class="sc-media-info">' + files.length + ' / 10 foto · ' + mb.toFixed(1) + ' MB' + (mb > 1 ? ' (diperkecil otomatis saat diunggah)' : '') + '</p>';
}
var CARD_TIERS = [['#94a3b8', '#a78bfa', '#818cf8'], ['#f97316', '#ec4899', '#8b5cf6'], ['#ff512f', '#dd2476', '#7c3aed'], ['#f59e0b', '#f97316', '#db2777'], ['#1e1b4b', '#6d28d9', '#db2777']];
function cardRoundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function cardFit(ctx, text, maxW) { text = String(text || ''); if (ctx.measureText(text).width <= maxW) return text; while (text.length > 1 && ctx.measureText(text + '…').width > maxW) text = text.slice(0, -1); return text + '…'; }
function cardFlame(ctx, cx, cy, s, fill, inner) {
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s / 100, s / 100);
    ctx.beginPath(); ctx.moveTo(4, -62); ctx.bezierCurveTo(10, -34, 44, -20, 44, 18); ctx.bezierCurveTo(44, 46, 24, 62, 0, 62); ctx.bezierCurveTo(-24, 62, -44, 46, -44, 18); ctx.bezierCurveTo(-44, -2, -30, -14, -24, -32); ctx.bezierCurveTo(-14, -22, -4, -34, 4, -62); ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
    ctx.beginPath(); ctx.moveTo(2, 2); ctx.bezierCurveTo(8, 16, 22, 22, 22, 36); ctx.bezierCurveTo(22, 48, 12, 56, 0, 56); ctx.bezierCurveTo(-12, 56, -22, 48, -22, 36); ctx.bezierCurveTo(-22, 24, -8, 18, 2, 2); ctx.closePath(); ctx.fillStyle = inner; ctx.fill();
    ctx.restore();
}
function cardHeart(ctx, cx, cy, s, fill) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s / 100, s / 100); ctx.beginPath(); ctx.moveTo(0, 34); ctx.bezierCurveTo(-58, -4, -34, -50, 0, -20); ctx.bezierCurveTo(34, -50, 58, -4, 0, 34); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.restore(); }
function cardStar(ctx, cx, cy, r, alpha) { ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = '#fff'; ctx.beginPath(); for (var i = 0; i < 8; i++) { var a = Math.PI / 4 * i - Math.PI / 2; var rr = i % 2 ? r * 0.3 : r; ctx.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } ctx.closePath(); ctx.fill(); ctx.restore(); }
function cardPill(ctx, text, x, y, align, bg, fg, font) {
    ctx.font = font; var w = ctx.measureText(text).width + 56, h = 64; var left = align === 'right' ? x - w : x;
    cardRoundRect(ctx, left, y, w, h, 32); ctx.fillStyle = bg; ctx.fill(); ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, left + w / 2, y + h / 2 + 2);
}
function cardAvatar(ctx, p, img, borderImg, cx, cy, r, font) {
    p = p || {}; var hex = (String(getAvatarColor(p.username)).match(/#[0-9a-fA-F]{6}/) || ['#7c3aed'])[0];
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.closePath(); ctx.clip();
    if (img) { var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height; var k = Math.max(2 * r / iw, 2 * r / ih); ctx.drawImage(img, cx - iw * k / 2, cy - ih * k / 2, iw * k, ih * k); }
    else { ctx.fillStyle = hex; ctx.fillRect(cx - r, cy - r, 2 * r, 2 * r); ctx.fillStyle = '#fff'; ctx.font = '700 ' + Math.round(r * 0.95) + 'px ' + font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(p.username || '?').charAt(0).toUpperCase(), cx, cy + r * 0.06); }
    ctx.restore();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.lineWidth = 9; ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.stroke();
    if (borderImg) { var bs = 2 * r * (p.borderScale || 1.2); ctx.drawImage(borderImg, cx - bs / 2, cy - bs / 2, bs, bs); }
}
function drawStreakCardCanvas(ctx, W, H, c, imgs) {
    imgs = imgs || {}; var streak = c.streak || 0; var tier = streakTier(streak); var pal = CARD_TIERS[tier.id]; var F = 'Fredoka, Nunito, "Segoe UI", Arial, sans-serif'; var i;
    var bg = ctx.createLinearGradient(0, 0, W, H); bg.addColorStop(0, pal[0]); bg.addColorStop(0.52, pal[1]); bg.addColorStop(1, pal[2]); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    if (tier.id >= 4 && ctx.createConicGradient) { var cg = ctx.createConicGradient(0, W / 2, H / 2); ['#f0abfc', '#67e8f9', '#fde68a', '#86efac', '#f0abfc'].forEach(function (col, n) { cg.addColorStop(n / 4, col); }); ctx.save(); ctx.globalAlpha = 0.2; ctx.fillStyle = cg; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.beginPath(); ctx.arc(W - 70, 90, 310, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(50, H - 100, 240, 0, Math.PI * 2); ctx.fill();
    // kilau hanya di area kosong (tidak menimpa teks)
    var spots = [[150, 232], [930, 246], [330, 196], [760, 188], [60, 330], [1022, 336], [480, 722], [604, 704], [48, 600], [1034, 566], [430, 1148], [646, 1140], [200, 1272], [884, 1266], [540, 752], [1040, 900], [44, 984], [330, 1302], [760, 1292], [590, 160], [1032, 770], [40, 772]];
    var stars = [0, 0, 8, 14, 22][tier.id]; for (i = 0; i < stars; i++) cardStar(ctx, spots[i][0], spots[i][1], 10 + (i * 7) % 13, 0.35 + ((i * 13) % 5) / 10);
    if (tier.id >= 3) { ctx.lineWidth = 10; ctx.strokeStyle = tier.id >= 4 ? '#e9d5ff' : '#fde68a'; cardRoundRect(ctx, 24, 24, W - 48, H - 48, 56); ctx.stroke(); if (tier.id >= 4) { ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(255,255,255,0.5)'; cardRoundRect(ctx, 44, 44, W - 88, H - 88, 44); ctx.stroke(); } }
    cardPill(ctx, 'KARTU STREAK', 76, 80, 'left', 'rgba(255,255,255,0.22)', '#fff', '600 30px ' + F);
    cardPill(ctx, String(tier.name).toUpperCase(), W - 76, 80, 'right', tier.id >= 3 ? '#fff' : 'rgba(255,255,255,0.22)', tier.id >= 4 ? '#6d28d9' : (tier.id === 3 ? '#b45309' : '#fff'), '600 30px ' + F);
    var ay = 450, r = 130, lx = 232, rx = W - 232; var me = c.me || {}, pt = c.partner || {};
    cardAvatar(ctx, me, imgs.meAvatar, imgs.meBorder, lx, ay, r, F); cardAvatar(ctx, pt, imgs.ptAvatar, imgs.ptBorder, rx, ay, r, F);
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.font = '600 42px ' + F;
    ctx.fillText(cardFit(ctx, me.displayName || me.username || 'Kamu', 330), lx, ay + r + 84); ctx.fillText(cardFit(ctx, pt.displayName || pt.username || 'Pasangan', 330), rx, ay + r + 84);
    [[me, lx], [pt, rx]].forEach(function (pair) { var on = !!pair[0].checkedInToday; cardPillCenter(ctx, on ? '✓ Check-in' : 'Belum check-in', pair[1], ay + r + 112, on ? '#fff' : 'rgba(255,255,255,0.22)', on ? '#db2777' : '#fff', '700 24px ' + F); });
    cardFlame(ctx, W / 2, 290, 150, streak > 0 ? '#fff' : 'rgba(255,255,255,0.45)', streak > 0 ? '#f97316' : 'rgba(255,255,255,0.3)');
    var digits = String(streak).length; ctx.font = '700 ' + (digits <= 2 ? 220 : (digits === 3 ? 160 : 120)) + 'px ' + F; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(0,0,0,0.16)'; ctx.fillText(String(streak), W / 2 + 4, 560 + 6); ctx.fillStyle = tier.id === 3 ? '#fffbeb' : '#fff'; ctx.fillText(String(streak), W / 2, 560);
    ctx.font = '700 30px ' + F; ctx.fillText('HARI STREAK', W / 2, 612);
    var py = 790; cardRoundRect(ctx, 70, py, W - 140, 214, 40); ctx.fillStyle = 'rgba(255,255,255,0.17)'; ctx.fill();
    var week = c.week || []; var slot = (W - 140) / 7;
    for (i = 0; i < 7; i++) {
        var d = week[i] || {}; var dx = 70 + slot * (i + 0.5), dy = py + 86; var both = d.me && d.partner, half = !both && (d.me || d.partner);
        ctx.beginPath(); ctx.arc(dx, dy, 42, 0, Math.PI * 2); ctx.fillStyle = both ? '#fff' : (half ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.22)'); ctx.fill();
        if (d.isToday) { ctx.lineWidth = 5; ctx.strokeStyle = '#fff'; ctx.beginPath(); ctx.arc(dx, dy, 51, 0, Math.PI * 2); ctx.stroke(); }
        if (both) cardFlame(ctx, dx, dy - 1, 46, '#f97316', '#fde68a'); else if (half) cardHeart(ctx, dx, dy + 2, 44, '#fff');
        ctx.fillStyle = '#fff'; ctx.font = '700 26px ' + F; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillText(String(d.label || ''), dx, py + 182);
    }
    var nextTier = tier.next ? streakTier(tier.next) : null; var pct = tier.next ? Math.max(0.04, (streak - tier.from) / (tier.next - tier.from)) : 1;
    ctx.font = '700 28px ' + F; ctx.textAlign = 'left'; ctx.fillStyle = '#fff'; ctx.fillText(nextTier ? (tier.next - streak) + ' hari lagi ke tier ' + nextTier.name : 'Tier tertinggi tercapai', 76, 1066);
    cardRoundRect(ctx, 76, 1084, W - 152, 16, 8); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fill(); cardRoundRect(ctx, 76, 1084, Math.max(16, (W - 152) * pct), 16, 8); ctx.fillStyle = '#fff'; ctx.fill();
    ctx.font = '700 30px ' + F; ctx.textAlign = 'left'; ctx.fillText('Rekor ' + (c.bestStreak || 0) + ' hari', 76, 1170); ctx.textAlign = 'right'; ctx.fillText('Bersama ' + (c.daysTogether || 1) + ' hari', W - 76, 1170);
    ctx.textAlign = 'center'; ctx.globalAlpha = 0.9; ctx.font = '600 26px ' + F; ctx.fillText('Sejak ' + (c.pairedAtText || '-'), W / 2, 1222);
    ctx.font = '700 32px ' + F; ctx.fillText('Fesstale Movie', W / 2, H - 62); ctx.globalAlpha = 1;
}
function cardPillCenter(ctx, text, cx, y, bg, fg, font) { ctx.font = font; var w = ctx.measureText(text).width + 40, h = 46; cardRoundRect(ctx, cx - w / 2, y, w, h, 23); ctx.fillStyle = bg; ctx.fill(); ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, cx, y + h / 2 + 1); }
// Gambar dari domain lain hanya boleh masuk kanvas bila servernya mengizinkan (CORS). Gambar Gyazo dilewatkan Worker supaya pasti boleh.
function cardImageUrl(url) {
    if (!url) return '';
    if (/^https:\/\/i\.gyazo\.com\//.test(url) && !document.documentElement.getAttribute('data-standalone')) return API_BASE + '/api/download-image?src=' + encodeURIComponent(url);
    return url;
}
function cardLoadImage(url) {
    return new Promise(function (resolve) {
        url = cardImageUrl(url); if (!url) { resolve(null); return; }
        try {
            var img = new Image(); var done = false; var fin = function (v) { if (!done) { done = true; resolve(v); } };
            if (url.indexOf('data:') !== 0) img.crossOrigin = 'anonymous';
            img.onload = function () { fin(img); }; img.onerror = function () { fin(null); };
            setTimeout(function () { fin(null); }, 2500); img.src = url;
        } catch (e) { resolve(null); }
    });
}
async function buildStreakCardImage(c) {
    try {
        var W = 1080, H = 1350; var canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H; var ctx = canvas.getContext('2d'); if (!ctx) return null;
        try { if (document.fonts && document.fonts.load) await Promise.race([Promise.all([document.fonts.load('700 100px Fredoka'), document.fonts.load('600 40px Fredoka')]), new Promise(function (r) { setTimeout(r, 1500); })]); } catch (e) {}
        var me = c.me || {}, pt = c.partner || {};
        var list = await Promise.all([cardLoadImage(me.avatarUrl), cardLoadImage(me.borderUrl), cardLoadImage(pt.avatarUrl), cardLoadImage(pt.borderUrl)]);
        drawStreakCardCanvas(ctx, W, H, c, { meAvatar: list[0], meBorder: list[1], ptAvatar: list[2], ptBorder: list[3] });
        var blob = await new Promise(function (resolve) { try { canvas.toBlob(resolve, 'image/jpeg', 0.92); } catch (e) { resolve(null); } });
        if (!blob) return null;
        var url = ''; try { url = URL.createObjectURL(blob); } catch (e) {}
        if (!url) { try { url = canvas.toDataURL('image/jpeg', 0.92); } catch (e) {} }
        return { blob: blob, url: url, name: 'kartu-streak-' + (c.streak || 0) + '-hari.jpg' };
    } catch (e) { console.warn('Kartu streak gagal dibuat:', e); return null; }
}
async function downloadStreakCard() {
    var c = state.couple; if (!c || c.status !== 'active') { showToast('Kartu streak ada setelah kamu punya pasangan', 'info'); return; }
    showToast('Menyiapkan kartu…', 'info');
    var out = await buildStreakCardImage(c);
    if (!out) { showToast('Perangkat ini tidak bisa membuat gambar kartu', 'error'); return; }
    state.streakCardFile = out;
    showInfoModal('Kartu Streak', '<div class="card-dl">' + (out.url ? '<img class="card-dl-img" src="' + out.url + '" alt="Kartu streak" data-allow-save="1">' : '') +
        '<div class="flex gap-2"><button type="button" class="btn-primary flex-1" id="cardSaveBtn" onclick="saveStreakCardFile()"><i class="fa-solid fa-download mr-1"></i>Unduh JPG</button><button type="button" class="btn-secondary flex-1" onclick="shareStreakCardFile()"><i class="fa-solid fa-share mr-1"></i>Bagikan</button></div>' +
        '<p class="card-dl-hint">Kalau unduhan tidak muncul, tekan lama gambar di atas lalu pilih Simpan.</p></div>');
}
async function uploadCardForDownload(out) {
    if (out.remoteUrl) return out.remoteUrl;
    var fd = new FormData(); fd.append('image', out.blob, out.name);
    var res = await fetch(API_BASE + '/api/upload/gyazo', { method: 'POST', headers: { 'Authorization': 'Bearer ' + state.token }, body: fd }); var data = await res.json();
    if (!data.success || !data.data || !data.data.url) throw new Error(data.error || 'Kartu gagal diunggah');
    out.remoteUrl = API_BASE + '/api/download-image?src=' + encodeURIComponent(data.data.url) + '&name=' + encodeURIComponent(out.name);
    return out.remoteUrl;
}
async function saveStreakCardFile() {
    var out = state.streakCardFile; if (!out) return; var tg = tgWebApp(); var btn = document.getElementById('cardSaveBtn');
    var busy = function (on) { if (btn) { btn.disabled = on; btn.innerHTML = on ? '<i class="fa-solid fa-spinner fa-spin mr-1"></i>Menyiapkan…' : '<i class="fa-solid fa-download mr-1"></i>Unduh JPG'; } };
    // Di dalam Telegram (versi 8.0+): pakai unduhan bawaan Telegram. Butuh alamat https, jadi kartu diunggah dulu.
    if (isRealTelegram() && tg.downloadFile && tg.isVersionAtLeast && tg.isVersionAtLeast('8.0')) {
        try {
            busy(true); var url = await uploadCardForDownload(out); busy(false);
            tg.downloadFile({ url: url, file_name: out.name }, function (accepted) { if (accepted) showToast('Kartu sedang diunduh', 'success'); });
            return;
        } catch (e) { busy(false); showToast((e.message || 'Gagal') + '. Mencoba cara lain…', 'info'); }
    }
    try { var a = document.createElement('a'); a.href = out.url; a.download = out.name; a.rel = 'noopener'; document.body.appendChild(a); a.click(); document.body.removeChild(a); showToast('Kartu diunduh: ' + out.name, 'success'); }
    catch (e) { showToast('Tekan lama gambar lalu pilih Simpan', 'info'); }
}
async function shareStreakCardFile() {
    var out = state.streakCardFile; if (!out) return; var file = null;
    try { file = new File([out.blob], out.name, { type: 'image/jpeg' }); } catch (e) {}
    try { if (file && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Kartu Streak' }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    shareCouple();
}
function closePlayerModal() { document.getElementById('playerModal').classList.add('hidden'); document.body.style.overflow = ''; }

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) { searchInput.addEventListener('input', function(e) { clearTimeout(searchTimeout); var query = e.target.value.trim(); searchTimeout = setTimeout(function() { performSearch(query, 1); }, 500); }); }
    document.querySelectorAll('.modal-backdrop').forEach(function(modal) { modal.addEventListener('click', function(e) { if (e.target === modal) { if (modal.id === 'authModal') closeAuthModal(); else if (modal.id === 'playerModal') closePlayerModal(); else if (modal.id === 'shopModal') closeShopModal(); else if (modal.id === 'infoModal') closeInfoModal(); else if (modal.id === 'vipModal') closeVipModal(); else if (modal.id === 'leaderboardModal') closeLeaderboardModal(); else if (modal.id === 'voucherModal') closeVoucherModal(); else if (modal.id === 'giftModal') closeGiftModal(); else if (modal.id === 'imagePreviewModal') closeImagePreview(); else if (modal.id === 'transferModal') closeTransferModal(); } }); });
});

if ('serviceWorker' in navigator) { window.addEventListener('load', function() { navigator.serviceWorker.register('/sw.js').catch(function() {}); }); }

window.addEventListener('popstate', function(e) {
    destroyActivePlayer(); stopCouplePoll(); rdStopAll(); if (partyPollInterval) { clearInterval(partyPollInterval); partyPollInterval = null; }
    var path = window.location.pathname, search = window.location.search;
    if (path === '/' || path === '') { state.currentPage = 'home'; renderHome(); }
    else if (path === '/genre') { state.currentPage = 'genre'; renderGenrePage(); }
    else if (path === '/story' || path === '/gallery') { var galId = new URLSearchParams(search).get('id'); if (galId) { state.currentPage = 'gallery-detail/' + galId; renderGalleryDetail(galId); } else { state.currentPage = 'gallery'; renderGalleryPage(); } }
    else if (path === '/request') { state.currentPage = 'request'; renderRequestPage(); }
    else if (path === '/party') { state.currentPage = 'party'; renderPartyPage(); }
    else if (path === '/couple') { state.currentPage = 'couple'; renderCouplePage(); }
    else if (path === '/couple/game') { state.currentPage = 'couple-game'; renderCoupleGamePage(); }
    else if (path === '/dice') { state.currentPage = 'dice'; renderDicePage(); }
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
    syncTelegramChrome(state.theme || 'light');
    if (!tg.initData) { return { ok: false, reason: 'no_initdata' }; }
    try {
        const startParam = (tg.initDataUnsafe && tg.initDataUnsafe.start_param) ? tg.initDataUnsafe.start_param : null;
        const res = await apiCall('/api/auth/telegram-webapp', { method: 'POST', body: JSON.stringify({ initData: tg.initData, startParam: startParam }) });
        if (res.success) { state.token = res.data.token; state.user = res.data.user; state.telegramReady = true; localStorage.setItem('fesstale_token', state.token); localStorage.setItem('fesstale_user', JSON.stringify(state.user)); localStorage.setItem('fesstale_token_at', String(Date.now())); return { ok: true, isNew: res.data.isNew }; }
        return { ok: false, reason: res.error || 'auth_failed' };
    } catch (e) { console.error('TG WebApp auto-login error:', e); return { ok: false, reason: e.message }; }
}

async function init() {
    initTheme();
    if (!isInTelegram()) { await loadNotesOnce(); showTelegramGate(); return; }
    var cachedSession = tryCachedSession();
    var tgResult = cachedSession ? { ok: true } : await initTelegramWebApp();
    if (!tgResult.ok) {
        var savedToken = localStorage.getItem('fesstale_token');
        if (savedToken) { state.token = savedToken; var me = await apiCall('/api/auth/me'); if (me.success) { state.user = me.data; localStorage.setItem('fesstale_user', JSON.stringify(state.user)); } else { localStorage.removeItem('fesstale_token'); localStorage.removeItem('fesstale_user'); openAuthModal(); showAuthError('Auto-login gagal. Klik "Coba Login Ulang".'); return; } }
        else { openAuthModal(); showAuthError('Auto-login gagal. Klik "Coba Login Ulang".'); return; }
    } else if (tgResult.isNew) { showToast('🎉 Akun berhasil dibuat dari Telegram!', 'success'); }
    hideTelegramGate(); updateAuthUI(); if (cachedSession) verifyCachedSession(); else refreshMeSilently(); loadFooterStats(); loadStoryBadge(); initConnectionWatch();
    if (handleStartParamDeepLink()) { updateNavUI(state.currentPage); loadNotesOnce(); return; }
    var path = window.location.pathname, search = window.location.search;
    var viewMatch = path.match(/^\/view$/); var pageMatch = path.match(/^\/page$/); var userMatch = path.match(/^\/@([a-zA-Z0-9_]+)$/); var partyRoomMatch = path.match(/^\/party\/([A-Z0-9]{4,10})$/i); var galeriMatch = path.match(/^\/story$/) || path.match(/^\/galeri$/) || path.match(/^\/gallery$/);
    if (viewMatch) { var id = new URLSearchParams(search).get('id'); if (id) { state.currentPage = 'watch/' + id; renderWatchPage(id); } else navigate('home'); }
    else if (partyRoomMatch) { state.currentPage = 'party-room/' + partyRoomMatch[1]; renderPartyRoomPage(partyRoomMatch[1]); }
    else if (path === '/party') { state.currentPage = 'party'; renderPartyPage(); }
    else if (path === '/couple') { state.currentPage = 'couple'; renderCouplePage(); }
    else if (path === '/couple/game') { state.currentPage = 'couple-game'; renderCoupleGamePage(); }
    else if (path === '/dice') { state.currentPage = 'dice'; renderDicePage(); }
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
    if (state.currentPage !== 'home') loadNotesOnce();
}

init();
</script>
</body>
</html>`;
