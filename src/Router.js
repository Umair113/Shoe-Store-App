import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Home, About, Product, ProductItem, NotFound } from "./Components";
import Navbar from './Components/Navbar';

function Router() {
    return (
        <div>
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

export default Router;