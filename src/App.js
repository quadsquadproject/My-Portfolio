import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard.jsx";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import "./App.css";
import Contact from "./components/Contact.jsx";
import NavBar from "./NavBar.jsx";
import ProjectWork from "./components/ProjectWork.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <main>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<ProjectWork/>}/>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
