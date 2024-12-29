'use client';
import { useParams, useRouter } from 'next/navigation';
import { projectData } from '../../components/projects';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Image from 'next/image';

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const project = projectData.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => router.back()} className="flex items-center gap-2 px-2 py-1">
          <AiOutlineArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold">{project.title}</h2>
      </div>
      <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover rounded mb-4" priority />
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
