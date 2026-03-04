import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import FeaturedResearch from "@/components/FeaturedResearch";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ResearchAreas />
      {/* <FeaturedResearch /> */}
      <Programs />
      <Process />

      <CTA />
      <Footer />
    </main>
  );
}
