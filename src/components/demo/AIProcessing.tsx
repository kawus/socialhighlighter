"use client";

import { useEffect, useState } from "react";
import { processingMessages } from "./constants";

interface AIProcessingProps {
  onComplete: () => void;
}

export default function AIProcessing({ onComplete }: AIProcessingProps) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(processingMessages[0].message);

  useEffect(() => {
    // Animate progress from 0 to 100 over ~4.5 seconds
    const duration = 4500;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);

        // Update message based on progress
        const currentMessage = [...processingMessages]
          .reverse()
          .find((m) => next >= m.threshold);
        if (currentMessage) {
          setMessage(currentMessage.message);
        }

        // Complete when done
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Brief pause at 100% before advancing
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Calculate stroke dasharray for circular progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      {/* Progress ring */}
      <div className="relative w-[160px] h-[160px] mb-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#2C2C2E"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#30D158"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100 ease-out"
          />
        </svg>

        {/* Percentage in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[34px] font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Processing message */}
      <p className="text-[17px] text-white/80 text-center animate-pulse">
        {message}
      </p>

      {/* Animated dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#30D158]"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Visual placeholder - scan line effect */}
      <div className="absolute bottom-[100px] left-4 right-4 h-[120px] rounded-[12px] bg-[#1C1C1E] overflow-hidden opacity-30">
        <div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#30D158] to-transparent"
          style={{
            animation: "scan-line 2s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
