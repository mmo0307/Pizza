import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/front/components/main/Main";
import { AllMenu } from "./pages/front/components/allMenu/allMenu";
import { Header } from "./pages/front/components/header/header";
import { Order } from "./pages/front/components/order/order";
import { FailPage } from "./pages/404/404";
import { Login } from "./pages/front/components/authorization/login/login";
import { Registration } from "./pages/front/components/authorization/registration/registration";

//import { Admin } from "./pages/admin";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/menu" element={<AllMenu />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/user/registration" element={<Registration />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/" element={<Main />} />


          {/* <Route path="/admin" element={<Admin />} /> */}

          <Route path="*" element={<FailPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
