import React from "react";
import { Link } from "react-router-dom";
import "./SearchContainCard.css";
function SearchContainCard(props) {
  return (
    <div className="search__contain__card">
      <div className="card_img">
        <img src="./images/abdoul.jpeg" alt="" />
      </div>
      <div className="card_info">
        <h5>Abdoul Goudoussy Diallo</h5>
        <p>Comptable</p>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          Conakry
        </span>
      </div>
      <div className="info_plus">
        <Link to={{
          pathname:'/profils/:id', 
          id: props.id_utilisateur}}
          >
          Consulter <i className="fas fa-angle-double-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default SearchContainCard;
