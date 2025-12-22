"use client";

import { useState } from "react";

interface SeasonStoryPreviewProps {
  onClose: () => void;
  onRequestAccess: () => void;
}

// Mock season data
const seasonStats = {
  year: "2024",
  playerName: "Your Highlights",
  goals: 12,
  assists: 5,
  matches: 18,
  duration: "3:24",
  aiInsight: "Your best season yet. You've become a set-piece specialist.",
};

export default function SeasonStoryPreview({
  onClose,
  onRequestAccess,
}: SeasonStoryPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate playing then return to preview after 2 seconds
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black animate-sheet-up overflow-hidden">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M1 13L13 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="h-full flex flex-col px-6 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#30D158]/20 text-[#30D158] text-[12px] font-medium mb-3">
            <span>🎬</span>
            <span>Season Story Preview</span>
          </div>
          <h2 className="text-[28px] font-bold text-white">
            Your Year, <span className="text-[#30D158]">In 3 Minutes</span>
          </h2>
        </div>

        {/* Video preview with film strip */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative w-full max-w-sm">
            {/* Film strip perforations - left */}
            <div className="absolute -left-3 top-0 bottom-0 w-4 bg-[#1C1C1E] rounded-l flex flex-col justify-around py-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 mx-auto bg-[#0A0A0B] rounded-sm" />
              ))}
            </div>
            {/* Film strip perforations - right */}
            <div className="absolute -right-3 top-0 bottom-0 w-4 bg-[#1C1C1E] rounded-r flex flex-col justify-around py-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 mx-auto bg-[#0A0A0B] rounded-sm" />
              ))}
            </div>

            {/* Video card */}
            <div className="relative bg-[#1C1C1E] rounded-xl overflow-hidden border border-white/10">
              {/* Video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-[#1a2a1a] via-[#1C1C1E] to-[#1a1a2a] relative">
                {/* Title card content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <p className="text-white/40 text-[11px] uppercase tracking-widest mb-2">
                    {seasonStats.year} Season
                  </p>
                  <p className="text-white text-xl font-bold text-center mb-4">
                    {seasonStats.playerName}
                  </p>
                  <div className="flex items-center gap-4 text-[12px] text-white/60">
                    <span>{seasonStats.goals} goals</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{seasonStats.assists} assists</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{seasonStats.matches} matches</span>
                  </div>
                </div>

                {/* Play button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center transition-transform ${
                      isPlaying ? "scale-90" : "hover:scale-110"
                    }`}
                  >
                    {isPlaying ? (
                      <div className="flex gap-1">
                        <div className="w-1 h-6 bg-white rounded animate-pulse" />
                        <div className="w-1 h-6 bg-white rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                      </div>
                    ) : (
                      <svg
                        className="w-7 h-7 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-[11px] text-white">
                  {seasonStats.duration}
                </div>

                {/* Playing indicator */}
                {isPlaying && (
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 rounded-full bg-[#FF453A]">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] text-white font-medium">PREVIEW</span>
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-[#2C2C2E]">
                <div
                  className={`h-full bg-[#30D158] transition-all duration-2000 ease-linear ${
                    isPlaying ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="bg-[#1C1C1E] rounded-[12px] p-4 mb-6 border border-[#30D158]/20">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#30D158]">✨</span>
            </div>
            <div>
              <p className="text-[11px] text-[#30D158] font-medium uppercase tracking-wider mb-1">
                AI Insight
              </p>
              <p className="text-[14px] text-white/90">
                {seasonStats.aiInsight}
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={onRequestAccess}
            className="w-full h-[56px] rounded-[14px] bg-[#30D158] text-black text-[17px] font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-100"
          >
            Request early access
          </button>
          <p className="text-[12px] text-white/40 text-center">
            Be first to get your Season Story
          </p>
          <button
            onClick={onClose}
            className="w-full py-2 text-[14px] text-white/40 active:text-white/60 transition-colors"
          >
            Back to demo
          </button>
        </div>
      </div>
    </div>
  );
}
