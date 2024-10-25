import React, { useState } from "react";
import "../css/Header.css";
import { FaTruckRampBox } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { WiMoonFull } from "react-icons/wi";

function Header() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");    
    
    setTheme((prevTheme) => !prevTheme);

    if(theme)
    {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";

    }
    else{
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Typo düzeltildi (betwen -> between)
      }}
    >
      <div className="logo-div">
      <img
          className="logo"
          src={theme ? "../public/favicon-black.png" : "../public/favicon-white.png"} 
          alt="Logo"
        />        <p className="logo-text">FireNanit</p>
      </div>

      <div
        
        style={{ display: "flex", alignItems: "center" }}
      >
        <input  className="search-input" type="text" placeholder="Search anyThing" />

        <div
          
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          {theme ? <WiMoonFull onClick={changeTheme} className="icons"/> : <CiLight onClick={changeTheme} className="icons"/>
          
            // buraya 
          }

          <FaTruckRampBox className="icons"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
