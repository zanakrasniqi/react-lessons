import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <h1>Welcome to GitHub</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to="/repos">Explore Repositories</Link>
    </div>
  )
}

export default Home