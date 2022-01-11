import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from './components/NavBar/NavBar';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Cocktail from './components/Cocktail/Cocktail';
import { Grid } from '@mui/material';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [cocktails, setCocktails] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    getCocktails()
  }, [loggedIn])

  function getCocktails() {
      axios.get('http://localhost:8000/api/get-cocktail-list/')
      .then((response) => {
          if (response.status === 200){
              setCocktails(response.data)
          }
      })
  }

  function setUserLoggedIn(login_state) {
    setLoggedIn(login_state)
    if (!login_state) {
      setUser({})
    }
  }

  if(loggedIn && !user) return
  if (!loggedIn) {
    return (
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Login setUserLoggedIn={setUserLoggedIn} setUser={setUser}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <Grid className="bg-slate-600" textAlign='center'>
      <BrowserRouter>
        <NavigationBar user={user} setIsAdmin={setIsAdmin}/>
      {/* {isAdmin && ()} */}
      <Routes>
        <Route path='/admin-site' element={<Admin />}/>
        <Route path='/' element={<Cocktail cocktails={cocktails} />}/>
      </Routes>
      </BrowserRouter>
    </Grid>
  );
}

