import React from "react";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,action,Adventure,romance,comedy,horror} from "../src/components/RowPost/url";

const rows = [
  { title: 'NETFLIX ORIGINALS', url: originals },
  { title: 'ACTION', url: action },
  { title: 'ADVENTURE', url: Adventure },
  { title: 'ROMANCE', url: romance },
  { title: 'HORROR', url: horror },
  { title: 'COMEDY', url: comedy },
];

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      {rows.map((row, index) => (
        <RowPost key={index} title={row.title} url={row.url} isSmall={index % 2 !== 0} />
      ))}
    </div>
  );
}

export default App;
