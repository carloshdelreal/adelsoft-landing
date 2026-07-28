import { useLanguage } from "../contexts/LanguageContext";
import { ScheduleForm } from "../components/ScheduleForm";
import { Contact } from "../components/sections/Contact";
import { Navigation } from "../components/navigation";
import { PageMeta } from "../components/PageMeta";

export const Schedule = ({ landingPageData }) => {
  const { language } = useLanguage();
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <PageMeta page="schedule" />
      <Navigation data={landingPageData} />
      <ScheduleForm languageData={languageData} />
      <Contact data={languageData} />
    </div>
  );
};
