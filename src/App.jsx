import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Stats from '../components/Stats'
import Home from '../components/Home'

function App() {
  const [search, setSearch] = useState("")
  return (
    <>
      <Routes>
        <Route path='/' element={<Home search={search} setSearch={setSearch}/>}/>
        <Route path='/:name/stats' element={<Stats />}/>
      </Routes>
    </>
      
      
      
    
  )
}

export default App
