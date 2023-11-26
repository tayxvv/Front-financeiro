/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "./api";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";
import ModalInserirTransferencia from "./ModalInserirTransferencia";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import ModalUpdateConta from "./ModalUpdateConta";

Modal.setAppElement("#root");

async function getContaBancaria(id) {
  const { data } = await api.get(`/conta/${id}`);
  return data;
}

export default function DetalhesConta({ isOpen }) {
  const { idConta } = useParams();
  const [conta, setContas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openUpdateModal = () => {
    setUpdateModalIsOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };

  useEffect(() => {
    async function fetchContas() {
      try {
        const response = await getContaBancaria(idConta);
        setContas(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar contas:", error);
        setLoading(false);
      }
    }

    fetchContas();
  }, [idConta]);

  const handleDelete = async () => {
    try {
      await api.delete(`/conta/${idConta}`);
      window.location.reload();
      window.location.href = "/contas";
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
    }
  };

  const tituloPrincipalStyles = {
    color: "#F77394",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontSize: "80px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    WebkitTextStroke: "2px #FB9BB3",
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
  };

  const divPrincipalStyle = {
    borderRadius: "10px",
    background: "#FFF8DC",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
    width: "50rem",
    height: "32rem",
    marginTop: 30,
  };

  const styleH1 = {
    color: "#F77394",
    textShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    WebkitTextStroke: "2px #FB9BB3",
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    paddingRight: 10,
  };

  const styleH2 = {
    color: "#F4A9A9",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "0px",
  };

  const buttonStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50px",
    marginLeft: "10px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginLeft: isOpen ? "250px" : "0",
          transition: "margin-left 0.3s",
        }}
      >
        {console.log(conta)}
        <h1 style={tituloPrincipalStyles}>
          Conta {conta?.contaBancaria?.numero_conta}
        </h1>
        <div style={divPrincipalStyle}>
          <div
            style={{
              display: "inline",
              marginLeft: 40,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", margin: "30px" }}>
              <h1 style={styleH1}>Saldo: </h1>
              <h2 style={styleH2}>R${conta?.contaBancaria?.saldo}</h2>
            </div>
            <div style={{ display: "flex", margin: "30px" }}>
              <h1 style={styleH1}>Nome da Conta: </h1>
              <h2 style={styleH2}>{conta?.contaBancaria?.nome_conta}</h2>
            </div>
            <div style={{ display: "flex", margin: "30px" }}>
              <h1 style={styleH1}>Tipo de Conta: </h1>
              <h2 style={styleH2}>{conta?.contaBancaria?.nome_tipo_conta}</h2>
            </div>
            <div style={{ display: "flex", margin: "30px" }}>
              <h1 style={styleH1}>Data de Criação: </h1>
              <h2 style={styleH2}>{conta?.contaBancaria?.data_conta}</h2>
            </div>
            <div style={{ display: "flex" }}>
              <button style={buttonStyle} onClick={openUpdateModal}>
                <AiOutlineEdit />
              </button>
              <button style={buttonStyle} onClick={handleDelete}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{ width: "80px", height: "80px", borderRadius: "50px" }}
        onClick={openModal}
      >
        <AiOutlinePlus />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
      >
        <button onClick={closeModal} style={buttonStyle}>
          <AiOutlineClose></AiOutlineClose>
        </button>
        <ModalInserirTransferencia></ModalInserirTransferencia>
      </Modal>

      <Modal
        isOpen={updateModalIsOpen}
        onRequestClose={closeUpdateModal}
        contentLabel="Update Account Modal"
      >
        <button onClick={closeUpdateModal} style={buttonStyle}>
          <AiOutlineClose />
        </button>
        <ModalUpdateConta></ModalUpdateConta>
      </Modal>
    </div>
  );
}
