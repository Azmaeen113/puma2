import React from 'react';

const CatsSection = () => {
  return (
    <section id="cats" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE PUMAS
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl pixel-tagline text-hot-orange mb-8">
              These aren't your ordinary cats—they're sleek, pixel-pawed predators.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Each Puma carries the <span className="text-crypto-gold font-semibold pixel-font">colors of Pumpfun</span>, representing the chaos and beauty of degen trading.
              <br />
              They are natural hunters, stalking fresh pairs in the wild, waiting for that perfect <span className="text-hot-orange font-bold pixel-font">0 to 1M MCAP kill shot</span>.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/50 border border-hot-orange/30 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl md:text-4xl pixel-title text-crypto-gold mb-8 text-center">
              THE PUMA RULES
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-2xl pixel-tagline text-crypto-gold">
                  See the chart. Chase the pump.
                </div>
                <div className="w-16 h-1 bg-crypto-gold mx-auto rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl pixel-tagline text-hot-orange">
                  Sell too early? You get mauled.
                </div>
                <div className="w-16 h-1 bg-hot-orange mx-auto rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-hot-orange pixel-font">
                  Diamond paws only. No paper whiskers.
                </div>
                <div className="w-16 h-1 bg-hot-orange mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Expanded Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="col-span-2 md:col-span-2">
              <img
                src="/new images/photo_2025-08-22_09-30-32.jpg"
                alt="Alpha Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src="/new images/photo_2025-08-22_09-30-43.jpg"
                alt="Chart Watcher Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src="/new images/photo_2025-08-22_09-30-52.jpg"
                alt="Degen Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* New row with latest images */}
            <div>
              <img
                src="/new images/photo_2025-08-22_09-31-01.jpg"
                alt="Hunter Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src="/new images/photo_2025-08-22_09-31-09.jpg"
                alt="Combat Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src="/new images/photo_2025-08-22_09-31-14.jpg"
                alt="Hat Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src="/new images/photo_2025-08-22_09-31-20.jpg"
                alt="Worker Puma"
                className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
              "Their claws are coded in SOL, their eyes locked on liquidity, and their growl sounds like 'WAGMI' echoing through the jungle."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatsSection;