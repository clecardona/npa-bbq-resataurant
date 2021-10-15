//NPM Packages
import { useState } from "react";
//Project Files
import useFetch from "../../hooks/useFetch";
import { useFood } from "../../state/FoodProvider";
import BoxError from "../shared/BoxError";
import Create from "./Create";
import Edit from "./Edit";
import Sorter from "./Sorter";
import Spinner from "../shared/Spinner";

export default function AdminPage() {
  //Hooks
  const [selection, setSelection] = useState("create");
  const { dispatch } = useFood();
  const categories = useFetch("categories", dispatch);
  const dishes = useFetch("dishes", dispatch);

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
