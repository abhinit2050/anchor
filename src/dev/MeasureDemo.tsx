import { useRef } from "react"

const MeasureDemo = ()=>{

    const boxRef=useRef<HTMLDivElement | null>(null)

    const logWidth = ()=>{
        console.log("box width is",boxRef?.current?.offsetWidth)
    }

    return(
        <>
              <div ref={boxRef} style={{ width: 200, height: 100 }} />
              <button onClick={logWidth}>Log Width</button>
        </>
    )
}

export default MeasureDemo