import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu/dishes">Dishes</NavLink>

      <NavLink to="/menu/desserts">Desserts</NavLink>

      <NavLink to="/menu/drinks">Drinks</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
