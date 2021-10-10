import { deleteCategory } from "../../scripts/crud-database";

export default function DeleteSection({ element }) {
  function handleDeleteCategory() {
    if (
      window.confirm(
        "Are you sure you want to delete category " + element.title + " ?"
      )
    ) {
      deleteCategory(element.id);
      alert("Category " + element.title + " successfully deleted");
    }
  }
  return (
    <form>
      <h3 className="admin-subtitle">Delete Category</h3>
      <p className="admin-instructions">
        1. Select a category <br />
        2. Click on "delete" button
      </p>
      <button
        className="btn btn-main"
        disabled={element === ""}
        onClick={handleDeleteCategory}
      >
        <h4> Delete Category {element.title}</h4>
      </button>
    </form>
  );
}
