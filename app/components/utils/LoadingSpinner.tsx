import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="relative">
        {/* Outer rotating circle */}
        <div className="w-16 h-16 rounded-full border-4 border-red-200 border-t-red-500 animate-spin" />
        
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse opacity-75" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="ml-4 text-lg font-semibold text-gray-700  animate-pulse">
        Loading...TeroAsia...
      </div>
    </div>
  );
};

export default LoadingSpinner;