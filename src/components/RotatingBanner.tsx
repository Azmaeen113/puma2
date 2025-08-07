import React, { useState, useEffect } from 'react';

const RotatingBanner = () => {
  const bannerImages = [
    '/lovable-uploads/62df90e5-8ee7-47f9-9408-fb303e267103.png',
    '/lovable-uploads/9fba653d-d2b9-4678-8ef4-a06cf8229ec3.png',
    '/lovable-uploads/596e2a54-459c-46fb-b8fe-fc93c64aae5c.png',
    '/lovable-uploads/cb37bcc6-ad2f-4e89-ace3-4be4736f0c8a.png',
    '/lovable-uploads/0a5bc86f-cd9e-44d7-8122-cecc5366e6f6.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-glow mb-8">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            index === currentIndex
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-110 rotate-3'
          }`}
        >
          <img
            src={image}
            alt={`BONKAT Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-neon/20"></div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-hot-orange shadow-orange'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingBanner;