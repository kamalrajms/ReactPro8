import React, { useState } from "react";

export default function FieldInput() {
  // eg1
  const [name, setName] = useState("hari");
  console.log(name);
  //eg2
  const [isChecked, setISChecked] = useState(false);
  console.log(isChecked);

  return (
    <div>
      {/* eg1 */}
      <h2>Controlled input</h2>
      <input
        type="text"
        placeholder="enter data"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* eg2 */}
      <h2>Conrolled check box</h2>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setISChecked(e.target.checked)}
      />
      <label htmlFor="">checkbox</label>
    </div>
  );
}
