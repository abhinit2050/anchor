import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "../ui/themeContext";
import { slowSum } from "../utils/slowSum"
import ClickLogger from "../components/ClickLogger";
import { Demo } from "../dev/Demo";
import usePrevious from "../hooks/usePrevious";

const Dashboard = () => {

  const {state} = useTheme();
  
  const result = useMemo (()=>slowSum(),[])
  const renderCount = useRef<number>(0);
  const prevTheme = useRef<string | null>(null);
   const prev = usePrevious(state.theme);

  useEffect(()=>{
    prevTheme.current = state.theme
  },[state.theme])

  useEffect(()=>{
    console.log("curent theme", state.theme);
    console.log("prev theme", prev);
  },[state.theme])

  renderCount.current += 1;

  const handleClick = useCallback(()=>{
    console.log("clicked!");
  },[])
  
  return (
    <>
    <div>Dashboard 1</div>
    <div>Theme:{state.theme}</div>
    <div>Slow sum:{result}</div>
    <ClickLogger onClick={handleClick}/>
    <Demo />
    </>
  )
}

export default Dashboard