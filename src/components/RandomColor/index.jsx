import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    setTypeOfColor("hex")
  };
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
    setTypeOfColor("rgb");
  };

  return (
    <div className="w-screen h-screen pt-3" style={{ background: color }}>
      <button
        onClick={()=>handleCreateRandomHexColor()}
        className="inline-flex items-center rounded-md bg-white px-3 py-3 ml-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Create HEX Color
      </button>
      <button
        onClick={()=>handleCreateRandomRgbColor()}
        className="inline-flex items-center rounded-md bg-white px-3 py-3 ml-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomRgbColor
            : handleCreateRandomHexColor
          
        }
        className="inline-flex items-center rounded-md bg-white px-3 py-3 ml-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Create Random Color
      </button>
      <div className="flex justify-center">
        <h3>{typeOfColor === "rgb" ? "RGB color " : "HEX color "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
