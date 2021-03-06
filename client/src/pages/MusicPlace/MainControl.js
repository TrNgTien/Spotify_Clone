//Packages
import React from "react";
import { FcMusic } from "react-icons/fc";
import { IoMdHome } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../slices/FormModal";
// import { ImBooks } from "react-icons/im";
// import { AiFillPlusCircle } from "react-icons/ai";

//Styles
import { Button } from "@material-ui/core";
// import "./styles/compressed/MainControl.min.css";
import "./styles/MainControl.css"; 

const MainControl = (props) => {
  const dispatch = useDispatch();
  const { userData } = props;
  const viewOptionControl = (viewOption) => {
    props.viewOptionMusic(viewOption);
  };

  const handleOpenForm = () => {
    dispatch(setOpenModal(true));
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
      <div
        className="main-control--library__control"
        onClick={(e) => viewOptionControl(e.target.id)}
        id="filter"
      >
        <ImSearch id="filter" className="main-control--icon-navigator" />
        <p id="filter">Filter</p>
      </div>
      {userData === "admin" ? (
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
      ) : null}
    </div>
  );
};
export default MainControl;

/* <div className="main-control--searching__control">
        <ImSearch className="main-control--icon-navigator" />
        <p>Searching...</p>
      </div> */
/* <div className="main-control--playlist">
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
       
      </div> */
