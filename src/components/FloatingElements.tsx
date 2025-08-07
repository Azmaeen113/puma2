import React from 'react';

const FloatingElements = () => {
  const leftSideImages = [
    {
      src: '/lovable-uploads/dcf77ab8-dc5a-4d74-a28a-7df86a3ef408.png',
      size: 'w-32 h-32 md:w-40 md:h-40',
      position: 'top-20',
      delay: '0s'
    },
    {
      src: '/lovable-uploads/a06de617-aa42-4e27-9c68-8e3d0c208ef4.png',
      size: 'w-28 h-28 md:w-36 md:h-36',
      position: 'top-60',
      delay: '1s'
    },
    {
      src: '/lovable-uploads/ac2836e3-53a0-4e9a-8fc2-49ae1ebdcd73.png',
      size: 'w-24 h-24 md:w-32 md:h-32',
      position: 'bottom-40',
      delay: '2s'
    }
  ];

  const rightSideImages = [
    {
      src: '/lovable-uploads/0819507e-ee92-4c20-bd3c-29bc1f9ae46f.png',
      size: 'w-10 h-10 md:w-13 md:h-13',
      position: 'top-32',
      delay: '0.5s'
    },
    {
      src: '/lovable-uploads/db2161b0-c841-4769-8ded-a40fa80aef5a.png',
      size: 'w-9 h-9 md:w-11 md:h-11',
      position: 'top-80',
      delay: '1.5s'
    },
    {
      src: '/lovable-uploads/4d24d52e-9d6a-4259-aa49-1b8ddb0a9797.png',
      size: 'w-9 h-9 md:w-12 md:h-12',
      position: 'bottom-32',
      delay: '2.5s'
    }
  ];

  return (
    <>
      {/* Left Side Images */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-0 bottom-0 hidden lg:flex flex-col justify-center space-y-8 z-20">
        {leftSideImages.map((image, index) => (
          <div
            key={`left-${index}`}
            className={`${image.size} opacity-40 hover:opacity-90 transition-all duration-500`}
            style={{
              animationDelay: image.delay,
              animation: 'glow-pulse 4s ease-in-out infinite'
            }}
          >
            <img
              src={image.src}
              alt={`Left BONKAT ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-orange hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 102, 0, 0.4))'
              }}
            />
          </div>
        ))}
      </div>

      {/* Right Side Images */}
      <div className="absolute right-4 md:right-8 lg:right-16 top-0 bottom-0 hidden lg:flex flex-col justify-center space-y-8 z-20">
        {rightSideImages.map((image, index) => (
          <div
            key={`right-${index}`}
            className={`${image.size} opacity-40 hover:opacity-90 transition-all duration-500`}
            style={{
              animationDelay: image.delay,
              animation: 'glow-pulse 4s ease-in-out infinite'
            }}
          >
            <img
              src={image.src}
              alt={`Right BONKAT ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-orange hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 102, 0, 0.4))',
                transform: 'scale(0.33)',
                transformOrigin: 'center center'
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingElements;