"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function About() {
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

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section id="about" className="w-full py-8"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={sectionVariants}>
      <h3 className="text-center text-2xl font-semibold mb-4">Behind The Code - My Story</h3>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 auto-rows-[130px] gap-4 mb-8"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Column 1 */}
        <motion.div
          className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/google.jpg"
            fill
            alt="Google Developers"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/bangkit.png"
            fill
            alt="Bangkit Academy"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/bni.jpg"
            fill
            alt="BNI"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/gdsc.jpg"
            fill
            alt="Google Developer Student Clubs"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/gdsc2.jpg"
            fill
            alt="GDSC Event"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/gojek.jpg"
            fill
            alt="Gojek"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="col-span-2 md:col-span-1 row-span-2 relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/pln.jpg"
            fill
            alt="PLN"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/grita.jpg"
            fill
            alt="Grita"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-lg"
          variants={itemVariants}
        >
          <Image 
            src="/seic.jpg"
            fill
            alt="SEIC"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>

      {/* About Text */}
      <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
        Outstanding Graduate in Informatics Engineering (GPA: 3.94) from Institut Teknologi PLN with proven
        expertise in both software engineering and machine learning. Currently working as a Software Engineer at
        PLN Icon Plus, developing microservices and backend systems. Distinguished as a Bangkit Academy Best
        Graduate and certified TensorFlow Developer. Demonstrates strong leadership through successful roles as
        Laboratory Coordinator and technical mentor, having guided hundreds of students across various programs.
      </p>
    </motion.section>
  );
}