import React from "react";
import Tabs from "./Tabs";

function RandomComponent() {
  return <h1>Some random content.</h1>;
}
const tabs = [
  {
    label: "Tab1",
    content: <div>This content is for Tab1</div>,
  },
  {
    label: "Tab2",
    content: <div>This content is for Tab2</div>,
  },
  {
    label: "Tab3",
    content: <RandomComponent />,
  },
];

const TabTest = () => {
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }


  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
