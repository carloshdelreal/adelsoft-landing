import { useLanguage } from "../contexts/LanguageContext";
//import { HeaderSchedule } from "../components/headerSchedule";
import { ScheduleWidget } from "../components/ScheduleWidget";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Gallery } from "../components/sections/Gallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";

export const Schedule = ({ landingPageData }) => {
  const { language } = useLanguage();
  
  // Get the selected language data object - this now contains ALL the data
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <ScheduleWidget />
      {/* <HeaderSchedule data={languageData} /> */}
      {/* <Features data={languageData} /> */}
      <About data={languageData} />
      <Services data={languageData} />
      <Gallery data={languageData.Gallery} description={languageData.Gallery?.description} />
      <Testimonials data={languageData.Testimonials} />
      <Team data={languageData.Team} description={languageData.Team?.description} />
      <Contact data={languageData} />
    </div>
  );
};