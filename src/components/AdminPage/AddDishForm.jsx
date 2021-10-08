import { useState } from "react";
import form from "../../assets/form.json";
import FormItem from "../shared/FormItem";
import FormSubmit from "../shared/FormSubmit";
import Dropdown from "../shared/Dropdown";
import { addDish } from "../../scripts/foodMethods";
import UploadImage from "../shared/UploadImage";

export default function AddDishForm({ categories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Methods
  function handleClick(element) {
    setCategory(element);
  }

  return (
    <section className="section-admin">
      <h2>Add new Dish</h2>
      <div className="drop-container">
        <Dropdown
          categories={categories}
          handleClick={handleClick}
          category={category}
        />
      </div>
      <form
        onSubmit={(event) =>
          addDish(
            event,
            title,
            description,
            image,
            category,
            ingredients,
            price
          )
        }
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
        <FormItem
          settings={form[6].settings}
          hook={[
            ingredients.join(" "),
            (str) => {
              const array = str.split(" ");
              setIngredients(array);
            },
          ]}
          isValid={true}
        />
        <FormItem
          settings={form[7].settings}
          hook={[price, setPrice]}
          isValid={true}
        />

        <UploadImage
          hookImage={[image, setImage]}
          hookImageURL={[imageURL, setImageURL]}
        >
          Upload New dish image
        </UploadImage>

        <FormSubmit isAllValid={true} />
      </form>
    </section>
  );
}
