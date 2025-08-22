import React from 'react';

const LoreSection = () => {
  return (
    <section id="lore" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE ORIGINS
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-2xl md:text-3xl pixel-tagline text-hot-orange mb-8">
              $PUMAS: The Origins of the Pumpfun Pumas
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-foreground/90">
                In the digital jungle of Solana, where memes roam free and charts swing like vines, a new species has emerged: <span className="text-hot-orange font-bold pixel-font">The Pumpfun Pumas</span>.
              </p>
              
              <p className="text-foreground/90">
                Legend has it that one fateful day, a glitch in the <span className="text-crypto-gold font-semibold pixel-font">Pumpfun codebase</span> collided with the collective FOMO of 1,111 degen traders. Out of this memetic explosion, the Pumpfun Pumas were born.
              </p>
              
              <p className="text-foreground/90">
                These aren't your ordinary cats—they're <span className="text-hot-orange font-bold pixel-font">sleek, pixel-pawed predators</span> wearing the legendary colorways of Pumpfun itself, embodying the spirit of every moon mission, rug pull escape, and chart-shattering pump.
              </p>
            </div>

            {/* Accent Image */}
            <div className="w-48 h-48 mx-auto lg:mx-0 mt-8">
              <img 
                src="/new images/photo_2025-08-22_09-31-24.jpg" 
                alt="Pumpfun Puma"
                className="w-full h-full object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Enhanced Image Gallery with New Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img
                src="/new images/photo_2025-08-22_09-31-29.jpg"
                alt="Puma Hunter"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/new images/photo_2025-08-22_09-31-34.jpg"
                alt="Chart Stalker Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 pt-8">
              <img
                src="/new images/photo_2025-08-22_09-31-38.jpg"
                alt="Degen Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/new images/photo_2025-08-22_09-31-43.jpg"
                alt="Moon Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 hidden md:block">
              <img
                src="/new images/photo_2025-08-22_09-29-33.jpg"
                alt="Alpha Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/new images/photo_2025-08-22_09-29-40.jpg"
                alt="Pump Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl pixel-tagline text-crypto-gold italic border-l-4 border-hot-orange pl-8 py-4 max-w-4xl mx-auto">
            "If the chart is pumping, the Pumas are hunting!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;