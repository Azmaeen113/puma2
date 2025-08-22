import React from 'react';
import { Button } from '@/components/ui/button';

const MovementSection = () => {
  return (
    <section id="movement" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE JUNGLE
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Problem Statement */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl pixel-title text-hot-orange mb-8">
              The Puma Tribe awaits.
            </h3>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Owning a Pumpfun Puma NFT isn't just flex—it's entry into the <span className="text-hot-orange font-bold pixel-font">Puma Jungle</span>, where degens unite to share alpha, memes, and the occasional loss-post therapy.
              <br />
              We need something <span className="text-hot-orange font-bold pixel-font">wild</span>. Something <span className="text-crypto-gold font-bold pixel-font">ferocious</span>. Something <span className="text-hot-orange font-bold pixel-font">pixelated and proud</span>.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-gradient-cyber border border-hot-orange/30 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-neon-blue mb-8">
                $PUMAS is the new cultural currency for those who hunt, believe, and meme with their whole chest.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎯</div>
                  <h4 className="text-xl pixel-font text-crypto-gold">HUNTERS</h4>
                  <p className="text-foreground/90">Chart-stalking alphas who live for the next pump</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl">💎</div>
                  <h4 className="text-xl pixel-font text-hot-orange">DIAMOND PAWS</h4>
                  <p className="text-foreground/90">Diamond hands who HODL through the chaos</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl">🔥</div>
                  <h4 className="text-xl pixel-font text-hot-orange">MEMERS</h4>
                  <p className="text-foreground/90">Culture creators who meme with their whole chest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Gallery of Characters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            <img
              src="/new images/photo_2025-08-22_09-29-47.jpg"
              alt="Puma Memer"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
            />
            <img
              src="/new images/photo_2025-08-22_09-29-57.jpg"
              alt="Puma Trader"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            <img
              src="/new images/photo_2025-08-22_09-30-04.jpg"
              alt="Red Cap Puma"
              className="w-full aspect-square object-contain rounded-xl shadow-gold hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '1s' }}
            />
            <img
              src="/new images/photo_2025-08-22_09-30-09.jpg"
              alt="Matrix Puma"
              className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '1.5s' }}
            />
            <img
              src="/new images/photo_2025-08-22_09-30-15.jpg"
              alt="Diamond Puma"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="degen" size="xl" className="min-w-[200px]">
                HUNT THE CHARTS
              </Button>
              <Button variant="neon" size="xl" className="min-w-[200px]">
                ENTER THE JUNGLE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;