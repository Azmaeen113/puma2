import React from 'react';

const ArtSection = () => {
  return (
    <section className="py-20 relative bg-gradient-matrix">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE ART
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl pixel-tagline text-hot-orange mb-8">
              Now, the art.
            </p>
            <p className="text-xl md:text-2xl pixel-tagline text-hot-orange">
              Pixelated. Predatory. Proud.
            </p>
          </div>

          {/* Enhanced Art Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-card/50 border border-hot-orange/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-crypto-gold mb-4 pixel-font">Chart Hunters</h3>
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="/new images/photo_2025-08-22_09-29-33.jpg"
                    alt="Chart Hunter Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-glow hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/new images/photo_2025-08-22_09-29-40.jpg"
                    alt="Sniper Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-orange hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-card/50 border border-neon-blue/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-neon-blue mb-4">Alpha Hunters & Diamond Paws</h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/new images/photo_2025-08-22_09-29-47.jpg"
                    alt="Alpha Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-blue hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/new images/photo_2025-08-22_09-29-57.jpg"
                    alt="Diamond Paws Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-glow hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/new images/photo_2025-08-22_09-30-04.jpg"
                    alt="Moon Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-orange hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/new images/photo_2025-08-22_09-30-09.jpg"
                    alt="Hunt Puma"
                    className="w-full aspect-square object-contain rounded-lg shadow-gold hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="bg-card/50 border border-crypto-gold/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-crypto-gold mb-4 pixel-font">Degen Warriors & Memers</h3>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    src="/new images/photo_2025-08-22_09-30-15.jpg" 
                    alt="Degen Puma"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/new images/photo_2025-08-22_09-30-22.jpg" 
                    alt="Warrior Puma"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/new images/photo_2025-08-22_09-30-27.jpg" 
                    alt="Memer Puma"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Art Description */}
          <div className="text-center space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              From <span className="text-hot-orange font-semibold pixel-font">chart hunters</span> to <span className="text-neon-blue font-semibold">moon snipers.</span>
              <br />
              From <span className="text-hot-orange font-semibold pixel-font">degens staring at charts all night</span> to the ones who <span className="text-crypto-gold font-semibold pixel-font">hunted at 3am and made it.</span>
            </p>
            
            <div className="bg-card border border-hot-orange rounded-xl p-8">
              <p className="text-2xl md:text-3xl font-bold text-hot-orange mb-4 pixel-font">
                These pumas carry stories on their fur and flames in their eyes.
              </p>
              <p className="text-xl text-foreground/90">
                They're all a part of <span className="text-hot-orange font-bold pixel-font">$PUMAS</span> now.
                <br />
                <span className="text-crypto-gold font-semibold pixel-font">Immortal. Irreverent. Inevitable.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;