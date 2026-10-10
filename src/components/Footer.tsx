import type React from "react";

/** Renders the architectural colophon footer and ecosystem directory. */
export const Footer: React.FC = () => {
  /** Smoothly scrolls the window to the top of the page. */
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-stone-300 border-t border-neutral-800 pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Brand Colophon */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/crystal-kizor-primary.webp"
                alt="Crystal Kizor"
                width={260}
                height={60}
                className="h-10 w-auto object-contain block brightness-0 invert"
              />
            </div>
            <p className="font-sans text-sm text-stone-400 max-w-sm leading-relaxed mt-2">
              Architect, spatial researcher, and systems designer engineering
              climate-smart environments, contemporary African furniture, and
              transformative capacity-building platforms.
            </p>
            <p className="text-xs text-stone-500 uppercase tracking-widest mt-2">
              Lagos &bull; Port Harcourt &bull; Abuja &bull; Global
            </p>
          </div>

          {/* Practice & Design */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-100 block mb-1">
              Practice & Design
            </span>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              Studio COKA
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              ELEvated Furniture
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              Passive Cooling Systems
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              Indigenous Materials
            </a>
          </div>

          {/* Media & Platforms */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-100 block mb-1">
              Platforms & Media
            </span>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              The Effective Architect (TEA)
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              AKO Alliance
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              Alive and Free
            </a>
            <a
              href="#innovations"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              The Architecture Dialogues
            </a>
          </div>

          {/* Social & Dialogue */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-100 block mb-1">
              Connect & Follow
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              LinkedIn Profile &rarr;
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              Instagram @crystalkizor &rarr;
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              YouTube / Masterclasses &rarr;
            </a>
            <a
              href="mailto:collaborate@crystalkizor.com"
              className="text-sm text-stone-400 hover:text-amber-600 transition-colors"
            >
              collaborate@crystalkizor.com
            </a>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {currentYear} Crystal Kizor. All rights reserved. Designed
            with passive principles and vernacular intelligence.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 uppercase tracking-wider text-stone-400 hover:text-amber-600 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span aria-hidden="true">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
