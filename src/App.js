import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import Alert from "./components/alert/Alert";
import { useSelector } from "react-redux";
import NotFound from './components/NotFound';

function App() {


  return (
    <div>
      {/* <Alert/> */}
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SearchPage" exact component={SearchPage} />
          <Route path="/ProfilList" exact component={ProfilList} />
          <Route path="*" exact component={NotFound} />   
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
