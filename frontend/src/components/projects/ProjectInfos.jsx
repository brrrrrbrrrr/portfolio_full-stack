/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";

function ProjectInfos({ showProject }) {
  return (
    <div className="project-container">
      <h2 className="title-theme">Thème : {showProject?.theme}</h2>
      <div className="project-description">{showProject?.description}</div>
      <div className="footer-description">
        <Link to="/videos">
          {showProject && showProject.link === "videos" && (
            <span className="project-container-link">Vidéos</span>
          )}
        </Link>
        {showProject && showProject.link === "progress" && (
          <span className="project-container-link">En cours</span>
        )}{" "}
        {showProject &&
          showProject.link !== "progress" &&
          showProject.link !== "videos" && (
            <a
              href={showProject?.link}
              className="project-container-link"
              target="blank"
            >
              Visiter
            </a>
          )}
        <h4 className="title-hardskill">
          {showProject?.hardSkillName.join(" ")}
        </h4>
      </div>
    </div>
  );
}

export default ProjectInfos;
