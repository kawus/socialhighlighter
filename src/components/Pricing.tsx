"use client";

import { useState } from "react";

export default function Pricing() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [clubName, setClubName] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to actual backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handlePreorder = () => {
    // TODO: Integrate Stripe Checkout
    alert("Stripe integration coming soon! For now, join the waitlist.");
  };

  if (submitted) {
    return (
      <section id="early-access" className="section-padding bg-bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-primary/20 to-transparent blur-3xl" />

        <div className="section-container relative z-10 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-primary/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">You&apos;re on the list!</h2>
            <p className="text-text-secondary text-lg mb-8">
              We&apos;ll email you at <span className="text-white font-semibold">{email}</span> when Social Highlighter is ready.
            </p>
            <p className="text-text-muted">
              In the meantime, follow us for updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="early-access" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-primary/10 to-transparent blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6">
            Choose how early you{" "}
            <span className="text-gradient">want in</span>
          </h2>
          <p className="hidden md:block max-w-2xl mx-auto text-lg text-text-secondary">
            Join now and be among the first to experience instant highlights.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Founding Member - Primary */}
          <div className="relative card p-5 md:p-8 border-accent-primary/30">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-primary text-black text-sm font-bold">
              Recommended
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-card-glow opacity-50" />

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Founding Member</h3>
              <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6">
                Lock in early access with a fully refundable deposit.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-bold">£4.99</span>
                <span className="text-text-muted">deposit</span>
              </div>
              <p className="text-sm text-text-secondary mb-4 md:mb-6">
                The deposit helps us prioritize early access for committed testers.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "First access when we launch",
                  "3 months of unlimited highlights FREE",
                  "Permanent Founder badge on your profile",
                  "Direct input on features we build",
                  "100% refundable anytime before launch",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePreorder}
                className="btn-primary w-full text-center"
                data-event="pricing_click_founding_member"
              >
                Reserve My Spot — £4.99
              </button>

              <p className="text-center text-xs text-text-muted mt-4">
                Secure payment via Stripe. Cancel anytime.
              </p>
            </div>
          </div>

          {/* Free Waitlist - Secondary */}
          <div className="card p-5 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Free Waitlist</h3>
            <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6">
              Not ready to commit? No worries—join the free waitlist.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4 md:mb-6">
              <span className="text-4xl md:text-5xl font-bold">Free</span>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Email notification when we launch",
                "Early access (after Founding Members)",
                "No commitment required",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Waitlist form */}
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-white/10 text-white placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-white/10 text-white focus:border-accent-primary focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="text-text-muted">Select your role</option>
                <option value="player">Player</option>
                <option value="parent">Parent</option>
                <option value="coach">Coach</option>
              </select>
              <input
                type="text"
                placeholder="Club name (optional)"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-white/10 text-white placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-white/10 text-white placeholder-text-muted focus:border-accent-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-secondary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                data-event="pricing_submit_waitlist"
              >
                {isSubmitting ? "Requesting..." : "Request early access"}
              </button>
            </form>

            {/* Reassurance */}
            <p className="text-xs text-text-muted text-center mt-4">
              No spam. One email when you can try it.
            </p>
          </div>
        </div>

        {/* Reassurance below cards */}
        <p className="text-sm text-text-muted text-center mt-6">
          No spam. One email when you can try it.
        </p>

        {/* Trust signals */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">Trusted by players from</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-50">
            {/* Placeholder for club logos */}
            {["Sunday League", "5-a-side", "Amateur FC"].map((club) => (
              <span key={club} className="text-text-secondary font-medium">
                {club}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
