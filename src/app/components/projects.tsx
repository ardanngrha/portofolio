"use client";

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/app/data/projects";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IconType } from 'react-icons';

// Define valid tech stack options
type TechStack = 'react' | 'mongodb' | 'nextjs';

// Type for the tech icons mapping
const techIcons: Record<TechStack, IconType> = {
  react: FaReact,
  mongodb: SiMongodb,
  nextjs: RiNextjsFill,
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px"
  });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: 75,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -75,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section id="projects" className="w-full py-8"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}>
      <h3 className="text-center text-2xl font-semibold mb-8">Featured Works - Turning Ideas Real</h3>
      <div className="flex flex-col gap-3">
        {projectData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="transition-transform duration-200 hover:scale-105 cursor-pointer active:scale-95">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 p-3">
                  <div className="relative h-48 md:h-40 rounded-md overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover" 
                      priority={false}  
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/5 p-3 md:p-4 flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  
                    <div className="flex gap-2 justify-end mt-3">
                    {project.techStack?.map((tech, index) => {
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
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}