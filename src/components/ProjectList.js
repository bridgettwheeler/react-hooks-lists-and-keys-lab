import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const projectItems= projects.map((item) => (
    <ProjectItem name={item.name}/>
    <ProjectItem about={item.about}/>
    <ProjectItem technologies={item.technologies}/>))
    
  // console.log(projectItems)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
