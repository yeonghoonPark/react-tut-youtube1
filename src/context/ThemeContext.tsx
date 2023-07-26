import React, { createContext, useState } from "react";

type ThemeMode = "light" | "dark";

export type Theme = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<Theme>({
  theme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
