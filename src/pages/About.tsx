
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

const educationData: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    year: "2018 - 2020",
    description: "Specialized in Human-Computer Interaction and Web Technologies."
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    year: "2014 - 2018",
    description: "Focused on Software Engineering and Interactive Design."
  }
];

const experienceData: Experience[] = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    description: "Lead frontend development for enterprise web applications, implemented responsive design systems, and mentored junior developers."
  },
  {
    position: "Frontend Developer",
    company: "Digital Solutions Agency",
    duration: "2018 - 2021",
    description: "Developed and maintained client websites, collaborated with designers to implement UI/UX designs, and optimized website performance."
  },
  {
    position: "Web Development Intern",
    company: "Creative Web Studio",
    duration: "2017 - 2018",
    description: "Assisted in building websites for small businesses, learned modern web development practices, and contributed to team projects."
  }
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Thirunahari Harshini" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Thirunahari Harshini</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate frontend developer with expertise in creating modern and responsive 
              web applications. With over 4 years of professional experience, I specialize in 
              crafting user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in web development began during college, where I discovered my passion 
              for combining creativity with technical problem-solving. Since then, I've worked 
              with a variety of clients across different industries, helping them establish a 
              strong online presence.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new design trends, contributing 
              to open-source projects, or enjoying outdoor photography adventures.
            </p>
            
            <a 
              href="/resume.pdf" 
              className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((education, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                  <p className="font-medium mb-1">{education.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">{education.year}</p>
                  <p className="text-muted-foreground">{education.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Experience Section */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experienceData.map((experience, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
                  <p className="font-medium mb-1">{experience.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{experience.duration}</p>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
