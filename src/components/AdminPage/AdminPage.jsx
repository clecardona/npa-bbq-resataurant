import { useState } from "react";
import { getFirestore } from "firebase/firestore/lite";

import useFetch from "../../hooks/useFetch";
import AddCategory from "./AddCategory";
import firebaseInstance from "../../scripts/firebase";
import Sorter from "./Sorter";
import AddMeal from "./AddMeal";

export default function AdminPage() {
  //hooks
  const [isCategory, setIsCategory] = useState(false);
  const categories = useFetch("categories");
  // Properties
  const database = getFirestore(firebaseInstance);

  // Methods

  return (
    <>
      {categories.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {categories.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
      {!categories.loading && categories.error === null && (
        <main>
          <div className="page-admin">
            <Sorter hook={[isCategory, setIsCategory]} />
            {isCategory ? (
              <AddCategory categories={categories.data} database={database} />
            ) : (
              <AddMeal categories={categories.data} database={database} />
            )}
          </div>
        </main>
      )}
    </>
  );
}
