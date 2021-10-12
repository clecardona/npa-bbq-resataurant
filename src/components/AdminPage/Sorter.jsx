import SortButton from "./SortButton";

export default function Sorter({ hook }) {
  return (
    <section className="section-sorter">
      <SortButton target="create" hook={hook}>
        Create
      </SortButton>
      <SortButton target="edit-del" hook={hook}>
        Edit
      </SortButton>
    </section>
  );
}
