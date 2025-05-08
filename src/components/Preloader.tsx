
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ 
        backgroundImage: "linear-gradient(to right, #F5F1EB, #D3E5F3, #D4F0DB)" 
      }}
    >
      <div className="text-center">
        <div className="animate-float mb-4">
          <span className="text-4xl font-bold font-poppins">
            Hike<span className="text-blue-500">Skool</span>
          </span>
        </div>
        <div className="animate-pulse flex items-center justify-center">
          <Loader className="h-8 w-8 text-blue-500 animate-spin mr-2" />
          <p className="font-medium text-foreground">Loading your learning adventure...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
