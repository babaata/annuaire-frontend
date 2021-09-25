import React, { useState } from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import CardProfile from "../components/body/HomeScreen/profils/CardProfile";
import Footer from "../components/footer/Footer";
import "../components/body/HomeScreen/profils/PopularProfil.css";
import "./ProfilList.css";
import { getDataAPI } from "../utils/fetchData";

function ProfilList(props) {
  const [users, setUsers] = useState();

  const getProfil = async (id) => {
    const res = await getDataAPI("users");
    setUsers(res.data?.users);
  };

  if (!users) {
    if (props.location.profile) {
      setUsers(props.location.profile);
    } else {
      getProfil(props.match.params.profilsId);
    }
  }
  
  return (
    <div className="profil_list">
      <Menubar />
      <Inscription margin="2%" text="Tous les profils" />
      <div className="card__section items">
        <div className="row ">
          {!users ? (
            <div className="d-flex justify-content-center">
              <i className="fa fa-spinner fa-spin fa-2x" />
            </div>
          ) : (
            ""
          )}
          {users?.map((u) => (
            <div
              className="col-6 col-lg-3 justify__center"
              key={u.id_utilisateur}
            >
              <CardProfile
                image={u.url_photo !== "" ? u.url_photo : "./images/loading.gif"}
                color="#326FB4"
                profile={u}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilList;
