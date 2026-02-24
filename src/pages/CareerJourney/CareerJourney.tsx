import CareerCard from "./CareerCard";
import { GradientDot } from "./GradientDot";

export default function CareerJourney() {
  const careers = [
    {
      title: "Frontend Developer",
      company: "Google",
      period: "Jul 2024 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications, improving load times by 30% through performance optimization.",
        "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Google",
      period: "Jul 2024 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications.",
        "Built scalable UI components.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Google",
      period: "Jul 2024 - Present",
      responsibilities: [
        "Improved performance and accessibility.",
        "Collaborated with product and design teams.",
      ],
    },
  ];

  return (
    <section className="relative container overflow-hidden z-40">
      <div className="max-w-290 mx-auto px-6">
        <div className="w-full mx-auto items-center text-center my-10 flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold">Career Journey</h1>
          <p className="text-neutral-200 text-md">
            A visual timeline of key milestones and experiences from over the
            years.
          </p>
        </div>
        {/* Timeline Wrapper */}
        <div className="relative flex flex-col gap-16">
          {/* Vertical Line (Behind Everything) */}
          <div
            className="
            absolute left-5.25 top-0 bottom-0
            w-[2px]
            bg-gradient-to-b from-[#8746EB] to-[#DC49A6]
            z-0
          "
          />

          {careers.map((career, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-[10px] top-0 z-10">
                <GradientDot />
              </div>

              {/* Card */}
              <CareerCard {...career} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
