//Packages
import React, { useState } from "react";

//Styles
import "./styles/MusicBar.css";

const MusicBar = (props) => {
  let songName = props.musicBar;
  const [isLoop, setIsLoop] = useState(false);
  const isLooping = () => {
    setIsLoop(!isLoop);
  };
  return (
    <div className="music-bar">
      <div className="song-name">
        {songName[0].name}
        {" "}
        {songName[0].duration}
      </div>
    </div>
  );
};
export default MusicBar;
