/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import "./Avatar.css";
import React from "react";

import brbrLogo from "../../assets/images/brbr-logo-modified.png";
import benjamin from "../../assets/images/Benjamin.png";

import { useSwitch } from "../../contexts/SwitchContext";

function Avatar({ homeAnimation }) {
  const { switchTheme, setSwitchTheme } = useSwitch(false);
  const handleTheme = () => {
    setSwitchTheme(!switchTheme);
    const bodyClass = document.body.classList;
    !switchTheme ? bodyClass.add("white-mode") : bodyClass.remove("white-mode");
  };

  return (
    <div>
      <header
        className={`header-container ${
          homeAnimation ? "header-container-show" : "header-container-hide"
        }`}
      >
        <div className="header-column">
          <div className="logo-brbr-container">
            <img
              className={`logo-brbr ${
                switchTheme ? "logo-brbr-white" : "logo-brbr-black"
              }`}
              src={switchTheme ? benjamin : brbrLogo}
              alt=""
            />
          </div>
        </div>{" "}
      </header>
      <button
        type="button"
        className={`btn-switch ${
          switchTheme ? "btn-switch-white" : "btn-switch-dark"
        }`}
        onClick={handleTheme}
      >
        {switchTheme ? "Black" : "White"}
      </button>
    </div>
  );
}

export default Avatar;
