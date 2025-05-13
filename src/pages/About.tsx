
import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Cpu, Database, Java, MessageCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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

interface Certificate {
  name: string;
  issuer: string;
  year: string;
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

const certificatesData: Certificate[] = [
  {
    name: "Advanced Blockchain Development",
    issuer: "Blockchain Academy",
    year: "2022",
    description: "Comprehensive course covering blockchain fundamentals, smart contracts, and decentralized applications."
  },
  {
    name: "Machine Learning Specialization",
    issuer: "AI Institute",
    year: "2021",
    description: "In-depth training on machine learning algorithms, neural networks, and practical applications in data science."
  },
  {
    name: "Full Stack Web Development",
    issuer: "Web Dev Bootcamp",
    year: "2020",
    description: "Intensive program covering frontend and backend technologies including React, Node.js, and database management."
  }
];

const skills = [
  { name: "Python", percentage: 85 },
  { name: "Java", percentage: 80 },
  { name: "JavaScript", percentage: 90 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "AI/ML", percentage: 75 },
  { name: "Blockchain", percentage: 75 },
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              alt="Thirunahari Harshini"
              className="rounded-lg shadow-lg w-full h-auto"
              src="/lovable-uploads/fec67c0c-81ed-4aad-b566-b7e1be05f3f0.jpg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Thirunahari Harshini</h2>
            <p className="text-muted-foreground mb-4 font-medium text-lg">
              I'm a passionate full-stack developer with expertise in creating modern and responsive web applications. I specialize in crafting user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-4 font-medium text-lg">
              My journey in web development began during college, where I discovered my passion for combining creativity with technical problem-solving. With a strong background in Python, Java, and C programming, I combine technical expertise with creative problem-solving to deliver impactful projects. My passion lies in developing solutions that are not only functional but also provide exceptional user experiences.
              
              I continuously strive to expand my knowledge and keep up with the latest technologies to provide cutting-edge solutions to complex problems. When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects.
            </p>
            <p className="text-muted-foreground font-medium text-lg">
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
        
        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((education, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/20 rounded-full mr-4">
                      <GraduationCap className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{education.degree}</h3>
                      <p className="text-muted-foreground">{education.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{education.year}</p>
                      <p>{education.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.map((experience, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/20 rounded-full mr-4">
                      <Briefcase className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{experience.position}</h3>
                      <p className="text-muted-foreground">{experience.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{experience.duration}</p>
                      <p>{experience.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certificates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificatesData.map((certificate, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/20 rounded-full mr-4">
                      <Award className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{certificate.name}</h3>
                      <p className="text-muted-foreground">{certificate.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-2">{certificate.year}</p>
                      <p>{certificate.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Let's Work Together Section */}
        <div className="mb-16 bg-muted/30 p-12 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>
            <a href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Have Fun Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Have Lots of Fun</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto p-4 bg-primary/20 rounded-full w-fit mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">AI Enthusiast</h3>
                <p className="text-muted-foreground">
                  I love exploring new AI technologies and experimenting with machine learning models in my free time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto p-4 bg-primary/20 rounded-full w-fit mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Blockchain Explorer</h3>
                <p className="text-muted-foreground">
                  Fascinated by blockchain technology and its potential to transform various industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto p-4 bg-primary/20 rounded-full w-fit mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Community Builder</h3>
                <p className="text-muted-foreground">
                  I actively participate in tech communities and enjoy sharing knowledge with fellow developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
