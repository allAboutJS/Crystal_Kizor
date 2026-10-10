import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface HeroProps {
  onNavigateContact?: () => void;
  onNavigateInnovations?: () => void;
  isIntroFinished: boolean;
}

/** Renders the Hero section featuring the architectural collage and core positioning. */
export const Hero: React.FC<HeroProps> = ({
  onNavigateContact,
  onNavigateInnovations,
  isIntroFinished,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const credsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isIntroFinished) {
      return;
    }

    if (hasAnimatedRef.current) {
      return;
    }

    hasAnimatedRef.current = true;

    const yDisplacement = 24;
    const duration = 0.85;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: yDisplacement },
        { opacity: 1, y: 0, duration, ease: "power3.out" }
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: yDisplacement * 0.8 },
          { opacity: 1, y: 0, duration: duration * 0.85, ease: "power3.out" },
          "-=0.55"
        )
        .fromTo(
          credsRef.current,
          { opacity: 0, y: yDisplacement * 0.8 },
          { opacity: 1, y: 0, duration: duration * 0.85, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: yDisplacement * 0.6 },
          { opacity: 1, y: 0, duration: duration * 0.8, ease: "power3.out" },
          "-=0.45"
        )
        .fromTo(
          collageRef.current,
          { opacity: 0, scale: 0.96, y: yDisplacement * 0.8 },
          { opacity: 1, scale: 1, y: 0, duration: duration * 1.05, ease: "power3.out" },
          "-=0.7"
        );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [isIntroFinished]);

  /** Smoothly scrolls to the innovations section. */
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onNavigateInnovations) {
      onNavigateInnovations();
      return;
    }

    const target = document.getElementById("innovations");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  /** Smoothly scrolls to the contact section. */
  const handleCollaborateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onNavigateContact) {
      onNavigateContact();
      return;
    }

    const target = document.getElementById("where-next");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="py-16 md:py-24 bg-stone-50 border-b border-stone-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col">
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-stone-900 mb-6 opacity-0"
          >
            Crystal Kizor. Climate-smart space, product, and systems designer.
          </h1>

          <p
            ref={descRef}
            className="font-sans text-base sm:text-lg leading-relaxed text-stone-600 mb-8 max-w-2xl opacity-0"
          >
            As an architect, researcher, and entrepreneur, I step away from
            energy-intensive, ill-adapted building patterns to create
            environments, objects, and educational platforms deeply rooted in
            African context, passive cooling, and local material intelligence.
          </p>

          {/* Credentials Ticker */}
          <div
            ref={credsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-stone-200 mb-8 opacity-0"
          >
            <div>
              <span className="font-serif text-3xl font-bold text-amber-800 block leading-none mb-1">
                1st
              </span>
              <span className="text-xs text-stone-600 font-medium leading-relaxed block">
                Off-Grid Solar Hospital in Nigeria (TESH)
              </span>
            </div>

            <div>
              <span className="font-serif text-3xl font-bold text-amber-800 block leading-none mb-1">
                07
              </span>
              <span className="text-xs text-stone-600 font-medium leading-relaxed block">
                Initiatives Built Across Design, Media & Youth
              </span>
            </div>

            <div>
              <span className="font-serif text-3xl font-bold text-amber-800 block leading-none mb-1">
                TEDx
              </span>
              <span className="text-xs text-stone-600 font-medium leading-relaxed block">
                Speaker on African Cities & Tropical Architecture
              </span>
            </div>
          </div>

          {/* Call to Actions */}
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center gap-4 opacity-0"
          >
            <a
              href="#innovations"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center font-sans text-xs font-semibold tracking-wider uppercase px-8 py-4 bg-amber-800 text-stone-100 border border-amber-800 hover:bg-neutral-950 hover:border-neutral-950 transition-colors rounded-none"
            >
              Explore What I'm Building
            </a>
            <a
              href="#where-next"
              onClick={handleCollaborateClick}
              className="inline-flex items-center justify-center font-sans text-xs font-semibold tracking-wider uppercase px-8 py-4 bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white transition-colors rounded-none"
            >
              Collaborate With Me
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Photo Collage */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div
            ref={collageRef}
            className="relative w-full max-w-lg mx-auto lg:ml-auto opacity-0"
          >
            {/* Primary Main Frame: Crystal Kizor Herself */}
            <div className="relative border border-stone-200 bg-white p-3 shadow-lg z-10">
              <img
                src="/assets/images/crystal-portrait-main.webp"
                alt="Crystal Kizor — Space, Product & Systems Designer"
                width={800}
                height={1067}
                className="w-full h-96 sm:h-120 object-cover object-top block"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {/* Secondary Offset Frame: Project Accomplishment (Bottom Left) */}
            <div
              className="absolute -bottom-6 -left-6 sm:-left-8 w-44 sm:w-52 border border-stone-200 bg-white p-2 shadow-md z-20 hover:-translate-y-1.5 transition-transform duration-300"
              title="Climate-Responsive Architecture by Studio COKA"
            >
              <img
                src="/assets/images/arch-coka-cantilever.webp"
                alt="Studio COKA Architectural Project Accomplishment"
                width={500}
                height={500}
                className="w-full h-44 sm:h-52 object-cover block"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Video-Dimension Frame: Project Video Film (Top Right) */}
            <div
              className="absolute -top-6 -right-4 sm:-right-6 w-48 sm:w-56 aspect-video border border-stone-200 bg-white p-1.5 shadow-md z-30 hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              title="Studio COKA Built Environment Project"
            >
              <img
                src="/assets/images/arch-coka-facade.webp"
                alt="Studio COKA Built Architecture Project"
                width={600}
                height={338}
                className="w-full h-full object-cover block"
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute bottom-2 right-2 bg-neutral-950/85 text-white w-6 h-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
