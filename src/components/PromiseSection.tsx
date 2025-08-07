import React from 'react';
import { Button } from '@/components/ui/button';

const PromiseSection = () => {
  return (
    <section className="py-20 relative bg-gradient-matrix">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-5xl md:text-7xl pixel-title text-crypto-gold mb-16 animate-neon-pulse">
            THE PROMISE
          </h2>

          {/* Main Promise */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl font-bold text-hot-orange mb-8">
              $BONKAT is here to stake its pawprint in Solana history.
            </p>
            <div className="flex justify-center items-center space-x-8 text-xl md:text-2xl text-foreground/90">
              <span>One pixel at a time.</span>
              <span className="text-crypto-gold">•</span>
              <span>One trader at a time.</span>
            </div>
          </div>

          {/* Warning Section */}
          <div className="bg-card border-2 border-destructive/50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-destructive mb-8">
              AND IF YOU ROTATE?
            </h3>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground/90">
              <p>
                You better pray you find another pfp that makes you feel this <span className="text-hot-orange font-bold">alive</span>.
              </p>
              <p>
                Otherwise?
              </p>
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground space-y-2">
                <p>You'll just be another degen.</p>
                <p>Wallet empty. Timeline dry.</p>
                <p>And no BONKAT to come home to.</p>
              </div>
            </div>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <img 
              src="/lovable-uploads/d452feb1-186f-4b2f-bc2b-9ab8f2c30a1f.png" 
              alt="BONKAT Promise"
              className="w-full h-48 object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/lovable-uploads/764fae12-a29f-4de0-9541-5fd737beb0d8.png" 
              alt="Night BONKAT"
              className="w-full h-48 object-cover rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/lovable-uploads/89bc50a6-b7ce-4412-9929-086998d520d1.png" 
              alt="McBONKAT"
              className="w-full h-48 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Final CTA */}
          <div className="space-y-8">
            <div className="text-2xl md:text-3xl font-bold text-crypto-gold">
              The choice is yours, anon.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="default" size="xl" className="min-w-[250px] pixel-font">
                ADOPT YOUR BONKAT
              </Button>
              <Button variant="cyber" size="xl" className="min-w-[250px] pixel-font">
                JOIN THE PRIDE
              </Button>
            </div>

            <div className="text-sm text-muted-foreground font-mono mt-8">
              &gt; BECAUSE BONK CHANGED SOLANA &gt;
              <br />
              &gt; AND BONKAT IS GOING TO CHANGE HOW WE PFP &gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;