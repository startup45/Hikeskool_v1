
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp business number
    window.open('https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20courses!', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 transform transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 7.1 17.1l.3 1.9-1.9-.3A10 10 0 1 1 12 2z"></path>
                  <path d="M8.5 8.5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z"></path>
                  <path d="M15.5 8.5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z"></path>
                  <path d="M12 16h0"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">HikeSkool Support</h3>
                <p className="text-xs text-green-600">Online | Replies within minutes</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-md p-3 mb-3">
            <p className="text-sm">Hello! 👋 Thanks for visiting HikeSkool. How can we help you today?</p>
          </div>
          <Button 
            onClick={handleWhatsAppRedirect} 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Chat on WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </Button>
        </div>
      )}
      <button
        onClick={toggleChat}
        className={`bg-green-500 rounded-full p-3 shadow-lg text-white hover:bg-green-600 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 7.1 17.1l.3 1.9-1.9-.3A10 10 0 1 1 12 2z"></path>
            <path d="M8.5 8.5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z"></path>
            <path d="M15.5 8.5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z"></path>
            <path d="M12 16h0"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;
