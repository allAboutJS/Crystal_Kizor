import type React from "react";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import type { InquiryFormData } from "@/utils/types";
import {
  type AnimationParams,
  useScrollReveal,
} from "@/utils/useScrollReveal";

interface ContactProps {
  selectedIntent: string;
  onIntentChange: (intent: string) => void;
  selectRef: React.RefObject<HTMLSelectElement | null>;
  isIntroFinished: boolean;
}

/** Renders the contact and direct collaboration section. */
export const Contact: React.FC<ContactProps> = ({
  selectedIntent,
  onIntentChange,
  selectRef,
  isIntroFinished,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    intent: selectedIntent || "",
    name: "",
    email: "",
    message: "",
  });
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  /** Animates contact studio details and form card into view. */
  const handleAnimate = (params: AnimationParams) => {
    const tl = gsap.timeline();

    if (leftColRef.current) {
      tl.fromTo(
        leftColRef.current,
        { opacity: 0, y: params.y },
        { opacity: 1, y: 0, duration: params.duration, ease: "power2.out" },
      );
    }

    if (rightColRef.current) {
      tl.fromTo(
        rightColRef.current,
        { opacity: 0, y: params.y },
        { opacity: 1, y: 0, duration: params.duration, ease: "power2.out" },
        "-=0.4",
      );
    }
  };

  useScrollReveal(sectionRef, isIntroFinished, handleAnimate);

  /** Updates form field state on user input. */
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "intent") {
      onIntentChange(value);
    }
  };

  /** Handles form submission and presents confirmation feedback. */
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmittedName(formData.name);
    setFormData({
      intent: "",
      name: "",
      email: "",
      message: "",
    });
  };

  /** Resets the form to allow sending an additional message. */
  const handleResetForm = () => {
    setSubmittedName(null);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-neutral-900 text-stone-100 border-b border-neutral-800"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Studio Details */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col opacity-0">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 mb-3 block">
            Get In Touch
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-100 leading-tight mb-6">
            Let’s craft something purposeful together.
          </h2>

          <p className="font-sans text-base leading-relaxed text-stone-400 mb-10">
            Whether you want to commission my studio for an architectural
            project, invite me to speak, join my learning platform, or partner
            on social impact, share your thoughts below.
          </p>

          <div className="border-t border-neutral-800 pt-8 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-stone-400 block mb-1">
                Direct Studio Email
              </span>
              <a
                href="mailto:collaborate@crystalkizor.com"
                className="text-base text-stone-100 hover:text-amber-600 transition-colors font-medium"
              >
                collaborate@crystalkizor.com
              </a>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-stone-400 block mb-1">
                Studio Locations
              </span>
              <span className="text-base text-stone-100 font-medium">
                Lagos / Port Harcourt / Abuja, Nigeria
              </span>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-stone-400 block mb-1">
                Working Hours
              </span>
              <span className="text-base text-stone-100 font-medium">
                Mon &ndash; Fri: 9:00 AM &ndash; 6:00 PM WAT
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Sharp Contact Form */}
        <div
          ref={rightColRef}
          className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 sm:p-12 opacity-0"
        >
          {submittedName ? (
            <div className="border border-amber-800 bg-amber-950/20 p-6 text-stone-100">
              <h4 className="font-serif text-2xl font-semibold mb-2">
                Thank you, {submittedName}!
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                Your message has been received. I will review your note and
                respond within 1&ndash;2 business days.
              </p>
              <button
                type="button"
                onClick={handleResetForm}
                className="mt-4 text-xs tracking-wider uppercase underline text-amber-600 cursor-pointer"
              >
                Send another message &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="intent"
                  className="text-xs font-semibold tracking-wider uppercase text-stone-300"
                >
                  How would you like to work together?
                </label>
                <select
                  ref={selectRef}
                  id="intent"
                  name="intent"
                  value={selectedIntent || formData.intent}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 text-stone-100 text-sm p-4 outline-none focus:border-amber-600 transition-colors rounded-none"
                >
                  <option value="" disabled>
                    Select an initiative or next step
                  </option>
                  <option value="Studio COKA - Architecture & Interiors">
                    Studio COKA — Architecture, Interior Design & Construction
                  </option>
                  <option value="ELEvated - Furniture & Product Design">
                    ELEvated — Furniture & Product Design
                  </option>
                  <option value="The Effective Architect (TEA) - Learning & Media">
                    The Effective Architect (TEA) — Career Growth & Media
                  </option>
                  <option value="Speaking Engagement & Keynotes">
                    Speaking Engagement — Keynotes, Panels & Lectures
                  </option>
                  <option value="Youth Impact & Social Alliance">
                    AKO Alliance & Alive and Free — Partnerships & Impact
                  </option>
                  <option value="General Inquiry">
                    General Inquiry / Personal Brand Collaboration
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-wider uppercase text-stone-300"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Adebayo Okonjo"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 text-stone-100 text-sm p-4 outline-none focus:border-amber-600 transition-colors rounded-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-wider uppercase text-stone-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 text-stone-100 text-sm p-4 outline-none focus:border-amber-600 transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-wider uppercase text-stone-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, location, or goals..."
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 text-stone-100 text-sm p-4 outline-none focus:border-amber-600 transition-colors rounded-none resize-none"
                />
              </div>

              {/* Submit Button with Lighter Default State, No Glow, Darker Hover */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase p-4 bg-amber-700 border border-amber-700 text-white hover:bg-amber-800 hover:border-amber-800 transition-colors rounded-none cursor-pointer"
              >
                <span>Send Message To My Studio</span>
                <span>&rarr;</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
