import React from "react";
import TitlePage from "../../components/TitilePage/TitlePage";
import ContactLayout from "../../components/ContactLayout/ContactLayout";
import Support from "../../components/Support/Support";
import LocationMap from "../../components/LocationMap/LocationMap";

const Contact = () => {
  return (
    <>
      <div className="contact">
          <TitlePage
            data={{
              h2: "Contact Us Anytime",
              prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              path: "Contact",
            }}
          />
          <ContactLayout />
          <Support />
          <LocationMap />
      </div>
    </>
  );
};

export default Contact;
