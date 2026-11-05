import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Courses from "./pages/Courses.jsx"


function App() {
  return (
   <>
   <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/courses">Courses</Link>
   </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
   </>
  )
}

export default App

//detyre: 
