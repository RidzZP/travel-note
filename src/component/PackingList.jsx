import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDelete, onToggle, handleClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* menerima props onDelete da onToggle dari parent untuk dikirimkan kembali ke child component Item */}
        {sortedItem.map((item) => (
          <Item
            itemObj={item}
            onDelete={onDelete}
            onToggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>

        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
