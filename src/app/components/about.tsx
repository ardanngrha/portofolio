"use client";

import Image from 'next/image';
import React from 'react';
import { LuGithub, LuLinkedin, LuBookText, LuMail } from "react-icons/lu";

export function About() {

  const pictures = [
    "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section id="about" className="w-full py-8">
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      
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
      <p className="text-muted-foreground text-base leading-relaxed mb-6">
        Outstanding Graduate in Informatics Engineering (GPA: 3.94) from Institut Teknologi PLN with proven
        expertise in both software engineering and machine learning. Currently working as a Software Engineer at
        PLN Icon Plus, developing microservices and backend systems. Distinguished as a Bangkit Academy Best
        Graduate and certified TensorFlow Developer. Demonstrates strong leadership through successful roles as
        Laboratory Coordinator and technical mentor, having guided hundreds of students across various programs.
      </p>

      <h3 className="text-center text-xl font-semibold mb-4">Let&apos;s Work Together</h3>
      <div className="flex gap-4 mt-4 justify-center">
          <a 
            href="https://github.com/ardanngrha" 
            target="_blank" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuBookText />
            <p>Resume</p>
          </a>
          <a 
            href="https://github.com/ardanngrha" 
            target="_blank" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuGithub />
            <p>ardanngrha</p>
          </a>
          <a 
            href="https://linkedin.com/in/ardanngrha" 
            target="_blank" 
            className="hover:opacity-70 inline-flex items-center justify-center gap-1"
          >
            <LuLinkedin />
            <p>Ardana Nugraha</p>
          </a>
        </div>
        <div className='flex gap-4 mt-1 justify-center'>
          <a
              href="mailto:contact.ardana@gmail.com"
              target="_blank"
              className="hover:opacity-70 inline-flex items-center justify-center gap-1"
            >
              <LuMail />
              <p>
                contact.ardana@gmail.com
              </p>
            </a>
        </div>
      {/* Contact */}
      

      {/* Music Player */}
      {/* <iframe 
        height="175" 
        width="100%" 
        title="Media player" 
        src="https://embed.music.apple.com/id/album/timeless/1770380869?i=1770380890&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1770380890&amp;theme=auto" 
        id="embedPlayer" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
        allow="autoplay *; encrypted-media *; clipboard-write" 
        style={{
          border: 0, 
          borderRadius: 12, 
          width: '100%', 
          height: 175, 
          maxWidth: 660, 
          marginTop: 10
        }}
      /> */}
    </section>
  );
}