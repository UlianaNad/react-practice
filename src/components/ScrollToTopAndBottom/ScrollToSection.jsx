import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      label: "First card",
      style: {
        width: "w-full",
        heigth: "h-96",
        background: "bg-yellow-100",
      },
    },
    {
      label: "Second card",
      style: {
        width: "w-full",
        heigth: "h-96",
        background: "bg-yellow-200",
      },
    },
    {
      label: "Third card",
      style: {
        width: "w-full",
        heigth: "h-96",
        background: "bg-yellow-400",
      },
    },
    {
      label: "Fourth card",
      style: {
        width: "w-full",
        heigth: "h-96",
        background: "bg-yellow-600",
      },
    },
    {
      label: "Fifth card",
      style: {
        width: "w-full",
        heigth: "h-96",
        background: "bg-yellow-800",
      },
    },
  ];

  const handleScrollToSection = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <p className="text-xl">Scroll to a particular section</p>
      <button
        onClick={handleScrollToSection}
        className="p-3 m-3 bg-teal-400 text-yellow-100 rounded"
      >
        Click to scroll
      </button>
      {data.map((item, index) => (
        <div
          ref={index === 2 ? ref : null}
          className={`${item.style.width} ${item.style.heigth} ${item.style.background}`}
          key={item.label}
        >
          <p className="p-3 text-lg">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
