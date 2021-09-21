import React from "react";
import CompetenceLeft from "./CompetenceLeft";
import CompetenceRight from "./CompetenceRight";
import "./Competence.css";

function Competences() {
  return (
    <div className="competences mt-5">
      <h1>Types de compétences</h1>
      <div className="competence__element container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6 competence__element-column">
            <CompetenceLeft />
          </div>
          <div className="col-12 col-lg-6 competence__element-column">
            <CompetenceRight />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Competences;
