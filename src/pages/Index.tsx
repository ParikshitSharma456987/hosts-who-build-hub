import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
