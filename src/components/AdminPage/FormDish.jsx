import FormItem from "../shared/FormItem";
import form from "../../assets/form.json";

export default function FormDish({ hookIng, hookPrice, isValid }) {
  const [ingredients, setIngredients] = hookIng;
  const [price, setPrice] = hookPrice;
  return (
    <>
      <FormItem
        settings={form.ingredients.settings}
        hook={[
          ingredients.join(" "),
          (str) => {
            setIngredients(str.split(" "));
          },
        ]}
        isValid={isValid.ingredients}
      />
      <FormItem
        settings={form.price.settings}
        hook={[price, setPrice]}
        isValid={isValid.price}
      />
    </>
  );
}
