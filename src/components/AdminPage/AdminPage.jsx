import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import AddCategory from "./CreateCategory";
import Sorter from "./Sorter";
import CreateDish from "./CreateDish";
import CreateCategory from "./EditCategory";
import Spinner from "../shared/Spinner";
import BoxError from "../shared/BoxError";

export default function AdminPage() {
  //hooks
  const [selection, setSelection] = useState("edit-cat");
  const categories = useFetch("categories");

  // Methods
  return (
    <>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main>
          <div className="page-admin">
            <Sorter hook={[selection, setSelection]} />
            {selection === "new-cat" && (
              <AddCategory categories={categories.data} />
            )}
            {selection === "new-dish" && (
              <CreateDish categories={categories.data} />
            )}
            {selection === "edit-cat" && (
              <CreateCategory categories={categories.data} />
            )}
          </div>
        </main>
      )}
    </>
  );
}
