/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { api } from "./api";

export default function ModalInserirConta() {
  const [formData, setFormData] = useState({
    saldo: "",
    nomeDaConta: "",
    tipoDeConta: "",
    dono: "",
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    async function getTiposContas() {
      try {
        const response = await api.get("/tipoConta");
        if (response.status === 200) {
          const { data } = response;
          console.log(data.tiposContas);
          setOptions(data);
        } else {
          console.error("Erro ao buscar dados da API");
        }
      } catch (error) {
        console.error("Erro na solicitação para a API:", error);
      }
    }

    // Chama a função para buscar os dados quando o componente é montado
    getTiposContas();
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
      const response = await api.post("/conta", formData);

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

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOption(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div style={containerStyle}>
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
          value={selectedOption}
          onChange={handleSelectChange}
          style={selectStyle}
        >
          <option style={optionStyle} value="">
            Selecione uma opção
          </option>
          {options?.tiposContas?.map((option) => (
            <option
              style={optionStyle}
              key={option.id_tipo_conta}
              value={option.id_tipo_conta}
            >
              {option.nome}
            </option>
          ))}
        </select>
        <div className="card" style={contentStyle}>
          <label style={labelStyle}>Dono</label>
          <input
            name="id_usuario"
            onChange={handleInputChange}
            type="text"
            style={inputStyle}
          />
        </div>
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
          Inserir
        </button>
      </form>
    </div>
  );
}
