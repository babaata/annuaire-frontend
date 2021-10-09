import React from "react";
import "./DetailSectionHead.css"

function DetailSectionHead(props) {

  return (
    <div className="container my-lg-5">
      <div className="detail__section__head row align-items-center">
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <div className="head_img">
            <img
              src={
                props.profile?.url_photo !== ""
                  ? props.profile?.url_photo
                  : "./images/loading.gif"
              }
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div
            className="head__info"
            style={{
              backgroundImage: `url("../images/motif.png")`,
              textAlign: "center",
            }}
          >
            <h5>{`${props.profile?.prenom
              .charAt(0)
              .toUpperCase()}${props.profile?.prenom.slice(1)} ${
              props.profile?.nom
            }`}</h5>
            <p className="fonction">{props.profile?.profil?.titre}</p>
            <span>
              <i className="fas fa-map-marker-alt"></i>
              {props.profile?.ville}
            </span>
            <p>{props.profile?.profil?.resume}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSectionHead;
