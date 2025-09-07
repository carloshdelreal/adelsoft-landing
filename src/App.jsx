import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePage = ({ landingPageData }) => (
  <div>
    <Navigation />
    <Header data={landingPageData.Header} />
    <Features data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <Gallery data={landingPageData.Gallery} description={landingPageData.GaleryDescription} />
    <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team} description={landingPageData.TeamDescription} />
    <Contact data={landingPageData.Contact} />
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePage landingPageData={landingPageData} />} />
        <Route path="/thankyou" render={() => <ThankYou data={landingPageData.ThankYou} landingPageData={landingPageData} />} />
      </Switch>
    </Router>
  );
};

export default App;
