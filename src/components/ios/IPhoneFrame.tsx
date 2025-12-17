"use client";

import { ReactNode } from "react";

interface IPhoneFrameProps {
  children: ReactNode;
}

export default function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="hidden md:flex items-center justify-center min-h-screen bg-bg-primary p-8">
      {/* Phone container with realistic proportions */}
      <div className="relative">
        {/* Phone frame - iPhone 15 Pro style */}
        <div
          className="relative rounded-[55px] p-[12px]"
          style={{
            background:
              "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 50%, #2c2c2e 100%)",
            boxShadow:
              "0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Side buttons - Left (Volume + Silent) */}
          <div className="absolute -left-[3px] top-[120px] w-[3px] h-[32px] bg-[#2c2c2e] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[170px] w-[3px] h-[64px] bg-[#2c2c2e] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[245px] w-[3px] h-[64px] bg-[#2c2c2e] rounded-l-sm" />

          {/* Side button - Right (Power) */}
          <div className="absolute -right-[3px] top-[180px] w-[3px] h-[96px] bg-[#2c2c2e] rounded-r-sm" />

          {/* Screen container */}
          <div
            className="relative bg-black rounded-[43px] overflow-hidden"
            style={{
              width: "393px",
              height: "852px",
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-50">
              <div
                className="bg-black rounded-full flex items-center justify-center"
                style={{
                  width: "126px",
                  height: "37px",
                }}
              >
                {/* Camera dot (subtle) */}
                <div className="absolute right-[18px] w-[12px] h-[12px] rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]" />
              </div>
            </div>

            {/* Screen content */}
            <div className="relative w-full h-full">{children}</div>
          </div>
        </div>

        {/* Ambient glow behind phone */}
        <div className="absolute -inset-20 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent blur-3xl -z-10" />
      </div>
    </div>
  );
}
