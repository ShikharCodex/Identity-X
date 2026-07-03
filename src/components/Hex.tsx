import React from 'react';

import { BOOKS } from "@/constants";

export default function Hex() {
  return (
    <section id="hex" className="w-full min-h-screen bg-black relative z-10 flex flex-col justify-center py-24 overflow-hidden">

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col items-center md:items-start">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          The <span className="text-[#e50914]">Hex</span>
        </h2>
        <p className="text-white/50 text-sm md:text-base font-medium mt-2 max-w-md text-center md:text-left">
          A curated collection of thoughts, models, and systems that shaped the way I build.
        </p>
      </div>

      {/* Bookshelf Container */}
      <div className="w-full overflow-x-auto pb-20 pt-10 px-6 sm:px-12 md:px-20" style={{ scrollbarWidth: 'none' }}>
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

        <div className="flex items-end w-max min-w-full h-[400px] sm:h-[500px] md:h-[600px] xl:h-[700px] px-2 md:px-0 lg:justify-center">
          {BOOKS.map((book, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 cursor-pointer hover:-translate-y-6 transition-transform duration-500 ease-out ${book.width} ${book.height} ${book.bgColor} ${book.textColor} border-l border-white/5 rounded-[4px]`}
              style={{
                // Realistic physical spine 3D effect: highlights, deep shadow on edges, drop shadow
                boxShadow: `
                  inset 3px 0 6px rgba(255,255,255,0.2), 
                  inset -8px 0 20px rgba(0,0,0,0.5), 
                  inset 15px 0 25px rgba(0,0,0,0.1),
                  10px 5px 20px rgba(0,0,0,0.7)
                `,
                // Spine curvature lighting overlay and hinge crease
                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 4%, rgba(0,0,0,0.1) 6%, rgba(255,255,255,0.15) 12%, rgba(255,255,255,0) 25%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0.6) 100%)',
                transform: book.tilted ? 'rotate(8deg) translateX(15px) translateY(10px)' : 'none',
                transformOrigin: 'bottom left',
                zIndex: book.tilted ? 10 : 1,
                marginLeft: book.tilted ? '0' : index > 0 && BOOKS[index - 1].tilted ? '12px' : '0'
              }}
            >
              {/* Top/Bottom spine folds (indentations) */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-black/40 rounded-t-[4px] mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-black/60 rounded-b-[4px] mix-blend-multiply" />
              
              {/* Vertical Text Container */}
              <div
                className={`w-full h-full p-4 md:p-6 flex items-center ${book.layout}`}
                style={{
                  writingMode: 'vertical-rl',
                  transform: book.readDirection === 'bottom-up' ? 'rotate(180deg)' : 'none'
                }}
              >
                <span className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap overflow-hidden text-ellipsis ${book.font}`}>
                  {book.title}
                </span>

                {book.author && (
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-80 whitespace-nowrap font-sans font-bold overflow-hidden text-ellipsis">
                    {book.author}
                  </span>
                )}

                {/* Decorative Publisher Logo / Element */}
                <div className="w-3 h-3 md:w-5 md:h-5 rounded-full border-[3px] border-current opacity-40 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* The Shelf Line */}
        <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#222] to-transparent mt-[-2px] mx-auto min-w-max max-w-6xl shadow-[0_10px_20px_rgba(0,0,0,1)]" />
      </div>

    </section>
  );
}
