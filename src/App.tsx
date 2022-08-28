import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { AllMenu } from "./components/allMenu/allMenu";
import { Header } from "./components/header/header";
import { Order } from "./components/order/order";
import { FailPage } from "./components/404/404";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/menu" element={<AllMenu />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/" element={<Main />} />

          <Route path="*" element={<FailPage />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
