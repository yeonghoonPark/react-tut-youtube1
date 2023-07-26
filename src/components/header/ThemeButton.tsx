import React, { useContext } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

import { Theme, ThemeContext } from "../../context/ThemeContext";

export default function ThemeButton() {
  const { theme } = useContext<Theme>(ThemeContext);

  return <SunIcon onClick={() => console.log(theme)} />;
}
