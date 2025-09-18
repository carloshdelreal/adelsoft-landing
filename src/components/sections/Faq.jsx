import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Faq = ({ data }) => {
  const { language } = useLanguage();

  console.log(data);
  if (!data || !data?.ThankYou?.faq?.title || !data?.ThankYou?.faq?.questions || !data?.ThankYou?.ctaText) {
    return "empty faq";
  }

  return (
    <div className="faq-section">
      <h2 className="text-center">{data.ThankYou.faq.title}</h2>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          {data.ThankYou.faq.questions.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4 className="faq-question">{faq.question}</h4>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <a href={`/${language}/#contact`} className="btn-custom btn-lg">
          {data?.ThankYou?.ctaText}
        </a>
      </div>
    </div>
  );
};
