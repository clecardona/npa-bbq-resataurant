import { useState } from "react";
import DropdownItem from "./DropdownItem";
import down from "../../assets/icns/down.svg";

export default function Dropdown({ items, hook }) {
  const [isOpen, setIsOpen] = useState(false);

  const [itemSelected, setItemSelected] = hook;
  const Categories = items.map((item) => {
    return (
      <DropdownItem
        key={item.id}
        onClick={() => {
          setItemSelected(item);
          setIsOpen(false);
        }}
      >
        {item.title}
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
        <h4>{itemSelected === "" ? "Select Category" : itemSelected.title} </h4>
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
