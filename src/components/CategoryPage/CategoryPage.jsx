// NPM Packages
import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { getCurrentCategory } from "../../scripts/foodMethods";
import Products from "./Products";
import ButtonBack from "../shared/ButtonBack";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";

export default function CategoryPage() {
  // Custom Hooks
  const categories = useFetch("categories");

  //Const
  const { category } = useParams();
  const currentCategory = getCurrentCategory(categories.data, category);

  return (
    <>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main className="page-category">
          <h1>{currentCategory.title}</h1>

          <section className="section-description">
            <p>{currentCategory.description}</p>
          </section>

          <Products category={category} />

          <NavLink to={`/menu`} className="btn btn-main btn-300">
            <ButtonBack label="Go back" />
          </NavLink>
        </main>
      )}
    </>
  );
}
