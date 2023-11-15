/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./PageInfos.css";
import { Outlet } from "react-router-dom";

function PageInfos() {
  return (
    <div className="page-infos-container">
      <Outlet />
    </div>
  );
}

export default PageInfos;
