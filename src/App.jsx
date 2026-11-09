import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        LearnHub · A little progress, every day.
      </footer>
    </>
  );
}

export default App;