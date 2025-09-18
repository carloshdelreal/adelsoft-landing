import { useLanguage } from "../contexts/LanguageContext";
//import { HeaderSchedule } from "../components/headerSchedule";
import { BookingWidget } from "../components/BookingWidget";
//import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";

export const Schedule = ({ landingPageData }) => {
  const { language } = useLanguage();
  
  // Get the selected language data object - this now contains ALL the data
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <BookingWidget />
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