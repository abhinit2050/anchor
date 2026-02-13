// src/ui/themeReducer.ts

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
}

export type ThemeAction = {
  type: "TOGGLE_THEME";
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};
