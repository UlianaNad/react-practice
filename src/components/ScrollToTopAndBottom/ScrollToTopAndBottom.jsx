import React, { useRef } from "react";
import useFetch from "../Hooks/UseFetch";
import { Hourglass } from "react-loader-spinner";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  if (loading) {
    <Hourglass />;
  }
  if (error) {
    return <p>Please try again!</p>;
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h1 className="text-2xl">Scroll to top and bottom</h1>
      <p className="text-xl">This is the top section</p>
      <button
        onClick={handleScrollToBottom}
        className="p-3 m-3 bg-teal-400 text-yellow-100 rounded"
      >
        Scroll to bottom
      </button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li className="m-3" key={item.id}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
      <button
        onClick={handleScrollToTop}
        className="p-3 m-3 bg-teal-400 text-yellow-100 rounded"
      >
        Scroll to top
      </button>
      <div ref={bottomRef}></div>
      <p className="text-xl">This is the bottom section</p>
    </div>
  );
};

export default ScrollToTopAndBottom;
