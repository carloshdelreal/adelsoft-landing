import { useLanguage } from "../contexts/LanguageContext";
import { Header } from "../components/sections/Header";
import { Features } from "../components/sections/Features";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Gallery } from "../components/sections/Gallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";
import { ScheduleForm } from "../components/ScheduleForm";
import { Faq } from "../components/sections/Faq";
import { Navigation } from "../components/navigation";

export const HomePage = ({ landingPageData }) => {
  const { language } = useLanguage();
  
  // Get the selected language data object - this now contains ALL the data
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <ScheduleForm languageData={languageData} />
      <Faq data={languageData} />
      <Navigation data={landingPageData} />
      <Header data={languageData} />
      <Features data={languageData} />
      <About data={languageData} />
      <Services data={languageData} />
      <Gallery data={languageData.Gallery} description={languageData.Gallery?.description} />
      <Testimonials data={languageData.Testimonials} />
      <Team data={languageData.Team} description={languageData.Team?.description} />
      <Contact data={languageData} />
    </div>
  );
};