import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMobileMenuClose();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-hot-orange/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="text-3xl pixel-title text-hot-orange animate-neon-pulse cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleHomeClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleHomeClick();
                }
              }}
              aria-label="Go to home page"
            >
              $BONKAT
            </div>
          </div>

          {/* Desktop Navigation & Social Icons */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#lore"
              className="text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font"
            >
              The Lore
            </a>
            <a
              href="#cats"
              className="text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font"
            >
              The Cats
            </a>
            <a
              href="#movement"
              className="text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font"
            >
              Movement
            </a>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-8">
              {/* Twitter/X */}
              <a 
                href="https://x.com/BonkKats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 shadow-orange p-1"
              >
                <img src="/lovable-uploads/510fed17-3367-4d77-a924-2eca25339b50.png" alt="X" className="w-8 h-8 object-contain" />
              </a>
              
              {/* DexScreener */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-crypto-gold/50 rounded-lg flex items-center justify-center hover:bg-crypto-gold hover:text-primary-foreground transition-all duration-300 shadow-gold p-1"
              >
                <img src="/lovable-uploads/e378a84a-a087-40e1-9bc2-238a260ab03b.png" alt="DexScreener" className="w-8 h-8 object-contain" />
              </a>
              
              {/* Magic Eden */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 shadow-orange p-1"
              >
                <img src="/lovable-uploads/95e3a1e0-77c3-4d44-af4c-c80d7e3c26d9.png" alt="Magic Eden" className="w-8 h-8 object-contain" />
              </a>
              
              {/* CoinGecko */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-crypto-gold/50 rounded-lg flex items-center justify-center hover:bg-crypto-gold hover:text-primary-foreground transition-all duration-300 p-1"
              >
                <img src="/lovable-uploads/53b5e87e-ec03-4cc3-97d2-e8cf55ff82e3.png" alt="CoinGecko" className="w-8 h-8 object-contain" />
              </a>
              
              {/* TikTok */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 p-1"
              >
                <img src="/lovable-uploads/2ef7035f-761c-4646-b3e5-747206462360.png" alt="TikTok" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="md:hidden pixel-font border-hot-orange/50 hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300"
              >
                <Menu className="h-4 w-4 mr-2" />
                MENU
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-matrix-black border-l border-hot-orange/30">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-2xl pixel-title text-hot-orange animate-neon-pulse">
                    $BONKAT
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMobileMenuClose}
                    className="text-foreground hover:text-hot-orange"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4 mb-8">
                  <button
                    onClick={() => scrollToSection('lore')}
                    className="text-left text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font text-lg py-2 border-b border-hot-orange/20"
                  >
                    The Lore
                  </button>
                  <button
                    onClick={() => scrollToSection('cats')}
                    className="text-left text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font text-lg py-2 border-b border-hot-orange/20"
                  >
                    The Cats
                  </button>
                  <button
                    onClick={() => scrollToSection('movement')}
                    className="text-left text-foreground hover:text-hot-orange transition-colors duration-300 pixel-font text-lg py-2 border-b border-hot-orange/20"
                  >
                    Movement
                  </button>
                </nav>

                {/* Mobile Social Media Icons */}
                <div className="mt-auto">
                  <h3 className="text-lg pixel-font text-hot-orange mb-4">Connect</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Twitter/X */}
                    <a 
                      href="https://x.com/BonkKats" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 shadow-orange p-2"
                    >
                      <img src="/lovable-uploads/510fed17-3367-4d77-a924-2eca25339b50.png" alt="X" className="w-8 h-8 object-contain" />
                    </a>
                    
                    {/* DexScreener */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-crypto-gold/50 rounded-lg flex items-center justify-center hover:bg-crypto-gold hover:text-primary-foreground transition-all duration-300 shadow-gold p-2"
                    >
                      <img src="/lovable-uploads/e378a84a-a087-40e1-9bc2-238a260ab03b.png" alt="DexScreener" className="w-8 h-8 object-contain" />
                    </a>
                    
                    {/* Magic Eden */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 shadow-orange p-2"
                    >
                      <img src="/lovable-uploads/95e3a1e0-77c3-4d44-af4c-c80d7e3c26d9.png" alt="Magic Eden" className="w-8 h-8 object-contain" />
                    </a>
                    
                    {/* CoinGecko */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-crypto-gold/50 rounded-lg flex items-center justify-center hover:bg-crypto-gold hover:text-primary-foreground transition-all duration-300 p-2"
                    >
                      <img src="/lovable-uploads/53b5e87e-ec03-4cc3-97d2-e8cf55ff82e3.png" alt="CoinGecko" className="w-8 h-8 object-contain" />
                    </a>
                    
                    {/* TikTok */}
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-card border border-hot-orange/50 rounded-lg flex items-center justify-center hover:bg-hot-orange hover:text-primary-foreground transition-all duration-300 p-2"
                    >
                      <img src="/lovable-uploads/2ef7035f-761c-4646-b3e5-747206462360.png" alt="TikTok" className="w-8 h-8 object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;