import PortfolioCard from "./PortofolioCard";
import Project1 from "@/assets/project-1.png";
import Project2 from "@/assets/project-2.png";
import Project3 from "@/assets/project-3.png";

const Projects = [
  {
    image: Project1,
    title: "Movie App",
    description:
      "A movie app that allows users to search for movies, view details, and manage their watchlist.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://movie-app-silk-mu-13.vercel.app",
  },
  {
    image: Project2,
    title: "Book App",
    description:
      "Simple book app that allows users to search for books, view details, and manage their reading list.",
    tech: ["React", "Next.js", "CSS"],
    link: "https://book-app-theta-navy.vercel.app",
  },
  {
    image: Project3,
    title: "Social Media App",
    description:
      "A social media app that allows users to create posts, follow friends, and engage with content.",
    tech: ["React", "Next.js", "CSS"],
    link: "https://social-media-app-sooty-ten.vercel.app",
  },
];

export default function PortofolioSection() {
  return (
    <section className="relative">
      <div className="container max-w-290 mx-auto px-6">
        {/* Header */}
        <div className="mb-14 space-y-4 flex flex-col lg:flex-row justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-left w-full">
            Project with Next.js
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg lg:text-right text-left w-full">
            I have experience developing 3+ web projects across various
            industries.
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
