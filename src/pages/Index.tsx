
import React from "react";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import AboutPreview from "@/components/Home/AboutPreview";
import SkillsPreview from "@/components/Home/SkillsPreview";
import PortfolioPreview from "@/components/Home/PortfolioPreview";
import ServicesPreview from "@/components/Home/ServicesPreview";
import TestimonialsPreview from "@/components/Home/TestimonialsPreview";
import ContactPreview from "@/components/Home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <PortfolioPreview />
      <ServicesPreview />
      <TestimonialsPreview />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
