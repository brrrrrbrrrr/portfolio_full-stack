/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import "./About.css";
import useApi from "../services/useApi";
import { useSwitch } from "../../contexts/SwitchContext";

function About() {
  const api = useApi();
  const { userLog } = useSwitch();
  const [dataUser, setDataUser] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [descEdit, setDescEdit] = useState("");
  const [validUpdate, setValidUpdate] = useState(false);
  const [cancelUpdate, setCancelUpdate] = useState(false);
  const [indexPosition, setIndexPosition] = useState("");

  useEffect(() => {
    api.get("/user").then((res) => {
      setDataUser(res.data);
    });
  }, [validUpdate, isEdit]);

  const handleEdit = (desc, index) => {
    setIndexPosition(index);
    setDescEdit(desc);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setCancelUpdate(true);
    setIsEdit(false);
  };

  const descrSplit = dataUser?.description?.split("#");

  const handleValid = () => {
    setValidUpdate(true);

    descrSplit.splice(indexPosition, 1, descEdit);

    const newData = {
      description: descrSplit
        .map((element, index) =>
          index === descrSplit.length - 1 ? element : `${element}#`
        )
        .join(" "),
    };

    api
      .put("/user", newData)
      .then(() => {
        setValidUpdate(!validUpdate);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête PUT :", error);
      });
  };

  return (
    <div>
      <article className="description-about-container">
        <div className="description-column">
          <div className="texte-container">
            {isEdit && (
              <div>
                <textarea
                  value={descEdit}
                  onChange={(e) => setDescEdit(e.target.value)}
                  className="textarea-description"
                />
                <div className="texte-container_btn-container">
                  <button
                    type="button"
                    className="texte-container_btn"
                    onClick={() => handleValid()}
                  >
                    Valider
                  </button>
                  <button
                    type="button"
                    className="texte-container_btn"
                    onClick={() => handleCancel()}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}

            {descrSplit &&
              descrSplit?.map((desc, index) => {
                return (
                  <div key={index} role="button" tabIndex="">
                    <p
                      className={
                        isEdit
                          ? index === indexPosition
                            ? "active"
                            : "texte-description_p"
                          : "texte-description_p"
                      }
                    >
                      {desc}
                    </p>

                    {userLog && (
                      <button
                        type="button"
                        onClick={() => handleEdit(desc, index)}
                      >
                        Modifier
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;
