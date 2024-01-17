import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";

const Index = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default Index;
