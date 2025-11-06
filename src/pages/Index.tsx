import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WalletSection from "@/components/WalletSection";
import PackagesSection from "@/components/PackagesSection";
import MyPackagesSection from "@/components/MyPackagesSection";
import ReferralSection from "@/components/ReferralSection";
import LiveTradesSection from "@/components/LiveTradesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WalletSection />
      <PackagesSection />
      <MyPackagesSection />
      <ReferralSection />
      <LiveTradesSection />
      <Footer />
    </div>
  );
};

export default Index;
