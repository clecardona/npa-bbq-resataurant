import React from "react";
import menu from "../../assets/menuItems.json";
import { NavLink } from "react-router-dom";
import ButtonForward from "../../components/shared/ButtonForward";

export default function Menu() {
  const MenuItems = menu.map((item) => {
    return (
      <article key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <NavLink to={`/menu/${item.name}`} className="btn btn-ghost">
          <ButtonForward label="View Products" />
        </NavLink>
      </article>
    );
  });

  return <section className="section-menu ">{MenuItems}</section>;
}
