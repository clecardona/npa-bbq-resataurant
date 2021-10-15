import { useState } from "react";
import DropdownItem from "./DropdownItem";
import down from "../../assets/icns/down.svg";

export default function Dropdown({ items, hook, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = hook;
  const ListItems = items.map((item) => {
    return (
      <DropdownItem key={item.id} onClick={() => onSelect(item)}>
        {item.title}
      </DropdownItem>
    );
  });

  function onSelect(item) {
    setItemSelected(item);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn select-ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4>
          {itemSelected === "" ? `Select ${children}` : itemSelected.title}{" "}
        </h4>
        <img src={down} alt="down" className="dropdown-arrow" />
      </button>

      {isOpen && (
        <div className="caret">
          {items.length === 0 && (
            <p className="dropdown-item">no elements found</p>
          )}
          <ul>
            <DropdownItem onClick={() => onSelect("")}>
              " remove selection "
            </DropdownItem>
            {ListItems}
          </ul>
        </div>
      )}
    </div>
  );
}
