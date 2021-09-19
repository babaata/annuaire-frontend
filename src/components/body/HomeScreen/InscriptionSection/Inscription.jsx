import React from "react";
import "./Inscription.css";

function Inscription(props) {
  return (
    <div
      className="inscription"
      style={{
        backgroundImage: `url("./images/motif.png")`,
        margin: `${props.margin}`,
      }}
    >
      <h2>{props.text}</h2>
      {props.status == "true" ? <button>Inscrivez-vous</button> : ""}
    </div>
  );
}

export default Inscription;
