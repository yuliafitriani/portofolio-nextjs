import { Buliding, Calendar } from "iconsax-reactjs";

interface CareerCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export default function CareerCard({
  title,
  company,
  period,
  responsibilities,
}: CareerCardProps) {
  return (
    <div className="bg-neutral-500 w-full mx-auto p-6 rounded-xl flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-200">
        <Buliding size={20} variant="Linear" />
        <span>{company}</span>

        <span className="h-1 w-1 rounded-full bg-white mx-1" />

        <Calendar size={20} variant="Linear" />
        <span>{period}</span>
      </div>

      <ul className="list-disc pl-5 space-y-2 text-neutral-200 text-sm leading-relaxed">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
