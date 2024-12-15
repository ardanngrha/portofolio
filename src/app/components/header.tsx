"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center w-full max-w-6xl px-4 py-4 mx-auto my-0 sm:my-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger 
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() => scrollToSection('home')}>
            Home
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() => scrollToSection('skills')}>Skills</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() => scrollToSection('projects')}>Projects</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() => scrollToSection('experiences')}>Experiences</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
          className="text-xs sm:text-sm px-2 sm:px-3"
          onClick={() => scrollToSection('about')}>About</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <ModeToggle />
    </div>
  );
}