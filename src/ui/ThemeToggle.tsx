import { useTheme } from "./themeContext"


export default function ThemeToggle(){

    const {state, dispatch} = useTheme();

    return(
        <>
            <button onClick={()=>dispatch({type:"TOGGLE_THEME"})}>Toggle Theme</button>
            <h3>Current Theme:{state.theme}</h3>
        </>
    )
 
}