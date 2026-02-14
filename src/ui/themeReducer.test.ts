import { themeReducer, type ThemeState } from "./themeReducer";


test("toggles theme from light to dark",()=>{
   
    const state:ThemeState = {theme:"light"};
   
    const next = themeReducer(state,{type:"TOGGLE_THEME"});
   
    expect(next.theme).toBe("dark");
})