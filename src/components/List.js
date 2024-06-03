import { useState } from "react";

// components
import Listitems from "./Listitems";

export default function List({ items, deleteItem, onToggleItem, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list-container">
      <ul>
        <Listitems
          items={sortedItems}
          deleteItem={deleteItem}
          onToggleItem={onToggleItem}
        />
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
}
