import React from "react";
import Project from "../components/Project";
import projects from "../data/ projects.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectsGallery() {
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">List of My Past Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {projects.map((project) => (
              <div key={project.id} className="col mb-4">
                <div className="card">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                  <div className="card-body">
                    <a href="#" className="card-link">GitHub</a>
                    <a href="#" className="card-link">Deployed Site</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ProjectsGallery;