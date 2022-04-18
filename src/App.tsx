import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
import "./stylesheets/index.css";

const projects = ["https://www.faq.aaronparisi.dev"];

function App() {
  return (
    <div className="App">
      <NavBar projects={projects} />
      <ProjectDisplay project={projects[0]} />
    </div>
  );
}

export default App;
