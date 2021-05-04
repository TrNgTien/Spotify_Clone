//Packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DATA_SONG } from "../../data/testing-data";
import MainControl from "./MainControl";
import MusicGrid from "./MusicGrid";
import MusicBar from "./MusicBar";
import { API_CONNECTION } from "../../constants/BE_CONNECTION";
//Styles
import "./styles/DashBoard.css";
import UploadForm from "../../components/UploadForm";
import { useSelector } from "react-redux";
const DashBoard = (props) => {
  const [dataMain, setDataMain] = useState(DATA_SONG);
  const [viewOption, setViewOption] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

  const { isOpenModal } = useSelector((state) => state.modal);
  const getData = async () => {
    const response = await axios.get(`${API_CONNECTION}`);
    const data = response.data;
    setDataMain(data);
    setIsLoaded(true);
  };

  // useEffect ( () => {
  //   getData();
  // },[])

  // const sendData = () => {
  //   axios.post('http://localhost:8080/create',{
  //     name: name,
  //     employeeCode: code,
  //     salary: salary
  //   }).then(() => {
  //     console.log("Success!")
  //   })
  // }

  /**
   * @param {*} the option which user want to show
   * @return the view of the option
   */
  const viewOptionMusic = (viewOption) => {
    setViewOption(viewOption);
  };
  return (
    <div className="dash-board">
      {isOpenModal === true ? (
        <UploadForm style={{ marginTop: "50%" }} />
      ) : null}
      <div className="dash-board__screen">
        <MainControl
          viewOptionMusic={(viewOption) => viewOptionMusic(viewOption)}
        />
        {isLoaded === true ? (
          <MusicGrid dataSong={dataMain} viewOption={viewOption} />
        ) : (
          "Waiting..."
        )}
      </div>
      <MusicBar musicBar={dataMain} />
    </div>
  );
};
export default DashBoard;