import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./pages/ProfilList";
import ProfiDetails from "./pages/ProfilDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search-page" exact component={SearchPage} />
          <Route path="/prof-list" exact component={ProfilList} />
          <Route path="/detail-section" exact component={ProfiDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
