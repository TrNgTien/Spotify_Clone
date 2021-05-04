/**
 * Contributor : Tien (29/12/2020)
 * Main Function: Separating the route for pages
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "../pages/auth/LoginForm";
import RegisterForm from "../pages/auth/RegisterForm";
import DashBoard from "../pages/MusicPlace/DashBoard";

const MainRoute = () => {
  return (
    <Router>
      <Route exact path="/main-page" component={DashBoard} />
      <Route exact path="/register-form" component={RegisterForm} />
      <Route exact path="/" component={LoginForm} />
    </Router>
  );
};
export default MainRoute;
