import React from "react";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="header-container">
        <div className="name-header">
          <div className="box"></div>
          <h1>Ramakrishna M U /</h1>
          <h3>Software Developer Engineer</h3>
        </div>
        <div className="btn-header">
          <button>
            <Link className="link-style" to="/about">
              <span>About Me</span>
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/resume">
              <span>Resume</span>
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/projects">
              <span>Project</span>
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/contact">
              <span>Contact</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
