import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { getRelatedItem } from "../../scripts/foodMethods";
import Description from "./Description";
import Ingredients from "./Ingredients";
import ButtonBack from "../../components/shared/ButtonBack";

export default function ProductPage() {
  // Hooks
  const meals = useFetch("meals");

  const { category } = useParams();
  const { productID } = useParams();
  const productIDNumber = Number.parseInt(productID);

  // Const
  const product = getRelatedItem(meals.data, productIDNumber);
  console.log(product);

  return (
    <>
      {meals.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {meals.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
      {!meals.loading && meals.error === null && (
        <main className="page-product">
          <Description product={product} />
          <Ingredients product={product} />
          <section className="section-price">
            <div className="line" />
            <h1>{product.price} Kr</h1>
          </section>
          <NavLink to={`/menu/${category}`} className="btn btn-main btn-300">
            <ButtonBack label="Go back" />
          </NavLink>
        </main>
      )}
    </>
  );
}
