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
            loading="lazy"
            alt="Google Developers"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="SEIC"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>

      <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
        Hello Visitor! Ardan here. I&apos;m a software engineer who found my passion in coding during my university years at Institut Teknologi PLN.
        What started as curiosity in a programming class turned into a journey of continuous learning and growth.
        Through dedication and hard work, I graduated with distinction (GPA: 3.94) in Informatics Engineering, but
        what truly excites me is the potential of technology to solve real-world problems.
      </p>

      <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
        My journey has been shaped by meaningful experiences - from mentoring fellow students as a Laboratory
        Coordinator to being recognized as a Bangkit Academy Best Graduate. Currently, I&apos;m contributing to
        Indonesia&apos;s power infrastructure as a Software Engineer at PLN Icon Plus, where I develop microservices
        and backend systems that help manage the nation&apos;s power grid.
      </p>

      <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
        Beyond technical skills, I believe in the power of knowledge sharing. I&apos;ve had the privilege of guiding
        hundreds of students as a technical mentor across various programs, learning as much from them as they
        have from me. As a certified TensorFlow Developer, I&apos;m particularly passionate about the intersection of
        software engineering and machine learning, always exploring new ways to combine these fields to create
        impactful solutions.
      </p>
    </motion.section>
  );
}