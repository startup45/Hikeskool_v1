
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Video } from "lucide-react";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <section
      id="home"
      className="pt-28 pb-16 hero-gradient min-h-screen flex items-center"
      ref={heroRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn Anything, <br />
              <span className="text-blue-500">Anytime</span>, Anywhere
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
              Discover a new way of learning with our interactive online courses.
              Join thousands of students and expand your knowledge today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-6 text-lg">
                Try Demo
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                </div>
                <span className="font-medium">50+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <span className="font-medium">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Video className="h-5 w-5 text-pink-500" />
                </div>
                <span className="font-medium">Live Classes</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Students learning online" 
              className="max-w-full h-auto rounded-2xl shadow-softer"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
