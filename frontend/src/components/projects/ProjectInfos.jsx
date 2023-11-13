/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../services/useApi";
import { useSwitch } from "../../contexts/SwitchContext";
import Update from "../update/Update";

function ProjectInfos({ showProject }) {
  const { userLog, reload, setReload } = useSwitch();
  const api = useApi();
  const [edit, setEdit] = useState(false);
  const [theme, setTheme] = useState();
  const [pDescription, setPdescription] = useState();
  const [link, setLink] = useState();
  const [update, setUpdate] = useState(false);
  const [tech, setTech] = useState();
  const [techIds, setTechIds] = useState();
  useEffect(() => {
    api
      .get("/tech")
      .then((res) => {
        setTech(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // const techIds = showProject?.techIds.split(",");

  const handleEdit = () => {
    setTheme(showProject?.theme);
    setPdescription(showProject?.description);
    setLink(showProject?.link);
    setEdit(true);
    setTechIds(showProject?.techIds.split(","));
  };
  const handleCancel = () => {
    setEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValues = {
      theme: showProject?.theme,
      description: showProject?.description,
      link: showProject?.link,
      techId: showProject?.techId,
    };

    const updatedValues = {
      theme,
      description: pDescription,
      link,
      techId: techIds,
    };

    const formData = {};
    Object.keys(updatedValues).forEach((key) => {
      if (updatedValues[key] !== currentValues[key]) {
        formData[key] = updatedValues[key];
      }
    });

    api
      .put(`/project/${showProject.id}`, formData)
      .then(() => {
        setUpdate(true);
        setEdit(false);
        setReload(reload + 1);
        setTimeout(() => {
          setUpdate(false);
        }, "3000");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTechChange = (e, item) => {
    const isChecked = e.target.checked;
    setTechIds((prevTechIds) => {
      if (prevTechIds) {
        if (isChecked) {
          return [...prevTechIds, item.toString()];
        }
        return prevTechIds.filter((techId) => techId !== item.toString());
      }
      // Si techIds est vide, initialisez-le avec un tableau contenant uniquement l'ID actuel
      return [item.toString()];
    });
  };

  return (
    <div className="project-container">
      {update && <Update />}
      {!edit && (
        <div>
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
            <h4 className="title-hardskill">{showProject?.techName}</h4>
          </div>
        </div>
      )}
      {!edit && userLog && (
        <button type="button" onClick={handleEdit}>
          Modifier
        </button>
      )}
      {edit && (
        <div>
          <form action="submit" className="project-infos_form">
            <label htmlFor="theme" className="project-infos_label">
              Thème :
            </label>
            <input
              type="text"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="project-infos_input"
            />
            <label htmlFor="pDescription" className="project-infos_label">
              Déscription :
            </label>
            <textarea
              type="text"
              id="pDescription"
              value={pDescription}
              onChange={(e) => setPdescription(e.target.value)}
              className="project-infos_area"
            />
            <label htmlFor="link" className="project-infos_label">
              Liens :
            </label>
            <input
              type="text"
              id="link"
              value={link}
              className="project-infos_link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />{" "}
            {tech.map((item) => {
              const isChecked =
                techIds && techIds.includes(item?.id.toString());

              return (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    name="tech"
                    value={item.id}
                    checked={isChecked}
                    onChange={(e) => handleTechChange(e, item.id)}
                  />
                  <label>{item.name}</label>
                </div>
              );
            })}
          </form>
          <div className="project-infos_btn-container">
            <button
              className="project-infos_btn"
              type="submit"
              onClick={handleSubmit}
            >
              Valider
            </button>
            <button
              className="project-infos_btn"
              type="button"
              onClick={handleCancel}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectInfos;
