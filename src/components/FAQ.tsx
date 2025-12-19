"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this real or just a concept?",
    answer:
      "Yes. We're building it now. The tech is from Veo, which already powers match analysis for thousands of clubs.",
  },
  {
    question: "What happens after I request early access?",
    answer:
      "We'll email a small number of UK testers first, then expand.",
  },
  {
    question: "What will it cost?",
    answer:
      "We're testing pricing with early users; founding members get 3 months free.",
  },
  {
    question: "What if it doesn't work as shown?",
    answer:
      "Your £4.99 deposit is 100% refundable anytime before launch—no questions asked. If the final product doesn't meet your expectations, you get your money back.",
  },
  {
    question: "When will it launch?",
    answer:
      "We're targeting launch in early 2025. Founding Members will get first access, followed by waitlist members. We'll keep you updated with progress along the way.",
  },
  {
    question: "Do I need a Veo camera?",
    answer:
      "Yes, Social Highlighter works with matches recorded by Veo cameras. If your club or pitch already has Veo set up, you're good to go. If not, check with your club about getting Veo installed.",
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
    question: "What's included in the 3 free months for Founding Members?",
    answer:
      "During your first 3 months, you'll have unlimited access to all highlights from your matches—no caps, no limits. After that, you can continue with a paid subscription (pricing TBD based on feedback).",
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
      </div>
    </section>
  );
}
