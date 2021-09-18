import React from "react";
import "./Menubar.css";
export default function Menubar() {
  return (
    <div className="menubar">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="link_button">
        {/* <div className="avaatar">
          <i className="fas fa-user"></i>
        </div> */}
        <ul>
          <li>
            <a href="/">Connexion</a>
          </li>
          <li>
            <a href="/" className="active">
              Inscription
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
