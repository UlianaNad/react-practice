import React from "react";

const Suggesstions = ({ data, handleClick }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index} onClick={handleClick}>{item}</li>
      ))}
    </ul>
  );
};

export default Suggesstions;
