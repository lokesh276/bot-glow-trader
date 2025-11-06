import { motion, AnimatePresence } from "framer-motion";
import { Activity, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { initialTrades, generateRandomTrade, Trade } from "@/data/fakeTrades";

const LiveTradesSection = () => {
  const [trades, setTrades] = useState<Trade[]>(initialTrades);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((prevTrades) => {
        const newTrade = generateRandomTrade();
        const updatedTrades = [newTrade, ...prevTrades];
        return updatedTrades.slice(0, 10);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
          <div className="inline-flex items-center gap-2 mb-4">
            <Activity className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Live <span className="bg-gradient-primary bg-clip-text text-transparent">Trading Activity</span>
            </h2>
          </div>
          <p className="text-muted-foreground">Real-time trades executed by our AI bot</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 font-semibold text-sm border-b border-border">
              <div>Time</div>
              <div>Pair</div>
              <div>Type</div>
              <div className="text-right">P/L %</div>
            </div>

            {/* Trades List */}
            <div className="divide-y divide-border">
              <AnimatePresence initial={false}>
                {trades.map((trade) => (
                  <motion.div
                    key={trade.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-4 gap-4 p-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="text-sm text-muted-foreground">
                      {formatDate(trade.date)}
                    </div>
                    <div className="font-medium">{trade.pair}</div>
                    <div>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                          trade.type === "LONG"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {trade.type === "LONG" ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {trade.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <span
                        className={`font-semibold ${
                          trade.profit >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {trade.profit >= 0 ? "+" : ""}
                        {trade.profit}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTradesSection;
