export default function Sorter({ hook }) {
  const [isCategory, setIsCategory] = hook;

  return (
    <section className="section-sorter">
      <button
        className={!isCategory ? "btn btn-inactive " : "btn btn-active"}
        onClick={() => {
          setIsCategory(true);
        }}
      >
        <h4>New Category</h4>
      </button>

      <button
        className={isCategory ? "btn btn-inactive" : "btn btn-active"}
        onClick={() => {
          setIsCategory(false);
        }}
      >
        <h4>New Meal</h4>
      </button>
    </section>
  );
}
