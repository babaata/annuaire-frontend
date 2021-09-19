import React, { useState } from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { Button } from "react-bootstrap";
import { logout } from "../../../../redux/actions/authAction";

export default function Menubar() {
  const token = localStorage.getItem("firstLogin");

  return (
    <div className="menubar">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="link_button">
        <ul>
          {token ? (
            <>
              <li>
                <i
                  className="fas fa-user-circle"
                  style={{
                    color: "#5F439A",
                    transform: "translateY(-6px)",
                    fontSize: "53px",
                    marginRight: "39px",
                    cursor: "pointer",
                  }}
                />
              </li>

              <li>
                <Button className={"btn-outlined"} onClick={logout()}>
                  Deconnection
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Login />
              </li>
              <li>
                <Register />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
