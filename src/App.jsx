/* eslint-disable no-unused-vars */
App.jsx;
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { HiMenu } from "react-icons/hi";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContasBancarias from "./ContasBancarias";
import Error from "./Error";
import DetalhesConta from "./DetalhesConta";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const contentStyles = {
    width: "100vw",
    height: "100vh",
  };

  const contentButtonStyles = {
    marginLeft: isOpen ? "250px" : "0",
    transition: "margin-left 0.3s",
  };

  return (
    // <div className="app" style={contentStyles}>
    //   <button onClick={toggleSidebar} style={contentButtonStyles}>
    //     <HiMenu />
    //   </button>
    //   {isOpen && <Sidebar />}
    //   <MainContent isOpen={isOpen} />
    // </div>
    <Router>
      <div className="app">
        <button onClick={toggleSidebar} style={contentButtonStyles}>
          <HiMenu />
        </button>
        {isOpen && <Sidebar />}
        <Routes>
          <Route path="/" element={<MainContent isOpen={isOpen} />} />
          <Route
            path="/contas"
            element={
              <Error>
                <ContasBancarias isOpen={isOpen} />
              </Error>
            }
          />
          <Route
            path="/contas/:idConta"
            element={<DetalhesConta isOpen={isOpen} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
