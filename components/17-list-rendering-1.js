import React from "react";
import Person from "./17-list-rendering-2";

function NameList() {
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
  const List = brothers.map(detail => <Person key={detail.id} detail={detail} />)
  return <div>{List}</div>;
}

export default NameList;
