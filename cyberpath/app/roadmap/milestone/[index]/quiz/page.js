"use client";
import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import styles from "../../../../../styles/Home.module.css";
import { roadmapData } from "../../../../../lib/data";

function MilestoneQuizContent() {
  const params = useParams();
  const search = useSearchParams();
  const router = useRouter();
  const goal = search.get("goal");
  const idx = parseInt(params.index || "0", 10);
  const roadmap = roadmapData[goal];
  const milestone = roadmap ? roadmap.milestones[idx] : null;

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (!goal) return;
    // fetch status first to know attempt count
    fetch(`/api/quiz/status?goal=${encodeURIComponent(goal)}`)
      .then((r) => r.json())
      .then((data) => {
        const goalScores = data.scores || {};
        const entry = goalScores[idx] || { attempts: [] };
        const attempts = entry.attempts ? entry.attempts.length : 0;
        const nextAttempt = attempts + 1;
        return fetch(`/api/quiz/content?goal=${encodeURIComponent(goal)}&idx=${idx}&attempt=${nextAttempt}`);
      })
      .then((r) => r.json())
      .then((payload) => {
        setQuestions(payload.questions || []);
      })
      .catch(() => {
        setQuestions([]);
      });
  }, [goal, idx]);

  function selectAnswer(qi, choice) {
    setAnswers((prev) => ({ ...prev, [qi]: choice }));
  }

  async function submit() {
    const total = questions.length;
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.a) correct++;
    });
    const pct = Math.round((correct / total) * 100);
    setScore(pct);
    setPassed(pct >= 80);

    if (goal) {
      await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, idx, score: pct })
      });
    }
  }

  if (!roadmap || !milestone) {
    return <div className={styles.roadmapRoot}>Quiz not available.</div>;
  }

  return (
    <main className={styles.roadmapRoot}>
      <header className={styles.roadmapNav}>
        <button className={styles.backButton} onClick={() => router.back()}>
          ← Back
        </button>
        <div className={styles.roadmapNavTitle}>
          <h2>{milestone} — Quiz</h2>
        </div>
      </header>

      <section className={styles.roadmapCard}>
        {questions.length === 0 && <p>No quiz available yet.</p>}
        {questions.map((q, i) => (
          <div key={i} style={{marginBottom: '12px'}}>
            <div><strong>{i + 1}. {q.q}</strong></div>
            <div style={{display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap'}}>
              {q.choices.map((c, ci) => (
                <button
                  key={ci}
                  className={answers[i] === ci ? styles.primaryButton : styles.secondaryButton}
                  onClick={() => selectAnswer(i, ci)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div style={{display: 'flex', gap: '8px', marginTop: '12px'}}>
          <button className={styles.primaryButton} onClick={submit}>Submit</button>
          <button className={styles.secondaryButton} onClick={() => router.push(`/roadmap/milestone/${idx}?goal=${encodeURIComponent(goal)}`)}>Return</button>
        </div>

        {score !== null && (
          <div style={{marginTop: '12px'}}>
            <p>Your score: {score}%</p>
            {passed ? <p className={styles.congrats}>🎉 Passed — next milestone unlocked.</p> : <p>Not yet passing. Try again.</p>}
          </div>
        )}
      </section>
    </main>
  );
}

export default function MilestoneQuiz() {
  return (
    <Suspense fallback={<main className={styles.roadmapRoot}><div className={styles.roadmapCard}>Loading quiz...</div></main>}>
      <MilestoneQuizContent />
    </Suspense>
  );
}
