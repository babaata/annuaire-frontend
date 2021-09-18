import React from "react";
import StatistiqueCard from "./StatistiqueCard";
import "./StatistiqueSection.css";

function StatistiqueSection() {
  return (
    <div className="statistique">
      <StatistiqueCard number="100 000" name="Utilisateurs" color="red" />
      <StatistiqueCard number="200" name="Profession" color="brown" />
      <StatistiqueCard number="2000" name="Compétences" color="green" />
      <StatistiqueCard number="100" name="Pays de résidence" color="orange" />
    </div>
  );
}

export default StatistiqueSection;
