import React from "react";
import ContactVisit from "./ContactVisit";
import ContactAsk from "./ContactAsk";
import './contact-layout.css';

const ContactLayout = () => {
  return (
    <>
      <div className="contact-use py-5">
        <div className="container d-flex">
          <ContactVisit />
          <ContactAsk />
        </div>
      </div>
    </>
  );
};

export default ContactLayout;
