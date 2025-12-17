"use client";

import { useState, useEffect } from "react";
import { Highlight, getHighlightIcon, getHighlightColor } from "./constants";

interface HighlightRevealProps {
  highlights: Highlight[];
  onSelect: (highlight: Highlight) => void;
}

export default function HighlightReveal({ highlights, onSelect }: HighlightRevealProps) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Staggered reveal animation
  useEffect(() => {
    if (revealedCount < highlights.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, highlights.length]);

  const handleSelect = (highlight: Highlight) => {
    setSelectedId(highlight.id);
    setTimeout(() => onSelect(highlight), 400);
  };

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-[34px]">
      {/* Success indicator */}
      <div className="flex items-center gap-2 mb-4">
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
        <span className="text-[15px] text-[#30D158] font-medium">
          Analysis complete
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-[15px] text-white/60 mb-6">
        Tap a highlight to preview
      </p>

      {/* Timeline visualization */}
      <div className="mb-6 px-2">
        <div className="flex items-center justify-between text-[11px] text-white/40 mb-2">
          <span>0:00</span>
          <span>90:00</span>
        </div>
        <div className="relative h-2 bg-[#2C2C2E] rounded-full">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-300
                ${index < revealedCount ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                ${selectedId === highlight.id ? "scale-150 ring-2 ring-white/50" : ""}
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

      {/* Highlight cards */}
      <div className="flex flex-col gap-3 flex-1">
        {highlights.map((highlight, index) => (
          <button
            key={highlight.id}
            onClick={() => handleSelect(highlight)}
            disabled={index >= revealedCount}
            className={`relative w-full p-4 rounded-[12px] text-left transition-all duration-500
              ${index < revealedCount
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }
              ${selectedId === highlight.id
                ? "bg-[#1C1C1E] ring-2"
                : "bg-[#1C1C1E] active:scale-[0.98]"
              }
            `}
            style={{
              transitionDelay: `${index * 100}ms`,
              '--tw-ring-color': selectedId === highlight.id ? getHighlightColor(highlight.type) : undefined,
            } as React.CSSProperties}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${getHighlightColor(highlight.type)}20` }}
              >
                {getHighlightIcon(highlight.type)}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[15px] font-semibold capitalize"
                    style={{ color: getHighlightColor(highlight.type) }}
                  >
                    {highlight.type}
                  </span>
                  <span className="text-[13px] text-white/50">
                    {highlight.time}
                  </span>
                </div>
                <p className="text-[13px] text-white/60">
                  {highlight.description}
                </p>
              </div>

              {/* Play indicator */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="white" />
                </svg>
              </div>
            </div>

            {/* Pulsing hint on first card */}
            {index === 0 && revealedCount === highlights.length && !selectedId && (
              <div className="absolute inset-0 rounded-[12px] ring-2 ring-[#30D158] animate-pulse pointer-events-none" />
            )}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-white/10">
        {[
          { type: "goal", label: "Goals" },
          { type: "assist", label: "Assists" },
          { type: "save", label: "Saves" },
        ].map((item) => (
          <div key={item.type} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getHighlightColor(item.type as Highlight["type"]) }}
            />
            <span className="text-[13px] text-white/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
