// Demo step type
export type DemoStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// Explore feature type for AI feature previews
export type ExploreFeature = "top1" | "season" | null;

// Mock match data
export interface Match {
  id: string;
  title: string;
  date: string;
  venue: string;
  duration: string;
  isRecommended?: boolean;
}

export const mockMatches: Match[] = [
  {
    id: "1",
    title: "Sunday League Final",
    date: "Dec 15",
    venue: "Hackney Marshes",
    duration: "90 min",
    isRecommended: true,
  },
  {
    id: "2",
    title: "5-a-side Tournament",
    date: "Dec 10",
    venue: "Goals Wembley",
    duration: "60 min",
  },
  {
    id: "3",
    title: "Friendly vs Old Boys FC",
    date: "Dec 8",
    venue: "Victoria Park",
    duration: "90 min",
  },
];

// Rarity data for AI-powered moment ranking
export interface HighlightRarity {
  percentile: number; // 1-100, lower = rarer (1 = top 1%)
  label: string; // "Top 1%", "Top 5%", etc.
  reason: string; // Why this moment is rare
}

// Highlight types and data
export interface Highlight {
  id: string;
  type: "goal" | "assist" | "save";
  time: string;
  position: number; // percentage along timeline (0-100)
  description: string;
  rarity?: HighlightRarity; // Optional AI-generated rarity data
}

export const mockHighlights: Highlight[] = [
  {
    id: "1",
    type: "goal",
    time: "23:14",
    position: 25,
    description: "Curler into top corner",
    rarity: {
      percentile: 5,
      label: "Top 5%",
      reason: "Only 5% of goals curl into the top corner",
    },
  },
  {
    id: "2",
    type: "assist",
    time: "41:02",
    position: 45,
    description: "Through ball to striker",
    rarity: {
      percentile: 12,
      label: "Top 12%",
      reason: "A perfectly weighted through ball",
    },
  },
  {
    id: "3",
    type: "goal",
    time: "67:38",
    position: 75,
    description: "Header from corner",
    rarity: {
      percentile: 1,
      label: "Top 1%",
      reason: "Headers from corners are the rarest goals",
    },
  },
];

// Step info for navigation
export const stepInfo: Record<DemoStep, { title: string; navTitle: string }> = {
  1: { title: "Welcome", navTitle: "" },
  2: { title: "Select Match", navTitle: "Matches" },
  3: { title: "Processing", navTitle: "Analyzing" },
  4: { title: "Your Highlights", navTitle: "Highlights" },
  5: { title: "Privacy", navTitle: "Preview" },
  6: { title: "Share", navTitle: "Share" },
  7: { title: "Success", navTitle: "" },
};

// AI processing messages
export const processingMessages = [
  { threshold: 0, message: "Uploading footage..." },
  { threshold: 20, message: "Scanning 90 minutes of footage..." },
  { threshold: 50, message: "Detecting key moments..." },
  { threshold: 75, message: "Found 3 highlights!" },
];

// Helper to get highlight icon
export function getHighlightIcon(type: Highlight["type"]): string {
  switch (type) {
    case "goal":
      return "⚽";
    case "assist":
      return "🎯";
    case "save":
      return "🧤";
  }
}

// Helper to get highlight color class
export function getHighlightColor(type: Highlight["type"]): string {
  switch (type) {
    case "goal":
      return "#FFB800"; // energy-warm
    case "assist":
      return "#30D158"; // iOS system green
    case "save":
      return "#7B61FF"; // energy-cool
  }
}
