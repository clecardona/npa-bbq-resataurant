//NPM Packages
import { useState } from "react";

import form from "../../assets/form.json";
import { updateCategory, updateCategoryURL } from "../../scripts/crud-database";
import { validateDescr, validateTitle } from "../../scripts/formValidation";
import Dropdown from "../shared/Dropdown";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import DeleteSection from "./DeleteSection";
import UploadImage from "../shared/UploadImage";

export default function EditCategory({ categories }) {
  //Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Const
  const isTitleValid = validateTitle(title, categories);
  const isDescriptionValid = validateDescr(description);
  const newData = { title: title.toLowerCase(), description: description };

  //Methods
  function handleUpload(event) {
    event.preventDefault();
    if (typeof image === "object") {
      updateCategory(newData, image, category);
    } else {
      updateCategoryURL(newData, imageURL, category);
    }
  }

  return (
    <section className="section-admin">
      <h2> Edit Category</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]} />
      </div>
      <form onSubmit={handleUpload}>
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
        <FormSubmit isAllValid={category !== ""} />
      </form>
      <DeleteSection element={category} />
    </section>
  );
}
