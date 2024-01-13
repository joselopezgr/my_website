import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";

const Index = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default Index;
