"use client";

import { useEffect, useState } from "react";

export default function IOSStatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Update time immediately and then every minute
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[47px] px-6 flex items-center justify-between bg-black text-white">
      {/* Left side - Time */}
      <div className="flex items-center">
        <span className="text-[17px] font-semibold tracking-tight">{time}</span>
      </div>

      {/* Right side - Status icons */}
      <div className="flex items-center gap-[6px]">
        {/* Cellular bars */}
        <div className="flex items-end gap-[2px] h-[12px]">
          <div className="w-[3px] h-[4px] bg-white rounded-[1px]" />
          <div className="w-[3px] h-[6px] bg-white rounded-[1px]" />
          <div className="w-[3px] h-[8px] bg-white rounded-[1px]" />
          <div className="w-[3px] h-[12px] bg-white rounded-[1px]" />
        </div>

        {/* WiFi icon */}
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          className="ml-1"
        >
          <path
            d="M8.5 2.5C10.9 2.5 13.1 3.4 14.7 4.9L16 3.6C14.1 1.8 11.4 0.5 8.5 0.5C5.6 0.5 2.9 1.8 1 3.6L2.3 4.9C3.9 3.4 6.1 2.5 8.5 2.5Z"
            fill="white"
          />
          <path
            d="M4.6 7.2L5.9 8.5C6.6 7.8 7.5 7.4 8.5 7.4C9.5 7.4 10.4 7.8 11.1 8.5L12.4 7.2C11.4 6.2 10 5.5 8.5 5.5C7 5.5 5.6 6.2 4.6 7.2Z"
            fill="white"
          />
          <circle cx="8.5" cy="10.5" r="1.5" fill="white" />
        </svg>

        {/* Battery */}
        <div className="flex items-center gap-[2px] ml-1">
          <div className="relative w-[25px] h-[12px] rounded-[3px] border border-white/50 p-[2px]">
            <div className="h-full w-[85%] bg-white rounded-[1px]" />
          </div>
          <div className="w-[2px] h-[5px] bg-white/50 rounded-r-[1px]" />
        </div>
      </div>
    </div>
  );
}
