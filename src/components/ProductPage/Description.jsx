import React from "react";

export default function Description({ product }) {
  return (
    <section className="section-product_description">
      <h2>{product.title}</h2>
      <img alt="img" src={product.imageURL} />
      <p>{product.description}</p>
    </section>
  );
}
