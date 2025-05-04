
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    // Add intersection observer logic to handle scroll reveal animations
    const animateElements = document.querySelectorAll(".animate-reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animateElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <ScrollReveal>
        <CoursesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
