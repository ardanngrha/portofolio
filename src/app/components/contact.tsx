"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuBookText, LuMail } from "react-icons/lu";
import { SiMedium } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';

export function Contact () {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: "-75px"
  })

  const container = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.1,
        ease: "easeIn",
        staggerDirection: -1
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 50
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
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeIn" 
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={container}
      className="w-full mb-10"
    >
      <motion.h3 
        className="text-center text-xl font-semibold mb-4"
        variants={item}
      >
        Let&apos;s Work Together
      </motion.h3>
      
      <motion.div 
        className="flex gap-4 mt-4 justify-center"
        variants={container}
      >
        <motion.div variants={item}>
          <Link 
            href="https://github.com/ardanngrha" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <FaGithub />
            <p>ardanngrha</p>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="https://linkedin.com/in/ardanngrha" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <FaLinkedin />
            <p>Ardana Nugraha</p>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="https://medium.com/@ardanngrha" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <SiMedium />
            <p>@ardanngrha</p>
          </Link>

        </motion.div>
        
      </motion.div>

      <motion.div 
        className='flex gap-4 mt-1 justify-center'
        variants={container}
      >
        <motion.div variants={item}>
          <Link 
            href="https://drive.google.com/file/d/1IuV5kTvLF6JPZ35USHUVOpCKgLiRf1_o/view?usp=sharing" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuBookText />
            <p>Resume</p>
          </Link>
        </motion.div>
        <motion.div variants={item}>
          <Link
            href="mailto:contact.ardana@gmail.com"
            target="_blank"
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuMail />
            <p>contact.ardana@gmail.com</p>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};