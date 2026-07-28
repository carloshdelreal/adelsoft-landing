import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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

const landingPageData = processDataWithAssets(JsonData);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route
              path="/en"
              element={<HomePage landingPageData={landingPageData} />}
            />
            <Route
              path="/en/thankyou"
              element={<ThankYouPage landingPageData={landingPageData} />}
            />
            <Route
              path="/en/schedule"
              element={<Schedule landingPageData={landingPageData} />}
            />
            <Route
              path="/es"
              element={<HomePage landingPageData={landingPageData} />}
            />
            <Route
              path="/es/gracias"
              element={<ThankYouPage landingPageData={landingPageData} />}
            />
            <Route
              path="/es/agendar"
              element={<Schedule landingPageData={landingPageData} />}
            />
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
