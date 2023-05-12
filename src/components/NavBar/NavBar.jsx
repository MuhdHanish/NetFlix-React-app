import React,{useState} from "react";
import "./NavBar.css";

function NavBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 10){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange?"navbar-change":"navbar"} id="navbar">
      <img
        className="netflix-logo"
        src="/images/Netflix-logo.webp"
        alt="Netflix-Logo"
      />
      <div className="navitems">
        <p>Home</p>
        <p>Tv Shows</p>
        <p>Movies</p>
        <p>News&Populr</p>
        <p>My List</p>
        <p>Browse by language</p>
      </div>
      <button className="button-logo">Get Started</button>
    </div>
  );
}

export default NavBar;
