import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "../ui/themeContext";
import { slowSum } from "../utils/slowSum"
import ClickLogger from "../components/ClickLogger";
import { Demo } from "../dev/Demo";
import usePrevious from "../hooks/usePrevious";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment } from "../features/dashboard/dashboardSlice";

const Dashboard = () => {

  const {state} = useTheme();

  const dispatch = useAppDispatch();
  const count = useAppSelector((state)=>state.dashboard.count);


  
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
    <p>Count: {count}</p>
    <button onClick={() => dispatch(increment())}>
      Increment by Redux
    </button>
    <div>
       <ClickLogger onClick={handleClick}/>
    </div>
   
    <Demo />
    </>
  )
}

export default Dashboard