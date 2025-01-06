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
    const sections = ["home", "projects", "experiences", "skills", "about"];
    const headerOffset = 35;
    const scrollPosition = window.scrollY + headerOffset;
    
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = async (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setActiveSection(sectionId);

    const headerOffset = 35;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    await window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    history.pushState(null, '', `#${sectionId}`);
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
        {["home", "projects", "experiences", "skills", "about"].map((section) => (
          <motion.a
            key={section}
            onClick={() => scrollToSection(section)}
            className={`cursor-pointer text-xs sm:text-sm px-1 sm:px-3 ${
              activeSection === section ? "font-bold" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.a>
        ))}
        </Menubar>
        <ModeToggle />
      </div>
    </motion.header>
  );
}
