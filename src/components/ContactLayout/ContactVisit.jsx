import React from "react";
import "./contact-visit.css";

const ContactVisit = () => {
  return (
    <>
      <div className="contact-visit p-5">
        <h3 className="contact-title">Come visit us in Real time!</h3>
        <p className="contact-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="contact-location d-flex align-items-center p-4">
          <div className="icon">
            <i className="fa-solid fa-location-arrow"></i>
          </div>
          <div className="contact-location-text">
          <h4>Contact Us Wasit Business</h4>
          <span>larache, morocco, chaeeban 1</span>
          </div>
        </div>
        <div className="contact-message">
          <div className="phone d-flex align-items-center">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <span>+212 6 12 34 56 78</span>
          </div>
          <div className="email d-flex align-items-center">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <span>W9g1l@example.com</span>
          </div>
        </div>
        <a href="https://www.google.com/maps/@35.1906288,-6.1474692,17z/data=!4m2!7m1!2e1?entry=ttu">View Map</a>
      </div>
    </>
  );
};

export default ContactVisit;
