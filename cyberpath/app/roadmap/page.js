// Roadmap for each specific cybersecurity goal set
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { roadmapData } from "../../lib/data";

export default function RoadMap() {
  const router = useRouter();
  const params = useSearchParams();
  const goal = params.get("goal");
  const roadmap = roadmapData[goal];
  const [completedMilestones, setCompletedMilestones] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    if (!goal) {
      const lastGoal = window.localStorage.getItem("roadmap-last-goal");
      if (lastGoal) {
        router.replace(`/roadmap?goal=${encodeURIComponent(lastGoal)}`);
      }
      return;
    }

    const storedMilestones = window.localStorage.getItem(`roadmap-completed-${goal}`);
    setCompletedMilestones(storedMilestones ? JSON.parse(storedMilestones) : []);

    const storedTasks = window.localStorage.getItem(`roadmap-completed-tasks-${goal}`);
    setCompletedTasks(storedTasks ? JSON.parse(storedTasks) : []);

    window.localStorage.setItem("roadmap-last-goal", goal);
  }, [goal, router]);

  useEffect(() => {
    if (!goal) return;
    window.localStorage.setItem(`roadmap-completed-${goal}`, JSON.stringify(completedMilestones));
  }, [goal, completedMilestones]);

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

  function toggleMilestone(item) {
    setCompletedMilestones((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function toggleTask(taskId) {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  }

  const progress = (completedMilestones.length / roadmap.milestones.length) * 100;
  const taskProgress = taskItems.length ? (completedTasks.length / taskItems.length) * 100 : 0;
  const isComplete = progress === 100;
  const isTaskComplete = taskItems.length > 0 && taskProgress === 100;

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
          <p>Track your personalized roadmap activities until you reach 100% completion.</p>
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
        <p className={styles.panelText}>Check off each milestone as you complete it.</p>
        <ul className={styles.activityList}>
          {roadmap.milestones.map((milestone) => (
            <li key={milestone}>
              <label className={styles.activityLabel}>
                <input
                  type="checkbox"
                  checked={completedMilestones.includes(milestone)}
                  onChange={() => toggleMilestone(milestone)}
                />
                {milestone}
              </label>
            </li>
          ))}
        </ul>
      </section>

      {taskItems.length > 0 && (
        <section className={styles.roadmapCard}>
          <h2>Task Checklist</h2>
          <p className={styles.panelText}>Click tasks to mark them complete as you work through the roadmap.</p>
          <ul className={styles.activityList}>
            {taskItems.map((task) => (
              <li key={task.id}>
                <label className={styles.activityLabel}>
                  <input
                    type="checkbox"
                    checked={completedTasks.includes(task.id)}
                    onChange={() => toggleTask(task.id)}
                  />
                  <div>
                    <strong>{task.title}</strong>
                    <div className={styles.taskMeta}>{task.phase} · {task.itemTitle}</div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
               