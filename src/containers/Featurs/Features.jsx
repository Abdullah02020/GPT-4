import React from "react";
import "./featurs.css";
import lady from "../../asstes/Feature Image.png";
const Features = () => {
  return (
    <div className="features flex section__padding" id="possibility">
      <img src={lady} alt="" />
      <div className="features-text">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default Features;
