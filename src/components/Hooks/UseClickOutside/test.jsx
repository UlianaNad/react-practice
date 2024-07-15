import React, { useState, useRef } from "react";
import useOutsideClick from ".";

const UseOnClickOutsideTest = () => {
    const ref = useRef();
    useOutsideClick(ref, ()=>setShowContent(false))

  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div ref={ref} className="h-20 bg-yellow-200 p-4">
            <h1>This is random content</h1>
            <p>Please click outside of the block!</p>
        </div>
      ) : (
        <button className="button bg-green-300 mt-6 rounded p-2" onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
