import { useState } from "react";

import { validElement } from "../../scripts/formValidation";
import { updateCat, updateDish } from "../../scripts/crud-database";
import FormSubmit from "../shared/FormSubmit";
import FormDish from "./FormDish";
import FormCategory from "./FormCategory";
import UploadImage from "../shared/UploadImage";

export default function UpdateForm({ dataSelected, categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  //Const
  const { category, dish } = dataSelected;
  const newData = {
    title: title.toLowerCase(),
    description: description,
    ingredients: ingredients,
    price: parseInt(price),
    categoryID: category.id,
  };
  const isElementValid = validElement(newData, categories);
  const isBytes = typeof image === "object";

  //Methods
  function handleUpdate(event) {
    event.preventDefault();
    if (dish) {
      updateDish(newData, isBytes ? image : imageURL, dish);
    } else {
      updateCat(newData, isBytes ? image : imageURL, category);
    }
  }
  return (
    <form onSubmit={handleUpdate}>
      <h3 className="admin-subtitle">Update {dish ? "Dish" : "Category"}</h3>
      <p className="admin-instructions">
        - First select a category <br />- Select a dish if you want to update a
        dish <br />- Fill the field(s) you want to modify/update
      </p>
      <FormCategory
        hookTitle={[title, setTitle]}
        hookDescription={[description, setDescription]}
        isValid={isElementValid}
      />
      {dish && (
        <FormDish
          hookIng={[ingredients, setIngredients]}
          hookPrice={[price, setPrice]}
          isValid={isElementValid}
        />
      )}
      <UploadImage setImage={setImage} setImageURL={setImageURL} />
      <FormSubmit isAllValid={category !== ""} />
    </form>
  );
}
