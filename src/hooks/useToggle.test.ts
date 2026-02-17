import { act, renderHook } from "@testing-library/react"
import useToggle from "./useToggle"

describe("useToggle",()=>{

    test("should use false as default value",()=>{
        const {result} = renderHook(()=>useToggle());
        expect(result.current.value).toBe(false);
    });

    test("shoudl toggle value",()=>{
        const {result} = renderHook(()=>useToggle(false));
        
        act(()=>{
            result.current.toggle();
        })

        expect(result.current.value).toBe(true);
    })

})