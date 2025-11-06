import { motion } from "framer-motion";
import { Package, Clock, TrendingUp, RefreshCw, ArrowUp, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MyPackagesSection = () => {
  const activePackages = [
    {
      id: 1,
      name: "Professional",
      daysLeft: 18,
      totalDays: 30,
      tokensEarned: 245.5,
      profit: 1234.87,
      profitPercent: 12.3,
    },
    {
      id: 2,
      name: "Starter",
      daysLeft: 5,
      totalDays: 20,
      tokensEarned: 89.2,
      profit: 456.32,
      profitPercent: 8.7,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Active <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-muted-foreground">Monitor your trading packages and earnings</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-6"
        >
          {activePackages.map((pkg) => {
            const progressPercent = ((pkg.totalDays - pkg.daysLeft) / pkg.totalDays) * 100;
            
            return (
              <motion.div key={pkg.id} variants={itemVariants}>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side - Package Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <Package className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{pkg.name} Package</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {pkg.daysLeft} days remaining
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Time Progress</span>
                            <span className="font-medium">
                              {pkg.totalDays - pkg.daysLeft} / {pkg.totalDays} days
                            </span>
                          </div>
                          <Progress value={progressPercent} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="p-3 rounded-lg bg-muted/50">
                            <p className="text-xs text-muted-foreground mb-1">Tokens Earned</p>
                            <p className="text-lg font-bold text-primary">{pkg.tokensEarned}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-muted/50">
                            <p className="text-xs text-muted-foreground mb-1">Total Profit</p>
                            <div className="flex items-center gap-1">
                              <p className="text-lg font-bold text-green-500">
                                ${pkg.profit}
                              </p>
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Actions */}
                    <div className="flex flex-col justify-between">
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                          <ArrowUp className="w-4 h-4 text-green-500" />
                          <span className="text-green-500 font-semibold">
                            +{pkg.profitPercent}% ROI
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button variant="default" className="w-full">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Renew Package
                        </Button>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            <ArrowUp className="w-4 h-4 mr-2" />
                            Upgrade
                          </Button>
                          <Button variant="outline" size="sm">
                            <ArrowDownToLine className="w-4 h-4 mr-2" />
                            Withdraw
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MyPackagesSection;
