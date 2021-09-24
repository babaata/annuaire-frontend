import React from "react";
import { Link } from "react-router-dom";
import "./CardProfile.css";

function CardProfile(props) {
  return (
    <div className="card__profile">
      
      <div className="card__profil__img">
           <img src={props.image} alt={props.profile?.nom_utilisateur} />
      </div>
      
      <div className="card__info">
        <span
          className="card__info-job text-white"
          style={{ backgroundColor: `${props.color}` }}
        >
          Comptable
        </span>
        <div className="card__info__bottom text-white text-decoration-none">
          <Link to={{
            pathname: '/profils/'+ props.profile?.nom_utilisateur,
            profile: props.profile,
            }}>
                
            <h5 className="text-decoration-none">{props.profile?.nom_utilisateur}</h5>
            
            <span>
              <i className="fas fa-map-marker-alt"></i> Conakry
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
