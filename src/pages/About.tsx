import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}
interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
}
const educationData: Education[] = [{
  degree: "Master of Computer Science",
  institution: "University of Technology",
  year: "2018 - 2020",
  description: "Specialized in Human-Computer Interaction and Web Technologies."
}, {
  degree: "Bachelor of Computer Science",
  institution: "State University",
  year: "2014 - 2018",
  description: "Focused on Software Engineering and Interactive Design."
}];
const experienceData: Experience[] = [{
  position: "Senior Frontend Developer",
  company: "Tech Innovations Inc.",
  duration: "2021 - Present",
  description: "Lead frontend development for enterprise web applications, implemented responsive design systems, and mentored junior developers."
}, {
  position: "Frontend Developer",
  company: "Digital Solutions Agency",
  duration: "2018 - 2021",
  description: "Developed and maintained client websites, collaborated with designers to implement UI/UX designs, and optimized website performance."
}, {
  position: "Web Development Intern",
  company: "Creative Web Studio",
  duration: "2017 - 2018",
  description: "Assisted in building websites for small businesses, learned modern web development practices, and contributed to team projects."
}];
const About = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 rounded">
          <div>
            <img alt="Thirunahari Harshini" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/fec67c0c-81ed-4aad-b566-b7e1be05f3f0.jpg" />
          </div>
          <div className="rounded">
            <h2 className="text-3xl font-bold mb-6">Thirunahari Harshini</h2>
            <p className="text-muted-foreground mb-4 font-medium text-lg">I'm a passionate full-stack developer with expertise in creating modern and responsive web applications. I specialize in crafting user-friendly interfaces that deliver exceptional user experiences.</p>
            <p className="text-muted-foreground mb-4 font-medium text-lg">My journey in web development began during college, where I discovered my passion for combining creativity with technical problem-solving. With a strong background in Python, Java, and C programming, I combine technical expertise with creative problem-solving to deliver impactful projects. My passion lies in developing solutions that are not only functional but also provide exceptional user experiences.

I continuously strive to expand my knowledge and keep up with the latest technologies to provide cutting-edge solutions to complex problems. When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects.</p>
            <p className="text-muted-foreground font-medium text-lg">
              When I'm not coding, you can find me exploring new design trends, contributing 
              to open-source projects, or enjoying outdoor photography adventures.
            </p>
            
            <a href="/resume.pdf" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors" download>
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((education, index) => <Card key={index}>
                
              </Card>)}
          </div>
        </div>
        
        {/* Experience Section */}
        
      </div>
    </Layout>;
};
export default About;