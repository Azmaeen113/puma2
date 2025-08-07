import React from 'react';
import { Button } from '@/components/ui/button';
import RotatingBanner from './RotatingBanner';
import MatrixBackground from './MatrixBackground';
import FloatingElements from './FloatingElements';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Matrix Background Animation - Only in Hero Section */}
      <MatrixBackground />
      
      {/* Floating Elements - Only in Hero Section */}
      <FloatingElements />
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl pixel-title mb-8 animate-neon-pulse">
            <span className="text-hot-orange">$BONKAT</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl pixel-title mb-6 text-hot-orange">
            THE FIRST BONKIFIED CATS
          </h2>

          {/* Hero Sticker Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/sticker.webp"
              alt="BONKAT Sticker"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain hover:scale-110 transition-all duration-500"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255, 102, 0, 0.6))',
                animation: 'glow-pulse 3s ease-in-out infinite'
              }}
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl pixel-tagline text-pure-white mb-12 max-w-4xl mx-auto leading-relaxed">
            Solana-native pixel cats engineered in pure degeneracy.
            <br />
            <span className="text-crypto-gold font-semibold">They don't meow—they yowl when volume's dry and purr when the pump is live.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              variant="default"
              size="xl"
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300 pixel-font"
              onClick={() => window.open('#', '_blank')}
            >
              BUY $BONKAT NOW
            </Button>
            <Button
              variant="secondary"
              size="xl"
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300 pixel-font"
              onClick={() => window.open('#', '_blank')}
            >
              JOIN THE PRIDE
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300 pixel-font"
              onClick={() => window.open('#', '_blank')}
            >
              ADOPT YOUR BONKAT
            </Button>
          </div>

          {/* Rotating Hero Banner */}
          <RotatingBanner />



          {/* Scrolling text ticker */}
          <div className="text-hot-orange text-sm pixel-font animate-pulse">
            &gt; BONK OR DIE &gt; ENTER THE MATRIX &gt; PURE DEGENERACY &gt; PIXEL BY PIXEL &gt; WHISKER BY WHISKER &gt;
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;