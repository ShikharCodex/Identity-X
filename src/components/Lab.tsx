import Image from 'next/image';

export default function Lab() {
  return (
    <section id="lab" className="w-full h-screen bg-black relative z-10 overflow-hidden group flex flex-col items-center">

      {/* Full Bleed Background Image - Peeking from Bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/peeking_labrador.png"
          alt="Simba the Labrador peeking up"
          fill
          sizes="100vw"
          className="object-cover object-bottom scale-100 group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out opacity-90"
          priority
        />
      </div>

    </section>
  );
}
