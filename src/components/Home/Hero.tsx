import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Harshini.T</span><br />
            <span className="text-3xl md:text-4xl">Full-Stack Developer</span>
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">I am a versatile software engineer skilled in both front-end and back-end development, capable of building complete web applications. I create modern and responsive web experiences that leave a lasting impression. Specializing in clean, elegant UI design and powerful functionality.</p>
          
          <div className="flex space-x-4">
            <Link to="/portfolio" className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center hover:bg-primary/90 transition-colors">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="border border-primary text-foreground px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 animate-pulse absolute -top-6 -left-6 z-0"></div>
            <img alt="Thirunahari Harshini" src="/lovable-uploads/5639f4ee-de41-4744-8012-63cbb2721435.jpg" className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-background z-10 relative object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;