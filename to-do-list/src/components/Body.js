import React from "react";

export default function Body() {
  const [items, setItems] = React.useState([]);
  const [formData, setFormData] = React.useState({
    item: "",
  });

  function handleClick() {
    const newItems = `${formData}`;
    setItems((prevItems) => [...prevItems, newItems]);
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const itemsElements = items.map((item) => <li className="item">{items}</li>);

  return (
    <div>
      <button className="new--item" onClick={handleClick}>
        New Note +
      </button>
      <input
        type="text"
        placeholder="Insert errand here"
        className="item"
        name="item"
        value={formData.item}
        onChange={handleChange}
      ></input>
      <ul>{itemsElements}</ul>
    </div>
  );
}
