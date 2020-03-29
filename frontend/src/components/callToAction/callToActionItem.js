import React from "react";

export default props => (
  <div className="cta-item">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <img src={props.image.url} alt='na' />
  </div>
);