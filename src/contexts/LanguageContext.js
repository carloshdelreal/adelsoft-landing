import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [language, setLanguage] = useState('en');

  // Extract language from URL path
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0];
    
    if (currentLang === 'en' || currentLang === 'es') {
      setLanguage(currentLang);
    } else {
      // If no language in URL, redirect to default (English)
      history.replace('/en');
    }
  }, [location.pathname, history]);

  const switchLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'es') {
      const currentPath = location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
      const newPath = `/${newLang}${pathWithoutLang}`;
      history.push(newPath);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    switchLanguage(newLang);
  };

  const value = {
    language,
    setLanguage: switchLanguage,
    toggleLanguage,
    switchLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
