"use client";

import React, { useState, useEffect } from "react";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const headerVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleScroll = () => {
    const sections = ["home", "skills", "projects", "experiences", "about"];
    const headerOffset = 35;
    const scrollPosition = window.scrollY + headerOffset;
    
    // Find the section closest to the current scroll position
    let currentSection = sections[0];
    let minDistance = Infinity;
  
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const distance = Math.abs(section.offsetTop - scrollPosition);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = sectionId;
        }
      }
    });
  
    setActiveSection(currentSection);
  };

  // const throttledHandleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const headerOffset = 35; // Adjust this value based on your header height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

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
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      >
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
    </motion.header>
  );
}
