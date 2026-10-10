import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface IntroAnimationProps {
  onComplete: () => void;
}

/** Renders the initial GSAP architectural intro animation sequence. */
export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.set(containerRef.current, { display: "flex" })
        .fromTo(
          markRef.current,
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          lineRef.current,
          { width: "0%" },
          { width: "64px", duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          [markRef.current, titleRef.current, lineRef.current, subRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.05,
            delay: 0.6,
            ease: "power2.in"
          }
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut"
        });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-stone-100 select-none"
    >
      <div className="flex flex-col items-center text-center px-6">
        <div
          ref={markRef}
          className="mb-6"
        >
          <img
            src="/assets/images/crystal-kizor-monogram.png"
            alt="CK"
            width={64}
            height={64}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-3xl md:text-5xl font-light tracking-widest uppercase text-stone-100 mb-4"
        >
          Crystal Kizor
        </h1>

        <div
          ref={lineRef}
          className="h-0.5 bg-amber-800 my-2"
        />

        <p
          ref={subRef}
          className="font-sans text-xs md:text-sm tracking-widest uppercase text-stone-400 mt-2 font-medium"
        >
          Spaces • Products • Systems
        </p>
      </div>
    </div>
  );
};
