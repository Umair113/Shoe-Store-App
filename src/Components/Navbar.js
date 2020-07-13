import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
    return (
        <div >

            <nav className="nav">
                <Link to="/">Home</Link> |{'  '}
                <Link to="about">About</Link>|{' '}
                <Link to="product" >Product</Link>|{' '}
                <Link to="product/ide" >Product Items</Link>
                <Link to="product/ide" id="cart"><ShoppingCartIcon /></Link>
            </nav>
        </div>
    );
}

export default Navbar;
