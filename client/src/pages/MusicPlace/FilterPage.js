import React from "react";
import "./styles/FilterPage.css";

function FilterPage() {
  return (
    <div id="filter-page">
      <h2 id="filter-page-title">
        <i>Awesome Song Filter</i>
      </h2>
      <div id="form-container">
        <div className="select-label" id="artist-label">Artist: </div>
          <select className="select-box">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="select-label" id="genre-label">Genre: </div>
          <select className="select-box">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button id="filter-button">Apply Filter</button>
          <div className="select-label">Sort: </div>
          <select className="select-box">
            <option>Increasing Number of Likes</option>
            <option>Decreasing Number of Likes</option>
          </select>
      </div>

      <div id="result-container">
        <h3 style={{marginTop: '30px'}}><i>Results</i></h3>
        <div>
          {/*add result grid here*/}
        </div>
      </div>

    </div>
  );
}

export default FilterPage;
