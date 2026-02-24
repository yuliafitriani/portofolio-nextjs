import HeroSection from "@/pages/Hero/HeroSection";
import AboutSection from "@/pages/About/AboutSection";
import CareerJourney from "@/pages/CareerJourney";
import SkillSection from "@/pages/Skills";
import FaqSection from "@/pages/Faq";
import ComparisonSection from "@/pages/Comparison";
import PortofolioSection from "@/pages/Portofolio/PortofolioSection";
import TestimonialSection from "@/pages/Testimonial";
import ContactMeSection from "@/pages/ContactMe";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 bg-black pb-16 mx-auto">
      <HeroSection />
      <AboutSection />
      <CareerJourney />
      <SkillSection />
      <FaqSection />
      <ComparisonSection />
      <PortofolioSection />
      <TestimonialSection />
      <ContactMeSection />
    </div>
  );
}
