import { memo } from "react"

interface Props{
    onClick: ()=>void
}


const ClickLogger = ({onClick}:Props)=>{

    console.log("ClickLogger rendered!")

    return(<>
        <button onClick={onClick}>Click Me Memo</button>
    </>)
}

export default memo(ClickLogger);