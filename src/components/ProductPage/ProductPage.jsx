import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { getRelatedItem } from "../../scripts/foodMethods";
import Description from "./Description";
import Ingredients from "./Ingredients";

import BoxError from "../shared/BoxError";
import ButtonBack from "../shared/ButtonBack";
import Spinner from "../shared/Spinner";

export default function ProductPage() {
  // Hooks
  const dishes = useFetch("dishes");

  const { category } = useParams();
  const { productID } = useParams();
  const productIDNumber = Number.parseInt(productID);

  // Const
  const product = getRelatedItem(dishes.data, productIDNumber);

  return (
    <>
      {dishes.loading === true && <Spinner />}
      {dishes.error !== null && <BoxError />}
      {!dishes.loading && dishes.error === null && (
        <main className="page-product">
          <Description product={product} />
          <Ingredients product={product} />
          <section className="section-price">
            <p>{product.price} Kr</p>
          </section>
          <NavLink to={`/menu/${category}`} className="btn btn-main btn-300">
            <ButtonBack label="Go back" />
          </NavLink>
        </main>
      )}
    </>
  );
}
