import React from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LoreSection from '@/components/LoreSection';
import NameSection from '@/components/NameSection';
import CatsSection from '@/components/CatsSection';
import ArtSection from '@/components/ArtSection';
import MovementSection from '@/components/MovementSection';
import PromiseSection from '@/components/PromiseSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-matrix text-foreground relative overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <LoreSection />
        <NameSection />
        <CatsSection />
        <ArtSection />
        <MovementSection />
        <PromiseSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-fire text-primary-foreground px-6 py-3 rounded-full pixel-font shadow-orange hover:scale-110 transition-transform duration-300 animate-float">
          Buy $BONKAT
        </button>
      </div>
    </div>
  );
};

export default Index;
