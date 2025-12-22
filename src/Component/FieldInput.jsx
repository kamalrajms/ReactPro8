import React, { useState } from "react";

export default function FieldInput() {
  const [name, setName] = useState("hari");
  console.log(name);

  return (
    <div>
      <h2>Controlled input</h2>
      <input
        type="text"
        placeholder="enter data"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
