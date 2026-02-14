
import { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "./themeReducer";
import type{ThemeState, ThemeAction} from "./themeReducer";

interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") ?? "light",
};


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
  localStorage.setItem("theme", state.theme);
}, [state.theme]);


  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {

    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
