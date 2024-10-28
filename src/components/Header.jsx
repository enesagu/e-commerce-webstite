import React, { useState } from "react";
import "../css/Header.css";
import { FaTruckRampBox } from "react-icons/fa6";
import { CiLight, CiSearch } from "react-icons/ci";
import { WiMoonFull } from "react-icons/wi";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";
import { setSearchTerm } from "../redux/slices/productSlice";

function Header() {
  const [theme, setTheme] = useState(true);
  const [logoClicked, setLogoClicked] = useState(false);
  const [searchTerm, setSearchTermState] = useState("");

  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // Handle search button click
  const handleSearchClick = () => {
    dispatch(setSearchTerm(searchTerm)); // Dispatch the search term only on button click
  };

  // Handle logo click: clear search term and reset filter
  const handleLogoClick = () => {
    setLogoClicked(true);
    setSearchTermState(""); // Clear the search input
    dispatch(setSearchTerm("")); // Reset the filter by dispatching an empty search term
    setTimeout(() => setLogoClicked(false), 1500); // Reset the animation after 2 seconds
    navigate("/");
  };

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
          className={`logo ${logoClicked ? "clicked" : ""}`}
          onClick={handleLogoClick} // Attach the modified handleLogoClick
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
        <input
          className="search-input"
          type="text"
          placeholder="Search anyThing"
          value={searchTerm}
          onChange={(e) => setSearchTermState(e.target.value)} // Update input value without dispatching
        />
        <CiSearch className="icons" onClick={handleSearchClick} /> {/* Trigger search on click */}

        <div style={{ cursor: "pointer", marginLeft: "10px" }}>
          {theme ? (
            <WiMoonFull onClick={changeTheme} className="icons" />
          ) : (
            <CiLight onClick={changeTheme} className="icons" />
          )}

          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="success"
          >
            <FaTruckRampBox
              style={{ marginTop: "-26px", marginRight: "5px" }}
              className="icons"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
