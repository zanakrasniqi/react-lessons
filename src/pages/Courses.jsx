import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <section className="page">
      <span className="label">FIND YOUR NEXT SKILL</span>
      <h1>Our Courses</h1>

      <p className="description">
        Explore the foundations of web development, one course at a time.
      </p>

      <div className="cards">
        <article className="card">
          <span className="tag">BEGINNER</span>
          <h2>HTML & CSS</h2>
          <p>
            Learn how to structure web pages and bring them to life
            with colors, layouts and responsive design.
          </p>
          <span className="course-duration">4 weeks · Practical exercises</span>
        </article>

        <article className="card">
          <span className="tag">BEGINNER</span>
          <h2>JavaScript</h2>
          <p>
            Discover variables, functions and events to make your
            websites more interactive.
          </p>
          <span className="course-duration">6 weeks · Small projects</span>
        </article>

        <article className="card">
          <span className="tag">INTERMEDIATE</span>
          <h2>React</h2>
          <p>
            Build modern interfaces using components, props,
            state and page navigation.
          </p>
          <span className="course-duration">6 weeks · Final project</span>
        </article>
      </div>

      <Link to="/contact" className="button">
        Contact Us for More →
      </Link>
    </section>
  );
}

export default Courses;