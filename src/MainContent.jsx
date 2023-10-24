/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function MainContent({ isOpen, toggleSidebar }) {
  const contentStyles = {
    marginLeft: isOpen ? "250px" : "0",
    transition: "margin-left 0.3s",
    fontFamily: "'Poppins', sans-serif",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  };

  const content2Styles = {
    display: "inline",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

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

  const paragrafolStyles = {
    color: "#F77394",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "normal",
    WebkitTextStroke: "1px #FDB5C7",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div className="content" style={contentStyles}>
      <div style={content2Styles}>
        <h1 style={tituloPrincipalStyles}>
          Money Minder - Mantenha Seu Dinheiro no Controle
        </h1>
        <p style={paragrafolStyles}>
          O Money Minder é a sua solução abrangente para rastrear, gerenciar e
          otimizar suas finanças pessoais. Seja para controlar despesas diárias,
          planejar orçamentos mensais ou alcançar suas metas financeiras, o
          Money Minder está aqui para ajudar. Com recursos avançados de
          categorização, relatórios visuais e notificações inteligentes, você
          terá uma visão clara do seu dinheiro como nunca antes. Transforme seus
          objetivos financeiros em realidade com o Money Minder, seu parceiro
          financeiro de confiança
        </p>
      </div>
    </div>
  );
}

export default MainContent;
