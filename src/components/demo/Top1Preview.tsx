"use client";

interface Top1PreviewProps {
  onClose: () => void;
  onRequestAccess: () => void;
}

// Example rarity moments
const rarityExamples = [
  {
    label: "Top 1%",
    title: "30-yard screamer",
    reason: "Only 1% of goals are scored from this distance",
    percentile: 1,
  },
  {
    label: "Top 5%",
    title: "Bicycle kick assist",
    reason: "Spectacular assists are incredibly rare",
    percentile: 5,
  },
  {
    label: "Top 12%",
    title: "Header from corner",
    reason: "Winning aerial duels takes real skill",
    percentile: 12,
  },
];

export default function Top1Preview({
  onClose,
  onRequestAccess,
}: Top1PreviewProps) {
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
      <div className="h-full flex flex-col px-6 pt-16 pb-8 overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-[12px] font-medium mb-3">
            <span>🏆</span>
            <span>Moment Rarity</span>
          </div>
          <h2 className="text-[28px] font-bold text-white mb-2">
            <span className="text-[#FFB800]">Top 1%</span> Moments
          </h2>
          <p className="text-[15px] text-white/60">
            AI rates how special your moment was compared to millions of highlights
          </p>
        </div>

        {/* Hero badge showcase */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#FFB800] blur-3xl opacity-30 animate-pulse" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB800] to-orange-600 flex items-center justify-center">
              <div className="text-center">
                <p className="text-black font-black text-3xl">TOP 1%</p>
                <p className="text-black/60 text-[10px] font-medium">EXCEPTIONAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example moments */}
        <div className="space-y-3 mb-6">
          <p className="text-[12px] text-white/40 uppercase tracking-wider text-center mb-2">
            Example Rankings
          </p>
          {rarityExamples.map((example, index) => (
            <div
              key={index}
              className="bg-[#1C1C1E] rounded-[12px] p-4 border border-[#FFB800]/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                {/* Badge */}
                <div className="flex-shrink-0">
                  <div className="px-2 py-1 rounded-full bg-gradient-to-r from-[#FFB800] to-orange-500">
                    <span className="text-black font-bold text-[11px]">
                      {example.label.toUpperCase()}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-white mb-1">
                    {example.title}
                  </p>
                  <p className="text-[12px] text-white/50 mb-2">
                    {example.reason}
                  </p>
                  {/* Rarity bar */}
                  <div className="h-1 bg-[#2C2C2E] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FFB800] via-orange-500 to-red-500 rounded-full"
                      style={{ width: `${100 - example.percentile}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-[#1C1C1E] rounded-[12px] p-4 mb-6">
          <p className="text-[11px] text-[#FFB800] font-medium uppercase tracking-wider mb-2">
            How it works
          </p>
          <p className="text-[13px] text-white/70 leading-relaxed">
            Our AI analyzes thousands of data points — distance, angle, speed, technique —
            and compares your moment against millions of highlights to calculate its rarity.
          </p>
        </div>

        {/* Spacer to push CTAs to bottom */}
        <div className="flex-1" />

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={onRequestAccess}
            className="w-full h-[56px] rounded-[14px] bg-[#FFB800] text-black text-[17px] font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-100"
          >
            Request early access
          </button>
          <p className="text-[12px] text-white/40 text-center">
            Be first to see your rarity scores
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
