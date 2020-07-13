import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div class="home">
      <h1>Home </h1>
      <img src="https://cdn.pixabay.com/photo/2014/09/22/00/56/hiking-boots-455754_960_720.jpg" alt="best shoes" id="homeImg"/>
      <h3>Take a look at our {` `} 
      <Link to="product" >Products</Link>
      </h3>
    </div>
  );
}

export default Home;
