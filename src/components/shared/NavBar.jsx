import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/menu/dishes" className="nav-item">
        Dishes
      </NavLink>

      <NavLink to="/menu/desserts">Desserts</NavLink>

      <NavLink className="home" to="/">
        <img
          src="https://clecardona.com/npa/vegan_restaurant/logo.png"
          alt="logo"
        />
        <h4>W+TM</h4>
      </NavLink>

      <NavLink to="/menu/drinks">Drinks</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
