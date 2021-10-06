import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

//import categories from "../../assets/categories.json";
import { getCollection } from "../../scripts/fireStore";
import Products from "./Products";
import ButtonBack from "../shared/ButtonBack";
import firebaseInstance from "../../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

export default function CategoryPage() {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  const database = getFirestore(firebaseInstance);

  useEffect(() => {
    getCollection(database, "categories")
      .then((result) => {
        setCategories(result);
        setStatus(1);
      })
      .catch((error) => {
        console.log(error);
        setStatus(2);
      });
  }, [database]);

  function getCurrentCategory(array, categoryOfFood) {
    return array.filter((item) => {
      return item.name === categoryOfFood;
    });
  }
  const currentCategory = getCurrentCategory(categories, category)[0];
  console.log(currentCategory);

  return (
    <>
      {status === 0 && <p>Loading ⏱</p>}
      {status === 2 && <p>Error 🚨</p>}
      {status === 1 && (
        <main className="page-category">
          <section className="section-header">
            <h1>{currentCategory.name}</h1>
          </section>
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
