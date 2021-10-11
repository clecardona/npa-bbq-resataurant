//NPM Packages
import { useState, useContext } from "react";

import useFetch from "../../hooks/useFetch";
import BoxError from "../shared/BoxError";
import Create from "./Create";
import Edit from "./Edit";
import Sorter from "./Sorter";
import Spinner from "../shared/Spinner";

export default function AdminPage() {
  //Hooks
  const [selection, setSelection] = useState("create");
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
            {selection === "create" && <Create categories={categories.data} />}
            {selection === "edit-del" && (
              <Edit categories={categories.data} dishes={dishes.data} />
            )}
          </div>
        </main>
      )}
    </div>
  );
}
