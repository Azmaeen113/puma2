import React from 'react';

const LoreSection = () => {
  return (
    <section id="lore" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl pixel-title text-hot-orange mb-6 animate-neon-pulse">
            THE LORE
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-2xl md:text-3xl pixel-tagline text-hot-orange mb-8">
              $BONKAT: The Lore of the First Bonkified Cats
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-foreground/90">
                Somewhere between the chaos of <span className="text-crypto-gold font-semibold">pump.fun</span> and the collapse of your last rug, the <span className="text-hot-orange font-bold">BONKATS</span> were born on BONK.
              </p>
              
              <p className="text-foreground/90">
                Pixel by pixel. Whisker by whisker. <span className="text-crypto-gold font-semibold">Engineered on Solana.</span> Forged in pure degeneracy.
              </p>
              
              <p className="text-foreground/90">
                They're not just cats. They're the first <span className="text-hot-orange font-bold">bonkified feline tribe</span>—sent here to claw through the bullshit, shred mediocrity, and flip every low-effort coin on your timeline.
              </p>
            </div>

            {/* Accent Image */}
            <div className="w-48 h-48 mx-auto lg:mx-0 mt-8">
              <img 
                src="/lovable-uploads/95b3b72d-53fc-4132-a0df-60a3b6c5fc3e.png" 
                alt="Matrix BONKAT"
                className="w-full h-full object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Enhanced Image Gallery with New Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/5fb3d239-dc43-4da8-8309-0db30a0fc343.png" 
                alt="BONKAT Character"
                className="w-full h-48 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/596e2a54-459c-46fb-b8fe-fc93c64aae5c.png" 
                alt="Red Cap BONKAT"
                className="w-full h-40 object-cover rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 pt-8">
              <img 
                src="/lovable-uploads/b44f7497-94a6-449e-a12a-d62301150a86.png" 
                alt="BONKAT Character"
                className="w-full h-40 object-cover rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/dcf77ab8-dc5a-4d74-a28a-7df86a3ef408.png" 
                alt="Matrix BONKAT"
                className="w-full h-48 object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 hidden md:block">
              <img 
                src="/lovable-uploads/0819507e-ee92-4c20-bd3c-29bc1f9ae46f.png" 
                alt="Matrix BONKAT Orange"
                className="w-full h-48 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/cb37bcc6-ad2f-4e89-ace3-4be4736f0c8a.png" 
                alt="Patriot BONKAT"
                className="w-full h-40 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl pixel-tagline text-crypto-gold italic border-l-4 border-hot-orange pl-8 py-4 max-w-4xl mx-auto">
            "BONK changed Solana. Now BONKAT is going to change how we PFP."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;