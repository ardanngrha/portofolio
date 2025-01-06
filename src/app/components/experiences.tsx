"use client";

import { experienceData } from "@/app/data/experiences";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export function Experiences() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  })

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 75
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -75,
      transition: {
        duration: 0.5,
        ease: "easeIn" 
      }
    }
  }

  return (
    <motion.section id="experiences" className="w-full py-8"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={sectionVariants}>
      <h3 className="text-center text-2xl font-semibold mb-6">Experiences</h3>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <h4 className="font-semibold">{experience.emoji} {experience.company}</h4>
            <p className="text-muted-foreground text-sm">
              {experience.title} | {experience.period}
            </p>
            <ul className="mt-2 text-sm space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>• {responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}