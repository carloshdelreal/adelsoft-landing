import { Image } from "./image";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Gallery = ({ data, description }) => {
  const { language } = useLanguage();
  
  const galleryText = language === 'es' ? 'Galería' : 'Gallery';

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{galleryText}</h2>
          <p>{description}</p>
        </div>
        <div className="portfolio-masonry">
          {data
            ? data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="portfolio-item-wrapper"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
