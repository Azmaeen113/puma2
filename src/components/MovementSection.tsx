import React from 'react';
import { Button } from '@/components/ui/button';

const MovementSection = () => {
  return (
    <section id="movement" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE MOVEMENT
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Problem Statement */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl pixel-title text-hot-orange mb-8">
              The culture is starving.
            </h3>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Every timeline looks the same—<span className="text-muted-foreground">low-effort pfps, recycled memes, and no soul.</span>
              <br />
              We need something <span className="text-hot-orange font-bold">hot</span>. Something <span className="text-crypto-gold font-bold">fresh</span>. Something <span className="text-hot-orange font-bold">pixelated and proud</span>.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-gradient-cyber border border-hot-orange/30 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-neon-blue mb-8">
                BONKAT is the new cultural currency for those who trade, believe, and meme with their whole chest.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎯</div>
                  <h4 className="text-xl pixel-font text-crypto-gold">TRADERS</h4>
                  <p className="text-foreground/90">Chart-watching alphas who live for the next pump</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl">💎</div>
                  <h4 className="text-xl pixel-font text-hot-orange">BELIEVERS</h4>
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
              src="/lovable-uploads/5fb3d239-dc43-4da8-8309-0db30a0fc343.png"
              alt="BONKAT Memer"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
            />
            <img
              src="/lovable-uploads/5fc7e9f5-9724-4b85-b3e5-b3e78dd2f64a.png"
              alt="BONKAT Trader"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '0.5s' }}
            />
            <img
              src="/lovable-uploads/596e2a54-459c-46fb-b8fe-fc93c64aae5c.png"
              alt="Red Cap BONKAT"
              className="w-full aspect-square object-contain rounded-xl shadow-gold hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '1s' }}
            />
            <img
              src="/lovable-uploads/dcf77ab8-dc5a-4d74-a28a-7df86a3ef408.png"
              alt="Matrix BONKAT"
              className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '1.5s' }}
            />
            <img
              src="/lovable-uploads/0a5bc86f-cd9e-44d7-8122-cecc5366e6f6.png"
              alt="Diamond BONKAT"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300 animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="degen" size="xl" className="min-w-[200px]">
                BONK OR DIE
              </Button>
              <Button variant="neon" size="xl" className="min-w-[200px]">
                ENTER THE MATRIX
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;