
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import WhatsAppChat from "@/components/WhatsAppChat";

const Finance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Finance <span className="text-blue-500">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Master financial analysis, investment strategies, and wealth management with our expert-led courses.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Study Finance?</h2>
              <p className="text-gray-700 mb-4">
                Financial literacy and expertise are essential skills in today's economy. Whether you're looking to advance in corporate finance, 
                pursue investment banking, or simply manage your personal finances better, our courses provide the knowledge and practical 
                skills you need to succeed.
              </p>
              <p className="text-gray-700 mb-6">
                Our finance curriculum is designed by industry professionals with years of experience in financial markets, 
                corporate finance, and investment management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Learn from finance professionals with Wall Street experience</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Hands-on projects using real market data and financial models</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">Industry-recognized certification upon completion</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e" 
                alt="Finance Education" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Finance Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Finance</h3>
              <p className="text-gray-600 mb-4">Learn how to manage your money, create a budget, invest wisely, and plan for major life expenses.</p>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Learn More</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Corporate Finance</h3>
              <p className="text-gray-600 mb-4">Master financial analysis, valuation techniques, capital budgeting, and corporate financial strategy.</p>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Learn More</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Investment Banking</h3>
              <p className="text-gray-600 mb-4">Develop skills in financial modeling, mergers & acquisitions, IPOs, and investment management.</p>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Finance;
