import React, { createContext, useEffect, useState } from "react";

const THEME_MODE_LIGHT = "light";
const THEME_MODE_DARK = "dark";

type ThemeMode = typeof THEME_MODE_LIGHT | typeof THEME_MODE_DARK;

export type Theme = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<Theme>({
  theme: THEME_MODE_LIGHT,
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeMode>(THEME_MODE_LIGHT);
  const toggleTheme = () =>
    setTheme((prev) =>
      prev === THEME_MODE_LIGHT ? THEME_MODE_DARK : THEME_MODE_LIGHT,
    );

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const updateTheme = (theme: ThemeMode) => {
  theme === THEME_MODE_DARK
    ? document.documentElement.classList.add(THEME_MODE_DARK)
    : document.documentElement.classList.remove(THEME_MODE_DARK);
};
