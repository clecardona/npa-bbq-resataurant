import { NavLink } from "react-router-dom";
import home from "../../assets/icns/home.svg";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="home">
        <img src={home} alt="Home" />
      </NavLink>
      <div className="home-shape" />
      <nav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}
