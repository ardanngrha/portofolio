import Header from "./components/header";
import Hello from "./components/hello";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">

      <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center ">
        <Header />
      </header>
      
      <main className="flex flex-col row-start-2 items-center sm:items-start max-w-2xl w-full">
        <section id="home" className="h-screen flex items-center justify-center -mt-16 sm:-mt-20">
          <Hello />
        </section>

        <section id="skills" className="w-full py-8">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">Node.js</span>
          </div>
        </section>
        
        <section id="projects" className="w-full py-8">
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
        </section>

        <section id="experiences" className="w-full py-8">
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
        </section>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ardan Nugraha
      </footer>
    </div>
  );
}
