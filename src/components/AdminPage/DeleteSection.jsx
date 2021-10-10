import { deleteCategory } from "../../scripts/crud-database";

export default function DeleteSection({ element, children }) {
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
      <h3 className="admin-subtitle">{children}</h3>
      <p className="admin-instructions">
        1. Select the element on top of the page <br />
        2. Click on "delete" button
      </p>
      <button
        className="btn btn-main"
        disabled={element === ""}
        onClick={handleDeleteCategory}
      >
        <h4>
          {children} {element.title}
        </h4>
      </button>
    </form>
  );
}
