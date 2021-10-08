import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import AddCategory from "./AddCategory";
import Sorter from "./Sorter";
import AddDishForm from "./AddDishForm";

export default function AdminPage() {
  //hooks
  const [isCategory, setIsCategory] = useState("new-cat");
  const categories = useFetch("categories"); //TODO - refactor MEALS to DISHES

  // Methods

  return (
    <>
      {categories.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {categories.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
      {!categories.loading && categories.error === null && (
        <main>
          <div className="page-admin">
            <Sorter hook={[isCategory, setIsCategory]} />
            {isCategory === "new-cat" && (
              <AddCategory categories={categories.data} />
            )}
            {isCategory === "new-dish" && (
              <AddDishForm categories={categories.data} />
            )}
          </div>
        </main>
      )}
    </>
  );
}
