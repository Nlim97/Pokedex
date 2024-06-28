import Pokemon from "./Pokemon";
import Search from "./Search";

function Home({search, setSearch}){
    return(
        <div className='main'>
          <h1>Pokedex</h1>
          <Search setSearch={setSearch}/>
          <Pokemon name={search}/>
      </div>
    )
}

export default Home;