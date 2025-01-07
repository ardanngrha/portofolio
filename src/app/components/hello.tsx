"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuArrowDown } from "react-icons/lu";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Hello() {
  const { theme } = useTheme();
  const [key, setKey] = useState(0); 

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [theme]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const headerOffset = 35;
    
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
    <motion.section
      key={key}  
      id="home" 
      className="h-screen flex items-center justify-center -mt-16 sm:-mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full">
        <motion.div 
          className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-center sm:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Hi! <motion.span
                animate={{ 
                  rotate: [0, 20, -10, 20, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              You can call me Ardan!
            </motion.h2>
            <motion.p 
              className="text-base sm:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              I am a Software Engineer based in Indonesia.
            </motion.p>
            <motion.p 
              className="text-base sm:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              I work with Javascript and Python to build applications.
            </motion.p>
          </div>
          <motion.div 
            className="flex justify-center w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image 
              src="/avatar.png" 
              alt="Ardan's avatar" 
              width={256}
              height={256}
              priority={true}
              loading="eager"
              quality={75}  
              className="w-48 h-auto sm:w-64"
            />
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Button variant="ghost" onClick={scrollToAbout}>
            Get to know more about me
            <LuArrowDown className="animate-bounce ml-1 mt-1"/>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}