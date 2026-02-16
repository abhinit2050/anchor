import { useRef } from "react"

const FocusDemo = ()=>{

    const inputRef = useRef<HTMLInputElement|null>(null)

    return(
    <>
        <input type="text" ref={inputRef}/>
        <button onClick={()=>inputRef?.current?.focus()}>Focus</button>
    </>
    )
}

export default FocusDemo;