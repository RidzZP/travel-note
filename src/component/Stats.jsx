import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return <footer className="stats">tambahkan beberapa item</footer>;

  const totalItem = items.length;
  const packeditem = items.filter((item) => item.packed).length;
  const percent = Math.round((packeditem / totalItem) * 100);

  return (
    <footer className="stats">
      {percent !== 100 ? (
        <em>
          You have {totalItem} items on your list, and your already packed{" "}
          {packeditem} ({percent}%)
        </em>
      ) : (
        <em>Siap berangkattttt</em>
      )}
    </footer>
  );
};

export default Stats;
