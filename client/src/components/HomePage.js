//Packages
import React from "react";

//Styles
// import "./styles/HomePage.css";
import "./styles/compressed/HomePage.min.css";

const HomePage = (props) => {
  const { dataSong } = props;
  const renderMusicGrid = () => {
    return (
      dataSong &&
      dataSong.map(({ songID,songName, artistName, genreName, duration }) => {
        return (
          <div key={songID}>
            <div className="home-page--music-card">
              <p className="home-page--music-card__song">{songName}</p>
              <p className="home-page--music-card__singer">{artistName}</p>
              <p className="home-page--music-card__singer">{genreName}</p>
              <p className="home-page--music-card__singer">{duration}</p>
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
