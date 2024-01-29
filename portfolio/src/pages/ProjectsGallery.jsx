import React from "react";
import { Link } from "react-router-dom";
import Project from "../components/Project";
import projectsData from "../data/projects.json";


function ProjectsGallery() {
  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">My Past Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {projectsData.map((project) => (
            <div key={project.id} className="col mb-4">
                <Project
                title={project.title}
                description={project.description}
                image={project.image}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                />
            </div>
        ))}
        </div>
    </div>
  );
}

export default ProjectsGallery;