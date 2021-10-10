import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import AddCategory from "./CreateCategory";
import BoxError from "../shared/BoxError";
import CreateDish from "./CreateDish";
import CreateCategory from "./EditCategory";
import Sorter from "./Sorter";
import Spinner from "../shared/Spinner";

export default function AdminPage() {
  //Hooks
  const [selection, setSelection] = useState("edit-cat");
  const categories = useFetch("categories");

  return (
    <div className="page-admin">
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
    </div>
  );
}
