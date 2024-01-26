import React from "react";

function Header() {
  return (
    <header className="header">
      {/* navbar */}
      <nav className="navbar">
      <a href="/">Welcome</a>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/projectGallery">Project Gallery</NavLink>
      </nav>
      {/* header */}
      <h1>Welcome to my portfolio!</h1>
    </header>
  );
}

export default Header;