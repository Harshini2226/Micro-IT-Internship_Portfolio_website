
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
    icon: <Layout className="h-8 w-8 text-white" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement."
  }, 
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Web Development",
    description: "Building responsive, fast, and functional websites and web applications using modern technologies."
  }, 
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "SEO Optimization",
    description: "Improving website visibility and ranking on search engines to drive organic traffic."
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What I Offer</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide a range of services to help businesses establish a strong
            online presence and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-none shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 bg-gradient-to-br from-primary to-primary/70 rounded-full p-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-primary font-medium hover:text-primary/80 group flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">My Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Discovery</h4>
              <p className="text-muted-foreground text-sm">Understanding your requirements and project goals</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-1 bg-primary/20">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Planning</h4>
              <p className="text-muted-foreground text-sm">Creating a detailed roadmap for your project</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-1 bg-primary/20">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Execution</h4>
              <p className="text-muted-foreground text-sm">Development with regular updates and feedback</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-1 bg-primary/20">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-muted-foreground text-sm">Final testing and launching your project</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/services" className="bg-primary text-primary-foreground px-6 py-3 rounded-md inline-flex items-center hover:bg-primary/90 transition-colors">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
