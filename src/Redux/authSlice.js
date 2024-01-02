import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false || localStorage.getItem("TOKEN") != null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false
    },
    logout: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export const signupThunk = (email, password, username) => async (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_SERVER}/auth/signup`, {
      email,
      password,
      username
    })
    .then((response) => {
      console.log("Signup done");
      console.log(response);
    });
};

export const loginThunk = (email, password) => async (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_SERVER}/auth/login`, {
      email,
      password
    })
    .then((response) => {
      if (response.data === null) {
        console.log("Login failed");
      } else {
        console.log(response.data);
        console.log("TOKEN", response.data.token);
        localStorage.setItem("TOKEN", response.data.token);
        dispatch(login());
      }
    });
};

export const logoutNowThunk = () => (dispatch) => {
  localStorage.removeItem("TOKEN");
  dispatch(logout());
};

export default authSlice.reducer;
