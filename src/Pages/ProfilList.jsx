import React, { useState }from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import CardProfile from "../components/body/HomeScreen/profils/CardProfile";
import Footer from "../components/footer/Footer";
import "../components/body/HomeScreen/profils/PopularProfil.css";
import "./ProfilList.css";
import ReactPaginate from 'react-paginate'
import { getDataAPI } from '../utils/fetchData';

function ProfilList(props) {

  const [users, setUsers] = useState()

  const getProfil = async (id) => {
    const res = await getDataAPI('users')
    setUsers(res.data?.users)
  }

  if (!users){
    if (props.location.profile) {
      setUsers(props.location.profile)
    } else {
      getProfil(props.match.params.profilsId)
    }
  }

  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;

  
  const pageCout = Math.ceil(users?.length / usersPerPage); 

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className="profil_list">
      <Menubar />
      <Inscription margin="2%" text="Tous les profils" />
      <div className="card__section items">
        <div className="row justify-content-center">
          {!users ? <div className="d-flex justify-content-center"><i className="fa fa-spinner fa-spin fa-2x"></i></div> : ''} 
          {
            users
            ?.slice(pagesVisited, pagesVisited + usersPerPage)
            ?.map((u) => (
              <div className="col-6 col-lg-3" key={u.id_utilisateur}>
                <CardProfile image="./images/souare.jpeg" color="#326FB4" profile={u}/>
              </div>
            ))
          }
          
        </div>
      </div>
        <div className="d-flex justify-content-center">
        <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}  
          pageCount={pageCout}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          onPageActive={"active"}
      />
        </div>
      <Footer />
    </div>
  );
}

export default ProfilList;
