"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { landingPageData } from "@/lib/landingData";
import { ScheduleForm } from "@/components/ScheduleForm";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/navigation";

export const Schedule = ({ locale }) => {
  const { language: contextLanguage } = useLanguage();
  const language = locale || contextLanguage;
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <Navigation data={landingPageData} />
      <ScheduleForm languageData={languageData} />
      <Contact data={languageData} />
    </div>
  );
};
