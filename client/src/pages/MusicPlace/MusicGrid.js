//Packages
import React from "react";
import PlayList from "../../components/PlayList";
import HomePage from "../../components/HomePage";
import HeaderBar from "../../components/HeaderBar";

//Styles
import "./styles/MusicGrid.css";
import FilterPage from "./FilterPage";

const MusicGrid = (props) => {
  const optionClicked = props.viewOption;
  const dataSong = props.dataSong;
  return (
    <div className="music-grid__page">
      <HeaderBar />
      {optionClicked === "favourite" ? (
        <PlayList />
      ) : optionClicked === "homePage" ? (
        <HomePage dataSong={dataSong} />
      ) : optionClicked === "filter" ? (
        <FilterPage songList={dataSong} />
      ) : (
        <HomePage dataSong={dataSong} />
      )}
    </div>
  );
};
export default MusicGrid;
