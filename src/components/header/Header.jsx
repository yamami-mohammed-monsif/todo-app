import { useState, useEffect } from "react";

import "./header.css";
import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";

function Header({ isDarkTheme, toggleTheme }) {
  return (
    <div className="header">
      <h1>todo</h1>
      <div className="moon-icon-container">
        <img
          src={isDarkTheme ? sunIcon : moonIcon}
          alt="moon-icon"
          className="moon-icon"
          onClick={toggleTheme}
          aria-label={
            isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
          }
        />
      </div>
    </div>
  );
}

export default Header;
