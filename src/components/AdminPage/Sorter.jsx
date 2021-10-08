export default function Sorter({ hook }) {
  const [isCategory, setIsCategory] = hook;

  return (
    <section className="section-sorter">
      <button
        className={
          isCategory === "new-cat" ? "btn btn-active " : "btn btn-inactive"
        }
        onClick={() => {
          setIsCategory("new-cat");
        }}
      >
        <h4>New Category</h4>
      </button>

      <button
        className={
          isCategory === "new-dish" ? "btn btn-active " : "btn btn-inactive"
        }
        onClick={() => {
          setIsCategory("new-dish");
        }}
      >
        <h4>New Dish</h4>
      </button>

      <button
        className={
          isCategory === "edit-cat" ? "btn btn-active " : "btn btn-inactive"
        }
        onClick={() => {
          setIsCategory("edit-cat");
        }}
      >
        <h4>Edit Categories</h4>
      </button>

      <button
        className={
          isCategory === "edit-dish" ? "btn btn-active " : "btn btn-inactive"
        }
        onClick={() => {
          setIsCategory("edit-dish");
        }}
      >
        <h4>Edit Dish</h4>
      </button>
    </section>
  );
}
