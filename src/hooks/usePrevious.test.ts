import { renderHook } from "@testing-library/react"
import usePrevious from "./usePrevious"

test("usePrevious custom hook functioning",()=>{

     const {result, rerender} = renderHook(({value})=>usePrevious(value), {initialProps:{value:1}});

     expect(result.current).toBeUndefined();

     rerender({value:2});

     expect(result.current).toBe(1);
})