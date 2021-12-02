import "./App.css";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from "./components/Navbar";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from './pages/City'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cities/:id" component={City} />
        <Route path="/cities" exact component={Cities}/>
        <Route path="/login" exact component={LogIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
