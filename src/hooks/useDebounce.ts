import { useEffect,  useState } from "react"


export const useDebounce = <T>(value:T, delay:number):T=>{
   
    const [debouncedValue, setDebo8uncedValue] = useState(value);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebo8uncedValue(value)
        },delay)

        return ()=>{clearTimeout(timerId)}
    },[value, delay])

    return debouncedValue;

}