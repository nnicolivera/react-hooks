import React, { useRef, useState } from 'react';

export const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Previous count: {countRef.current}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            {countRef.current = count}
        </div>
    );
}