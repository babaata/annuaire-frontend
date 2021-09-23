import React from "react";
import { Link } from "react-router-dom";
import "./CardProfile.css";

function CardProfile(props) {
  return (
    <div className="card__profile">
      <div className="card__profil__img">
        <img src={props.image} alt="abdoul" />
      </div>
      <div className="card__info">
        <span
          className="card__info-job"
          style={{ backgroundColor: `${props.color}` }}
        >
          Comptable
        </span>
        <div className="card__info__bottom">
          <Link to={`/profils/${props.profile.id_utilisateur}`}>
            <h5>{props.profile.nom_utilisateur}</h5>
          </Link>
          <span>
            <i className="fas fa-map-marker-alt"></i> Conakry
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
