import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-hot-orange/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="text-3xl font-bold text-hot-orange animate-neon-pulse cursor-pointer hover:scale-105 transition-transform duration-300"
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

          {/* Navigation & Social Icons */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#lore" 
              className="text-foreground hover:text-hot-orange transition-colors duration-300 uppercase tracking-wider font-semibold"
            >
              The Lore
            </a>
            <a 
              href="#cats" 
              className="text-foreground hover:text-hot-orange transition-colors duration-300 uppercase tracking-wider font-semibold"
            >
              The Cats
            </a>
            <a 
              href="#movement" 
              className="text-foreground hover:text-hot-orange transition-colors duration-300 uppercase tracking-wider font-semibold"
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

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="md:hidden pixel-font">
            MENU
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;