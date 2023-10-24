/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { api } from "./api";
import Card from "./Card";
import { Link } from "react-router-dom";

async function getContasBancarias() {
  const { data } = await api.get("/conta");
  return data;
}

function ContasBancarias({ isOpen }) {
  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchContas() {
      try {
        const response = await getContasBancarias();
        setContas(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar contas:", error);
        setLoading(false); // Trate o erro definindo o estado de loading como falso
      }
    }

    fetchContas();
  }, []);
  const tituloPrincipalStyles = {
    color: "#FFF",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontSize: "80px",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "normal",
    WebkitTextStroke: "2px #FB9BB3",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: isOpen ? "250px" : "0",
          transition: "margin-left 0.3s",
        }}
      >
        <h1 style={tituloPrincipalStyles}>Contas Bancárias</h1>
        <div style={{ display: "flex" }}>
          {contas?.contasBancarias?.map((conta) => (
            <Link to={`/contas/${conta.id_conta}`} key={conta.id_conta}>
              <Card
                titulo={conta.numero_conta}
                key={conta.id_conta}
                propriedade1={conta.nome_conta}
                propriedade2={conta.saldo}
              ></Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContasBancarias;
