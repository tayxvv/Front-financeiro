/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetalhesConta({ isOpen }) {
  const { idConta } = useParams();
  return (
    <div style={{ marginLeft: isOpen ? "250px" : "0" }}>
      <h1 style={{ color: "black" }}>Detalhes da conta {idConta}</h1>
    </div>
  );
}
