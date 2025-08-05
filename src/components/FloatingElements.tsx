import React from 'react';

const FloatingElements = () => {
  const floatingImages = [
    {
      src: '/lovable-uploads/dcf77ab8-dc5a-4d74-a28a-7df86a3ef408.png',
      size: 'w-24 h-24',
      position: 'top-20 left-10',
      animation: 'animate-float',
      delay: '0s'
    },
    {
      src: '/lovable-uploads/0819507e-ee92-4c20-bd3c-29bc1f9ae46f.png',
      size: 'w-20 h-20',
      position: 'top-40 right-16',
      animation: 'animate-float',
      delay: '1s'
    },
    {
      src: '/lovable-uploads/a06de617-aa42-4e27-9c68-8e3d0c208ef4.png',
      size: 'w-28 h-28',
      position: 'top-96 left-20',
      animation: 'animate-float',
      delay: '2s'
    },
    {
      src: '/lovable-uploads/db2161b0-c841-4769-8ded-a40fa80aef5a.png',
      size: 'w-22 h-22',
      position: 'bottom-40 right-12',
      animation: 'animate-float',
      delay: '1.5s'
    },
    {
      src: '/lovable-uploads/ac2836e3-53a0-4e9a-8fc2-49ae1ebdcd73.png',
      size: 'w-26 h-26',
      position: 'bottom-96 left-16',
      animation: 'animate-float',
      delay: '0.5s'
    },
    {
      src: '/lovable-uploads/4d24d52e-9d6a-4259-aa49-1b8ddb0a9797.png',
      size: 'w-24 h-24',
      position: 'top-60 right-32',
      animation: 'animate-float',
      delay: '2.5s'
    }
  ];

  return (
    <>
      {floatingImages.map((image, index) => (
        <div
          key={index}
          className={`fixed ${image.position} ${image.size} ${image.animation} z-20 opacity-30 hover:opacity-80 transition-opacity duration-300 hidden lg:block`}
          style={{ animationDelay: image.delay }}
        >
          <img
            src={image.src}
            alt={`Floating BONKAT ${index + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-glow hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </>
  );
};

export default FloatingElements;