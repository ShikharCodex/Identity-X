"use client";

import { PROJECTS } from "@/constants";
import { FolderIcon } from "./icons/FolderIcon";
import { TxtIcon } from "./icons/TxtIcon";

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
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity" role="button" tabIndex={0} aria-label="Toggle Good status">
              <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" /></svg>
              !Good
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity" role="button" tabIndex={0} aria-label="Toggle Vibes status">
              <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0-4h.01" /></svg>
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
                rel={proj.isDownload ? undefined : "noopener noreferrer"}
                download={proj.isDownload ? "Resume.pdf" : undefined}
                className="w-full max-w-[280px]"
                aria-label={`Project: ${proj.label}`}
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
