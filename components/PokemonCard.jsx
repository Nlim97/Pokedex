function PokemonCard({ pokeData, description }){
    return (
        <div className="pokeCard">
            <img src={pokeData.sprites.front_default}/>
            <h2>{pokeData.name}</h2>
            <p>{description}</p>
        
        </div>
    )

}

export default PokemonCard;

