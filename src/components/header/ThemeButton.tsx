import React, { useContext } from "react";
import SunIcon from "../icon/SunIcon";
import MoonIcon from "../icon/MoonIcon";

import { Theme, ThemeContext } from "../../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext<Theme>(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <SunIcon onClick={toggleTheme} />
      ) : (
        <MoonIcon onClick={toggleTheme} />
      )}
    </>
  );
}
