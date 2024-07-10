import React, { useContext } from "react";
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import TikTactToe from "../TikTactToe/TikTactToe";
import Accordion from "../Accordion";
import RandomColor from "../RandomColor";
import TreeView from "../TreeView/TreeView";
import { featureFlagsContext } from "./context";
import { Hourglass } from "react-loader-spinner";
import menus from "../TreeView/data";

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(featureFlagsContext);

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };

  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTikTacToeBoard",
      component: <TikTactToe />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];
  if (loading) {
    <Hourglass />;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
