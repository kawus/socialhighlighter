"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this real or just a concept?",
    answer:
      "Yes. We're building it now. The tech is from Veo, which already powers match analysis for thousands of clubs worldwide.",
  },
  {
    question: "Do I need a Veo camera?",
    answer:
      "Yes, Social Highlighter works with matches recorded by Veo cameras. If your club or pitch already has Veo set up, you're good to go. If not, check with your club about getting Veo installed—over 50,000 clubs already use it.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer:
      "We'll email you when we're ready for testers. UK-based players get priority access.",
  },
  {
    question: "When will it launch?",
    answer:
      "We're targeting Q2 2025. Founding Members (opening Q1 2025) will get first access, followed by waitlist members.",
  },
  {
    question: "What will it cost?",
    answer:
      "Pricing is still being finalized. Founding Members will get 3 months free to help us get it right.",
  },
  {
    question: "How does the AI find my highlights?",
    answer:
      "Our AI analyzes the full match footage to automatically detect key moments—goals, assists, saves, and more. It identifies players and tags the highlights to you, so they're ready to share without any manual searching.",
  },
  {
    question: "Is my privacy protected?",
    answer:
      "Absolutely. Our face blur technology automatically obscures everyone except you in your highlights. This means you can share freely on social media without worrying about other players' privacy.",
  },
  {
    question: "What if it doesn't meet my expectations?",
    answer:
      "If you become a Founding Member, your £4.99 deposit is 100% refundable anytime before launch—no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Questions? <span className="text-text-secondary">Answers.</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-accent-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-text-secondary">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-text-secondary mb-4">Still have questions?</p>
          <a
            href="mailto:support@veo.co"
            className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:underline"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Conversion CTA */}
        <div id="faq" className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-accent-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to join?</h3>
          <p className="text-text-secondary mb-6">Get notified when Social Highlighter launches.</p>
          <a
            href="#early-access"
            className="btn-primary inline-flex items-center gap-2"
            data-event="faq_cta_join_waitlist"
          >
            Join the Waitlist — Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
