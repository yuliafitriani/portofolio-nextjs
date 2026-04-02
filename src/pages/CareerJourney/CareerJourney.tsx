import CareerCard from "@/pages/CareerJourney/CareerCard";
import { GradientDot } from "@/pages/CareerJourney/GradientDot";

export default function CareerJourney() {
  const careers = [
    {
      title: "Core System Engineer",
      company: "PT Asuransi Takaful Keluarga",
      period: "Sept 2022 - Present",
      responsibilities: [
        "Developed REST APIs integrating digital platform with the core system.",
        "Enhanced functionality by adding new features to existing applications.",
        "Performed bug analysis and implemented permanent fixes.",
        "Created and maintained SSRS reports.",
        "Handled data migration using Pentaho Data Integration (PDI).",
      ],
    },
    {
      title: "IT Programmer",
      company: "PT Yongjin Javasuka Garment",
      period: "Nov 2020 – Aug 2022",
      responsibilities: [
        "Developed Style Library system for centralized design reference management.",
        "Developed Bogor Costing Program to streamline cost estimation.",
        "Developed ETC Target and SMV Target programs to support production planning.",
        "Revamped Sewing Management Program from VB6 to ASP.NET C#.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "PT Jakarta Interactive",
      period: "Nov 2019 – Oct 2020",
      responsibilities: [
        "Maintained company profile website and developed landing page.",
        "Developed REST APIs.",
        "Developed a mobile application for postpartum mother registration.",
        "Developed accounting software including quotation and invoicing modules.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "PT Unggul Mitra Solusi",
      period: "Apr 2018 – May 2019",
      responsibilities: [
        "Supported clients during new Inventory Software installations.",
        "Maintained and enhanced accounting-related reports.",
      ],
    },
    {
      title: "Web Programmer",
      company: "CV KPP Technology Solution",
      period: "Jan 2017 – Mar 2018",
      responsibilities: [
        "Developed HRIS system for tour and travel agents",
        "Developed finance system for Play Group",
      ],
    },
    {
      title: "Junior Programmer",
      company: "PT Intisoft Mitra Sejahtera",
      period: "May 2014 – Dec 2016",
      responsibilities: [
        "Maintenanced Core Banking System especially for BPR.",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden z-40">
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
