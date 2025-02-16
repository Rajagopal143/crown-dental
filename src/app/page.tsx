"use client"
import { Footerdemo } from "@/components/ui/footer-section";
import { NavBar, NavItem } from "@/components/ui/tubelight-navbar";
import { Briefcase, FileText, HomeIcon, Phone, ServerCog, User } from "lucide-react";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import  ServiceSection  from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyyouChooseus";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#', icon: HomeIcon },
    { name: 'Services', url: '#service', icon: Briefcase },
    { name: 'Doctors', url: '#doctor', icon: FileText },
    { name: 'Treatments', url: '#', icon: ServerCog },
    { name: 'Contact', url: '#', icon: Phone }
  ]

  return (
    <>
      <Image src="/final_logo.jpg" width={70} height={70} alt="Logo" className="fixed top-4 left-4 z-20 p-2 bg-white rounded-lg" />
      <NavBar items={navItems} />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs/>
      <AboutSection />
      <TeamSection/>

      <Footerdemo />
    </>
  );
}
