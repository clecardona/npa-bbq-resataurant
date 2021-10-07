import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";
import { createDoc } from "../../scripts/fireStore";

export default function AddCategory({ database }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState(
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
  );

  //Methods

  function addCategory(event) {
    event.preventDefault();
    const newCategory = {
      id: Date.now(),
      name: name,
      description: description,
      imageURL: imageURL,
    };

    createDoc(database, "categories", newCategory);
  }

  function addImage(event) {
    // add the category to firestore db
    //return null;
  }

  return (
    <section className="section-admin">
      <h2>Add new Category</h2>
      <form
        className="form-admin"
        onSubmit={(event, name, description, imageURL) =>
          addCategory(event, name, description, imageURL)
        }
      >
        <FormItem
          settings={form[4].settings}
          hook={[name, setName]}
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
            <input type="file" className="btn-circle" />
          </label>
          <h4>Select Category image</h4>
        </div>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
