
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-2xl font-bold text-foreground font-poppins">
              Hike<span className="text-blue-500">Skool</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="font-medium hover:text-blue-500 transition-colors"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="font-medium hover:text-blue-500 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="font-medium hover:text-blue-500 transition-colors"
          >
            Testimonials
          </button>
          <Link to="/apply-mentor">
            <Button 
              variant="outline"
              className="text-blue-500 border-blue-500 hover:bg-blue-50"
            >
              Apply as Mentor
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/get-started">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
