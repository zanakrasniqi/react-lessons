import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page">
      <span className="label">GET TO KNOW US</span>
      <h1>About LearnHub</h1>

      <p className="description">
        We believe learning should be simple, practical and accessible.
        LearnHub is a place to explore technology and develop new skills.
      </p>

      <div className="about-box">
        <h2>Learning by doing.</h2>
        <p>
          Our approach combines clear explanations with practical
          exercises. From your first HTML page to your first React
          application, every step helps you move forward.
        </p>
      </div>

      <Link to="/" className="button">
        ← Back to Home
      </Link>
    </section>
  );
}

export default About;