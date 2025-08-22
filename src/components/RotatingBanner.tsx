import React, { useState, useEffect } from 'react';

const RotatingBanner = () => {
  const bannerImages = [
    '/new images/photo_2025-08-22_09-29-33.jpg',
    '/new images/photo_2025-08-22_09-29-40.jpg',
    '/new images/photo_2025-08-22_09-29-47.jpg',
    '/new images/photo_2025-08-22_09-29-57.jpg',
    '/new images/photo_2025-08-22_09-30-04.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto overflow-hidden rounded-2xl shadow-glow mb-8">
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
            className="w-full h-full object-contain"
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