import React, { useEffect, useState } from 'react';

const LazyLogo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="w-32 h-32 flex items-center justify-center">
        {isLoaded ? (
          <img
            src="/ThetaChat-logo.png"
            alt="ThetaChat Logo"
            className="w-full h-full object-cover rounded-full transition-opacity duration-500 opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 animate-pulse rounded-full" />
        )}
      </div>
    </div>
  );
};

export default LazyLogo;
