import React from "react";
import "./StatistiqueSection.css";

function StatistiqueCard(props) {
  return (
    <div className="statistique__card">
      <h3>{props.number}</h3>
      <div className="circle" style={{background: `${props.color}` }}></div>
      <p>{props.name}</p>
    </div>
  );
}

export default StatistiqueCard;
