import RoundedCard from "@/pages/About/RoundedCard";
import RoundedCardBordered from "@/pages/About/RoundedCardBordered";

export default function AboutSection() {
  return (
    <section
      className="relative lg:-mt-40
        -mt-35 overflow-hidden z-40"
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
            Hi, I{"'"}m Yulia, a passionate full-stack developer with{" "}
            <b className="text-white">11+ years of experiences</b> of with cross
            industry experiences, focused on building end-to-end applications
            that are scalable, secure, and maintainable. Experienced in working
            with modern technologies and real-world business complexity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8 lg:grid-cols-4 md:grid-cols-4">
          <RoundedCardBordered value="11+" label="Years Experiences" />
          <RoundedCard value="13+" label="Completed Projects" />
          <RoundedCardBordered value="3+" label="Completed Courses" />
          <RoundedCard value="6+" label="Companies Worked With" />
        </div>
      </div>
    </section>
  );
}
