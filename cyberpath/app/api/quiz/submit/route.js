import fs from 'fs/promises';
import path from 'path';

const STORE = path.join(process.cwd(), 'data', 'quiz-storage.json');

async function readStore() {
  try {
    const raw = await fs.readFile(STORE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { scores: {}, unlocked: {} };
  }
}

async function writeStore(obj) {
  await fs.mkdir(path.dirname(STORE), { recursive: true });
  await fs.writeFile(STORE, JSON.stringify(obj, null, 2), 'utf8');
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { goal, idx, score } = body;
    if (!goal || typeof idx !== 'number' || typeof score !== 'number') {
      return new Response(JSON.stringify({ error: 'invalid body' }), { status: 400 });
    }

    const store = await readStore();
    store.scores[goal] = store.scores[goal] || {};
    store.scores[goal][idx] = store.scores[goal][idx] || { attempts: [] };
    store.scores[goal][idx].attempts.push({ score, ts: Date.now() });
    store.scores[goal][idx].last = score;

    // unlock next milestone if passed
    if (score >= 80) {
      store.unlocked[goal] = store.unlocked[goal] || [0];
      const next = idx + 1;
      if (!store.unlocked[goal].includes(next)) {
        store.unlocked[goal].push(next);
      }
    }

    await writeStore(store);
    return new Response(JSON.stringify({ ok: true, store }), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
