import useFetch from "../../hooks/useFetch";
import { getRelatedFood } from "../../scripts/foodMethods";
//import meals from "../../assets/meals.json";

export default function Products({ category }) {
  const meals = useFetch("meals");
  console.log(meals);

  const listOfDishes = getRelatedFood(meals.data, category);

  const ProductsItems = listOfDishes.map((item) => {
    return (
      <a key={item.id} href={`./${item.category}/${item.id}`} className="card">
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">120 Kr</h2>
      </a>
    );
  });

  return (
    <>
      {meals.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {meals.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
      {!meals.loading && meals.error === null && (
        <>
          {listOfDishes.length === 0 ? (
            <h3>Category empty for now</h3>
          ) : (
            <section className="section-products ">{ProductsItems} </section>
          )}
        </>
      )}
    </>
  );
}
