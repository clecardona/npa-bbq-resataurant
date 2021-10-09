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
