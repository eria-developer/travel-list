import React from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
  { id: 4, description: "Snacks", quantity: 10, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  // contains code for the logo and the large text
  return (
    <div>
      <h1>Going For Holiday</h1>
    </div>
  );
}

function Form() {
  // contains code for the form which is just below the logo

  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Write something...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <div>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          <span style={{ paddingLeft: "5px" }}>{item.description}</span>
        </span>
        <span>
          <button style={{ color: "red" }}>&times;</button>
        </span>
      </li>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X</em>
    </footer>
  );
}
