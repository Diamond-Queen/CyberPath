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

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const goal = url.searchParams.get('goal');
    const store = await readStore();
    if (!goal) {
      return new Response(JSON.stringify(store), { headers: { 'Content-Type': 'application/json' } });
    }
    const unlocked = store.unlocked && store.unlocked[goal] ? store.unlocked[goal] : [0];
    const scores = store.scores && store.scores[goal] ? store.scores[goal] : {};
    return new Response(JSON.stringify({ unlocked, scores }), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
