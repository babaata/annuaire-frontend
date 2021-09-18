import React from "react";
import CompetenceLeft from "./CompetenceLeft";
import CompetenceRight from "./CompetenceRight";
import "./Competence.css";
function Competences() {
  return (
    <div className="competences">
      <h1>Types de competences</h1>
      <div className="competence__element">
        <CompetenceLeft />        
        <CompetenceRight />
      </div>
      <hr />
    </div>
  );
}

export default Competences;
