//Packages
import React, { useState } from "react";
import { FcMusic } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { AiFillPlusCircle } from "react-icons/ai";
import UploadForm from "../../components/UploadForm";

//Styles
import "./styles/MainControl.css";
import { Button } from "@material-ui/core";
// import "./styles/compressed/MainControl.min.css";

const MainControl = (props) => {
  const viewOptionControl = (viewOption) => {
    props.viewOptionMusic(viewOption);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
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
        <div
          className="main-control--create-list"
          onClick={(e) => viewOptionControl(e.target.id)}
          id="favourite"
        >
          <AiFillPlusCircle
            id="favourite"
            className="main-control--create-list__icon"
          />
          <p id="favourite">Create Your List</p>
        </div>
        <Button
          style={{
            color: "white",
            marginLeft: "25%",
            marginTop: "25%",
            backgroundColor: "dodgerblue",
          }}
          onClick={() => handleOpenForm()}
        >
          Upload Music
        </Button>
        {isOpen === true ? <UploadForm /> : null}
      </div>
    </div>
  );
};
export default MainControl;
