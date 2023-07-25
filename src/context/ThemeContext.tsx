import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ThemeMode = "light" | "dark";

type Theme = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({
  theme: "light" || "dark",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: Props) {
  let [theme, setTheme] = useState<ThemeMode>("light");
  const toggleTheme = () =>
    setTheme((prev) => (theme = prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
