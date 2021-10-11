import { useState } from "react";
import form from "../../assets/form.json";
import { valDate, valTime } from "../../scripts/formValidation";
import FormItem from "../../components/shared/FormItem";
import FormSubmit from "../../components/shared/FormSubmit";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const isNameValid = fullName.trim().length > 3;
  const isEmailValid = email.length > 3;
  const isDateValid = valDate(date);
  const isTimeValid = valTime(time);
  const isAllValid = isNameValid && isEmailValid && isDateValid && isTimeValid;
  function confirmReservation() {
    alert(
      `Thank you ${fullName}(${email})\n\nYour reservation request:  \n- ${date} \n- ${time} \n\nhas been succesfully sent`
    );
  }
  return (
    <section className="section-form_contact">
      <h2>Book a table</h2>
      <form onSubmit={confirmReservation}>
        <FormItem
          settings={form.fullname.settings}
          hook={[fullName, setFullName]}
          isValid={isNameValid}
        />
        <FormItem
          settings={form.email.settings}
          hook={[email, setEmail]}
          isValid={isEmailValid}
        />
        <FormItem
          settings={form.date.settings}
          hook={[date, setDate]}
          isValid={isDateValid}
        />
        <FormItem
          settings={form.time.settings}
          hook={[time, setTime]}
          isValid={isTimeValid}
        />
        <FormSubmit isAllValid={isAllValid} />
      </form>
    </section>
  );
}
