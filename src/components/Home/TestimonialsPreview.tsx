
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I had worked on Trusted crowdfunding using Blockchain Technology. This project aimed to create a transparent and secure platform for fundraising using blockchain technology.",
    name: "Blockchain Project",
    position: "Lead Developer",
    company: "2023"
  },
  {
    quote: "I had worked on the project of Bank Churns Customer Model. This project involved developing predictive models to identify customers likely to leave banking services.",
    name: "Data Science Project",
    position: "Data Analyst",
    company: "2022"
  },
  {
    quote: "I had gone through Planet-Rescue-Agency own website development. This project focused on creating an engaging website for an environmental conservation organization.",
    name: "Web Development",
    position: "Frontend Developer",
    company: "2021"
  }
];

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects I worked on</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take my word for it. Here's what my projects I have gone through to improve my skills in various aspects and new technologies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
