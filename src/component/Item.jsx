import React from "react";

const Item = ({ itemObj, onDelete, onToggle }) => {
  return (
    <li>
      {/* setelah menerima onToggle dan menajalankan fungsi nya maka
        item.Obj.packed pada kolom packed akan terupdate menjadi true/false */}
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggle(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      {/* setelah menerima onDelete dari parent ambil id dari itemObj agar dapat memfungsikan delete berdasarkan ID */}
      <button onClick={() => onDelete(itemObj.id)}>❌</button>
    </li>
  );
};

export default Item;
