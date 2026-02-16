import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <HeroVideo />

        {/* Sections below the hero removed as requested */}
      </main>

      <Footer />
    </div>
  );
}
