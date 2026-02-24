import RoundedCard from "@/pages/About/RoundedCard";
import RoundedCardBordered from "@/pages/About/RoundedCardBordered";

export default function AboutSection() {
  return (
    <section
      className="relative lg:-mt-40
        -mt-35 container overflow-hidden z-40"
    >
      <div className="max-w-290 mx-auto px-6 flex flex-col gap-16">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/j6Ule7GXaRs?autoplay=0&mute=1"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <h1 className="text-5xl font-extrabold w-full">Who am I?</h1>
          <p className="text-neutral-200 text-sm leading-loose">
            Hi, I’m Yulia, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over{" "}
            <b className="text-white">10 years of experience</b>, I specialize
            in crafting interactive, responsive, and user-friendly websites that
            deliver exceptional digital experiences. My expertise spans across
            various industries, including e-commerce, education, and SaaS. I am
            proficient in modern front-end technologies, clean coding practices,
            and performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8 lg:grid-cols-4 md:grid-cols-4">
          <RoundedCardBordered value="10+" label="Years Experience" />
          <RoundedCard value="5+" label="Projects" />
          <RoundedCardBordered value="10+" label="Student" />
          <RoundedCard value="20+" label="Happy Clients" />
        </div>
      </div>
    </section>
  );
}
