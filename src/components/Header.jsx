import React, { useEffect, useState } from "react";
import "./Header.css";
import image from "./WhatsApp Image 2024-10-17 at 8.30.42 PM.jpeg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveContainer, setIsActiveContainer] = useState(false);

  useEffect(() => {
    console.log("Setting active state");
    setIsActive(true);
  }, []);

  useEffect(() => {
    console.log("Setting active container state");
    setIsActiveContainer(true);
  }, []);

  return (
    <section>
      <div className="header-image">
        <div className="all-container">
          <div className={`card ${isActive ? "active" : ""}`}>
            <div className="img-container">
              <img src={image} alt="photo" />
            </div>
            <div className="name-container">
              <h2>Ramakrishna</h2>
              <p>Software Developer Engineer</p>
            </div>
          </div>

          <div
            className={`card-holder2 ${isActiveContainer ? "activate" : ""}`}
          >
            <span>Hello</span>
            <p>Here's who I am & what I do</p>
            <button>
              <a
                href="/Ramakrishna_resume.pdf"
                target="_blank"
                className="link-deco"
                download
              >
                Resume
              </a>
            </button>
            <button>
              <a
                href="https://github.com/orgs/quadsquadproject/repositories"
                className="link-deco"
              >
                Projects
              </a>
            </button>
            <div className="description-container">
              <p>
                I am a Software Development Engineer with expertise in building
                scalable and efficient web applications. My experience includes
                frontend development using React.js, with a focus on delivering
                seamless user experiences. Passionate about problem-solving and
                continuous learning, I thrive in dynamic, fast-paced
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
