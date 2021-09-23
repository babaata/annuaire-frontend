import React, {useState} from "react";
import CompetenceComponent from "../components/body/DetailSream/CompetenceComponent";
import DetailSection from "../components/body/DetailSream/DetailSection";
import DetailSectionHead from "../components/body/DetailSream/DetailSectionHead";
import ProfessionComponent from "../components/body/DetailSream/ProfessionComponent";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import Footer from "../components/footer/Footer";
import { getDataAPI } from '../utils/fetchData';

function ProfilDetails(props) {
  const [profile, setProfile] = useState()

  const getProfil = async (id) => {
    const res = await getDataAPI(`user/${id}`)
    setProfile(res.data?.user)
  }

  if (!profile) {
    if (props.location.profile) {
      setProfile(props.location.profile)
    } else {
      getProfil(props.match.params.profilsId)
    }
  }

  return (
    <div>
      <Menubar />
      <DetailSectionHead profile={profile}/>
      <DetailSection profile={profile}/>
      <Footer />
    </div>
  );
}

export default ProfilDetails;
