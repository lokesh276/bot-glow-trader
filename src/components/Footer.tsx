import { Bot, Send, FileText, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Trading Bots", href: "#bots" },
      { name: "Referral Program", href: "#referral" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CryptoBot AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced AI-powered trading bot for Telegram. Trade smarter, not harder.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Documentation"
              >
                <FileText className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 CryptoBot AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Trading involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
