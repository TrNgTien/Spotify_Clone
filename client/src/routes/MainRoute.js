/**
 * Contributor : Tien (29/12/2020)
 * Main Function: Separating the route for pages
 */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "../pages/auth/LoginForm";
import RegisterForm from "../pages/auth/RegisterForm";
import DashBoard from "../pages/MusicPlace/DashBoard";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register-form" component={RegisterForm} />
        <PrivateRoute exact path="/main-page" component={DashBoard} />
        <Route exact path="/" component={LoginForm} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect exact from="/" to="/main-page" />
        
        {/* Redirect link '/404' always place at bottom */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};
export default MainRoute;
