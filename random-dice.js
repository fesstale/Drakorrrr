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
