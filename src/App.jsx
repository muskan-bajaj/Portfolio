import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from "../src/component/NavBar/NavBar";
import Portfolio from "./Page/Portfolio";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
