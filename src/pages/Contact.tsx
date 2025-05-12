import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log("Form submitted");
    // For demo purposes, let's just show an alert
    alert("Message sent successfully!");
  };
  return <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to learn more about my services?
          I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:harshini@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                harshini@example.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 9014990722</a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">
                Your Location, City, Country
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input type="text" id="name" className="w-full p-3 rounded-md border border-border bg-background" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input type="email" id="email" className="w-full p-3 rounded-md border border-border bg-background" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full p-3 rounded-md border border-border bg-background" placeholder="Project Inquiry" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full p-3 rounded-md border border-border bg-background" placeholder="Hello, I'm interested in your services..." required></textarea>
                </div>
                <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
          
          {/* Map and Social Media */}
          <div className="space-y-8">
            {/* Map Embed */}
            <Card>
              <CardContent className="p-0 overflow-hidden h-72">
                {/* Placeholder for map - in a real project, you would embed a Google Maps iframe or similar */}
                <div className="w-full h-full flex items-center justify-center bg-zinc-50 rounded">
                  <p className="text-muted-foreground text-base px-[32px] my-[4px] mx-[13px]">Availability I'm currently available for freelance work and project collaborations. Typically, I respond to messages within 24-48 hours. 
 -Available for new projects</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-6">
                  <a href="https://github.com" className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    <span className="text-xs font-medium">Github:
https://github.com/
Harshini2226</span>
                  </a>
                  <a href="https://linkedin.com" className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    <span className="text-xs font-medium">LinkedIn: https ://www.linkedin. com /in/ harshini-thirunahari-8373872a0/</span>
                  </a>
                  <a href="https://twitter.com" className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors" target="_blank" rel="noopener noreferrer">
                    
                    <span className="text-left font-medium"> Phone:+91 9014990722</span>
                  </a>
                  <a href="https://instagram.com" className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors" target="_blank" rel="noopener noreferrer">
                    
                    <span className="font-medium">E-mail:thirunahari
harshini@gmail.com
                  </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Contact;