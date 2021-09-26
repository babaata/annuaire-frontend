import React from "react";
import "./Inscription.css";
import Register from "../../../auth/Register/register.component";

function Inscription(props) {
  const token = localStorage.getItem("firstLogin");
  return (
    <div
      className="inscription my-5"
      style={{
        backgroundImage: `url("../images/motif.png")`,
        backgroundSize: "cover",
        margin: `${props.margin}`,
      }}
    >
      <h2>{props.text}</h2>
      {props.status && !token ? (
        <Register
          button={<button className="btn btn-filled">Inscrivez-vous</button>}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Inscription;
