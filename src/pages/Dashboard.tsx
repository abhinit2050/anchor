import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "../ui/themeContext";
import { slowSum } from "../utils/slowSum"
import ClickLogger from "../components/ClickLogger";

const Dashboard = () => {

  const {state} = useTheme();
  
  const result = useMemo (()=>slowSum(),[])
  const renderCount = useRef<number>(0);
  const prevTheme = useRef<string | null>(null);

  useEffect(()=>{
    prevTheme.current = state.theme
  },[state.theme])

  renderCount.current += 1;

  console.log("Dashboard renders", renderCount.current);
  console.log("Prev theme:", prevTheme.current);
  console.log("Current theme:", state.theme);


  const handleClick = useCallback(()=>{
    console.log("clicked!");
  },[])
  
  return (
    <>
    <div>Dashboard 1</div>
    <div>Theme:{state.theme}</div>
    <div>Slow sum:{result}</div>
    <ClickLogger onClick={handleClick}/>
    </>
  )
}

export default Dashboard