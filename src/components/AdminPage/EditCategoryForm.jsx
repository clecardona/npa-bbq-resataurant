import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import Dropdown from "../shared/Dropdown";
import { updateCategory, deleteCategory } from "../../scripts/foodMethods";
import UploadImage from "../shared/UploadImage";

export default function EditCategoryForm({ categories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const isButtonDisabled = category === "";
  //const isSubmitDisabled = (title && description && category && image) === "";

  //Methods
  function handleDeleteCategory() {
    if (
      window.confirm(
        "Are you sure you want to delete category " + category + " ?"
      )
    ) {
      deleteCategory(category.id);
      alert("Category " + category + " successfully deleted");
    }
  }

  function handleUpdateCategory(event) {
    updateCategory(event, title, description, image, category);
  }

  return (
    <section className="section-admin">
      <h2>Edit Category</h2>
      <div className="drop-container">
        <Dropdown
          categories={categories}
          handleClick={setCategory}
          category={category}
        />
      </div>

      <form className="form-admin" onSubmit={handleUpdateCategory}>
        <h3>Update Category</h3>
        <p>
          1. Select a category <br /> 2. Fill the field (s) you want to
          modify/update
        </p>
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
        <UploadImage
          hookImage={[image, setImage]}
          hookImageURL={[imageURL, setImageURL]}
        >
          Upload New image
        </UploadImage>
        <FormSubmit isAllValid={!isButtonDisabled} />
      </form>
      <form>
        <h3>Delete Category</h3>
        <p>
          1. Select a category <br /> 2. Click on "delete" button
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
