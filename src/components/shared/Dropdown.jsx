import { useState } from "react";
import DropdownItem from "./DropdownItem";
import down from "../../assets/icns/down.svg";

export default function Dropdown({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  function handleClick(element) {
    setCategory(element);
    setIsOpen(false);
  }

  const Categories = categories.map((item) => {
    return (
      <DropdownItem onClick={() => handleClick(item.name)}>
        {item.name}
      </DropdownItem>
    );
  });

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn select-ghost"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h4>Select Category {category} </h4>

        <img src={down} alt="down" className="dropdown-arrow" />
      </button>

      {isOpen && (
        <div className="caret">
          <ul>{Categories}</ul>
        </div>
      )}
    </div>
  );
}
