import { useState } from "react";
import "./index.css";
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";

const dataItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

// Ini adalah parent component
export default function App() {
  // melakukan setState di parent component karna dibutuhkan oleh sibling component
  const [items, setItems] = useState([]);

  // fungsi menambahkan. menerima parameter(item) dari handleSubmit(Form Component) lalu membuat sebuah callback untuk menyimpan kedalam state items
  function addDataItems(item) {
    // menambahkan item yang diambil dari handleSubmit ke dalam state items
    setItems((items) => [...items, item]);
  }

  // fungsi menghapus menerima parameter(id) dari button delete yang sudah membaca itemObj.id
  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // fungsi toggle konsep menerima id yang sama seperti hapus
  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // clear all list item
  function handleClear() {
    const confirm = window.confirm("Clear All List");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      {/* mengirimkan props ke child component */}
      <Form onAddData={addDataItems} />
      <PackingList
        items={items}
        onDelete={deleteItems}
        onToggle={toggleItem}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
