import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Trading Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Powered by Advanced AI Technology</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            AI Crypto Trading Bot
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              for Telegram
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUpVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Auto-trading 24/7 with smart AI algorithms. Maximize your profits while you sleep.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" className="group">
              Start for Free
              <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUpVariants}
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "50K+", label: "Active Users" },
              { value: "$100M+", label: "Trading Volume" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
