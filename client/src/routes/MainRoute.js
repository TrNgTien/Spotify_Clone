/**
 * Contributor : Tien (29/12/2020)
 * Main Function: Separating the route for pages
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";


const MainRoute = () => {
  return (
    <Router>
      <Route exact path = "/" component={ MainPage } />
    </Router>
  );
};
export default MainRoute;
