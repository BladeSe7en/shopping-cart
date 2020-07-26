import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
const dispatch = useDispatch();

useEffect(() => {

});

   return (
    <div className = 'grid-container'>
        <header>
        <Link to="/">
          <button className="home-btn" >Shopping Cart</button>
        </Link>
        </header>
        <main>
            Product List
        </main>
        <footer>
            All Rights Reserved
        </footer>

    </div>
  )
}


