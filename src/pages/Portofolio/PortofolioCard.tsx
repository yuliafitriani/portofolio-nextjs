import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import GradientIcon from "./GradientIcon";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function PortfolioCard({
  image,
  title,
  description,
  tech,
  link,
}: Props) {
  return (
    <div className="w-full rounded-2xl flex flex-col gap-6 overflow-hidden">
      {/* Image */}
      <div className="w-full h-92.5 rounded-[32px] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="370px"
        />
      </div>
      {/* Description Section */}
      <div className="w-[370px] h-[230px] flex flex-col justify-between gap-4">
        {/* Title + Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>

          {/* Program Language Badge */}
          <div className="flex flex-wrap gap-2">
            {tech.map((val) => (
              <div
                className="inline-flex items-center justify-center px-6 py-2 border rounded-full text-sm border-neutral-300"
                key={val}
              >
                {val}
              </div>
            ))}
          </div>

          <p className="text-md font-normal text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Tech + Visit */}
          <div className="space-y-2 hover:translate-x-2">
            {/* Visit Link */}
            <a
              href={link}
              target="_blank"
              className="flex items-center gap-2 font-bold text-lg group"
            >
              <span className="bg-linear-to-l from-[#8746EB] to-[#DC49A6] bg-clip-text text-transparent">
                Visit
              </span>

              <GradientIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
