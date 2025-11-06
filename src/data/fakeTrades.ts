export interface Trade {
  id: string;
  date: string;
  pair: string;
  type: "LONG" | "SHORT";
  profit: number;
}

const cryptoPairs = [
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "BNB/USDT",
  "XRP/USDT",
  "ADA/USDT",
  "DOGE/USDT",
  "MATIC/USDT",
  "DOT/USDT",
  "AVAX/USDT",
];

export const generateRandomTrade = (): Trade => {
  const types: ("LONG" | "SHORT")[] = ["LONG", "SHORT"];
  const type = types[Math.floor(Math.random() * types.length)];
  const profit = (Math.random() * 10 - 2).toFixed(2); // -2% to +8%
  const pair = cryptoPairs[Math.floor(Math.random() * cryptoPairs.length)];
  
  const now = new Date();
  const date = new Date(now.getTime() - Math.random() * 3600000).toISOString();
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    date,
    pair,
    type,
    profit: parseFloat(profit),
  };
};

export const initialTrades: Trade[] = Array.from({ length: 10 }, generateRandomTrade);
