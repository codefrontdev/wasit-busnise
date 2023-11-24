import React from "react";
import "./location-map.css";
import Title from "../Title/Title";

const LocationMap = () => {
  return (
    <>
      <div className="location-map py-5">
        <div className="container py-5">
          <Title
            h2={"Our Location"}
            prgh={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
          />
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1938.785647476361!2d-6.147469209467152!3d35.190628838410895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sma!4v1696673195352!5m2!1sar!2sma"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
