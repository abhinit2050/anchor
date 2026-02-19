import FocusDemo from "../dev/FocusDemo";
import MeasureDemo from "../dev/MeasureDemo";
import { useTheme } from "../ui/themeContext"
import Trial from "./Trial";

const Home = () => {

  const {state} = useTheme();


  return (
    <>
    <div>Home Page</div>
    <div>Current Theme: {state?.theme}</div>
      <FocusDemo />
      <MeasureDemo />
      <Trial />
      
    </>
  )
}

export default Home