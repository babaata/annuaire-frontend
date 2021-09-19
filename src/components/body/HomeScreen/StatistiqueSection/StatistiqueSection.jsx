import React from "react";
import StatistiqueCard from "./StatistiqueCard";
import "./StatistiqueSection.css";

function StatistiqueSection() {
  return (
    <div className="statistique container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 statistique-column-container">
          <StatistiqueCard number="100 000" name="Utilisateurs" color="red" />
          <StatistiqueCard number="200" name="Profession" color="brown" />
        </div>
        <div className="col-12 col-lg-6 statistique-column-container">
          <StatistiqueCard number="2000" name="Compétences" color="green" />
          <StatistiqueCard
            number="100"
            name="Pays de résidence"
            color="orange"
          />
        </div>
      </div>
    </div>
  );
}

export default StatistiqueSection;
