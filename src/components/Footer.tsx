
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Pastel<span className="text-blue-500">Learn</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering learners worldwide with quality education and expert-led courses.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Free Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Career Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: hello@pastellearn.com
              </li>
              <li className="text-gray-600">
                Phone: +1 (123) 456-7890
              </li>
              <li className="text-gray-600">
                Address: 123 Education St, Learning City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} PastelLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
