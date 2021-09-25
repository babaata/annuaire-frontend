import React from "react";
import "./DetailSectionHead.css"

function DetailSectionHead(props) {

  return <div className="detail__section__head">
      <div className="head_img">
        <img src={props.profile?.url_photo !== "" ? props.profile?.url_photo : "./images/loading.gif"} alt="" />
      </div>
      <div className="head__info" style={{ backgroundImage: `url("../images/motif.png")`}}>
         <h5>{`${props.profile?.prenom.charAt(0).toUpperCase()}${props.profile?.prenom.slice(1)} ${props.profile?.nom}`}</h5>
         <p className="fonction">Designer Graphic</p>
          <span><i className="fas fa-map-marker-alt"></i>Conakry</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illo cum nihil voluptatem praesentium saepe deserunt .</p>
      </div>
  </div>;
}

export default DetailSectionHead;
