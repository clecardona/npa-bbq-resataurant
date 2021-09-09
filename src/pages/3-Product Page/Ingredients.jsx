import React from "react";

export default function Ingredients({ product }) {
  return (
    <section className="section-ingredients">
      <ul>
        {product.ingredients.map((ingredient) => {
          return (
            <li key={ingredient}>
              <div className="btn btn-ghost pill">
                <h3>{ingredient}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
