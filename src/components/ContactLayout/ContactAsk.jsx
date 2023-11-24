import React from "react";
import './contact-ask.css';






const ContactAsk = () => {
  return (
    <>
      <div className="contact-ask p-5">
        <h3 className="contact-title">Ask Us Anything</h3>
        <p className="contact-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <form className="form">
          <div className="input-group d-flex ">
            <input type="text" name="firstname" placeholder="first name" />
            <input type="text" name="lastname" placeholder="last name" />
            <input type="number" name="phone" placeholder="Phone number" />
            <input type="text" name="company" placeholder="Company Name" />
          </div>
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ContactAsk;
