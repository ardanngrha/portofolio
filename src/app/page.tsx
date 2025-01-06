import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import Header from "./components/header";
import Hello from "./components/hello";
import Projects from "./components/projects";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-10 gap-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start max-w-2xl w-full">
        
        <Hello />
        <Projects />
        <Experiences />
        <Skills />
        <About />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}
