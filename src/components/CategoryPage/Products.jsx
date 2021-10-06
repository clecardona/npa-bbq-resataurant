import { useState, useEffect } from "react";
import { getCollection } from "../../scripts/fireStore";

import firebaseInstance from "../../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
//import meals from "../../assets/meals.json";

export default function Products({ category }) {
  const [meals, setMeals] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  const database = getFirestore(firebaseInstance);

  // Methods
  useEffect(() => {
    getCollection(database, "meals")
      .then((result) => {
        setMeals(result);
        setStatus(1);
      })
      .catch((error) => {
        console.log(error);
        setStatus(2);
      });
  }, [database]);

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

  return (
    <>
      {listOfProducts.length === 0 ? (
        <h3>Category empty for now</h3>
      ) : (
        <section className="section-products ">{ProductsItems} </section>
      )}
    </>
  );
}
