import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from '../components/Pokemon'
import Search from '../components/Search'

function App() {
  const [search, setSearch] = useState("")

  return (
      
      <div className='main'>
        <h1>Pokedex</h1>
        <Search setSearch={setSearch}/>
        <Pokemon name={search}/>
      </div>
      
    
  )
}

export default App
