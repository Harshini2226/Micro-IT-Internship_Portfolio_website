
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind or want to learn more about my services?
            I'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:harshini@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                harshini@example.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground text-center">
                Your Location, City, Country
              </p>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
