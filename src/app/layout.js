import "./globals.css";

export const metadata = {
  title: "Tailwind Mastery",
  description: "A simple webapp to learn tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
