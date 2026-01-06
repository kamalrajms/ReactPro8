import React, { useId } from "react";

export default function UseIdHook() {
  const name = useId();
  const email = useId();
  console.log(name, email);

  return (
    <div>
      <div>
        <label htmlFor={`${name}-input`}>Name</label>
        <input type="text" id={`${name}-input`} />
      </div>
      <div>
        <label htmlFor={email}>Name</label>
        <input type="text" id={email} />
      </div>
    </div>
  );
}
