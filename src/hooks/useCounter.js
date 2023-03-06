
import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const sum = (value)=> setCounter(counter + value);
    const reset = ()=> setCounter(initialValue);

    return {
        counter,
        sum,
        reset,
    }
}
