import React from "react";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,action} from "../src/components/RowPost/url"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Original' url={originals}/>
      <RowPost title='Action' isSmall url={action}/>
    </div>
  );
}

export default App;
