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
  const [moreInfos, setMoreInfos] = useState(false);

  useEffect(() => {
    api
      .get("/tech")
      .then((res) => {
        setTech(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const imgUrl = "http://localhost:5001/";

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
      {!moreInfos && (
        <div>
          <img
            className="bassmusic-cover"
            src={`${imgUrl}${showProject?.img}`}
            alt="homepage bassmusic"
          />
          <button
            type="button"
            className="more-infos_btn"
            onClick={() => setMoreInfos(true)}
          >
            plus d'infos
          </button>
        </div>
      )}
      {!edit && moreInfos && (
        <div>
          <h2 className="title-theme">Thème : {showProject?.theme}</h2>
          <div className="project-description">{showProject?.description}</div>
          <div className="footer-description">
            <Link to="/videos">
              {showProject && showProject.link === "videos" && (
                <span className="project-container-link-span">Vidéos</span>
              )}
            </Link>
            {showProject && showProject.link === "progress" && (
              <span className="project-container-link-span">En cours</span>
            )}
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
            <button
              type="button"
              className="bassmusic-btn"
              onClick={() => setMoreInfos(false)}
            >
              <img
                src={`${imgUrl}${showProject?.img}`}
                className="bassmusic-thumb"
                alt="homepage bassmusic"
              />
            </button>
          </div>
        </div>
      )}
      {!edit && userLog && (
        <button type="button" className="btn-modify" onClick={handleEdit}>
          Modifier
        </button>
      )}
      {edit && (
        <div>
          <form action="submit" className="project-infos_form">
            <div className=" project-infos_form-theme_container">
              <div className="project-infos_label-ctn">
                <label htmlFor="theme" className="project-infos_label">
                  Thème :
                </label>
              </div>
              <div className="project-infos_input-container">
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="project-infos_input"
                />
              </div>
            </div>
            <div className="project-infos_label-desc_container">
              <div className="project-infos_label-ctn">
                <label htmlFor="pDescription" className="project-infos_label">
                  Déscription :
                </label>
              </div>
              <div className="project-infos_area-textarea_container">
                <textarea
                  type="text"
                  id="pDescription"
                  value={pDescription}
                  onChange={(e) => setPdescription(e.target.value)}
                  className="project-infos_area"
                />
              </div>
            </div>
            <div className="project-infos_link-container">
              <div className="project-infos_link-label">
                <label htmlFor="link" className="project-infos_label">
                  Liens :
                </label>
              </div>
              <div className="project-infos_link-input">
                <input
                  type="text"
                  id="link"
                  value={link}
                  className="project-infos_link"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
            <div className="project-infos_tech-container">
              <h4 className="project-infos_tech-h4">Téchnos :</h4>
              {tech.map((item) => {
                const isChecked =
                  techIds && techIds.includes(item?.id.toString());

                return (
                  <div
                    key={item.id}
                    className="project-infos_checkbox_container"
                  >
                    <input
                      type="checkbox"
                      name="tech"
                      value={item.id}
                      checked={isChecked}
                      onChange={(e) => handleTechChange(e, item.id)}
                      className="input-checkbox"
                      id={`tech-${item.id}`}
                    />
                    <label
                      htmlFor={`tech-${item.id}`}
                      className={`label-checkbox ${isChecked ? "checked" : ""}`}
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
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
