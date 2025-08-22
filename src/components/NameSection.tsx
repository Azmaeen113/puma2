import React from 'react';

const NameSection = () => {
  return (
    <section className="py-20 relative bg-gradient-cyber">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-6xl pixel-title text-hot-orange mb-12">
            THE NAME
          </h2>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground/90">
              Let's talk about the name.
            </p>
            
            <div className="text-3xl md:text-5xl pixel-title text-hot-orange my-12 animate-neon-pulse">
              PUMAS = PUMP + FUN
            </div>
            
            <p className="text-foreground/90">
              Simple. Sharp. Sticky.
              <br />
              <span className="text-crypto-gold font-semibold pixel-font">It rolls off your tongue like a fresh 10x.</span>
            </p>
            
            <div className="bg-card/50 border border-hot-orange/30 rounded-xl p-8 mt-12">
              <p className="text-xl md:text-2xl pixel-tagline text-crypto-gold">
                Because <span className="text-hot-orange pixel-font">PUMPFUN</span> changed Solana.
                <br />
                And now <span className="text-hot-orange pixel-font">$PUMAS</span> is going to change how we hunt.
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-16">
            <img
              src="/new images/photo_2025-08-22_09-30-22.jpg"
              alt="Pumpfun Puma"
              className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NameSection;