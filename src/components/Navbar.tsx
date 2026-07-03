"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { NAV_ITEMS } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-8 pointer-events-none transition-colors duration-500 ${isOpen ? 'text-black' : 'text-white mix-blend-difference'}`}>
        <div className="font-bold text-xl md:text-2xl uppercase tracking-widest pointer-events-auto cursor-pointer">
          Shikhar.x
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-mono uppercase text-sm md:text-base tracking-widest hover:opacity-70 transition-opacity pointer-events-auto"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-accent z-40 flex flex-col overflow-hidden"
          >
            <div
              className="flex-1 flex flex-col pt-20 md:pt-28 pb-6 md:pb-8 px-6 md:px-12 w-full h-full"
              data-lenis-prevent="true"
            >
              <div className="flex flex-col justify-between h-full max-w-7xl mx-auto w-full relative">

                {/* Nav Links Container - Takes up remaining space evenly */}
                <div className="flex-1 flex flex-col justify-center min-h-0">
                  {NAV_ITEMS.map((item, i) => (
                    <div key={item.name} className="flex-1 overflow-hidden border-b border-black/20 first:border-t flex flex-col justify-center">
                      <motion.a
                        href={item.href}
                        initial={{ y: "150%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "0%" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 + (i * 0.05) }}
                        className="nav-item-container group flex items-center justify-between w-full text-black hover:text-white transition-colors duration-300 py-2 md:py-0"
                        onClick={() => setIsOpen(false)}
                      >
                        <h2 className="text-[clamp(2rem,8vh,6vw)] leading-none font-sans tracking-tighter font-medium capitalize">
                          {item.name}
                        </h2>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7, delay: 0.4 + (i * 0.05) }}
                        >
                          <item.Arrow className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" strokeWidth={1} />
                        </motion.div>
                      </motion.a>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="nav-footer w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 text-black font-mono text-[10px] md:text-xs uppercase tracking-widest pt-6 mt-4 shrink-0"
                >
                  <div className="md:col-span-2 font-bold leading-tight hidden md:block">
                    Shikharx<br />PORTFOLIO<br />↘
                  </div>
                  <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 md:border-l border-black/30 md:pl-6">
                    <span className="opacity-70">Just Vibing</span>
                    <span className="opacity-70">© 2026</span>
                    <span className="opacity-70">Privacy</span>
                  </div>
                  <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 md:border-l border-black/30 md:pl-6">
                    <a href="https://github.com/ShikharCodex" className="hover:text-white transition-colors">gh</a>
                    <a href="https://www.linkedin.com/in/shikhar-x-9158b8409 " className="hover:text-white transition-colors">Lin</a>
                    <a href="https://x.com/ShikharCodex" className="hover:text-white transition-colors">X</a>
                    <a href="https://www.instagram.com/shikharcodex?igsh=MTU5OTB0dWp2d3g3dg==" className="hover:text-white transition-colors">insta</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
