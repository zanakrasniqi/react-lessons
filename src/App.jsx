import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Repositories from './pages/Respositories'
import RepoDetails from './pages/RepoDetails'
import './App.css'



function App() {
  return (
    <div className='container' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/repos' element={<Repositories/>}/>
          <Route path='/repos/:username/:repoName' element={<RepoDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
//detyre shtepie me kriju nje mini aplikacion te dhenat mi marr prej linkut qe na e ka qu ne email8