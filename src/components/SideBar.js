import React from "react";
import css from "./css/SideBar.module.css";

function SideBar({ toggleMenu, openMenu }) {
  return (
    <div className={`${css.SideBar} ${openMenu ? css.open : ""}`}>
      <h2 onClick={toggleMenu}>Close this menu</h2>
    </div>
  );
}

export default SideBar;
