//Packages
import React from "react";
import PlayList from "../../components/PlayList";
import HomePage from "../../components/HomePage";


//Styles
import "./styles/MusicGrid.css";

const MusicGrid = (props) => {
  const optionClicked = props.viewOption;
  const dataSong = props.dataSong;
  return (
    <div className = "music-grid__page">
      <div className = "music-grid__page--header">
        test User Bar
      </div>
      {optionClicked === "favourite" ? (
        <PlayList />
      ) : optionClicked === "homePage" ? (
        <HomePage dataSong = {dataSong} />
      ) : (
        <HomePage  dataSong = {dataSong} />
      )}
    </div>
  );
};
export default MusicGrid;
