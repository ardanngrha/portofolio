import React from 'react';
import { FaJs, FaPython, FaJava, FaRust, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaGoogle, FaDocker, FaGit } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiSpring, SiFastapi, SiFlask, SiPostgresql, SiMongodb, SiApachekafka, SiTensorflow } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";

export function Skills() {
  return (
    <section id="skills" className="w-full py-8">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Programming Languages</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaJs className="mr-2" />JavaScript</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiTypescript className="mr-2" />TypeScript</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaPython className="mr-2" />Python</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaJava className="mr-2" />Java</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaRust className="mr-2" />Rust</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Frontend Development</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaReact className="mr-2" />React.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiNextdotjs className="mr-2" />Next.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaHtml5 className="mr-2" />HTML</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Backend Development</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaNodeJs className="mr-2" />Node.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaNodeJs className="mr-2" />Express.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiSpring className="mr-2" />Spring Boot</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiFastapi className="mr-2" />FastAPI</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiFlask className="mr-2" />Flask</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Databases & Message Brokers</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiPostgresql className="mr-2" />PostgreSQL</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiMongodb className="mr-2" />MongoDB</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiApachekafka className="mr-2" />Kafka</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Cloud & DevOps</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaAws className="mr-2" />AWS</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaGoogle className="mr-2" />Google Cloud</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><VscAzure className="mr-2" />Azure</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaDocker className="mr-2" />Docker</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><FaGit className="mr-2" />Git</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Machine Learning</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"><SiTensorflow className="mr-2" />TensorFlow</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground mb-2">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Leadership</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Team Management</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Problem Solving</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Communication</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Public Speaking</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Mentoring</span>
          </div>
        </div>
      </div>
    </section>
  );
}