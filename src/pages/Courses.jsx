import React from 'react'
import { Link } from 'react-router-dom'


function Courses() {
  return (
    <div>
       <h1>Courses</h1>
       <button>
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  )
}

export default Courses