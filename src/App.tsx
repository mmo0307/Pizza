import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { AllMenu } from "./components/allMenu/allMenu";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/menu" element={<AllMenu />}></Route>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
