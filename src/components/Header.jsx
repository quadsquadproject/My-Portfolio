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
    <div>
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
                  I am a Software Development Engineer with expertise in
                  building scalable and efficient web applications. My
                  experience includes frontend development using React.js, with
                  a focus on delivering seamless user experiences. Passionate
                  about problem-solving and continuous learning, I thrive in
                  dynamic, fast-paced environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="work-experience-container">
          <h2>Work Experience</h2>
          <div className="work-experience-container-all">
            <div className="bluestock-fintech-container">
              <h2>Frontend Developer Engineer at BlueStock Fintech</h2>
              <br />
              <h3>
                Bluestock is mobile app for stock market content, analytics, and
                community.
              </h3>
              <p>
                We are passionate about helping you succeed in the stock market
                by providing cutting-edge tools, Learning resources and a
                supportive community of traders. Join us on this journey, and
                let's make your stock trading experience better.
              </p>
              <br />
              <br />
              <br />
              <br />
              <h3>My Role and Contributions:</h3>
              <p>
                Contributed into software part in Developing responsive and
                intuitive user interfaces using React.js to ensure a smooth user
                experience across fintech applications.
                <br />
                Collaborating with backend teams to integrate APIs, ensuring
                data-driven functionality and performance.
                <br />
                Implementing best practices for code optimization, leading to
                faster load times and improved application efficiency.
              </p>
            </div>
            <div className="bluestock-fintech-container">
              <h2>Software Engineer at Bharat Electronics Limited</h2>
              <br />
              <h3>
                Bharat Electronics Limited (BEL): A leading defense and
                aerospace electronics company in India.
              </h3>
              <p>
                Bharat Electronics Limited (BEL) is a leading Indian public
                sector enterprise under the Ministry of Defence, specializing in
                the design, development, and production of advanced electronic
                products for defense and civilian applications. Renowned for its
                cutting-edge technology solutions, BEL plays a pivotal role in
                strengthening India's defense capabilities and contributing to
                innovation in sectors like communication, aerospace, and
                cybersecurity.
              </p>
              <br />
              <h3>My Role and Contributions:</h3>
              <p>
                As a Software Engineer at BEL, I developed a cutting-edge
                navigation data simulator using React.js. This dynamic simulator
                was designed to mimic real-time GPS navigation, enabling the
                simulation of routes across diverse geographical points. The
                tool served as a critical resource for testing location-based
                services, ensuring seamless functionality and reliability in
                real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
