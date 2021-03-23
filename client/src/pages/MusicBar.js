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
        <br />
        {songName[0].duration}
      </div>
      <div className="audio-area">
        <button onClick={() => isLooping()}>Loop</button>
        <audio id="audio" loop={isLoop}>
          <source src="" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};
export default MusicBar;
