import { useState, useEffect } from 'react';

export const UseEffect = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            setPokemonList(data.results);
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Pokemon List:</h2>
            <ul>
                {pokemonList.map(x => (
                    <li key={x.name}>{x.name}</li>
                ))}
            </ul>
        </>
    );
}; 
