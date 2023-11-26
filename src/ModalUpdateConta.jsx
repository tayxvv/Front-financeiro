/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { api } from "./api";
import { useParams } from "react-router-dom";

export default function ModalUpdateConta() {
  const { idConta } = useParams();
  const [formData, setFormData] = useState({
    id_conta: idConta,
    saldo: "",
    nomeDaConta: "",
    tipoDeConta: "",
    dono: "",
  });
  const [tiposContas, setOptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [tipoContaSelecionado, setTipoContaOption] = useState("");
  const [usuarioSelecionado, setUsuarioOption] = useState("");

  useEffect(() => {
    async function getTiposContas() {
      const response = await api.get("/tipoConta");
      const { data } = response;
      setOptions(data);
    }
    async function getUsers() {
      const response = await api.get("/users");
      const { data } = response;
      setUsers(data);
    }
    getTiposContas();
    getUsers();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const inserirDados = async () => {
    try {
      const response = await api.put(`/conta/${idConta}`, formData);

      if (response.status === 200) {
        console.log("Alteração bem-sucedida");
      } else {
        console.error("Erro na alteração");
      }
    } catch (error) {
      console.error("Erro na solicitação para a API:", error);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const labelStyle = {
    color: "#FB9BB3",
    textShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginRight: "30px",
  };

  const inputStyle = {
    width: "400px",
    borderRadius: "10px",
    border: "3px solid #FF95AF",
    background: "#FFF",
    height: "3rem",
    color: "#000",
    fontSize: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    margin: "10px",
    fontWeight: "400",
    fontSize: "20px",
    fontFamily: "'Poppins', sans-serif",
  };

  const selectStyle = {
    width: "400px",
    borderRadius: "10px",
    border: "3px solid #FF95AF",
    background: "#FFF",
    height: "3rem",
    color: "#FF95AF",
    fontSize: "20px",
  };

  const optionStyle = {
    backgroundColor: "#FFF",
    color: "#FF95AF",
    fontSize: "20px",
  };

  const handleTipoContaChange = (e) => {
    const { name, value } = e.target;
    setTipoContaOption(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUsuarioChange = (e) => {
    const { name, value } = e.target;
    setUsuarioOption(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div style={containerStyle}>
      <h1 style={labelStyle}>Alterar Conta Bancária</h1>
      <form action="" style={formStyle}>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Saldo</label>
          <input
            name="saldo"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Nome da conta</label>
          <input
            name="nome_conta"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
        <label htmlFor="selectOption" style={labelStyle}>
          Tipo de Conta
        </label>
        <select
          id="id_tipo_conta"
          name="id_tipo_conta"
          value={tipoContaSelecionado}
          onChange={handleTipoContaChange}
          style={selectStyle}
        >
          <option style={optionStyle} value="">
            Selecione uma opção
          </option>
          {tiposContas?.tiposContas?.map((option) => (
            <option
              style={optionStyle}
              key={option.id_tipo_conta}
              value={option.id_tipo_conta}
            >
              {option.nome}
            </option>
          ))}
        </select>

        <label htmlFor="selectOption" style={labelStyle}>
          Dono
        </label>
        <select
          id="id_usuario"
          name="id_usuario"
          value={usuarioSelecionado}
          onChange={handleUsuarioChange}
          style={selectStyle}
        >
          <option style={optionStyle} value="">
            Selecione uma opção
          </option>
          {users?.map((option) => (
            <option
              style={optionStyle}
              key={option.id_usuario}
              value={option.id_usuario}
            >
              {option.username}
            </option>
          ))}
        </select>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Número da conta</label>
          <input
            name="numero_conta"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle} onClick={inserirDados}>
          Alterar
        </button>
      </form>
    </div>
  );
}
