import React, { useEffect, useState }from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import CardProfile from "../components/body/HomeScreen/profils/CardProfile";
import Footer from "../components/footer/Footer";
import "../components/body/HomeScreen/profils/PopularProfil.css";
import "./ProfilList.css";
import {Box, CssBaseline, Container, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { getDataAPI } from '../utils/fetchData';

function ProfilList(props) {

  const [users, setUsers] = useState()
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState()
  const [size, setSize] = useState(8)

  useEffect(()=>{
    const getProfil = async (id) => {
      const res = await getDataAPI(`users/pagination?size=${size}&page=${page}`)
      setUsers(res.data?.users?.data)
      setTotal(res.data?.users?.total)
    }
    
        if (props.location.profile) {
          setUsers(props.location.profile)
        } else {
          getProfil(props.match.params.profilsId)
        }  
  },[page])


  
  const pageCout = Math.ceil(total / size); 
 

  return (
    <div className="profil_list">
      <Typography>
      <Menubar />
      <Inscription margin="2%" text="Tous les profils" />
      <div className="card__section items">
        <div className="row" >
          {!users ? <div className="d-flex justify-content-center"><i className="fa fa-spinner fa-spin fa-2x"></i></div> : ''} 
          {
            users?.map((u) => (
              <div className="col-6 col-lg-3 justify-center" key={u.id_utilisateur}>
                <CardProfile image={u.url_photo !== "" ? u.url_photo : "./images/loading.gif"} color="#326FB4" profile={u}/>
              </div>
            ))
          }
          
        </div>
      </div>
      </Typography>
      <CssBaseline />
       
        <Container className="d-flex justify-content-center" component={Box} py={3}>
        <Pagination 
        count={pageCout}                                         
        color="secondary"
        variant="outlined"
        showFirstButton={true}
        showLastButton={true}
        onChange={(e, value)=> setPage(value)}
        />
      </Container>
     
        <Footer />
    </div>
  );
}

export default ProfilList



