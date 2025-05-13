
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Preloader from "@/components/Preloader";
import DepartmentCards from "@/components/DepartmentCards";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setContentLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    // Add intersection observer logic to handle scroll reveal animations
    if (contentLoaded) {
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
    }
  }, [contentLoaded]);

  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Navbar />
      
      {contentLoaded && (
        <>
          <HeroSection />
          
          <ScrollReveal>
            <CoursesSection />
          </ScrollReveal>
          
          <ScrollReveal>
            <DepartmentCards />
          </ScrollReveal>
          
          <ScrollReveal>
            <FeaturesSection />
          </ScrollReveal>
          
          <ScrollReveal>
            <TestimonialsSection />
          </ScrollReveal>
          
          <Footer />
          <WhatsAppChat />
        </>
      )}
    </div>
  );
};

export default Index;
