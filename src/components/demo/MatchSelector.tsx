"use client";

import { useState } from "react";
import { Match, mockMatches } from "./constants";

interface MatchSelectorProps {
  onSelect: (match: Match) => void;
}

export default function MatchSelector({ onSelect }: MatchSelectorProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (match: Match) => {
    setSelectedId(match.id);
    setIsLoading(true);
    // Simulate brief loading then trigger callback
    setTimeout(() => {
      onSelect(match);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-[34px]">
      {/* Subtitle */}
      <p className="text-[15px] text-white/60 mb-6">
        Choose a match to create your highlight from
      </p>

      {/* Match cards */}
      <div className="flex flex-col gap-3">
        {mockMatches.map((match) => (
          <button
            key={match.id}
            onClick={() => handleSelect(match)}
            disabled={isLoading}
            className={`relative w-full p-4 rounded-[12px] text-left transition-all duration-200
              ${selectedId === match.id
                ? "bg-[#1C1C1E] ring-2 ring-[#30D158]"
                : "bg-[#1C1C1E] active:scale-[0.98]"
              }
              ${isLoading && selectedId !== match.id ? "opacity-50" : ""}
            `}
          >
            {/* Recommended badge */}
            {match.isRecommended && (
              <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-[#30D158] text-black text-[11px] font-semibold">
                Recommended
              </div>
            )}

            {/* Match thumbnail placeholder */}
            <div className="w-full h-[100px] rounded-[8px] mb-3 bg-gradient-to-br from-[#30D158]/20 via-[#1a1a1a] to-[#00D4FF]/20 relative overflow-hidden">
              {/* Grid lines suggesting pitch */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white" />
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/60 text-white text-[11px] font-medium">
                {match.duration}
              </div>

              {/* Loading spinner */}
              {isLoading && selectedId === match.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#30D158] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Match info */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-1">
                  {match.title}
                </h3>
                <p className="text-[13px] text-white/50">
                  {match.date} · {match.venue}
                </p>
              </div>

              {/* Selection checkmark */}
              {selectedId === match.id && !isLoading && (
                <div className="w-6 h-6 rounded-full bg-[#30D158] flex items-center justify-center">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
