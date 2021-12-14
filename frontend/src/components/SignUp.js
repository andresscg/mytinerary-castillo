import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import "../styles/SignForm.css";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    photoUrl: "",
  });
  useEffect(() => {
    // window.scroll(0, 0);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const valuesHandler = (e) => {
    const value = e.target.value;
    const data = e.target.name;
    setNewUser({ ...newUser, [data]: value });
  };

  const formHandler = async (e) => {
    e && e.preventDefault();
    if (Object.values(newUser).some((value) => value === "")) {
      toast.warn('Ups! All fields are required!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      try {
        let response = await dispatch(usersActions.signUp(newUser));
        console.log(response.data);
        if (response.data.success) {
          window.alert("Logeado");
        } else if (response.data.errors) {
          let errors = response.data.errors;
          errors.map((err) => toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }));
        }
      } catch (err) {
        console.error(err);
        return false;
      }
    }
  };

  const responseGoogle = async (res) => {
    console.log(res);
    let googleUser = {
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      photoUrl: res.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    };
    try {
      let response = await dispatch(usersActions.signUp(googleUser));
      if (response.data.success) {
        toast.success('Signed in successfully, welcome back!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }else{
        toast.warn(response.data.error, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return (
    <form className="sign-up-form">
      <h2 className="title">Sign Up</h2>
      <div className="name-input">
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={newUser.firstName}
            onChange={valuesHandler}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={newUser.lastName}
            onChange={valuesHandler}
          />
        </div>
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={valuesHandler}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={newUser.password}
          onChange={valuesHandler}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="text"
          placeholder="Profile Pic URL"
          name="photoUrl"
          value={newUser.photoUrl}
          onChange={valuesHandler}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <select
          type="text"
          name="country"
          className="country-select"
          value={newUser.country}
          onChange={valuesHandler}
        >
          <option disabled value="Select your country">
            Select your country
          </option>
          {countries
            .sort((a, b) => {
              if (a.name.common > b.name.common) {
                return 1;
              }
              if (a.name.common < b.name.common) {
                return -1;
              }
              return 0;
            })
            .map((country) => {
              return (
                <option value={country.name.common} key={country.name.common}>
                  {country.name.common}
                </option>
              );
            })}
        </select>
      </div>
      <div className="sign-btns">
        <button className="btn sign-up-btn" onClick={formHandler}>
          SIGN UP
        </button>
        <div className="social-media">
          <p className="social-text">Or Sign Up With Google</p>
          <GoogleLogin
            clientId="489964022885-77e9lbhf9smup5vb53d29f6nr34s32u3.apps.googleusercontent.com"
            buttonText="Sign Up With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
