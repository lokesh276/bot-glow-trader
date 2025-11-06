import { motion } from "framer-motion";
import { Users, Copy, CheckCheck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://cryptobot.ai/ref/ABC123XYZ";
  const totalReferrals = 47;
  const referralEarnings = 2847.5;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Earn with <span className="bg-gradient-primary bg-clip-text text-transparent">Referrals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Invite friends and earn rewards for every successful referral
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">Total Referrals</span>
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary"
                >
                  {totalReferrals}
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-6 h-6 text-secondary" />
                  <span className="text-sm text-muted-foreground">Total Earned</span>
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-secondary"
                >
                  ${referralEarnings}
                </motion.p>
              </motion.div>
            </div>

            {/* Referral Link */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Your Unique Referral Link</label>
              <div className="flex gap-2">
                <div className="flex-1 p-4 rounded-lg bg-muted/50 border border-border font-mono text-sm flex items-center">
                  <span className="truncate">{referralLink}</span>
                </div>
                <Button onClick={handleCopyLink} variant="default" className="gap-2">
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-6 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <p className="text-sm mb-4">
                Earn <span className="font-bold text-primary">10% commission</span> on every referral's first purchase
              </p>
              <Button variant="hero" size="lg" className="w-full md:w-auto">
                <Users className="w-4 h-4 mr-2" />
                Invite Friends Now
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralSection;
