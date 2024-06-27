import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRate = ({ numberOfStars = 5 }) => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRate(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rate);
  };

  return (
    <div className="container mx-auto flex justify-around mt-5">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rate) ? "fill-yellow-400" : "fill-black"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRate;
