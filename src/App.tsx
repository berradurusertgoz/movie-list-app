import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from "./components/MovieDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import FavoriteList from "./components/FavoriteList";

function App() {
  
  return (
  <>
<BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route index element={<MovieList />} />
          <Route path=":id" element={<MovieDetail />}/>
          <Route path="favorites" element={<FavoriteList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
