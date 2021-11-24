import { useContext } from "react";
import { AppContext } from "@@containers";

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext must be used with AppProvider!");
  return context;
}
