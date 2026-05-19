"use client";

import HorizontalScroll from "@/components/animations/HorizontalScroll";
import Hero from "@/components/sections/Hero";
import ProjectsPage1 from "@/components/sections/ProjectsPage1";
import ProjectsPage2 from "@/components/sections/ProjectsPage2";
import ReverieCase from "@/components/sections/ReverieCase";
import AboutIntro from "@/components/sections/AboutIntro";
import AboutTimeline from "@/components/sections/AboutTimeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <HorizontalScroll>
      <div className="h-section">
        <Hero />
      </div>
      <div className="h-section">
        <ProjectsPage1 />
      </div>
      <div className="h-section">
        <ProjectsPage2 />
      </div>
      <div className="h-section">
        <ReverieCase />
      </div>
      <div className="h-section">
        <AboutIntro />
      </div>
      <div className="h-section">
        <AboutTimeline />
      </div>
      <div className="h-section">
        <Contact />
      </div>
    </HorizontalScroll>
  );
}
