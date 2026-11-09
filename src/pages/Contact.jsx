import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="page">
      <span className="label">LET’S CONNECT</span>
      <h1>Contact Us</h1>

      <p className="description">
        Want to know more about our courses?
        We would love to help you choose where to start.
      </p>

      <div className="cards">
        <article className="card">
          <h3>Course information</h3>
          <p>Discover course topics, learning goals and schedules.</p>
        </article>

        <article className="card">
          <h3>Learning support</h3>
          <p>Find guidance for your next step in web development.</p>
        </article>
      </div>

      <Link to="/about" className="button">
        More About Us →
      </Link>
    </section>
  );
}

export default Contact;