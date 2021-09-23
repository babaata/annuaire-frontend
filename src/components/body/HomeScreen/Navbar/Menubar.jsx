import React, { useState } from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { logout } from "../../../../redux/actions/authAction";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Menubar() {



  const token = localStorage.getItem('firstLogin')

  const history = useHistory("/");
  const dispatch = useDispatch();
  function handleShow() {
    dispatch(logout(token));
    history.push("/");
  }

  return (
    <div className="menubar">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="link_button">
  
        <ul>
          {token ? (
            <>
            <Link to="/profile" style={{listStyle:"none"}}>
              <li>
                  <i
                    className="pr-4 fa-3x fas fa-user-circle"
                    style={{
                      color: "#5F439A",
                      transform: "translateY(-6px)",
                      fontSize: "53px",
                      marginRight: "39px",
                      cursor: "pointer",
                    }}
                  />
              </li>
              </Link>

              <li>
                <Button className={"btn-outlined"} onClick={() => handleShow()}>
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
