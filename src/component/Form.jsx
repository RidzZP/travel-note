import React, { useState } from "react";

const Form = ({ onAddData }) => {
  // membuat sebuah state untuk menampung value dari input
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // handle submit menampung value dari state
  function handleSubmit(e) {
    // digunakan agar saat submit tidak refresh/reload
    e.preventDefault();

    // jika input deskripsi kosong maka jangan kirimkan apa apa
    if (!description) return;

    // menampung data dari state
    const newItem = { id: Date.now(), description, quantity, packed: false };

    // mengatur state setelah data ditampung
    setDescription("");
    setQuantity(1);

    // mengirimkan hasil tampungan data ke props onAddData yang akan diterima oleh parent component
    onAddData(newItem);

    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for yout trip</h3>
      {/* deklarasikan state untuk value */}
      {/* onchange diperlukan untuk menerima perubahan pada input dari user seperti mengetik sebuah value pada input */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* generate angka sebanyak 20 kali dan disimpan dalam bentuk array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* tidak perlu mendeklarasikan onClick atau semacamnya untuk menjalankan fungsi tambah karna element form akan menambahkan data jika user mengklik button atau menekan key enter */}
      <button>Add</button>
    </form>
  );
};

export default Form;
