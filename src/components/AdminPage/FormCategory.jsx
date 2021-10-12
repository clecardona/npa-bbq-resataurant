import FormItem from "../shared/FormItem";
import form from "../../assets/form.json";

export default function FormCategory({ hookTitle, hookDescription, isValid }) {
  const [title, setTitle] = hookTitle;
  const [description, setDescription] = hookDescription;
  return (
    <>
      <FormItem
        settings={form.title.settings}
        hook={[title, setTitle]}
        isValid={isValid.title}
      />
      <FormItem
        settings={form.description.settings}
        hook={[description, setDescription]}
        isValid={isValid.description}
      />
    </>
  );
}
