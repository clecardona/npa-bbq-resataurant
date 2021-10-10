//NPM Packages
import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import BoxError from "../shared/BoxError";
import CreateCategory from "./CreateCategory";
import CreateDish from "./CreateDish";
import EditCategory from "./EditCategory";
import EditDish from "./EditDish";
import Sorter from "./Sorter";
import Spinner from "../shared/Spinner";

export default function AdminPage() {
  //Hooks
  const [selection, setSelection] = useState("edit-dish");
  const categories = useFetch("categories");
  const dishes = useFetch("dishes");

  return (
    <div className="page-admin">
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main>
          <div className="page-admin">
            <Sorter hook={[selection, setSelection]} />
            {selection === "new-cat" && (
              <CreateCategory categories={categories.data} />
            )}
            {selection === "new-dish" && (
              <CreateDish categories={categories.data} />
            )}
            {selection === "edit-cat" && (
              <EditCategory categories={categories.data} />
            )}
            {selection === "edit-dish" && (
              <EditDish categories={categories.data} dishes={dishes.data} />
            )}
          </div>
        </main>
      )}
    </div>
  );
}
