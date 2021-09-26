import React from "react";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";
import "./PopularProfil.css";

function PopularProfil(props) {

  return (
    <div className="profiles my-5">
      <h1>Profils Récents</h1>
      {props.profils.length === 0 ? (
        <div className="d-flex justify-content-center">
          <i
            className="fa fa-spinner fa-spin fa-2x"
            style={{ color: "#5F439A" }}
          ></i>
        </div>
      ) : (
        ""
      )}
      <div className="card__section container my-5">
        <div className="row">
          {props.profils?.map((p) => (
            <div className="col-6 col-lg-3" key={p.id_utilisateur}>
              <CardProfile
                image={p.url_photo !== "" ? p.url_photo : "./images/loading.gif"}
                color="orange"
                profile={p}
              />
            </div>
          ))}
        </div>
      </div>
      <Link to="/profils">
        <button className="btns">Voir tous les profils</button>
      </Link>
    </div>
  );
}

export default PopularProfil;
