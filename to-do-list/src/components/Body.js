import React from "react";

export default function Body() {
  const [items, setItems] = React.useState([]);

  function handleClick() {
    const newItems = `Note ${items.length + 1}`;
    setItems((prevItems) => [...prevItems, newItems]);
  }

  const itemsElements = items.map((item) => <li className="item">{item}</li>);

  return (
    <div>
      <button className="new--item" onClick={handleClick}>
        New Note +{" "}
      </button>
      <ul>{itemsElements}</ul>
    </div>
  );
}
