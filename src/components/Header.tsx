import React, { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

interface HeaderProps {
  onNavigateContact?: () => void;
}

/** Renders the sticky top navigation header, continuous ticker strip, and animated drop-down mobile menu. */
export const Header: React.FC<HeaderProps> = ({ onNavigateContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    /** Handles window scroll events to update header elevation. */
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    /** Locks body scroll while mobile menu is open to prevent background scrolling. */
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  /** Toggles the mobile navigation drawer. */
  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  /** Closes mobile menu and triggers smooth scroll to contact section. */
  const handleContactClick = () => {
    setIsMobileOpen(false);

    if (onNavigateContact) {
      onNavigateContact();
    }
  };

  /** Closes mobile menu on navigation link click. */
  const handleNavLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-stone-50 border-b border-stone-200 transition-shadow duration-200",
        isScrolled && "shadow-md"
      )}
    >
      {/* Continuous Right-to-Left Infinite Scrolling Ticker Strip */}
      <div className="bg-neutral-950 text-stone-300 text-xs tracking-wider uppercase py-2.5 border-b border-neutral-800 overflow-hidden whitespace-nowrap select-none">
        <div className="animate-marquee-continuous flex items-center">
          {/* Primary Ticker Track */}
          <div className="flex items-center gap-8 pr-8">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-600 inline-block" />
              Pioneering climate-responsive spaces, sustainable materials & human capacity
            </span>
            <span className="opacity-40">•</span>
            <span>Studio COKA • Architecture, Interiors & Low-Energy Envelopes</span>
            <span className="opacity-40">•</span>
            <span>ELEvated • Contemporary African Furniture & Spatial Objects</span>
            <span className="opacity-40">•</span>
            <span>The Effective Architect (TEA) • Career Frameworks & Media</span>
            <span className="opacity-40">•</span>
            <span>AKO Alliance & Alive and Free • Generational Social Impact</span>
            <span className="opacity-40">•</span>
            <span>Keynote Speaker • TEDx • Bioclimatic Innovation</span>
          </div>

          {/* Seamless Duplicate Track for Continuous Loop */}
          <div className="flex items-center gap-8 pr-8" aria-hidden="true">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-600 inline-block" />
              Pioneering climate-responsive spaces, sustainable materials & human capacity
            </span>
            <span className="opacity-40">•</span>
            <span>Studio COKA • Architecture, Interiors & Low-Energy Envelopes</span>
            <span className="opacity-40">•</span>
            <span>ELEvated • Contemporary African Furniture & Spatial Objects</span>
            <span className="opacity-40">•</span>
            <span>The Effective Architect (TEA) • Career Frameworks & Media</span>
            <span className="opacity-40">•</span>
            <span>AKO Alliance & Alive and Free • Generational Social Impact</span>
            <span className="opacity-40">•</span>
            <span>Keynote Speaker • TEDx • Bioclimatic Innovation</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/images/crystal-kizor-primary.webp"
            alt="Crystal Kizor — Space, Product & Systems Designer"
            width={260}
            height={60}
            className="h-9 sm:h-11 w-auto object-contain block group-hover:opacity-85 transition-opacity"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            className="text-sm font-medium tracking-wide text-stone-900 hover:text-amber-800 transition-colors"
          >
            About Me
          </a>
          <a
            href="#innovations"
            className="text-sm font-medium tracking-wide text-stone-900 hover:text-amber-800 transition-colors"
          >
            What I'm Building
          </a>
          <a
            href="#where-next"
            className="text-sm font-medium tracking-wide text-stone-900 hover:text-amber-800 transition-colors"
          >
            Where To Go Next
          </a>
          <a
            href="#contact"
            className="text-sm font-medium tracking-wide text-stone-900 hover:text-amber-800 transition-colors"
          >
            Work With Me
          </a>
        </nav>

        {/* Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="hidden lg:inline-flex items-center justify-center font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3 bg-neutral-950 text-stone-100 border border-neutral-950 hover:bg-amber-800 hover:border-amber-800 transition-colors rounded-none"
          >
            Start a Conversation
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-10 h-10 border border-stone-300 text-stone-900 hover:border-stone-900 transition-colors p-2 cursor-pointer"
          >
            {isMobileOpen ? (
              <svg
                className="w-5 h-5 text-stone-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="flex flex-col justify-center items-center gap-1">
                <span className="w-5 h-0.5 bg-stone-900" />
                <span className="w-5 h-0.5 bg-stone-900" />
                <span className="w-5 h-0.5 bg-stone-900" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Smooth Animated Drop-Down Mobile Navigation Menu */}
      <div
        style={{ height: "calc(100dvh - 100%)" }}
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-stone-50 border-t border-stone-200 shadow-2xl z-50 overflow-y-auto flex flex-col justify-between transition-all duration-300 ease-out",
          isMobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-3 pointer-events-none invisible"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col justify-between flex-1 min-h-0">
          {/* Unnumbered Pure Text Links */}
          <nav className="flex flex-col gap-2 py-4">
            <a
              href="#hero"
              onClick={handleNavLinkClick}
              className="py-3 text-stone-900 hover:text-amber-800 transition-colors border-b border-stone-200/60 font-serif text-2xl sm:text-3xl font-normal"
            >
              About Me
            </a>

            <a
              href="#innovations"
              onClick={handleNavLinkClick}
              className="py-3 text-stone-900 hover:text-amber-800 transition-colors border-b border-stone-200/60 font-serif text-2xl sm:text-3xl font-normal"
            >
              What I'm Building
            </a>

            <a
              href="#where-next"
              onClick={handleNavLinkClick}
              className="py-3 text-stone-900 hover:text-amber-800 transition-colors border-b border-stone-200/60 font-serif text-2xl sm:text-3xl font-normal"
            >
              Where To Go Next
            </a>

            <a
              href="#contact"
              onClick={handleNavLinkClick}
              className="py-3 text-stone-900 hover:text-amber-800 transition-colors border-b border-stone-200/60 font-serif text-2xl sm:text-3xl font-normal"
            >
              Work With Me
            </a>
          </nav>

          {/* Bottom Action Area: Button pinned to bottom, shrinks gracefully */}
          <div className="pt-6 pb-6 shrink-0 mt-auto flex flex-col gap-3">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="w-full inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase p-4 bg-amber-700 border border-amber-700 text-white hover:bg-amber-800 hover:border-amber-800 transition-colors rounded-none cursor-pointer"
            >
              <span>Start a Conversation</span>
              <span>&rarr;</span>
            </a>

            <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
              <span>Lagos &bull; Abuja &bull; Global</span>
              <a
                href="mailto:collaborate@crystalkizor.com"
                className="hover:text-amber-800 transition-colors"
              >
                collaborate@crystalkizor.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
