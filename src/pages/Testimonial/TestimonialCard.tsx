import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  image: StaticImageData | string;
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({
  image,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="w-full max-w-4xl p-10 rounded-3xl bg-neutral-500 border border-transparent bg-clip-padding relative overflow-hidden z-2 hover:bg-neutral-400/50">
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={72}
            height={72}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h3 className="text-neutral-100 text-md font-semibold">{name}</h3>
          <p className="text-neutral-200 text-base">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-8 text-neutral-200 text-md leading-relaxed font-light">
        “{quote}”
      </p>
    </div>
  );
}
