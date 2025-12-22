import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Demo from "@/components/Demo";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Hero />
      <SocialProof />
      <Problem />
      <Demo />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
