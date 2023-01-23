import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import "../src/App.css"
import Info from "./Component/Info/Info";

const App = () => {

  return (
    <BrowserRouter>
        <Navbar/>
        <Info/>
      </BrowserRouter>
  );
};

export default App;
