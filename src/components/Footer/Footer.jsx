import React from "react";
import logo from "../../assets/images/logo.jpg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-content d-flex justify-content-between">
            <div className="footer-about-us">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="social">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="footer-support">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link to="/faq">
                    <i class="fa-solid fa-circle-question"></i>faq
                  </Link>
                </li>
                <li>
                  <a href="">
                    <i class="fa-regular fa-newspaper"></i> new article
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-solid fa-pen-nib"></i> privacy policy
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-solid fa-circle-exclamation"></i> terms &
                    condition
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-site">
              <h3>Site</h3>
              <ul>
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="">about</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
                <li>
                  <a href="">service</a>
                </li>
                <li>
                  <a href="">blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <div className="contact-content">
                <h3>contact</h3>
                <div className="phone">
                  <a>
                    <i class="fa-solid fa-phone"></i>
                    +212 641 45 45 26
                  </a>
                </div>
                <div className="email">
                  <a>
                    <i class="fa-solid fa-envelope"></i>
                    mernstack@gmail.com
                  </a>
                </div>
              </div>
              <div className="address-content">
                <h3>address</h3>
                <div className="address">
                  <a>
                    <i class="fa-solid fa-location-arrow"></i>
                    larache, morocco
                  </a>
                </div>
                <div className="times">
                  <a>
                    <i class="fa-solid fa-clock"></i>
                    07:00 am - 19:00pm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
