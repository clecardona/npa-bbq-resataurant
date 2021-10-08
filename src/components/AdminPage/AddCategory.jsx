import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";
import { addCategory } from "../../scripts/foodMethods";
import UploadImage from "../shared/UploadImage";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <section className="section-admin">
      <h2>Add new Category</h2>
      <form
        className="form-admin"
        onSubmit={(event) => {
          addCategory(event, title, description, image);
        }}
      >
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
          Upload New category image
        </UploadImage>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
