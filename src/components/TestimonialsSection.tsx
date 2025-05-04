
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  content, 
  name, 
  role, 
  avatar,
  rating,
  delay 
}) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
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
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <Card 
      className="animate-reveal relative"
      ref={testimonialRef}
    >
      <CardContent className="pt-6">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden animate-float shadow-md">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          
          <p className="text-gray-600 mb-6 italic">"{content}"</p>
          
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      content: "This platform transformed my learning experience. The courses are well-structured and the instructors are incredibly knowledgeable.",
      name: "Sarah Johnson",
      role: "Web Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      delay: 100,
    },
    {
      content: "The live classes are amazing! I feel like I'm in a real classroom but with the comfort of learning from home.",
      name: "Michael Chen",
      role: "Data Scientist",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      delay: 200,
    },
    {
      content: "Getting certified helped me land my dream job. The course content is practical and industry-relevant.",
      name: "Priya Sharma",
      role: "Marketing Specialist",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      rating: 5,
      delay: 300,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-pastel-blue bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-blue-500">Students Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our students who have transformed their careers through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
