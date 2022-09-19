import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  const linkStyle = {
    color: "white",
  };

  return (
    <div className="nav">
      <nav>
        <p>Nav</p>
        <Link to={"/"} className="nav-links" style={linkStyle}>
          Home
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
