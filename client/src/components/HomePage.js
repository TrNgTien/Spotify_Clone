//Packages
import React from "react";
import { useSelector } from "react-redux";
import UploadForm from "./UploadForm";

//Styles
import "./styles/HomePage.css";
// import "./styles/compressed/HomePage.min.css";
const HomePage = (props) => {
  const { isOpenModal } = useSelector((state) => state.modal);
  const { dataSong } = props;
  const renderMusicGrid = () => {
    return (
      dataSong &&
      dataSong.map(({ name, singer }, index) => {
        return (
          <div key={index}>
            <div className="home-page--music-card">
              <p className="home-page--music-card__song">{name}</p>
              <p className="home-page--music-card__singer">{singer}</p>
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div>
      {isOpenModal === true ? (
        <UploadForm />
      ) : (
        <div className="home-page--view">{renderMusicGrid()}</div>
      )}
    </div>
  );
};
export default HomePage;
