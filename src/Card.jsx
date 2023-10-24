/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export default function Card({ titulo, propriedade1, propriedade2 }) {
  const styleDivCard = {
    backgroundColor: "#FFF8DC",
    width: "15rem",
    height: "15rem",
    margin: "1rem",
    borderRadius: "10px",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
  };

  const styleH1 = {
    color: "#FFF8DC",
    fontFamily: "'Fredoka', sans-serif",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    WebkitTextStroke: "2px #FB9BB3",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const styleP = {
    color: "#FFF8DC",
    fontFamily: "'Fredoka', sans-serif",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    WebkitTextStroke: "2px #FB9BB3",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <div className="card" style={styleDivCard}>
      <h2 style={styleH1}>Nº {titulo}</h2>
      <p style={styleP}>{propriedade1}</p>
      <p style={styleP}>Saldo: {propriedade2}</p>
    </div>
  );
}
