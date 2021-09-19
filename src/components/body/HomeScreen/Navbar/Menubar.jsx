import React from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { Link } from "react-router-dom";

export default function Menubar() {
  return (
    <div className="menubar">
      <div className="logo">
        <Link to="/">
          <img src="./images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="link_button">
        <ul>
          <li>
            <Login />
          </li>
          <li>
            <Register />
          </li>
        </ul>
      </div>
    </div>
  );
}
