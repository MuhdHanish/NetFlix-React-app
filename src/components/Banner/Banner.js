import React, { useEffect, useState } from "react";
import axios from "../../axios";
import {imgUrl} from "../../constance/constance";
import {trendings} from "./url"
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get(trendings).then((response)=>{
      const result = response.data.results
      const random = Math.floor(Math.random() * result.length)
      setMovie(result[random])
    }).catch((err)=>console.log(err))
  }, [])

  let title

  const backgroundImageStyle = movie.backdrop_path ? { backgroundImage: `url(${imgUrl + movie.backdrop_path})` }: {};
  if(movie.title){
    title = movie.title
  }else if(movie.original_ttitle){
    title = movie.original_ttitle
  }else if(movie.name){
    title = movie.name
  }
  const description = movie.overview ? movie.overview : ""

  return (
    <div style={backgroundImageStyle} className="banner">
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="banner-btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="description">
        {description}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
