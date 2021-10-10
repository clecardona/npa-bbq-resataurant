import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="home">
        <img src={logo} alt="Home" />
        <div className="home-shape" />
      </NavLink>
      <nav>
        <NavLink to="/menu">
          <h4>Menu</h4>
        </NavLink>
        <NavLink to="/contact">
          <h4>Contact</h4>
        </NavLink>
        <NavLink to="/admin">
          <h4>Admin</h4>
        </NavLink>
      </nav>
    </header>
  );
}
