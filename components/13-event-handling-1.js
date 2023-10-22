import React from "react";

function FunctionClick() {
  function clickevent() {
    console.log("Function clicked")
  }

  return (
    <div>
      <button onClick={clickevent}>Function</button>
    </div>
  );
}

export default FunctionClick;
