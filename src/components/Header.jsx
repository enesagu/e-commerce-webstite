import React, { useState } from "react";
import "../css/Header.css";
import { FaTruckRampBox } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { WiMoonFull } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState(true);
  const [logoClicked, setLogoClicked] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");

    setTheme((prevTheme) => !prevTheme);

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => setLogoClicked(false), 1500); // Reset the animation after 2 seconds
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo-div">
        <div
          className={`logo ${logoClicked ? 'clicked' : ''}`}
          onClick={() => {
            navigate("/");
            handleLogoClick();
          }}
        >
          <div className="logo-overlay"></div>
          <img
            className="logo"
            src={
              theme
                ? "../public/favicon-black.png"
                : "../public/favicon-white.png"
            }
            alt="Logo"
          />
        </div>
        <p className="logo-text">FireNanit</p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <input className="search-input" type="text" placeholder="Search anyThing" />

        <div style={{ cursor: "pointer", marginLeft: "10px" }}>
          {theme ? (
            <WiMoonFull onClick={changeTheme} className="icons" />
          ) : (
            <CiLight onClick={changeTheme} className="icons" />
          )}
          <FaTruckRampBox className="icons" />
        </div>
      </div>
    </div>
  );
}

export default Header;
