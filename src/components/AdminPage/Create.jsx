import { useState } from "react";

import { createCategory, createDish } from "../../scripts/crud-database";
import { validElement, valImage } from "../../scripts/formValidation";
import Dropdown from "../shared/Dropdown";
import FormSubmit from "../shared/FormSubmit";
import FormDish from "./FormDish";
import FormCategory from "./FormCategory";
import UploadImage from "../shared/UploadImage";

export default function Create({ categories, onRefresh }) {
  //Hooks
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  //Const
  const newCategory = {
    title: title.toLowerCase(),
    description: description,
  };
  const newDish = {
    ...newCategory,
    ingredients: ingredients,
    price: parseInt(price),
    categoryID: category.id,
  };
  const isCategorySelected = category !== "";
  const isBytes = typeof image === "object";
  const isElementValid = validElement(newDish, categories);
  //Methods
  function handleUpload(event) {
    event.preventDefault();
    if (!isCategorySelected) {
      createCategory(newCategory, isBytes ? image : imageURL);
    } else {
      createDish(newDish, isBytes ? image : imageURL);
    }
  }
  return (
    <section className="section-admin">
      <h2>Create {isCategorySelected ? "Dish" : "Category"}</h2>
      <div className="drop-container">
        <Dropdown
          items={categories}
          hook={[category, setCategory]}
          onRefresh={onRefresh}
        >
          Category ( optional )
        </Dropdown>
      </div>
      <form onSubmit={handleUpload}>
        <p className="admin-instructions">
          - (optional) In case you want to create a dish , first select a
          category <br />- Otherwise fill all fields to create a category
          <br />- All fields are required
        </p>
        <FormCategory
          hookTitle={[title, setTitle]}
          hookDescription={[description, setDescription]}
          isValid={isElementValid}
        />
        {isCategorySelected && (
          <FormDish
            hookIng={[ingredients, setIngredients]}
            hookPrice={[price, setPrice]}
            isValid={isElementValid}
          />
        )}
        <UploadImage setImage={setImage} setImageURL={setImageURL} />
        <FormSubmit
          isAllValid={
            isCategorySelected
              ? isElementValid.dish && valImage(image, imageURL)
              : isElementValid.category && valImage(image, imageURL)
          }
        />
      </form>
    </section>
  );
}
