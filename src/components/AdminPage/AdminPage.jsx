import { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import { getCollection } from "../../scripts/fireStore";
import { getFirestore } from "firebase/firestore/lite";
import firebaseInstance from "../../scripts/firebase";
import Sorter from "./Sorter";
import AddMeal from "./AddMeal";

export default function AdminPage() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const [isCategory, setIsCategory] = useState(true);

  // Properties
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

  console.log(categories);

  const Meals = meals.map((item) => {
    return <p key={item.id}>{item.title}</p>;
  });

  const Categories = categories.map((item) => {
    return <p key={item.id}>{item.name}</p>;
  });

  return (
    <main>
      <div className="page-admin">
        <section>
          {status === 0 && <p>Loading ⏱</p>}
          {status === 2 && <p>Error 🚨</p>}
          {/* <h2>Categories</h2>
        {status === 1 && <ul>{Categories}</ul>}

        <h2>Meals</h2>
        {status === 1 && <ul>{Meals}</ul>} */}
        </section>
        <Sorter hook={[isCategory, setIsCategory]} />
        {isCategory ? <AddCategory /> : <AddMeal />}
      </div>
    </main>
  );
}
