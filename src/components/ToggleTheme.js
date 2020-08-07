import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Switch from "react-switch";
function ToggleTheme() {
  const {themedata ,toggleTheme} = useContext(ThemeContext);
  const {isLightTheme}=themedata
  return (
    <>
      <span>Switch Theme </span>
      <Switch onChange={toggleTheme} checked={isLightTheme} />
    </>
  );
}

export default ToggleTheme;
