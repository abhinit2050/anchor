import { useTheme } from "../ui/themeContext"

const Home = () => {

  const {state} = useTheme();


  return (
    <>
    <div>Home Page</div>
    <div>Current Theme: {state?.theme}</div>
   
      </>
  )
}

export default Home