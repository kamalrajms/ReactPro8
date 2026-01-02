import React, { useState, useEffect } from "react";

export default function UsecallbackList({ getItem }) {
  const [items, setItem] = useState([]);
  useEffect(() => {
    setItem(getItem());
    console.log("updating items");
  }, [getItem]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
