import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";
import "./PopularProfil.css";
import { getDataAPI } from '../../../../utils/fetchData';

function PopularProfil() {
  const [profils, setProfils] = useState([])

  const getProfils = async () => {
    const res = await getDataAPI('users')
    setProfils(res.data?.users)
  }

  useEffect(() => {
    if(profils?.length === 0) {
      getProfils()
    }
  })

  return (
    <div className="profiles my-5">
      <h1>Profils Récents</h1>
      {profils.length === 0 ? (
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
          {profils?.map((p) => (
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
