import TestimonialCard from "./TestimonialCard";
import ProfileImage1 from "@/assets/profile-1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialSection() {
  return (
    <section className="relative">
      <div className="container max-w-290 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What People Say About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from clients and colleagues about their experiences working
            with me.
          </p>
        </div>
      </div>
      <div className="w-full px-20 mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={ProfileImage1}
                name="Rafel Struick"
                role="CEO"
                quote="Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={ProfileImage1}
                name="Rafel Struick"
                role="CEO"
                quote="Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={ProfileImage1}
                name="Rafel Struick"
                role="CEO"
                quote="Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success."
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={ProfileImage1}
                name="Rafel Struick"
                role="CEO"
                quote="Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success."
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
