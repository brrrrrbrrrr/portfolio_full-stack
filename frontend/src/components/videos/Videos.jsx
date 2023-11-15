/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import "./Videos.css";

function Videos({ item, selected, handleClick }) {
  return (
    <div>
      <li
        className={`video-li ${selected ? "active" : ""}`}
        onClick={handleClick}
      >
        {item.name}
      </li>

      <div className={`video-overlay ${selected ? "visible" : ""}`}>
        <video className="video-container" controls src={item.video} />
      </div>
    </div>
  );
}

export default Videos;
