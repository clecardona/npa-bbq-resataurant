import { useState } from "react";

import { valDescr, valTitle, valPrice } from "../../scripts/formValidation";
import { updateCategory, updateDish } from "../../scripts/crud-database";
import form from "../../assets/form.json";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import UploadImage from "../shared/UploadImage";

export default function UpdateForm({ dataSelected, categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const { category, dish } = dataSelected;

  const newDish = {
    title: title.toLowerCase(),
    description: description,
    ingredients: ingredients,
    price: parseInt(price),
    category: category.id,
  };
  const newCategory = {
    title: title.toLowerCase(),
    description: description,
  };

  //Methods
  function handleUpdate(event) {
    event.preventDefault();
    if (dish) {
      if (typeof image === "object") {
        updateDish(newDish, image, dish);
      } else {
        updateDish(newDish, imageURL, dish);
      }
    } else {
      if (typeof image === "object") {
        updateCategory(newCategory, image, category);
      } else {
        updateCategory(newCategory, imageURL, category);
      }
    }
  }
  return (
    <form onSubmit={handleUpdate}>
      <h3 className="admin-subtitle">Update {dish ? "Dish" : "Category"}</h3>
      <p className="admin-instructions">
        - First select a category <br />- Select a dish if you want to update a
        dish <br />- Fill the field(s) you want to modify/update
      </p>
      <FormItem
        settings={form.title.settings}
        hook={[title, setTitle]}
        isValid={valTitle(title, categories)}
      />
      <FormItem
        settings={form.description.settings}
        hook={[description, setDescription]}
        isValid={valDescr(description)}
      />
      {dish && (
        <>
          <FormItem
            settings={form.ingredients.settings}
            hook={[
              ingredients.join(" "),
              (str) => {
                setIngredients(str.split(" "));
              },
            ]}
            isValid={ingredients.length > 0}
          />
          <FormItem
            settings={form.price.settings}
            hook={[price, setPrice]}
            isValid={valPrice(price)}
          />
        </>
      )}
      <UploadImage setImage={setImage} setImageURL={setImageURL} />
      <FormSubmit isAllValid={category !== ""} />
    </form>
  );
}
