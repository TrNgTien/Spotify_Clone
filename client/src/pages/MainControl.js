/**
 * Contributor : Tien (29/12/2020)
 * Main Function : Render layout left of the page
 */

//Packages
import React from "react";
import { FcMusic } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

//Styles
import "./styles/MainControl.css";
// import "./styles/compressed/MainControl.min.css";

const MainControl = (props) => {
  const viewOptionControl = (viewOption) => {
    props.viewOptionMusic(viewOption);
  };
  return (
    <div className="main-control--page">
      <div
        className="main-control--branding"
        onClick={(e) => viewOptionControl(e.target.value)}
        value="homePage"
      >
        <FcMusic className="main-control--music-node" />
        <p>Music App</p>
      </div>
      <div
        value="homePage"
        onClick={(e) => viewOptionControl(e.target.value)}
        className="main-control--home-page__control"
      >
        <IoMdHome className="main-control--icon-home" />
        <p>Home Page</p>
      </div>
      <div className="main-control--searching__control">
        <ImSearch className="main-control--icon-navigator" />
        <p>Searching...</p>
      </div>
      <div className="main-control--library__control">
        <ImBooks className="main-control--icon-navigator" />
        <p>Library</p>
      </div>
      <div className="main-control--playlist">
        <h2>PLAYLIST</h2>
        <div className="main-control--create-list">
          <AiFillPlusCircle className="main-control--create-list__icon" />
          <p>Create Your List</p>
        </div>
        <div
          className="main-control--favourite"
          onClick={(e) => viewOptionControl(e.target.id)}
          id="favourite"
        >
          <AiFillHeart
            id="favourite"
            className="main-control--favourite__icon"
          />
          <p id="favourite">Favourite</p>
        </div>
      </div>
    </div>
  );
};
export default MainControl;
