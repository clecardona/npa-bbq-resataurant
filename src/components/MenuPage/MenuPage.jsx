import { useState, useEffect } from "react";
//import categories from "../../assets/categories.json";
import { getCollection } from "../../scripts/fireStore";
import firebaseInstance from "../../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

export default function MenuPage() {
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

  const MenuItems = categories.map((item) => {
    return (
      <a href={`/menu/${item.name}`} className="card" key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </a>
    );
  });

  return (
    <div className="page-menu">
      <h1>- Menu -</h1>
      <section className="section-menu ">{MenuItems}</section>
    </div>
  );
}
