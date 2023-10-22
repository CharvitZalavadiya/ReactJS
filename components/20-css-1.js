import React from "react";
import "./20-style-1.css";

function StyleSheet(props) {
  let fcolor = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${fcolor} fsize`}>CSS with Multiple Classes</h1>
    </div>
  );
}

export default StyleSheet;
