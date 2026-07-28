import { useLanguage } from "../contexts/LanguageContext";
import { Contact } from "../components/sections/Contact";
import { ThankYou } from "../components/thankyou";
import { Faq } from "../components/sections/Faq";
import { Navigation } from "../components/navigation";
import { PageMeta } from "../components/PageMeta";

export const ThankYouPage = ({ landingPageData }) => {
  const { language } = useLanguage();
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <PageMeta page="thankyou" />
      <Navigation data={landingPageData} />
      <ThankYou data={languageData.ThankYou} />
      <Faq data={languageData} />
      <Contact data={languageData} />
    </div>
  );
};
