import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <span className="brand">React Homework</span>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/comments">Comments</NavLink>
          <NavLink to="/images">Images</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
