import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { packagesData } from "@/data/packages";

const PackagesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Select the perfect package for your trading journey
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packagesData.map((pkg) => (
            <motion.div key={pkg.id} variants={cardVariants}>
              <Card
                className={`p-8 h-full flex flex-col relative overflow-hidden hover:scale-105 transition-transform duration-300 ${
                  pkg.popular
                    ? "border-primary/50 shadow-glow bg-card/80"
                    : "border-border bg-card/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-primary text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                    <span className="text-muted-foreground">/ {pkg.duration} days</span>
                  </div>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {pkg.popular && <Sparkles className="w-4 h-4 mr-2" />}
                  Choose Plan
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
