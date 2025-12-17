"use client";

interface IOSNavigationBarProps {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
  showBack?: boolean;
  backLabel?: string;
  largeTitle?: boolean;
}

export default function IOSNavigationBar({
  title,
  onBack,
  onClose,
  showBack = false,
  backLabel = "Back",
  largeTitle = true,
}: IOSNavigationBarProps) {
  return (
    <div className="bg-black">
      {/* Standard nav bar */}
      <div className="h-[44px] px-4 flex items-center justify-between">
        {/* Left side - Back button */}
        <div className="flex-1 flex items-start">
          {showBack && onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-[#0A84FF] active:opacity-60 transition-opacity"
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                className="-ml-1"
              >
                <path
                  d="M10 2L2 10L10 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[17px]">{backLabel}</span>
            </button>
          )}
        </div>

        {/* Center - Title (when not large) */}
        {!largeTitle && (
          <div className="flex-1 text-center">
            <span className="text-[17px] font-semibold text-white">{title}</span>
          </div>
        )}

        {/* Right side - Close button */}
        <div className="flex-1 flex justify-end">
          {onClose && (
            <button
              onClick={onClose}
              className="w-[30px] h-[30px] rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Large title */}
      {largeTitle && (
        <div className="px-4 pb-2">
          <h1 className="text-[34px] font-bold text-white leading-[41px]">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
