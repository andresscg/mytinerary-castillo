import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cities from "./components/pages/Cities";
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'

import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cities" exact component={Cities}/>
          <Route path="/login" exact component={LogIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
