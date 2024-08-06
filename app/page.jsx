"use client"

import { useEffect, useRef } from "react";
import Services from "@/components/services";
import Hero from "@/components/hero";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Observer, ScrollToPlugin);

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;
    let currentSectionIndex = 0;

    const goToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
      currentSectionIndex = index;
      gsap.to(window, { scrollTo: { y: sections[index], autoKill: false }, duration: 2, ease: "power3" });
    };

    const next = () => {
      if (currentSectionIndex < sections.length - 1) {
        goToSection(currentSectionIndex + 1);
      }
    };

    const previous = () => {
      if (currentSectionIndex > 0) {
        goToSection(currentSectionIndex - 1);
      }
    };

    Observer.create({
      target: window,
      type: "wheel,touch",
      onDown: next,
      onUp: previous,
      tolerance: 10,
      preventDefault: true,
    });
  }, []);

  return (
    <main className="w-full">
      <section ref={(el) => (sectionsRef.current[0] = el)}>
        <Hero />
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <Services />
      </section>
    </main>
  );
}