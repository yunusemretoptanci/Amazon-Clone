import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import React, { useEffect } from "react";
import "./style.css"
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
        <div className="login-form">
          <form>
            <h1>Sign-in</h1>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type={"text"}
            ></input>
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={"password"}
            ></input>
            <button
              onClick={login}
              type="submit"
              className="login-signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login-registerButton">
            Create your Amazaon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
