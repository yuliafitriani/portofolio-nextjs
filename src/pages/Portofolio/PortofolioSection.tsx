import PortfolioCard from "./PortofolioCard";
import Project1 from "@/assets/project-1.jpg";
import Project2 from "@/assets/project-2.jpg";
import Project3 from "@/assets/project-3.jpg";
import Project4 from "@/assets/project-4.jpg";
import Project5 from "@/assets/project-5.jpg";
import Project6 from "@/assets/project-6.jpg";

const Projects = [
  {
    image: Project1,
    title: "Landing Page",
    description:
      "THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme Unity in Creativity",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
  {
    image: Project2,
    title: "Landing Page",
    description:
      "Private hospital in the city of Padang that provides special surgical services.",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
  {
    image: Project3,
    title: "Landing Page",
    description:
      "Product engaged in WhatsApp API services and other information technology services.",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
  {
    image: Project4,
    title: "Landing Page",
    description:
      "nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)  of experience as an internet solution provider company.",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
  {
    image: Project5,
    title: "Landing Page",
    description: "UKUR is a constructor and interior marketplace in Indonesia.",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
  {
    image: Project6,
    title: "Landing Page",
    description:
      "Product engaged in WhatsApp API services and other information technology services.",
    tech: ["React", "HTML", "CSS"],
    link: "https://ui.shadcn.com/",
  },
];

export default function PortofolioSection() {
  return (
    <section className="relative">
      <div className="container max-w-290 mx-auto px-6">
        {/* Header */}
        <div className="mb-14 space-y-4 flex flex-col lg:flex-row justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-left w-full">
            Experience in Front-End Development
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg lg:text-right text-left w-full">
            I have experience developing 30+ web projects across various
            industries, including marketplaces, health, fashion, sports, and
            more. Implemented 1000+ responsive web pages with interactive
            features and smooth animations
          </p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Projects.map((project, index) => (
            <PortfolioCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
