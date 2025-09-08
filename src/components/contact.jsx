import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Contact = ({ data }) => {
  const { language } = useLanguage();
  
  const getInTouchText = language === 'es' ? 'Ponte en Contacto' : 'Get In Touch';
  const contactDescription = language === 'es' 
    ? 'Haz clic en el botón de abajo para chatear con nosotros en WhatsApp. Te responderemos lo antes posible.'
    : 'Click the button below to chat with us on WhatsApp. We\'ll get back to you as soon as possible.';
  const chatWhatsAppText = language === 'es' ? 'Chatear en WhatsApp' : 'Chat on WhatsApp';
  const contactInfoText = language === 'es' ? 'Información de Contacto' : 'Contact Info';
  const addressText = language === 'es' ? 'Dirección' : 'Address';
  const phoneText = language === 'es' ? 'Teléfono' : 'Phone';
  const emailText = language === 'es' ? 'Correo' : 'Email';

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{getInTouchText}</h2>
                <p>{contactDescription}</p>
                <a 
                  href="https://wa.me/+573013088500" 
                  className="btn btn-custom btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chatWhatsAppText}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{contactInfoText}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {addressText}
                </span>
                {data?.Contact?.address || "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {phoneText}
                </span>{" "}
                {data?.Contact?.phone || "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {emailText}
                </span>{" "}
                {data?.Contact?.email || "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data?.Contact?.facebook || "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data?.Contact?.github || "/"}>
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data?.Contact?.linkedin || "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            <a href="https://adelsoft.com" rel="nofollow">
              &copy; 2023 Adelsoft Web Development.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
