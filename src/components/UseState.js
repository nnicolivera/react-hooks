import { useState } from 'react';

export const UseState = () => {
    // Declare a state variable called "count" and initialize it to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
