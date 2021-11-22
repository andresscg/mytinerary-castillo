import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cities from "./components/pages/Cities";
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Cities}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
