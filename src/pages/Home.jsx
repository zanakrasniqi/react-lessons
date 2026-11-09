import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <span className="label">WELCOME TO LEARNHUB</span>

      <h1>Small steps.<br />Big opportunities.</h1>

      <p className="description">
        Start your learning journey with practical courses.
        Discover new skills and build something you are proud of.
      </p>

      <Link to="/courses" className="button">
        Explore Courses →
      </Link>

      <div className="cards">
        <article className="card">
          <span className="number">01</span>
          <h3>Learn the basics</h3>
          <p>Clear lessons that help you understand each concept.</p>
        </article>

        <article className="card">
          <span className="number">02</span>
          <h3>Practice your skills</h3>
          <p>Turn what you learn into small, creative projects.</p>
        </article>

        <article className="card">
          <span className="number">03</span>
          <h3>Keep growing</h3>
          <p>Build confidence and take the next step at your own pace.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;