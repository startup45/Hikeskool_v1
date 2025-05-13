
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/CourseCard";

const coursesByDepartment = {
  finance: [
    {
      title: "Financial Analysis Fundamentals",
      description: "Learn the core principles of financial analysis including financial statements, ratios, and valuation techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Finance",
      price: "$129",
      rating: 4.7,
      duration: "6 weeks",
      backgroundColor: "bg-blue-100",
    },
    {
      title: "Investment Banking Essentials",
      description: "Master the key concepts and skills needed to succeed in the investment banking industry.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      category: "Finance",
      price: "$199",
      rating: 4.8,
      duration: "10 weeks",
      backgroundColor: "bg-blue-100",
    },
    {
      title: "Personal Financial Planning",
      description: "Build a comprehensive financial plan for your future including retirement, investments, and tax strategies.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      category: "Finance",
      price: "$89",
      rating: 4.9,
      duration: "4 weeks",
      backgroundColor: "bg-blue-100",
    },
  ],
  tech: [
    {
      title: "Full-Stack Web Development",
      description: "Master front-end and back-end development with modern frameworks and tools.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Tech",
      price: "$149",
      rating: 4.8,
      duration: "12 weeks",
      backgroundColor: "bg-gray-100",
    },
    {
      title: "Mobile App Development",
      description: "Learn to build cross-platform mobile applications using React Native and Flutter.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "Tech",
      price: "$139",
      rating: 4.6,
      duration: "8 weeks",
      backgroundColor: "bg-gray-100",
    },
    {
      title: "DevOps & Cloud Engineering",
      description: "Master the practices, tools, and automation needed for modern software delivery.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Tech",
      price: "$169",
      rating: 4.7,
      duration: "10 weeks",
      backgroundColor: "bg-gray-100",
    },
  ],
  cybersecurity: [
    {
      title: "Ethical Hacking",
      description: "Learn penetration testing techniques to identify and fix security vulnerabilities.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      category: "Cyber Security",
      price: "$179",
      rating: 4.9,
      duration: "8 weeks",
      backgroundColor: "bg-green-100",
    },
    {
      title: "Network Security Fundamentals",
      description: "Master the principles and practices of securing networks against cyber threats.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      category: "Cyber Security",
      price: "$159",
      rating: 4.7,
      duration: "6 weeks",
      backgroundColor: "bg-green-100",
    },
    {
      title: "Security Operations Center (SOC) Analyst",
      description: "Develop the skills needed to detect, analyze, and respond to cybersecurity incidents.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      category: "Cyber Security",
      price: "$189",
      rating: 4.8,
      duration: "9 weeks",
      backgroundColor: "bg-green-100",
    },
  ],
  commerce: [
    {
      title: "E-Commerce Business Strategy",
      description: "Learn how to build, scale, and optimize an online business from the ground up.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      category: "Commerce",
      price: "$119",
      rating: 4.6,
      duration: "6 weeks",
      backgroundColor: "bg-yellow-100",
    },
    {
      title: "Digital Marketing for E-Commerce",
      description: "Master digital marketing strategies specifically tailored for online stores and marketplaces.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "Commerce",
      price: "$129",
      rating: 4.7,
      duration: "7 weeks",
      backgroundColor: "bg-yellow-100",
    },
    {
      title: "Supply Chain Management",
      description: "Optimize your product sourcing, inventory management, and fulfillment operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      category: "Commerce",
      price: "$139",
      rating: 4.5,
      duration: "8 weeks",
      backgroundColor: "bg-yellow-100",
    },
  ],
  marketing: [
    {
      title: "Digital Marketing Masterclass",
      description: "Comprehensive training in SEO, PPC, social media, email marketing, and analytics.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      category: "Marketing",
      price: "$149",
      rating: 4.8,
      duration: "10 weeks",
      backgroundColor: "bg-pink-100",
    },
    {
      title: "Content Marketing Strategy",
      description: "Learn to create, distribute, and measure content that drives business results.",
      image: "https://images.unsplash.com/photo-1502101872923-d48509bff386",
      category: "Marketing",
      price: "$129",
      rating: 4.7,
      duration: "8 weeks",
      backgroundColor: "bg-pink-100",
    },
    {
      title: "Growth Marketing & Analytics",
      description: "Data-driven tactics to acquire, engage, and retain customers at scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Marketing",
      price: "$159",
      rating: 4.9,
      duration: "9 weeks",
      backgroundColor: "bg-pink-100",
    },
  ],
  aiml: [
    {
      title: "Practical Machine Learning",
      description: "Hands-on training in building and deploying machine learning models for real-world applications.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "AI/ML",
      price: "$189",
      rating: 4.9,
      duration: "12 weeks",
      backgroundColor: "bg-purple-100",
    },
    {
      title: "Deep Learning Fundamentals",
      description: "Master neural networks, computer vision, and natural language processing techniques.",
      image: "https://images.unsplash.com/photo-1513346940221-6f673d962e97",
      category: "AI/ML",
      price: "$199",
      rating: 4.8,
      duration: "10 weeks",
      backgroundColor: "bg-purple-100",
    },
    {
      title: "AI Product Development",
      description: "Learn to design, build, and deploy AI-powered products and services.",
      image: "https://images.unsplash.com/photo-1651356226808-c70c6dce8f0e",
      category: "AI/ML",
      price: "$179",
      rating: 4.7,
      duration: "9 weeks",
      backgroundColor: "bg-purple-100",
    },
  ],
};

const DepartmentCards: React.FC = () => {
  return (
    <section id="course-departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-blue-500">Departments</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover specialized courses across various fields designed to help you advance your career
            and expand your knowledge.
          </p>
        </div>

        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger value="finance" className="data-[state=active]:bg-blue-100">Finance</TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-gray-100">Tech</TabsTrigger>
            <TabsTrigger value="cybersecurity" className="data-[state=active]:bg-green-100">Cyber Security</TabsTrigger>
            <TabsTrigger value="commerce" className="data-[state=active]:bg-yellow-100">Commerce</TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-pink-100">Marketing</TabsTrigger>
            <TabsTrigger value="aiml" className="data-[state=active]:bg-purple-100">AI/ML</TabsTrigger>
          </TabsList>
          
          {Object.entries(coursesByDepartment).map(([department, courses]) => (
            <TabsContent key={department} value={department} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    {...course}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DepartmentCards;
