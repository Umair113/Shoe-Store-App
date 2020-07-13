import React from 'react';
import Card from "./Cards"

function Product() {
    return (
        <div >
            
            <h1>Welcome to Products page</h1>
            <div className="productContainer">
           
               <Card/>
            </div>
        </div>
    );
}

export default Product;
/** {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (<Link to={`${keyName}`} key={keyName} className="link">
                        <h4>{shoe["name"]}</h4>
                        <img src={shoe["img"]} alt={shoe.name} height="150px" />
                    </Link>)
                })} */