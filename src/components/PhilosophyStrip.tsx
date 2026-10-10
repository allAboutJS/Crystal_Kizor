import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useScrollReveal } from "@/utils/useScrollReveal";

interface PhilosophyStripProps {
  isIntroFinished: boolean;
}

/** Renders the core design philosophy strip with architectural border accents. */
export const PhilosophyStrip: React.FC<PhilosophyStripProps> = ({
  isIntroFinished,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  /** Animates philosophy cards into view using standard displacement. */
  const handleAnimate = (params: { y: number; duration: number; stagger: number }) => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);

    gsap.fromTo(
      cards,
      { opacity: 0, y: params.y },
      {
        opacity: 1,
        y: 0,
        duration: params.duration,
        stagger: params.stagger,
        ease: "power2.out",
      }
    );
  };

  useScrollReveal(sectionRef, isIntroFinished, handleAnimate);

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-stone-200 py-12"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          ref={card1Ref}
          className="border-l-2 border-amber-800 pl-6 opacity-0"
        >
          <span className="font-serif text-xl font-bold text-amber-800 block mb-1.5">
            01
          </span>
          <h2 className="font-sans text-base font-bold text-stone-900 mb-2">
            Climate-Smart Architecture
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            I design for cross-ventilation, micro-climate orientation, and
            low-energy envelopes that stay cool naturally in our tropical heat.
          </p>
        </div>

        <div
          ref={card2Ref}
          className="border-l-2 border-amber-800 pl-6 opacity-0"
        >
          <span className="font-serif text-xl font-bold text-amber-800 block mb-1.5">
            02
          </span>
          <h2 className="font-sans text-base font-bold text-stone-900 mb-2">
            Contextual & Local Materials
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            I harness excavated earth, compressed laterite, and local timber to
            drastically cut embodied carbon, construction costs, and foreign reliance.
          </p>
        </div>

        <div
          ref={card3Ref}
          className="border-l-2 border-amber-800 pl-6 opacity-0"
        >
          <span className="font-serif text-xl font-bold text-amber-800 block mb-1.5">
            03
          </span>
          <h2 className="font-sans text-base font-bold text-stone-900 mb-2">
            Capacity & Generational Impact
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            I mentor emerging practitioners and empower underserved youth to
            build sustainable careers and purpose-driven lives.
          </p>
        </div>
      </div>
    </section>
  );
};
