//Packages
import React, {useState, useEffect} from "react";
import MainControl from "./MainControl";
import MusicGrid from "./MusicGrid";
import MusicBar from "./MusicBar";
import axios from "axios";
// import React, {useState} from "react";
import { DATA_SONG } from "../data/testing-data"; 

//Styles
import "./styles/DashBoard.css";

const MainPage = (props) => {
  // const [dataMain, setDataMain] = useState([])
  const [dataMain, setDataMain] = useState(DATA_SONG)
  const [viewOption, setViewOption] = useState();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [salary, setSalary] = useState("");

  const [dataTest, setDataTest] = useState([]);


  // console.log("check main", dataMain.name)
  useEffect ( () => {
    getData();
  },[])
  
  const sendData = () => {
    axios.post('http://localhost:3001/create',{
      name: name,
      employeeCode: code,
      salary: salary
    }).then(() => {
      console.log("Success!")
    })
  }
  const getData = async () => {
    const response = await axios.get("http://localhost:3001/data");
    const data = response.data
    setDataTest(data)
  }

  console.log("cheking data", dataTest)
  const viewOptionMusic = (viewOption) => {
    setViewOption(viewOption);

  }
  console.log("name", name)
  return (
    <div className="dash-board">
      <div className="dash-board__screen">
        <MainControl viewOptionMusic = { (viewOption) => viewOptionMusic(viewOption)} />
        <MusicGrid dataSong = {dataMain} viewOption ={viewOption}/>
      </div>
      {/* <MusicBar musicBar = {dataMain}/> */}
      <div>
        <label>name</label>
        <input 
          type = "text" 
          value = {name}  
          onChange = {(e) => setName(e.target.value)} 
        />
        <label>code</label>
        <input 
          type = "text" 
          value = {code}  
          onChange = {(e) => setCode(e.target.value)} 
        />
        <label>salary</label>
        <input 
          type = "text" 
          value = {salary}  
          onChange = {(e) => setSalary(e.target.value)} 
        />
        <button onClick={() => sendData()}>Submit</button>
      </div>

      <div>
        {dataTest.length !== 0 ?<p>{dataTest[1].employeeCode}</p> : null  }
        {dataTest.length !== 0 ?<p>{dataTest[1].name}</p> : null  }
        {dataTest.length !== 0 ?<p>{dataTest[1].salary}</p> : null  }
      </div>
      <MusicBar musicBar = {dataMain}/>
    </div>
  );
};
export default MainPage;
