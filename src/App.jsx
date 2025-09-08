import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { ThankYou } from "./components/thankyou";
import JsonData from "./data/data.json";
import { processDataWithAssets } from "./utils/assetResolver";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePage = ({ landingPageData }) => {
  const { language } = useLanguage();
  
  // Get the selected language data object - this now contains ALL the data
  const languageData = landingPageData?.languages?.[language] || {};

  return (
    <div>
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

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    // Process the raw data to resolve asset references
    const processedData = processDataWithAssets(JsonData);
    setLandingPageData(processedData);
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <Switch>
          {/* Redirect root to default language */}
          <Route exact path="/" render={() => <Redirect to="/en" />} />
          
          {/* English routes */}
          <Route exact path="/en" render={() => <HomePage landingPageData={landingPageData} />} />
          <Route path="/en/thankyou" render={() => <ThankYou data={landingPageData.languages?.en?.ThankYou} landingPageData={landingPageData} />} />
          
          {/* Spanish routes */}
          <Route exact path="/es" render={() => <HomePage landingPageData={landingPageData} />} />
          <Route path="/es/gracias" render={() => <ThankYou data={landingPageData.languages?.es?.ThankYou} landingPageData={landingPageData} />} />
        </Switch>
      </LanguageProvider>
    </Router>
  );
};

export default App;
