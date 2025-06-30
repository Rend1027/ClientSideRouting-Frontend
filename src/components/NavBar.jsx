import React from "react";
import { NavLink } from "react-router";

import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <NavLink> tags to navigate to different pages.
      This means that every time we click on NavLink link, the page will reload.
      Let's fix that!
      */}
      <NavLink to="/">All Tasks</NavLink>
      <NavLink to="/completed">Completed Tasks</NavLink>
      <NavLink to="/incomplete">Incomplete Tasks</NavLink>
      <NavLink to="/add-task">Add Task</NavLink>
    </nav>
  );
};

export default NavBar;
