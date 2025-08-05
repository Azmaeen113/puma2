import React from 'react';

const CatsSection = () => {
  return (
    <section id="cats" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-hot-orange mb-6 animate-neon-pulse">
            THE CATS
          </h2>
          <div className="w-32 h-1 bg-gradient-fire mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-bold text-hot-orange mb-8">
              These aren't your girlfriend's cozy little kittens.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              These are <span className="text-neon-blue font-semibold">Solana-native, alpha-chasing, chart-watching beasts.</span>
              <br />
              They don't meow—they <span className="text-hot-orange font-bold">yowl when volume's dry</span> and <span className="text-crypto-gold font-bold">purr when the pump is live.</span>
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/50 border border-hot-orange/30 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-neon-blue mb-8 text-center">
              THEIR JOB?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-2xl font-bold text-crypto-gold">
                  To make every trader rich.
                </div>
                <div className="w-16 h-1 bg-crypto-gold mx-auto rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-hot-orange">
                  To bonk your bags into orbit.
                </div>
                <div className="w-16 h-1 bg-hot-orange mx-auto rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-hot-orange">
                  To become the next staple in your digital identity.
                </div>
                <div className="w-16 h-1 bg-hot-orange mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Expanded Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="col-span-2 md:col-span-2">
              <img 
                src="/lovable-uploads/62df90e5-8ee7-47f9-9408-fb303e267103.png" 
                alt="Alpha BONKAT"
                className="w-full h-64 object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/993b9dda-633d-4813-b8f0-9a2a591a078c.png" 
                alt="Chart Watcher BONKAT"
                className="w-full h-64 object-cover rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/6aa747a7-921c-4cf6-b9c9-e7cc50364dfd.png" 
                alt="Degen BONKAT"
                className="w-full h-64 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* New row with latest images */}
            <div>
              <img 
                src="/lovable-uploads/a06de617-aa42-4e27-9c68-8e3d0c208ef4.png" 
                alt="Soldier BONKAT"
                className="w-full h-48 object-cover rounded-xl shadow-blue hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/db2161b0-c841-4769-8ded-a40fa80aef5a.png" 
                alt="Combat BONKAT"
                className="w-full h-48 object-cover rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/ac2836e3-53a0-4e9a-8fc2-49ae1ebdcd73.png" 
                alt="Hat BONKAT"
                className="w-full h-48 object-cover rounded-xl shadow-orange hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/4d24d52e-9d6a-4259-aa49-1b8ddb0a9797.png" 
                alt="Worker BONKAT"
                className="w-full h-48 object-cover rounded-xl shadow-neon hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
              "From alleyway gamblers to rooftop snipers.
              <br />
              From degens staring at DexScreener all night to the ones who aped at 3am and made it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatsSection;