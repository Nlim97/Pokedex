import { useNavigate } from "react-router-dom";

function PokemonCard({ pokeData, description, name }){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/${name}/stats` ,{state:{data: pokeData}})
    }
    console.log(pokeData)
    return (
        <div className="pokeCard">
            <img src={pokeData.sprites.other.dream_world.front_default}/>
            <h2>{pokeData.name}</h2>
            <div className="types">{pokeData.types.map((type) => <p>{type.type.name}</p>)}</div>
            <p>{description}</p>
            <button onClick={handleClick}>Stats</button>
        </div>
    )

}

export default PokemonCard;

