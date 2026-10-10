import type React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export interface AnimationParams {
  y: number;
  duration: number;
  stagger: number;
}

const DEFAULT_PARAMS: AnimationParams = {
  y: 28,
  duration: 0.8,
  stagger: 0.1,
};

/** Coordinates standard scroll-triggered entrance animations using GSAP ScrollTrigger. */
export const useScrollReveal = (
  targetRef: React.RefObject<HTMLElement | null>,
  isIntroFinished: boolean,
  onAnimate: (params: AnimationParams) => void
) => {
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isIntroFinished) {
      return;
    }

    if (hasAnimatedRef.current) {
      return;
    }

    const element = targetRef.current;
    if (!element) {
      return;
    }

    /** Triggers the animation callback once when element enters view. */
    const triggerAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      onAnimate(DEFAULT_PARAMS);
    };

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.88) {
      triggerAnimation();
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 88%",
      once: true,
      onEnter: () => {
        triggerAnimation();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isIntroFinished, targetRef, onAnimate]);

  return { hasAnimated: hasAnimatedRef.current };
};
