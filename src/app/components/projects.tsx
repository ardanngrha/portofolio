"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/app/data/projects";
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px" // Adjust this to control when animation triggers
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
    <motion.section id="projects" className="w-full py-8"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}>
      <h3 className="text-center text-2xl font-semibold mb-4">Featured Works - Turning Ideas Real</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="transition-transform duration-200 hover:scale-105 cursor-pointer active:scale-95">
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover rounded" 
                    priority={false}  
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-1">{project.title}</CardTitle>
                <CardDescription>
                  {project.description.length > 40 
                    ? `${project.description.substring(0, 40)}...` 
                    : project.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}