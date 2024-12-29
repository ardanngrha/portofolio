import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export const projectData = [
  {
    id: 1,
    title: "Project 1",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Short description of project 1",
    href: "/projects/project1"
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Short description of project 2",
    href: "/projects/project2"
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a very long description that should be truncated because it exceeds the 100 character limit we set for the project",
    href: "/projects/project3"
  },
  {
    id: 4,
    title: "Project 4",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Another interesting project description",
    href: "/projects/project4"
  },
  {
    id: 5,
    title: "Project 5",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Description for the fifth project with some extra details to show truncation in action",
    href: "/projects/project5"
  },
  {
    id: 6,
    title: "Project 6",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The last project description",
    href: "/projects/project6"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-8">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="transition-transform duration-200 hover:scale-105 cursor-pointer active:scale-95">
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                  <img src={project.image} alt={project.title} className="object-cover rounded" />
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {project.description.length > 40 
                    ? `${project.description.substring(0, 40)}...` 
                    : project.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}