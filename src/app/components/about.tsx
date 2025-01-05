"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuGithub, LuLinkedin, LuBookText, LuMail } from "react-icons/lu";

export function About() {

  const pictures = [
    "/bni.jpg",
    "/gojek.jpg",
    "/grita.jpg",
    "/seic2.jpg",
  ];

  return (
    <section id="about" className="w-full py-8">
      <h3 className="text-center text-2xl font-semibold mb-4">About Me</h3>
      
      {/* Photo Gallery */}
      <div className="relative grid grid-cols-2 gap-4 mb-8 h-[300px]">
        {pictures.map((pic, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image 
              src={pic} 
              width={300}
              height={300}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

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