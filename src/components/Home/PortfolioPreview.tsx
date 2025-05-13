
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "Node.js", "MongoDB"]
  }, 
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing creative work with smooth animations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["HTML/CSS", "JavaScript", "GSAP"]
  }, 
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity tool for organizing tasks with drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Redux", "Firebase"]
  }
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of my recent work. Each project was carefully crafted
            to meet client needs and deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-none shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/portfolio/${project.id}`} className="text-primary font-medium hover:text-primary/80 group flex items-center">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="bg-primary text-primary-foreground px-6 py-3 rounded-md inline-flex items-center hover:bg-primary/90 transition-colors">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
