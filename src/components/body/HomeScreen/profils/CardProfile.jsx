import React from "react";
import "./CardProfile.css";

function CardProfile(props) {
  return (
    <div className="card__profile">
      <div className="card__profil__img">
        <img src={props.image} alt="abdoul" />
      </div>
      <div className="card__info">
        <span style={{ backgroundColor: `${props.color}` }}>Comptable</span>
        <div className="card__info__bottom">
          <h5>Abdoul Goudoussy Diallo</h5>
          <span>
            <i className="fas fa-map-marker-alt"></i> Conakry
          </span>
        </div>
        <div className="card__gradient"></div>
      </div>
    </div>
  );
}

export default CardProfile;
