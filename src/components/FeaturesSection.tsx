
import React, { useEffect, useRef } from "react";
import { Video, Users, Award } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, bgColor, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      className="feature-card animate-reveal"
      ref={featureRef}
    >
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-blue-500">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive learning solutions that help you achieve your goals.
            Here's what makes our platform unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Video className="h-8 w-8 text-blue-500" />}
            title="Live Interactive Classes"
            description="Join live classes with real-time interaction and personalized feedback from instructors."
            bgColor="bg-blue-100"
            delay={100}
          />
          <Feature
            icon={<Users className="h-8 w-8 text-pink-500" />}
            title="Expert Mentors"
            description="Learn from industry professionals with years of experience in their respective fields."
            bgColor="bg-pink-100"
            delay={200}
          />
          <Feature
            icon={<Award className="h-8 w-8 text-green-500" />}
            title="Recognized Certification"
            description="Earn industry-recognized certificates upon course completion to boost your career."
            bgColor="bg-green-100"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
