"use client";

export default function Footer() {
  return (
    <div className="w-full h-screen bg-black p-2 sm:p-4 md:p-6 flex items-end">
      <footer className="w-full h-full bg-[#111111] rounded-[2rem] md:rounded-[3rem] text-white flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-0 overflow-hidden relative shadow-2xl">

        {/* Top Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-16 xl:gap-0 w-full px-6 sm:px-12 md:px-20 z-10 h-full">

          {/* Brand & Description */}
          <div className="flex flex-col max-w-xs shrink-0">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase text-white">Shikhar.x</h2>
            <p className="text-sm text-white/50 leading-relaxed pr-8">
              Building AI that thinks, software that scales, and digital experiences that feel alive. From autonomous agents and RAG systems to production-ready SaaS products, I turn ambitious ideas into intelligent reality.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-16 md:gap-24 w-full xl:w-auto">

            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-sm font-semibold text-white/90 mb-1 md:mb-2">Quick links</h3>
              <a href="#" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">Experience</a>
              <a href="#lab" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">Lab</a>
              <a href="#hex" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">The Hex</a>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-sm font-semibold text-white/90 mb-1 md:mb-2">Social</h3>
              <a href="https://github.com/ShikharCodex" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/shikhar-x-9158b8409" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/ShikharCodex" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">X - Twitter</a>
              <a href="https://www.instagram.com/shikharcodex?igsh=MTU5OTB0dWp2d3g3dg==" className="text-[13px] md:text-sm text-white/50 hover:text-white transition-colors">Instagram</a>
            </div>

          </div>
        </div>

        {/* Bottom Area */}
        <div className="w-full flex flex-col z-10 relative shrink-0">

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-[10px] md:text-xs text-white/40 px-6 sm:px-12 md:px-20 border-t border-white/10 pt-6 md:pt-8 gap-4 md:gap-0 z-20">
            <p>© 2026 Shikhar All rights reserved.</p>
            <p>Design by Shikhar - Powered by Simulation</p>
          </div>

          {/* Massive Gradient Text */}
          <div className="w-full flex justify-center items-end overflow-hidden pointer-events-none select-none">
            <h1
              className="text-[25vw] leading-[0.7] md:leading-[0.75] font-black tracking-tighter uppercase bg-clip-text text-transparent transform translate-y-4 md:translate-y-8 lg:translate-y-12"
              style={{
                backgroundImage: "linear-gradient(to bottom, #DE0000 0%, #111111 85%)"
              }}
            >
              Shikhar
            </h1>
          </div>
        </div>

      </footer>
    </div>
  );
}
