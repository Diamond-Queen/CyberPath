import styles from "../../styles/Home.module.css";

export default function Steps() {
  const steps = [
    {
      title: "Select a goal",
      description: "Pick the cybersecurity path that fits your career objective and launch the roadmap."
    },
    {
      title: "Review the plan",
      description: "Inspect skills, milestones, and phases so you know exactly what to learn next."
    },
    {
      title: "Complete milestones",
      description: "Mark tasks complete as you learn, then watch the progress bar update instantly."
    },
    {
      title: "Reach milestones",
      description: "Validate your path and build the confidence to move toward advanced security roles."
    }
  ];

  return (
    <div className={styles.stepsGrid}>
      {steps.map((step, index) => (
        <article key={step.title} className={styles.stepCard}>
          <h3>{`Step ${index + 1}: ${step.title}`}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
