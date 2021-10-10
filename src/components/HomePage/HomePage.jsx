import ButtonForward from "../shared/ButtonForward";
import { NavLink } from "react-router-dom";
import caravan from "../../assets/img/caravan.svg";

export default function HomePage() {
  const bgURL =
    "https://images.unsplash.com/photo-1496483353456-90997957cf99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80";
  return (
    <main>
      <section className="section-hero">
        <img className="hero" src={bgURL} alt="bg" />
        <div className="wrapper">
          <h1>YETI BBQ</h1>
          <h3>Because meat matters</h3>
          <img className="illustration" src={caravan} alt="" />
          <NavLink to="/menu" className="btn btn-ghost btn-300">
            <ButtonForward label="View Menu" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
