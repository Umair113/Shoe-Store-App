import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from "../Shoes.json";


function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];
    if (!shoe) {
        return <h1>Cart</h1>
    }
    else
        return (
            <div >
                <div className="productContainer">


                    <div className="link">
                        <h4>{shoe["name"]}</h4>
                        <img src={shoe["img"]} alt={shoe.name} height="400px" width="100%" />
                    
                    </div>

                    
                </div>
            </div>
        );
}

export default ProductItem;
