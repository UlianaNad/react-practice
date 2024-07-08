import React, { useState } from "react";
import { LiaAcquisitionsIncorporated } from "react-icons/lia";

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
  
    const handleOnClick = (index) => {
      setCurrentTabIndex(index);
      onChange(index);
    };
  
 
    return (
      <div className="wrapper w-full">
        <ul className="flex justify-center gap-2">
          {tabsContent.map((tabItem, index) => (
            <li 
              onClick={() => handleOnClick(index)} 
              key={index}
            >
              <button className="button bg-gray-300 px-4 py-2 rounded-md opacity-50 mt-2  focused:bg-green-300 hover:bg-green-300">{tabItem.label}</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-3">
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
    );
  };
export default Tabs;
