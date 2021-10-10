//NPM packages
import { useState } from "react";

import form from "../../assets/form.json";
import { validateDescr, validateTitle } from "../../scripts/formValidation";
import { createCategory, createCategoryURL } from "../../scripts/crud-database";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import UploadImage from "../shared/UploadImage";

export default function CreateCategory({ categories }) {
  // Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  // Const
  const isTitleValid = validateTitle(title, categories);
  const isDescriptionValid = validateDescr(description);
  const isImageValid = imageURL.trim().length > 12 || typeof image === "object";
  const isAllValid = isTitleValid && isDescriptionValid && isImageValid;

  const category = {
    title: title.toLowerCase(),
    description: description,
  };

  //Methods
  function handleUpload(event) {
    event.preventDefault();
    if (typeof image === "object") {
      createCategory(category, image);
    } else {
      createCategoryURL(category, imageURL);
    }
  }

  return (
    <section className="section-admin">
      <h2>Create Category</h2>
      <form className="form-admin" onSubmit={handleUpload}>
        <p className="admin-instructions">All fields are required</p>
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
        <UploadImage setImage={setImage} setImageURL={setImageURL}>
          Upload New category image
        </UploadImage>
        <FormSubmit isAllValid={isAllValid} />
      </form>
    </section>
  );
}
