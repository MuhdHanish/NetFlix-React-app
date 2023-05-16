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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix-Logo"
      />
      <div className="navitems">
        <p>Home</p>
        <p>Tv Shows</p>
        <p>Movies</p>
      </div>
      <button className="button-logo">GET STARTED</button>
    </div>
  );
}

export default NavBar;
