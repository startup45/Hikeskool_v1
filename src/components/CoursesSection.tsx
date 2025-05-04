
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Award } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  duration: string;
  delay: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  rating,
  duration,
  delay,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card 
      className="overflow-hidden animate-reveal transition-all duration-300 hover:-translate-y-2 hover:shadow-softer"
      ref={cardRef}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-blue-500">{category}</Badge>
      </div>
      <CardHeader>
        <h3 className="font-bold text-xl">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 mr-1" />
          <span>{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <Award className="h-4 w-4 text-green-500 mr-1" />
          <span>Certificate</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const CoursesSection: React.FC = () => {
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

  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics for building modern websites.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Web",
      rating: 4.8,
      duration: "8 weeks",
      delay: 100,
    },
    {
      title: "Data Science Essentials",
      description: "Master the fundamentals of data analysis, visualization and machine learning.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Data",
      rating: 4.9,
      duration: "10 weeks",
      delay: 200,
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn SEO, social media marketing, and conversion optimization.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Marketing",
      rating: 4.7,
      duration: "6 weeks",
      delay: 300,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-pastel-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-reveal" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-blue-500">Popular Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved courses created by expert instructors to help
            you achieve your learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              category={course.category}
              rating={course.rating}
              duration={course.duration}
              delay={course.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
