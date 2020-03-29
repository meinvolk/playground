import React from "react";

export default props => (
  <div className="rich-text">
    <hr />
      <p>{props.block.content}</p>
  </div>
);