import useFetch from "../../hooks/useFetch";
//import categories from "../../assets/categories.json";

export default function MenuPage() {
  // Custom Hooks
  const categories = useFetch("categories");
  console.log(categories);

  const MenuItems = categories.data.map((item) => {
    return (
      <a href={`/menu/${item.title}`} className="card" key={item.id}>
        <img src={item.imageURL} alt="img" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </a>
    );
  });

  return (
    <main>
      {categories.loading === true && <p>Loading ⏱</p>} {/* TODO - Spinner */}
      {categories.error !== null && <p>Error 🚨</p>} {/* TODO - custom error */}
      {!categories.loading && categories.error === null && (
        <div className="page-menu">
          <h1>Menu</h1>
          <section className="section-menu ">{MenuItems}</section>
        </div>
      )}
    </main>
  );
}
