"use client";

import { useEffect, useState } from "react";
import ConfettiAnimation from "./ConfettiAnimation";

interface DemoSuccessProps {
  onClose: () => void;
}

export default function DemoSuccess({ onClose }: DemoSuccessProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestAccess = () => {
    // Navigate to early access section
    window.location.href = "/#early-access";
  };

  const handleSeePricing = () => {
    // Navigate to early access/pricing section
    window.location.href = "/#early-access";
  };

  return (
    <div className="flex flex-col h-full px-6 pt-8 pb-[34px] relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && <ConfettiAnimation />}

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#30D158]/20 blur-[100px]" />

      {/* Success icon */}
      <div className="relative z-10 flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-[#30D158]/20 flex items-center justify-center animate-bounce">
          <div className="w-16 h-16 rounded-full bg-[#30D158] flex items-center justify-center">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path
                d="M2 12L12 22L30 2"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-[34px] font-bold text-white leading-[41px] mb-3">
          That&apos;s It.<br />60 Seconds.
        </h1>
        <p className="text-[17px] text-white/60">
          Imagine doing this for every match.
        </p>
      </div>

      {/* Before/After comparison */}
      <div className="relative z-10 mb-8 space-y-3">
        {/* Before */}
        <div className="flex items-center gap-3 p-4 rounded-[12px] bg-[#1C1C1E]">
          <div className="w-8 h-8 rounded-full bg-[#FF453A]/20 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2L14 14M2 14L14 2"
                stroke="#FF453A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-[15px] text-white/40 line-through">
              Hours scrolling through footage
            </p>
          </div>
        </div>

        {/* After */}
        <div className="flex items-center gap-3 p-4 rounded-[12px] bg-[#30D158]/10 border border-[#30D158]/30">
          <div className="w-8 h-8 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path
                d="M1 6L6 11L15 1"
                stroke="#30D158"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-[15px] text-white font-medium">
              60 seconds from pitch to post
            </p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="relative z-10 mt-auto space-y-3">
        {/* Primary CTA - Request Early Access */}
        <button
          onClick={handleRequestAccess}
          data-event="try_demo_request_early_access"
          className="w-full h-[56px] rounded-[14px] bg-[#30D158] text-black text-[17px] font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-100"
        >
          Request early access
        </button>

        {/* Microcopy */}
        <p className="text-[12px] text-white/40 text-center">
          No spam. We&apos;ll invite UK testers first.
        </p>

        {/* Secondary CTA - See Pricing */}
        <button
          onClick={handleSeePricing}
          className="w-full h-[44px] rounded-[12px] bg-transparent text-[#0A84FF] text-[15px] active:opacity-60 transition-opacity"
        >
          See pricing
        </button>

        {/* Back to home */}
        <button
          onClick={onClose}
          className="w-full py-2 text-[14px] text-white/40 active:text-white/60 transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
