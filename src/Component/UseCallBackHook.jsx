import React, { useState, useCallback } from "react";
import UsecallbackList from "./UsecallbackList";

export default function UseCallBackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  //   const getItem = () => {
  //     return [number, number + 1, number + 2, number + 3];
  //   };

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "30px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <UsecallbackList getItem={getItem} />
    </div>
  );
}
