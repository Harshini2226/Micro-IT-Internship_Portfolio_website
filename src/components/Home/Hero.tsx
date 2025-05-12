
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Harshini</span><br/>
            <span className="text-3xl md:text-4xl">Frontend Developer</span>
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            I create modern and responsive web experiences that leave a lasting impression.
            Specializing in clean, elegant UI design and powerful functionality.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/portfolio" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border border-primary text-foreground px-6 py-3 rounded-md hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 animate-pulse absolute -top-6 -left-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Thirunahari Harshini" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-background z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
