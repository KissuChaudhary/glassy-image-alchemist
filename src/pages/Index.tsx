
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import UseCases from "@/components/UseCases";
import SchemaMarkup from "@/components/SchemaMarkup";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup />
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <UseCases />
        <HowItWorks />
        <Examples />
        <Testimonials />
        <GetStarted />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
