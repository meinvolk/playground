import React from "react";
import Slide from "./heroSlide"

export default props => (
  <div className="hero-carousel">
    <hr />
    Hero carousel component
    {props.block.slide.map(slide => Slide(slide))}
  </div>
);