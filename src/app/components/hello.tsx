import Image from "next/image";
import { LuGithub, LuLinkedin, LuBookText } from "react-icons/lu";

export default function Hello() {
  return (
    <section id="home" className="h-screen flex items-center justify-center -mt-16 sm:-mt-20">
      <div className="w-full">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-8">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold">Hi! 👋</h1>
            <h2 className="text-2xl sm:text-3xl">You can call me Ardan!</h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              I am a Software Engineer based in Indonesia.
            </p>
            <p className="text-base sm:text-xl text-muted-foreground">
              I work with Javascript and Python to build applications.
            </p>
          </div>
          <div className="flex justify-center w-full sm:w-auto">
            <Image 
              src="/avatar.png" 
              alt="Ardan's avatar" 
              width={256}
              height={256}
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover"
            />
          </div>
        </div>

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
      </div>
    </section>
  )
}