import React from "react";
import FoodIcon from "../../components/shared/FoodIcon";

export default function Ingredients({ product }) {
  const ItemIngredients = product.ingredients.map((ingredient) => {
    return (
      <li key={ingredient}>
        <div className="btn btn-ghost pill">
          <FoodIcon reference={ingredient[1]} />
          <h3>{ingredient[0]}</h3>
        </div>
      </li>
    );
  });

  return (
    <section className="section-ingredients">
      <ul>{ItemIngredients}</ul>
    </section>
  );
}
