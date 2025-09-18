import { useLanguage } from "../contexts/LanguageContext";
// import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import { ThankYou } from "../components/thankyou";
import { Faq } from "../components/sections/Faq";

export const ThankYouPage = ({ landingPageData }) => {
  const { language } = useLanguage();

  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
      <ThankYou data={languageData.ThankYou} />
      <Faq data={languageData} />
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