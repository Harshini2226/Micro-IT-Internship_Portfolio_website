import React from "react";
import { Card, CardContent } from "@/components/ui/card";
interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}
const testimonials: Testimonial[] = [{
  quote: "Harshini is an exceptional developer who delivered a stunning website that perfectly captured our brand identity. Highly recommended!",
  name: "Alex Johnson",
  position: "CEO",
  company: "TechSolutions Inc."
}, {
  quote: "Working with Harshini was a pleasure. She understood our requirements perfectly and exceeded our expectations with her creativity and technical expertise.",
  name: "Sarah Chen",
  position: "Marketing Director",
  company: "CreativeMinds Agency"
}, {
  quote: "Harshini's attention to detail and commitment to quality is impressive. Our e-commerce site has seen a 40% increase in conversions since the redesign.",
  name: "Michael Rodriguez",
  position: "Founder",
  company: "StyleHouse Boutique"
}];
const TestimonialsPreview = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsPreview;