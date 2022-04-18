import React from "react";

interface ProjectDisplayProps {
  project: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  project,
}): JSX.Element => {
  return (
    <div className="project-display">
      <iframe src={project}></iframe>
    </div>
  );
};

export default ProjectDisplay;
