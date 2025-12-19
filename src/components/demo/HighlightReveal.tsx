"use client";

import { useState, useEffect } from "react";
import { Highlight, getHighlightIcon, getHighlightColor } from "./constants";

interface HighlightRevealProps {
  highlights: Highlight[];
  onSelect: (highlight: Highlight) => void;
  onContinue: () => void;
  defaultSelectedId?: string;
}

export default function HighlightReveal({
  highlights,
  onSelect,
  onContinue,
  defaultSelectedId,
}: HighlightRevealProps) {
  const [revealedCount, setRevealedCount] = useState(highlights.length); // Show all immediately
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId || null);

  // Find the currently selected highlight for display
  const selectedHighlight = highlights.find((h) => h.id === selectedId);

  // No staggered reveal - show all immediately for instant "win"
  useEffect(() => {
    // If there's a default selection, notify parent
    if (defaultSelectedId) {
      const defaultH = highlights.find((h) => h.id === defaultSelectedId);
      if (defaultH) onSelect(defaultH);
    }
  }, [defaultSelectedId, highlights, onSelect]);

  const handleSelect = (highlight: Highlight) => {
    setSelectedId(highlight.id);
    onSelect(highlight);
  };

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-[34px]">
      {/* Selected moment label - shows what's currently selected */}
      {selectedHighlight && (
        <div className="flex items-center justify-center gap-2 mb-4 py-2 px-4 bg-[#1C1C1E] rounded-lg self-center">
          <span className="text-lg">{getHighlightIcon(selectedHighlight.type)}</span>
          <span
            className="text-[15px] font-semibold capitalize"
            style={{ color: getHighlightColor(selectedHighlight.type) }}
          >
            {selectedHighlight.type}
          </span>
          <span className="text-[13px] text-white/50">—</span>
          <span className="text-[13px] text-white/70">{selectedHighlight.time}</span>
        </div>
      )}

      {/* Subtitle */}
      <p className="text-[13px] text-white/50 mb-4 text-center">
        Tap a moment to preview
      </p>

      {/* Timeline visualization */}
      <div className="mb-4 px-2">
        <div className="flex items-center justify-between text-[11px] text-white/40 mb-2">
          <span>0:00</span>
          <span>90:00</span>
        </div>
        <div className="relative h-2 bg-[#2C2C2E] rounded-full">
          {highlights.map((highlight) => (
            <button
              key={highlight.id}
              onClick={() => handleSelect(highlight)}
              data-event="try_demo_click_moment"
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300 cursor-pointer
                ${selectedId === highlight.id ? "scale-150 ring-2 ring-white/50" : "hover:scale-125"}
              `}
              style={{
                left: `${highlight.position}%`,
                backgroundColor: getHighlightColor(highlight.type),
                transform: `translateX(-50%) translateY(-50%) ${selectedId === highlight.id ? "scale(1.5)" : "scale(1)"}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Highlight cards - scrollable if needed */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => handleSelect(highlight)}
            data-event="try_demo_click_moment"
            className={`relative w-full p-3 rounded-[12px] text-left transition-all duration-200
              ${selectedId === highlight.id
                ? "bg-[#1C1C1E] ring-2"
                : "bg-[#1C1C1E] active:scale-[0.98] hover:bg-[#252528]"
              }
            `}
            style={{
              '--tw-ring-color': selectedId === highlight.id ? getHighlightColor(highlight.type) : undefined,
            } as React.CSSProperties}
          >
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: `${getHighlightColor(highlight.type)}20` }}
              >
                {getHighlightIcon(highlight.type)}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[14px] font-semibold capitalize"
                    style={{ color: getHighlightColor(highlight.type) }}
                  >
                    {highlight.type}
                  </span>
                  <span className="text-[12px] text-white/50">
                    {highlight.time}
                  </span>
                </div>
                <p className="text-[12px] text-white/60 truncate">
                  {highlight.description}
                </p>
              </div>

              {/* Selected indicator or play icon */}
              {selectedId === highlight.id ? (
                <div className="w-6 h-6 rounded-full bg-[#30D158] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="12" viewBox="0 0 12 14" fill="none">
                    <path d="M0 0L12 7L0 14V0Z" fill="white" fillOpacity="0.6" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Continue button - user must click to proceed */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <button
          onClick={onContinue}
          disabled={!selectedId}
          className={`w-full h-[50px] rounded-[12px] text-[17px] font-semibold transition-all duration-200
            ${selectedId
              ? "bg-[#30D158] text-black active:scale-[0.97] active:opacity-90"
              : "bg-[#30D158]/30 text-black/50 cursor-not-allowed"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
