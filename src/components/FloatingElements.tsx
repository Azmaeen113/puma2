import React from 'react';

const FloatingElements = () => {
  const leftSideImages = [
    {
      src: '/placeholder.svg',
      size: 'w-16 h-16 md:w-20 md:h-20',
      position: 'top-20',
      delay: '0s'
    },
    {
      src: '/placeholder.svg',
      size: 'w-14 h-14 md:w-18 md:h-18',
      position: 'top-60',
      delay: '1s'
    },
    {
      src: '/placeholder.svg',
      size: 'w-12 h-12 md:w-16 md:h-16',
      position: 'bottom-40',
      delay: '2s'
    }
  ];

  const rightSideImages = [
    {
      src: '/placeholder.svg',
      size: 'w-16 h-16 md:w-20 md:h-20',
      position: 'top-32',
      delay: '0.5s'
    },
    {
      src: '/placeholder.svg',
      size: 'w-14 h-14 md:w-18 md:h-18',
      position: 'top-80',
      delay: '1.5s'
    },
    {
      src: '/placeholder.svg',
      size: 'w-12 h-12 md:w-16 md:h-16',
      position: 'bottom-32',
      delay: '2.5s'
    }
  ];

  return (
    <>
      {/* Left Side Images */}
      <div className="absolute left-8 md:left-12 lg:left-20 top-0 bottom-0 hidden lg:flex flex-col justify-center space-y-12 z-5">
        {leftSideImages.map((image, index) => (
          <div
            key={`left-${index}`}
            className={`${image.size} opacity-30 hover:opacity-70 transition-all duration-500`}
            style={{
              animationDelay: image.delay,
              animation: 'glow-pulse 4s ease-in-out infinite'
            }}
          >
            <img
              src={image.src}
              alt={`Left BONKAT ${index + 1}`}
              className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Right Side Images */}
      <div className="absolute right-8 md:right-12 lg:right-20 top-0 bottom-0 hidden lg:flex flex-col justify-center space-y-12 z-5">
        {rightSideImages.map((image, index) => (
          <div
            key={`right-${index}`}
            className={`${image.size} opacity-30 hover:opacity-70 transition-all duration-500`}
            style={{
              animationDelay: image.delay,
              animation: 'glow-pulse 4s ease-in-out infinite'
            }}
          >
            <img
              src={image.src}
              alt={`Right BONKAT ${index + 1}`}
              className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingElements;