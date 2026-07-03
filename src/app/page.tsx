import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Lab from "@/components/Lab";
import Hex from "@/components/Hex";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black w-full">
      {/* Content wrapper with higher z-index to scroll over the footer */}
      <div className="relative z-20 bg-black w-full rounded-b-[2rem] md:rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] pb-12">
        <Hero />
        <Lab />
        <About />
        <Projects />
        <Experience />
        <Hex />
      </div>

      {/* Footer wrapper for Sticky Curtain Reveal */}
      <div 
        className="relative z-10 w-full h-screen" 
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 left-0 w-full h-screen">
          <Footer />
        </div>
      </div>
    </main>
  );
}
