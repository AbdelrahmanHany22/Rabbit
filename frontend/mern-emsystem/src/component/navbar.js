import React, { Component } from "react";
import '../style.css';

export default function navbar(props){
  return <div>
    <header>
      <nav className="navbar">
    <h2 className="navbar-brand">Rabbit</h2>
      <ul>
      <li><a href="#home">My Account</a></li>
      <li><a href="#news">Cart</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#about">About</a></li>
    </ul>
</nav>

    </header>
    

  </div>
}
