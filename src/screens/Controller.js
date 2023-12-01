import React from "react";
import Home from "../screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header/Header";

const Controller = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Controller;
