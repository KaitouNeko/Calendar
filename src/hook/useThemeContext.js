import { useContext } from "react";
import { ThemeContext } from "@@containers";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext must be used with AppProvider!");
  return context;
}
