import useFetch from "../../hooks/useFetch";
import { getRelatedFood } from "../../scripts/foodMethods";

export default function Products({ category }) {
  // Hook
  const dishes = useFetch("dishes");

  // Const
  const listOfDishes = getRelatedFood(dishes.data, category.id);

  const ProductsItems = listOfDishes.map((item) => {
    console.log(item.category);
    return (
      <a key={item.id} href={`./${item.category}/${item.id}`} className="card">
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">{item.price} Kr</h2>
      </a>
    );
  });

  return (
    <>
      {dishes.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {dishes.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
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
