
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 inline-block">
            Full-Stack Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Harshini.T</span><br />
            <span className="text-3xl md:text-4xl">Creating digital experiences</span>
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            I build modern, responsive web applications with clean code and exceptional
            user experiences that help businesses achieve their goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/portfolio" className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="border border-primary text-foreground px-6 py-3 rounded-md hover:bg-primary/10 transition-colors flex items-center justify-center">
              Let's Collaborate
            </Link>
          </div>
          
          <div className="flex items-center mt-12">
            <div className="h-1 w-12 bg-primary rounded-full mr-4"></div>
            <p className="text-sm text-muted-foreground">Available for freelance projects</p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/50 to-primary/10 absolute -top-6 -left-6 animate-pulse"></div>
            <img 
              alt="Thirunahari Harshini" 
              src="/lovable-uploads/5639f4ee-de41-4744-8012-63cbb2721435.jpg" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-background z-10 relative object-cover shadow-lg" 
            />
            <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-4 shadow-lg">
              <div className="bg-gradient-to-br from-primary to-primary/70 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
