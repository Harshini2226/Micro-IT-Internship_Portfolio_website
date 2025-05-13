
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/fec67c0c-81ed-4aad-b566-b7e1be05f3f0.jpg" 
              alt="About Thirunahari Harshini" 
              className="rounded-lg shadow-lg w-full h-auto object-cover z-10 relative" 
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
          </div>

          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Transforming Ideas Into Digital Reality</h2>
            
            <p className="text-muted-foreground mb-6">
              I'm Thirunahari Harshini, a passionate full-stack developer with expertise in creating modern and responsive web applications using the latest technologies.
            </p>
            
            <p className="text-muted-foreground mb-8">
              With a strong background in JavaScript, React, and UI/UX design, I deliver high-quality solutions that meet business goals while providing an exceptional user experience. I had some short-off experience on C, JAVA, Python, DSA to enhance and work on many projects.
            </p>
            
            <div className="space-y-4 mb-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-primary/80 group">
              More about my journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
