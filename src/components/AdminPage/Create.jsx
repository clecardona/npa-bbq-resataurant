//NPM Packages
import { useState } from "react";

import form from "../../assets/form.json";
import { createCategory, createDish } from "../../scripts/crud-database";
import {
  valTitle,
  valDescr,
  valPrice,
  valIng,
  valImage,
  isCategoryValid,
} from "../../scripts/formValidation";

import Dropdown from "../shared/Dropdown";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import UploadImage from "../shared/UploadImage";

export default function Create({ categories }) {
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

  const newCategory = {
    title: title.toLowerCase(),
    description: description,
  };

  const newDish = {
    title: title.toLowerCase(),
    description: description,
    ingredients: ingredients,
    price: parseInt(price),
    categoryID: category.id,
  };

  //Methods
  //useReducer refactor
  function handleUpload(event) {
    event.preventDefault();

    if (!isCategorySelected) {
      if (typeof image === "object") {
        createCategory(newCategory, image);
      } else {
        createCategory(newCategory, imageURL);
      }
      alert(newCategory.title + " successfully added to categories ");
    } else {
      if (typeof image === "object") {
        createDish(newDish, image);
      } else {
        createDish(newDish, imageURL);
      }
      alert(
        newDish.title + " successfully added to category " + category.title
      );
    }
  }

  return (
    <section className="section-admin">
      <h2>Create {isCategorySelected ? "Dish" : "Category"}</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]}>
          Category
        </Dropdown>
      </div>
      <form onSubmit={handleUpload}>
        <p className="admin-instructions">
          - (optional) If you want to create a dish , select a category <br />-
          Otherwise fill all fields to create a category
          <br />- All fields are required
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
        {isCategorySelected && (
          <>
            <FormItem
              settings={form.ingredients.settings}
              hook={[
                ingredients.join(" "),
                (str) => {
                  setIngredients(str.split(" "));
                },
              ]}
              isValid={valIng(ingredients)}
            />
            <FormItem
              settings={form.price.settings}
              hook={[price, setPrice]}
              isValid={valPrice(price)}
            />
          </>
        )}
        <UploadImage setImage={setImage} setImageURL={setImageURL}>
          Upload New dish image
        </UploadImage>

        <FormSubmit
          isAllValid={
            !isCategorySelected
              ? isCategoryValid(newCategory, categories) &&
                valImage(image, imageURL)
              : valIng(ingredients) &&
                valPrice(price) &&
                valTitle(title, categories) &&
                valDescr(description) &&
                valImage(image, imageURL)
          }
        />
      </form>
    </section>
  );
}
