/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarStyles = {
    // width: isOpen ? "250px" : "250px",
    width: "250px",
    transition: "width 0.3s",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  };

  const logoStyles = {
    width: "15rem",
    height: "15rem",
  };

  const buttonStyles = {
    margin: "10px 0",
    fontFamily: "'Fredoka', sans-serif",
  };

  return (
    <div className="sidebar" style={sidebarStyles}>
      <img style={logoStyles} src="../src/assets/logo.svg" alt="" />
      <Link to="/contas">
        <button style={buttonStyles}>Contas Bancárias</button>
      </Link>
      <Link to="/">
        <button style={buttonStyles}>Home</button>
      </Link>
    </div>
  );
}

export default Sidebar;
