import "./App.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/body/HomeScreen/Banner/Banner";
import Menubar from "./components/body/HomeScreen/NavBar/Menubar";
import Competences from "./components/body/HomeScreen/CompetenceSection/Competences";
import Inscription from "./components/body/HomeScreen/InscriptionSection/Inscription";
import PopularProfil from "./components/body/HomeScreen/profils/PopularProfil";
import StatistiqueSection from "./components/body/HomeScreen/StatistiqueSection/StatistiqueSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Banner />
      <PopularProfil />
      <Inscription />
      <Competences />
      <StatistiqueSection />
      <Footer />
    </div>
  );
}

export default App;
