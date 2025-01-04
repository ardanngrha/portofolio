"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuArrowDown } from "react-icons/lu";

export default function Hello() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const headerOffset = 30;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center -mt-16 sm:-mt-20">
      <div className="w-full">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-8">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold">Hi! 👋</h1>
            <h2 className="text-2xl sm:text-3xl">You can call me Ardan!</h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              I am a Software Engineer based in Indonesia.
            </p>
            <p className="text-base sm:text-xl text-muted-foreground">
              I work with Javascript and Python to build applications.
            </p>
          </div>
          <div className="flex justify-center w-full sm:w-auto">
            <Image 
              src="/avatar.png" 
              alt="Ardan's avatar" 
              width={256}
              height={256}
              priority
              className="w-48 h-auto sm:w-64"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="ghost"  onClick={scrollToAbout}>
            Get to know more about me
            <LuArrowDown className="animate-bounce ml-1 mt-1"/>
          </Button>
        </div>
      </div>
    </section>
  )
}