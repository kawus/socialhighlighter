import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try Social Highlighter - Interactive Demo",
  description:
    "Experience how Social Highlighter transforms your match footage into Instagram-ready highlights in 60 seconds.",
};

export default function TryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Minimal layout - no site navigation
  return <>{children}</>;
}
