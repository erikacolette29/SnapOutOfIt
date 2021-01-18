import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MantraPage from "../MantraPage/MantraPage.jsx";
import QuotesSassy from '../../components/QuotesSassy/QuotesSassy'

// Here we import all the things we are exporting from all our pages

function HomePage({ user }) {

  return (
    <>
      <main>
        <p className="nav-link">Welcome, {user.name}</p>
        <h1>Home actual page</h1>
        <QuotesSassy />
        {/* below this is "Home Page(App.js)" from somewhere else */}

      </main>
    </>
  );
}

export default HomePage;
