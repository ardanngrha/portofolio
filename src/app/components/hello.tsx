import { LuGithub, LuLinkedin, LuBookText } from "react-icons/lu";

export default function Hello() {
  return (
    <section id="home" className="h-screen flex items-center justify-center -mt-16 sm:-mt-20">
      <div className="w-full">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi! 👋</h1>
          <h2 className="text-2xl sm:text-3xl mb-2">You can call me Ardan!</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I am a Software Engineer based in Indonesia.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I work with Javascript and Python to build applications.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
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