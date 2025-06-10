"use client";

import { experienceData } from "@/app/data/experiences";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { IconType } from 'react-icons';
import { SiTensorflow, SiMongodb, SiJavascript, SiFastapi, SiGooglecloud, SiFirebase, SiDocker, SiVite, SiPostgresql, SiRedis, SiHtml5, SiCss3, SiJquery, SiBootstrap } from "react-icons/si";

// Update TechStack type
type TechStack = 'react' | 'mongodb' | 'nextjs' | 'python' | 'tensorflow' | 'javascript' | 'fastapi' | 'gcp' | 'firebase' | 'docker' | 'vite' | 'postgres' | 'redis' | 'html' | 'css' | 'jquery' | 'bootstrap';

// Update techIcons mapping
const techIcons: Record<TechStack, IconType> = {
  react: FaReact,
  mongodb: SiMongodb,
  nextjs: RiNextjsFill,
  python: FaPython,
  tensorflow: SiTensorflow,
  javascript: SiJavascript,
  fastapi: SiFastapi,
  gcp: SiGooglecloud,
  firebase: SiFirebase,
  docker: SiDocker,
  vite: SiVite,
  postgres: SiPostgresql,
  redis: SiRedis,
  html: SiHtml5,
  css: SiCss3,
  jquery: SiJquery,
  bootstrap: SiBootstrap,
};

export function Experiences() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  })

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -75, // Changed from y: 75
    },
    visible: {
      opacity: 1,
      x: 0, // Changed from y: 0
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 75, // Changed from y: -75
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section id="experiences" className="w-full py-8"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={sectionVariants}>
      <h3 className="text-center text-2xl font-semibold mb-6">Journey - Career Path</h3>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <h4 className="font-semibold">{experience.emoji} {experience.company}</h4>
            <p className="text-muted-foreground text-sm">
              {experience.title} | {experience.period}
            </p>
            {/* <ul className="mt-2 text-sm space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>• {responsibility}</li>
              ))}
            </ul> */}
            <div className="flex gap-2 justify-start mt-3">
              <p className="text-sm">Tech Stack: </p> {experience.techStack?.map((tech, index) => {
                const IconComponent = techIcons[tech.toLowerCase() as TechStack];
                return IconComponent && (
                  <div key={index} className="relative group">
                    <IconComponent
                      className="w-4 h-4"
                    />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 p-2 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}