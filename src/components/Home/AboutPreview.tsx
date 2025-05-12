
import React from "react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="About Thirunahari Harshini" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm Thirunahari Harshini, a passionate frontend developer with expertise in creating
              modern and responsive web applications using the latest technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              With a strong background in JavaScript, React, and UI/UX design,
              I deliver high-quality solutions that meet business goals while providing
              an exceptional user experience.
            </p>
            <Link 
              to="/about" 
              className="text-primary font-medium hover:underline"
            >
              Learn more about my journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
