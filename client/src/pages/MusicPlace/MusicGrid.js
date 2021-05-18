//Packages
import React from "react";
import HomePage from "../../components/HomePage";
import HeaderBar from "../../components/HeaderBar";
// import PlayList from "../../components/PlayList";

//Styles
import "./styles/MusicGrid.css";
// import "./styles/compressed/MusicGrid.min.css";
import FilterPage from "./FilterPage";

const MusicGrid = (props) => {
  const optionClicked = props.viewOption;
  const dataSong = props.dataSong;
  const { userName } = props;
  return (
    <div style={{ width: "100vw" }}>
      <HeaderBar userName={userName} />
      <div className="music-grid__page">
        {optionClicked === "homePage" ? (
          <HomePage dataSong={dataSong} />
        ) : optionClicked === "filter" ? (
          <FilterPage songList={dataSong} />
        ) : (
          <HomePage dataSong={dataSong} />
        )}
      </div>
    </div>
  );
};
export default MusicGrid;
