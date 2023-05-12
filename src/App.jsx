import React from "react";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,action,Adventure,romance} from "../src/components/RowPost/url"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='NETFLIX ORIGINALS' url={originals}/>
      <RowPost title='ACTION' isSmall url={action}/>
      <RowPost title='ADVENTURE'  url={Adventure}/>
      <RowPost title='ROMANCE' isSmall url={romance}/>
    </div>
  );
}

export default App;
