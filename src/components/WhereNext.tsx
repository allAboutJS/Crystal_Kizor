import React, { useRef } from "react";
import { visitorPathsData } from "@/utils/paths";
import { gsap } from "@/lib/gsap";
import { useScrollReveal, type AnimationParams } from "@/utils/useScrollReveal";

interface WhereNextProps {
  onSelectIntent: (intent: string) => void;
  isIntroFinished: boolean;
}

/** Renders the clean architectural doorways directing visitors to their next steps. */
export const WhereNext: React.FC<WhereNextProps> = ({
  onSelectIntent,
  isIntroFinished,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  /** Animates section header and doorways with standard stagger. */
  const handleAnimate = (params: AnimationParams) => {
    const cards = cardsContainerRef.current
      ? Array.from(cardsContainerRef.current.children)
      : [];

    const tl = gsap.timeline();

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: params.y },
        { opacity: 1, y: 0, duration: params.duration, ease: "power2.out" }
      );
    }

    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: params.y },
        {
          opacity: 1,
          y: 0,
          duration: params.duration,
          stagger: params.stagger,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }
  };

  useScrollReveal(sectionRef, isIntroFinished, handleAnimate);

  /** Dispatches selected intent to parent scroll and form handler. */
  const handleDoorwayClick = (actionIntent: string) => {
    onSelectIntent(actionIntent);
  };

  return (
    <section
      ref={sectionRef}
      id="where-next"
      className="py-24 bg-stone-50 border-b border-stone-200"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 opacity-0">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4">
            Where would you like to begin?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-stone-600">
            Direct doorways into my ecosystem based on how we can create value
            together. Select an area below to connect directly with me.
          </p>
        </div>

        {/* 4 Doorway Cards Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {visitorPathsData.map((path) => (
            <div
              key={path.id}
              className="bg-white border border-stone-200 p-10 flex flex-col justify-between gap-6 hover:-translate-y-1 hover:border-amber-800 transition-all duration-300 shadow-sm opacity-0"
            >
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mb-3">
                  {path.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed text-stone-600">
                  {path.description}
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleDoorwayClick(path.actionIntent)}
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3.5 bg-neutral-950 text-stone-100 border border-neutral-950 hover:bg-amber-800 hover:border-amber-800 transition-colors rounded-none cursor-pointer"
                >
                  <span>{path.actionLabel}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
