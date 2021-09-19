import React, { useState } from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Menubar() {

  const {error} = useSelector(state => state)
  const {auth} = useSelector(state => state)

  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  console.log({
  "auth":  auth
  });

  console.log({
    "error":  error
    });
  
  const token = localStorage.getItem('firstLogin')
  
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
          <i class="fas fa-user-circle"></i> 
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
