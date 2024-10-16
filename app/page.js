import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ProjectsSection } from "@/components/home/projects";
import { OfferSection } from "@/components/home/offer";
import { TeamSection } from "@/components/home/team";
import { SocialsSection } from "@/components/home/socials";
import { PartnersSection } from "@/components/home/partners";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <OfferSection />
      <TeamSection />
      <SocialsSection />
      <PartnersSection />
    </>
  );
}
