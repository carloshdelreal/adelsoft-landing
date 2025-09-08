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

  // Route mapping between languages
  const routeMapping = {
    'en': {
      'schedule': 'schedule',
      'thankyou': 'thankyou'
    },
    'es': {
      'schedule': 'agendar',
      'thankyou': 'gracias'
    }
  };

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
      const pathSegments = currentPath.split('/').filter(Boolean);
      
      // Remove language prefix
      const pathWithoutLang = pathSegments.slice(1).join('/');
      
      // Map the route to the new language
      let newRoute = '';
      if (pathWithoutLang) {
        // Find the current route in the current language mapping
        const currentLangRoutes = routeMapping[language];
        const newLangRoutes = routeMapping[newLang];
        
        // Find which route we're currently on
        const currentRoute = Object.keys(currentLangRoutes).find(
          key => currentLangRoutes[key] === pathWithoutLang
        );
        
        if (currentRoute && newLangRoutes[currentRoute]) {
          newRoute = newLangRoutes[currentRoute];
        } else {
          // If no mapping found, keep the same route
          newRoute = pathWithoutLang;
        }
      }
      
      const newPath = `/${newLang}${newRoute ? '/' + newRoute : ''}`;
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
