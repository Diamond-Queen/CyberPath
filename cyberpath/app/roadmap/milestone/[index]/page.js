"use client";
import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import styles from "../../../../styles/Home.module.css";
import { roadmapData } from "../../../../lib/data";

function MilestoneDetailContent() {
  const params = useParams();
  const search = useSearchParams();
  const router = useRouter();
  const goal = search.get("goal");
  const idx = parseInt(params.index || "0", 10);
  const roadmap = roadmapData[goal];
  const milestone = roadmap ? roadmap.milestones[idx] : null;
  const milestoneDetails = roadmap?.milestoneContent?.[idx];

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (!goal) return;
    fetch(`/api/quiz/status?goal=${encodeURIComponent(goal)}`)
      .then((response) => response.json())
      .then((data) => {
        const score = data?.scores?.[idx];
        setPassed(Boolean(score && score.last >= 80));
      })
      .catch(() => setPassed(false));
  }, [goal, idx]);

  if (!roadmap || !milestone) {
    return <div className={styles.roadmapRoot}>Milestone not found.</div>;
  }

  return (
    <main className={styles.roadmapRoot}>
      <header className={styles.roadmapNav}>
        <button className={styles.backButton} onClick={() => router.back()}>
          ← Back
        </button>
        <div className={styles.roadmapNavTitle}>
          <h2>{milestone}</h2>
        </div>
      </header>

      <section className={styles.roadmapCard}>
        <div className={styles.awardRow}>
          <span className={styles.awardChip}>{passed ? "🏅 Milestone Complete" : "📘 Learning Path"}</span>
          <span className={passed ? styles.statusBadgeComplete : styles.statusBadgeUnlocked}>
            {passed ? "Completed" : "In Progress"}
          </span>
        </div>
        <h3>About this milestone</h3>
        <p>{milestone}</p>
        {milestoneDetails ? (
          <>
            <p>{milestoneDetails.summary}</p>
            {milestoneDetails.intro && <p>{milestoneDetails.intro}</p>}
            {milestoneDetails.sections?.length > 0 && (
              <div style={{ marginTop: "12px" }}>
                {milestoneDetails.sections.map((section) => (
                  <div key={section.heading} style={{ marginBottom: "10px" }}>
                    <h4>{section.heading}</h4>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>
            )}
            {milestoneDetails.commands?.length > 0 && (
              <div style={{ marginTop: "12px" }}>
                <h4>Useful commands</h4>
                <ul className={styles.skillList}>
                  {milestoneDetails.commands.map((command) => (
                    <li key={command}>{command}</li>
                  ))}
                </ul>
              </div>
            )}
            <h4>Learning objectives</h4>
            <ul className={styles.skillList}>
              {milestoneDetails.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
            <h4>Practice ideas</h4>
            <ul className={styles.skillList}>
              {milestoneDetails.practice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Suggested resources</h4>
            <ul className={styles.skillList}>
              {milestoneDetails.resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Read through the milestone content, then use the quiz below to prove your understanding. A score of 80% or higher unlocks the next milestone.</p>
        )}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
          <button className={styles.secondaryButton} onClick={() => router.push(`/roadmap?goal=${encodeURIComponent(goal)}`)}>
            Return to Roadmap
          </button>
          <button className={styles.primaryButton} onClick={() => router.push(`/roadmap/milestone/${idx}/quiz?goal=${encodeURIComponent(goal)}`)}>
            Take Quiz
          </button>
        </div>
        {passed && <p className={styles.congrats}>✅ You passed this milestone&apos;s quiz and the next milestone is unlocked.</p>}
      </section>
    </main>
  );
}

export default function MilestoneDetail() {
  return (
    <Suspense fallback={<main className={styles.roadmapRoot}><div className={styles.roadmapCard}>Loading milestone...</div></main>}>
      <MilestoneDetailContent />
    </Suspense>
  );
}
