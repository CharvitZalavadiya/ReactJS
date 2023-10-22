import React from "react";

function Columns() {
  const items = [];

  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
            <h3>Title</h3>
            <p>{item.title}</p>
        </React.Fragment>
      ))}

      <td>Name</td>
      <td>CZ</td>
    </React.Fragment>
  );
}

export default Columns;
