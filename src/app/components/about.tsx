"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuGithub, LuLinkedin, LuBookText, LuMail } from "react-icons/lu";
import { motion } from 'framer-motion';

export function About() {

  const pictures = [
    { src: "/bni.jpg", aspectRatio: "aspect-[3/4]" },
    { src: "/gojek.jpg", aspectRatio: "aspect-[4/3]" },
    { src: "/grita.jpg", aspectRatio: "aspect-[16/9]" },
    { src: "/seic2.jpg", aspectRatio: "aspect-[16/9]" },
  ];

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
    <section id="about" className="w-full py-8">
      <h3 className="text-center text-2xl font-semibold mb-4">About Me</h3>
      
      {/* Photo Gallery */}
      <motion.div 
        className="grid grid-cols-2 gap-4 mb-8"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {pictures.map((pic, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg ${pic.aspectRatio}`}
            variants={itemVariants}
          >
            <Image 
              src={pic.src}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* About Text */}
      <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
        Outstanding Graduate in Informatics Engineering (GPA: 3.94) from Institut Teknologi PLN with proven
        expertise in both software engineering and machine learning. Currently working as a Software Engineer at
        PLN Icon Plus, developing microservices and backend systems. Distinguished as a Bangkit Academy Best
        Graduate and certified TensorFlow Developer. Demonstrates strong leadership through successful roles as
        Laboratory Coordinator and technical mentor, having guided hundreds of students across various programs.
      </p>

      <h3 className="text-center text-xl font-semibold mb-4">Let&apos;s Work Together</h3>
      <div className="flex gap-4 mt-4 justify-center">
          <Link 
            href="https://drive.google.com/file/d/1IuV5kTvLF6JPZ35USHUVOpCKgLiRf1_o/view?usp=sharing" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuBookText />
            <p>Resume</p>
          </Link>
          <Link 
            href="https://github.com/ardanngrha" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuGithub />
            <p>ardanngrha</p>
          </Link>
          <Link
            href="https://linkedin.com/in/ardanngrha" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuLinkedin />
            <p>Ardana Nugraha</p>
          </Link>
        </div>
        <div className='flex gap-4 mt-1 justify-center'>
          <Link
              href="mailto:contact.ardana@gmail.com"
              target="_blank"
              className="hover:opacity-70 inline-flex items-center justify-center gap-1"
            >
              <LuMail />
              <p>
                contact.ardana@gmail.com
              </p>
            </Link>
        </div>
      {/* Contact */}
      
    </section>
  );
}