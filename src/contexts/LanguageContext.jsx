"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

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

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname() || "/en/";

  const language = useMemo(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    return segment === "es" ? "es" : "en";
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const switchLanguage = (newLang) => {
    if (newLang !== "en" && newLang !== "es") return;

    const pathSegments = pathname.split("/").filter(Boolean);
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

    const newPath = `/${newLang}${newRoute ? "/" + newRoute : ""}/`;
    router.push(newPath);
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
