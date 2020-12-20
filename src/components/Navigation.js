import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link nav-item" to="/">
        Home
      </Link>
      <Link className="nav-link nav-item" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
