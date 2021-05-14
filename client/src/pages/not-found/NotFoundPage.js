import React from "react";
import "./styles/NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found__container">
      <div className="not-found__content">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
