import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";
import Dropdown from "../shared/Dropdown";

import { createDoc } from "../../scripts/fireStore";
const imageLink =
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80";
export default function AddMeal({ categories, database }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState(imageLink);
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  //Methods

  function addMeal(event) {
    event.preventDefault();
    const newMeal = {
      id: Date.now(),
      title: title,
      description: description,
      ingredients: ingredients,
      imageURL: imageURL,
      price: price,
      category: category,
    };

    createDoc(database, "meals", newMeal);
    alert(
      newMeal.title + " successfully added to category " + newMeal.category
    );
  }

  function handleClick(element) {
    setCategory(element);
  }

  return (
    <section className="section-admin">
      <h2>Add new Meal</h2>
      <Dropdown
        categories={categories}
        handleClick={handleClick}
        category={category}
      />
      <form
        onSubmit={(event, name, description, imageURL) =>
          addMeal(event, name, description, imageURL)
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
            <input type="file" className="btn-circle" />
          </label>
          <h4>Select Meal image</h4>
        </div>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
