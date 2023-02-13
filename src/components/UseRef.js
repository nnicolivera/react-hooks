import { useRef } from 'react';

export const UseRef = () => {
    const countRef = useRef(0);

    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    return (
        <>
            {/* updated value with each click */}
            {countRef.current}
            <button onClick={handle}>Click me</button>
        </>
    )
} 