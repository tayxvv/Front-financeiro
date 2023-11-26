/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { api } from "./api";
import { useParams } from "react-router-dom";

export default function ModalInserirTransferencia() {
  const { idConta } = useParams();
  const [formData, setFormData] = useState({
    id_conta: idConta,
    valor: "",
    descricao: "",
    tipoDeConta: "",
    dono: "",
  });
  const [tipoTransacao, setOptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [tipoCategoria, setCategoria] = useState([]);
  const [tipoTransacaoSelecionado, setTipoTransacaoOption] = useState("");
  const [usuarioSelecionado, setUsuarioOption] = useState("");
  const [categoriaSelecionado, setCategoriaOption] = useState("");

  useEffect(() => {
    async function getTiposTransacoes() {
      const response = await api.get("/tipoTransacao");
      const { data } = response;
      console.log(data);
      setOptions(data);
    }
    async function getUsers() {
      const response = await api.get("/users");
      const { data } = response;
      setUsers(data);
    }
    async function getCategorias() {
      const response = await api.get("/categorias");
      const { data } = response;
      setCategoria(data);
    }
    getTiposTransacoes();
    getUsers();
    getCategorias();
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
      const response = await api.post("/transferencia", formData);

      if (response.status === 200) {
        console.log("Inserção bem-sucedida");
      } else {
        console.error("Erro na inserção");
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
    width: "400px", // Largura uniforme para os campos de entrada
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

  const handleTipoTransacaoChange = (e) => {
    const { name, value } = e.target;
    setTipoTransacaoOption(value);
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

  const handleCategoriaChange = (e) => {
    const { name, value } = e.target;
    setCategoriaOption(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div style={containerStyle}>
      <h1 style={labelStyle}>Inserir Transferência</h1>
      <form action="" style={formStyle}>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Valor</label>
          <input
            name="valor"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Descrição</label>
          <input
            name="descricao"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
        <label htmlFor="selectOption" style={labelStyle}>
          Tipo da Transacao
        </label>
        <select
          id="id_tipo_transacao"
          name="id_tipo_transacao"
          value={tipoTransacaoSelecionado}
          onChange={handleTipoTransacaoChange}
          style={selectStyle}
        >
          <option style={optionStyle} value="">
            Selecione uma opção
          </option>
          {tipoTransacao?.tiposTransacoes?.map((option) => (
            <option
              style={optionStyle}
              key={option.id_tipo_transacao}
              value={option.id_tipo_transacao}
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

        <label htmlFor="selectOption" style={labelStyle}>
          Categoria
        </label>
        <select
          id="id_tipo_categoria"
          name="id_tipo_categoria"
          value={categoriaSelecionado}
          onChange={handleCategoriaChange}
          style={selectStyle}
        >
          <option style={optionStyle} value="">
            Selecione uma opção
          </option>
          {tipoCategoria?.tiposCategorias?.map((option) => (
            <option
              style={optionStyle}
              key={option.id_tipo_categoria}
              value={option.id_tipo_categoria}
            >
              {option.nome}
            </option>
          ))}
        </select>
        <button style={buttonStyle} onClick={inserirDados}>
          Inserir
        </button>
      </form>
    </div>
  );
}
