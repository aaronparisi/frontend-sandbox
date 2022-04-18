import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
import "./stylesheets/index.css";

const projects = ["https://www.faq.aaronparisi.dev"];

function App() {
  const [selectedProject, setSelectedProject] = useState<string>("");

  return (
    <div className="App">
      <NavBar projects={projects} setSelectedProject={setSelectedProject} />
      <ProjectDisplay project={selectedProject} />
    </div>
  );
}

export default App;
