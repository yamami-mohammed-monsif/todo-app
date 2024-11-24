import "./header.css";

import moonIcon from "../../assets/images/icon-moon.svg";

function Header() {
  return (
    <div className="header">
      <h1>todo</h1>
      <div className="moon-icon-container">
        <img src={moonIcon} alt="moon-icon" className="moon-icon" />
      </div>
    </div>
  );
}

export default Header;
