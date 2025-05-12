
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement."
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Building responsive, fast, and functional websites and web applications using modern technologies."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Improving website visibility and ranking on search engines to drive organic traffic."
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide a range of services to help businesses establish a strong
            online presence and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn more about my services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
