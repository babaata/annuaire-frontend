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
      {profils.length === 0 ? <div className="d-flex justify-content-center"><i className="fa fa-spinner fa-spin fa-2x"></i></div> : ''}
      <div className="card__section container my-5">
        <div className="row">
        {
          profils?.map((p) => (
            <div className="col-6 col-lg-3" key={p.id_utilisateur}>
              <CardProfile image="./images/abdoul.jpeg" color="orange" profile={p}/>
            </div>
          ))
        }
          
          {/* <div className="col-6 col-lg-3">
            <CardProfile image="./images/model.jpeg" color="#009B95" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/souare.jpeg" color="#ED2F24" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/younouss.jpeg" color="#326FB4" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/kabaci.jpeg" color="#AF3862" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/woman.jpeg" color="#ED2F24" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/kabaci.jpeg" color="#FBB017" />
          </div>
          <div className="col-6 col-lg-3">
            <CardProfile image="./images/woman.jpeg" color="#1CA5A0" />
          </div> */}
        </div>
      </div>
      <Link to="/profils">
        <button>
          Voir tous les profiles 
        </button>
      </Link>
    </div>
  );
}

export default PopularProfil;
