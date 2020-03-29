import React from "react";

export default props => (
  <div className="hero-slide">
    <h2>{props.heroTitle}</h2>
    <img src={props.heroImage.url} alt='na' />
  </div>
);