import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

function Pokemon ({ name }){
    const [pokeData, setPokeData] = useState([])
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const req = axios.create({
        baseURL: 'https://pokeapi.co/api/v2'
    })
   
    useEffect(() => {
        const fetchPokemon = async () => {
            try{
                const { data } = await req.get(`/pokemon/${name}`)
                const desc = await req.get(`/pokemon-species/${name}`)
                setDescription(desc.data.flavor_text_entries[0].flavor_text);
                setPokeData(data)
                setLoading(false)
                setError(null)
            }catch(err){
                setLoading(false)
                setError(err.message)
            }
            
        }
        fetchPokemon()

    },[name])

    if (!name) {
        return <h2>Search for the Pokémon you want to find.</h2>;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{`No such pokemon`}</h2>;
    }

    return(
        <PokemonCard pokeData={pokeData} description={description} name={name}/>
    )
}

export default Pokemon;