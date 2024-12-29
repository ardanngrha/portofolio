import { About } from "./components/about";
import { Experiences } from "./components/experiences";
import Header from "./components/header";
import Hello from "./components/hello";
import Projects from "./components/projects";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">

      <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center ">
        <Header />
      </header>
      
      <main className="flex flex-col row-start-2 items-center sm:items-start max-w-2xl w-full">
        
        <Hello />
        <Skills />
        <Projects />
        <Experiences />
        <About />
        
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ardan Nugraha
      </footer>
    </div>
  );
}
