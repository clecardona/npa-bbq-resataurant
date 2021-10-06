import React from "react";
import categories from "../../assets/categories.json";

export default function MenuPage() {
  const MenuItems = categories.map((item) => {
    return (
      <a href={`/menu/${item.name}`} className="card" key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </a>
    );
  });

  return (
    <div className="page-menu">
      <h1>- Menu -</h1>
      <section className="section-menu ">{MenuItems}</section>
    </div>
  );
}
