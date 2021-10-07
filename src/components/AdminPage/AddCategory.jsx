import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";
import { addCategory } from "../../scripts/foodMethods";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
        <div className="add">
          <label>
            +
            <input
              type="file"
              className="btn-circle"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <h4>Select Category image</h4>
        </div>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
