import { useState } from "react";

export default function Form({ items, onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc) return;
    const newItem = {
      id: Date.now(),
      quantity: quantity,
      desc: desc,
      packed: false,
    };
    onAddItem(newItem);
    setQuantity(1);
    setDesc("");
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        {/* Select item quantity */}
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {/* Generate an array of options */}
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1}>{index + 1}</option>
          ))}
        </select>

        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Item"
          required
        />

        <button type="submit">Add item</button>
      </form>
    </div>
  );
}
