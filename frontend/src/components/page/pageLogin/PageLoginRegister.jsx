import React, { useState } from "react";
import Login from "../../login/Login";

import "./PageLoginRegister.css";

function Home() {
  const [connection, setConnection] = useState(false);

  const handleConnection = () => {
    setConnection(true);
  };

  return (
    <div>
      <div className="page-login-register_container">
        <div className="page-login-register_button-container">
          <button
            type="button"
            onClick={handleConnection}
            className={`"page-login-register_button" ${
              connection
                ? "page-login-register_button-active"
                : "page-login-register_button"
            }`}
          >
            Connexion
          </button>
        </div>
        <div className="page-login-register_content-container">
          {connection && <Login />}
        </div>
      </div>
    </div>
  );
}

export default Home;
