// Roadmap for each specific cybersecurity goal set
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { roadmapData } from "../../lib/data";

function RoadmapContent() {
  const router = useRouter();
  const params = useSearchParams();
  const goal = params.get("goal");
  const roadmap = roadmapData[goal];
  const [completedMilestones, setCompletedMilestones] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [unlockedMilestones, setUnlockedMilestones] = useState([]);

  useEffect(() => {
    if (!goal) {
      const lastGoal = window.localStorage.getItem("roadmap-last-goal");
      if (lastGoal) {
        router.replace(`/roadmap?goal=${encodeURIComponent(lastGoal)}`);
      }
      return;
    }

    const timer = window.setTimeout(() => {
      const storedMilestones = window.localStorage.getItem(`roadmap-completed-${goal}`);
      setCompletedMilestones(storedMilestones ? JSON.parse(storedMilestones) : []);

      const storedTasks = window.localStorage.getItem(`roadmap-completed-tasks-${goal}`);
      setCompletedTasks(storedTasks ? JSON.parse(storedTasks) : []);

      // fetch server-side unlocked status and scores
      fetch(`/api/quiz/status?goal=${encodeURIComponent(goal)}`)
        .then((r) => r.json())
        .then((data) => {
          if (data && data.unlocked) setUnlockedMilestones(data.unlocked);
          // mark passed milestones as completed based on score
          if (data && data.scores) {
            const passed = Object.entries(data.scores)
              .filter(([, value]) => value.last >= 80)
              .map(([key]) => Number(key));
            setCompletedMilestones((prev) => Array.from(new Set([...prev, ...passed])));
          }
        })
        .catch(() => {
          // fallback: ensure first unlocked
          setUnlockedMilestones((u) => (u && u.length ? u : [0]));
        });

      window.localStorage.setItem("roadmap-last-goal", goal);
    }, 0);

    return () => clearTimeout(timer);
  }, [goal, router]);

  useEffect(() => {
    if (!goal) return;
    window.localStorage.setItem(`roadmap-completed-${goal}`, JSON.stringify(completedMilestones));
  }, [goal, completedMilestones]);

  // keep unlocked state synced locally for quick UI response; server is source of truth
  useEffect(() => {
    if (!goal) return;
    window.localStorage.setItem(`roadmap-unlocked-${goal}`, JSON.stringify(unlockedMilestones));
  }, [goal, unlockedMilestones]);

  useEffect(() => {
    if (!goal) return;
    window.localStorage.setItem(`roadmap-completed-tasks-${goal}`, JSON.stringify(completedTasks));
  }, [goal, completedTasks]);

  if (!roadmap) {
    return <div className={styles.roadmapRoot}>No roadmap found for the specified goal.</div>;
  }

  const taskItems = roadmap.phases.flatMap((phase, phaseIndex) =>
    phase.items.flatMap((item, itemIndex) =>
      (item.activities || []).map((activity, activityIndex) => ({
        id: `${phaseIndex}-${itemIndex}-${activityIndex}`,
        phase: phase.name,
        itemTitle: item.title,
        title: activity.title,
        type: activity.type
      }))
    )
  );

  function toggleTask(taskId) {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  }

  const progress = (completedMilestones.length / roadmap.milestones.length) * 100;
  const taskProgress = taskItems.length ? (completedTasks.length / taskItems.length) * 100 : 0;
  const isComplete = progress === 100;
  const isTaskComplete = taskItems.length > 0 && taskProgress === 100;
  const awardBadges = [];

  if (completedMilestones.length >= 1) {
    awardBadges.push({ icon: "🚀", label: "First Step" });
  }
  if (completedMilestones.length >= 3) {
    awardBadges.push({ icon: "🧠", label: "Quiz Master" });
  }
  if (isComplete) {
    awardBadges.push({ icon: "🏁", label: "Roadmap Complete" });
  }
  if (completedTasks.length >= Math.max(1, Math.floor(taskItems.length / 2))) {
    awardBadges.push({ icon: "✅", label: "Practice Builder" });
  }

  return (
    <main className={styles.roadmapRoot}>
      <header className={styles.roadmapNav}>
        <button className={styles.backButton} onClick={() => router.push("/")}>
          ← Back to Home
        </button>
        <div className={styles.roadmapNavTitle}>
          <h2>{goal} Roadmap</h2>
        </div>
        <div className={styles.roadmapNavSpacer} />
      </header>

      <section className={styles.roadmapHeader}>
        <div>
          <h1>{goal} Roadmap</h1>
          <p>Follow a structured progression of milestones, quizzes, and practice tasks designed to build practical cybersecurity skills.</p>
        </div>
      </section>

      <section className={styles.roadmapSummary}>
        <div>
          <p className={styles.sectionEyebrow}>Learning path overview</p>
          <h3>{goal} roadmap</h3>
          <p>Move through guided milestones and hands-on tasks to build confidence in the core skills required for this role.</p>
        </div>
        <div className={styles.summaryPillGroup}>
          <span className={styles.summaryPill}>{roadmap.milestones.length} milestones</span>
          <span className={styles.summaryPill}>{roadmap.skills.length} core skills</span>
          <span className={styles.summaryPill}>{taskItems.length} practice tasks</span>
        </div>
      </section>

      <div className={styles.roadmapPanels}>
        <article className={styles.roadmapCard}>
          <h2>Progress</h2>
          <p>{Math.round(progress)}% complete</p>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }} />
          </div>
          {isComplete && <p className={styles.congrats}>🎉 Congratulations! You have completed this roadmap.</p>}
        </article>

        <article className={styles.roadmapCard}>
          <h2>Skills</h2>
          <ul className={styles.skillList}>
            {roadmap.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className={styles.roadmapCard}>
          <h2>Task Progress</h2>
          <p>{taskItems.length ? `${Math.round(taskProgress)}% of tasks complete` : "No roadmap tasks available."}</p>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${taskProgress}%` }} />
          </div>
          {isTaskComplete && <p className={styles.congrats}>✅ You completed every roadmap task.</p>}
        </article>
      </div>

      <section className={styles.roadmapCard}>
        <h2>Milestones</h2>
        <p className={styles.panelText}>Each milestone opens after you pass its quiz with 80% or higher.</p>
        {awardBadges.length > 0 && (
          <div className={styles.awardRow}>
            {awardBadges.map((award) => (
              <span key={award.label} className={styles.awardChip}>
                {award.icon} {award.label}
              </span>
            ))}
          </div>
        )}
        <ul className={styles.activityList}>
          {roadmap.milestones.map((milestone, idx) => {
            const isCompleted = completedMilestones.includes(idx);
            const isUnlocked = idx === 0 || unlockedMilestones.includes(idx);
            const statusLabel = isCompleted ? "Completed" : isUnlocked ? "Unlocked" : "Locked";

            return (
              <li key={milestone} className={styles.milestoneItem}>
                <div className={styles.milestoneRow}>
                  <div className={styles.milestoneContent}>
                    <strong className={styles.milestoneTitle}>{milestone}</strong>
                    <div className={styles.milestoneMeta}>{statusLabel}</div>
                  </div>
                  <div className={styles.milestoneActions}>
                    <span className={isCompleted ? styles.statusBadgeComplete : isUnlocked ? styles.statusBadgeUnlocked : styles.statusBadgeLocked}>
                      {isCompleted ? "Completed" : isUnlocked ? "Unlocked" : "Locked"}
                    </span>
                    {isCompleted ? (
                      <span className={styles.milestoneActionText}>✓ Done</span>
                    ) : isUnlocked ? (
                      <button className={styles.primaryButton} onClick={() => router.push(`/roadmap/milestone/${idx}?goal=${encodeURIComponent(goal)}`)}>
                        Open
                      </button>
                    ) : (
                      <button className={styles.disabledButton} disabled>
                        Locked
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {taskItems.length > 0 && (
        <section className={styles.roadmapCard}>
          <h2>Task Checklist</h2>
          <p className={styles.panelText}>Use the buttons below to track the learning tasks you complete.</p>
          <ul className={styles.activityList}>
            {taskItems.map((task) => (
              <li key={task.id}>
                <div className={styles.activityLabel} style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong>{task.title}</strong>
                    <div className={styles.taskMeta}>{task.phase} · {task.itemTitle}</div>
                  </div>
                  <button
                    className={completedTasks.includes(task.id) ? styles.secondaryButton : styles.primaryButton}
                    onClick={() => toggleTask(task.id)}
                  >
                    {completedTasks.includes(task.id) ? "Completed" : "Mark Complete"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default function RoadMap() {
  return (
    <Suspense fallback={<main className={styles.roadmapRoot}><div className={styles.roadmapCard}>Loading roadmap...</div></main>}>
      <RoadmapContent />
    </Suspense>
  );
}
               