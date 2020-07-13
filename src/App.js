import React from 'react';
import './App.css';
//import Router from "./Router"
import Navbar from './Components/Navbar';
import { Routes, Route} from "react-router-dom";
import { Home, About, Product, ProductItem, NotFound } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="Product" element={<Product />} />
                <Route path="Product/:id/" element={<ProductItem />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    </div>
  );
}

export default App;
