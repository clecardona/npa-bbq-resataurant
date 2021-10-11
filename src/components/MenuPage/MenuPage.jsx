import { useContext } from "react";

import useFetch from "../../hooks/useFetch";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";
import { FoodContext } from "../../state/FoodProvider";

export default function MenuPage() {
  const value = useContext(FoodContext);
  console.log(value);
  // Hooks
  const categories = useFetch("categories");

  const MenuItems = categories.data.map((item) => {
    return (
      <a href={`/menu/${item.id}`} className="card" key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </a>
    );
  });

  return (
    <main>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <div className="page-menu">
          <h1>Menu</h1>
          <section className="section-menu ">{MenuItems}</section>
        </div>
      )}
    </main>
  );
}
