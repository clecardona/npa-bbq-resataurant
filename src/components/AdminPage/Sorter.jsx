import SortButton from "./SortButton";

export default function Sorter({ hook }) {
  return (
    <section className="section-sorter">
      <SortButton target="new-cat" hook={hook}>
        Create Category
      </SortButton>

      <SortButton target="new-dish" hook={hook}>
        Create Dish
      </SortButton>

      <SortButton target="edit-cat" hook={hook}>
        Edit Category
      </SortButton>

      <SortButton target="edit-dish" hook={hook}>
        Edit Dish
      </SortButton>
    </section>
  );
}
