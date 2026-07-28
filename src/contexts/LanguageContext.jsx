import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  const routeMapping = {
    en: {
      schedule: "schedule",
      thankyou: "thankyou",
    },
    es: {
      schedule: "agendar",
      thankyou: "gracias",
    },
  };

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const currentLang = pathSegments[0];

    if (currentLang === "en" || currentLang === "es") {
      setLanguage(currentLang);
      document.documentElement.lang = currentLang;
    } else {
      navigate("/en", { replace: true });
    }
  }, [location.pathname, navigate]);

  const switchLanguage = (newLang) => {
    if (newLang === "en" || newLang === "es") {
      const pathSegments = location.pathname.split("/").filter(Boolean);
      const pathWithoutLang = pathSegments.slice(1).join("/");

      let newRoute = "";
      if (pathWithoutLang) {
        const currentLangRoutes = routeMapping[language];
        const newLangRoutes = routeMapping[newLang];
        const currentRoute = Object.keys(currentLangRoutes).find(
          (key) => currentLangRoutes[key] === pathWithoutLang
        );

        if (currentRoute && newLangRoutes[currentRoute]) {
          newRoute = newLangRoutes[currentRoute];
        } else {
          newRoute = pathWithoutLang;
        }
      }

      const newPath = `/${newLang}${newRoute ? "/" + newRoute : ""}`;
      navigate(newPath);
    }
  };

  const toggleLanguage = () => {
    switchLanguage(language === "en" ? "es" : "en");
  };

  const value = {
    language,
    setLanguage: switchLanguage,
    toggleLanguage,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
