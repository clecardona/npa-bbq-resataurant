import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";
import Dropdown from "../shared/Dropdown";

import { createDoc } from "../../scripts/fireStore";

export default function AddMeal({ categories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState(
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
  );
  const [ingredients, setIngredients] = useState([]);

  function addMeal(event, catName, catDescription, catImageURL) {
    // add the meal to firestore db
    event.preventdefault();
    alert("title:" + title + "/n  description: " + description);
    //return null;
  }
  return (
    <section className="section-admin">
      <h2>Add new Meal</h2>
      <form
        onSubmit={(event, name, description, imageURL) =>
          addMeal(event, name, description, imageURL)
        }
      >
        <Dropdown categories={categories} />

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
        <FormItem
          settings={form[6].settings}
          hook={[ingredients, setIngredients]}
          isValid={true}
        />

        <div className="add">
          <input type="file" className="btn-circle" />
          <h3>Select Meal image</h3>
        </div>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
