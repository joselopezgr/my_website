"use client";
import { useEffect } from "react";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import { HiArrowDown } from "react-icons/hi";
import Footer from "@/components/footer";
import { Fade, Slide } from "react-awesome-reveal";

const Index = () => {
  return (
    <main className="mx-auto max-w-12xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <HeroSection />
      <div
        className="remaining-part flex flex-row items-center text-center justify-center"
        style={{ color: "#d66853" }}
      >
        <HiArrowDown size={35} className="animate-bounce" />
      </div>
      <Slide duration={2200} triggerOnce delay={300}>
        <AboutSection />
      </Slide>
      <Slide direction="right" duration={2200} triggerOnce delay={300}>
        <ProjectSection />
      </Slide>
      <Slide duration={2200} triggerOnce delay={300}>
        <ContactSection />
      </Slide>
      <Footer />
    </main>
  );
};

export default Index;
