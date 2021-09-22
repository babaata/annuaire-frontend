import React from "react";
import StatistiqueCard from "./StatistiqueCard";
import "./StatistiqueSection.css";

function StatistiqueSection() {
  return (
    <div className="statistique container my-3">
      <div className="row mb-5">
        <div className="col-12 col-lg-6 statistique-column-container py-1">
          <StatistiqueCard number="100 000" name="Utilisateurs" color="red" />
          <StatistiqueCard number="200" name="Profession" color="brown" />
        </div>
        <div className="col-12 col-lg-6 statistique-column-container py-1">
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
