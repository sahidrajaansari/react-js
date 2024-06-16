import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function useTheme() {
  return useContext(ThemeContext);
}
