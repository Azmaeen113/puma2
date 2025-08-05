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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 animate-neon-pulse">
            <span className="text-hot-orange">$BONKAT</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-hot-orange">
            THE FIRST BONKIFIED CATS
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Solana-native pixel cats engineered in pure degeneracy.
            <br />
            <span className="text-neon-blue font-semibold">They don't meow—they yowl when volume's dry and purr when the pump is live.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="neon" 
              size="xl" 
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              BUY $BONKAT NOW
            </Button>
            <Button 
              variant="secondary" 
              size="xl" 
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              JOIN THE PRIDE
            </Button>
            <Button 
              variant="cyber" 
              size="xl" 
              className="min-w-[200px] cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              ADOPT YOUR BONKAT
            </Button>
          </div>

          {/* Rotating Hero Banner */}
          <RotatingBanner />

          {/* Secondary Hero Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/lovable-uploads/993b9dda-633d-4813-b8f0-9a2a591a078c.png" 
                alt="BONKAT Character"
                className="w-full h-32 object-cover rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="/lovable-uploads/6aa747a7-921c-4cf6-b9c9-e7cc50364dfd.png" 
                alt="BONKAT Character"
                className="w-full h-32 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
              <img 
                src="/lovable-uploads/95b3b72d-53fc-4132-a0df-60a3b6c5fc3e.png" 
                alt="Matrix BONKAT"
                className="w-full h-32 object-cover rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <img 
                src="/lovable-uploads/9fba653d-d2b9-4678-8ef4-a06cf8229ec3.png" 
                alt="Baseball BONKAT"
                className="w-full h-32 object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Scrolling text ticker */}
          <div className="text-hot-orange text-sm font-mono animate-pulse">
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