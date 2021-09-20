import React, { useState } from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { logout } from "../../../../redux/actions/authAction";
import { useHistory } from "react-router";

export default function Menubar() {
  
  const token = localStorage.getItem('firstLogin')
  

  const history = useHistory('/')
  const dispatch = useDispatch()
  function handleShow() {
      dispatch(logout(token))   
      history.push('/') 
  }
  
  
  return (
    <div className="menubar">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="link_button">
        <ul>
          {
            token ? <> 
          <li>
          <i class="pr-4 fa-3x fas fa-user-circle"></i> 
          </li>

          <li>
    <Button
        className={"btn-register"}
        onClick={() => handleShow()}
      >
        Deconnection
      </Button>
          </li>
            </> : <> 
            <li>
              
              <Login />
             
           </li>
           <li>
             <Register />
           </li>
            </>
          }
          
        </ul>
      </div>
    </div>
  );
}
