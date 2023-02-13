import React, { useContext } from 'react';

const MyContext = React.createContext()

const Lvl1 = () => {
    return (
        <>
            <h1>Level 1</h1>
            <Lvl2 />
        </>
    )
}

const Lvl2 = () => {
    return (
        <>
            <h1>Level 2</h1>
            <Lvl3 />
        </>
    )
}

const Lvl3 = () => {
    return (
        <>
            <h1>Level 3</h1>
            <Lvl4 />
        </>
    )
}

const Lvl4 = () => {
    const context = useContext(MyContext);

    return (
        <>
            <h1>Level 4</h1>
            <small>In this level we access to context</small>
            <h3>{context.message}</h3>
        </>
    )
}

export const UseContext = () => {
    return (
        <MyContext.Provider value={{ message: 'Hello from context!' }}>
            <Lvl1 />
        </MyContext.Provider>
    )
}