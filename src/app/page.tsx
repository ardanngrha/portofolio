import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0">
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl w-full">
        <div id="home" className="text-center sm:text-left w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi! 👋</h1>
          <h2 className="text-2xl sm:text-3xl mb-2">You can call me Ardan!</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I am a Software Engineer based in Indonesia.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I work with Javascript and Python to build applications.
          </p>
        </div>

        <div id="skills" className="w-full mt-8">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Node.js</span>
          </div>
        </div>

        <div id="projects" className="w-full mt-8">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Project 1</h4>
              <p className="text-muted-foreground text-sm">Description of your project</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Project 2</h4>
              <p className="text-muted-foreground text-sm">Description of another project</p>
            </div>
          </div>
        </div>

        <div id="experiences" className="w-full mt-8">
          <h3 className="text-2xl font-semibold mb-4">Experiences</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Software Engineer</h4>
              <p className="text-muted-foreground text-sm">Company Name | 2021 - Present</p>
            </div>
            <div>
              <h4 className="font-semibold">Junior Developer</h4>
              <p className="text-muted-foreground text-sm">Previous Company | 2019 - 2021</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://drive.google.com/file/d/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 flex items-center justify-center"
          >
            Resume
          </a>
          <div className="flex gap-2">
            <a 
              href="https://github.com/ardanngrha" 
              target="_blank" 
              className="hover:opacity-70"
            >
              <Image 
                src="/github-icon.svg" 
                alt="GitHub" 
                width={24} 
                height={24} 
                className="dark:invert"
              />
            </a>
            <a 
              href="https://linkedin.com/in/ardanngrha" 
              target="_blank" 
              className="hover:opacity-70"
            >
              <Image 
                src="/linkedin-icon.svg" 
                alt="LinkedIn" 
                width={24} 
                height={24} 
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ardan Nugraha
      </footer>
    </div>
  );
}
