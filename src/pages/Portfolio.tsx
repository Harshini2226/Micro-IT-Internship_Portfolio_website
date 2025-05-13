import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}
const projects: Project[] = [{
  id: 1,
  title: "E-commerce Website",
  description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  tags: ["React", "Node.js", "MongoDB"],
  category: "Web Development"
}, {
  id: 2,
  title: "Portfolio Website",
  description: "A modern portfolio website showcasing creative work with smooth animations.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  tags: ["HTML/CSS", "JavaScript", "GSAP"],
  category: "Web Development"
}, {
  id: 3,
  title: "Task Management App",
  description: "A productivity tool for organizing tasks with drag-and-drop functionality.",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  tags: ["React", "Redux", "Firebase"],
  category: "Web Application"
}, {
  id: 4,
  title: "Restaurant Booking System",
  description: "An online reservation system with real-time availability updates.",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  tags: ["React", "Express", "MongoDB"],
  category: "Web Application"
}, {
  id: 5,
  title: "Travel Blog",
  description: "A blog website with content management system for travel enthusiasts.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  tags: ["WordPress", "PHP", "MySQL"],
  category: "Web Development"
}, {
  id: 6,
  title: "Fitness Tracker",
  description: "A mobile-first web application for tracking workouts and progress.",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  tags: ["React", "ChartJS", "Firebase"],
  category: "Web Application"
}];
const categories = ["All", "Web Development", "Web Application", "UI/UX Design"];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category === activeCategory);
  return <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">My Portfolio</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Here's a collection of my best work across different domains. Each project represents a unique challenge and solution, showcasing my skills in design, development, and problem-solving.</p>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-md ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"} transition-colors`}>
              {category}
            </button>)}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <Link to={`/portfolio/${project.id}`} className="text-primary font-medium hover:underline flex items-center">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>)}
        </div>

        {/* Interested to work together section */}
        <div className="mt-20 bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to new opportunities and collaborations. Happy to join you on your next project!
          </p>
          <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </Layout>;
};
export default Portfolio;
