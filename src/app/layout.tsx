import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Highlighter | From Pitch to Post in 60 Seconds",
  description:
    "Your goals, found by AI, privacy-protected, ready for Instagram—before you leave the pitch. Join the waitlist for early access.",
  keywords: [
    "football highlights",
    "soccer highlights",
    "AI highlights",
    "instant highlights",
    "sports video",
    "Veo",
  ],
  openGraph: {
    title: "Social Highlighter | From Pitch to Post in 60 Seconds",
    description:
      "Your goals, found by AI, privacy-protected, ready for Instagram—before you leave the pitch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
