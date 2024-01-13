//import logo from './logo.svg';
import './App.css';
import Home from './Page/Home'
import Landing from './Page/Landing'
import Profile from './Page/Profile';
import React, { useState } from 'react';
import EditProfile from './Components/Profile/EditProfile'
import { useSelector } from "react-redux";
import Counter from './Components/Counter';
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import SeeProfile from './Components/Profile/SeeProfile';
import CommentCardList from './Components/CommentCard/CommentCardList';
import Login from './Login';
import {LinksList} from './Page/LinksList';

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  const [links] = useState([
    { id: 1, url: 'https://example.com' },
    { id: 2, url: 'https://google.com' },
    { id: 3, url: 'https://facebook.com' },
  ]);

  const link = {
    margin: "20px",
    textDecoration: "none",
  };
  return (
    <div className="App">
     
        <Link style={link} to="/">Landing</Link>
        <Link style={link} to="/home">Home</Link>
        <Link style={link} to="/profile">Profile</Link>
        <Link style={link} to="/counter">Counter</Link>
        <Link style={link} to="/links">Links</Link>
        <Link style={link} to="/commentCard">Comment Card</Link>
        
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={
            <RequireAuth redirectTo="/login">
              <Home />
            </RequireAuth>
          }
          />
          <Route path='/profile' element={<Profile />}>
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="seeProfile" element={<SeeProfile />} />
          </Route>
          <Route path='/counter' element={<Counter name='Martin' count={0}/>}/>
          <Route path='/links' element={<LinksList links={links}/>}></Route>
          <Route path='/commentCard' element={<CommentCardList />}/>
        </Routes>     
   
    </div>
  );
}

export default App;
