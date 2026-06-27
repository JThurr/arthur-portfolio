import {setRequestLocale} from "next-intl/server";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

type HomePageProps = {
  params: {
    locale: string;
  };
};

export default function HomePage({params}: HomePageProps) {
  // Habilita renderização estática para esta rota de locale
  setRequestLocale(params.locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
