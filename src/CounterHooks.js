import React, {useState} from "react";

export default function CounterHooks() {
    // 2. Declare a new state var
    const [count, setCount] = useState(0);

        return ( 
             <>
                <button onClick={() => setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </>
        )
}