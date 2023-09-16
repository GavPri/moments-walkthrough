import React, { useState } from "react";
import css from "./css/NavBar.module.css";
import logo from "../assets/logo.png";
import SideBar from "./SideBar";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(0);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <a>
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>Home</li>
        <li>Log in</li>
        <li>Sign Up</li>
      </ul>
      {openMenu ? (
        <SideBar toggleMenu={toggleMenu} openMenu={openMenu} />
      ) : (
        <div className={css.ToggleBars} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
