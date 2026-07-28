"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { landingPageData } from "@/lib/landingData";
import { Contact } from "@/components/sections/Contact";
import { ThankYou } from "@/components/thankyou";
import { Faq } from "@/components/sections/Faq";
import { Navigation } from "@/components/navigation";

export const ThankYouPage = ({ locale }) => {
  const { language: contextLanguage } = useLanguage();
  const language = locale || contextLanguage;
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <Navigation data={landingPageData} />
      <ThankYou data={languageData.ThankYou} />
      <Faq data={languageData} />
      <Contact data={languageData} />
    </div>
  );
};
