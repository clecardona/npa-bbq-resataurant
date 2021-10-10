//NPN Packages
import { useState } from "react";

import form from "../../assets/form.json";
import { createDishBytes, createDishURL } from "../../scripts/crud-database";
import {
  validateTitle,
  validateDescr,
  validatePrice,
} from "../../scripts/formValidation";

import Dropdown from "../shared/Dropdown";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import UploadImage from "../shared/UploadImage";

export default function CreateDish({ categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Const
  const isCategorySelected = category !== "";
  const isTitleValid = validateTitle(title, categories);
  const isDescriptionValid = validateDescr(description);
  const areIngValid = ingredients.length > 0;
  const isPriceValid = validatePrice(price);
  const isImageValid = imageURL.trim().length > 12 || typeof image === "object";

  const isAllValid =
    isTitleValid &&
    isDescriptionValid &&
    isImageValid &&
    areIngValid &&
    isPriceValid &&
    isCategorySelected;

  const dish = {
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
      createDishBytes(dish, image);
    } else {
      createDishURL(dish, imageURL);
    }
    alert(dish.title + " successfully added to category " + category.title);
  }

  return (
    <section className="section-admin">
      <h2>Create Dish</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]} />
      </div>
      <form onSubmit={handleUpload}>
        <p className="admin-instructions">
          1. Select a category <br />
          2. Fill all fields
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
          Upload New dish image
        </UploadImage>

        <FormSubmit isAllValid={isAllValid} />
      </form>
    </section>
  );
}
