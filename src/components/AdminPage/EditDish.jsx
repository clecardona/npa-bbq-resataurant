//NPM Packages
import { useState } from "react";

import form from "../../assets/form.json";
import { updateDish, updateDishURL } from "../../scripts/crud-database";
import {
  validateDescr,
  validateTitle,
  validatePrice,
} from "../../scripts/formValidation";
import { getRelatedFood } from "../../scripts/foodMethods";
import Dropdown from "../shared/Dropdown";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import DeleteSection from "./DeleteSection";
import UploadImage from "../shared/UploadImage";

export default function EditDish({ categories, dishes }) {
  //Hooks
  const [category, setCategory] = useState("");
  const [dish, setDish] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Const
  const relatedDishes = getRelatedFood(dishes, category.id);

  const isTitleValid = validateTitle(title, categories);
  const isDescriptionValid = validateDescr(description);
  const areIngValid = ingredients.length > 0;
  const isPriceValid = validatePrice(price);

  const newData = {
    title: title.toLowerCase(),
    description: description,
    ingredients: ingredients,
    price: parseInt(price),
    category: category.id,
  };

  //Methods
  function handleUpload(event) {
    event.preventDefault();
    if (typeof image === "object") {
      updateDish(newData, image, dish);
    } else {
      updateDishURL(newData, imageURL, dish);
    }
  }

  return (
    <section className="section-admin">
      <h2> Edit Dish</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]}>
          Category
        </Dropdown>
        <Dropdown items={relatedDishes} hook={[dish, setDish]}>
          Dish
        </Dropdown>
      </div>

      <form onSubmit={handleUpload}>
        <h3 className="admin-subtitle">Update Dish</h3>
        <p className="admin-instructions">
          1. Select a category <br />
          2. Select a dish that belongs to the category <br />
          3. Fill the field(s) you want to modify/update
        </p>
        <FormItem
          settings={form[4].settings}
          hook={[title, setTitle]}
          isValid={isTitleValid}
        />
        <FormItem
          settings={form[5].settings}
          hook={[description, setDescription]}
          isValid={isDescriptionValid}
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
          isValid={areIngValid}
        />
        <FormItem
          settings={form[7].settings}
          hook={[price, setPrice]}
          isValid={isPriceValid}
        />
        <UploadImage setImage={setImage} setImageURL={setImageURL}>
          Upload New image
        </UploadImage>
        <FormSubmit isAllValid={category !== ""} />
      </form>
      <DeleteSection element={dish}>Delete Dish</DeleteSection>
    </section>
  );
}
