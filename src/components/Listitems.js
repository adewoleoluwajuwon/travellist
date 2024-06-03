export default function Listitems({ items, deleteItem, onToggleItem }) {
  return (
    <div className="listitem-container">
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            textDecoration: item.packed ? "line-through" : "none",
          }}>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
          {item.quantity} {""} {item.desc}
          <button onClick={() => deleteItem(item.id)}>❌</button>
        </li>
      ))}
    </div>
  );
}
