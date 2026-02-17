import useToggle from "../hooks/useToggle"

export const Demo = ()=>{

    const {value, toggle} = useToggle();

    return <div>
        <h4>Value:{value?"ON":"OFF"}</h4>
        <button onClick={toggle}>Toggle value</button>
    </div>
}