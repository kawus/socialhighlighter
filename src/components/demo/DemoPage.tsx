"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DemoStep, stepInfo, Match, Highlight, mockHighlights } from "./constants";
import IOSStatusBar from "../ios/IOSStatusBar";
import IOSHomeIndicator from "../ios/IOSHomeIndicator";
import IOSNavigationBar from "../ios/IOSNavigationBar";
import IPhoneFrame from "../ios/IPhoneFrame";

// Step components (to be implemented)
import DemoWelcome from "./DemoWelcome";
import MatchSelector from "./MatchSelector";
import AIProcessing from "./AIProcessing";
import HighlightReveal from "./HighlightReveal";
import BlurPreview from "./BlurPreview";
import ShareSheet from "./ShareSheet";
import DemoSuccess from "./DemoSuccess";

export default function DemoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<DemoStep>(1);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [faceBlurEnabled, setFaceBlurEnabled] = useState(true);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentStep < 7) {
      setCurrentStep((prev) => (prev + 1) as DemoStep);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as DemoStep);
    }
  }, [currentStep]);

  const handleClose = useCallback(() => {
    router.push("/");
  }, [router]);

  // Step-specific handlers
  const handleMatchSelect = useCallback((match: Match) => {
    setSelectedMatch(match);
    // Auto-advance after brief delay
    setTimeout(() => setCurrentStep(3), 500);
  }, []);

  const handleProcessingComplete = useCallback(() => {
    setCurrentStep(4);
  }, []);

  const handleHighlightSelect = useCallback((highlight: Highlight) => {
    setSelectedHighlight(highlight);
    setTimeout(() => setCurrentStep(5), 500);
  }, []);

  const handleShareComplete = useCallback(() => {
    setCurrentStep(7);
  }, []);

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DemoWelcome onStart={handleNext} />;
      case 2:
        return <MatchSelector onSelect={handleMatchSelect} />;
      case 3:
        return <AIProcessing onComplete={handleProcessingComplete} />;
      case 4:
        return (
          <HighlightReveal
            highlights={mockHighlights}
            onSelect={handleHighlightSelect}
          />
        );
      case 5:
        return (
          <BlurPreview
            highlight={selectedHighlight}
            blurEnabled={faceBlurEnabled}
            onToggleBlur={() => setFaceBlurEnabled(!faceBlurEnabled)}
            onContinue={handleNext}
          />
        );
      case 6:
        return <ShareSheet onShare={handleShareComplete} />;
      case 7:
        return <DemoSuccess onClose={handleClose} />;
      default:
        return null;
    }
  };

  // Determine if we should show navigation bar
  const showNavBar = currentStep > 1 && currentStep < 7;
  const showBackButton = currentStep > 2 && currentStep < 7;

  // Screen content wrapper
  const ScreenContent = () => (
    <div className="relative flex flex-col h-full bg-black">
      {/* iOS Status Bar - hidden on mobile (device has its own) */}
      <div className="hidden md:block">
        <IOSStatusBar />
      </div>

      {/* Navigation Bar (conditional) */}
      {showNavBar && (
        <IOSNavigationBar
          title={stepInfo[currentStep].navTitle}
          onBack={showBackButton ? handleBack : undefined}
          onClose={handleClose}
          showBack={showBackButton}
          largeTitle={currentStep !== 3} // No large title during processing
        />
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
