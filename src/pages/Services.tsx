import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout as LayoutIcon, Search, Database, Activity, BarChart } from "lucide-react";
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}
const services: Service[] = [{
  icon: <LayoutIcon className="h-12 w-12 text-primary" />,
  title: "UI/UX Design",
  description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
  features: ["User Research & Analysis", "Wireframing & Prototyping", "Responsive Design", "User Testing"]
}, {
  icon: <Code className="h-12 w-12 text-primary" />,
  title: "Web Development",
  description: "Building responsive, fast, and functional websites and web applications using modern technologies.",
  features: ["Frontend Development", "Backend Integration", "Progressive Web Apps", "API Development"]
}, {
  icon: <Search className="h-12 w-12 text-primary" />,
  title: "SEO Optimization",
  description: "Improving website visibility and ranking on search engines to drive organic traffic.",
  features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Performance Tuning"]
}, {
  icon: <Database className="h-12 w-12 text-primary" />,
  title: "Database Design",
  description: "Creating efficient and scalable database structures to manage your application data.",
  features: ["Data Modeling", "Query Optimization", "Database Migration", "Data Security"]
}, {
  icon: <Activity className="h-12 w-12 text-primary" />,
  title: "Web Maintenance",
  description: "Keeping your website up-to-date, secure, and running smoothly with regular maintenance.",
  features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup & Recovery"]
}, {
  icon: <BarChart className="h-12 w-12 text-primary" />,
  title: "Analytics & Reporting",
  description: "Tracking and analyzing website performance to make data-driven improvements.",
  features: ["Traffic Analysis", "Conversion Tracking", "User Behavior Insights", "Custom Reports"]
}];
const Services = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Services</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">I offer a range of services focused on delivering high-quality solutions tailored to your specific needs. Each service is approached with attention to detail, technical expertise, and a focus on creating value.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => <li key={i} className="flex items-start">
                      <div className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-20 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">Understanding your requirements and project goals</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground">Creating a detailed roadmap for your project</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Execution</h3>
              <p className="text-muted-foreground">Development with regular updates and feedback</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground">Final testing and launching your project</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Services;