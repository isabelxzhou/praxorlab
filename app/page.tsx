import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import Products from "@/components/Products";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ConsoleGreeting from "@/components/ConsoleGreeting";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <ScrollProgress />
      <ConsoleGreeting />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ResearchAreas />
      <Products />
      <Programs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
