import React from "react";
import {
  Footer,
  Blog,
  WhatGPT,
  Header,
  Possibilty,
  Featurs
} from "./containers";
import { Cat, Brand, Navbar } from "./components";
import "./app.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Possibilty />
      <Featurs />
      <Cat />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
