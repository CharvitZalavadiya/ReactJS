import React from "react";

function NameList() {
  const ids = ["Chintan", "Charvit", "Tilak", "Mihir", "Tanmay", "Charvit"];
  const brothers = [
    {
      id: 1,
      name: "Chintan",
      age: 14,
    },
    {
      id: 2,
      name: "Charvit",
      age: 19,
    },
    {
      id: 3,
      name: "Tilak",
      age: 21,
    },
    {
      id: 4,
      name: "Mihir",
      age: 23,
    },
    {
      id: 5,
      name: "Tanmay",
      age: 23,
    },
  ];
  const List = ids.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{List}</div>;
}

export default NameList;
