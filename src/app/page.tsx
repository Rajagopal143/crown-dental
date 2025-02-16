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
import ContactNow from "@/components/ContactUs";

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#home', icon: HomeIcon },
    { name: 'Services', url: '#service', icon: Briefcase },
    { name: 'Doctors', url: '#doctor', icon: FileText },
    { name: 'About us', url: '#aboutus', icon: ServerCog },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]

  return (
    <>
      <Image src="/final_logo.jpg" width={70} height={70} alt="Logo" className="fixed top-4 left-4 z-20 p-2 bg-white rounded-lg" />
      <NavBar items={navItems} />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs/>
      <TeamSection/>
      <AboutSection />
      <ContactNow/>

      <Footerdemo />
    </>
  );
}
