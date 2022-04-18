import React from "react";

interface NavBarProps {
  projects: string[];
}

const NavBar: React.FC<NavBarProps> = ({ projects }): JSX.Element => {
  const projectDisplay = (project: string): string => {
    let words = project.split(".");
    return words[1];
  };

  return (
    <ul className="nav-bar">
      {projects.map((project: string) => {
        return (
          <li className="project-link" key="project">
            <div className="project-link-text">{projectDisplay(project)}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
