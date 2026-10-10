import React, { useRef } from "react";
import { initiativesData } from "@/utils/initiatives";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/gsap";
import { useScrollReveal, type AnimationParams } from "@/utils/useScrollReveal";
import type { Initiative } from "@/utils/types";

interface InnovationsProps {
  onSelectIntent: (intent: string) => void;
  isIntroFinished: boolean;
}

interface MonographItemProps {
  item: Initiative;
  onSelectIntent: (intent: string) => void;
  isIntroFinished: boolean;
}

/** Renders an individual architectural monograph spread with scroll entrance. */
const MonographItem: React.FC<MonographItemProps> = ({
  item,
  onSelectIntent,
  isIntroFinished,
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  /** Animates the monograph spread media and text on scroll reveal. */
  const handleAnimate = (params: AnimationParams) => {
    const elements = [mediaRef.current, textRef.current].filter(Boolean);

    gsap.fromTo(
      elements,
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

  useScrollReveal(itemRef, isIntroFinished, handleAnimate);

  /** Handles action button click and triggers intent selection. */
  const handleActionClick = () => {
    onSelectIntent(item.actionIntent);
  };

  return (
    <article
      ref={itemRef}
      className="border-t border-neutral-800 pt-8 flex flex-col gap-8"
    >
      {/* Monograph Top Meta Bar */}
      <div className="flex justify-between items-baseline border-b border-neutral-800/60 pb-3">
        <span className="font-serif text-3xl font-semibold text-amber-600 leading-none">
          {item.index}
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-stone-400">
          {item.discipline}
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Visual Frame */}
        <div
          ref={mediaRef}
          className={cn(
            "relative w-full opacity-0",
            item.reverse && "lg:order-2"
          )}
        >
          {item.image ? (
            <div className="relative border border-neutral-800 bg-neutral-900 overflow-hidden shadow-xl group">
              <img
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-96 md:h-104 object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : item.quote ? (
            <div
              className={cn(
                "border border-neutral-800 p-10 md:p-12 flex flex-col justify-center items-center min-h-96 md:min-h-104 text-center shadow-xl",
                item.quote.isDark
                  ? "bg-gradient-to-br from-neutral-900 to-neutral-950"
                  : "bg-gradient-to-br from-stone-900 to-neutral-950"
              )}
            >
              <span className="text-3xl text-amber-600 mb-3 block">
                {item.quote.motif}
              </span>
              <h4 className="font-serif text-2xl md:text-3xl font-normal text-stone-100 mb-4">
                {item.quote.heading}
              </h4>
              <p className="font-serif italic text-lg text-stone-300 leading-relaxed max-w-md">
                "{item.quote.text}"
              </p>
            </div>
          ) : null}
        </div>

        {/* Narrative & Specification */}
        <div
          ref={textRef}
          className={cn(
            "flex flex-col opacity-0",
            item.reverse && "lg:order-1"
          )}
        >
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-100 mb-4">
            {item.title}
          </h3>

          <p className="font-sans text-base sm:text-lg font-medium text-amber-600 mb-4 leading-relaxed">
            {item.lead}
          </p>

          <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-neutral-900 text-stone-400 border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={handleActionClick}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3.5 bg-neutral-900 text-stone-100 border border-neutral-800 hover:bg-amber-800 hover:border-amber-800 transition-colors rounded-none cursor-pointer"
            >
              <span>{item.actionLabel}</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

/** Renders the architectural monograph spreads for all ecosystem initiatives. */
export const Innovations: React.FC<InnovationsProps> = ({
  onSelectIntent,
  isIntroFinished,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  /** Animates the innovations section header. */
  const handleHeaderAnimate = (params: AnimationParams) => {
    if (!headerRef.current) {
      return;
    }

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: params.y },
      { opacity: 1, y: 0, duration: params.duration, ease: "power2.out" }
    );
  };

  useScrollReveal(headerRef, isIntroFinished, handleHeaderAnimate);

  return (
    <section
      id="innovations"
      className="py-24 bg-neutral-950 text-stone-100 border-b border-neutral-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-20 opacity-0">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-stone-100 mb-4">
            Innovations Created Over Time
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-stone-400">
            Rather than a collection of separate businesses, every initiative I
            lead connects physical architecture, contextual craftsmanship,
            professional education, and human restoration into one cohesive,
            regenerative ecosystem.
          </p>
        </div>

        {/* Monograph Spreads List */}
        <div className="flex flex-col gap-20 md:gap-24">
          {initiativesData.map((item) => (
            <MonographItem
              key={item.id}
              item={item}
              onSelectIntent={onSelectIntent}
              isIntroFinished={isIntroFinished}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
