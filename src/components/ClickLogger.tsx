import { memo } from "react"

interface Props{
    onClick: ()=>void
}


const ClickLogger = ({onClick}:Props)=>{

    console.log("ClickLogger rendered!")

    return(<>
        <button onClick={onClick}>Click Me</button>
    </>)
}

export default memo(ClickLogger);