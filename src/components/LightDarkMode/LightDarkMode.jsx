import React from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div>
      <div className={`w-screen h-screen bg-${theme  === "light" ? "white" : "black"}`}>
        <p className={`text-${theme  === "light" ? "black" : "white"}`}>Hello, world!</p>
        <button
          onClick={handleToggleTheme}
          className={`bg-${theme  === "light" ? "black" : "white"} text-${theme  === "light" ? "white" : "black"} font-bold py-2 px-4 border border-black rounded`}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
