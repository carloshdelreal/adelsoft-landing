import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const Contact = ({ data }) => {
  const { language } = useLanguage();
  
  // Get contact data from the language-specific data
  const contactData = data?.Contact || {};
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{contactData.title || "Schedule a Call"}</h2>
                <p>{contactData.description || "Click the button below to schedule a free consultation with our team."}</p>
                <a 
                  href={`/${language}/${language === 'es' ? 'agendar' : 'schedule'}`} 
                  className="btn btn-custom btn-lg"
                >
                  {contactData.buttonText || "Schedule Consultation"}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{contactData.contactInfoTitle || "Contact Info"}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {contactData.addressLabel || "Address"}
                </span>
                {contactData.address || "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {contactData.phoneLabel || "Phone"}
                </span>{" "}
                {contactData.phone || "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {contactData.emailLabel || "Email"}
                </span>{" "}
                {contactData.email || "loading"}
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
