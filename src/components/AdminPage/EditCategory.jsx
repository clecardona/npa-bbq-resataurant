//NPM Packages
import { useState } from "react";

import form from "../../assets/form.json";
import {
  updateCategoryBytes,
  updateCategoryURL,
  deleteCategory,
} from "../../scripts/crud-database";
import UploadImage from "../shared/UploadImage";
import {
  validateDescription,
  validateTitle,
} from "../../scripts/formValidation";
import Dropdown from "../shared/Dropdown";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";

export default function EditCategory({ categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Const
  const isButtonDisabled = category === "";
  const isTitleValid = validateTitle(title, categories);
  const isDescriptionValid = validateDescription(description);
  const isImageValid = imageURL.trim().length > 12 || typeof image === "object";
  const isAllValid = isTitleValid && isDescriptionValid && isImageValid;

  const newData = { title: title.toLowerCase(), description: description };

  //Methods
  function handleDeleteCategory() {
    if (
      window.confirm(
        "Are you sure you want to delete category " + category.title + " ?"
      )
    ) {
      deleteCategory(category.id);
      alert("Category " + category.title + " successfully deleted");
    }
  }

  function handleUploadCategory(event) {
    event.preventDefault();

    if (typeof image === "object") {
      updateCategoryBytes(newData, image, category);
    } else {
      console.log("boom");
      updateCategoryURL(newData, imageURL, category);
    }
  }

  return (
    <section className="section-admin">
      <h2> Edit Category</h2>
      <div className="drop-container">
        <Dropdown
          categories={categories}
          handleClick={setCategory}
          category={category}
        />
      </div>

      <form onSubmit={handleUploadCategory}>
        <h3 className="admin-subtitle">Update Category</h3>
        <p className="admin-instructions">
          1. Select a category <br />
          2. Fill the field(s) you want to modify/update
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
        <UploadImage
          hookImage={[image, setImage]}
          hookImageURL={[imageURL, setImageURL]}
        >
          Upload New image
        </UploadImage>
        <FormSubmit isAllValid={isAllValid} />
      </form>
      <form>
        <h3 className="admin-subtitle">Delete Category</h3>
        <p className="admin-instructions">
          1. Select a category <br />
          2. Click on "delete" button
        </p>
        <button
          className="btn btn-main"
          disabled={isButtonDisabled}
          onClick={handleDeleteCategory}
        >
          <h4> Delete Category {category.title}</h4>
        </button>
      </form>
    </section>
  );
}
