import { quizzes } from '../../../../lib/quizzes';
function seededShuffle(arr, seed) {
  const a = arr.slice();
  let random = seed || 1;
  function rand() {
    random = (random * 9301 + 49297) % 233280;
    return random / 233280;
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const goal = url.searchParams.get('goal');
    const idx = parseInt(url.searchParams.get('idx') || '0', 10);
    const attempt = parseInt(url.searchParams.get('attempt') || '1', 10);
    if (!goal || !quizzes[goal] || !quizzes[goal][idx]) {
      return new Response(JSON.stringify({ error: 'No quiz available' }), { status: 404 });
    }
    const bank = quizzes[goal][idx];
    // Ensure at least 10 questions per quiz by repeating the bank as needed
    const desired = 10;
    let expanded = bank.slice();
    while (expanded.length < desired) {
      // clone items to avoid accidental shared references
      expanded = expanded.concat(bank.map((q) => ({ ...q })));
    }
    const questions = seededShuffle(expanded, attempt).slice(0, desired);
    return new Response(JSON.stringify({ questions }), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
