import { useEffect, useState } from "react";
import FocusDemo from "../dev/FocusDemo";
import MeasureDemo from "../dev/MeasureDemo";
import { useDebounce } from "../hooks/useDebounce";
import { useTheme } from "../ui/themeContext"

const Home = () => {

  const {state} = useTheme();
  const [searchVal, setSearchVal] = useState<string>("");

  const debouncedValue = useDebounce(searchVal, 300);

 
    console.log("Immediate value", searchVal);
  console.log("Debounced value", debouncedValue);
 
  useEffect(() => {
  if (!debouncedValue) return;

  console.log("🔥 API call with:", debouncedValue);
}, [debouncedValue]);
  

  return (
    <>
      <div>Home Page</div>
      <div>Current Theme: {state?.theme}</div>
      <FocusDemo />
      <MeasureDemo />
      <input
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Debounce demo"
      />
    </>
  );
}

export default Home