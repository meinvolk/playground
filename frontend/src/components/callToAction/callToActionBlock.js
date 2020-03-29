import React from "react";
import CTAItem from "./callToActionItem"

export default props => (
  <div className="call-to-action">
    <hr />
    Call To Action component
    {props.block.callToActionItem.map(cta => CTAItem(cta))}
  </div>
);