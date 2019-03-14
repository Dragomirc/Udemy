import React from "react";

const person = ({ name, age, children, click }) => {
  return (
    <div>
      <p>
        I'm {name}, and {age} years old
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
