//Packages
import React from "react";

//Styles
import "./styles/HomePage.css";
// import "./styles/compressed/HomePage.min.css";

const HomePage = (props) => {
  const { dataSong } = props;
  const renderMusicGrid = () => {
    return (
      dataSong &&
      dataSong.map(({ songName, artistName }, index) => {
        return (
          <div key={index}>
            <div className="home-page--music-card">
              <p className="home-page--music-card__song">{songName}</p>
              <p className="home-page--music-card__singer">{artistName}</p>
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div>
      <div className="home-page--view">{renderMusicGrid()}</div>
    </div>
  );
};
export default HomePage;
