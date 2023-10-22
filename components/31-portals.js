import React from "react";
import ReactDOM from "react-dom";

function Portals() {
  return ReactDOM.createPortal(
    <div>
      <h1>Portal Code</h1>, document.getElementById('portal-root')
    </div>
  );
}

export default Portals;
