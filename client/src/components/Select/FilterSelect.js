import React from "react";

import "../../pages/MusicPlace/styles/FilterPage.css";

function FilterSelect(props) {
  if (props.listType === "artist") {
    return (
      <>
        <select
          onChange={(artistOpt) => props.onChangeArtist(artistOpt.target.value)}
          className="select-box"
        >
          {props.filterOptions &&
            props.filterOptions.map((opt) => (
              <option id={opt.artistID}>{opt.artistName}</option>
            ))}
        </select>
      </>
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
            props.filterOptions.map((opt) => (
              <option id={opt.genreID}>{opt.genreName}</option>
            ))}
        </select>
      </>
    );
  }
  return null;
}

export default FilterSelect;
