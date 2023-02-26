import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // console.log(auth)
  
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
        console.log(auth)
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,email, password)
      .then((auth) => {
        console.log(auth)
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  

  return (
    <div className="signin-outer-wraper">
      <div className="signin-logo">
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="signin-wraper">
        <h1>Sign in</h1>
        <form action="">
          <label>Email or mobile phone number</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <br />
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign In
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p>Need help?</p>
      </div>

      <div className="create-account">
        <p>New to Amazon?</p>

        <button type="submit" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
