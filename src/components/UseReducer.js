import { useReducer } from "react";

export const UseReducer = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { ...state, count: state.count + 1 };
            case 'decrement':
                return { ...state, count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}


