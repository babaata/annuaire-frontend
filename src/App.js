import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import Alert from "./components/alert/Alert";
import { useSelector } from "react-redux";
function App() {

  const {error} = useSelector(state => state)
  const {auth} = useSelector(state => state)

  console.log({
  "auth":  auth
  });

  console.log({
    "error":  error
    });
  

  return (
    <div>
      <Alert/>
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={()=> <Home auth={auth}/>} />
          <Route path="/SearchPage" exact component={SearchPage} />
          <Route path="/ProfilList" exact component={ProfilList} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
