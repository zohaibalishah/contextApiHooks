import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeContextProvider({ children }) {
  const [themedata, setThemedata] = useState({
    isLightTheme: false,
    dark: { ui: "#ddd", bg: "#eee", syntex: "#555" },
    light: { ui: "#333", bg: "#555", syntex: "#ddd" },
  });
  const toggleTheme = () =>
    setThemedata({ ...themedata, isLightTheme: !themedata.isLightTheme });
  return (
    <ThemeContext.Provider value={{ themedata, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
