import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Home</h1>

      <button>
        <Link to="/courses">Go to Courses</Link>
      </button>
    </div>
  );
}

export default Home;
