import { useState } from "react";

function Search({ setSearch }){
    const [pokemon, setPokemon] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        setSearch(pokemon)
    }
    return(
        <form onSubmit={(event) => {
            handleSubmit(event)
        }}>
            <input value={pokemon} onChange={(e) => {
                setPokemon(e.target.value)
            }}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;