import { deleteElement } from "../../scripts/crud-database";

export default function Delete({ dataSelected }) {
  const { category, dish } = dataSelected;

  function handleDelete() {
    if (window.confirm("Are you sure ?")) {
      if (dish) {
        deleteElement("dishes", dish.id);
      } else {
        deleteElement("categories", category.id);
      }
      alert("Successfully deleted");
    }
  }

  return (
    <form>
      <h3 className="admin-subtitle">Delete {dish ? "Dish" : "Category"}</h3>
      <p className="admin-instructions">
        - Select the element on top of the page <br />- Click on "delete" button
      </p>
      <button
        className="btn btn-main"
        disabled={category === ""}
        onClick={handleDelete}
      >
        <h4>Delete {dish ? dish.title : category.title}</h4>
      </button>
    </form>
  );
}
