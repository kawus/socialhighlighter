"use client";

import { Highlight, getHighlightIcon } from "./constants";

interface RarityRevealProps {
  highlight: Highlight | null;
  onContinue: () => void;
}

export default function RarityReveal({
  highlight,
  onContinue,
}: RarityRevealProps) {
  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-[34px]">
      {/* Video preview area */}
      <div className="relative aspect-video rounded-[12px] bg-[#1C1C1E] overflow-hidden mb-6">
        {/* Gradient background simulating video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a1a] via-[#1C1C1E] to-[#1a1a2a]">
          {/* Grid lines suggesting pitch */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
          </div>
        </div>

        {/* Highlight info overlay */}
        {highlight && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm flex items-center gap-2">
            <span className="text-lg">{getHighlightIcon(highlight.type)}</span>
            <span className="text-[13px] text-white font-medium">
              {highlight.type.charAt(0).toUpperCase() + highlight.type.slice(1)} · {highlight.time}
            </span>
          </div>
        )}

        {/* Rarity badge - TOP X% */}
        {highlight?.rarity && (
          <div className="absolute top-3 right-3" data-event="try_demo_rarity_viewed">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#FFB800] blur-lg opacity-60 animate-pulse" />
              <div className="relative px-3 py-1.5 bg-gradient-to-r from-[#FFB800] to-orange-500 rounded-full">
                <span className="text-black font-black text-xs tracking-wide">
                  {highlight.rarity.label.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
              <path d="M0 0L24 14L0 28V0Z" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div className="h-full w-1/3 bg-[#30D158]" />
        </div>
      </div>

      {/* Rarity explanation card */}
      <div className="bg-[#1C1C1E] rounded-[12px] p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center">
            <span className="text-xl">🏆</span>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-white">
              Your Moment Rating
            </h3>
            <p className="text-[13px] text-white/50">
              AI analyzes what makes it special
            </p>
          </div>
        </div>
      </div>

      {/* Rarity insight card */}
      {highlight?.rarity && (
        <div className="bg-[#1C1C1E] rounded-[12px] p-4 mb-4 border border-[#FFB800]/20">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFB800]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#FFB800]">✨</span>
            </div>
            <div className="flex-1">
              <p className="text-[13px] text-white/90 mb-2">
                {highlight.rarity.reason}
              </p>
              {/* Rarity bar */}
              <div className="h-1.5 bg-[#2C2C2E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFB800] via-orange-500 to-red-500 rounded-full transition-all duration-500"
                  style={{ width: `${100 - highlight.rarity.percentile}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-white/40">Common</span>
                <span className="text-[10px] text-[#FFB800] font-medium">Exceptional</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Continue button */}
      <div className="mt-auto">
        <button
          onClick={onContinue}
          className="w-full h-[50px] rounded-[12px] bg-[#30D158] text-black text-[17px] font-semibold
            active:scale-[0.97] active:opacity-90 transition-all duration-100"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
