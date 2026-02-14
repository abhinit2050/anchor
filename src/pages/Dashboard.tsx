import { useCallback, useMemo } from "react";
import { useTheme } from "../ui/themeContext";
import { slowSum } from "../utils/slowSum"
import ClickLogger from "../components/ClickLogger";

const Dashboard = () => {

  const {state} = useTheme();
  
  const result = useMemo (()=>slowSum(),[])

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