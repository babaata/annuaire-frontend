import React from "react";
import "./Menubar.css";
export default function Menubar(props) {
  return (
    <div className="menubar">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="link_button">
        {props.page == "searchpage" ||
          props.page == "profdetails" ?
            <div className="avaatar">
              <i className="fas fa-user"></i>
            </div>
            :""
          }
        <ul>
          <li>{props.page == "home" && <a href="/">Connexion</a>}</li>
          <li>
            <a href="/" className="active">
              {props.page == "searchpage" || props.page == "profdetails"
                ? "Deconnexion"
                : "Inscription"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
