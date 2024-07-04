import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus, FaPlus} from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleClick = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
    });
  };

  return (
    <li className="flex flex-col gap-2 mb-2 ml-3">
      <div className="flex gap-2">
        <p className="text-white">{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleClick(item.label)} className="cursor-pointer">
            {displayCurrentChildren[item.label] ? <FaMinus size={25} color="#fff"/> : <FaPlus size={25} color="#fff"/>}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
