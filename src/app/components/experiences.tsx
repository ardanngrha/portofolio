import { experienceData } from "@/app/data/experiences";

export function Experiences() {
  return (
    <section id="experiences" className="w-full py-8">
      <h3 className="text-center text-2xl font-semibold mb-6">Experiences</h3>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <h4 className="font-semibold">{experience.title}</h4>
            <p className="text-muted-foreground text-sm">
              {experience.company} | {experience.period}
            </p>
            <ul className="mt-2 text-sm space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>• {responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}