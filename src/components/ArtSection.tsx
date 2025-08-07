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
              Pixelated. Purposeful. Proud.
            </p>
          </div>

          {/* Enhanced Art Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-card/50 border border-hot-orange/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-crypto-gold mb-4">Alleyway Gamblers</h3>
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="/lovable-uploads/95b3b72d-53fc-4132-a0df-60a3b6c5fc3e.png"
                    alt="Matrix Gambler BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-glow hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/lovable-uploads/9fba653d-d2b9-4678-8ef4-a06cf8229ec3.png"
                    alt="Baseball Gambler BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-orange hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-card/50 border border-neon-blue/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-neon-blue mb-4">Combat Units & Patriots</h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/lovable-uploads/a06de617-aa42-4e27-9c68-8e3d0c208ef4.png"
                    alt="Soldier BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-blue hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/lovable-uploads/db2161b0-c841-4769-8ded-a40fa80aef5a.png"
                    alt="Combat BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-glow hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/lovable-uploads/cb37bcc6-ad2f-4e89-ace3-4be4736f0c8a.png"
                    alt="Patriot BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-orange hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/lovable-uploads/ac2836e3-53a0-4e9a-8fc2-49ae1ebdcd73.png"
                    alt="Hat BONKAT"
                    className="w-full aspect-square object-contain rounded-lg shadow-gold hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="bg-card/50 border border-crypto-gold/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-crypto-gold mb-4">Diamond Hands & Workers</h3>
                <div className="grid grid-cols-3 gap-4">
                  <img 
                    src="/lovable-uploads/0a5bc86f-cd9e-44d7-8122-cecc5366e6f6.png" 
                    alt="Diamond BONKAT"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/lovable-uploads/4d24d52e-9d6a-4259-aa49-1b8ddb0a9797.png" 
                    alt="Worker BONKAT"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/lovable-uploads/b44f7497-94a6-449e-a12a-d62301150a86.png" 
                    alt="3AM Ape BONKAT"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Art Description */}
          <div className="text-center space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              From <span className="text-hot-orange font-semibold">alleyway gamblers</span> to <span className="text-neon-blue font-semibold">rooftop snipers.</span>
              <br />
              From <span className="text-hot-orange font-semibold">degens staring at DexScreener all night</span> to the ones who <span className="text-crypto-gold font-semibold">aped at 3am and made it.</span>
            </p>
            
            <div className="bg-card border border-hot-orange rounded-xl p-8">
              <p className="text-2xl md:text-3xl font-bold text-hot-orange mb-4">
                These cats carry stories on their fur and flames in their eyes.
              </p>
              <p className="text-xl text-foreground/90">
                They're all a part of <span className="text-hot-orange font-bold">BONKAT</span> now.
                <br />
                <span className="text-crypto-gold font-semibold">Immortal. Irreverent. Inevitable.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;