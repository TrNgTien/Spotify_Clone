//Packages
import React from "react";
import FavouritePage from "../components/FavouritePage";
import HomePage from "../components/HomePage";


//Styles
import "./styles/MusicGrid.css";

const MusicGrid = (props) => {
  const optionClicked = props.viewOption;
  const dataSong = props.dataSong;
  return (
    <div className = "music-grid--page">
      {optionClicked === "favourite" ? (
        <FavouritePage />
      ) : optionClicked === "homePage" ? (
        <HomePage dataSong = {dataSong} />
      ) : (
        <HomePage  dataSong = {dataSong} />
      )}
    </div>
  );
};
export default MusicGrid;
