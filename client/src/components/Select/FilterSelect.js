import React from "react";

import "../../pages/MusicPlace/styles/FilterPage.css";

function FilterSelect(props) {
  if (props.listType === "artist") {
    return (
      <div>
        <select
          onChange={(artistOpt) => props.onChangeArtist(artistOpt.target.value)}
          className="select-box"
        >
          {props.filterOptions &&
            props.filterOptions.map((opt, index) => (
              <option key={index} id={opt.artistID}>{opt.artistName}</option>
            ))}
        </select>
      </div>
    );
  }
  if (props.listType === "genre") {
    return (
      <>
        <select
          onChange={(genreOpt) => props.onChangeGenre(genreOpt.target.value)}
          className="select-box"
        >
          {props.filterOptions &&
            props.filterOptions.map((opt, index) => (
              <option key={index} id={opt.genreID}>{opt.genreName}</option>
            ))}
        </select>
      </>
    );
  }
  return null;
}

export default FilterSelect;
