"use client";

const FolderIcon = ({ color = "#FFF000", label }: { color?: string, label: string }) => (
  <div className="flex flex-col items-center gap-3 md:gap-4 cursor-pointer group">
    <div className="relative w-full aspect-[5/4] transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        {/* Back folder tab */}
        <path d="M4,6 h26 c2,0 3,1 4,3 l2,5 h60 c2.2,0 4,1.8 4,4 v58 c0,2.2 -1.8,4 -4,4 H4 c-2.2,0 -4,-1.8 -4,-4 V10 c0,-2.2 1.8,-4 4,-4 Z" fill={color} opacity="0.95" />
        {/* Front folder cover */}
        <path d="M0,22 c0,-2.2 1.8,-4 4,-4 h92 c2.2,0 4,1.8 4,4 v54 c0,2.2 -1.8,4 -4,4 H4 c-2.2,0 -4,-1.8 -4,-4 V22 Z" fill={color} />
        {/* Highlight on front cover top edge */}
        <path d="M4,18 h92 c2.2,0 4,1.8 4,4 v1.5 H0 v-1.5 c0,-2.2 1.8,-4 4,-4 Z" fill="#ffffff" opacity="0.4" />
      </svg>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black group-hover:bg-black group-hover:text-white px-2 py-0.5 rounded transition-colors text-center">
      {label}
    </span>
  </div>
);

const TxtIcon = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-3 md:gap-4 cursor-pointer group">
    <div className="relative w-full aspect-[5/4] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 70 90" className="h-[90%] drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        {/* Document body */}
        <path d="M5,0 h40 l25,25 v60 c0,2.8 -2.2,5 -5,5 H5 c-2.8,0 -5,-2.2 -5,-5 V5 c0,-2.8 2.2,-5 5,-5 Z" fill="#F8F8F8" stroke="#E5E5E5" strokeWidth="1" />
        {/* Folded corner */}
        <path d="M45,0 v20 c0,2.8 2.2,5 5,5 h20 Z" fill="#E5E5E5" />
        {/* TXT Label */}
        <text x="35" y="75" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#D4D4D4" textAnchor="middle">TXT</text>
      </svg>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black group-hover:bg-black group-hover:text-white px-2 py-0.5 rounded transition-colors text-center text-black/60">
      {label}
    </span>
  </div>
);

import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white text-black min-h-screen py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 selection:bg-black selection:text-white overflow-hidden">

      <div className="max-w-[140rem] mx-auto w-full">
        {/* Massive Header - carefully clamped to never overflow */}
        <div className="w-full flex justify-center mb-6 md:mb-12">
          <h1 className="text-[clamp(3rem,13vw,18rem)] leading-[0.8] font-black tracking-tighter m-0 p-0 text-center w-full break-words hyphens-auto">
            PRO:JECTS
          </h1>
        </div>

        {/* Hairline Metadata Bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-b border-black py-4 md:py-5 px-1 md:px-2 mb-16 md:mb-24 gap-6 lg:gap-0">
          <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-3xl">
            These all are my Simulations, I do when I do Nothing. I like coding because it solves Problems and also i get the chance to Talk with Computers and AI...
          </p>

          <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold shrink-0">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" /></svg>
              !Good
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0-4h.01" /></svg>
              !Vibes
            </div>
          </div>
        </div>

        {/* OS Folder Grid - perfectly responsive spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-x-12 md:gap-y-20 lg:gap-x-16 lg:gap-y-28">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="flex justify-center">
              <a
                href={proj.link}
                target={proj.isDownload ? "_self" : "_blank"}
                rel="noopener noreferrer"
                download={proj.isDownload ? "Resume.pdf" : undefined}
                className="w-full max-w-[280px]"
              >
                {proj.type === "folder" ? (
                  <FolderIcon color={proj.color} label={proj.label} />
                ) : (
                  <TxtIcon label={proj.label} />
                )}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
