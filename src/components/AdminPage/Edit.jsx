//NPM Packages
import { useState } from "react";

import { getRelatedFood } from "../../scripts/foodMethods";
import Dropdown from "../shared/Dropdown";
import Delete from "./Delete";
import Update from "./Update";

export default function Edit({ categories, dishes, onRefresh }) {
  //Hooks
  const [category, setCategory] = useState("");
  const [dish, setDish] = useState("");

  const relatedDishes = getRelatedFood(dishes, category.id);

  return (
    <section className="section-admin">
      <h2> Edit {dish ? "Dish" : "Category"}</h2>
      <div className="drop-container">
        <Dropdown
          items={categories}
          hook={[category, setCategory]}
          onRefresh={onRefresh}
        >
          Category
        </Dropdown>
        <Dropdown
          items={relatedDishes}
          hook={[dish, setDish]}
          onRefresh={onRefresh}
        >
          Dish
        </Dropdown>
      </div>
      <Update
        categories={categories}
        dataSelected={{ category, dish }}
        onRefresh={onRefresh}
      />
      <Delete dataSelected={{ category, dish }} />
    </section>
  );
}
