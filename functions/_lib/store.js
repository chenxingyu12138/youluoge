/** Cloudflare KV 统计存储（Pages Functions 专用） */

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

async function getNum(kv, key) {
  return parseInt((await kv.get(key)) || '0', 10);
}

async function incr(kv, key) {
  const v = (await getNum(kv, key)) + 1;
  await kv.put(key, String(v));
  return v;
}

async function getJson(kv, key, fallback) {
  const raw = await kv.get(key);
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

async function putJson(kv, key, value) {
  await kv.put(key, JSON.stringify(value));
}

export async function recordVisit(kv, { path, title, referrer, visitor }) {
  const day = todayKey();
  const now = new Date().toISOString();

  await incr(kv, 'stats:total');
  await incr(kv, `stats:day:${day}`);

  const pages = await getJson(kv, 'stats:pages', {});
  pages[path] = (pages[path] || 0) + 1;
  await putJson(kv, 'stats:pages', pages);

  const uvKey = `stats:uv:${day}`;
  const uvSet = new Set(await getJson(kv, uvKey, []));
  uvSet.add(visitor);
  await putJson(kv, uvKey, [...uvSet]);

  const recent = await getJson(kv, 'stats:recent', []);
  recent.unshift({ path, title, referrer, time: now });
  await putJson(kv, 'stats:recent', recent.slice(0, 200));
}

export async function getStats(kv) {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }

  const total = await getNum(kv, 'stats:total');
  const daily = [];
  for (const date of days) {
    const pv = await getNum(kv, `stats:day:${date}`);
    const uvList = await getJson(kv, `stats:uv:${date}`, []);
    daily.push({ date, pv, uv: uvList.length });
  }

  const pagesObj = await getJson(kv, 'stats:pages', {});
  const pages = Object.entries(pagesObj)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  const recent = (await getJson(kv, 'stats:recent', [])).slice(0, 50);

  return {
    total,
    today: daily[daily.length - 1],
    daily,
    pages,
    recent,
    updatedAt: new Date().toISOString()
  };
}

export function visitorHash(request) {
  const ip = request.headers.get('CF-Connecting-IP')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
  const ua = request.headers.get('user-agent') || '';
  let hash = 0;
  const str = `${ip}|${ua}`;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

export function checkAuth(request, env) {
  const password = env.ADMIN_PASSWORD;
  if (!password) return false;
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const url = new URL(request.url);
  const query = url.searchParams.get('key') || '';
  return token === password || query === password;
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
