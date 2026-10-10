import { useState, useRef } from "react";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhilosophyStrip } from "@/components/PhilosophyStrip";
import { Innovations } from "@/components/Innovations";
import { WhereNext } from "@/components/WhereNext";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/cn";

/** Main application page composing the landing page sections with synchronized intro and fluid scroll animations. */
const App = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("");
  const selectRef = useRef<HTMLSelectElement>(null);

  /** Marks the intro animation as completed and enables page animations. */
  const handleIntroComplete = () => {
    setIsIntroFinished(true);
  };

  /** Sets the inquiry intent and smoothly scrolls down to the contact section. */
  const handleSelectIntent = (intent: string) => {
    setSelectedIntent(intent);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    if (selectRef.current) {
      setTimeout(() => {
        selectRef.current?.focus();
      }, 500);
    }
  };

  /** Smoothly scrolls down to the contact section. */
  const handleNavigateContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /** Smoothly scrolls down to the innovations section. */
  const handleNavigateInnovations = () => {
    const innovationsSection = document.getElementById("innovations");
    if (innovationsSection) {
      innovationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-50 text-stone-900">
      {!isIntroFinished && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      <div
        className={cn(
          "min-h-screen flex flex-col transition-opacity duration-1000 ease-out",
          isIntroFinished
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <Header onNavigateContact={handleNavigateContact} />

        <main className="grow">
          <Hero
            onNavigateContact={handleNavigateContact}
            onNavigateInnovations={handleNavigateInnovations}
            isIntroFinished={isIntroFinished}
          />
          <PhilosophyStrip
            isIntroFinished={isIntroFinished}
          />
          <Innovations
            onSelectIntent={handleSelectIntent}
            isIntroFinished={isIntroFinished}
          />
          <WhereNext
            onSelectIntent={handleSelectIntent}
            isIntroFinished={isIntroFinished}
          />
          <Contact
            selectedIntent={selectedIntent}
            onIntentChange={setSelectedIntent}
            selectRef={selectRef}
            isIntroFinished={isIntroFinished}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
