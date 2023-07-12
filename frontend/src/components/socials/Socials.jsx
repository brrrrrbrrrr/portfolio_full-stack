import React from "react";
import "./Socials.css";
import github from "../../assets/images/icons8-github.svg";
import linkedin from "../../assets/images/icons8-linkedin-circled.svg";

function Socials() {
  return (
    <div className="socials-container">
      <div className="social-column">
        <div className="email-container">
          <p className="email-content">benjamin.chaillan-pro@laposte.net</p>
        </div>
        <div className="links-container">
          <a href="https://github.com/brrrrrbrrrr" target="blank">
            <img
              className="link-social link-github"
              src={github}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-chaillan-614898263/"
            target="blank"
          >
            <img
              className="link-social link-linkedin"
              src={linkedin}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
