import React, { useState } from "react";

export default function Body() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
  });

  React.useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setItems(JSON.parse(storedTasks));
    }
  }, []);

  function updateLocalStorage(updatedItems) {
    localStorage.setItem("tasks", JSON.stringify(updatedItems));
  }

  function handleClick() {
    if (formData.item.trim() !== "" && items.length < 6) {
      const newItems = [...items, formData.item];
      setItems(newItems);
      updateLocalStorage(newItems);
      setFormData({ item: "" });
    }
  }

  function handleChange(event) {
    setFormData({ item: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    updateLocalStorage(newItems);
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
