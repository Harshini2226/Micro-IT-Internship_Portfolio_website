
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "UI/UX Design", percentage: 75 },
  { name: "Node.js", percentage: 70 },
];

const SkillsPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies to create beautiful, 
            responsive, and user-friendly web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
