import SortButton from "./SortButton";

export default function Sorter({ hook }) {
  return (
    <section className="section-sorter">
      {/*       <SortButton target="new-cat" hook={hook}>
        Create Category
      </SortButton> */}

      <SortButton target="create" hook={hook}>
        Create
      </SortButton>

      <SortButton target="edit-del" hook={hook}>
        Edit / Delete
      </SortButton>
    </section>
  );
}
