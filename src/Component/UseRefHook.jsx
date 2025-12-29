import React, { useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef();
  const foucsinput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter data" ref={inputRef} />
        <button onClick={foucsinput}>Focus input</button>
      </div>
    </div>
  );
}
