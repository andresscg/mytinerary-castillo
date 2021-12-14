import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../styles/SignForm.css";
import {ToastContainer} from 'react-toastify'

const Sign = (props) => {
  const token = useSelector((state) => state.users.token);
  useEffect(() => {
    if (token) {
      props.history.push("/");
    }
  });
  const [activeForm, setActiveForm] = useState("signIn");
  const handleClick = () => {
    activeForm === "signIn" ? setActiveForm("signUp") : setActiveForm("signIn");
  };
  let activeClass = activeForm === "signUp" ? "sign-up-mode" : "";
  return (
    <div className={`container-sign ${activeClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Sign up here to find your next experience and share yours as well!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleClick}
            >
              Sign up
            </button>
          </div>
          <img src="assets/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              If you already have an account and want to continue searching and
              sharing experiences, sign in here!
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleClick}
            >
              Sign in
            </button>
          </div>
          <img src="assets/register.svg" className="image" alt="" />
        </div>
      </div>
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
    </div>
  );
};

export default Sign;
