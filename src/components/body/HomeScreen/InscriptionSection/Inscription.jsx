import React from "react";
import "./Inscription.css";
import Register from "../../../auth/Register/register.component";

function Inscription(props) {
  return (
    <div
      className="inscription my-5"
      style={{
        backgroundImage: `url("./images/motif.png")`,
        margin: `${props.margin}`,
      }}
    >
      <h2>{props.text}</h2>
      {props.status ? (
        <Register button={<button className="btn btn-filled">Inscrivez-vous</button>} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Inscription;
