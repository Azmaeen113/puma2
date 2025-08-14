import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-matrix-black border-t border-hot-orange/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl pixel-title text-hot-orange mb-4 animate-neon-pulse">
              $BONKAT
            </div>
            <p className="text-foreground/70 mb-4">
              The first bonkified cats on Solana. 
              <br />
              Pixel by pixel. Whisker by whisker. Forged in pure degeneracy.
            </p>
            <div className="text-sm text-muted-foreground">
              Contract Address: <span className="text-crypto-gold font-mono">3cmDoRSZ8fgfpkMV6BgKMk3uvXc6Me1Lyyeest9vbonk</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg pixel-font text-hot-orange mb-4">Navigate</h3>
            <div className="space-y-2">
              <a href="#lore" className="block text-foreground/70 hover:text-hot-orange transition-colors">The Lore</a>
              <a href="#cats" className="block text-foreground/70 hover:text-hot-orange transition-colors">The Cats</a>
              <a href="#movement" className="block text-foreground/70 hover:text-hot-orange transition-colors">The Movement</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-neon-blue mb-4 uppercase">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://x.com/BonkKats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-hot-orange transition-colors"
              >
                Twitter/X
              </a>
              <a 
                href="https://dexscreener.com/solana/gt5stsid5een4t96bvkpgrys8l1ndv9djb5lqmbbzgv2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-neon-blue transition-colors"
              >
                DexScreener
              </a>
              <a 
                href="https://magiceden.us/marketplace/8j76Sk14xUUwH3cALekScTRpBJXHR4gudREN4ab1BjLj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-hot-orange transition-colors"
              >
                Magic Eden
              </a>
              <a 
                href="https://www.geckoterminal.com/solana/pools/GT5STsiD5EEN4t96bVKpgRyS8L1nDV9djb5LqMBbZGV2?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-crypto-gold transition-colors"
              >
                CoinGecko
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground/70 hover:text-hot-orange transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hot-orange/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 BONKAT. All rights reserved. Built for degens, by degens.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <div className="text-muted-foreground">
              <span className="text-destructive">⚠️</span> High risk, high reward. DYOR.
            </div>
          </div>
        </div>

        {/* Matrix Code Footer */}
        <div className="mt-8 text-center">
          <div className="text-xs font-mono text-hot-orange/30 animate-pulse">
            01000010 01001111 01001110 01001011 01000001 01010100
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;