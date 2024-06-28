import { useNavigate } from "react-router-dom";

function PokemonCard({ pokeData, description, name }){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/${name}/stats` ,{state:{data: pokeData}})
    }
    return (
        <div className="pokeCard">
            <img src={pokeData.sprites.other.dream_world.front_default}/>
            <h2>{pokeData.name}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Stats</button>
        </div>
    )

}

export default PokemonCard;

