import { useState, useCallback } from "react";

export const UseCallback = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => setCount(c => c + 1), [setCount]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    );
}