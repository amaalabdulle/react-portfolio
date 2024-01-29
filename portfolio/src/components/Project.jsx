import React from "react";
import { Link } from "react-router-dom";

function Project({ title, description, image, githubLink, deployedLink, id }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body">
                <a href={githubLink} className="card-link">GitHub</a>
                {deployedLink ? (
                    <a href={deployedLink} className="card-link">Deployed Site</a>
                ) : null}
            </div>
        </div>
    );
}

export default Project;