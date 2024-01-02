import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "./Redux/authSlice";

import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = useSelector((state) => state.authStore.isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("login page")
    console.log(auth);
   if (auth === true) {
      navigate(-1);
    } 
  }, [auth, navigate]);

  const login = () => {
    dispatch(loginThunk(email, password));
  };

  return (
    <div>
      <label>
        Email:
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          value={email}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="text"
          value={password}
        />
      </label>
      <br />
      <button onClick={login}>Login</button>

      {auth && <p>Login Successful!</p>}
    </div>
  );
};

export default Login;
