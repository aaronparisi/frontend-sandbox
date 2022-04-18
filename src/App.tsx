import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
import "./stylesheets/index.css";

const projects = [
  "https://www.faq.aaronparisi.dev",
  "https://www.archer.aaronparisi.dev",
  "https://www.towers.aaronparisi.dev",
  "https://www.jeerkat-js.aaronparisi.dev",
  "https://www.candies-70th.aaronparisi.dev",
  "https://www.v1.aaronparisi.dev",
  "https://www.tictactoe.aaronparisi.dev",
];

function App() {
  const [selectedProject, setSelectedProject] = useState<string>(projects[0]);

  return (
    <div className="App">
      <NavBar
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <ProjectDisplay project={selectedProject} />
    </div>
  );
}

export default App;
