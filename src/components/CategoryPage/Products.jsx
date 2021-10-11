import useFetch from "../../hooks/useFetch";
import { getRelatedFood } from "../../scripts/foodMethods";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";

export default function Products({ category }) {
  // Hook
  const dishes = useFetch("dishes");

  // Const
  const listOfDishes = getRelatedFood(dishes.data, category.id);

  // Component
  const ProductsItems = listOfDishes.map((item) => {
    return (
      <a
        key={item.id}
        href={`./${item.categoryID}/${item.id}`}
        className="card"
      >
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">{item.price} Kr</h2>
      </a>
    );
  });

  return (
    <>
      {dishes.loading === true && <Spinner />}
      {dishes.error !== null && <BoxError />}
      {!dishes.loading && dishes.error === null && (
        <>
          {listOfDishes.length === 0 ? (
            <h4 className="empty-list">Category empty for now</h4>
          ) : (
            <section className="section-products ">{ProductsItems} </section>
          )}
        </>
      )}
    </>
  );
}
