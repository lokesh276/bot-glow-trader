import { motion } from "framer-motion";
import { Wallet, TrendingUp, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WalletSection = () => {
  const walletData = {
    address: "0x742d...4f2A",
    balance: 12847.53,
    tokens: [
      { symbol: "BTC", amount: 0.5234, value: 21543.21, change: 5.2 },
      { symbol: "ETH", amount: 3.8421, value: 8921.45, change: 3.1 },
      { symbol: "SOL", amount: 45.2, value: 2382.87, change: -1.8 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your <span className="bg-gradient-primary bg-clip-text text-transparent">Wallet Overview</span>
            </h2>
            <p className="text-muted-foreground">Track your portfolio and manage your assets</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Connected Wallet</p>
                    <p className="font-mono font-semibold">{walletData.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total Balance</p>
                  <p className="text-2xl font-bold">${walletData.balance.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {walletData.tokens.map((token) => (
                  <motion.div
                    key={token.symbol}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-lg">{token.symbol}</span>
                      <TrendingUp
                        className={`w-4 h-4 ${
                          token.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {token.amount} {token.symbol}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">${token.value.toLocaleString()}</p>
                      <span
                        className={`text-xs font-medium ${
                          token.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {token.change > 0 ? "+" : ""}
                        {token.change}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="default" className="flex-1">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Buy Tokens
                </Button>
                <Button variant="outline" className="flex-1">
                  <ArrowDownToLine className="w-4 h-4 mr-2" />
                  Withdraw
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WalletSection;
