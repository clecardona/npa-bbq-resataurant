import React from "react";
import { useParams, NavLink } from "react-router-dom";

import menuData from "../../assets/menuItems.json";
import Products from "./Products";
import ButtonBack from "../shared/ButtonBack";

export default function CategoryPage() {
  const { category } = useParams();

  function getCategoryDescription(array, categoryOfFood) {
    return array.filter((item) => {
      return item.name === categoryOfFood;
    })[0].description;
  }

  const description = getCategoryDescription(menuData, category);

  return (
    <main className="page-category">
      <section className="section-header">
        <h1>{category}</h1>
      </section>
      <section className="section-description">
        <p>{description}</p>
      </section>
      <Products category={category} />

      <NavLink to={`/`} className="btn btn-main btn-300">
        <ButtonBack label="Go back" />
      </NavLink>
    </main>
  );
}
