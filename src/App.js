import './App.css';
import Banner from "./components/body/HomeScreen/Banner/Banner";
import Competences from "./components/body/HomeScreen/CompetenceSection/Competences";
import Inscription from "./components/body/HomeScreen/InscriptionSection/Inscription";
import PopularProfil from "./components/body/HomeScreen/profils/PopularProfil";
import StatistiqueSection from "./components/body/HomeScreen/StatistiqueSection/StatistiqueSection";
import Footer from "./components/footer/Footer";
import Menubar from './components/body/HomeScreen/Navbar/Menubar';

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
