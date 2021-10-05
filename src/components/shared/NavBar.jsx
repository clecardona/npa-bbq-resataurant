import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
}
