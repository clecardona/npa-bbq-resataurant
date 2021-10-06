import React from "react";
import { useParams, NavLink } from "react-router-dom";

import foodData from "../../assets/meals.json";
import Description from "./Description";
import Ingredients from "./Ingredients";
import ButtonBack from "../../components/shared/ButtonBack";

export default function ProductPage() {
  const { category } = useParams();
  const { productID } = useParams();
  const productIDNumber = Number.parseInt(productID);

  function getRelatedItem(id) {
    return foodData.filter((item) => {
      return item.id === id;
    });
  }
  const product = getRelatedItem(productIDNumber)[0];

  return (
    <main className="page-product">
      <Description product={product} />
      <Ingredients product={product} />
      <section className="section-price">
        <div className="line" />
        <h1>150 Kr</h1>
      </section>
      <NavLink to={`/menu/${category}`} className="btn btn-main btn-300">
        <ButtonBack label="Go back" />
      </NavLink>
    </main>
  );
}
