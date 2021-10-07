import { useState } from "react";
import DropdownItem from "./DropdownItem";
import down from "../../assets/icns/down.svg";

export default function Dropdown({ categories, handleClick, category }) {
  const [isOpen, setIsOpen] = useState(false);
  const Categories = categories.map((item) => {
    return (
      <DropdownItem
        key={item.id}
        onClick={() => {
          handleClick(item.name);
          setIsOpen(false);
        }}
      >
        {item.name}
      </DropdownItem>
    );
  });
  console.log(category);
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn select-ghost"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h4>{category.length === 0 ? "Select Category" : category} </h4>

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
