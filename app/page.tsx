"use client";

import ZoomParallax from "@/components/home/zoom-parallax";
import Text from "@/components/home/opacity-text";
import Lenis from "@studio-freight/lenis";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import HeroSection from "@/components/home/hero";

export default function Home() {
  const Earth = dynamic(() => import('@/components/home/earth'), {
    ssr: false,
  })

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
  
  return (
    <main className="min-h-screen w-full flex flex-col items-start px-5 pt-20">
      <HeroSection />
      <section className="h-screen w-full flex items-center justify-center relative">
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="absolute left-20 top-72">Development</p>
            <Text />
          </div>
          <div className="w-1/2 h-full">
              <Earth />
          </div>
        </div>
      </section>
      <ZoomParallax />
      <div className="h-screen" />
    </main>
  );
}