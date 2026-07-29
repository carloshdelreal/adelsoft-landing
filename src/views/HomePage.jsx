"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { landingPageData } from "@/lib/landingData";
import { Header } from "@/components/sections/Header";
import { Proof } from "@/components/sections/Proof";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/navigation";

export const HomePage = ({ locale }) => {
  const { language: contextLanguage } = useLanguage();
  const language = locale || contextLanguage;
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <Navigation data={landingPageData} />
      <Header data={languageData} />
      <Proof data={languageData} />
      <Services data={languageData} />
      <About data={languageData} />
      <Process data={languageData} />
      <Gallery
        data={languageData.Gallery}
        title={languageData.GalleryDescription?.title}
        description={languageData.GalleryDescription?.description}
      />
      <Team
        data={languageData.Team}
        title={languageData.TeamDescription?.title}
        description={languageData.TeamDescription?.description}
      />
      <HomeFaq data={languageData} />
      <Contact data={languageData} />
    </div>
  );
};
