"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Highlight, mockHighlights } from "./constants";
import IOSStatusBar from "../ios/IOSStatusBar";
import IOSHomeIndicator from "../ios/IOSHomeIndicator";
import IPhoneFrame from "../ios/IPhoneFrame";

// Step components
import HighlightReveal from "./HighlightReveal";
import BlurPreview from "./BlurPreview";
import ShareSheet from "./ShareSheet";
import DemoSuccess from "./DemoSuccess";

// Simplified demo steps: 1=Highlights, 2=BlurPreview, 3=Share, 4=Success
type BeliefDemoStep = 1 | 2 | 3 | 4;

// The "best" highlight to auto-select on load (Goal at 67:38)
const defaultHighlight = mockHighlights[2]; // "Header from corner" - most exciting

export default function DemoPage() {
  const router = useRouter();
  // Start at step 1 with a highlight already selected (instant "win")
  const [currentStep, setCurrentStep] = useState<BeliefDemoStep>(1);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight>(defaultHighlight);
  const [faceBlurEnabled, setFaceBlurEnabled] = useState(true);
  // Track if user has toggled blur at least once
  const hasToggledBlurRef = useRef(false);

  const handleClose = useCallback(() => {
    router.push("/");
  }, [router]);

  // User-triggered progression only
  const handleHighlightSelect = useCallback((highlight: Highlight) => {
    setSelectedHighlight(highlight);
  }, []);

  const handleContinueFromHighlights = useCallback(() => {
    setCurrentStep(2);
  }, []);

  const handleToggleBlur = useCallback(() => {
    setFaceBlurEnabled((prev) => !prev);
    hasToggledBlurRef.current = true;
  }, []);

  const handleContinueFromBlur = useCallback(() => {
    setCurrentStep(3);
  }, []);

  const handleShareComplete = useCallback(() => {
    setCurrentStep(4);
  }, []);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as BeliefDemoStep);
    }
  }, [currentStep]);

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <HighlightReveal
            highlights={mockHighlights}
            onSelect={handleHighlightSelect}
            onContinue={handleContinueFromHighlights}
            defaultSelectedId={defaultHighlight.id}
          />
        );
      case 2:
        return (
          <BlurPreview
            highlight={selectedHighlight}
            blurEnabled={faceBlurEnabled}
            onToggleBlur={handleToggleBlur}
            onContinue={handleContinueFromBlur}
            hasToggledBlur={hasToggledBlurRef.current}
          />
        );
      case 3:
        return <ShareSheet onShare={handleShareComplete} />;
      case 4:
        return <DemoSuccess onClose={handleClose} />;
      default:
        return null;
    }
  };

  // Nav title for each step
  const navTitles: Record<BeliefDemoStep, string> = {
    1: "Your Highlights",
    2: "Preview",
    3: "Share",
    4: "",
  };

  // Screen content wrapper
  const ScreenContent = () => (
    <div
      className="relative flex flex-col h-full bg-black"
      data-event="try_demo_loaded"
    >
      {/* iOS Status Bar - hidden on mobile (device has its own) */}
      <div className="hidden md:block">
        <IOSStatusBar />
      </div>

      {/* Instruction line - always visible except on success */}
      {currentStep < 4 && (
        <div className="px-4 pt-4 pb-2">
          <p className="text-[13px] text-white/50 text-center">
            Click a moment → watch the clip → toggle privacy blur → share.
          </p>
        </div>
      )}

      {/* Reality signal */}
      {currentStep < 4 && (
        <div className="px-4 pb-2">
          <p className="text-[11px] text-white/30 text-center">
            Example clip from a real amateur match.
          </p>
        </div>
      )}

      {/* Nav header for steps 2+ */}
      {currentStep > 1 && currentStep < 4 && (
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={handleBack}
            className="text-[17px] text-[#0A84FF] active:opacity-60"
          >
            Back
          </button>
          <span className="text-[17px] font-semibold text-white">
            {navTitles[currentStep]}
          </span>
          <button
            onClick={handleClose}
            className="text-[17px] text-[#0A84FF] active:opacity-60"
          >
            Close
          </button>
        </div>
      )}

      {/* Close button for step 1 */}
      {currentStep === 1 && (
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-[17px] font-semibold text-white">
            {navTitles[currentStep]}
          </span>
          <button
            onClick={handleClose}
            className="text-[17px] text-[#0A84FF] active:opacity-60"
          >
            Close
          </button>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 relative overflow-hidden">
        {renderStepContent()}
      </div>

      {/* iOS Home Indicator */}
      <IOSHomeIndicator />
    </div>
  );

  // Desktop: Render inside iPhone frame
  // Mobile: Render full-screen
  return (
    <>
      {/* Desktop view - inside iPhone frame */}
      <div className="hidden md:block">
        <IPhoneFrame>
          <ScreenContent />
        </IPhoneFrame>
      </div>

      {/* Mobile view - full screen */}
      <div className="md:hidden h-screen">
        <ScreenContent />
      </div>
    </>
  );
}
