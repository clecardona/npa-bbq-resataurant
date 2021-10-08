import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import Dropdown from "../shared/Dropdown";
import { addMeal } from "../../scripts/foodMethods";

export default function AddDishForm({ categories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  //Methods
  function handleClick(element) {
    setCategory(element);
  }

  return (
    <section className="section-admin">
      <h2>Add new Dish</h2>
      <Dropdown
        categories={categories}
        handleClick={handleClick}
        category={category}
      />
      <form
        onSubmit={(event) =>
          addMeal(
            event,
            title,
            description,
            image,
            category,
            ingredients,
            price
          )
        }
      >
        <div className="empty" />
        <FormItem
          settings={form[4].settings}
          hook={[title, setTitle]}
          isValid={true}
        />
        <FormItem
          settings={form[5].settings}
          hook={[description, setDescription]}
          isValid={true}
        />
        <FormItem
          settings={form[6].settings}
          hook={[
            ingredients.join(" "),
            (str) => {
              const array = str.split(" ");
              setIngredients(array);
            },
          ]}
          isValid={true}
        />
        <FormItem
          settings={form[7].settings}
          hook={[price, setPrice]}
          isValid={true}
        />

        <div className="add">
          <label>
            +
            <input
              type="file"
              className="btn-circle"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <h4>Select Dish image</h4>
        </div>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
