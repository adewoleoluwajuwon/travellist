import "./index.css";
import { useState } from "react";
//components
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearAll = () => {
    setItems([]);
  };
  return (
    <div className="App">
      <Logo />
      <Form items={items} onAddItem={addItem} />
      <List
        items={items}
        deleteItem={handleDelete}
        onToggleItem={handleToggleItem}
        onClear={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
