/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function MainContent({ isOpen, toggleSidebar }) {
  const contentStyles = {
    marginLeft: isOpen ? "250px" : "0",
    transition: "margin-left 0.3s",
    fontFamily: "'Fredoka', sans-serif",
  };

  return (
    <div className="content" style={contentStyles}>
      <h1>Conteúdo Principal</h1>
      <p>Seu conteúdo principal vai aqui.</p>
    </div>
  );
}

export default MainContent;
