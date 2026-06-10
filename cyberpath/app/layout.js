import "../styles/Home.module.css";

export const metadata = {
  title: "CyberPath"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
