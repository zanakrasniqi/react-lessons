import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>, 
)

//browser router eshte nje komponent qe e rrethon aplikacionin 
// dhe e ben te mundur perdorimin e react router dom ne te gjitha komponentet e brendshme me marr rruge te ndryshme dhe me navigu neper to.
//by default eshte strict mode, qe do te thote qe react do te kontrolloj nese ka ndonje gabim ne kodin e aplikacionit dhe do te shfaq gabimin ne console.
