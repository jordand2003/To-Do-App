import React, { useState } from "react";

export default function Body() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
  });

  function handleClick() {
    if (formData.item.trim() !== "" && items.length < 6) {
      // Check if the input is not empty
      setItems((prevItems) => [...prevItems, formData.item]);
      setFormData({ item: "" }); // Clear the input field
    }
  }

  function handleChange(event) {
    setFormData({ item: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function deleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  const itemsElements = items.map((item) => (
    <li className="item">
      {item}{" "}
      <button className="delete--button" onClick={deleteItem}>
        Complete
      </button>
    </li>
  ));

  return (
    <div>
      <button className="new--item" onClick={handleClick}>
        Add +
      </button>
      <input
        type="text"
        placeholder="Insert errand here. (6 Items Max)"
        className="item"
        name="item"
        value={formData.item}
        onChange={handleChange}
      />
      <ul>{itemsElements}</ul>
      <p className="bottom">Remaining Tasks: {items.length}</p>
    </div>
  );
}
