import { useState, useMemo } from 'react';

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const double = useMemo(() => count * 2, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double: {double}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    );
}