import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HomePage } from "./pages/HomePage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { Schedule } from "./pages/Schedule";
import JsonData from "./data/data.json";
import { processDataWithAssets } from "./utils/assetResolver";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

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
          <Route path="/en/thankyou" render={() => <ThankYouPage landingPageData={landingPageData} />} />
          <Route path="/en/schedule" render={() => <Schedule landingPageData={landingPageData} />} />
          
          {/* Spanish routes */}
          <Route exact path="/es" render={() => <HomePage landingPageData={landingPageData} />} />
          <Route path="/es/gracias" render={() => <ThankYouPage landingPageData={landingPageData} />} />
          <Route path="/es/agendar" render={() => <Schedule landingPageData={landingPageData} />} />
        </Switch>
      </LanguageProvider>
    </Router>
  );
};

export default App;
