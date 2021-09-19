import React from "react";
import "./Menubar.css";
import Login from "../../../auth/Login/login.component";
import Register from "../../../auth/Register/register.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Menubar({auth}) {

  
  const token = localStorage.getItem('firstLogin')
  useEffect(()=>{
    const log = useSelector(state => state)

    console.log(log);
    console.log(token);
  },[token])
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
