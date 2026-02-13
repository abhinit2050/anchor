import { useTheme } from "../ui/themeContext"

const Home = () => {

  const {state} = useTheme();
  console.log("Current Theme in Home:", state);

  return (
    <>
    <div>Home Page</div>
    <div>Current Theme: {state?.theme}</div>
   
      </>
  )
}

export default Home