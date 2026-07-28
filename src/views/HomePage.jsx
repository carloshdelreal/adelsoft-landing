"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { landingPageData } from "@/lib/landingData";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/navigation";

export const HomePage = () => {
  const { language } = useLanguage();
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <Navigation data={landingPageData} />
      <Header data={languageData} />
      <Features data={languageData} />
      <About data={languageData} />
      <Services data={languageData} />
      <Gallery
        data={languageData.Gallery}
        description={languageData.GalleryDescription?.description}
      />
      <Testimonials data={languageData.Testimonials} />
      <Team
        data={languageData.Team}
        description={languageData.TeamDescription?.description}
      />
      <Contact data={languageData} />
    </div>
  );
};
