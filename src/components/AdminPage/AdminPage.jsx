//NPM Packages
import { useState, useEffect } from "react";
//Project Files
import { useFood } from "../../state/FoodProvider";
import { getCollection } from "../../scripts/fireStore";
import { getFirestore } from "firebase/firestore/lite";
import firebaseInstance from "../../scripts/firebase";

import BoxError from "../shared/BoxError";
import Create from "./Create";
import Edit from "./Edit";
import Sorter from "./Sorter";
import Spinner from "../shared/Spinner";

export default function AdminPage() {
  //Hooks
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState("create");
  const [refresh, setRefresh] = useState(true);
  const { dispatch } = useFood();

  const database = getFirestore(firebaseInstance);

  // Methods
  async function fetchData(db, someCollection, setData) {
    try {
      const response = await getCollection(db, someCollection);
      dispatch({ type: "SET_FOOD", payload: someCollection });
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    () => fetchData(database, "categories", setCategories),
    [refresh, selection]
  );
  useEffect(
    () => fetchData(database, "dishes", setDishes),
    [refresh, selection]
  );

  return (
    <div className="page-admin">
      {loading === true && <Spinner />}
      {error !== null && <BoxError />}
      {!loading && error === null && (
        <main>
          <div className="page-admin">
            <Sorter hook={[selection, setSelection]} />
            {selection === "create" && (
              <Create
                categories={categories}
                onRefresh={() => setRefresh(!refresh)}
              />
            )}
            {selection === "edit-del" && (
              <Edit
                categories={categories}
                dishes={dishes}
                onRefresh={() => setRefresh(!refresh)}
              />
            )}
          </div>
        </main>
      )}
    </div>
  );
}
