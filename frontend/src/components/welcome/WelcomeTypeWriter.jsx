/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./WelcomeTypeWriter.css";

import Typewriter from "typewriter-effect";

function WelcomeTypeWriter() {
  return (
    <div className="intro-container">
      <div className="intro">
        <Typewriter
          options={{
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Bonjour, bienvenue sur mon portfolio.")

              .callFunction(() => {})
              .pauseFor(2500)

              .callFunction(() => {})
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default WelcomeTypeWriter;
