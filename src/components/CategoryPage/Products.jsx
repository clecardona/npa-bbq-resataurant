import React from "react";

import meals from "../../assets/meals.json";

export default function Products({ category }) {
  const listOfProducts = getRelatedFood(meals, category);

  function getRelatedFood(array, categoryOfFood) {
    return array.filter((item) => {
      return item.category === categoryOfFood;
    });
  }

  const ProductsItems = listOfProducts.map((item) => {
    return (
      <a key={item.id} href={`./${item.category}/${item.id}`} className="card">
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">120 Kr</h2>
      </a>
    );
  });

  return <section className="section-products ">{ProductsItems}</section>;
}
