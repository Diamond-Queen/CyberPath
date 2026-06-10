"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.css";
import { goals, roadmapData } from "../lib/data";
import Steps from "./How it Works/Steps";

const dashboardStats = [
  { value: "8", label: "Career paths" },
  { value: "120+", label: "Roadmap milestones" },
  { value: "92%", label: "Learner satisfaction" }
];

const analyticsCards = [
  { value: "24/7", label: "Learning uptime", detail: "Always ready with personalized guidance." },
  { value: "4.8", label: "Average rating", detail: "Learners rate the experience highly." },
  { value: "31", label: "Days to launch", detail: "Fast onboarding for new roadmaps." }
];

const quickActions = [
  { title: "Explore roadmaps", detail: "Choose the role path that fits your ambitions." },
  { title: "Track progress", detail: "Mark milestones as you complete each activity." },
  { title: "Build skills", detail: "Focus on the most in-demand cybersecurity topics." }
];

export default function Home() {
  const router = useRouter();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastGoal, setToastGoal] = useState("your roadmap");
  const [remainingMilestones, setRemainingMilestones] = useState(null);

  useEffect(() => {
    const lastGoal = window.localStorage.getItem("roadmap-last-goal");
    if (!lastGoal) {
      return;
    }

    const roadmap = roadmapData[lastGoal];
    const completed = JSON.parse(window.localStorage.getItem(`roadmap-completed-${lastGoal}`) || "[]");
    const remaining = roadmap ? roadmap.milestones.length - completed.length : null;

    setToastGoal(lastGoal);
    setRemainingMilestones(remaining);
    setIsToastVisible(true);

    const timeout = setTimeout(() => setIsToastVisible(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={styles.dashboard}>
      <header className={styles.headerNav}>
        <div className={styles.logo}>CyberPath</div>
        <nav className={styles.navLinks}>
          <a href="#dashboard">Dashboard</a>
          <a href="#roadmaps">Roadmaps</a>
          <a href="#insights">Insights</a>
        </nav>
        <button className={styles.navButton} onClick={() => router.push("/roadmap?goal=Cybersecurity%20Engineer")}>Start roadmap</button>
      </header>

      {isToastVisible && (
        <div className={styles.toastWrapper}>
          <div className={styles.toast}>
            <div>
              <p className={styles.toastTitle}>Welcome back!</p>
              <p>
                {remainingMilestones != null
                  ? `${remainingMilestones} milestone${remainingMilestones === 1 ? "" : "s"} remain in your ${toastGoal} roadmap.`
                  : `New milestones are waiting in your ${toastGoal} roadmap.`}
              </p>
            </div>
            <button className={styles.toastClose} onClick={() => setIsToastVisible(false)}>
              ×
            </button>
          </div>
        </div>
      )}

      <section className={styles.topbar} id="dashboard">
        <div className={styles.heroIntro}>
          <span className={styles.badge}>Secure your career</span>
          <h1>CyberPath</h1>
          <p className={styles.lead}>
            Personalized cybersecurity roadmaps, progress tracking, and guided milestones for every experience level.
            Start your journey with a SaaS-style dashboard built for modern learners.
          </p>
        </div>

        <div className={styles.heroCards}>
          {dashboardStats.map((stat) => (
            <article key={stat.label} className={styles.statCard}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.analyticsGrid} id="insights">
        {analyticsCards.map((card) => (
          <article key={card.label} className={styles.analyticsCard}>
            <span>{card.value}</span>
            <strong>{card.label}</strong>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <div className={styles.summaryGrid}>
        <article className={styles.summaryCard}>
          <h2>Performance overview</h2>
          <p>
            Your development dashboard shows current growth, focus areas, and high-value activities for a strong cybersecurity career.
          </p>
        </article>
        <article className={styles.summaryCard}>
          <h2>Active goal</h2>
          <p>
            Choose a goal to open a detailed roadmap with phases, skills, and milestone completion tracking.
          </p>
        </article>
        <article className={styles.summaryCard}>
          <h2>What's next?</h2>
          <p>
            Complete tasks consistently to see progress, unlock new career paths, and measure your outcomes in real time.
          </p>
        </article>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftPanel}>
          <article className={styles.panelCard}>
            <div className={styles.panelCardHeader}>
              <h2>Insights desk</h2>
              <p>Snapshot of your next moves</p>
            </div>
            <div className={styles.actionList}>
              {quickActions.map((action) => (
                <div key={action.title} className={styles.actionItem}>
                  <div>
                    <strong>{action.title}</strong>
                    <span>{action.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <section className={styles.stepsSection}>
            <div className={styles.sectionHeader}>
              <h2>How it works</h2>
              <p className={styles.workText}>Follow a simple, structured workflow to build skills and complete your chosen roadmap.</p>
            </div>
            <Steps />
          </section>
        </div>

        <aside className={styles.rightPanel}>
          <section className={styles.panelCard}>
            <div className={styles.panelCardHeader}>
              <div>
                <h2>Choose your goal</h2>
                <p>Select the role path that best matches your ambition and start tracking progress.</p>
              </div>
            </div>
            <div className={styles.goalGrid}>
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  className={styles.goalButton}
                  onClick={() => router.push(`/roadmap?goal=${encodeURIComponent(goal.name)}`)}
                >
                  {goal.name}
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

