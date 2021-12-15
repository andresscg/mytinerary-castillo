import "./App.css";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from "./components/Navbar";
import { BrowserRouter , Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Footer from './components/Footer'
import usersActions from './redux/actions/usersActions'
import {useEffect} from "react"
import {ToastContainer} from 'react-toastify'
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(usersActions.signInLocalStorage(localStorage.getItem('token')));
    }  
  })
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cities/:id" component={City} />
        <Route path="/cities" exact component={Cities}/>
        <Route path="/sign" exact component={Sign}></Route>
      </Switch>
      <Redirect to="/" />
      <Footer/>
      <ToastContainer
        position="bottom-rigth"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      />
    </BrowserRouter>
  );
}

export default App;
