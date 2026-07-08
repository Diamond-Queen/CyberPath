import "../styles/Home.module.css";

export const metadata = {
  title: "CyberPath | Cybersecurity Career Roadmaps",
  description: "Guided cybersecurity learning journeys with milestone tracking, quizzes, and progress-based unlocks."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
