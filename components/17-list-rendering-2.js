import React from "react";

function Person({detail}) {
  return (
    <div>
      <p>
        Name : {detail.name}, I am {detail.age} years old and My id is{" "} {detail.id}
      </p>
    </div>
  );
}

export default Person;
