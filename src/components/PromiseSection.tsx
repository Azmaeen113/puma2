import React from 'react';
import { Button } from '@/components/ui/button';

const PromiseSection = () => {
  return (
    <section className="py-20 relative bg-gradient-matrix">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-5xl md:text-7xl pixel-title text-crypto-gold mb-16 animate-neon-pulse">
            THE MEME DESTINY
          </h2>

          {/* Main Promise */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl font-bold text-hot-orange mb-8 pixel-font">
              $PUMAS is here to stake its pawprint in Solana history.
            </p>
            <div className="flex justify-center items-center space-x-8 text-xl md:text-2xl text-foreground/90">
              <span>One pump at a time.</span>
              <span className="text-crypto-gold pixel-font">•</span>
              <span>One hunter at a time.</span>
            </div>
          </div>

          {/* Warning Section */}
          <div className="bg-card border-2 border-destructive/50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-destructive mb-8">
              AND IF YOU SELL EARLY?
            </h3>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground/90">
              <p>
                You better pray you find another coin that makes you feel this <span className="text-hot-orange font-bold pixel-font">alive</span>.
              </p>
              <p>
                Otherwise?
              </p>
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground space-y-2">
                <p>You'll just be another degen.</p>
                <p>Wallet empty. Charts dry.</p>
                <p>And no Pumas to hunt with.</p>
              </div>
            </div>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <img
              src="/new images/photo_2025-08-22_09-30-27.jpg"
              alt="Puma Promise"
              className="w-full aspect-square object-contain rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/new images/photo_2025-08-22_09-30-32.jpg"
              alt="Night Puma"
              className="w-full aspect-square object-contain rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/new images/photo_2025-08-22_09-30-43.jpg"
              alt="Moon Puma"
              className="w-full aspect-square object-contain rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Final CTA */}
          <div className="space-y-8">
            <div className="text-2xl md:text-3xl font-bold text-crypto-gold pixel-font">
              The choice is yours, hunter.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="default" size="xl" className="min-w-[250px] pixel-font">
                ADOPT YOUR PUMA
              </Button>
              <Button variant="cyber" size="xl" className="min-w-[250px] pixel-font">
                JOIN THE JUNGLE
              </Button>
            </div>

            <div className="text-sm text-muted-foreground font-mono mt-8">
              &gt; BECAUSE PUMPFUN CHANGED SOLANA &gt;
              <br />
              &gt; AND PUMAS ARE GOING TO CHANGE HOW WE HUNT &gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;