import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton fontSize="large" className="header__icon">
        <PersonIcon />
      </IconButton>
      <img
        src="tinder__logo.png"
        className="header__logo"
        alt="Header Logo"
      ></img>
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}
export default Header;
