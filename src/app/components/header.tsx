"use client";

import React, { useState, useEffect } from "react";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { throttle } from "lodash";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "skills", "projects", "experiences", "about"];
    const headerOffset = 30; // Same as above
    const scrollPosition = window.scrollY + headerOffset;
  
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  const throttledHandleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [throttledHandleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 30; // Adjust this value based on your header height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: "smooth"
      // });

      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
    <div className="flex items-center w-full max-w-6xl px-4 py-4 mx-auto justify-center">
      <Menubar>
        <a
          className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${activeSection === "home" ? "font-bold" : ""}`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${activeSection === "projects" ? "font-bold" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>
        <a
          className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${activeSection === "experiences" ? "font-bold" : ""}`}
          onClick={() => scrollToSection("experiences")}
        >
          Experiences
        </a>
        <a
          className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${activeSection === "skills" ? "font-bold" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${activeSection === "about" ? "font-bold" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
      </Menubar>
      <ModeToggle />
    </div>
    </header>
  );
}
