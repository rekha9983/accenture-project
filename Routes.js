import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Orderpizza from "./Orderpizza";
import Buildpizza from "./Buildpizza";
export default function Myrouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Homepage/>} />
            <Route path="orderpizza" element={<Orderpizza/>} />
            <Route path="Buildpizza" element={<Buildpizza/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Myrouter/>);