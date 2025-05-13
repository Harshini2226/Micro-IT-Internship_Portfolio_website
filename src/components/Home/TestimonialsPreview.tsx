
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Harshini is an exceptional developer who delivered a stunning website that perfectly captured our brand identity. Highly recommended!",
    name: "Alex Johnson",
    position: "CEO",
    company: "TechSolutions Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  }, 
  {
    quote: "Working with Harshini was a pleasure. She understood our requirements perfectly and exceeded our expectations with her creativity and technical expertise.",
    name: "Sarah Chen",
    position: "Marketing Director",
    company: "CreativeMinds Agency",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
  }, 
  {
    quote: "Harshini's attention to detail and commitment to quality is impressive. Our e-commerce site has seen a 40% increase in conversions since the redesign.",
    name: "Michael Rodriguez",
    position: "Founder",
    company: "StyleHouse Boutique",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
  }
];

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="hover:shadow-lg transition-shadow bg-background border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="text-5xl text-primary mb-4 opacity-50">"</div>
                    <p className="italic mb-8 text-lg">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-primary/30 mr-4">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 lg:-left-12" />
          <CarouselNext className="right-0 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
