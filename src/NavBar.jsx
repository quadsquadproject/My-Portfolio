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
            <Link className="link-style" to="/">
              Home
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/about">
              About Me
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/resume">
              Resume
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/projects">
              Projects
            </Link>
          </button>
          <button>
            <Link className="link-style" to="/contact">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
