import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 :from-gradarky-900 dark:to-gray-800">
      <div className="relative">
        {/* Outer rotating circle */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin" />
        
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse opacity-75" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="ml-4 text-lg font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;